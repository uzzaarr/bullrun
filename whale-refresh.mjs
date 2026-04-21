// INX Whale Tracker — Etherscan V2 API
// Fetches last 5000 INX transfers, filters to 24h window, finds large ones
import https from 'https';
import fs   from 'fs';

const KEY           = process.env.ETHERSCAN_API_KEY;
const ARKHAM_KEY    = process.env.ARKHAM_API_KEY;
const CONTRACT      = '0xdeF1b2D939EdC0E4d35806c59b3166F790175afe';
const WHALE_THRESHOLD = 100_000;
const FETCH_LIMIT     = 5000;
const CUTOFF_24H      = Math.floor(Date.now() / 1000) - 86400;

// Known DEX routers / null address — used for buy/sell classification and exclusion
const EXCLUDE = new Set([
  '0x0000000000000000000000000000000000000000',
  '0x7a250d5630b4cf539739df2c5dacb4c659f2488d', // Uniswap V2 Router
  '0xe592427a0aece92de3edee1f18e0157c05861564', // Uniswap V3 Router
  '0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad', // Uniswap Universal Router
  '0x000000000004444c5dc75cb358380d2e3de08a90', // aggregator seen in data
]);

function get(url, headers = {}) {
  return new Promise((resolve, reject) => {
    const req = https.request(url, { headers }, res => {
      let d = '';
      res.on('data', c => d += c);
      res.on('end', () => {
        try { resolve(JSON.parse(d)); } catch { resolve(null); }
      });
    });
    req.on('error', reject);
    req.end();
  });
}

function toINX(raw) {
  return Number(BigInt(raw) / 10n ** 16n) / 100;
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

async function fetchLabel(address) {
  try {
    const data = await get(
      `https://api.arkhamintelligence.com/intelligence/address/${address}/all`,
      { 'API-Key': ARKHAM_KEY }
    );
    if (!data) { console.warn(`  Arkham: null response for ${address}`); return null; }
    if (data.code === 429 || data.statusCode === 429) { console.warn('  Arkham: rate limited (429)'); return null; }
    return data?.ethereum?.arkhamEntity?.id ?? null;
  } catch {
    return null;
  }
}

// ── Etherscan fetch ───────────────────────────────────────────────────────────
const url = `https://api.etherscan.io/v2/api?chainid=1&module=account&action=tokentx` +
  `&contractaddress=${CONTRACT}&page=1&offset=${FETCH_LIMIT}&sort=desc&apikey=${KEY}`;

console.log(`Fetching last ${FETCH_LIMIT} INX transfers from Etherscan...`);
const res = await get(url);

if (!res) throw new Error('Etherscan: empty or non-JSON response');
if (res.status !== '1') throw new Error('Etherscan: ' + res.result);

const allTxs = res.result;
const txs    = allTxs.filter(tx => parseInt(tx.timeStamp) >= CUTOFF_24H);
console.log(`Got ${allTxs.length} transfers, ${txs.length} in last 24h`);

const largeTxs  = [];
const walletMap = new Map();

for (const tx of txs) {
  const amount = toINX(tx.value);
  const from   = tx.from.toLowerCase();
  const to     = tx.to.toLowerCase();

  if (amount >= WHALE_THRESHOLD) {
    // Classify: if tokens flow FROM a DEX → wallet received (buy); TO a DEX → sell
    const type = EXCLUDE.has(from) ? 'buy' : EXCLUDE.has(to) ? 'sell' : 'transfer';
    largeTxs.push({
      hash:   tx.hash,
      ts:     parseInt(tx.timeStamp),
      from:   tx.from,
      to:     tx.to,
      amount: Math.round(amount),
      block:  parseInt(tx.blockNumber),
      type,
    });
  }

  if (!EXCLUDE.has(from)) {
    const w = walletMap.get(from) || { received: 0, sent: 0, txs: 0 };
    w.sent += amount;
    w.txs++;
    walletMap.set(from, w);
  }
  if (!EXCLUDE.has(to)) {
    const w = walletMap.get(to) || { received: 0, sent: 0, txs: 0 };
    w.received += amount;
    w.txs++;
    walletMap.set(to, w);
  }
}

const accumulators = Array.from(walletMap.entries())
  .map(([wallet, d]) => ({
    wallet,
    net:      Math.round(d.received - d.sent),
    received: Math.round(d.received),
    sent:     Math.round(d.sent),
    txs:      d.txs,
  }))
  .filter(w => w.received > 0)
  .sort((a, b) => b.net - a.net)
  .slice(0, 50);

// ── Arkham label lookups ──────────────────────────────────────────────────────
const labels = {};
if (ARKHAM_KEY) {
  const addrSet = new Set();
  for (const w of accumulators) addrSet.add(w.wallet.toLowerCase());
  for (const t of largeTxs) {
    addrSet.add(t.from.toLowerCase());
    addrSet.add(t.to.toLowerCase());
  }
  for (const dex of EXCLUDE) addrSet.delete(dex);

  const addrs = Array.from(addrSet);
  console.log(`Looking up ${addrs.length} addresses on Arkham...`);
  for (const addr of addrs) {
    const label = await fetchLabel(addr);
    if (label) {
      labels[addr] = label;
      console.log(`  ${addr} → ${label}`);
    }
    await sleep(1100);
  }
  console.log(`Arkham: found ${Object.keys(labels).length} labels`);
} else {
  console.log('No ARKHAM_API_KEY — skipping label lookup');
}

// ── Write output ──────────────────────────────────────────────────────────────
const now        = new Date().toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName: 'short' });
const biggestTx  = largeTxs.length ? largeTxs.reduce((a, b) => b.amount > a.amount ? b : a) : null;
const totalWhale = largeTxs.reduce((s, t) => s + t.amount, 0);

const labelEntries = Object.entries(labels)
  .map(([addr, name]) => `    "${addr}": "${name.replace(/"/g, '\\"')}"`)
  .join(',\n');

const output = [
  '// INX Whale Tracker Data',
  '// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions',
  `// Whale threshold: ${WHALE_THRESHOLD.toLocaleString()} INX | Last 24h window`,
  '',
  `const WHALE_LAST_UPDATED      = "${now}";`,
  `const WHALE_THRESHOLD         = ${WHALE_THRESHOLD};`,
  `const WHALE_TRANSFERS_SCANNED = ${txs.length};`,
  `const WHALE_TOTAL_VOLUME      = ${Math.round(totalWhale)};`,
  `const WHALE_BIGGEST_SINGLE    = ${biggestTx ? biggestTx.amount : 0};`,
  '',
  'const WHALE_TRANSFERS = [',
  largeTxs.map(t =>
    `    { hash: "${t.hash}", ts: ${t.ts}, from: "${t.from}", to: "${t.to}", amount: ${t.amount}, block: ${t.block}, type: "${t.type}" }`
  ).join(',\n'),
  '];',
  '',
  'const WHALE_ACCUMULATORS = [',
  accumulators.map(w =>
    `    { wallet: "${w.wallet}", net: ${w.net}, received: ${w.received}, sent: ${w.sent}, txs: ${w.txs} }`
  ).join(',\n'),
  '];',
  '',
  'const WHALE_LABELS = {',
  labelEntries,
  '};',
  '',
].join('\n');

fs.writeFileSync('whale-data.js', output);
console.log(`Done — ${largeTxs.length} whale transfers | ${accumulators.length} wallets tracked`);
console.log(`Biggest single move: ${biggestTx ? biggestTx.amount.toLocaleString() : 0} INX`);
