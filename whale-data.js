// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "May 3, 2026 at 06:52 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 372;
const WHALE_TOTAL_VOLUME      = 9175986;
const WHALE_BIGGEST_SINGLE    = 1136820;

const WHALE_TRANSFERS = [
    { hash: "0x04a1e5efc2febe3f2cf01de6070a8a01651f9be3f58d8446bc36573cccd0b79a", ts: 1777828883, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xd862cdcfeb856c32b3c4f7563f4811d8ddfd42e2", amount: 123197, block: 25015929, type: "transfer" },
    { hash: "0xed3a774d2b11af25b7302dab5ab2b60180e52f90b8d9c2122ffc325d4ecefff4", ts: 1777828823, from: "0xd862cdcfeb856c32b3c4f7563f4811d8ddfd42e2", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 123197, block: 25015924, type: "sell" },
    { hash: "0xadfcd7378cd90027bc58f897be8333e05d4e1b9d3ccf9fb5d5bf7d895e3a50fc", ts: 1777813763, from: "0xd2d9c936165a85f27a5a7e07afb974d022b89463", to: "0x6912d024e2b88136c5a586e77b092199963b6083", amount: 618466, block: 25014672, type: "transfer" },
    { hash: "0xadfcd7378cd90027bc58f897be8333e05d4e1b9d3ccf9fb5d5bf7d895e3a50fc", ts: 1777813763, from: "0x52e868e60b37a637359a010977e4a86b63ab266c", to: "0xd2d9c936165a85f27a5a7e07afb974d022b89463", amount: 619085, block: 25014672, type: "transfer" },
    { hash: "0x5a1d14bed7c915e8fa9c04d5178e465767f0c5f67de33bc634d5d364e434781c", ts: 1777813403, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x52e868e60b37a637359a010977e4a86b63ab266c", amount: 619344, block: 25014642, type: "transfer" },
    { hash: "0xfd0ef18ae43925f4771c17dfe059fec55d48ae684b8e2b8d017c118a231c8133", ts: 1777810331, from: "0xd2d9c936165a85f27a5a7e07afb974d022b89463", to: "0x6912d024e2b88136c5a586e77b092199963b6083", amount: 359704, block: 25014386, type: "transfer" },
    { hash: "0xfd0ef18ae43925f4771c17dfe059fec55d48ae684b8e2b8d017c118a231c8133", ts: 1777810331, from: "0x52e868e60b37a637359a010977e4a86b63ab266c", to: "0xd2d9c936165a85f27a5a7e07afb974d022b89463", amount: 360064, block: 25014386, type: "transfer" },
    { hash: "0x9fa2cfbc90470ab1ef757ec6f9e6d8c1fb12f8b392ecc5801ff5be4225ed2bdf", ts: 1777805315, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 192231, block: 25013968, type: "sell" },
    { hash: "0x9fa2cfbc90470ab1ef757ec6f9e6d8c1fb12f8b392ecc5801ff5be4225ed2bdf", ts: 1777805315, from: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 192231, block: 25013968, type: "transfer" },
    { hash: "0x72fe9293c28c2b326662115c53d66281ee689e93ed31e5aec7aacd17e6416084", ts: 1777799339, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8bb88a3eafd6ba0b6cce254c0c447c4cf5860afe", amount: 100000, block: 25013470, type: "buy" },
    { hash: "0xe9d2df8a3dc16fae4511c0471d9b3854047354cbaf426faf81b03281d803e39f", ts: 1777799339, from: "0x1f2f10d1c40777ae1da742455c65828ff36df387", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 264028, block: 25013470, type: "sell" },
    { hash: "0xe9d2df8a3dc16fae4511c0471d9b3854047354cbaf426faf81b03281d803e39f", ts: 1777799339, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x1f2f10d1c40777ae1da742455c65828ff36df387", amount: 264028, block: 25013470, type: "buy" },
    { hash: "0x627a4ec7748fba1b9c530dc3f9a792af4a7fbbc3fb323fbfe8c78a13d13b546d", ts: 1777795859, from: "0x4c3ccc98c01103be72bcfd29e1d2454c98d1a6e3", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100422, block: 25013180, type: "sell" },
    { hash: "0x627a4ec7748fba1b9c530dc3f9a792af4a7fbbc3fb323fbfe8c78a13d13b546d", ts: 1777795859, from: "0x4d0533006898cb292dfd1fe0dce8bad8bbb74cab", to: "0x4c3ccc98c01103be72bcfd29e1d2454c98d1a6e3", amount: 100422, block: 25013180, type: "transfer" },
    { hash: "0x810e135fe602bb72d4741e5efcec442e4929a4209b1d89c19ec54f4ab260595b", ts: 1777795523, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x278d858f05b94576c1e6f73285886876ff6ef8d2", amount: 236030, block: 25013152, type: "buy" },
    { hash: "0xee0b40c68f1eb40018ffd38740f7f1d629da89daab2639a883839888f0302e6c", ts: 1777795415, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8bb88a3eafd6ba0b6cce254c0c447c4cf5860afe", amount: 100000, block: 25013143, type: "buy" },
    { hash: "0xa00e4318587c350fc0ed590a3727bf152edbb24407367275c9d037201eca8600", ts: 1777786931, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 133893, block: 25012437, type: "sell" },
    { hash: "0xa00e4318587c350fc0ed590a3727bf152edbb24407367275c9d037201eca8600", ts: 1777786931, from: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 133893, block: 25012437, type: "transfer" },
    { hash: "0xedc8cf35d2c322eef69c394b172a1e9697778e0a9002293113c8be29734f96fd", ts: 1777781063, from: "0x1f2f10d1c40777ae1da742455c65828ff36df387", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 194843, block: 25011950, type: "sell" },
    { hash: "0xedc8cf35d2c322eef69c394b172a1e9697778e0a9002293113c8be29734f96fd", ts: 1777781063, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x1f2f10d1c40777ae1da742455c65828ff36df387", amount: 194843, block: 25011950, type: "buy" },
    { hash: "0xe2394c827ab387088dc815f2fd7b2103c49f64950f385db3e12651f17745d6ef", ts: 1777780835, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", amount: 152541, block: 25011931, type: "transfer" },
    { hash: "0xe2394c827ab387088dc815f2fd7b2103c49f64950f385db3e12651f17745d6ef", ts: 1777780835, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 152541, block: 25011931, type: "buy" },
    { hash: "0xd3bd77334e4baa94d0b2f41a8ef969487665d4fdb232af81dce7c8358570b973", ts: 1777778519, from: "0x98f870ab30c0530b2e19d1adf5285200f52305a7", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 1003278, block: 25011740, type: "transfer" },
    { hash: "0xb88a3c8086b99ae2fe71ebc0f363159319d6c094181c116802f1053fcfcce2a8", ts: 1777760399, from: "0xc1c4a5c41b62989acdbb9a11bbab668158f5d481", to: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", amount: 469003, block: 25010235, type: "transfer" },
    { hash: "0x66c69af5c262239adc9f4a689f76b402e033dcf9c25c7b1d8e2eeadc9ee7f83f", ts: 1777759307, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xc1c4a5c41b62989acdbb9a11bbab668158f5d481", amount: 469003, block: 25010144, type: "transfer" },
    { hash: "0x5f984e6e0cbcc281877ddfee378ed4724575da15fc34a9e0be6b672c15ae5e0c", ts: 1777757951, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8bb88a3eafd6ba0b6cce254c0c447c4cf5860afe", amount: 100000, block: 25010031, type: "buy" },
    { hash: "0x8ef64574767ca10984e7d3b1c7319e4d103935982eb99200513f9bf6faa9b6bb", ts: 1777757711, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8bb88a3eafd6ba0b6cce254c0c447c4cf5860afe", amount: 100000, block: 25010011, type: "buy" },
    { hash: "0xa61b9026db5baf52218623eeee475a3cc88604475b6bf16dd26c850a9a275f72", ts: 1777757615, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8bb88a3eafd6ba0b6cce254c0c447c4cf5860afe", amount: 100000, block: 25010003, type: "buy" },
    { hash: "0x1f1d5f6cb85c35cce2aae347ba08bbccf14c09fa8e55eb6fbbd67743576aa836", ts: 1777753331, from: "0x8782163068c7cd74d2510768a61135c1e4eb07b3", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 1136820, block: 25009648, type: "transfer" },
    { hash: "0xbdd65f45fbfc330d7dce3ae8f4b088b7cfb4b9cf4699445ef8316ee02f6538ac", ts: 1777753103, from: "0xa03400e098f4421b34a3a44a1b4e571419517687", to: "0x8782163068c7cd74d2510768a61135c1e4eb07b3", amount: 316578, block: 25009629, type: "transfer" },
    { hash: "0x945e5acd86a3a88a75f34367a9d8698c9766aaacc449fcd05f94f2b5eadc1ce9", ts: 1777747859, from: "0x2dea8f2c1656129f6e29979a2ae45b47ce97c77b", to: "0xf09199c085f1d338c284810bf5e461f7d4d3cc3a", amount: 146301, block: 25009194, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 1298746, received: 2140098, sent: 841353, txs: 5 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 978169, received: 978169, sent: 0, txs: 2 },
    { wallet: "0x8bb88a3eafd6ba0b6cce254c0c447c4cf5860afe", net: 500000, received: 500000, sent: 0, txs: 5 },
    { wallet: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", net: 475791, received: 1149710, sent: 673919, txs: 19 },
    { wallet: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", net: 469003, received: 469003, sent: 0, txs: 1 },
    { wallet: "0xf09199c085f1d338c284810bf5e461f7d4d3cc3a", net: 146301, received: 146301, sent: 0, txs: 1 },
    { wallet: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", net: 89569, received: 957771, sent: 868202, txs: 19 },
    { wallet: "0x57ba479e67ae2107ebf5b4bf6f45761eeacbdbba", net: 47260, received: 47260, sent: 0, txs: 1 },
    { wallet: "0x808b8c2b5f34ea187ffadc6b102f45b60fd122f9", net: 38219, received: 38219, sent: 0, txs: 1 },
    { wallet: "0xfa7111fe94945117da6edb18e6662145faaf0768", net: 35282, received: 35282, sent: 0, txs: 1 },
    { wallet: "0x0a1354ba9359d7aded40faf11bbe590e2c14bec7", net: 35282, received: 35282, sent: 0, txs: 1 },
    { wallet: "0xb5fa089ed78657e10d02c2e9e2a9f673deb15c33", net: 17103, received: 17103, sent: 0, txs: 1 },
    { wallet: "0x7eda45bc018062fc0dc083050c79f36d95bb7da0", net: 8082, received: 8082, sent: 0, txs: 1 },
    { wallet: "0x8fc10b6fc4addc655143f1478689518a73d963cc", net: 7778, received: 7778, sent: 0, txs: 1 },
    { wallet: "0xe26dcfdfbc60e46e73a0297c313f6c305f1dad12", net: 6575, received: 6575, sent: 0, txs: 1 },
    { wallet: "0xdaffdcbca50c6c35505460db58c0fc29ca19534f", net: 6575, received: 6575, sent: 0, txs: 1 },
    { wallet: "0x051a038f87d765334405f2c0b64efa7e5a625d4f", net: 5556, received: 5556, sent: 0, txs: 1 },
    { wallet: "0x785322915463f5279b76103b8f28fb548a8c8b98", net: 3973, received: 3973, sent: 0, txs: 1 },
    { wallet: "0xb388788b29fa56289c5f2b87b5fe29e41dd31b26", net: 2740, received: 2740, sent: 0, txs: 1 },
    { wallet: "0x855992fbda59048156cb4bc75fad65d0bfa80f3b", net: 2329, received: 2329, sent: 0, txs: 1 },
    { wallet: "0x747dd095f8b63a66d7c31f41bb22afb698224e36", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 2084, received: 2579, sent: 495, txs: 4 },
    { wallet: "0xa40ba1d41c1be423c9d7f3173b8c76175bcc1c99", net: 1918, received: 1918, sent: 0, txs: 1 },
    { wallet: "0x82d9a407f99a95db4671e7021d625cbd0787a407", net: 979, received: 979, sent: 0, txs: 2 },
    { wallet: "0xe7ff8186307f7781bce361dbe7245e1330550c52", net: 822, received: 822, sent: 0, txs: 2 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 512, received: 512, sent: 0, txs: 8 },
    { wallet: "0xd11a748e4e1802d2c9e11bec1518736ad7646946", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x9df14235393c7a9d2bc38db6c12c61b699e094c6", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x0faafa9fff76cd4d6dbf01d31d20dc7e75b6771a", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x950618712a5cd5a221c8a95930947cb76576eb76", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x5d73e31d8588d928d2dcbea05dc8038d86730bf5", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x278d858f05b94576c1e6f73285886876ff6ef8d2", net: 272, received: 1934698, sent: 1934426, txs: 149 },
    { wallet: "0x10916b18ce6deef279f0ee66fab6b6c0e3461b78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x5ec7ff0249f58351693b3faf3f94c0d9f9aa9e73", net: 131, received: 131, sent: 0, txs: 1 },
    { wallet: "0x9008d19f58aabd9ed0d60971565aa8510560ab41", net: 55, received: 222839, sent: 222784, txs: 8 },
    { wallet: "0x5651117908b270beb695b66d30bd3ee4df5a97e8", net: 37, received: 37, sent: 0, txs: 1 },
    { wallet: "0x958dfe274aea58e0f5bfe06a82971b7610e6a42e", net: 23, received: 23, sent: 0, txs: 1 },
    { wallet: "0xd806bfeb78718e9b82a524ed1b00578e46c1be33", net: 18, received: 3014, sent: 2995, txs: 2 },
    { wallet: "0x1e9e4d773c70f4e242e8695b2b11d8dc138b50f5", net: 14, received: 14, sent: 0, txs: 1 },
    { wallet: "0x8bccbd94d77e9b63908bec446ca79cf2912c5414", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 37712, sent: 37712, txs: 8 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 4747, sent: 4747, txs: 4 }
];

const WHALE_LABELS = {
    "0x0d0707963952f2fba59dd06f2b425ace40b492fe": "gate-io",
    "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc": "bitvavo",
    "0x2cff890f0378a11913b6129b2e97417a2c302680": "near-intents",
    "0x9008d19f58aabd9ed0d60971565aa8510560ab41": "cowswap",
    "0x7f54f05635d15cde17a49502fedb9d1803a3be8a": "0x",
    "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f": "relay-link",
    "0xd2d9c936165a85f27a5a7e07afb974d022b89463": "wormhole",
    "0x1f2f10d1c40777ae1da742455c65828ff36df387": "jaredfromsubway",
    "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2": "kraken",
    "0xa03400e098f4421b34a3a44a1b4e571419517687": "huobi"
};
