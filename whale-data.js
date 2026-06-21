// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 21, 2026 at 09:42 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 106;
const WHALE_TOTAL_VOLUME      = 6334446;
const WHALE_BIGGEST_SINGLE    = 1418465;

const WHALE_TRANSFERS = [
    { hash: "0x79e7ad324f7df8a75b1456b96b3cd4f8c7e1993f7b05877ed1521c3521000154", ts: 1782031163, from: "0x16877b02f17e86fef7bdaa217f705a0807dea7a7", to: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", amount: 201274, block: 25364827, type: "transfer" },
    { hash: "0xc63e89663fb9f4027aea33f2e00a234ceaa5b27fd8e9cefa1e91d8a6d93cc7a5", ts: 1782029939, from: "0xc5fe50deb784983b0967b22fafbf239841518829", to: "0x16877b02f17e86fef7bdaa217f705a0807dea7a7", amount: 201274, block: 25364725, type: "transfer" },
    { hash: "0xbb6de1233041ecac77f8ee5730afa29825796a94a71e586e54e28d2c76075bfe", ts: 1782029231, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xc5fe50deb784983b0967b22fafbf239841518829", amount: 201274, block: 25364667, type: "transfer" },
    { hash: "0x2402f04013690e8c9da6dcbd729d652fcb95ff55ca584756d426f486ffe4392f", ts: 1782014075, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 266229, block: 25363413, type: "transfer" },
    { hash: "0x68f39bf6076c50f8092f59e471224f0c060b582711ed8a8c0afe3619773c2259", ts: 1782012803, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 266229, block: 25363307, type: "transfer" },
    { hash: "0x3185d2468d793610731e438df8e750cdcce5bebc2916b8d95aa1d1b58a5cf603", ts: 1782012743, from: "0x4329ff8185b20b90d48318ae596c7e4ce45ec803", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 199692, block: 25363302, type: "transfer" },
    { hash: "0xe95ace883a74e79f492e83495be3276f412e4924c2f0d12c81d8cbf17361a202", ts: 1782012695, from: "0x948b119bbe6929ef6dec999ed456ba015aadf8e6", to: "0x4329ff8185b20b90d48318ae596c7e4ce45ec803", amount: 199692, block: 25363298, type: "transfer" },
    { hash: "0xe5d928905f278e1654267fa0237fc251d958196987d931deefe1a92126bdbc32", ts: 1782004187, from: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", to: "0x7c5874a11b4dd3aba411fa8b942ae90d1d662705", amount: 1004509, block: 25362590, type: "transfer" },
    { hash: "0x8bb2263a1ad4fd339d82d2b042595712f3545a4673aede6e9b9dc551b021607d", ts: 1782001319, from: "0x7c5874a11b4dd3aba411fa8b942ae90d1d662705", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 1418465, block: 25362352, type: "transfer" },
    { hash: "0x733b0f107db05ba2e0795b5e241694abbec38cb4f43b733d1ed21fa4db9c59c4", ts: 1782000515, from: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", to: "0x7c5874a11b4dd3aba411fa8b942ae90d1d662705", amount: 1418465, block: 25362285, type: "transfer" },
    { hash: "0x712e6dced10c7f6594ed1900bb2e68937c7ac11ee53817f9ae83445ce9c0be40", ts: 1781992247, from: "0x04c7b4e2db71b2abffe4f2131cf2754533cf32da", to: "0xbbf7e985e1e0ca6f854cecb5096274e8e797e8b4", amount: 150160, block: 25361598, type: "transfer" },
    { hash: "0x2f248adf65099aa3118f88997b4ec0b03ba63cb93c018ecfbd66341415b453d8", ts: 1781990255, from: "0x8f10b468b06c6fd214b65f87778827f7d113f996", to: "0x04c7b4e2db71b2abffe4f2131cf2754533cf32da", amount: 150160, block: 25361433, type: "transfer" },
    { hash: "0x2f248adf65099aa3118f88997b4ec0b03ba63cb93c018ecfbd66341415b453d8", ts: 1781990255, from: "0x74de5d4fcbf63e00296fd95d33236b9794016631", to: "0x8f10b468b06c6fd214b65f87778827f7d113f996", amount: 150160, block: 25361433, type: "transfer" },
    { hash: "0x2f248adf65099aa3118f88997b4ec0b03ba63cb93c018ecfbd66341415b453d8", ts: 1781990255, from: "0x3430b9c4636744dbe738d66a70a494170097bb85", to: "0x74de5d4fcbf63e00296fd95d33236b9794016631", amount: 150160, block: 25361433, type: "transfer" },
    { hash: "0x578c58fc735d5c47d6dcdd6060c884befb4f44a53774c007bef13501972e2423", ts: 1781968775, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0x035ae7d933dcbfe617ffba194a88af0c2867b90c", amount: 201647, block: 25359653, type: "transfer" },
    { hash: "0x4e97c017d176dd56d7414a10dfdc1ec23a372baebdd4f7a24471c915181866fc", ts: 1781968739, from: "0x58edf78281334335effa23101bbe3371b6a36a51", to: "0x035ae7d933dcbfe617ffba194a88af0c2867b90c", amount: 155056, block: 25359650, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 1217191, received: 1418465, sent: 201274, txs: 2 },
    { wallet: "0x7c5874a11b4dd3aba411fa8b942ae90d1d662705", net: 1004509, received: 2422973, sent: 1418465, txs: 3 },
    { wallet: "0x035ae7d933dcbfe617ffba194a88af0c2867b90c", net: 418064, received: 418064, sent: 0, txs: 3 },
    { wallet: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", net: 201274, received: 201274, sent: 0, txs: 1 },
    { wallet: "0xbbf7e985e1e0ca6f854cecb5096274e8e797e8b4", net: 150160, received: 150160, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 123784, received: 278840, sent: 155056, txs: 3 },
    { wallet: "0x19888e92ee029e6641e178ebd2346fc1f7d845bd", net: 88493, received: 88493, sent: 0, txs: 1 },
    { wallet: "0x0d51d069ecf91b13db666708f3e1610af79b9eed", net: 25037, received: 25037, sent: 0, txs: 1 },
    { wallet: "0xe6d3210b13f577b8361d90c4a11c458da8a9594e", net: 22192, received: 22192, sent: 0, txs: 1 },
    { wallet: "0xe8446569ee2311ac5c455cf97e6eb5cd594356ea", net: 21918, received: 21918, sent: 0, txs: 1 },
    { wallet: "0x4015afef85dfe9020c37e094fca46e56854dc5c6", net: 19726, received: 19726, sent: 0, txs: 1 },
    { wallet: "0x0cac5242ef806f210a19a5113270e3f28dae1c64", net: 9231, received: 9231, sent: 0, txs: 1 },
    { wallet: "0x33e9565381b6407fa3e297cc8f6e4dcebae7d179", net: 8630, received: 8630, sent: 0, txs: 1 },
    { wallet: "0x82a365858b4a82eed80e5473c6f698f93b48617f", net: 7715, received: 7715, sent: 0, txs: 1 },
    { wallet: "0x98f870ab30c0530b2e19d1adf5285200f52305a7", net: 7465, received: 7465, sent: 0, txs: 1 },
    { wallet: "0x4ff2f85d8c0864f96de3da4b41272b0abdcca2f5", net: 7397, received: 7397, sent: 0, txs: 1 },
    { wallet: "0x3621680aeefc7aaedaece7b41f33af48ea22ef52", net: 3699, received: 3699, sent: 0, txs: 1 },
    { wallet: "0x7dcf46fa4fc7cd89de5fd534f9833cb8da1e37fb", net: 2506, received: 2506, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0xbb0b683ebd2b2892ed03c0f4871cea073468ab75", net: 2055, received: 2055, sent: 0, txs: 1 },
    { wallet: "0xd06aa22ecc13018a77796e8832718a3d17d7c2ec", net: 1781, received: 1781, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 691, received: 691, sent: 0, txs: 10 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 289, received: 266692, sent: 266404, txs: 10 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 160, received: 160, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1e362885e1cdd5bf7fe1ff2fd53e513bafa97243", net: 13, received: 13, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 4, received: 4, sent: 0, txs: 1 },
    { wallet: "0xd9f04ab1db28774e1c0fe8ab6e764f25dc02161c", net: 1, received: 685, sent: 684, txs: 3 },
    { wallet: "0x16877b02f17e86fef7bdaa217f705a0807dea7a7", net: 0, received: 201274, sent: 201274, txs: 2 },
    { wallet: "0x7f51c134230eb9e5aba42bc364d3d3eba26d9712", net: 0, received: 19503, sent: 19503, txs: 5 },
    { wallet: "0xdb3812cd8d20f27888677ddc97df1241850f8c48", net: 0, received: 18292, sent: 18291, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 175277, sent: 175277, txs: 6 },
    { wallet: "0xc5fe50deb784983b0967b22fafbf239841518829", net: 0, received: 201274, sent: 201274, txs: 2 },
    { wallet: "0x58f75af6fbe73a5f1ef2a16180f9c3b01e8fc230", net: 0, received: 640, sent: 640, txs: 2 },
    { wallet: "0x10916b18ce6deef279f0ee66fab6b6c0e3461b78", net: 0, received: 646, sent: 646, txs: 5 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 1667, sent: 1667, txs: 6 },
    { wallet: "0x3c9108700724d9d96cff2ac8979d6ad2a8d469ae", net: 0, received: 411, sent: 411, txs: 2 },
    { wallet: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", net: 0, received: 266229, sent: 266229, txs: 2 },
    { wallet: "0x4329ff8185b20b90d48318ae596c7e4ce45ec803", net: 0, received: 199692, sent: 199692, txs: 2 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 160, sent: 160, txs: 2 },
    { wallet: "0xd87a9f0010c562332b2b534bde1752e11c05d135", net: 0, received: 21, sent: 21, txs: 4 },
    { wallet: "0x04c7b4e2db71b2abffe4f2131cf2754533cf32da", net: 0, received: 150160, sent: 150160, txs: 2 },
    { wallet: "0x74de5d4fcbf63e00296fd95d33236b9794016631", net: 0, received: 150160, sent: 150160, txs: 2 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 1586, sent: 1586, txs: 4 }
];

const WHALE_LABELS = {

};
