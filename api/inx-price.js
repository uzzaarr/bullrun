export default async function handler(req, res) {
    try {
        const r = await fetch(
            'https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest' +
            '?address=0xdef1b2d939edc0e4d35806c59b3166f790175afe&convert=USD',
            { headers: { 'X-CMC_PRO_API_KEY': process.env.CMC_API_KEY } }
        );
        const json = await r.json();
        const entries = Object.values(json?.data ?? {});
        const token = Array.isArray(entries[0]) ? entries[0][0] : entries[0];
        const price = token?.quote?.USD?.price ?? null;
        res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=60');
        res.json({ price });
    } catch (e) {
        res.status(500).json({ price: null });
    }
}
