// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "August 2, 2026 at 07:01 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 223;
const WHALE_TOTAL_VOLUME      = 8688960;
const WHALE_BIGGEST_SINGLE    = 2504140;

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
    { hash: "0x9056de419b7070aed2e2f2d7f2d90cacac8de416f91a2f0a8b5b7a6fab32c8bd", ts: 1785664103, from: "0x0761bacd001837594388349707bd398c02a7d7cf", to: "0xef7232f46c8672d37a0db104759c59699fda69c8", amount: 132192, block: 25666402, type: "transfer" },
    { hash: "0x727460a58caa9b984502b8605a7a7a750e8c6bd7f1d449d871b6e9db8d022a71", ts: 1785637559, from: "0x39927a709eaba03d43c351ea0b1bf4228ce99ade", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 2504140, block: 25664197, type: "transfer" },
    { hash: "0x2b4bd24f651404ac849eca014fbcb99c26791dd183db054b74ba143ffbd3f788", ts: 1785633839, from: "0xa230ae47c4e13b2484dcb9b3a50228ec1336fe59", to: "0x39927a709eaba03d43c351ea0b1bf4228ce99ade", amount: 2504140, block: 25663887, type: "transfer" },
    { hash: "0xe3549e8a18b22026cc415e15a917eac3be55f2960c1df1fa9cc3643b8c6ac3e2", ts: 1785633779, from: "0x6912d024e2b88136c5a586e77b092199963b6083", to: "0xa230ae47c4e13b2484dcb9b3a50228ec1336fe59", amount: 2504140, block: 25663882, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 2735844, received: 2735844, sent: 0, txs: 4 },
    { wallet: "0x67336cec42645f55059eff241cb02ea5cc52ff86", net: 303009, received: 434786, sent: 131777, txs: 34 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 149203, received: 149203, sent: 0, txs: 1 },
    { wallet: "0x7c55f61ffc03e4eb2b6f7301650613d3b14fb662", net: 26925, received: 27172, sent: 246, txs: 3 },
    { wallet: "0xbe4ae6e24d12dbd180517f126765178bae81f341", net: 19726, received: 19726, sent: 0, txs: 1 },
    { wallet: "0xf35fcd53113667ffff169c64784a71b0b7e62c33", net: 11233, received: 11233, sent: 0, txs: 1 },
    { wallet: "0x053e6294400a9268e35df445624f58087c7f388f", net: 6727, received: 6727, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 6575, received: 6575, sent: 0, txs: 1 },
    { wallet: "0x26e74d15a5c6d6f89a2e9d8cc2da3260f953c95b", net: 5342, received: 5342, sent: 0, txs: 1 },
    { wallet: "0x785322915463f5279b76103b8f28fb548a8c8b98", net: 3973, received: 3973, sent: 0, txs: 1 },
    { wallet: "0x66d1bd87005ae6dbe7cc5840802e818c5cdf7158", net: 3014, received: 3014, sent: 0, txs: 1 },
    { wallet: "0xc80ab0525ea8d6d525fdde37c47e59d1d5fe59b6", net: 2065, received: 2065, sent: 0, txs: 1 },
    { wallet: "0xac2dd467dbbca0b146d909a3363d9d3dcdec56aa", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xc7f2db34bc06db14f2a7c70817df903a3796bfe7", net: 1538, received: 1538, sent: 0, txs: 1 },
    { wallet: "0xc26ff22e2f18f54f82f74593529a27347a5a56ff", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x139724a176a50f5089f4ed5bc653124e9d2c97f3", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x74323b4161747f4e7beb536c961f394e6068c2da", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 740, received: 740, sent: 0, txs: 11 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 262, received: 262, sent: 0, txs: 3 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x8ade75cf990ea264d36a6bde22a1fe9d3ba75017", net: 96, received: 101096, sent: 101000, txs: 2 },
    { wallet: "0x8e4cb742ef4dd955a1bf606baad04f5a42643124", net: 94, received: 94, sent: 0, txs: 1 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 10, received: 10, sent: 0, txs: 2 },
    { wallet: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", net: 0, received: 149203, sent: 149203, txs: 2 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 258052, sent: 258052, txs: 74 },
    { wallet: "0x1e1bb1bb578d24ab4bbaaffa133dd495a0580d69", net: 0, received: 100861, sent: 100861, txs: 2 },
    { wallet: "0xc78f106fdeaee6ff16a93adb268a0b7a4dcd7b28", net: 0, received: 6727, sent: 6727, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 14716, sent: 14716, txs: 12 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 14716, sent: 14716, txs: 12 },
    { wallet: "0x0ce2b366e425d7e53904ea61cfb2ea03b06283f7", net: 0, received: 822, sent: 822, txs: 3 },
    { wallet: "0xa0952edc243077c05148828cc5432c37486858c3", net: 0, received: 822, sent: 822, txs: 2 },
    { wallet: "0xbaa8254ae8b9769ae9053d9f25cca5f90f07427e", net: 0, received: 1918, sent: 1918, txs: 3 },
    { wallet: "0x21dce84e1c9ea03025ddaefd186d6119ccb1e819", net: 0, received: 1918, sent: 1918, txs: 2 },
    { wallet: "0x111116053f09d34a7eae8102887004445176ca11", net: 0, received: 91530, sent: 91530, txs: 15 },
    { wallet: "0x8d75beb794fdc1464310c1893bcbe12942480a59", net: 0, received: 7270, sent: 7270, txs: 2 },
    { wallet: "0x01c579618213c31ebdfdbd68bb14d71d8329b9dc", net: 0, received: 959, sent: 959, txs: 3 },
    { wallet: "0xa315a2fc9b7bd651e0ebaa134859bd8153ff12a7", net: 0, received: 959, sent: 959, txs: 2 },
    { wallet: "0x1182ad22b3df49fd1da9a004a8a42ad6ce8211c8", net: 0, received: 2780, sent: 2780, txs: 2 },
    { wallet: "0xb5a44de74e3f61c61641abfe5b0daf221417e109", net: 0, received: 1390, sent: 1390, txs: 2 },
    { wallet: "0x923b6f4952d11724d8099bb15cd62a086c4017d3", net: 0, received: 1390, sent: 1390, txs: 2 },
    { wallet: "0xd0be1fded5d964619b92b3672c08c43305529be0", net: 0, received: 105067, sent: 105067, txs: 2 },
    { wallet: "0xef7232f46c8672d37a0db104759c59699fda69c8", net: 0, received: 132192, sent: 132192, txs: 3 },
    { wallet: "0xae0562f6349e1b574a75248bd53848a3039751aa", net: 0, received: 1635, sent: 1635, txs: 4 },
    { wallet: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", net: 0, received: 99513, sent: 99513, txs: 2 },
    { wallet: "0xb11b5ebaed46f5be1259d6badc7e091bbdfa61cd", net: 0, received: 822, sent: 822, txs: 3 }
];

const WHALE_LABELS = {

};
