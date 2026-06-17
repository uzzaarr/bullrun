// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 17, 2026 at 08:06 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 129;
const WHALE_TOTAL_VOLUME      = 9679916;
const WHALE_BIGGEST_SINGLE    = 2575342;

const WHALE_TRANSFERS = [
    { hash: "0x0a6a65f2e2e3b4325919b1b0f0731e6fd236262cc93bb41eceb7ffefeba959d6", ts: 1781698571, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0x7dafba1d69f6c01ae7567ffd7b046ca03b706f83", amount: 168130, block: 25337205, type: "transfer" },
    { hash: "0xed11a806707bdad7038b4ca47099da5de679936932139824399796f43fdb8a44", ts: 1781698571, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", amount: 286356, block: 25337205, type: "transfer" },
    { hash: "0x6422fb9a63d1f15a3e545523a89a8ceac9a365a342f246242530548a88b7a04d", ts: 1781694863, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xc07f8b8d4b5a5c7cc420267c3f50eb0c9e72f306", amount: 115068, block: 25336899, type: "transfer" },
    { hash: "0xef5809a108006ada2f0a0383543a8d0107fb0654eaba92dbf4ed657e4f5bd294", ts: 1781685119, from: "0x1e1357db875454accefd4e13b0aadf2864341601", to: "0xf1a6d3273ab0ba8c18cb887bf2e215e458d1cb91", amount: 2575342, block: 25336090, type: "transfer" },
    { hash: "0x9369f0eb11291321c08a5d170f432164b59a5a237d59daa7940fa4b630d63707", ts: 1781684915, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x1e1357db875454accefd4e13b0aadf2864341601", amount: 2575342, block: 25336073, type: "transfer" },
    { hash: "0x56c650ea24465557f116e990c004521cc00ec84f9c05c2290eb4ffffce4687df", ts: 1781680331, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0x8782163068c7cd74d2510768a61135c1e4eb07b3", amount: 204819, block: 25335692, type: "transfer" },
    { hash: "0x78fef3d182c65c7b2168e68d700cec49993840cb879a89fb10ae32eef7a15fe1", ts: 1781680307, from: "0x58edf78281334335effa23101bbe3371b6a36a51", to: "0x8782163068c7cd74d2510768a61135c1e4eb07b3", amount: 114391, block: 25335690, type: "transfer" },
    { hash: "0x3261b16d62c804909da3f04f186d609f91297ca6da8da8113bf82bb115dc64fb", ts: 1781672243, from: "0x818331cb8264229320220c1af7fa0784d905a90f", to: "0xf73abe6b4fc98a223926db091742e1cd7d7b1bce", amount: 1800000, block: 25335020, type: "transfer" },
    { hash: "0x2dcf995df32909ab9e5cdc519fa953ced90ca3377bfc071727c0c54abf162f88", ts: 1781664371, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 261180, block: 25334365, type: "transfer" },
    { hash: "0xea4640efd7240f65538d57eae361216ff6f02cb606d90de3098959b080b76d73", ts: 1781663963, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 261180, block: 25334331, type: "transfer" },
    { hash: "0x90614452db55982004f5c8a37b7a1e17820f2da8b96535ffeeed1ee9ee17bbe5", ts: 1781663759, from: "0xfc904a0c244bd965e12a7ae3a5afd0208538dcea", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 247566, block: 25334314, type: "transfer" },
    { hash: "0x6333ea1b2c0015b079197cbc5bb18c08f15ad92359208c34b39f1b9421cb2293", ts: 1781663711, from: "0x787331fd03269ee6fb778c26e0e7adc505ba8bba", to: "0xfc904a0c244bd965e12a7ae3a5afd0208538dcea", amount: 247566, block: 25334310, type: "transfer" },
    { hash: "0xf4e893b2451f48d09c41d84a373197ff68cf0adce0de0e2350740dc5824b95ad", ts: 1781653787, from: "0xc1c4a5c41b62989acdbb9a11bbab668158f5d481", to: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", amount: 411488, block: 25333485, type: "transfer" },
    { hash: "0xbe0289d940b4309ccb06b97ab1d9a03c1cf4bfb429d726b360ea1b546d30afbb", ts: 1781652707, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xc1c4a5c41b62989acdbb9a11bbab668158f5d481", amount: 411488, block: 25333396, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xf1a6d3273ab0ba8c18cb887bf2e215e458d1cb91", net: 2575342, received: 2575342, sent: 0, txs: 1 },
    { wallet: "0xf73abe6b4fc98a223926db091742e1cd7d7b1bce", net: 1800000, received: 1800000, sent: 0, txs: 1 },
    { wallet: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", net: 411488, received: 411488, sent: 0, txs: 1 },
    { wallet: "0x8782163068c7cd74d2510768a61135c1e4eb07b3", net: 319210, received: 319210, sent: 0, txs: 2 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 286356, received: 286356, sent: 0, txs: 1 },
    { wallet: "0x7dafba1d69f6c01ae7567ffd7b046ca03b706f83", net: 168130, received: 168130, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 147944, received: 262335, sent: 114391, txs: 3 },
    { wallet: "0xc07f8b8d4b5a5c7cc420267c3f50eb0c9e72f306", net: 115068, received: 115068, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 57968, received: 57968, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 40184, received: 301369, sent: 261185, txs: 12 },
    { wallet: "0xbe4ae6e24d12dbd180517f126765178bae81f341", net: 26301, received: 26301, sent: 0, txs: 1 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 18417, received: 18417, sent: 0, txs: 3 },
    { wallet: "0x98f870ab30c0530b2e19d1adf5285200f52305a7", net: 12507, received: 12507, sent: 0, txs: 4 },
    { wallet: "0xbcc316901ce399789fc5f0559056871c6dba42a6", net: 9726, received: 9726, sent: 0, txs: 1 },
    { wallet: "0xd926c341af7bdee4431007f01ed62ac04511b703", net: 9452, received: 9452, sent: 0, txs: 1 },
    { wallet: "0xb63d8fe95d2781935d31d3cbc1f525099c61a2cd", net: 7945, received: 7945, sent: 0, txs: 1 },
    { wallet: "0xde704aca4424f7177a6204e42d4ce943d44bf7be", net: 7260, received: 7260, sent: 0, txs: 1 },
    { wallet: "0x878498d7a1ef5e2a2a8b69377a52ef3c08238781", net: 6027, received: 6027, sent: 0, txs: 1 },
    { wallet: "0xbf7d14d0d1efefc6ec2ecc07b2bc026324743c00", net: 6027, received: 6027, sent: 0, txs: 1 },
    { wallet: "0x793a9558a0ca9de122cbffa8a8b5542213672a19", net: 5890, received: 5890, sent: 0, txs: 1 },
    { wallet: "0x971c922b9273a0213dfb34b3ab9178f7fed0246c", net: 4795, received: 4795, sent: 0, txs: 1 },
    { wallet: "0x4dc40a8d58772fa690b910a559203e7e2f18b067", net: 4110, received: 4110, sent: 0, txs: 1 },
    { wallet: "0x437059127ca310796bea44a39d4b0338f9f6c12a", net: 3014, received: 3014, sent: 0, txs: 1 },
    { wallet: "0x543a74cf6ce42c95df200eb2c3b19af7e7157c16", net: 2994, received: 2994, sent: 0, txs: 1 },
    { wallet: "0xa9316ed0374857f5cc6aa20dde48fbd82dd08293", net: 2603, received: 2603, sent: 0, txs: 1 },
    { wallet: "0x5532d65385e664eef604976354608a9dc4d9ae7c", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0x87607b0495272d2cb7ab5bcccf26e24af4b84473", net: 1985, received: 1985, sent: 0, txs: 1 },
    { wallet: "0xee24dffca375eaa986e0159cbec5994f759c03ce", net: 1781, received: 1781, sent: 0, txs: 1 },
    { wallet: "0x5f1c5951c5b1cc112ba9e89b9467edca33063453", net: 1391, received: 1391, sent: 0, txs: 1 },
    { wallet: "0xd4ecca8f08ac6fadaed2cb141637c95ee4c74d43", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x20694bb5c906ee71e696587be233284f995564b7", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1064, received: 1064, sent: 0, txs: 10 },
    { wallet: "0x2efc655f68d1e0c7c5e41f0a25ffc8230ac96b22", net: 949, received: 949, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xe7ff8186307f7781bce361dbe7245e1330550c52", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x0761bacd001837594388349707bd398c02a7d7cf", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x5987d62c93f864fff531f79c1f6c8da51eaffce2", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x3c9108700724d9d96cff2ac8979d6ad2a8d469ae", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x1ab2a7c6178467e8e2fd9c9a42d33024c8d6e1d0", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x52866fd157577897ce627022b9c19bd2e622fd7a", net: 156, received: 156, sent: 0, txs: 2 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x907262769c7143796829c3d9595d8d4007e65cd1", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x3d126d6b1581f7566a34bd4e912920bba41367d5", net: 64, received: 58032, sent: 57968, txs: 3 },
    { wallet: "0x6f1d3836afb86b0d2a7ab7869e1f877082e6be1b", net: 5, received: 5, sent: 0, txs: 2 },
    { wallet: "0xac1aa30296bb107b1164b32c1c3ad27733f20487", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0xa109e4d1e44da314d86aaa223330d3f8b9b0c037", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0x43284dc469d348221b3ed7bde3a22196c186c085", net: 0, received: 1985, sent: 1985, txs: 2 }
];

const WHALE_LABELS = {

};
