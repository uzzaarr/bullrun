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

console.log('Fetching Q7324384 (overview), Q7324387 (distribution), Q7347201 (wallets), Q7347204 (patron vesting)...');
const [r1, r2, r3, r4] = await Promise.all([get(7324384), get(7324387), get(7347201), get(7347204)]);

if (!r1.result?.rows?.length) throw new Error('Overview query returned no data');
if (!r2.result?.rows?.length) throw new Error('Distribution query returned no data');
if (!r3.result?.rows?.length) throw new Error('Wallets query returned no data');
if (!r4.result?.rows?.length) throw new Error('Patron vesting query returned no data');

const o      = r1.result.rows[0];
const dist   = r2.result.rows;
const wallets  = r3.result.rows;
const patrons  = r4.result.rows;

const claimed  = dist.find(r => r.category.includes('Claimed by Users'))  ?? {};
const unvested = dist.find(r => r.category.includes('Vested'))             ?? {};
const locked   = dist.find(r => r.category.includes('Still Locked'))      ?? {};

const vestedPct = +(o.total_inx_vested_to_date * 100 / 500_000_000).toFixed(2);
const earlyAvg  = o.early_unlock_wallets > 0
  ? +(o.total_fees_usdc / o.early_unlock_wallets).toFixed(2) : 0;

const now = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const walletLines = wallets.map(r =>
  `    { wallet: "${r.wallet_address}", usdc_deposited: ${(+(r.total_deposited_usd||0)).toFixed(2)}, inx_allocated: ${Math.round(+(r.implied_inx_allocation||0))}, inx_claimed: ${Math.round(+(r.total_inx_claimed||0))}, early_unlock_fee: ${(+(r.total_fees_paid_usdc||0)).toFixed(2)}, inx_vested: ${Math.round(+(r.inx_vested_to_date||0))} }`
);

const patronLines = patrons.map(r =>
  `    { wallet: "${r.wallet_address}", nft_count: ${r.patron_nft_count}, inx_allocated: ${Math.round(+(r.total_inx_allocated||0))}, inx_claimed: ${Math.round(+(r.inx_claimed||0))}, locked_vested: ${Math.round(+(r.inx_vested_locked_schedule||0))}, linear_vested: ${Math.round(+(r.inx_vested_linear_schedule||0))} }`
);

const output = [
  '// Sonar Sale & Patron Vesting Data',
  '// Source: Dune Analytics — Auto-refreshed weekly via GitHub Actions',
  '// Q7324384 -> SONAR_OVERVIEW   Q7324387 -> SONAR_DISTRIBUTION',
  '// Q7347201 -> SONAR_WALLETS    Q7347204 -> PATRON_VESTING',
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
  'const SONAR_WALLETS = [',
  walletLines.join(',\n'),
  '];',
  '',
  'const PATRON_VESTING = [',
  patronLines.join(',\n'),
  '];',
  '',
].join('\n');

fs.writeFileSync('sonar-data.js', output);
console.log('sonar-data.js updated:', now);
