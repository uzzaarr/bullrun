// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 27, 2026 at 07:11 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 117;
const WHALE_TOTAL_VOLUME      = 2343607;
const WHALE_BIGGEST_SINGLE    = 411111;

const WHALE_TRANSFERS = [
    { hash: "0x077e6f4102b85e6788e6f349550a3c3022cb7b8ab23230199cb889756b9b1f2b", ts: 1782568907, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf4bc0825476385d9ece522240797528ea236cc92", amount: 121638, block: 25409444, type: "transfer" },
    { hash: "0x5cb5f2dad95e62b8fe1075803f666e83225c6665efde8f827b669bf10f2269d8", ts: 1782562151, from: "0x9008d19f58aabd9ed0d60971565aa8510560ab41", to: "0x80b4a27276d0c9cce34bf984877c5c9ed5982a9f", amount: 100000, block: 25408883, type: "transfer" },
    { hash: "0x5cb5f2dad95e62b8fe1075803f666e83225c6665efde8f827b669bf10f2269d8", ts: 1782562151, from: "0x89e5c4707f0d62ebcd854e9338b9979d3f6a6dee", to: "0x9008d19f58aabd9ed0d60971565aa8510560ab41", amount: 100000, block: 25408883, type: "transfer" },
    { hash: "0x94a295233db0edb62db5f6bde6a41fa8651e16a48a747524fd3bd8439b0e8b93", ts: 1782561911, from: "0x02ddc822f0aef9c82b1d33b8389b747bdc7e2f08", to: "0x89e5c4707f0d62ebcd854e9338b9979d3f6a6dee", amount: 100000, block: 25408863, type: "transfer" },
    { hash: "0x608e439f7b0cf87cf64c5a8db9fc335bacb9bf181eab0389d3d7b0ae2aa2c15d", ts: 1782558047, from: "0xc079bfa54f348199ba51b2717595fe24e96f1542", to: "0x6912d024e2b88136c5a586e77b092199963b6083", amount: 390102, block: 25408541, type: "transfer" },
    { hash: "0x608e439f7b0cf87cf64c5a8db9fc335bacb9bf181eab0389d3d7b0ae2aa2c15d", ts: 1782558047, from: "0x71563634a3eacb41fd03dd9045129e019e06fcff", to: "0xc079bfa54f348199ba51b2717595fe24e96f1542", amount: 390102, block: 25408541, type: "transfer" },
    { hash: "0x38bea22b1b1eb1b09ebefc08a8fef99a60e0ad9e9ae961ac840c09d14ec302ca", ts: 1782557951, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x71563634a3eacb41fd03dd9045129e019e06fcff", amount: 390493, block: 25408533, type: "transfer" },
    { hash: "0xe8fd7579058e914951aead25a396368419bb7f3a52ac408cb5df638ad8bdedbf", ts: 1782548915, from: "0x8a722431c321be4f0ee127ba90d40efa92bdea32", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 117362, block: 25407785, type: "sell" },
    { hash: "0x66e09656e4ed9f0fe15b0c55939181145c0a1365e16fe503f499e2a5385e6dc3", ts: 1782548771, from: "0x6912d024e2b88136c5a586e77b092199963b6083", to: "0x8a722431c321be4f0ee127ba90d40efa92bdea32", amount: 117362, block: 25407773, type: "transfer" },
    { hash: "0x98a8df0820b58552a195235b60807c4e4de60110f7270302fac109e41eb713b5", ts: 1782518051, from: "0x9642b23ed1e01df1092b92641051881a322f5d4e", to: "0xc31f72bc79a37417d5ac88ffe1186702012fb5f7", amount: 105437, block: 25405222, type: "transfer" },
    { hash: "0xd3e19f232673fd3dfa93b2fcf1d9ee26d24f901f40580c750bf456c4412b5266", ts: 1782514247, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xeb828ad06741e932b09eedb346016bfdc34d87c6", amount: 411111, block: 25404905, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xeb828ad06741e932b09eedb346016bfdc34d87c6", net: 411111, received: 411111, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 284973, received: 402335, sent: 117362, txs: 3 },
    { wallet: "0xf4bc0825476385d9ece522240797528ea236cc92", net: 121638, received: 121638, sent: 0, txs: 1 },
    { wallet: "0xc31f72bc79a37417d5ac88ffe1186702012fb5f7", net: 105437, received: 105437, sent: 0, txs: 1 },
    { wallet: "0x2b57688466e962523973f0b4dea45f99847cfa46", net: 41897, received: 41897, sent: 0, txs: 1 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 32401, received: 32401, sent: 0, txs: 1 },
    { wallet: "0x40f832b71d2c525a9aa4b4908ec511ed93c8a308", net: 30822, received: 30822, sent: 0, txs: 1 },
    { wallet: "0xdc56fd9d0112f44c9c4944e544fd20987c8b3a8c", net: 7004, received: 7004, sent: 0, txs: 3 },
    { wallet: "0x4015afef85dfe9020c37e094fca46e56854dc5c6", net: 4932, received: 4932, sent: 0, txs: 1 },
    { wallet: "0x5f1c5951c5b1cc112ba9e89b9467edca33063453", net: 4634, received: 4634, sent: 0, txs: 1 },
    { wallet: "0x0023841d8f59e7b7bf6792bb51a41397c7329d93", net: 3562, received: 3562, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0x3f75b60dc13751e09c215f09224325c38087974e", net: 3265, received: 3265, sent: 0, txs: 1 },
    { wallet: "0x20fa473270be0c37a33e6592428b428ff808f653", net: 2740, received: 2740, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x139724a176a50f5089f4ed5bc653124e9d2c97f3", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x08ac7cdcab984359b98da3431df0147f326c0ef6", net: 1918, received: 1918, sent: 0, txs: 1 },
    { wallet: "0xbbf7e985e1e0ca6f854cecb5096274e8e797e8b4", net: 1767, received: 1767, sent: 0, txs: 1 },
    { wallet: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", net: 1378, received: 1378, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x9df14235393c7a9d2bc38db6c12c61b699e094c6", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x0ce2b366e425d7e53904ea61cfb2ea03b06283f7", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 411, received: 411, sent: 0, txs: 2 },
    { wallet: "0x82d9a407f99a95db4671e7021d625cbd0787a407", net: 390, received: 390, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 179, received: 179, sent: 0, txs: 8 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 101, received: 101, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 19, received: 19, sent: 0, txs: 1 },
    { wallet: "0xa4d9d7068d84bbdf2e3caf1bbf2e1135bcd41984", net: 3, received: 3, sent: 0, txs: 1 },
    { wallet: "0x7e648db6a05c487072416fd708a88f8715ec29bb", net: 2, received: 2, sent: 0, txs: 1 },
    { wallet: "0x35bdb824a8ed0b8abbe63939aa70ffca52a3b769", net: 2, received: 2, sent: 0, txs: 1 },
    { wallet: "0xff48c3cee993382fb0538d241c0cbd484c17a493", net: 1, received: 4407, sent: 4406, txs: 2 },
    { wallet: "0x950618712a5cd5a221c8a95930947cb76576eb76", net: 1, received: 685, sent: 684, txs: 3 },
    { wallet: "0x04c7b4e2db71b2abffe4f2131cf2754533cf32da", net: 0, received: 1767, sent: 1767, txs: 2 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 14933, sent: 14933, txs: 8 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 16699, sent: 16699, txs: 10 },
    { wallet: "0x6376b387b0b4a4f9687081e3af5f799ebe8414bc", net: 0, received: 679, sent: 679, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 1767, sent: 1767, txs: 2 },
    { wallet: "0x44587972a298668b47e317aedd9dc0a4b597d812", net: 0, received: 1781, sent: 1781, txs: 3 },
    { wallet: "0xa174e6e4a05b7c55e598562c263ecc6e0b50f5e0", net: 0, received: 1781, sent: 1781, txs: 2 },
    { wallet: "0x7f51c134230eb9e5aba42bc364d3d3eba26d9712", net: 0, received: 6476, sent: 6476, txs: 3 },
    { wallet: "0x34f18b07b661a5ba559f2cf14a1ad78ae341b333", net: 0, received: 6500, sent: 6500, txs: 3 },
    { wallet: "0xa6af2874c8d9825c40b470898716b736c2d3d4dd", net: 0, received: 952, sent: 952, txs: 2 },
    { wallet: "0xec4017fda40716ca24f8d1cb03a5baaa1e8b422a", net: 0, received: 959, sent: 959, txs: 3 },
    { wallet: "0x2cedcc1fedb8dcae93a88bbf26df039071bb7243", net: 0, received: 959, sent: 959, txs: 2 },
    { wallet: "0xa0db4c6b43252b3d015a25618a3a3816be6e7326", net: 0, received: 817, sent: 817, txs: 2 },
    { wallet: "0x970a435a785a9d37bc0db253f62ea1d5e9ceb57f", net: 0, received: 822, sent: 822, txs: 3 }
];

const WHALE_LABELS = {

};
