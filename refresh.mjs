// Weekly Dune refresh — uses GET /results (latest cached, no credits consumed, no polling)
import https from 'https';
import fs   from 'fs';

const KEY = process.env.DUNE_API_KEY;

function get(queryId) {
  return new Promise((resolve, reject) => {
    const req = https.request(
      { hostname: 'api.dune.com', path: `/api/v1/query/${queryId}/results`, method: 'GET',
        headers: { 'X-DUNE-API-KEY': KEY } },
      res => { let d = ''; res.on('data', c => d += c); res.on('end', () => resolve(JSON.parse(d))); }
    );
    req.on('error', reject);
    req.end();
  });
}

console.log('Fetching Q7324384 (overview) and Q7324387 (distribution)...');
const [r1, r2] = await Promise.all([get(7324384), get(7324387)]);

if (!r1.result?.rows?.length) throw new Error('Overview query returned no data');
if (!r2.result?.rows?.length) throw new Error('Distribution query returned no data');

const o     = r1.result.rows[0];
const dist  = r2.result.rows;

const claimed  = dist.find(r => r.category.includes('Claimed by Users'))  ?? {};
const unvested = dist.find(r => r.category.includes('Vested'))             ?? {};
const locked   = dist.find(r => r.category.includes('Still Locked'))      ?? {};

const vestedPct = +(o.total_inx_vested_to_date * 100 / 500_000_000).toFixed(2);
const earlyAvg  = o.early_unlock_wallets > 0
  ? +(o.total_fees_usdc / o.early_unlock_wallets).toFixed(2) : 0;

const now = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

// Preserve static SONAR_WALLETS and PATRON_VESTING blocks from existing file
const current      = fs.readFileSync('sonar-data.js', 'utf8');
const walletMatch  = current.match(/const SONAR_WALLETS\s*=\s*\[[\s\S]*?\];/);
const patronMatch  = current.match(/const PATRON_VESTING\s*=\s*\[[\s\S]*?\];/);
const walletBlock  = walletMatch ? walletMatch[0] : 'const SONAR_WALLETS = [];';
const patronBlock  = patronMatch ? patronMatch[0] : 'const PATRON_VESTING = [];';

const output = [
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
  `    { label: "Vested Unclaimed", value: ${unvested.inx_amount ?? 0}, pct: ${unvested.pct_of_total ?? 0}, color: "#ff9a4d" },`,
  `    { label: "Still Locked",     value: ${locked.inx_amount ?? 0},   pct: ${locked.pct_of_total ?? 0}, color: "#1e1e1e"  }`,
  '];',
  '',
  walletBlock,
  '',
  patronBlock,
  '',
].join('\n');

fs.writeFileSync('sonar-data.js', output);
console.log('sonar-data.js updated:', now);
