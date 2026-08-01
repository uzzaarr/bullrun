// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "August 1, 2026 at 07:00 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 357;
const WHALE_TOTAL_VOLUME      = 10859408;
const WHALE_BIGGEST_SINGLE    = 2232603;

const WHALE_TRANSFERS = [
    { hash: "0x493e160ea2d77c4aea95c23020ea1cb0b81bbe2392f35ed3272145a4b4fc490a", ts: 1785603791, from: "0x0cea2d9fe51ef641dc65013a7b058c943bbe593b", to: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", amount: 117123, block: 25661391, type: "transfer" },
    { hash: "0xabdf7f982afcd3d9a62517b97264c29c215cab7964d61ac15df7eb30265c1d0e", ts: 1785598007, from: "0x7c5874a11b4dd3aba411fa8b942ae90d1d662705", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 597573, block: 25660915, type: "transfer" },
    { hash: "0x37ea1cfc226b597750df0a4f558a5ffe67500dda19e01fd0701bbcd6487cc2cd", ts: 1785593075, from: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", to: "0x7c5874a11b4dd3aba411fa8b942ae90d1d662705", amount: 597573, block: 25660505, type: "transfer" },
    { hash: "0x35a22c86d0779e50e0b2549f2f3f67dd35ff328f01eba2568063166061734683", ts: 1785588683, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x7f5dffbd103ad4df1017ba42d44ccda4dc17c4a8", amount: 176438, block: 25660139, type: "transfer" },
    { hash: "0x53e8da05d9345e9eb0f1bb1a29a011aa4aca8e51a2f010ad9fef98327c598fd9", ts: 1785550475, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 998270, block: 25656962, type: "transfer" },
    { hash: "0x4a16043d095d43c52e491e18bebf6b4f9ffdb8cadd216c1f9b95e8ac24a060da", ts: 1785549875, from: "0xe641dca2e131fa8bfe1d7931b9b040e3fe0c5bdc", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 1232503, block: 25656912, type: "sell" },
    { hash: "0x684b8879bed563ad911d7e73fec5d68f0d0f83419e5ab4cc375219ff2fd094d4", ts: 1785549431, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 998270, block: 25656875, type: "transfer" },
    { hash: "0xf2654205574f3f66aaaa4335955b3db38ffe81088d445c8bcc7fcac9e384306a", ts: 1785549239, from: "0x8b1f0020a76b8eeb559bdcbf55214f7c4b739c75", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 998598, block: 25656859, type: "transfer" },
    { hash: "0x66b624b16f7f47161cf1481e20d2b1f8e187a526204f91df9d4112eb417e78db", ts: 1785549191, from: "0x66178ab7c90e568246465253fb042bcbfdf79e8b", to: "0x8b1f0020a76b8eeb559bdcbf55214f7c4b739c75", amount: 998598, block: 25656855, type: "transfer" },
    { hash: "0xd9902ffeb529175d37fd40336bb0ba06ce99d405eddb2f3e07d7242f9d48251e", ts: 1785549059, from: "0xe641dca2e131fa8bfe1d7931b9b040e3fe0c5bdc", to: "0x66178ab7c90e568246465253fb042bcbfdf79e8b", amount: 1000000, block: 25656845, type: "transfer" },
    { hash: "0x6af29051c3400cd569c21f67a3efa52b1ee9e25f1b3be8fdb11d330c3718eb88", ts: 1785548639, from: "0xcf4525dc26cc9ca58e15fffa3ef14d6619a55945", to: "0xe641dca2e131fa8bfe1d7931b9b040e3fe0c5bdc", amount: 2232603, block: 25656810, type: "transfer" },
    { hash: "0x099f27fdf78060dc9eb562574cbecdc5344dbebdeda9b43e92343728a834d70a", ts: 1785547811, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x57ba479e67ae2107ebf5b4bf6f45761eeacbdbba", amount: 157534, block: 25656741, type: "transfer" },
    { hash: "0xaba1143d621cea236248289bcfcd427699d3d3ac9508ff5ce79af856daf78209", ts: 1785544331, from: "0xdaf0a9771537aec3269cda2e8184075132081d81", to: "0x9642b23ed1e01df1092b92641051881a322f5d4e", amount: 100000, block: 25656452, type: "transfer" },
    { hash: "0x81137f698435b8cfbb9e44c30226500a1bb747b27cf82ff2ffb56d04a157ce6d", ts: 1785535631, from: "0xd99ed35ac471d20b7a3f2286645b315aa4002c9e", to: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", amount: 127123, block: 25655728, type: "transfer" },
    { hash: "0x65e4bdb4956c5b16a21adf6a903571e913031b683d59063de68d04fd8e6d6617", ts: 1785525023, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 263601, block: 25654844, type: "transfer" },
    { hash: "0xde406028a6851142e9a6ad2dbcb2d57522c7f627569f86d926a5b6fe865343c5", ts: 1785524423, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 263601, block: 25654795, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 1976789, received: 2013664, sent: 36875, txs: 25 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 1261871, received: 1261871, sent: 0, txs: 2 },
    { wallet: "0x67336cec42645f55059eff241cb02ea5cc52ff86", net: 281696, received: 331148, sent: 49452, txs: 23 },
    { wallet: "0x7f5dffbd103ad4df1017ba42d44ccda4dc17c4a8", net: 176438, received: 176438, sent: 0, txs: 1 },
    { wallet: "0x57ba479e67ae2107ebf5b4bf6f45761eeacbdbba", net: 157534, received: 157534, sent: 0, txs: 1 },
    { wallet: "0x97fae140a6607bd0100acc505420584161229588", net: 87671, received: 87671, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 54157, received: 517070, sent: 462913, txs: 68 },
    { wallet: "0xb8001c3ec9aa1985f6c747e25c28324e4a361ec1", net: 49901, received: 49901, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 48897, received: 100000, sent: 51103, txs: 3 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 39848, received: 39848, sent: 0, txs: 4 },
    { wallet: "0xe8446569ee2311ac5c455cf97e6eb5cd594356ea", net: 27397, received: 27397, sent: 0, txs: 1 },
    { wallet: "0x4161e34bfc38c2c33349b4c815844727d117e1ff", net: 17260, received: 17260, sent: 0, txs: 1 },
    { wallet: "0xc2ef27c0432a66a03f7d58639da327230e07422b", net: 15205, received: 15205, sent: 0, txs: 1 },
    { wallet: "0x2c2319b9db559e08a6403c0b80afe1638ce2516d", net: 14168, received: 14168, sent: 0, txs: 1 },
    { wallet: "0x5317f98b67a892ecd4a83081e15a21d83dd161e5", net: 12603, received: 12603, sent: 0, txs: 1 },
    { wallet: "0x441a7d5b829530afeda825043e6daf75535b72bb", net: 5616, received: 5616, sent: 0, txs: 1 },
    { wallet: "0x58a3bfcc09411fc55327e262ee140bfe10905987", net: 5595, received: 5595, sent: 0, txs: 1 },
    { wallet: "0xdfc90a70d89bece5ac9331fbd680e3306e9afc15", net: 4110, received: 4110, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0x4005d4b50140bcf6221b3ae8df455e10600a02c0", net: 1918, received: 1918, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1809, received: 1809, sent: 0, txs: 9 },
    { wallet: "0xd58521c0d2b0c00d0694aff0022dc67419e832bb", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0x27ace13e9949900af2c5fdc1ad2aeb36b1e443a0", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x5d73e31d8588d928d2dcbea05dc8038d86730bf5", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xd11a748e4e1802d2c9e11bec1518736ad7646946", net: 411, received: 822, sent: 411, txs: 3 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xe08d97e151473a848c3d9ca3f323cb720472d015", net: 10, received: 3674, sent: 3664, txs: 2 },
    { wallet: "0xfe263102682933297cb65dc813e5193249769251", net: 8, received: 65829, sent: 65821, txs: 8 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 979983, sent: 979983, txs: 136 },
    { wallet: "0x27ad186bb115a2b41fb64553efd4ba5a74b83b08", net: 0, received: 73810, sent: 73810, txs: 4 },
    { wallet: "0x163f3103de041d25464e2c8a4f8f3187ec1856e0", net: 0, received: 94515, sent: 94515, txs: 10 },
    { wallet: "0x84cab37995229530d9e6e5cff2f8f4ebe4517d66", net: 0, received: 90635, sent: 90635, txs: 8 },
    { wallet: "0x160fbc49594bbae7a74ba350a749e69169cd9648", net: 0, received: 49901, sent: 49901, txs: 2 },
    { wallet: "0x7c01c6f4babf102f2bbe852bd3e571c53e390913", net: 0, received: 2740, sent: 2740, txs: 3 },
    { wallet: "0x7c5874a11b4dd3aba411fa8b942ae90d1d662705", net: 0, received: 597573, sent: 597573, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 52112, sent: 52112, txs: 14 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 93560, sent: 93560, txs: 18 },
    { wallet: "0xec4017fda40716ca24f8d1cb03a5baaa1e8b422a", net: 0, received: 1233, sent: 1233, txs: 3 },
    { wallet: "0x2cedcc1fedb8dcae93a88bbf26df039071bb7243", net: 0, received: 1233, sent: 1233, txs: 2 },
    { wallet: "0xfaa6d090eed86738d79dd2a401c96b621d7f6461", net: 0, received: 47443, sent: 47443, txs: 2 },
    { wallet: "0xae0562f6349e1b574a75248bd53848a3039751aa", net: 0, received: 5375, sent: 5375, txs: 8 }
];

const WHALE_LABELS = {

};
