// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 23, 2026 at 09:29 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 121;
const WHALE_TOTAL_VOLUME      = 20384365;
const WHALE_BIGGEST_SINGLE    = 3773794;

const WHALE_TRANSFERS = [
    { hash: "0xb2defd55cf02301c68ee6e4c86b12408ab70cf53750baf9823d452d39f9001d5", ts: 1782202979, from: "0x39927a709eaba03d43c351ea0b1bf4228ce99ade", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 2713032, block: 25379093, type: "transfer" },
    { hash: "0x3e53539537dacba90eb7431761ff590744a2373c6d4c3dc0aa388c0188028ec2", ts: 1782200147, from: "0xa230ae47c4e13b2484dcb9b3a50228ec1336fe59", to: "0x39927a709eaba03d43c351ea0b1bf4228ce99ade", amount: 2713032, block: 25378859, type: "transfer" },
    { hash: "0x4c0594ef1d5596ae9f1505dc4a27eac1f263537ce9efe6f1e34b2d8637b62c7d", ts: 1782200099, from: "0x6912d024e2b88136c5a586e77b092199963b6083", to: "0xa230ae47c4e13b2484dcb9b3a50228ec1336fe59", amount: 2713032, block: 25378855, type: "transfer" },
    { hash: "0xca076c3e9d61019d9813e8877b559adcd9d46bdf15561ec76d9c1330fb77bd00", ts: 1782195887, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x2ea4517e2ed581a24e511f034cacce2bb39cfb1b", amount: 800000, block: 25378504, type: "transfer" },
    { hash: "0xf235e84d0e0ad83552b78d2c8c3494491417facd2564e756b184981b4b6aeb45", ts: 1782174143, from: "0x7c5874a11b4dd3aba411fa8b942ae90d1d662705", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 2183961, block: 25376699, type: "transfer" },
    { hash: "0x31cf0d467fb93c3aac0904eeecb6b3408aa408398b98f34731db2d31fbe0b2a8", ts: 1782173831, from: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", to: "0x7c5874a11b4dd3aba411fa8b942ae90d1d662705", amount: 1179453, block: 25376674, type: "transfer" },
    { hash: "0x1f3fdd4e99573908f332c399b5242bc9edbd0ad3e3f6af37f19f7863db888f92", ts: 1782173411, from: "0xebae2d568b9853dcecd328276241a63345b3ce7a", to: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", amount: 919268, block: 25376639, type: "transfer" },
    { hash: "0x648a505bd24382b93eb9e20768696b263c0fad8d5260dc7117a53aee94bbf40a", ts: 1782173171, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xebae2d568b9853dcecd328276241a63345b3ce7a", amount: 919268, block: 25376619, type: "transfer" },
    { hash: "0x3d3d256c26f5b2a9e3c6acd46d42910bdb4d54d10bb5ca9dbdc6b457f4b8c782", ts: 1782170903, from: "0xc1c4a5c41b62989acdbb9a11bbab668158f5d481", to: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", amount: 922173, block: 25376430, type: "transfer" },
    { hash: "0x37e70048bde54981298f2089ad46e9558ef9ae9e6271a9c3ea009943016f37c0", ts: 1782169955, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xc1c4a5c41b62989acdbb9a11bbab668158f5d481", amount: 922173, block: 25376351, type: "transfer" },
    { hash: "0xe101530257c54337aedf6193a8720573ddf3ab2c23cc9c931b587822ae3bd52c", ts: 1782158243, from: "0x8b04b028c2b5b4cfa24a3d85d4d5c082f321094d", to: "0xa1f0e7902556e34ce55bfa44cb40f3f30bfa2c2a", amount: 139445, block: 25375378, type: "transfer" },
    { hash: "0x28b1010d5b35a5c566e79eb27bfe1864b2b9817b5a003186f694d9cb6ef5fd7f", ts: 1782130103, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", amount: 485734, block: 25373042, type: "transfer" },
    { hash: "0x04527eb1cad4d036d027c56626757e37c5c07586eb882ceaac609dd68a318e09", ts: 1782126047, from: "0x58edf78281334335effa23101bbe3371b6a36a51", to: "0xb8e6d31e7b212b2b7250ee9c26c56cebbfbe6b23", amount: 3773794, block: 25372704, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xb8e6d31e7b212b2b7250ee9c26c56cebbfbe6b23", net: 3773794, received: 3773794, sent: 0, txs: 1 },
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 3055552, received: 4896993, sent: 1841441, txs: 4 },
    { wallet: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", net: 922173, received: 922173, sent: 0, txs: 1 },
    { wallet: "0x2ea4517e2ed581a24e511f034cacce2bb39cfb1b", net: 800000, received: 800000, sent: 0, txs: 1 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 485734, received: 485734, sent: 0, txs: 1 },
    { wallet: "0xa1f0e7902556e34ce55bfa44cb40f3f30bfa2c2a", net: 139445, received: 139445, sent: 0, txs: 1 },
    { wallet: "0x964b629e35c0e8d74fddcdf87313e3bb7ba04717", net: 33014, received: 33014, sent: 0, txs: 1 },
    { wallet: "0xf2a9867ab1305a40a431169e2a6fe88217bc5f14", net: 26712, received: 26712, sent: 0, txs: 1 },
    { wallet: "0x21fd0b315ce79304ee0203374e4a723f2587caa9", net: 24658, received: 24658, sent: 0, txs: 1 },
    { wallet: "0x98f870ab30c0530b2e19d1adf5285200f52305a7", net: 16660, received: 16660, sent: 0, txs: 5 },
    { wallet: "0x5c7bb5d31e178c4fb0534add88618a0d2688756d", net: 14795, received: 14795, sent: 0, txs: 1 },
    { wallet: "0xbf7d14d0d1efefc6ec2ecc07b2bc026324743c00", net: 10548, received: 10548, sent: 0, txs: 1 },
    { wallet: "0xab1d1d50b77626a410046569e90a5f21b2719b2a", net: 7397, received: 7397, sent: 0, txs: 1 },
    { wallet: "0x787331fd03269ee6fb778c26e0e7adc505ba8bba", net: 6620, received: 6620, sent: 0, txs: 1 },
    { wallet: "0xbbc2e9fadd02f03bda75894d84148862f294983a", net: 4932, received: 4932, sent: 0, txs: 1 },
    { wallet: "0xe239c9751cc948e3723b0ea665e509904651c836", net: 4500, received: 4500, sent: 0, txs: 1 },
    { wallet: "0xb1b99a4267a29ab0006044fe600f8ed0ac53f060", net: 4110, received: 4110, sent: 0, txs: 1 },
    { wallet: "0x4015afef85dfe9020c37e094fca46e56854dc5c6", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0x56d4579585e9b3339e4c371c58e89f104841e24f", net: 3151, received: 3151, sent: 0, txs: 1 },
    { wallet: "0x797623edfbf75cc4f5a07ff76f903424e8edb31f", net: 2755, received: 2755, sent: 0, txs: 1 },
    { wallet: "0xf68f7da978ca3cd9acbcb80672c9bde2e050b35f", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0x311f520e51b3f5a6354d4e620443edb7ad59e996", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x81ce568b500892baf6946bb37ef86c6dee608eb2", net: 1497, received: 1497, sent: 0, txs: 1 },
    { wallet: "0x87607b0495272d2cb7ab5bcccf26e24af4b84473", net: 1444, received: 1444, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x9df14235393c7a9d2bc38db6c12c61b699e094c6", net: 548, received: 548, sent: 0, txs: 2 },
    { wallet: "0x27ace13e9949900af2c5fdc1ad2aeb36b1e443a0", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x39faf1de461849163e390d0a57d1eaa632064a49", net: 500, received: 500, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 286, received: 286, sent: 0, txs: 8 },
    { wallet: "0x4a8d2f1ce93977f37cc8545fcb618930990999b5", net: 285, received: 285, sent: 0, txs: 1 },
    { wallet: "0x2a76a5be3bca8200f7810600ed9201103746810b", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 156, received: 156, sent: 0, txs: 1 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x43284dc469d348221b3ed7bde3a22196c186c085", net: 20, received: 1464, sent: 1444, txs: 3 },
    { wallet: "0xda927ba792c5d3308c304c7f7059836d65db5c55", net: 5, received: 5, sent: 0, txs: 1 },
    { wallet: "0x28bf6006d87de7f44445905aa4f5cb8c0d8cba02", net: 2, received: 1255, sent: 1253, txs: 3 },
    { wallet: "0x696956f299e3856e870498e25668d58488abac48", net: 0, received: 18047, sent: 18047, txs: 2 },
    { wallet: "0x214a439a6c52259117ac3598bebe62d0c2efa813", net: 0, received: 18082, sent: 18082, txs: 3 },
    { wallet: "0x4960b06d436537eb7a81da1c3e13559ac718b864", net: 0, received: 1918, sent: 1918, txs: 3 },
    { wallet: "0x38cede3bc1c8cefd6cb12441d51d16761a19db11", net: 0, received: 1918, sent: 1918, txs: 2 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 13187, sent: 13187, txs: 6 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 9375, sent: 9375, txs: 5 },
    { wallet: "0x49a2299840a9a5495cae51415548c2b1344bd4f3", net: 0, received: 18082, sent: 18082, txs: 2 },
    { wallet: "0x67f29420ecf43898d37a7cdae7bca5552c2bfe86", net: 0, received: 6132, sent: 6132, txs: 2 },
    { wallet: "0xc26ff22e2f18f54f82f74593529a27347a5a56ff", net: 0, received: 6164, sent: 6164, txs: 4 }
];

const WHALE_LABELS = {

};
