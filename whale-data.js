// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 29, 2026 at 10:46 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 102;
const WHALE_TOTAL_VOLUME      = 530000;
const WHALE_BIGGEST_SINGLE    = 267808;

const WHALE_TRANSFERS = [
    { hash: "0x0eed44764fce2b4bbf5aef1d21baddc84faf5fdb617932d7664a9a0f6855a8d9", ts: 1782694571, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xcf4525dc26cc9ca58e15fffa3ef14d6619a55945", amount: 262192, block: 25419878, type: "transfer" },
    { hash: "0x43008110e169d046507efc0075317265a5b8c8508bfd441b632c875630dabc8e", ts: 1782694523, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x57ba479e67ae2107ebf5b4bf6f45761eeacbdbba", amount: 267808, block: 25419874, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x57ba479e67ae2107ebf5b4bf6f45761eeacbdbba", net: 267808, received: 267808, sent: 0, txs: 1 },
    { wallet: "0xcf4525dc26cc9ca58e15fffa3ef14d6619a55945", net: 262192, received: 262192, sent: 0, txs: 1 },
    { wallet: "0xc07f8b8d4b5a5c7cc420267c3f50eb0c9e72f306", net: 57534, received: 57534, sent: 0, txs: 1 },
    { wallet: "0x9f80ab805e4a0f66d0a73c4337fd4e2d60b678d5", net: 54795, received: 54795, sent: 0, txs: 1 },
    { wallet: "0x50df5c15b3489371227901e86354954e9f2afce2", net: 30822, received: 30822, sent: 0, txs: 1 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 26912, received: 26912, sent: 0, txs: 1 },
    { wallet: "0xa57c4a6678025e728d160d7ef1bb8ff733531850", net: 20548, received: 20548, sent: 0, txs: 1 },
    { wallet: "0x82fc1e4232adda70ae4e67d60b549a4063888086", net: 15068, received: 15068, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 11203, received: 11203, sent: 0, txs: 5 },
    { wallet: "0xad88fb933661272a3ca088527c5b1506fc05d85f", net: 6671, received: 6671, sent: 0, txs: 1 },
    { wallet: "0xdd209b5fec3d1024b32be2be972b92ca663ef957", net: 6671, received: 6671, sent: 0, txs: 1 },
    { wallet: "0x187fe1a8b76c60b85c00a2819152ff00ff642386", net: 6297, received: 6297, sent: 0, txs: 1 },
    { wallet: "0xac2dd467dbbca0b146d909a3363d9d3dcdec56aa", net: 4521, received: 4521, sent: 0, txs: 1 },
    { wallet: "0x96be881acee07e498be404a5726814182bb8e0f9", net: 4384, received: 4384, sent: 0, txs: 1 },
    { wallet: "0x3f75b60dc13751e09c215f09224325c38087974e", net: 3527, received: 3527, sent: 0, txs: 1 },
    { wallet: "0x0faafa9fff76cd4d6dbf01d31d20dc7e75b6771a", net: 2877, received: 2877, sent: 0, txs: 1 },
    { wallet: "0xc097f3238e49c690df6a7d15cf82065bc98291a5", net: 2740, received: 2740, sent: 0, txs: 1 },
    { wallet: "0x23710ee704d16e42e1a03d1d2dcf3b62ea9b961c", net: 2403, received: 2403, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0xb8294f8f8f6619a299688f1ca12cb967fc9a6176", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x561e6326076713347d2bb3d3adb4e45a65009580", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0x1b0b1ad3e6a2fb69c48c2913fea012bc38f0a2e9", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x907262769c7143796829c3d9595d8d4007e65cd1", net: 959, received: 959, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x3272d7dc4a555dd75842bf9b58bbddaa8b636073", net: 798, received: 798, sent: 0, txs: 1 },
    { wallet: "0x855992fbda59048156cb4bc75fad65d0bfa80f3b", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0xe19ed11103265687a351662aab588a890ec598b4", net: 400, received: 900, sent: 500, txs: 2 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 128, received: 128, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 94, received: 94, sent: 0, txs: 3 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 16, received: 16, sent: 0, txs: 1 },
    { wallet: "0xb9de629ad9c2a7deedf6b08e72d7a9ae6a6622ba", net: 0, received: 1, sent: 1, txs: 2 },
    { wallet: "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae", net: 0, received: 9, sent: 9, txs: 9 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 3528, sent: 3528, txs: 4 },
    { wallet: "0x39ab0f58ef626b8befd36adbe7a94c0665a8c265", net: 0, received: 75000, sent: 75000, txs: 2 },
    { wallet: "0xef91b28f5763b49812f39154d0db15a01ca1506a", net: 0, received: 75000, sent: 75000, txs: 2 },
    { wallet: "0x7f51c134230eb9e5aba42bc364d3d3eba26d9712", net: 0, received: 18342, sent: 18342, txs: 9 },
    { wallet: "0xf24be3404b723e35d9ebc60977b646d2581f57f0", net: 0, received: 102, sent: 102, txs: 2 },
    { wallet: "0xaa95925db0cfbb48252cab6a22a8e6cd388d8a6d", net: 0, received: 54795, sent: 54795, txs: 2 },
    { wallet: "0xbd36454db179b132d0b38d7049bd00467ecd21b3", net: 0, received: 4384, sent: 4384, txs: 2 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 128, sent: 128, txs: 2 },
    { wallet: "0x6aa72d15652afa5e6a6cabddde5224cada4decc1", net: 0, received: 10241, sent: 10241, txs: 2 },
    { wallet: "0xcf96bd96aa81d08e1bec7d5af06b18f00e8a0640", net: 0, received: 10274, sent: 10274, txs: 3 },
    { wallet: "0x6b67a3e46e45916a199bb58d060cc5fc728db778", net: 0, received: 10274, sent: 10274, txs: 2 },
    { wallet: "0x163f3103de041d25464e2c8a4f8f3187ec1856e0", net: 0, received: 2559, sent: 2559, txs: 2 },
    { wallet: "0x66a9893cc07d91d95644aedd05d03f95e1dba8af", net: 0, received: 8074, sent: 8074, txs: 2 },
    { wallet: "0x634138e0716bbf2b33f06348f57e48a4be334728", net: 0, received: 8074, sent: 8074, txs: 2 },
    { wallet: "0x9dae96ed1d297dd42aff3437a68104ab82927023", net: 0, received: 8074, sent: 8074, txs: 2 },
    { wallet: "0xc79b289d73e7916da768dc9b1daedc9743f6b1d5", net: 0, received: 6297, sent: 6297, txs: 2 }
];

const WHALE_LABELS = {

};
