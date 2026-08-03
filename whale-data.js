// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "August 3, 2026 at 09:32 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 166;
const WHALE_TOTAL_VOLUME      = 1176540;
const WHALE_BIGGEST_SINGLE    = 149203;

const WHALE_TRANSFERS = [
    { hash: "0x6f80e2913eae4e340ab44002800c3d29e5ed6f55ab4763c506c649a46c6fa944", ts: 1785696707, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 149203, block: 25669110, type: "transfer" },
    { hash: "0x032cdd20d39d46b1ac0d3f2b0ee4caf7c87719b538e53d64f93561a86b7a7c2c", ts: 1785696311, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 149203, block: 25669077, type: "transfer" },
    { hash: "0xc2315831d5191a481ec7469381fd447b78de12cfa6ed5ccb438e9a9c4a2aac60", ts: 1785696227, from: "0x1e1bb1bb578d24ab4bbaaffa133dd495a0580d69", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 100861, block: 25669070, type: "transfer" },
    { hash: "0x8d7f0cca1c3d32d18c81839f52663c13dd4352141ae1b2370fd6e5454f9e1787", ts: 1785696047, from: "0x3133b79259f81a3ee3cfba7525de39b7c9b45c37", to: "0x1e1bb1bb578d24ab4bbaaffa133dd495a0580d69", amount: 100861, block: 25669055, type: "transfer" },
    { hash: "0xc8b7a9ac0de9256ce319ab334d59a0c45b28bf527110a24cd36b6b10e1f1ba52", ts: 1785695939, from: "0x8ade75cf990ea264d36a6bde22a1fe9d3ba75017", to: "0x3133b79259f81a3ee3cfba7525de39b7c9b45c37", amount: 101000, block: 25669046, type: "transfer" },
    { hash: "0x1da1b16624aff714d0246c3bf61899926d18e4a458f9a4b5c0099b3eeeb78d7f", ts: 1785695819, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x8ade75cf990ea264d36a6bde22a1fe9d3ba75017", amount: 101096, block: 25669036, type: "transfer" },
    { hash: "0xe7f70045e91df91d1cd50eee506f009c68e982d2cd174b6bcd4d4c6ece7b7744", ts: 1785666347, from: "0xd0be1fded5d964619b92b3672c08c43305529be0", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 105067, block: 25666588, type: "transfer" },
    { hash: "0x2d08e3a02e470d5de772e3181394fbb547b02b4fa57523b165c17cf8565fd273", ts: 1785664151, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0xd0be1fded5d964619b92b3672c08c43305529be0", amount: 105067, block: 25666406, type: "buy" },
    { hash: "0xc87d5bcf1a0970aeae72eea756b968ceb64290f1c27a6abd294a95b166f69731", ts: 1785664139, from: "0xef7232f46c8672d37a0db104759c59699fda69c8", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 131990, block: 25666405, type: "sell" },
    { hash: "0x9056de419b7070aed2e2f2d7f2d90cacac8de416f91a2f0a8b5b7a6fab32c8bd", ts: 1785664103, from: "0x0761bacd001837594388349707bd398c02a7d7cf", to: "0xef7232f46c8672d37a0db104759c59699fda69c8", amount: 132192, block: 25666402, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 196540, received: 196540, sent: 0, txs: 2 },
    { wallet: "0x67336cec42645f55059eff241cb02ea5cc52ff86", net: 119414, received: 185971, sent: 66557, txs: 15 },
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 48008, received: 105067, sent: 57059, txs: 2 },
    { wallet: "0xb3c946d26606bcbd0045deb3e311fa0311e25460", net: 25479, received: 25479, sent: 0, txs: 1 },
    { wallet: "0x28ede55e0ff5e20d732b989879aecfd87b8f761b", net: 24634, received: 24634, sent: 0, txs: 1 },
    { wallet: "0xead224e9ac09ac94a3d4c0ab1f16bc4e7cb4574c", net: 22264, received: 22264, sent: 0, txs: 1 },
    { wallet: "0xbe4ae6e24d12dbd180517f126765178bae81f341", net: 19726, received: 19726, sent: 0, txs: 1 },
    { wallet: "0xf35fcd53113667ffff169c64784a71b0b7e62c33", net: 11233, received: 11233, sent: 0, txs: 1 },
    { wallet: "0x053e6294400a9268e35df445624f58087c7f388f", net: 6727, received: 6727, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 6575, received: 6575, sent: 0, txs: 1 },
    { wallet: "0xce5422d95915914c89590c057fbebb3d328cd3d6", net: 6341, received: 6341, sent: 0, txs: 1 },
    { wallet: "0xf68f7da978ca3cd9acbcb80672c9bde2e050b35f", net: 4110, received: 4110, sent: 0, txs: 1 },
    { wallet: "0x785322915463f5279b76103b8f28fb548a8c8b98", net: 3973, received: 3973, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x5532d65385e664eef604976354608a9dc4d9ae7c", net: 1233, received: 2466, sent: 1233, txs: 3 },
    { wallet: "0xc26ff22e2f18f54f82f74593529a27347a5a56ff", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 809, received: 809, sent: 0, txs: 11 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x855992fbda59048156cb4bc75fad65d0bfa80f3b", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd11a748e4e1802d2c9e11bec1518736ad7646946", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 404, received: 404, sent: 0, txs: 2 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x8ade75cf990ea264d36a6bde22a1fe9d3ba75017", net: 96, received: 101096, sent: 101000, txs: 2 },
    { wallet: "0xdff2fb2944d6571be99573d9c3ec03fda3f02465", net: 16, received: 16, sent: 0, txs: 1 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 10, received: 10, sent: 0, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 122344, sent: 122344, txs: 18 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 32344, sent: 32344, txs: 14 },
    { wallet: "0x27ad186bb115a2b41fb64553efd4ba5a74b83b08", net: 0, received: 83901, sent: 83901, txs: 4 },
    { wallet: "0x2d84a18d4d1356420f3115e4d11e26680671c62d", net: 0, received: 1370, sent: 1370, txs: 3 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 0, received: 1370, sent: 1370, txs: 2 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 170490, sent: 170490, txs: 34 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 0, received: 85245, sent: 85245, txs: 17 },
    { wallet: "0xda721306ab6d2e0f383e1c1d38acf2872439bc83", net: 0, received: 1091, sent: 1091, txs: 2 },
    { wallet: "0x950618712a5cd5a221c8a95930947cb76576eb76", net: 0, received: 1096, sent: 1096, txs: 3 },
    { wallet: "0x9f4846679287e7c8da0e8e61f08eb378b6d5f3cf", net: 0, received: 47337, sent: 47337, txs: 2 },
    { wallet: "0x447a03c131c0a97a8b8d548e3cd81aec4ce05d73", net: 0, received: 69600, sent: 69600, txs: 3 },
    { wallet: "0x111116053f09d34a7eae8102887004445176ca11", net: 0, received: 138744, sent: 138744, txs: 12 },
    { wallet: "0xc1601b2620b38b6dec38ecf17007a94818890dca", net: 0, received: 98630, sent: 98630, txs: 3 },
    { wallet: "0x2316417e39e0d394b9341624efb3e3368cdd52e4", net: 0, received: 98630, sent: 98630, txs: 2 },
    { wallet: "0x66a9893cc07d91d95644aedd05d03f95e1dba8af", net: 0, received: 31168, sent: 31168, txs: 6 },
    { wallet: "0x082738d007001080a00099a000004f3006152085", net: 0, received: 31168, sent: 31168, txs: 4 },
    { wallet: "0xf43adcbab9a281e4215da2ee18c6d7434705135a", net: 0, received: 31168, sent: 31168, txs: 2 },
    { wallet: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", net: 0, received: 149203, sent: 149203, txs: 2 },
    { wallet: "0x1e1bb1bb578d24ab4bbaaffa133dd495a0580d69", net: 0, received: 100861, sent: 100861, txs: 2 },
    { wallet: "0xc78f106fdeaee6ff16a93adb268a0b7a4dcd7b28", net: 0, received: 6727, sent: 6727, txs: 2 }
];

const WHALE_LABELS = {

};
