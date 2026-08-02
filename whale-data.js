// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "August 2, 2026 at 08:12 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 334;
const WHALE_TOTAL_VOLUME      = 9001127;
const WHALE_BIGGEST_SINGLE    = 2504140;

const WHALE_TRANSFERS = [
    { hash: "0x727460a58caa9b984502b8605a7a7a750e8c6bd7f1d449d871b6e9db8d022a71", ts: 1785637559, from: "0x39927a709eaba03d43c351ea0b1bf4228ce99ade", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 2504140, block: 25664197, type: "transfer" },
    { hash: "0x2b4bd24f651404ac849eca014fbcb99c26791dd183db054b74ba143ffbd3f788", ts: 1785633839, from: "0xa230ae47c4e13b2484dcb9b3a50228ec1336fe59", to: "0x39927a709eaba03d43c351ea0b1bf4228ce99ade", amount: 2504140, block: 25663887, type: "transfer" },
    { hash: "0xe3549e8a18b22026cc415e15a917eac3be55f2960c1df1fa9cc3643b8c6ac3e2", ts: 1785633779, from: "0x6912d024e2b88136c5a586e77b092199963b6083", to: "0xa230ae47c4e13b2484dcb9b3a50228ec1336fe59", amount: 2504140, block: 25663882, type: "transfer" },
    { hash: "0x493e160ea2d77c4aea95c23020ea1cb0b81bbe2392f35ed3272145a4b4fc490a", ts: 1785603791, from: "0x0cea2d9fe51ef641dc65013a7b058c943bbe593b", to: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", amount: 117123, block: 25661391, type: "transfer" },
    { hash: "0xabdf7f982afcd3d9a62517b97264c29c215cab7964d61ac15df7eb30265c1d0e", ts: 1785598007, from: "0x7c5874a11b4dd3aba411fa8b942ae90d1d662705", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 597573, block: 25660915, type: "transfer" },
    { hash: "0x37ea1cfc226b597750df0a4f558a5ffe67500dda19e01fd0701bbcd6487cc2cd", ts: 1785593075, from: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", to: "0x7c5874a11b4dd3aba411fa8b942ae90d1d662705", amount: 597573, block: 25660505, type: "transfer" },
    { hash: "0x35a22c86d0779e50e0b2549f2f3f67dd35ff328f01eba2568063166061734683", ts: 1785588683, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x7f5dffbd103ad4df1017ba42d44ccda4dc17c4a8", amount: 176438, block: 25660139, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 3284207, received: 3321082, sent: 36875, txs: 8 },
    { wallet: "0x67336cec42645f55059eff241cb02ea5cc52ff86", net: 365810, received: 415262, sent: 49452, txs: 28 },
    { wallet: "0x7f5dffbd103ad4df1017ba42d44ccda4dc17c4a8", net: 176438, received: 176438, sent: 0, txs: 1 },
    { wallet: "0xb8001c3ec9aa1985f6c747e25c28324e4a361ec1", net: 49901, received: 49901, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 47443, received: 47443, sent: 0, txs: 1 },
    { wallet: "0xe8446569ee2311ac5c455cf97e6eb5cd594356ea", net: 27397, received: 27397, sent: 0, txs: 1 },
    { wallet: "0x7c55f61ffc03e4eb2b6f7301650613d3b14fb662", net: 26925, received: 27172, sent: 246, txs: 3 },
    { wallet: "0x4161e34bfc38c2c33349b4c815844727d117e1ff", net: 17260, received: 17260, sent: 0, txs: 1 },
    { wallet: "0x5317f98b67a892ecd4a83081e15a21d83dd161e5", net: 12603, received: 12603, sent: 0, txs: 1 },
    { wallet: "0x0761bacd001837594388349707bd398c02a7d7cf", net: 8904, received: 8904, sent: 0, txs: 1 },
    { wallet: "0x441a7d5b829530afeda825043e6daf75535b72bb", net: 5616, received: 5616, sent: 0, txs: 1 },
    { wallet: "0x58a3bfcc09411fc55327e262ee140bfe10905987", net: 5595, received: 5595, sent: 0, txs: 1 },
    { wallet: "0x26e74d15a5c6d6f89a2e9d8cc2da3260f953c95b", net: 5342, received: 5342, sent: 0, txs: 1 },
    { wallet: "0xdfc90a70d89bece5ac9331fbd680e3306e9afc15", net: 4110, received: 4110, sent: 0, txs: 1 },
    { wallet: "0x66d1bd87005ae6dbe7cc5840802e818c5cdf7158", net: 3014, received: 3014, sent: 0, txs: 1 },
    { wallet: "0xc80ab0525ea8d6d525fdde37c47e59d1d5fe59b6", net: 2065, received: 2065, sent: 0, txs: 1 },
    { wallet: "0xac2dd467dbbca0b146d909a3363d9d3dcdec56aa", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xc7f2db34bc06db14f2a7c70817df903a3796bfe7", net: 1538, received: 1538, sent: 0, txs: 1 },
    { wallet: "0xd58521c0d2b0c00d0694aff0022dc67419e832bb", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0xc26ff22e2f18f54f82f74593529a27347a5a56ff", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0x139724a176a50f5089f4ed5bc653124e9d2c97f3", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x74323b4161747f4e7beb536c961f394e6068c2da", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x27ace13e9949900af2c5fdc1ad2aeb36b1e443a0", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 214, received: 214, sent: 0, txs: 8 },
    { wallet: "0x8e4cb742ef4dd955a1bf606baad04f5a42643124", net: 94, received: 94, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 50, received: 50, sent: 0, txs: 1 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 904167, sent: 904167, txs: 168 },
    { wallet: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", net: 0, received: 99513, sent: 99513, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 50265, sent: 50265, txs: 14 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 50265, sent: 50265, txs: 14 },
    { wallet: "0xb11b5ebaed46f5be1259d6badc7e091bbdfa61cd", net: 0, received: 822, sent: 822, txs: 3 },
    { wallet: "0x163f3103de041d25464e2c8a4f8f3187ec1856e0", net: 0, received: 99323, sent: 99323, txs: 12 },
    { wallet: "0x8a722431c321be4f0ee127ba90d40efa92bdea32", net: 0, received: 4808, sent: 4808, txs: 2 },
    { wallet: "0x111116053f09d34a7eae8102887004445176ca11", net: 0, received: 16820, sent: 16820, txs: 3 },
    { wallet: "0x39927a709eaba03d43c351ea0b1bf4228ce99ade", net: 0, received: 2504140, sent: 2504140, txs: 2 },
    { wallet: "0xa230ae47c4e13b2484dcb9b3a50228ec1336fe59", net: 0, received: 2504140, sent: 2504140, txs: 3 },
    { wallet: "0x2d84a18d4d1356420f3115e4d11e26680671c62d", net: 0, received: 2740, sent: 2740, txs: 6 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 0, received: 2740, sent: 2740, txs: 4 },
    { wallet: "0x6762e034ce6ff41b38a25a4d8e6ef0fa87199454", net: 0, received: 8904, sent: 8904, txs: 3 },
    { wallet: "0xf4741ff340dd0c961a417583e28b16ddd94f0d81", net: 0, received: 8904, sent: 8904, txs: 2 },
    { wallet: "0x5532d65385e664eef604976354608a9dc4d9ae7c", net: 0, received: 1233, sent: 1233, txs: 2 },
    { wallet: "0xe08d97e151473a848c3d9ca3f323cb720472d015", net: 0, received: 3906, sent: 3905, txs: 4 },
    { wallet: "0x27ad186bb115a2b41fb64553efd4ba5a74b83b08", net: 0, received: 73810, sent: 73810, txs: 4 }
];

const WHALE_LABELS = {

};
