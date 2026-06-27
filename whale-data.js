// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 27, 2026 at 01:20 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 114;
const WHALE_TOTAL_VOLUME      = 2221969;
const WHALE_BIGGEST_SINGLE    = 411111;

const WHALE_TRANSFERS = [
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
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 297257, received: 414619, sent: 117362, txs: 4 },
    { wallet: "0xc31f72bc79a37417d5ac88ffe1186702012fb5f7", net: 105437, received: 105437, sent: 0, txs: 1 },
    { wallet: "0x2b57688466e962523973f0b4dea45f99847cfa46", net: 41897, received: 41897, sent: 0, txs: 1 },
    { wallet: "0xb5fa089ed78657e10d02c2e9e2a9f673deb15c33", net: 39497, received: 39497, sent: 0, txs: 1 },
    { wallet: "0x40f832b71d2c525a9aa4b4908ec511ed93c8a308", net: 30822, received: 30822, sent: 0, txs: 1 },
    { wallet: "0x0cea2d9fe51ef641dc65013a7b058c943bbe593b", net: 28630, received: 28630, sent: 0, txs: 1 },
    { wallet: "0xdc56fd9d0112f44c9c4944e544fd20987c8b3a8c", net: 14181, received: 14181, sent: 0, txs: 6 },
    { wallet: "0x82a365858b4a82eed80e5473c6f698f93b48617f", net: 12524, received: 12524, sent: 0, txs: 1 },
    { wallet: "0x40bbe26adf6e35c11b09159a5b111d753789f2c1", net: 6712, received: 6712, sent: 0, txs: 1 },
    { wallet: "0x5f1c5951c5b1cc112ba9e89b9467edca33063453", net: 4634, received: 4634, sent: 0, txs: 1 },
    { wallet: "0x0023841d8f59e7b7bf6792bb51a41397c7329d93", net: 3562, received: 3562, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x139724a176a50f5089f4ed5bc653124e9d2c97f3", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x08ac7cdcab984359b98da3431df0147f326c0ef6", net: 1918, received: 1918, sent: 0, txs: 1 },
    { wallet: "0x719a26673e03648466c39cc05ddc8f41b1ba6667", net: 1497, received: 1497, sent: 0, txs: 1 },
    { wallet: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", net: 1378, received: 1378, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x950618712a5cd5a221c8a95930947cb76576eb76", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 411, received: 411, sent: 0, txs: 2 },
    { wallet: "0x82d9a407f99a95db4671e7021d625cbd0787a407", net: 390, received: 390, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x5d73e31d8588d928d2dcbea05dc8038d86730bf5", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 247, received: 247, sent: 0, txs: 7 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 101, received: 101, sent: 0, txs: 1 },
    { wallet: "0xc75baac8212e49b55d9cf0d1a9b548663593950d", net: 7, received: 7, sent: 0, txs: 1 },
    { wallet: "0xdfabde07cc2f46220890cae31df2089a1d16a6c4", net: 4, received: 4, sent: 0, txs: 1 },
    { wallet: "0xdeb1fc5cdd7a275cb0c71c15c15a088ee07c0db3", net: 4, received: 4, sent: 0, txs: 1 },
    { wallet: "0xa4d9d7068d84bbdf2e3caf1bbf2e1135bcd41984", net: 3, received: 3, sent: 0, txs: 1 },
    { wallet: "0xb893783409021bb5cac72cc5a0cbae7728552486", net: 3, received: 3, sent: 0, txs: 1 },
    { wallet: "0x7e648db6a05c487072416fd708a88f8715ec29bb", net: 2, received: 2, sent: 0, txs: 1 },
    { wallet: "0x35bdb824a8ed0b8abbe63939aa70ffca52a3b769", net: 2, received: 2, sent: 0, txs: 1 },
    { wallet: "0xa0db4c6b43252b3d015a25618a3a3816be6e7326", net: 0, received: 817, sent: 817, txs: 2 },
    { wallet: "0x970a435a785a9d37bc0db253f62ea1d5e9ceb57f", net: 0, received: 822, sent: 822, txs: 3 },
    { wallet: "0x3c9108700724d9d96cff2ac8979d6ad2a8d469ae", net: 0, received: 822, sent: 822, txs: 2 },
    { wallet: "0x41c72cf57bdc2c83dfac5b126c815b5e1afb8d88", net: 0, received: 100000, sent: 100000, txs: 4 },
    { wallet: "0x80b4a27276d0c9cce34bf984877c5c9ed5982a9f", net: 0, received: 100000, sent: 100000, txs: 3 },
    { wallet: "0x9008d19f58aabd9ed0d60971565aa8510560ab41", net: 0, received: 103973, sent: 103973, txs: 4 },
    { wallet: "0x89e5c4707f0d62ebcd854e9338b9979d3f6a6dee", net: 0, received: 100000, sent: 100000, txs: 2 },
    { wallet: "0x6342355a98d915a440134fd5e0e1bec9ec6edc39", net: 0, received: 30822, sent: 30822, txs: 2 },
    { wallet: "0xc079bfa54f348199ba51b2717595fe24e96f1542", net: 0, received: 390493, sent: 390493, txs: 4 },
    { wallet: "0x71563634a3eacb41fd03dd9045129e019e06fcff", net: 0, received: 390493, sent: 390493, txs: 3 },
    { wallet: "0x8bf73aaacc2b511df6b681f3cb0513fec0fca865", net: 0, received: 3973, sent: 3973, txs: 2 },
    { wallet: "0x8ed1a186629c2fd4f5f7e570f134e3ace447b7b6", net: 0, received: 3973, sent: 3973, txs: 2 },
    { wallet: "0x8a722431c321be4f0ee127ba90d40efa92bdea32", net: 0, received: 117362, sent: 117362, txs: 2 }
];

const WHALE_LABELS = {

};
