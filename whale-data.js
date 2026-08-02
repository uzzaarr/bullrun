// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "August 2, 2026 at 01:07 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 280;
const WHALE_TOTAL_VOLUME      = 9299005;
const WHALE_BIGGEST_SINGLE    = 2504140;

const WHALE_TRANSFERS = [
    { hash: "0xe7f70045e91df91d1cd50eee506f009c68e982d2cd174b6bcd4d4c6ece7b7744", ts: 1785666347, from: "0xd0be1fded5d964619b92b3672c08c43305529be0", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 105067, block: 25666588, type: "transfer" },
    { hash: "0x2d08e3a02e470d5de772e3181394fbb547b02b4fa57523b165c17cf8565fd273", ts: 1785664151, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0xd0be1fded5d964619b92b3672c08c43305529be0", amount: 105067, block: 25666406, type: "buy" },
    { hash: "0xc87d5bcf1a0970aeae72eea756b968ceb64290f1c27a6abd294a95b166f69731", ts: 1785664139, from: "0xef7232f46c8672d37a0db104759c59699fda69c8", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 131990, block: 25666405, type: "sell" },
    { hash: "0x9056de419b7070aed2e2f2d7f2d90cacac8de416f91a2f0a8b5b7a6fab32c8bd", ts: 1785664103, from: "0x0761bacd001837594388349707bd398c02a7d7cf", to: "0xef7232f46c8672d37a0db104759c59699fda69c8", amount: 132192, block: 25666402, type: "transfer" },
    { hash: "0x727460a58caa9b984502b8605a7a7a750e8c6bd7f1d449d871b6e9db8d022a71", ts: 1785637559, from: "0x39927a709eaba03d43c351ea0b1bf4228ce99ade", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 2504140, block: 25664197, type: "transfer" },
    { hash: "0x2b4bd24f651404ac849eca014fbcb99c26791dd183db054b74ba143ffbd3f788", ts: 1785633839, from: "0xa230ae47c4e13b2484dcb9b3a50228ec1336fe59", to: "0x39927a709eaba03d43c351ea0b1bf4228ce99ade", amount: 2504140, block: 25663887, type: "transfer" },
    { hash: "0xe3549e8a18b22026cc415e15a917eac3be55f2960c1df1fa9cc3643b8c6ac3e2", ts: 1785633779, from: "0x6912d024e2b88136c5a586e77b092199963b6083", to: "0xa230ae47c4e13b2484dcb9b3a50228ec1336fe59", amount: 2504140, block: 25663882, type: "transfer" },
    { hash: "0x493e160ea2d77c4aea95c23020ea1cb0b81bbe2392f35ed3272145a4b4fc490a", ts: 1785603791, from: "0x0cea2d9fe51ef641dc65013a7b058c943bbe593b", to: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", amount: 117123, block: 25661391, type: "transfer" },
    { hash: "0xabdf7f982afcd3d9a62517b97264c29c215cab7964d61ac15df7eb30265c1d0e", ts: 1785598007, from: "0x7c5874a11b4dd3aba411fa8b942ae90d1d662705", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 597573, block: 25660915, type: "transfer" },
    { hash: "0x37ea1cfc226b597750df0a4f558a5ffe67500dda19e01fd0701bbcd6487cc2cd", ts: 1785593075, from: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", to: "0x7c5874a11b4dd3aba411fa8b942ae90d1d662705", amount: 597573, block: 25660505, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 3327364, received: 3364239, sent: 36875, txs: 7 },
    { wallet: "0x67336cec42645f55059eff241cb02ea5cc52ff86", net: 302630, received: 483860, sent: 181229, txs: 40 },
    { wallet: "0xb8001c3ec9aa1985f6c747e25c28324e4a361ec1", net: 49901, received: 49901, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 47443, received: 47443, sent: 0, txs: 1 },
    { wallet: "0x7c55f61ffc03e4eb2b6f7301650613d3b14fb662", net: 26925, received: 27172, sent: 246, txs: 3 },
    { wallet: "0xbe4ae6e24d12dbd180517f126765178bae81f341", net: 19726, received: 19726, sent: 0, txs: 1 },
    { wallet: "0x5317f98b67a892ecd4a83081e15a21d83dd161e5", net: 12603, received: 12603, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 6575, received: 6575, sent: 0, txs: 1 },
    { wallet: "0x441a7d5b829530afeda825043e6daf75535b72bb", net: 5616, received: 5616, sent: 0, txs: 1 },
    { wallet: "0x26e74d15a5c6d6f89a2e9d8cc2da3260f953c95b", net: 5342, received: 5342, sent: 0, txs: 1 },
    { wallet: "0x66d1bd87005ae6dbe7cc5840802e818c5cdf7158", net: 3014, received: 3014, sent: 0, txs: 1 },
    { wallet: "0xc80ab0525ea8d6d525fdde37c47e59d1d5fe59b6", net: 2065, received: 2065, sent: 0, txs: 1 },
    { wallet: "0xac2dd467dbbca0b146d909a3363d9d3dcdec56aa", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xc7f2db34bc06db14f2a7c70817df903a3796bfe7", net: 1538, received: 1538, sent: 0, txs: 1 },
    { wallet: "0xc26ff22e2f18f54f82f74593529a27347a5a56ff", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0x139724a176a50f5089f4ed5bc653124e9d2c97f3", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x74323b4161747f4e7beb536c961f394e6068c2da", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x27ace13e9949900af2c5fdc1ad2aeb36b1e443a0", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 356, received: 356, sent: 0, txs: 9 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 154, received: 154, sent: 0, txs: 2 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x8e4cb742ef4dd955a1bf606baad04f5a42643124", net: 94, received: 94, sent: 0, txs: 1 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 10, received: 10, sent: 0, txs: 2 },
    { wallet: "0x8d75beb794fdc1464310c1893bcbe12942480a59", net: 0, received: 7270, sent: 7270, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 13227, sent: 13227, txs: 10 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 13227, sent: 13227, txs: 10 },
    { wallet: "0x01c579618213c31ebdfdbd68bb14d71d8329b9dc", net: 0, received: 959, sent: 959, txs: 3 },
    { wallet: "0xa315a2fc9b7bd651e0ebaa134859bd8153ff12a7", net: 0, received: 959, sent: 959, txs: 2 },
    { wallet: "0x111116053f09d34a7eae8102887004445176ca11", net: 0, received: 55433, sent: 55433, txs: 12 },
    { wallet: "0x1182ad22b3df49fd1da9a004a8a42ad6ce8211c8", net: 0, received: 2780, sent: 2780, txs: 2 },
    { wallet: "0xb5a44de74e3f61c61641abfe5b0daf221417e109", net: 0, received: 1390, sent: 1390, txs: 2 },
    { wallet: "0x923b6f4952d11724d8099bb15cd62a086c4017d3", net: 0, received: 1390, sent: 1390, txs: 2 },
    { wallet: "0xd0be1fded5d964619b92b3672c08c43305529be0", net: 0, received: 105067, sent: 105067, txs: 2 },
    { wallet: "0xef7232f46c8672d37a0db104759c59699fda69c8", net: 0, received: 132192, sent: 132192, txs: 3 },
    { wallet: "0xae0562f6349e1b574a75248bd53848a3039751aa", net: 0, received: 1635, sent: 1635, txs: 4 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 559028, sent: 559028, txs: 118 },
    { wallet: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", net: 0, received: 99513, sent: 99513, txs: 2 },
    { wallet: "0xb11b5ebaed46f5be1259d6badc7e091bbdfa61cd", net: 0, received: 822, sent: 822, txs: 3 },
    { wallet: "0x163f3103de041d25464e2c8a4f8f3187ec1856e0", net: 0, received: 73229, sent: 73229, txs: 8 },
    { wallet: "0x8a722431c321be4f0ee127ba90d40efa92bdea32", net: 0, received: 4808, sent: 4808, txs: 2 },
    { wallet: "0x39927a709eaba03d43c351ea0b1bf4228ce99ade", net: 0, received: 2504140, sent: 2504140, txs: 2 },
    { wallet: "0xa230ae47c4e13b2484dcb9b3a50228ec1336fe59", net: 0, received: 2504140, sent: 2504140, txs: 3 },
    { wallet: "0x2d84a18d4d1356420f3115e4d11e26680671c62d", net: 0, received: 1370, sent: 1370, txs: 3 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 0, received: 1370, sent: 1370, txs: 2 },
    { wallet: "0x6762e034ce6ff41b38a25a4d8e6ef0fa87199454", net: 0, received: 8904, sent: 8904, txs: 3 },
    { wallet: "0xf4741ff340dd0c961a417583e28b16ddd94f0d81", net: 0, received: 8904, sent: 8904, txs: 2 }
];

const WHALE_LABELS = {

};
