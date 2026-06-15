// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 15, 2026 at 11:53 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 140;
const WHALE_TOTAL_VOLUME      = 7184877;
const WHALE_BIGGEST_SINGLE    = 1534247;

const WHALE_TRANSFERS = [
    { hash: "0x11e5941eff3062128335c4830cca9ab9e1eb2c512829b61acab4688b6720aa78", ts: 1781520227, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 109894, block: 25322379, type: "transfer" },
    { hash: "0x2fd073e5fcf22ec1e629e0d2d14981e6daa87b81f895e44f395e586e7ba05a59", ts: 1781519807, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 109894, block: 25322344, type: "transfer" },
    { hash: "0x5002116fa9e07cae479c107fa8feab887a351e3c51aecf6e011aaa45ae817d0d", ts: 1781515427, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 188808, block: 25321979, type: "transfer" },
    { hash: "0x4be10eb8f42351dd22d1bb7413426f1d4478201225d47f00571925ca747acec9", ts: 1781515019, from: "0x560c5cfb35ea8c1182871ce6599836c1172bb183", to: "0x55df2e6f614bf8b78bf919a24d0f8c85aead28bc", amount: 100000, block: 25321945, type: "transfer" },
    { hash: "0x75c07d5067597cc1704048344cc5d3246368a83e889aafdeb7a1b7cf1e575f88", ts: 1781514923, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 188808, block: 25321937, type: "transfer" },
    { hash: "0xcb2f16c6be6d3a7161d1fd069d268bccbda06b6c11e21e31fc32acaa44e20084", ts: 1781514839, from: "0x6393089cd981abe3ced76e29ec22f8643e2b959e", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 200695, block: 25321930, type: "transfer" },
    { hash: "0x731f5273fbe07de9a7989f6431f86e82f19bf2b391d50f008ba45ffe6d121f2d", ts: 1781514767, from: "0xbe9d151d8f9dd0bc38bdc8c1206efb9867788c98", to: "0x6393089cd981abe3ced76e29ec22f8643e2b959e", amount: 200695, block: 25321924, type: "transfer" },
    { hash: "0x3296f2dd1566d2031c014e8a3172e2d2561ccaf4d3ecc52a9ffceaabfaff5aa2", ts: 1781514635, from: "0xed24d727a382e0671cf0402ca59b3a2f6d839cff", to: "0xbe9d151d8f9dd0bc38bdc8c1206efb9867788c98", amount: 200000, block: 25321913, type: "transfer" },
    { hash: "0x0dc601b6f5bf01b25b79a1902e1971316032258ce4d901af5ab129c60bcca355", ts: 1781514455, from: "0x1e710f26dfc7f7024738becc76819fd6868b3da2", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 1534247, block: 25321899, type: "transfer" },
    { hash: "0x803471c81f0db230e6c2f4f24fd7a382fd2a9bb242ec9bd115a5c4d4cbfd6f03", ts: 1781513855, from: "0xe29a56bb873f6166bcafee7e2287a9acb7710741", to: "0x1e710f26dfc7f7024738becc76819fd6868b3da2", amount: 1534247, block: 25321850, type: "transfer" },
    { hash: "0x40428e1f6ec976be403538c73afb0d19f3edf7e00a76b1e511c6fc25ad2e13ea", ts: 1781513807, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xe29a56bb873f6166bcafee7e2287a9acb7710741", amount: 1534247, block: 25321846, type: "transfer" },
    { hash: "0x55fff1ed41d2cee14432301309491a06f2d805da4c770341a0c6c65192023b60", ts: 1781511323, from: "0x39ac22b2063b9c64a4fc2d00b26cccc5271bd31b", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 126831, block: 25321640, type: "transfer" },
    { hash: "0xe59bdd9262e0fe87c7a7c960c8932cfc024e53099e71f5480c32da0e989c2ab3", ts: 1781508767, from: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", to: "0x39ac22b2063b9c64a4fc2d00b26cccc5271bd31b", amount: 126831, block: 25321429, type: "transfer" },
    { hash: "0x5d6ca99f6eaffbf4ab6813162f2c38f15d1989f31ad5e5833205739a528b1a19", ts: 1781478899, from: "0xe48ebd633200108085ab7413d38af7ac894bcb65", to: "0x9642b23ed1e01df1092b92641051881a322f5d4e", amount: 130706, block: 25318947, type: "transfer" },
    { hash: "0xa44f309f4679c440a1841a6c1008ba07fa7903e8d72a2b68e1ed2f0a21f22624", ts: 1781478887, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xd83bbad310f696dd59464483d28bad209b76d1fb", amount: 196968, block: 25318946, type: "transfer" },
    { hash: "0x178e484465456f142841e5c3822717603fdc45ac5f54d2b04212c88c597c323f", ts: 1781478803, from: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", to: "0xe48ebd633200108085ab7413d38af7ac894bcb65", amount: 130706, block: 25318939, type: "transfer" },
    { hash: "0x4b5f3951b55ccd48366857c18967ea4cc0f371c63172182035106cf2213100a0", ts: 1781449427, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 143481, block: 25316498, type: "transfer" },
    { hash: "0x7035a6ac49b436aa4deab2cc0444a309ccee71b3a90031d00b5cc74ddbb0eeb4", ts: 1781448527, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 143481, block: 25316423, type: "transfer" },
    { hash: "0x66249cb5520c847e6c0908e000619f58c1f51c6f061ed49ad96a1da6d82856ef", ts: 1781448299, from: "0x193223fb0c821a00232366c471271a343785e8a9", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 142169, block: 25316404, type: "transfer" },
    { hash: "0xb49380db763596000e075f9c4004a25dde147471150b19b4fed6579b90a5624c", ts: 1781448191, from: "0xd83bbad310f696dd59464483d28bad209b76d1fb", to: "0x193223fb0c821a00232366c471271a343785e8a9", amount: 142169, block: 25316395, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 1534247, received: 1534247, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 581503, received: 581503, sent: 0, txs: 7 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 144589, received: 144589, sent: 0, txs: 3 },
    { wallet: "0xd83bbad310f696dd59464483d28bad209b76d1fb", net: 50854, received: 240209, sent: 189356, txs: 6 },
    { wallet: "0x7764c8727dab012fce187df0736dab2b00ef691c", net: 32877, received: 32877, sent: 0, txs: 1 },
    { wallet: "0xb4a3a0ba68867ce22c428c3e6f9f0ba86e2e3c68", net: 15890, received: 15890, sent: 0, txs: 1 },
    { wallet: "0x443c131ca7e4b95421f373df7f5d6802c1cb18ba", net: 15890, received: 15890, sent: 0, txs: 1 },
    { wallet: "0x07c9128b7231950b6d306d0d3aa1f2ad580598da", net: 13562, received: 13562, sent: 0, txs: 1 },
    { wallet: "0xe26dcfdfbc60e46e73a0297c313f6c305f1dad12", net: 10274, received: 10274, sent: 0, txs: 1 },
    { wallet: "0x98f870ab30c0530b2e19d1adf5285200f52305a7", net: 7367, received: 7367, sent: 0, txs: 3 },
    { wallet: "0x6b67a3e46e45916a199bb58d060cc5fc728db778", net: 6164, received: 6164, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 3836, received: 3836, sent: 0, txs: 1 },
    { wallet: "0xa4b787983dc34fddf2a1bb262b7166f43eccbb6e", net: 3699, received: 3699, sent: 0, txs: 1 },
    { wallet: "0xf68f7da978ca3cd9acbcb80672c9bde2e050b35f", net: 2877, received: 2877, sent: 0, txs: 1 },
    { wallet: "0x747dd095f8b63a66d7c31f41bb22afb698224e36", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1585, received: 1585, sent: 0, txs: 16 },
    { wallet: "0x0ebba25e05243fb4146a3a2052aee412ed3d16c9", net: 1500, received: 1500, sent: 0, txs: 1 },
    { wallet: "0x0f36eb8f227aa28e2eb2705724233addabd61e15", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0x37fc0ec4f90c2400ef9f555941671908f6f5377b", net: 1227, received: 1227, sent: 0, txs: 1 },
    { wallet: "0x2a76a5be3bca8200f7810600ed9201103746810b", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xe7ff8186307f7781bce361dbe7245e1330550c52", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0xb8294f8f8f6619a299688f1ca12cb967fc9a6176", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x1ab2a7c6178467e8e2fd9c9a42d33024c8d6e1d0", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 411, received: 411, sent: 0, txs: 2 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x9df14235393c7a9d2bc38db6c12c61b699e094c6", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x999b2dc7d728ef06953f33c1f44c450b200e5588", net: 179, received: 179, sent: 0, txs: 1 },
    { wallet: "0x907262769c7143796829c3d9595d8d4007e65cd1", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", net: 0, received: 442183, sent: 442183, txs: 6 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 5312, sent: 5312, txs: 6 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 11853, sent: 11853, txs: 12 },
    { wallet: "0xeb1778518259ef69d760122067fadac22e0fba09", net: 0, received: 99697, sent: 99697, txs: 2 },
    { wallet: "0x55df2e6f614bf8b78bf919a24d0f8c85aead28bc", net: 0, received: 100000, sent: 100000, txs: 3 },
    { wallet: "0x94d0d06be985c5610cc7076c5c9b6d84b9dbdf79", net: 0, received: 1, sent: 1, txs: 2 },
    { wallet: "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae", net: 0, received: 1, sent: 1, txs: 3 },
    { wallet: "0xb588cc43196024f9d1d42582ce3b2b4793caa3b1", net: 0, received: 9983, sent: 9983, txs: 2 },
    { wallet: "0x6393089cd981abe3ced76e29ec22f8643e2b959e", net: 0, received: 200695, sent: 200695, txs: 2 },
    { wallet: "0x1e710f26dfc7f7024738becc76819fd6868b3da2", net: 0, received: 1534247, sent: 1534247, txs: 2 },
    { wallet: "0xcfaa93a2a9b93eaf3cd7f8bd43b9a8496ca85515", net: 0, received: 2455, sent: 2455, txs: 2 },
    { wallet: "0xc26ff22e2f18f54f82f74593529a27347a5a56ff", net: 0, received: 2466, sent: 2466, txs: 3 },
    { wallet: "0xe29a56bb873f6166bcafee7e2287a9acb7710741", net: 0, received: 1534247, sent: 1534247, txs: 2 },
    { wallet: "0xf4fa0b0bfb3f7a4adc0deed435b29534e23791a4", net: 0, received: 411, sent: 411, txs: 2 },
    { wallet: "0x689c30597e93dfd0e7877c77bb26ff19c6f9ef07", net: 0, received: 12489, sent: 12489, txs: 6 },
    { wallet: "0xc6a51e0ccb8049bfc01918f4698327fcbb38f767", net: 0, received: 99696, sent: 99696, txs: 2 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 0, received: 411, sent: 411, txs: 2 }
];

const WHALE_LABELS = {

};
