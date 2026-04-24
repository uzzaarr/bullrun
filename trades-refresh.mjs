// INX Chart Trade History — Etherscan V2 API
// Fetches all whale swaps (≥100K INX) since TGE (Jan 30 2026), classifies as buy/sell
import https from 'https';
import fs   from 'fs';

const KEY        = process.env.ETHERSCAN_API_KEY;
const CONTRACT   = '0xdeF1b2D939EdC0E4d35806c59b3166F790175afe';
const MIN_WHALE  = 100_000;
const TGE_TS     = 1_769_731_200; // Jan 30, 2026 00:00:00 UTC
const PAGE_SIZE  = 10_000;

// Known DEX routers/aggregators — from is router = buy (INX flowing to user), to is router = sell
const DEX = new Set([
  '0x7a250d5630b4cf539739df2c5dacb4c659f2488d', // Uniswap V2 Router
  '0xe592427a0aece92de3edee1f18e0157c05861564', // Uniswap V3 Router
  '0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad', // Uniswap Universal Router
  '0x000000000004444c5dc75cb358380d2e3de08a90', // Uniswap aggregator
  '0x1111111254eeb25477b68fb85ed929f73a960582', // 1inch v5
  '0x111111125421ca6dc452d289314280a0f8842a65', // 1inch v6
  '0xdef1c0ded9bec7f1a1670819833240f027b25eff', // 0x Exchange Proxy
  '0x6131b5fae19ea4f9d964eac0408e4408b66337b5', // Kyber Network
]);

function get(url) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => { try { resolve(JSON.parse(d)); } catch { resolve(null); } });
    });
    req.on('error', reject);
    req.end();
  });
}

function toINX(raw) {
  return Number(BigInt(raw) / 10n ** 16n) / 100;
}

const trades = [];
let page = 1;
let totalScanned = 0;

console.log(`Fetching INX whale swaps (≥${MIN_WHALE.toLocaleString()} INX) since TGE...`);

while (true) {
  const url = `https://api.etherscan.io/v2/api?chainid=1&module=account&action=tokentx` +
    `&contractaddress=${CONTRACT}&page=${page}&offset=${PAGE_SIZE}&sort=desc&apikey=${KEY}`;

  const res = await get(url);
  if (!res || res.status !== '1') {
    if (page === 1) throw new Error('Etherscan error: ' + (res?.result || 'empty response'));
    console.log('No more pages or API limit reached');
    break;
  }

  const txs = res.result;
  totalScanned += txs.length;
  console.log(`Page ${page}: ${txs.length} transfers (total scanned: ${totalScanned})`);

  let reachedTge = false;
  for (const tx of txs) {
    const ts = parseInt(tx.timeStamp);
    if (ts < TGE_TS) { reachedTge = true; break; }

    const amount = toINX(tx.value);
    if (amount < MIN_WHALE) continue;

    const from = tx.from.toLowerCase();
    const to   = tx.to.toLowerCase();

    let type;
    if (DEX.has(from))    type = 'buy';      // DEX/aggregator sent INX to user
    else if (DEX.has(to)) type = 'sell';     // User sent INX to DEX/aggregator
    else                  type = 'transfer'; // Direct transfer (pool→user, OTC, etc.)

    trades.push({ hash: tx.hash, ts, type, inx: Math.round(amount) });
  }

  if (reachedTge || txs.length < PAGE_SIZE) break;
  page++;
  await new Promise(r => setTimeout(r, 350)); // respect rate limit
}

// Deduplicate by tx hash — buy/sell beats transfer for the same tx
const TYPE_RANK = { buy: 2, sell: 2, transfer: 1 };
const deduped = new Map();
for (const t of trades) {
  const existing = deduped.get(t.hash);
  if (!existing || TYPE_RANK[t.type] > TYPE_RANK[existing.type]) {
    deduped.set(t.hash, t);
  }
}
const unique = [...deduped.values()];
unique.sort((a, b) => b.ts - a.ts); // newest first

const now = new Date().toLocaleString('en-US', {
  year: 'numeric', month: 'long', day: 'numeric',
  hour: '2-digit', minute: '2-digit', timeZoneName: 'short',
});

const output = [
  '// INX Whale Swap History',
  '// Source: Etherscan V2 — whale DEX swaps (≥100K INX) since TGE (Jan 30 2026)',
  `// Auto-refreshed every 6h via GitHub Actions | Updated: ${now}`,
  '',
  `const TRADES_LAST_UPDATED = "${now}";`,
  '',
  'const TRADES_HISTORY = [',
  unique.map(t =>
    `  { hash: "${t.hash}", ts: ${t.ts}, type: "${t.type}", inx: ${t.inx} }`
  ).join(',\n'),
  '];',
  '',
].join('\n');

fs.writeFileSync('trades-history.js', output);
console.log(`Done — ${unique.length} unique whale swaps (${trades.length} raw) | ${page} page(s) | ${totalScanned} total scanned`);
