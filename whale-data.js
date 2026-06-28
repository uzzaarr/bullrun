// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 28, 2026 at 07:10 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 104;
const WHALE_TOTAL_VOLUME      = 3281786;
const WHALE_BIGGEST_SINGLE    = 1019178;

const WHALE_TRANSFERS = [
    { hash: "0x9256472b13b2c3a772e89d986eeb86754aba85766ebce13a40fbb8eb7ad71c54", ts: 1782643247, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x8b04b028c2b5b4cfa24a3d85d4d5c082f321094d", amount: 1019178, block: 25415621, type: "transfer" },
    { hash: "0xecebd106068cf0d16c8cdd565324aca623d1638f5d5de13b4ca7d95f17d2d7c7", ts: 1782643199, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xcd0cafe8cbe560315a941f016964c20f663744d4", amount: 679452, block: 25415617, type: "transfer" },
    { hash: "0xbdd08118a0cc07bdab350966708b478a275f48cc8e3e17eecb63e61ce74afcb4", ts: 1782630839, from: "0x9a35b222c086b2f9d4808f62d0def77ed5356d6c", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 478636, block: 25414589, type: "transfer" },
    { hash: "0xe68b96ea529c1a5030f038cce17ed05a2ab9db156b62eb15dbdb7e1860eb2b48", ts: 1782630407, from: "0xed00342ef006d0a7a6dcf7150af56ab8778af247", to: "0x9a35b222c086b2f9d4808f62d0def77ed5356d6c", amount: 478636, block: 25414553, type: "transfer" },
    { hash: "0xc8873e15502b6004fc60f4ec13e836a19d497de667a43e48a5b98e3105a4293b", ts: 1782607907, from: "0x8a722431c321be4f0ee127ba90d40efa92bdea32", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 128147, block: 25412681, type: "sell" },
    { hash: "0x1920ab89af748fa1ed1109f27bf69bb525c9e821704fb19785d0907af9e283c0", ts: 1782607799, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8a722431c321be4f0ee127ba90d40efa92bdea32", amount: 228147, block: 25412672, type: "buy" },
    { hash: "0x818df1767abcd881929955b535f58d11180a061804328292e431d95f9cf8159a", ts: 1782591047, from: "0xabbfbbe475635353d08687d98d7d80ee82a4b49a", to: "0x3f1f9cae3a858e3369d086145d9523797bc888e1", amount: 134795, block: 25411281, type: "transfer" },
    { hash: "0xc425bb8dd68b2d81ed4dd38b01cb0dae40e898d2e6682bd7ad30869cd03abd2f", ts: 1782590771, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xabbfbbe475635353d08687d98d7d80ee82a4b49a", amount: 134795, block: 25411258, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x8b04b028c2b5b4cfa24a3d85d4d5c082f321094d", net: 1012507, received: 1019178, sent: 6671, txs: 2 },
    { wallet: "0xcd0cafe8cbe560315a941f016964c20f663744d4", net: 652424, received: 679452, sent: 27028, txs: 7 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 477373, received: 478636, sent: 1263, txs: 2 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 99900, received: 99900, sent: 0, txs: 1 },
    { wallet: "0x39ab0f58ef626b8befd36adbe7a94c0665a8c265", net: 75000, received: 75000, sent: 0, txs: 1 },
    { wallet: "0xaa95925db0cfbb48252cab6a22a8e6cd388d8a6d", net: 54795, received: 54795, sent: 0, txs: 1 },
    { wallet: "0x3f1f9cae3a858e3369d086145d9523797bc888e1", net: 40435, received: 134795, sent: 94359, txs: 3 },
    { wallet: "0x50df5c15b3489371227901e86354954e9f2afce2", net: 30822, received: 30822, sent: 0, txs: 1 },
    { wallet: "0x82fc1e4232adda70ae4e67d60b549a4063888086", net: 15068, received: 15068, sent: 0, txs: 1 },
    { wallet: "0x5c9d1a6c9753e711db9b880b0404cd653a0e0032", net: 13014, received: 13014, sent: 0, txs: 1 },
    { wallet: "0xdd209b5fec3d1024b32be2be972b92ca663ef957", net: 6671, received: 6671, sent: 0, txs: 1 },
    { wallet: "0xc79b289d73e7916da768dc9b1daedc9743f6b1d5", net: 6297, received: 6297, sent: 0, txs: 1 },
    { wallet: "0x3f75b60dc13751e09c215f09224325c38087974e", net: 3527, received: 3527, sent: 0, txs: 1 },
    { wallet: "0x23710ee704d16e42e1a03d1d2dcf3b62ea9b961c", net: 2170, received: 2170, sent: 0, txs: 1 },
    { wallet: "0x3faa2c738f76f76526231c035c74184f3be5feb7", net: 1918, received: 1918, sent: 0, txs: 1 },
    { wallet: "0x561e6326076713347d2bb3d3adb4e45a65009580", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", net: 1263, received: 1263, sent: 0, txs: 1 },
    { wallet: "0xc027fa8ba76de0ffc996c7e7a96e2e0c1c6aac49", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 942, received: 962, sent: 20, txs: 4 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x3272d7dc4a555dd75842bf9b58bbddaa8b636073", net: 798, received: 798, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 425, received: 425, sent: 0, txs: 5 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 110, received: 110, sent: 0, txs: 1 },
    { wallet: "0x82d9a407f99a95db4671e7021d625cbd0787a407", net: 100, received: 100, sent: 0, txs: 1 },
    { wallet: "0x65d888fc9dd96d7d6dd8212d8d57817ff973b536", net: 38, received: 38, sent: 0, txs: 1 },
    { wallet: "0x5eb89d24ed0b5adb9b013045da4872ed8141906b", net: 20, received: 20, sent: 0, txs: 1 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 16, received: 16, sent: 0, txs: 1 },
    { wallet: "0xd78d199f8c402e7b5cc2abe278df0412400a3bae", net: 0, received: 3527, sent: 3527, txs: 2 },
    { wallet: "0xbb1532f8209cb561a2fa064616c29448ed18ea4c", net: 0, received: 3527, sent: 3527, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 3527, sent: 3527, txs: 2 },
    { wallet: "0x7f51c134230eb9e5aba42bc364d3d3eba26d9712", net: 0, received: 18240, sent: 18240, txs: 6 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 115515, sent: 115515, txs: 12 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 115515, sent: 115515, txs: 8 },
    { wallet: "0x4c743a448848f0a2d6309f70c0db5835f128c2cd", net: 0, received: 1657, sent: 1657, txs: 2 },
    { wallet: "0x51613f6bb3b897dbe0900b2b6d819c3fc7bd8b33", net: 0, received: 1657, sent: 1657, txs: 2 },
    { wallet: "0x6dc321ad7a9c847da0371912de3b6ec265cd6485", net: 0, received: 2, sent: 2, txs: 2 },
    { wallet: "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae", net: 0, received: 8, sent: 8, txs: 7 },
    { wallet: "0x20f6ee51340adeed01a59b0e65cb3703f3dc860c", net: 0, received: 2, sent: 2, txs: 2 },
    { wallet: "0x09ad820aac5779683b481c4674208a4e1b024afa", net: 0, received: 2, sent: 2, txs: 2 },
    { wallet: "0x74de5d4fcbf63e00296fd95d33236b9794016631", net: 0, received: 11932, sent: 11932, txs: 2 },
    { wallet: "0x4a5da2a1d3258df8ffb431cf0110fe9b98adeebf", net: 0, received: 11932, sent: 11932, txs: 2 },
    { wallet: "0x3be63b2f47c576ea8f12c190e94065676ea10f42", net: 0, received: 11932, sent: 11932, txs: 2 },
    { wallet: "0x1aba1313639cae8325c10d0d3f83015c0e771d2e", net: 0, received: 26301, sent: 26301, txs: 2 },
    { wallet: "0x691c1b7ec5d3c28820dce4000d715740e1d7282b", net: 0, received: 6, sent: 6, txs: 2 },
    { wallet: "0x28bf6006d87de7f44445905aa4f5cb8c0d8cba02", net: 0, received: 6, sent: 6, txs: 2 },
    { wallet: "0x07394c16027878854dec0c0fb05ca5d8622c6b99", net: 0, received: 953, sent: 953, txs: 2 },
    { wallet: "0x01c579618213c31ebdfdbd68bb14d71d8329b9dc", net: 0, received: 959, sent: 959, txs: 3 }
];

const WHALE_LABELS = {

};
