// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 22, 2026 at 11:42 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 150;
const WHALE_TOTAL_VOLUME      = 24898330;
const WHALE_BIGGEST_SINGLE    = 4761305;

const WHALE_TRANSFERS = [
    { hash: "0x04527eb1cad4d036d027c56626757e37c5c07586eb882ceaac609dd68a318e09", ts: 1782126047, from: "0x58edf78281334335effa23101bbe3371b6a36a51", to: "0xb8e6d31e7b212b2b7250ee9c26c56cebbfbe6b23", amount: 3773794, block: 25372704, type: "transfer" },
    { hash: "0x8b2f473a74d1dd9e4adacdecd14a3f4b14babbd60b3806f066a92bb2df0d016f", ts: 1782120167, from: "0x2b2fc968922490e284de692f1acb19d76111559b", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 4761305, block: 25372216, type: "transfer" },
    { hash: "0xca8580e936318373ad54fc34f6cc296b5ced578768c0735c44b9378421741660", ts: 1782117887, from: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", to: "0x2b2fc968922490e284de692f1acb19d76111559b", amount: 4761305, block: 25372026, type: "transfer" },
    { hash: "0x5f92296632f4a11681ca9e84d6e036b978b4eaf0b390ef66a1bb9e074ae9af22", ts: 1782106307, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 1469773, block: 25371062, type: "transfer" },
    { hash: "0x7e579fa1d98574a86260599190400f9af3c6f99645fd880df8c92be8bad5e3ac", ts: 1782106031, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 728648, block: 25371039, type: "transfer" },
    { hash: "0x076a5bdc96da54ec7d4d34345de27e5bb3bc3bedfaebab8bd97fb83b9d80c5c4", ts: 1782105803, from: "0x2c23feb1d646fb12265d93cceabf57431da7a046", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 729378, block: 25371020, type: "transfer" },
    { hash: "0x0c58bdbd8f4cc99947aae8bbb55ba41534d9d28032a348fe7572dc7ecd1e091b", ts: 1782105755, from: "0x317ce939f7ede091d6700f54fb67c12faf2538b6", to: "0x2c23feb1d646fb12265d93cceabf57431da7a046", amount: 729378, block: 25371016, type: "transfer" },
    { hash: "0xaebe0bbfd250b124deee94dbe13e0afabc83997da3ac38eed646dfa9f66e0cf4", ts: 1782105695, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 741125, block: 25371011, type: "transfer" },
    { hash: "0xd49caa98163b57c0c07ecee9d7a470126c6bbd912b30f35dfbc5932a1cdd43a2", ts: 1782105635, from: "0xe5bbbea0163c1c39beba0c38ce4890efe1c82002", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 729378, block: 25371006, type: "transfer" },
    { hash: "0x762359b9d96afcb8be1ccd1998c30ffa5eefab0ec708179cd97fafca640a37b0", ts: 1782105551, from: "0x317ce939f7ede091d6700f54fb67c12faf2538b6", to: "0xe5bbbea0163c1c39beba0c38ce4890efe1c82002", amount: 729378, block: 25370999, type: "transfer" },
    { hash: "0xf901c0d09ea52add1f5222a40f5451fcdeea30ab2cfc925450047a6eee45d4e0", ts: 1782100103, from: "0xc1c4a5c41b62989acdbb9a11bbab668158f5d481", to: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", amount: 1749937, block: 25370546, type: "transfer" },
    { hash: "0x69028bd0a8e4aa59bd5d7c1b373b73f1fe30f2efbd34583b1846824e24a562e8", ts: 1782099551, from: "0x00063b65a2952400267d5182b3d481c9d1c4d983", to: "0xed4581801c72a9da8a87323cbfa148e0f32e0b2a", amount: 100000, block: 25370500, type: "transfer" },
    { hash: "0x1d46ec221d13b9653afd5a5d8a76f074612721390d8cc1da1621136299baf8dc", ts: 1782099371, from: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", to: "0xc1c4a5c41b62989acdbb9a11bbab668158f5d481", amount: 1749937, block: 25370485, type: "transfer" },
    { hash: "0xde1a029e58f27b3d58eb5a4b9ccfad6b0aaa6386103fc54241af2619ed955fbb", ts: 1782099347, from: "0x748f9823870fa6afb6c7e15ecbe46a4942d68a8b", to: "0x00063b65a2952400267d5182b3d481c9d1c4d983", amount: 100000, block: 25370483, type: "transfer" },
    { hash: "0xaee5c1339cc3f7959f43d66803bfeaa339e18aaefdca678bbcfbaa62c07a3a9e", ts: 1782099347, from: "0xd7ca08ec1aee9cce8a8eda9365343ef197674e1a", to: "0x6912d024e2b88136c5a586e77b092199963b6083", amount: 122822, block: 25370483, type: "transfer" },
    { hash: "0xaee5c1339cc3f7959f43d66803bfeaa339e18aaefdca678bbcfbaa62c07a3a9e", ts: 1782099347, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0xd7ca08ec1aee9cce8a8eda9365343ef197674e1a", amount: 107271, block: 25370483, type: "buy" },
    { hash: "0x5e4298131ef5d94b27cc0e24ba9e795751fef2a489efeea8f764a31d2bec1865", ts: 1782099335, from: "0x7f51c134230eb9e5aba42bc364d3d3eba26d9712", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 113996, block: 25370482, type: "sell" },
    { hash: "0x5e4298131ef5d94b27cc0e24ba9e795751fef2a489efeea8f764a31d2bec1865", ts: 1782099335, from: "0xd3bc5acd80a1c9a201d7345d0677cc9899ef8079", to: "0x7f51c134230eb9e5aba42bc364d3d3eba26d9712", amount: 129931, block: 25370482, type: "transfer" },
    { hash: "0x4c1431dc37135118d1f759460bcdb22ef545f7b55f7fb23c93cd8675c87e6afe", ts: 1782099275, from: "0xa0206aa3938f7892d01832150cd13e19c0b130d1", to: "0xd3bc5acd80a1c9a201d7345d0677cc9899ef8079", amount: 130137, block: 25370477, type: "transfer" },
    { hash: "0x3f2a0575251586c80ce51c2082ba4b79fca57a1147709a54bfc3a1ac16466ba3", ts: 1782099203, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xa0206aa3938f7892d01832150cd13e19c0b130d1", amount: 130137, block: 25370471, type: "transfer" },
    { hash: "0x82dd63263eb0c750e3b2a319335a7b871149f94330db8ac5976bf9cfccb3739c", ts: 1782099167, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x748f9823870fa6afb6c7e15ecbe46a4942d68a8b", amount: 100000, block: 25370468, type: "transfer" },
    { hash: "0x6ffd56660b15a0f172d0453b3575965fb83bd5b34c06f443198da917dd3cf5e1", ts: 1782099071, from: "0xebae2d568b9853dcecd328276241a63345b3ce7a", to: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", amount: 605350, block: 25370460, type: "transfer" },
    { hash: "0xa52862a6718f390c0b69113f3796616184f3317e4b26517caff46ac46102bdf0", ts: 1782098771, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xebae2d568b9853dcecd328276241a63345b3ce7a", amount: 605350, block: 25370435, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 4155955, received: 4761305, sent: 605350, txs: 2 },
    { wallet: "0xb8e6d31e7b212b2b7250ee9c26c56cebbfbe6b23", net: 3773794, received: 3773794, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 183322, received: 183331, sent: 9, txs: 4 },
    { wallet: "0xed4581801c72a9da8a87323cbfa148e0f32e0b2a", net: 100000, received: 100000, sent: 0, txs: 1 },
    { wallet: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", net: 94205, received: 1563978, sent: 1469773, txs: 4 },
    { wallet: "0x6aef801dcf9070fd4b240aae829e37c085dbae2e", net: 67890, received: 67890, sent: 0, txs: 1 },
    { wallet: "0x69987be7ce4cc89d0e00e0b8fa652f10e22fce7c", net: 26849, received: 26849, sent: 0, txs: 1 },
    { wallet: "0x47670e064a9cf54102481f199915e392ce357d60", net: 24658, received: 24658, sent: 0, txs: 1 },
    { wallet: "0x2c3e0b024547e8aee685f98274d033947720cb62", net: 23151, received: 23151, sent: 0, txs: 1 },
    { wallet: "0x25ce097c1b9c42cef17d11c2c90edcb13528ced7", net: 18219, received: 18219, sent: 0, txs: 1 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 11051, received: 11051, sent: 0, txs: 2 },
    { wallet: "0xdaffdcbca50c6c35505460db58c0fc29ca19534f", net: 9863, received: 9863, sent: 0, txs: 2 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 8767, received: 8767, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 5215, received: 5215, sent: 0, txs: 12 },
    { wallet: "0x5532d65385e664eef604976354608a9dc4d9ae7c", net: 4932, received: 4932, sent: 0, txs: 1 },
    { wallet: "0xd1966596e0d9c4033d19b5e12d1f14b183dfa2c5", net: 4521, received: 4521, sent: 0, txs: 1 },
    { wallet: "0x87607b0495272d2cb7ab5bcccf26e24af4b84473", net: 4476, received: 4476, sent: 0, txs: 2 },
    { wallet: "0xb2730eb750573322e015765076dd5981204e8503", net: 4329, received: 4329, sent: 0, txs: 1 },
    { wallet: "0x139724a176a50f5089f4ed5bc653124e9d2c97f3", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 2740, received: 2740, sent: 0, txs: 1 },
    { wallet: "0x98f870ab30c0530b2e19d1adf5285200f52305a7", net: 2520, received: 2520, sent: 0, txs: 1 },
    { wallet: "0x3620002e79381c888479e4c57074d8c385f8d932", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0xe612cc0d682cb2551285992158f14b0b342cdc1b", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x1b0b1ad3e6a2fb69c48c2913fea012bc38f0a2e9", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x41ae288f0a798046b33720c3dc80e0351892d6b9", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x1f0d9b1835e7b2844d94b0038c80ac387a439fcc", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x907262769c7143796829c3d9595d8d4007e65cd1", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x40b2f1262a394a69f4446ceebca52bc58eb92bf4", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x6ecac0b40c73a8a776d8e0cd304440ab952b3c64", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xcfa692be640c86bbabe30100e71fc955fdca0ab7", net: 511, received: 511, sent: 0, txs: 1 },
    { wallet: "0xb5fa089ed78657e10d02c2e9e2a9f673deb15c33", net: 486, received: 486, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 411, received: 2466, sent: 2055, txs: 3 },
    { wallet: "0xe7ff8186307f7781bce361dbe7245e1330550c52", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 390, received: 390, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 382, received: 382, sent: 0, txs: 2 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 274, received: 274, sent: 0, txs: 2 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xe281cb25c08d549659100e2688029aa667653395", net: 154, received: 154, sent: 0, txs: 1 },
    { wallet: "0xd7ca08ec1aee9cce8a8eda9365343ef197674e1a", net: 153, received: 183473, sent: 183321, txs: 6 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd35bc6fbf44781d488b08a3a5cb02aa010ad27d6", net: 18, received: 18, sent: 0, txs: 1 },
    { wallet: "0xda927ba792c5d3308c304c7f7059836d65db5c55", net: 5, received: 5, sent: 0, txs: 1 },
    { wallet: "0x28bf6006d87de7f44445905aa4f5cb8c0d8cba02", net: 2, received: 1255, sent: 1253, txs: 3 },
    { wallet: "0x39f08dc7fa7a9c9e6187ea0e48c1433f1c19b589", net: 0, received: 1248, sent: 1248, txs: 2 },
    { wallet: "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae", net: 0, received: 1253, sent: 1253, txs: 3 }
];

const WHALE_LABELS = {

};
