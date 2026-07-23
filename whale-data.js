// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 23, 2026 at 01:42 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 146;
const WHALE_TOTAL_VOLUME      = 27489574;
const WHALE_BIGGEST_SINGLE    = 7618957;

const WHALE_TRANSFERS = [
    { hash: "0x104e1120b39f96517e0b4efa743dc1fd9b44363df6ffb75fb28a65d10f34d0f5", ts: 1784803175, from: "0x58edf78281334335effa23101bbe3371b6a36a51", to: "0x804b68f60765f4559b7096b158c912ed33aa0c26", amount: 4064307, block: 25594893, type: "transfer" },
    { hash: "0xb7409af1c170aa73ae77dcad4061ba50c5569f7596eb2a9a81d4b99b3e449cfa", ts: 1784803055, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x804b68f60765f4559b7096b158c912ed33aa0c26", amount: 7399865, block: 25594883, type: "transfer" },
    { hash: "0xb38c1f12b6c48c1ae2afbbab73282cb962a646caf68291eb6a9d4e8b38f8815c", ts: 1784787443, from: "0x84b38bc60f3bd82640ecefa320dab2be62e2da15", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 7618957, block: 25593586, type: "transfer" },
    { hash: "0xc46f1f564e3efd0bfb78341f953fe6ab53d00e8bc29b00c1909a475379c64e6c", ts: 1784787059, from: "0x58edf78281334335effa23101bbe3371b6a36a51", to: "0x84b38bc60f3bd82640ecefa320dab2be62e2da15", amount: 7618957, block: 25593554, type: "transfer" },
    { hash: "0x6b18edb683c225566a4358df416be13a9e70cd4b3711e9ae57ee54f72788db53", ts: 1784741939, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x30899b705d6941f8f92ed06ca91f617e7ac922c2", amount: 291507, block: 25589812, type: "transfer" },
    { hash: "0xc69f49bbfb2af42a15c37ac984b71b4cd40d1018d87e1a1c7966c3fbb2bc44aa", ts: 1784732687, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x004a37a6678b92903a001221552b14c9209c7af3", amount: 111370, block: 25589045, type: "transfer" },
    { hash: "0xe0032f40b6c59b0b000378974221b30fb56a29ce68d55afe58178ab33e1bb0a7", ts: 1784730251, from: "0x9642b23ed1e01df1092b92641051881a322f5d4e", to: "0xacbee96f3a3ff3d6f7c3bbb6e39752cdcc717c6c", amount: 384611, block: 25588845, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x804b68f60765f4559b7096b158c912ed33aa0c26", net: 11464529, received: 11464529, sent: 0, txs: 3 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 7638937, received: 7638937, sent: 0, txs: 2 },
    { wallet: "0xacbee96f3a3ff3d6f7c3bbb6e39752cdcc717c6c", net: 384611, received: 384611, sent: 0, txs: 1 },
    { wallet: "0x30899b705d6941f8f92ed06ca91f617e7ac922c2", net: 291507, received: 291507, sent: 0, txs: 1 },
    { wallet: "0x004a37a6678b92903a001221552b14c9209c7af3", net: 111370, received: 111370, sent: 0, txs: 1 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 48797, received: 48797, sent: 0, txs: 2 },
    { wallet: "0x0210b449f2d6c167fd45f344cc01bde83b950e2f", net: 41096, received: 41096, sent: 0, txs: 1 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 39981, received: 39981, sent: 0, txs: 4 },
    { wallet: "0x6e1d9c66618d68fc4b41918e5d8cfaee296e3269", net: 34888, received: 34888, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 32921, received: 33068, sent: 147, txs: 3 },
    { wallet: "0x1a996eb2a69423926d60973fc3d73cf1fa847a2f", net: 28493, received: 28493, sent: 0, txs: 1 },
    { wallet: "0x663be09177f64abf43694177c05300a7fd28667d", net: 20000, received: 20000, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 19058, received: 19058, sent: 0, txs: 1 },
    { wallet: "0xbbf7e985e1e0ca6f854cecb5096274e8e797e8b4", net: 10231, received: 10231, sent: 0, txs: 2 },
    { wallet: "0xacd7c189957029c2aff7e1f0466475da6960cb85", net: 10137, received: 10137, sent: 0, txs: 1 },
    { wallet: "0x3eb99584fd10c38a50a7a2b3b4f050f861601242", net: 9041, received: 9041, sent: 0, txs: 1 },
    { wallet: "0x9968cc86715213b4b8aba1d90adc17a706d54904", net: 8905, received: 8905, sent: 0, txs: 1 },
    { wallet: "0x30cfadcdd83701dd41baab255a110290d9bc968b", net: 8630, received: 8630, sent: 0, txs: 1 },
    { wallet: "0xf68f7da978ca3cd9acbcb80672c9bde2e050b35f", net: 8219, received: 8219, sent: 0, txs: 1 },
    { wallet: "0xea2a14e490032e9ae7f9e5f38f9f33ebab3e13b8", net: 8082, received: 8082, sent: 0, txs: 1 },
    { wallet: "0x0e727149016c00a66096425cf6b186f17313e8f3", net: 7808, received: 7808, sent: 0, txs: 1 },
    { wallet: "0xdc56fd9d0112f44c9c4944e544fd20987c8b3a8c", net: 2675, received: 2675, sent: 0, txs: 1 },
    { wallet: "0xe28d7502e70c9b45de8218b122a72a1eaf972695", net: 1743, received: 1743, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0xc7d559266d4c4b2255bb3bb62d53338c834b7da7", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x618562b8f62c0688b3f315ed65298bd614d00185", net: 1000, received: 1000, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 959, received: 959, sent: 0, txs: 2 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x5d73e31d8588d928d2dcbea05dc8038d86730bf5", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x44926d92979d022991a31ed8ba12580bb9edaac8", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x01e7b7efee5150b83b4448f85ffee9d9e867e3c4", net: 378, received: 3299, sent: 2921, txs: 3 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 325, received: 325, sent: 0, txs: 8 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 274, received: 274, sent: 0, txs: 2 },
    { wallet: "0x3620002e79381c888479e4c57074d8c385f8d932", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x65a453f605053a2f9cfa007ac30f6851bf66314e", net: 220, received: 220, sent: 0, txs: 1 },
    { wallet: "0x044b232de11acd24f7bb67e285534f082cb9ae3e", net: 147, received: 147, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x83ce36503d668dc4efe16416b92f498d06cdc88b", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x0cba26f3d9baf47165a7f89a51fdfc57216f5739", net: 42, received: 42, sent: 0, txs: 1 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 24, received: 24, sent: 0, txs: 1 },
    { wallet: "0xff85a0417c18ea7fa46e0838f2dabb97488d559d", net: 4, received: 4, sent: 0, txs: 1 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 51351, sent: 51351, txs: 20 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 57318, sent: 57318, txs: 24 },
    { wallet: "0x26b5efa51c387a0f8794c232436a2448e6e6d3da", net: 0, received: 19690, sent: 19690, txs: 2 }
];

const WHALE_LABELS = {

};
