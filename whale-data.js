// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 24, 2026 at 02:05 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 84;
const WHALE_TOTAL_VOLUME      = 26802086;
const WHALE_BIGGEST_SINGLE    = 7618957;

const WHALE_TRANSFERS = [
    { hash: "0x1342b073518e2a05ae9dd5400f5787fb9ad0561600606a7c5de22212a962168d", ts: 1784831063, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xce378bb6d7caa25f1c2acf0248cf9a423aaa0cd2", amount: 100000, block: 25597201, type: "transfer" },
    { hash: "0x104e1120b39f96517e0b4efa743dc1fd9b44363df6ffb75fb28a65d10f34d0f5", ts: 1784803175, from: "0x58edf78281334335effa23101bbe3371b6a36a51", to: "0x804b68f60765f4559b7096b158c912ed33aa0c26", amount: 4064307, block: 25594893, type: "transfer" },
    { hash: "0xb7409af1c170aa73ae77dcad4061ba50c5569f7596eb2a9a81d4b99b3e449cfa", ts: 1784803055, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x804b68f60765f4559b7096b158c912ed33aa0c26", amount: 7399865, block: 25594883, type: "transfer" },
    { hash: "0xb38c1f12b6c48c1ae2afbbab73282cb962a646caf68291eb6a9d4e8b38f8815c", ts: 1784787443, from: "0x84b38bc60f3bd82640ecefa320dab2be62e2da15", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 7618957, block: 25593586, type: "transfer" },
    { hash: "0xc46f1f564e3efd0bfb78341f953fe6ab53d00e8bc29b00c1909a475379c64e6c", ts: 1784787059, from: "0x58edf78281334335effa23101bbe3371b6a36a51", to: "0x84b38bc60f3bd82640ecefa320dab2be62e2da15", amount: 7618957, block: 25593554, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x804b68f60765f4559b7096b158c912ed33aa0c26", net: 11464529, received: 11464529, sent: 0, txs: 3 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 7639759, received: 7639759, sent: 0, txs: 3 },
    { wallet: "0xce378bb6d7caa25f1c2acf0248cf9a423aaa0cd2", net: 99900, received: 100000, sent: 100, txs: 2 },
    { wallet: "0xdbba5271c09ccc96d71a6876463e87674300ab35", net: 87671, received: 87671, sent: 0, txs: 1 },
    { wallet: "0x83490bd16191cad1714d4d0ce511aa4006177f4d", net: 40472, received: 40472, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 20549, received: 20776, sent: 227, txs: 4 },
    { wallet: "0x7c876bdaa5c038e19f633714f622f6def949b102", net: 15475, received: 55947, sent: 40472, txs: 2 },
    { wallet: "0xacd7c189957029c2aff7e1f0466475da6960cb85", net: 10137, received: 10137, sent: 0, txs: 1 },
    { wallet: "0x9968cc86715213b4b8aba1d90adc17a706d54904", net: 8905, received: 8905, sent: 0, txs: 1 },
    { wallet: "0x30cfadcdd83701dd41baab255a110290d9bc968b", net: 8630, received: 8630, sent: 0, txs: 1 },
    { wallet: "0xea2a14e490032e9ae7f9e5f38f9f33ebab3e13b8", net: 8082, received: 8082, sent: 0, txs: 1 },
    { wallet: "0x0e727149016c00a66096425cf6b186f17313e8f3", net: 7808, received: 7808, sent: 0, txs: 1 },
    { wallet: "0xa47c51e0dd4f045a5f5c4fbf291268255cc0cc05", net: 5068, received: 5068, sent: 0, txs: 1 },
    { wallet: "0x1a996eb2a69423926d60973fc3d73cf1fa847a2f", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0xe28d7502e70c9b45de8218b122a72a1eaf972695", net: 1743, received: 1743, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xfaa78f45f59770b9274d19bf7bf9b0a10fd5a851", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0xc7d559266d4c4b2255bb3bb62d53338c834b7da7", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x618562b8f62c0688b3f315ed65298bd614d00185", net: 1000, received: 1000, sent: 0, txs: 1 },
    { wallet: "0x3eb99584fd10c38a50a7a2b3b4f050f861601242", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x5d73e31d8588d928d2dcbea05dc8038d86730bf5", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x0a9c28275d73815b4b69d3a0b37834621b4eb210", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x3c9108700724d9d96cff2ac8979d6ad2a8d469ae", net: 411, received: 411, sent: 0, txs: 2 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x044b232de11acd24f7bb67e285534f082cb9ae3e", net: 227, received: 227, sent: 0, txs: 2 },
    { wallet: "0x65a453f605053a2f9cfa007ac30f6851bf66314e", net: 220, received: 220, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 217, received: 217, sent: 0, txs: 5 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x53a3db9fac9a5f15d041d3b0e5d64b37505db5c2", net: 100, received: 100, sent: 0, txs: 1 },
    { wallet: "0x0cba26f3d9baf47165a7f89a51fdfc57216f5739", net: 42, received: 42, sent: 0, txs: 1 },
    { wallet: "0xff85a0417c18ea7fa46e0838f2dabb97488d559d", net: 4, received: 4, sent: 0, txs: 1 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 8715, sent: 8715, txs: 4 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 41725, sent: 41725, txs: 8 },
    { wallet: "0x2d84a18d4d1356420f3115e4d11e26680671c62d", net: 0, received: 5479, sent: 5479, txs: 3 },
    { wallet: "0x747dd095f8b63a66d7c31f41bb22afb698224e36", net: 0, received: 1096, sent: 1096, txs: 4 },
    { wallet: "0x44926d92979d022991a31ed8ba12580bb9edaac8", net: 0, received: 1096, sent: 1096, txs: 4 },
    { wallet: "0x8c19730adfff9e5ff08dba75242dd1195bca48c8", net: 0, received: 1087, sent: 1087, txs: 2 },
    { wallet: "0x3de0d70dedf741f77abb5894ca24c8e97c265d4b", net: 0, received: 822, sent: 822, txs: 2 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 33010, sent: 33010, txs: 6 },
    { wallet: "0x26b5efa51c387a0f8794c232436a2448e6e6d3da", net: 0, received: 19690, sent: 19690, txs: 2 },
    { wallet: "0x214a439a6c52259117ac3598bebe62d0c2efa813", net: 0, received: 19726, sent: 19726, txs: 3 },
    { wallet: "0x84b38bc60f3bd82640ecefa320dab2be62e2da15", net: 0, received: 7618957, sent: 7618957, txs: 2 }
];

const WHALE_LABELS = {

};
