// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 14, 2026 at 01:54 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 124;
const WHALE_TOTAL_VOLUME      = 252877;
const WHALE_BIGGEST_SINGLE    = 252877;

const WHALE_TRANSFERS = [
    { hash: "0x7599d2498db397f5a4fd9406d11f83f7b6f38f25ba531987c326f574519b8938", ts: 1783983527, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xa7749a59d3cda51dbca87319ebaec51ceef07854", amount: 252877, block: 25526848, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xa7749a59d3cda51dbca87319ebaec51ceef07854", net: 252877, received: 252877, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 212545, received: 212545, sent: 0, txs: 3 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 48933, received: 62520, sent: 13587, txs: 2 },
    { wallet: "0xd308fc4ec59cf2779eb75787810f05fc80fedb60", net: 19863, received: 27808, sent: 7945, txs: 3 },
    { wallet: "0xbe4ae6e24d12dbd180517f126765178bae81f341", net: 19726, received: 19726, sent: 0, txs: 1 },
    { wallet: "0x1ef272a3d6d0d07dd1ef065bb5238786e46d8d8c", net: 17260, received: 17260, sent: 0, txs: 1 },
    { wallet: "0xd17cb60b2260477e580def6925e2c1049fb0d790", net: 14594, received: 14594, sent: 0, txs: 2 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 13706, received: 21106, sent: 7400, txs: 4 },
    { wallet: "0xe19ed11103265687a351662aab588a890ec598b4", net: 13587, received: 13587, sent: 0, txs: 1 },
    { wallet: "0xa54c11dc5c04ed8b95481d1cd8ec07695b1d5583", net: 6849, received: 6849, sent: 0, txs: 1 },
    { wallet: "0x1182ad22b3df49fd1da9a004a8a42ad6ce8211c8", net: 6308, received: 6308, sent: 0, txs: 1 },
    { wallet: "0xc07f8b8d4b5a5c7cc420267c3f50eb0c9e72f306", net: 4795, received: 4795, sent: 0, txs: 1 },
    { wallet: "0xe612cc0d682cb2551285992158f14b0b342cdc1b", net: 3014, received: 3014, sent: 0, txs: 1 },
    { wallet: "0xd1966596e0d9c4033d19b5e12d1f14b183dfa2c5", net: 2877, received: 2877, sent: 0, txs: 1 },
    { wallet: "0x70fe74e426e5419223a9c0a5d343dc3d96c8a1cf", net: 2329, received: 2329, sent: 0, txs: 1 },
    { wallet: "0x538960b9e4849bd2eeea32d3994480969e1da019", net: 1918, received: 1918, sent: 0, txs: 1 },
    { wallet: "0x5afdfc44e2dfa3e3940f479ac23097103387c23a", net: 1622, received: 1622, sent: 0, txs: 1 },
    { wallet: "0xbbcec987e4c189fcbab0a2534c77b3ba89229f11", net: 1593, received: 1593, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 623, received: 623, sent: 0, txs: 14 },
    { wallet: "0x7bdc65dbdc378d099da8da17add52a28f2f626ea", net: 616, received: 1233, sent: 616, txs: 2 },
    { wallet: "0xf40ffd618c7fee6a912ca029ad05aaada6c01d70", net: 616, received: 616, sent: 0, txs: 1 },
    { wallet: "0xb695091eb0618245a5e61f3f6c52babddcbf6aba", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x3036e2dba06fbc54fd7ec22473f314f292105aff", net: 153, received: 153, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x74323b4161747f4e7beb536c961f394e6068c2da", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 5, received: 5, sent: 0, txs: 1 },
    { wallet: "0xee927082434f0c866f5030444818d19fe714a6bc", net: 1, received: 822, sent: 822, txs: 3 },
    { wallet: "0x6413d8f85a2eff1dc3ee3e0db7d8c89ccbd51dc5", net: 1, received: 5753, sent: 5752, txs: 3 },
    { wallet: "0x9631288f4050f7cfbf77b77f8540decf6cfc7012", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0x279a2a69bf25427fe07e594af2e58a1810e9bde9", net: 0, received: 17069, sent: 17069, txs: 2 },
    { wallet: "0xc079bfa54f348199ba51b2717595fe24e96f1542", net: 0, received: 21106, sent: 21106, txs: 6 },
    { wallet: "0x2f3b95cc92e89838245756803f0c2cb440687d20", net: 0, received: 21096, sent: 21096, txs: 2 },
    { wallet: "0xbaa8254ae8b9769ae9053d9f25cca5f90f07427e", net: 0, received: 21096, sent: 21096, txs: 2 },
    { wallet: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", net: 0, received: 195475, sent: 195475, txs: 4 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 30783, sent: 30783, txs: 15 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 30783, sent: 30783, txs: 12 },
    { wallet: "0xfa23444ea0862bc5fec0059534526aa15f164c14", net: 0, received: 18024, sent: 18024, txs: 2 },
    { wallet: "0xa938442ef1914ed8002a268b2f79252a64006d04", net: 0, received: 18082, sent: 18082, txs: 3 },
    { wallet: "0x1be3f39f61769003f151c0d0bd898ba422900212", net: 0, received: 18082, sent: 18082, txs: 2 },
    { wallet: "0xb9e59e4ff78b0eaccb197e029331ef2b6ebdb245", net: 0, received: 18025, sent: 18025, txs: 2 },
    { wallet: "0x04eb3e586641b64ab52bcb71b619b49087e416ca", net: 0, received: 18082, sent: 18082, txs: 3 },
    { wallet: "0xd5a47398f9b2d819b1c6521b095d7ee01c9afc44", net: 0, received: 18082, sent: 18082, txs: 2 },
    { wallet: "0x89c525d4d8d1ac88937266dc3b5d415d15d66814", net: 0, received: 18082, sent: 18082, txs: 4 },
    { wallet: "0x4420e5673a381fa4b1782015549f0da1d1b7ff35", net: 0, received: 18082, sent: 18082, txs: 2 },
    { wallet: "0x1f136460751bdf1eb7cf30a1ab8619a6dce7bb1a", net: 0, received: 18082, sent: 18082, txs: 4 },
    { wallet: "0x099105baf4d6080a2cc29765dd78a4c4a7a13385", net: 0, received: 18082, sent: 18082, txs: 2 },
    { wallet: "0x2b95e0d432b0e3ec99bd76f9b287e3accf560a10", net: 0, received: 14594, sent: 14594, txs: 3 },
    { wallet: "0xe68ca04bd664f37a348029803a330e5401c13847", net: 0, received: 6849, sent: 6849, txs: 2 },
    { wallet: "0x10916b18ce6deef279f0ee66fab6b6c0e3461b78", net: 0, received: 1201, sent: 1202, txs: 4 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 0, received: 959, sent: 959, txs: 4 }
];

const WHALE_LABELS = {

};
