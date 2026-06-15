// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 15, 2026 at 05:07 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 139;
const WHALE_TOTAL_VOLUME      = 11144329;
const WHALE_BIGGEST_SINGLE    = 1617610;

const WHALE_TRANSFERS = [
    { hash: "0x03a3419a0ac521d545df6cbc0d9b49524cf6bc4ef44d26f8a6b0292c5dcdfdb0", ts: 1781530919, from: "0xa18c0f6044ce37a03779522dd5abfe36e27685de", to: "0x9642b23ed1e01df1092b92641051881a322f5d4e", amount: 1456571, block: 25323269, type: "transfer" },
    { hash: "0xc7462252215f78d7358da377b9eb13ae84bbdc9ceff6125e26bee9265db3c7b3", ts: 1781530727, from: "0xddfa1730036c3a011be7e8c8973be6c7e4887607", to: "0xa18c0f6044ce37a03779522dd5abfe36e27685de", amount: 1456571, block: 25323253, type: "transfer" },
    { hash: "0x066369aaf5113c35d28322b89930316473bd75b5ed5c6e2caec9ec59d0cf149b", ts: 1781525303, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", amount: 1617610, block: 25322802, type: "transfer" },
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
    { hash: "0x178e484465456f142841e5c3822717603fdc45ac5f54d2b04212c88c597c323f", ts: 1781478803, from: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", to: "0xe48ebd633200108085ab7413d38af7ac894bcb65", amount: 130706, block: 25318939, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 1617610, received: 1617610, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 1601160, received: 1601160, sent: 0, txs: 4 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 433047, received: 433047, sent: 0, txs: 5 },
    { wallet: "0xd83bbad310f696dd59464483d28bad209b76d1fb", net: 201362, received: 248330, sent: 46968, txs: 5 },
    { wallet: "0xc4cbd7d85ff35f609bb6623e9fd66e9a30bcb67d", net: 77671, received: 77671, sent: 0, txs: 1 },
    { wallet: "0x7764c8727dab012fce187df0736dab2b00ef691c", net: 32877, received: 32877, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 24272, received: 576031, sent: 551759, txs: 21 },
    { wallet: "0x98f870ab30c0530b2e19d1adf5285200f52305a7", net: 16895, received: 16895, sent: 0, txs: 4 },
    { wallet: "0x3d9f7660372711661693c7da65e30044426aac2a", net: 15753, received: 15753, sent: 0, txs: 1 },
    { wallet: "0x1a996eb2a69423926d60973fc3d73cf1fa847a2f", net: 15342, received: 15342, sent: 0, txs: 1 },
    { wallet: "0x6b67a3e46e45916a199bb58d060cc5fc728db778", net: 6164, received: 6164, sent: 0, txs: 1 },
    { wallet: "0x28bed33a551ada8caca12327c75a5b0ece9fb87a", net: 5068, received: 5068, sent: 0, txs: 2 },
    { wallet: "0x7b9d43ef9d740bc6b6e593e1fc7c4b910a75fd00", net: 4548, received: 4548, sent: 0, txs: 3 },
    { wallet: "0xa4b787983dc34fddf2a1bb262b7166f43eccbb6e", net: 3699, received: 3699, sent: 0, txs: 1 },
    { wallet: "0xaf071d3eec5a464d57ae8580d45d2ea828dce499", net: 2994, received: 2994, sent: 0, txs: 1 },
    { wallet: "0xf68f7da978ca3cd9acbcb80672c9bde2e050b35f", net: 2877, received: 2877, sent: 0, txs: 1 },
    { wallet: "0x747dd095f8b63a66d7c31f41bb22afb698224e36", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x785322915463f5279b76103b8f28fb548a8c8b98", net: 2055, received: 2055, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1608, received: 1608, sent: 0, txs: 15 },
    { wallet: "0x5532d65385e664eef604976354608a9dc4d9ae7c", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0x0f36eb8f227aa28e2eb2705724233addabd61e15", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x2a76a5be3bca8200f7810600ed9201103746810b", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xe7ff8186307f7781bce361dbe7245e1330550c52", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0xb8294f8f8f6619a299688f1ca12cb967fc9a6176", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x83ce36503d668dc4efe16416b92f498d06cdc88b", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd11a748e4e1802d2c9e11bec1518736ad7646946", net: 411, received: 2466, sent: 2055, txs: 3 },
    { wallet: "0x1ab2a7c6178467e8e2fd9c9a42d33024c8d6e1d0", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x999b2dc7d728ef06953f33c1f44c450b200e5588", net: 179, received: 179, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x907262769c7143796829c3d9595d8d4007e65cd1", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x43284dc469d348221b3ed7bde3a22196c186c085", net: 4, received: 4, sent: 0, txs: 1 },
    { wallet: "0xe4e7fde8558fef5de5370711e08c223e7ef994bb", net: 0, received: 9730, sent: 9730, txs: 2 },
    { wallet: "0x20694bb5c906ee71e696587be233284f995564b7", net: 0, received: 9863, sent: 9863, txs: 3 },
    { wallet: "0x3822d8b402d6fcbe3187b08b1733ae2e2e46a2d3", net: 0, received: 9863, sent: 9863, txs: 2 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 5759, sent: 5759, txs: 4 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 12299, sent: 12299, txs: 10 },
    { wallet: "0xd9f04ab1db28774e1c0fe8ab6e764f25dc02161c", net: 0, received: 1507, sent: 1507, txs: 3 },
    { wallet: "0xa18c0f6044ce37a03779522dd5abfe36e27685de", net: 0, received: 1456571, sent: 1456571, txs: 2 },
    { wallet: "0x37e5f017e8e09a61fb400b66ceaec3a7624d87f7", net: 0, received: 80839, sent: 80839, txs: 2 },
    { wallet: "0x4496b26c3d65952590762cef62165cd2887c30e1", net: 0, received: 81096, sent: 81096, txs: 3 },
    { wallet: "0x6bd85a77e152d9d6b5ecffe7153be0edeb2798c8", net: 0, received: 81096, sent: 81096, txs: 2 },
    { wallet: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", net: 0, received: 298703, sent: 298703, txs: 4 },
    { wallet: "0xeb1778518259ef69d760122067fadac22e0fba09", net: 0, received: 99697, sent: 99697, txs: 2 }
];

const WHALE_LABELS = {

};
