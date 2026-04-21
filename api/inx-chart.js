const VALID_DAYS = new Set(['1', '7', '30', '90']);
const CONTRACT = '0xdef1b2d939edc0e4d35806c59b3166f790175afe';

export default async function handler(req, res) {
    const days = VALID_DAYS.has(req.query.days) ? req.query.days : '7';
    try {
        const r = await fetch(
            `https://api.coingecko.com/api/v3/coins/ethereum/contract/${CONTRACT}/ohlc?vs_currency=usd&days=${days}`,
            { headers: { 'Accept': 'application/json' } }
        );
        if (!r.ok) throw new Error(`CoinGecko ${r.status}`);
        const raw = await r.json();

        const seen = new Map();
        for (const [ts, open, high, low, close] of raw) {
            const time = Math.floor(ts / 1000);
            seen.set(time, { time, open, high, low, close });
        }
        const data = [...seen.values()].sort((a, b) => a.time - b.time);

        res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=60');
        res.json({ data });
    } catch (e) {
        res.status(500).json({ data: [] });
    }
}
