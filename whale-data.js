// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 27, 2026 at 08:30 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 173;
const WHALE_TOTAL_VOLUME      = 3151240;
const WHALE_BIGGEST_SINGLE    = 411111;

const WHALE_TRANSFERS = [
    { hash: "0xe8fd7579058e914951aead25a396368419bb7f3a52ac408cb5df638ad8bdedbf", ts: 1782548915, from: "0x8a722431c321be4f0ee127ba90d40efa92bdea32", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 117362, block: 25407785, type: "sell" },
    { hash: "0x66e09656e4ed9f0fe15b0c55939181145c0a1365e16fe503f499e2a5385e6dc3", ts: 1782548771, from: "0x6912d024e2b88136c5a586e77b092199963b6083", to: "0x8a722431c321be4f0ee127ba90d40efa92bdea32", amount: 117362, block: 25407773, type: "transfer" },
    { hash: "0x98a8df0820b58552a195235b60807c4e4de60110f7270302fac109e41eb713b5", ts: 1782518051, from: "0x9642b23ed1e01df1092b92641051881a322f5d4e", to: "0xc31f72bc79a37417d5ac88ffe1186702012fb5f7", amount: 105437, block: 25405222, type: "transfer" },
    { hash: "0xd3e19f232673fd3dfa93b2fcf1d9ee26d24f901f40580c750bf456c4412b5266", ts: 1782514247, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xeb828ad06741e932b09eedb346016bfdc34d87c6", amount: 411111, block: 25404905, type: "transfer" },
    { hash: "0xbf798be956ebc00387035f70791b9823c8f1d74b2c28387137275d40eed05c01", ts: 1782476855, from: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 354688, block: 25401802, type: "transfer" },
    { hash: "0xc3bf857ad899d98f201c2e70b8be99376756bf15c99140144921e42a02bb191b", ts: 1782475787, from: "0xe0afb959a5109e2209a6f1c9969e6f55a1953722", to: "0x236cd9dd6d431bfe47b31cbc1b92debac2524ab9", amount: 174000, block: 25401713, type: "transfer" },
    { hash: "0x1c0d0a84da6033bd950e44d267877fe02545d9b00888f13566d533bd06601c8e", ts: 1782475739, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", amount: 105593, block: 25401709, type: "buy" },
    { hash: "0xa36f320bf604df9d3905bea87ff2f4048b894306f8b40d4ea506d0ddaa9efb78", ts: 1782475727, from: "0x8f10b468b06c6fd214b65f87778827f7d113f996", to: "0xe0afb959a5109e2209a6f1c9969e6f55a1953722", amount: 174000, block: 25401708, type: "transfer" },
    { hash: "0xa36f320bf604df9d3905bea87ff2f4048b894306f8b40d4ea506d0ddaa9efb78", ts: 1782475727, from: "0x8f10b468b06c6fd214b65f87778827f7d113f996", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 126000, block: 25401708, type: "sell" },
    { hash: "0xa36f320bf604df9d3905bea87ff2f4048b894306f8b40d4ea506d0ddaa9efb78", ts: 1782475727, from: "0x74de5d4fcbf63e00296fd95d33236b9794016631", to: "0x8f10b468b06c6fd214b65f87778827f7d113f996", amount: 300000, block: 25401708, type: "transfer" },
    { hash: "0xa36f320bf604df9d3905bea87ff2f4048b894306f8b40d4ea506d0ddaa9efb78", ts: 1782475727, from: "0x3430b9c4636744dbe738d66a70a494170097bb85", to: "0x74de5d4fcbf63e00296fd95d33236b9794016631", amount: 300000, block: 25401708, type: "transfer" },
    { hash: "0xec6bfb1a2bc3ee2304dd2c3e3ea62c1a4256ccb71793c180221ce10d264ee5ca", ts: 1782474803, from: "0x74de5d4fcbf63e00296fd95d33236b9794016631", to: "0x7f51c134230eb9e5aba42bc364d3d3eba26d9712", amount: 100000, block: 25401632, type: "transfer" },
    { hash: "0xec6bfb1a2bc3ee2304dd2c3e3ea62c1a4256ccb71793c180221ce10d264ee5ca", ts: 1782474803, from: "0x3430b9c4636744dbe738d66a70a494170097bb85", to: "0x74de5d4fcbf63e00296fd95d33236b9794016631", amount: 100000, block: 25401632, type: "transfer" },
    { hash: "0x4346931edc9cef0f5c48541455eba7db421e15692b503860c9de32e5d52bd1ef", ts: 1782473627, from: "0x82a365858b4a82eed80e5473c6f698f93b48617f", to: "0x9642b23ed1e01df1092b92641051881a322f5d4e", amount: 110231, block: 25401534, type: "transfer" },
    { hash: "0x2eee2467069510f79089c8832dfc2bc39e1ed7972fec1d68c51b6e51f07dccc5", ts: 1782471275, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 127728, block: 25401338, type: "transfer" },
    { hash: "0x8a9b82ac2baeaa2444112bd3cd2b273e3077f387e669f6eafadfc59a6a3df76b", ts: 1782470807, from: "0x3430b9c4636744dbe738d66a70a494170097bb85", to: "0x74de5d4fcbf63e00296fd95d33236b9794016631", amount: 100000, block: 25401299, type: "transfer" },
    { hash: "0x419dd43500f74b0b44be31cbee8d24597f80e13a99d97d192da69b28bff5d3b4", ts: 1782470579, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 127728, block: 25401280, type: "transfer" },
    { hash: "0x71c04b0f051292ab762a5d26e9cd7aae9af05be3654bfad12ccca7084cb919ac", ts: 1782468119, from: "0x74de5d4fcbf63e00296fd95d33236b9794016631", to: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", amount: 100000, block: 25401077, type: "transfer" },
    { hash: "0x71c04b0f051292ab762a5d26e9cd7aae9af05be3654bfad12ccca7084cb919ac", ts: 1782468119, from: "0x3430b9c4636744dbe738d66a70a494170097bb85", to: "0x74de5d4fcbf63e00296fd95d33236b9794016631", amount: 100000, block: 25401077, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xeb828ad06741e932b09eedb346016bfdc34d87c6", net: 411111, received: 411111, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 354688, received: 354688, sent: 0, txs: 1 },
    { wallet: "0x236cd9dd6d431bfe47b31cbc1b92debac2524ab9", net: 174000, received: 174000, sent: 0, txs: 1 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 153584, received: 153584, sent: 0, txs: 2 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 127728, received: 127728, sent: 0, txs: 1 },
    { wallet: "0xdc56fd9d0112f44c9c4944e544fd20987c8b3a8c", net: 111816, received: 111816, sent: 0, txs: 11 },
    { wallet: "0xc31f72bc79a37417d5ac88ffe1186702012fb5f7", net: 105437, received: 105437, sent: 0, txs: 1 },
    { wallet: "0x87607b0495272d2cb7ab5bcccf26e24af4b84473", net: 64785, received: 64785, sent: 0, txs: 2 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 59965, received: 59965, sent: 0, txs: 6 },
    { wallet: "0xb5fa089ed78657e10d02c2e9e2a9f673deb15c33", net: 39497, received: 39497, sent: 0, txs: 1 },
    { wallet: "0x0cea2d9fe51ef641dc65013a7b058c943bbe593b", net: 28630, received: 28630, sent: 0, txs: 1 },
    { wallet: "0xac8ec127c526929850610347ddbcd1a624ce2d12", net: 11507, received: 11507, sent: 0, txs: 1 },
    { wallet: "0x40bbe26adf6e35c11b09159a5b111d753789f2c1", net: 6712, received: 6712, sent: 0, txs: 1 },
    { wallet: "0x70fe74e426e5419223a9c0a5d343dc3d96c8a1cf", net: 6301, received: 6301, sent: 0, txs: 1 },
    { wallet: "0x9d40ce27fd53e65e2e543f2366b21dfe75c11304", net: 5972, received: 5972, sent: 0, txs: 1 },
    { wallet: "0x5f1c5951c5b1cc112ba9e89b9467edca33063453", net: 4634, received: 4634, sent: 0, txs: 1 },
    { wallet: "0x0023841d8f59e7b7bf6792bb51a41397c7329d93", net: 3562, received: 3562, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 3416, received: 110231, sent: 106815, txs: 3 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x139724a176a50f5089f4ed5bc653124e9d2c97f3", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x719a26673e03648466c39cc05ddc8f41b1ba6667", net: 1497, received: 1497, sent: 0, txs: 1 },
    { wallet: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", net: 1378, received: 1378, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 422, received: 422, sent: 0, txs: 9 },
    { wallet: "0x42d08db8d3f1efc653b905d52ab7d19a8544e5df", net: 321, received: 321, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x5d73e31d8588d928d2dcbea05dc8038d86730bf5", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 101, received: 101, sent: 0, txs: 1 },
    { wallet: "0xd7ca08ec1aee9cce8a8eda9365343ef197674e1a", net: 43, received: 40470, sent: 40428, txs: 3 },
    { wallet: "0xc75baac8212e49b55d9cf0d1a9b548663593950d", net: 7, received: 7, sent: 0, txs: 1 },
    { wallet: "0xdfabde07cc2f46220890cae31df2089a1d16a6c4", net: 4, received: 4, sent: 0, txs: 1 },
    { wallet: "0xdeb1fc5cdd7a275cb0c71c15c15a088ee07c0db3", net: 4, received: 4, sent: 0, txs: 1 },
    { wallet: "0xa4d9d7068d84bbdf2e3caf1bbf2e1135bcd41984", net: 3, received: 3, sent: 0, txs: 1 },
    { wallet: "0xb893783409021bb5cac72cc5a0cbae7728552486", net: 3, received: 3, sent: 0, txs: 1 },
    { wallet: "0x7e648db6a05c487072416fd708a88f8715ec29bb", net: 2, received: 2, sent: 0, txs: 1 },
    { wallet: "0x35bdb824a8ed0b8abbe63939aa70ffca52a3b769", net: 2, received: 2, sent: 0, txs: 1 },
    { wallet: "0x8a722431c321be4f0ee127ba90d40efa92bdea32", net: 0, received: 117362, sent: 117362, txs: 2 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 104775, sent: 104775, txs: 12 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 12604, sent: 12604, txs: 10 },
    { wallet: "0xafaff563b0e1511dfc3a119f4f53f3b372a325c9", net: 0, received: 2874, sent: 2874, txs: 3 },
    { wallet: "0x030ef2b630e6bb3a24f44d7694a23288815e19fa", net: 0, received: 1378, sent: 1378, txs: 2 },
    { wallet: "0x1730f313576819582a57c5b832fede948a178512", net: 0, received: 17069, sent: 17069, txs: 2 },
    { wallet: "0x30c491df2748dcb5329016edfa2caa2b6654629e", net: 0, received: 17123, sent: 17123, txs: 3 },
    { wallet: "0x4b991e792911458fdcccbae205cf4b10cf762803", net: 0, received: 17123, sent: 17123, txs: 2 },
    { wallet: "0xec9aa0a6c2372131a0502aba6188269ab52cacb5", net: 0, received: 380, sent: 380, txs: 3 },
    { wallet: "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae", net: 0, received: 383, sent: 383, txs: 4 },
    { wallet: "0x88cc0800464fcef3e643a369e8a0532990995eee", net: 0, received: 4634, sent: 4634, txs: 3 }
];

const WHALE_LABELS = {

};
