const POOL = '0xdb66b18431f00e001867c67c6022c36205abec136381cd0d3fa58068ec88ace6';

export default async function handler(req, res) {
    try {
        const r = await fetch(
            `https://api.geckoterminal.com/api/v2/networks/eth/pools/${POOL}/trades?limit=300`,
            {
                headers: {
                    'Accept': 'application/json',
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                },
            }
        );
        if (!r.ok) throw new Error(`GeckoTerminal ${r.status}`);
        const data = await r.json();
        res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate=10');
        res.json(data);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
}
