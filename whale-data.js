// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 21, 2026 at 07:22 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 97;
const WHALE_TOTAL_VOLUME      = 5977743;
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
    { hash: "0x2f248adf65099aa3118f88997b4ec0b03ba63cb93c018ecfbd66341415b453d8", ts: 1781990255, from: "0x3430b9c4636744dbe738d66a70a494170097bb85", to: "0x74de5d4fcbf63e00296fd95d33236b9794016631", amount: 150160, block: 25361433, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 1217191, received: 1418465, sent: 201274, txs: 2 },
    { wallet: "0x7c5874a11b4dd3aba411fa8b942ae90d1d662705", net: 1004509, received: 2422973, sent: 1418465, txs: 3 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 278840, received: 278840, sent: 0, txs: 2 },
    { wallet: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", net: 201274, received: 201274, sent: 0, txs: 1 },
    { wallet: "0xbbf7e985e1e0ca6f854cecb5096274e8e797e8b4", net: 150160, received: 150160, sent: 0, txs: 1 },
    { wallet: "0x19888e92ee029e6641e178ebd2346fc1f7d845bd", net: 88493, received: 88493, sent: 0, txs: 1 },
    { wallet: "0x0d51d069ecf91b13db666708f3e1610af79b9eed", net: 25037, received: 25037, sent: 0, txs: 1 },
    { wallet: "0x47670e064a9cf54102481f199915e392ce357d60", net: 24658, received: 24658, sent: 0, txs: 1 },
    { wallet: "0xe6d3210b13f577b8361d90c4a11c458da8a9594e", net: 22192, received: 22192, sent: 0, txs: 1 },
    { wallet: "0x0cac5242ef806f210a19a5113270e3f28dae1c64", net: 9231, received: 9231, sent: 0, txs: 1 },
    { wallet: "0x82a365858b4a82eed80e5473c6f698f93b48617f", net: 7715, received: 7715, sent: 0, txs: 1 },
    { wallet: "0x98f870ab30c0530b2e19d1adf5285200f52305a7", net: 7465, received: 7465, sent: 0, txs: 1 },
    { wallet: "0x4ff2f85d8c0864f96de3da4b41272b0abdcca2f5", net: 7397, received: 7397, sent: 0, txs: 1 },
    { wallet: "0xdaffdcbca50c6c35505460db58c0fc29ca19534f", net: 6575, received: 6575, sent: 0, txs: 1 },
    { wallet: "0xb2730eb750573322e015765076dd5981204e8503", net: 4329, received: 4329, sent: 0, txs: 1 },
    { wallet: "0x3621680aeefc7aaedaece7b41f33af48ea22ef52", net: 3699, received: 3699, sent: 0, txs: 1 },
    { wallet: "0x44926d92979d022991a31ed8ba12580bb9edaac8", net: 2740, received: 2740, sent: 0, txs: 1 },
    { wallet: "0x7dcf46fa4fc7cd89de5fd534f9833cb8da1e37fb", net: 2506, received: 2506, sent: 0, txs: 1 },
    { wallet: "0x441a7d5b829530afeda825043e6daf75535b72bb", net: 2329, received: 2329, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 2055, received: 2055, sent: 0, txs: 1 },
    { wallet: "0xbb0b683ebd2b2892ed03c0f4871cea073468ab75", net: 2055, received: 2055, sent: 0, txs: 1 },
    { wallet: "0x4005d4b50140bcf6221b3ae8df455e10600a02c0", net: 1781, received: 1781, sent: 0, txs: 1 },
    { wallet: "0xd06aa22ecc13018a77796e8832718a3d17d7c2ec", net: 1781, received: 1781, sent: 0, txs: 1 },
    { wallet: "0x1b0b1ad3e6a2fb69c48c2913fea012bc38f0a2e9", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x41ae288f0a798046b33720c3dc80e0351892d6b9", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xe7ff8186307f7781bce361dbe7245e1330550c52", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x6ecac0b40c73a8a776d8e0cd304440ab952b3c64", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xcfa692be640c86bbabe30100e71fc955fdca0ab7", net: 511, received: 511, sent: 0, txs: 1 },
    { wallet: "0xb5fa089ed78657e10d02c2e9e2a9f673deb15c33", net: 486, received: 486, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 400, received: 400, sent: 0, txs: 7 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 160, received: 160, sent: 0, txs: 1 },
    { wallet: "0xe281cb25c08d549659100e2688029aa667653395", net: 154, received: 154, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x5987d62c93f864fff531f79c1f6c8da51eaffce2", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd35bc6fbf44781d488b08a3a5cb02aa010ad27d6", net: 18, received: 18, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 4, received: 4, sent: 0, txs: 1 },
    { wallet: "0x747dd095f8b63a66d7c31f41bb22afb698224e36", net: 0, received: 2740, sent: 2740, txs: 2 },
    { wallet: "0x7c8313e1dbeba8680f88ce603baec540d46f5b4a", net: 0, received: 951, sent: 951, txs: 2 },
    { wallet: "0x01c579618213c31ebdfdbd68bb14d71d8329b9dc", net: 0, received: 959, sent: 959, txs: 3 },
    { wallet: "0xa315a2fc9b7bd651e0ebaa134859bd8153ff12a7", net: 0, received: 959, sent: 959, txs: 2 },
    { wallet: "0x3de0d70dedf741f77abb5894ca24c8e97c265d4b", net: 0, received: 2055, sent: 2055, txs: 2 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 0, received: 2055, sent: 2055, txs: 2 }
];

const WHALE_LABELS = {

};
