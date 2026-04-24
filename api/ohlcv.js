const POOL = '0xdb66b18431f00e001867c67c6022c36205abec136381cd0d3fa58068ec88ace6';
const VALID_TF  = new Set(['minute', 'hour', 'day']);
const VALID_AGG = new Set(['1', '4', '5', '15']);

export default async function handler(req, res) {
    const tf  = VALID_TF.has(req.query.timeframe)  ? req.query.timeframe  : 'hour';
    const agg = VALID_AGG.has(req.query.aggregate) ? req.query.aggregate : '1';

    try {
        const r = await fetch(
            `https://api.geckoterminal.com/api/v2/networks/eth/pools/${POOL}/ohlcv/${tf}?aggregate=${agg}&limit=1000&token=quote`,
            { headers: { 'Accept': 'application/json;version=20230302' } }
        );
        if (!r.ok) throw new Error(`GeckoTerminal ${r.status}`);
        const data = await r.json();
        res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate=10');
        res.json(data);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}
