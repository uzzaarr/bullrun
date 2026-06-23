// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 23, 2026 at 07:54 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 208;
const WHALE_TOTAL_VOLUME      = 26938286;
const WHALE_BIGGEST_SINGLE    = 2713032;

const WHALE_TRANSFERS = [
    { hash: "0x4aa7fb04a8847ee0d987ba116b6c8d2fb26a7bbf20241703273d42f0c5ee7cfb", ts: 1782244247, from: "0xab80e504b7b7ad0d9756a2ecbb5959f77f9b2659", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 104625, block: 25382514, type: "transfer" },
    { hash: "0x3e3184818735ff775c6ed1427be33e6301ef12fbeb383d988f43fc4b55f79130", ts: 1782244187, from: "0x28684d5ae4609f9ab4cb5c024150540fe31ee92d", to: "0xab80e504b7b7ad0d9756a2ecbb5959f77f9b2659", amount: 104625, block: 25382509, type: "transfer" },
    { hash: "0xc513b413d7e4482769a2463436834685588accd5c3b19c50ff6899cc066e7b30", ts: 1782243959, from: "0xbf82a599be05c0da18c7eef5bb5dcc81b8933338", to: "0x28684d5ae4609f9ab4cb5c024150540fe31ee92d", amount: 104795, block: 25382490, type: "transfer" },
    { hash: "0x3e40d414cbbeb48191ea2250c77fa551d7962d4528a7e7deb0e656f9bd83d96e", ts: 1782243767, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xbf82a599be05c0da18c7eef5bb5dcc81b8933338", amount: 104795, block: 25382474, type: "transfer" },
    { hash: "0x4fd7f07c3ed94e92893cc3ac5cf434cdd46d89b74cee3f33d96a07b0ca5bc2e8", ts: 1782237335, from: "0x8f10b468b06c6fd214b65f87778827f7d113f996", to: "0x04c7b4e2db71b2abffe4f2131cf2754533cf32da", amount: 120047, block: 25381941, type: "transfer" },
    { hash: "0x4fd7f07c3ed94e92893cc3ac5cf434cdd46d89b74cee3f33d96a07b0ca5bc2e8", ts: 1782237335, from: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", to: "0x8f10b468b06c6fd214b65f87778827f7d113f996", amount: 120047, block: 25381941, type: "transfer" },
    { hash: "0x4fd7f07c3ed94e92893cc3ac5cf434cdd46d89b74cee3f33d96a07b0ca5bc2e8", ts: 1782237335, from: "0xf8893a4bc47ee842d39e14e8f863692175a947e6", to: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", amount: 120047, block: 25381941, type: "transfer" },
    { hash: "0xae6c591c1357d16f5e9ae01c3e12efb26f7115f1d7614760c7c47389a5cdd488", ts: 1782237215, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x7b348860bea02c43eecb4b2c68a7c0b6044f1e84", amount: 511293, block: 25381931, type: "transfer" },
    { hash: "0x85086a3555754f8a51f90dc59a8b8494a985f351b068582fd992374e20ac3da1", ts: 1782236939, from: "0x2068d14ee50772dd6e89c6f64f32adad0cc936ef", to: "0xf8893a4bc47ee842d39e14e8f863692175a947e6", amount: 120548, block: 25381908, type: "transfer" },
    { hash: "0xf681bf60989618bc1a856837e5bf3adb70c503552cb15da7d0de63b778d9d1b4", ts: 1782233207, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xe912d6cfeaee2c1ffde4bea98299d185fafdaa1d", amount: 301370, block: 25381598, type: "transfer" },
    { hash: "0xaa4ce935d9ee8726704f9645f8b82964a600a1403b1b5080b3e5cc6e78e3bece", ts: 1782231611, from: "0xa747fb6dfc7903bb0d1a1e490681418de4931e7e", to: "0x569bd76e645fc767e84f8cbb34f40261e7c74c76", amount: 115205, block: 25381465, type: "transfer" },
    { hash: "0xf75920b5b540d1f262cdd02a7be79b860018d81f5d95ae6a2ec1ec59905a760f", ts: 1782231527, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xa747fb6dfc7903bb0d1a1e490681418de4931e7e", amount: 115205, block: 25381458, type: "transfer" },
    { hash: "0x5a766686e757eb2a40cbf7dbdc123f3a7f5562c40d9259d8b78869a882dc2af8", ts: 1782222755, from: "0xdcdddf7bfd551c4b402f9ceecfd10214f3269a5d", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 884923, block: 25380730, type: "transfer" },
    { hash: "0x1c4cf7468e49e4e803db208b31927ec99461d5105adc713363bba20dfd3cbc3e", ts: 1782222311, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xdcdddf7bfd551c4b402f9ceecfd10214f3269a5d", amount: 884923, block: 25380693, type: "transfer" },
    { hash: "0xdc6162a9a5450735997f08b0716f6107e3cefbc292deff89181af2b89309c690", ts: 1782219431, from: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", to: "0x7c5874a11b4dd3aba411fa8b942ae90d1d662705", amount: 868689, block: 25380456, type: "transfer" },
    { hash: "0x0b14d3b36e545ab745066a9c0d130f02a325134a62000807a78a4a9b0b77cd03", ts: 1782219167, from: "0xc1c4a5c41b62989acdbb9a11bbab668158f5d481", to: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", amount: 1086776, block: 25380434, type: "transfer" },
    { hash: "0x0feddac53050f168ca0517f6a2a814e53ec92f008535720b8af19c8d8c793f2a", ts: 1782218579, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x5a775cae835f7a77d11d8768a4770b6498292565", amount: 132603, block: 25380386, type: "transfer" },
    { hash: "0x0058aa12a3ffe7be02bec82f61d5b88745f44cb6fad569cd82ab527c3abe4b47", ts: 1782218087, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xc1c4a5c41b62989acdbb9a11bbab668158f5d481", amount: 1086776, block: 25380345, type: "transfer" },
    { hash: "0x3d689d04472d151c7f14ed9f9a2b330c7e6be1e23e4b3181693b54f22c61d68c", ts: 1782216527, from: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 501575, block: 25380216, type: "transfer" },
    { hash: "0xafdb9ab2c283ae17353b840499f49404897eacc34325c8da706a615f7aede157", ts: 1782214355, from: "0xc1c4a5c41b62989acdbb9a11bbab668158f5d481", to: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", amount: 542280, block: 25380036, type: "transfer" },
    { hash: "0x08ed4565467878d81feae689f09feff7145ec7484eb0b94784743be4730e6bc3", ts: 1782213191, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xc1c4a5c41b62989acdbb9a11bbab668158f5d481", amount: 542280, block: 25379939, type: "transfer" },
    { hash: "0xbdbcbf085728ef84d196f023ab35e7f0e55c3fe4a174ab454c38f230f8b94229", ts: 1782212447, from: "0x58edf78281334335effa23101bbe3371b6a36a51", to: "0xe8c15aad9d4cd3f59c9dfa18828b91a8b2c49596", amount: 2340022, block: 25379879, type: "transfer" },
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
    { hash: "0xe101530257c54337aedf6193a8720573ddf3ab2c23cc9c931b587822ae3bd52c", ts: 1782158243, from: "0x8b04b028c2b5b4cfa24a3d85d4d5c082f321094d", to: "0xa1f0e7902556e34ce55bfa44cb40f3f30bfa2c2a", amount: 139445, block: 25375378, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xe8c15aad9d4cd3f59c9dfa18828b91a8b2c49596", net: 2340022, received: 2340022, sent: 0, txs: 1 },
    { wallet: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", net: 1682539, received: 2551228, sent: 868689, txs: 4 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 845040, received: 1387320, sent: 542280, txs: 4 },
    { wallet: "0x2ea4517e2ed581a24e511f034cacce2bb39cfb1b", net: 800000, received: 800000, sent: 0, txs: 1 },
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 571561, received: 4896993, sent: 4325432, txs: 8 },
    { wallet: "0x7b348860bea02c43eecb4b2c68a7c0b6044f1e84", net: 512293, received: 512293, sent: 0, txs: 2 },
    { wallet: "0xe912d6cfeaee2c1ffde4bea98299d185fafdaa1d", net: 301370, received: 301370, sent: 0, txs: 1 },
    { wallet: "0xa1f0e7902556e34ce55bfa44cb40f3f30bfa2c2a", net: 139445, received: 139445, sent: 0, txs: 1 },
    { wallet: "0x5a775cae835f7a77d11d8768a4770b6498292565", net: 132603, received: 132603, sent: 0, txs: 1 },
    { wallet: "0x04c7b4e2db71b2abffe4f2131cf2754533cf32da", net: 120047, received: 120047, sent: 0, txs: 1 },
    { wallet: "0x569bd76e645fc767e84f8cbb34f40261e7c74c76", net: 115205, received: 115205, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 111713, received: 137144, sent: 25431, txs: 11 },
    { wallet: "0x4e5468a7fec3ae9bd430e116bb05d5bdecfd2cdc", net: 66301, received: 66301, sent: 0, txs: 1 },
    { wallet: "0x51dedb895ed27222e6e9cfe1c7402370c7e52d8d", net: 31233, received: 31233, sent: 0, txs: 1 },
    { wallet: "0xf2a9867ab1305a40a431169e2a6fe88217bc5f14", net: 26712, received: 26712, sent: 0, txs: 1 },
    { wallet: "0x21fd0b315ce79304ee0203374e4a723f2587caa9", net: 24658, received: 24658, sent: 0, txs: 1 },
    { wallet: "0xbe4ae6e24d12dbd180517f126765178bae81f341", net: 19726, received: 19726, sent: 0, txs: 1 },
    { wallet: "0x7b9d43ef9d740bc6b6e593e1fc7c4b910a75fd00", net: 19615, received: 28754, sent: 9139, txs: 9 },
    { wallet: "0x98f870ab30c0530b2e19d1adf5285200f52305a7", net: 18670, received: 18670, sent: 0, txs: 4 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 18544, received: 18544, sent: 0, txs: 2 },
    { wallet: "0x702e6e236856714e04c6fac583a2a2b76db190cc", net: 9637, received: 9637, sent: 0, txs: 1 },
    { wallet: "0x787331fd03269ee6fb778c26e0e7adc505ba8bba", net: 6620, received: 6620, sent: 0, txs: 1 },
    { wallet: "0x5f1c5951c5b1cc112ba9e89b9467edca33063453", net: 6476, received: 6476, sent: 0, txs: 1 },
    { wallet: "0xbbc2e9fadd02f03bda75894d84148862f294983a", net: 4932, received: 4932, sent: 0, txs: 1 },
    { wallet: "0xe239c9751cc948e3723b0ea665e509904651c836", net: 4500, received: 4500, sent: 0, txs: 1 },
    { wallet: "0x0761bacd001837594388349707bd398c02a7d7cf", net: 4110, received: 4110, sent: 0, txs: 1 },
    { wallet: "0x07c9128b7231950b6d306d0d3aa1f2ad580598da", net: 3699, received: 3699, sent: 0, txs: 1 },
    { wallet: "0x56d4579585e9b3339e4c371c58e89f104841e24f", net: 3151, received: 3151, sent: 0, txs: 1 },
    { wallet: "0xc0146b106a90a1215552be29baaf6f3b1701d3dd", net: 2994, received: 2994, sent: 0, txs: 1 },
    { wallet: "0xf68f7da978ca3cd9acbcb80672c9bde2e050b35f", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0x311f520e51b3f5a6354d4e620443edb7ad59e996", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0x7c01c6f4babf102f2bbe852bd3e571c53e390913", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x62f2ec43631e073bc2a26e33f4efe689a66b5da5", net: 1899, received: 1899, sent: 0, txs: 1 },
    { wallet: "0x4015afef85dfe9020c37e094fca46e56854dc5c6", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1062, received: 1062, sent: 0, txs: 15 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 559, received: 559, sent: 0, txs: 3 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x9df14235393c7a9d2bc38db6c12c61b699e094c6", net: 548, received: 548, sent: 0, txs: 2 },
    { wallet: "0x39faf1de461849163e390d0a57d1eaa632064a49", net: 500, received: 500, sent: 0, txs: 1 },
    { wallet: "0x1ab2a7c6178467e8e2fd9c9a42d33024c8d6e1d0", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x5987d62c93f864fff531f79c1f6c8da51eaffce2", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x2a76a5be3bca8200f7810600ed9201103746810b", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xfad4c8f1e71e4c56b87733bd916ff7cff46c6c29", net: 67, received: 67, sent: 0, txs: 2 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 41, received: 41, sent: 0, txs: 2 }
];

const WHALE_LABELS = {

};
