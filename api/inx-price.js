export default async function handler(req, res) {
    try {
        const r = await fetch(
            'https://api.coingecko.com/api/v3/simple/token_price/ethereum' +
            '?contract_addresses=0xdef1b2d939edc0e4d35806c59b3166f790175afe&vs_currencies=usd',
            { headers: { 'Accept': 'application/json' } }
        );
        const json = await r.json();
        const price = json?.['0xdef1b2d939edc0e4d35806c59b3166f790175afe']?.usd ?? null;
        res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=60');
        res.json({ price });
    } catch (e) {
        res.status(500).json({ price: null });
    }
}
