// Weekly Dune refresh script — run by GitHub Actions, not shipped to the browser
import https from 'https';
import fs   from 'fs';

const KEY = process.env.DUNE_API_KEY;

function request(method, path, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(
      { hostname: 'api.dune.com', path, method,
        headers: { 'X-DUNE-API-KEY': KEY, 'Content-Type': 'application/json' } },
      res => { let d = ''; res.on('data', c => d += c); res.on('end', () => resolve(JSON.parse(d))); }
    );
    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function executeAndFetch(queryId) {
  console.log(`Executing query ${queryId}...`);
  const { execution_id } = await request('POST', `/api/v1/query/${queryId}/execute`, {});

  for (let i = 0; i < 24; i++) {
    await sleep(5000);
    const res = await request('GET', `/api/v1/execution/${execution_id}/results`);
    if (res.state === 'QUERY_STATE_COMPLETED') {
      console.log(`  done (${res.result.rows.length} rows)`);
      return res.result.rows;
    }
    if (res.state === 'QUERY_STATE_FAILED') throw new Error(`Query ${queryId} failed: ${res.error}`);
    console.log(`  waiting... ${res.state}`);
  }
  throw new Error(`Query ${queryId} timed out`);
}

const [overviewRows, distRows] = await Promise.all([
  executeAndFetch(7324384),
  executeAndFetch(7324387),
]);

const o       = overviewRows[0];
const claimed = distRows.find(r => r.category === 'Claimed by Users')             ?? {};
const unvested= distRows.find(r => r.category.startsWith('Vested'))               ?? {};
const locked  = distRows.find(r => r.category.startsWith('Still Locked'))         ?? {};

const vestedPct  = +(o.total_inx_vested_to_date * 100 / 500_000_000).toFixed(2);
const earlyAvg   = o.early_unlock_wallets > 0
  ? +(o.total_fees_usdc / o.early_unlock_wallets).toFixed(2) : 0;

const now = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

// Read current file to preserve SONAR_WALLETS and PATRON_VESTING (static data)
const current = fs.readFileSync('sonar-data.js', 'utf8');
const walletsMatch = current.match(/(const SONAR_WALLETS[\s\S]+?(?=\n\n|\/\/ Replace|const PATRON))/);
const patronMatch  = current.match(/(const PATRON_VESTING[\s\S]+)/);
const walletBlock  = walletsMatch ? walletsMatch[1].trim() : 'const SONAR_WALLETS = [];';
const patronBlock  = patronMatch  ? patronMatch[1].trim()  : 'const PATRON_VESTING = [];';

const lines = [
  '// Sonar Sale & Patron Vesting Data',
  '// Source: Dune Analytics — Auto-refreshed weekly via GitHub Actions',
  '// Q7324384 → SONAR_OVERVIEW   Q7324387 → SONAR_DISTRIBUTION',
  '',
  `const SONAR_LAST_UPDATED = "${now}";`,
  '',
  'const SONAR_OVERVIEW = {',
  `    participants:        ${o.total_participants},`,
  `    inx_allocated:       ${o.total_inx_allocated},`,
  `    inx_vested:          ${o.total_inx_vested_to_date},`,
  `    inx_vested_pct:      ${vestedPct},`,
  `    inx_claimed:         ${o.total_inx_claimed},`,
  `    inx_claimed_pct:     ${o.pct_total_allocation_claimed},`,
  `    inx_unclaimed:       ${unvested.inx_amount ?? 0},`,
  `    inx_locked:          ${locked.inx_amount ?? 0},`,
  `    inx_locked_pct:      ${locked.pct_of_total ?? 0},`,
  `    claimants:           ${o.total_claimants},`,
  `    early_unlock_fees:   ${o.total_fees_usdc},`,
  `    early_unlock_avg:    ${earlyAvg}`,
  '};',
  '',
  'const SONAR_DISTRIBUTION = [',
  `    { label: "Claimed",          value: ${claimed.inx_amount ?? 0},  pct: ${claimed.pct_of_total ?? 0}, color: "#F76B1C" },`,
  `    { label: "Vested Unclaimed", value: ${unvested.inx_amount ?? 0},  pct: ${unvested.pct_of_total ?? 0},  color: "#ff9a4d" },`,
  `    { label: "Still Locked",     value: ${locked.inx_amount ?? 0}, pct: ${locked.pct_of_total ?? 0}, color: "#1e1e1e"  }`,
  '];',
  '',
  walletBlock,
  '',
  patronBlock,
  '',
];

fs.writeFileSync('sonar-data.js', lines.join('\n'));
console.log('sonar-data.js updated successfully.');
