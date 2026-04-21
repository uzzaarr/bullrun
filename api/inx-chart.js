const CONTRACT = '0xdef1b2d939edc0e4d35806c59b3166f790175afe';
const HEADERS  = { 'Accept': 'application/json;version=20230302' };
const VALID_DAYS = new Set(['1', '7', '30', '90']);

export default async function handler(req, res) {
    const days = VALID_DAYS.has(req.query.days) ? Number(req.query.days) : 7;

    try {
        // Step 1: get top pool for INX
        const poolsRes = await fetch(
            `https://api.geckoterminal.com/api/v2/networks/eth/tokens/${CONTRACT}/pools?page=1`,
            { headers: HEADERS }
        );
        if (!poolsRes.ok) throw new Error(`pools ${poolsRes.status}`);
        const poolsJson = await poolsRes.json();
        const poolAddr  = poolsJson.data?.[0]?.attributes?.address;
        if (!poolAddr) throw new Error('no pools');

        // Step 2: fetch OHLCV — hourly for ≤7d, daily for 30d/90d
        const timeframe = days <= 7 ? 'hour' : 'day';
        const limit     = days === 1 ? 24 : days === 7 ? 168 : days;
        const ohlcRes   = await fetch(
            `https://api.geckoterminal.com/api/v2/networks/eth/pools/${poolAddr}/ohlcv/${timeframe}?aggregate=1&limit=${limit}&currency=usd`,
            { headers: HEADERS }
        );
        if (!ohlcRes.ok) throw new Error(`ohlcv ${ohlcRes.status}`);
        const ohlcJson = await ohlcRes.json();

        // ohlcv_list: [[ts_seconds, open, high, low, close, volume], ...] newest-first
        const raw = ohlcJson.data?.attributes?.ohlcv_list ?? [];

        const seen = new Map();
        for (const [time, open, high, low, close, volume] of raw) {
            seen.set(time, { time, open, high, low, close, volume });
        }
        const data = [...seen.values()].sort((a, b) => a.time - b.time);

        res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=60');
        res.json({ data });
    } catch (e) {
        res.status(500).json({ data: [], error: e.message });
    }
}
