// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 24, 2026 at 08:58 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 310;
const WHALE_TOTAL_VOLUME      = 13414100;
const WHALE_BIGGEST_SINGLE    = 2340022;

const WHALE_TRANSFERS = [
    { hash: "0x61b0519a77b5ae3c58babf2515fa96b4210e2d235afc48f71708f442ed7cbe07", ts: 1782290075, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 202462, block: 25386313, type: "transfer" },
    { hash: "0xde2869dea5c155e6b0979a5358171324bae5d098c50502b5224ce73a2395d65d", ts: 1782289727, from: "0x52837371e138cfb3c537b0a3328d896f3db5b95d", to: "0x9df659ecd8cf577b1a61ecf2caa364bd9277481d", amount: 100000, block: 25386284, type: "transfer" },
    { hash: "0x59d00eaf3830563e5101f2dda3c13afb58204043b28457d93dce9e9e17671a7f", ts: 1782289151, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xb05ba67c11fc0b92a7bcb18e50cba87ce2d15109", amount: 239890, block: 25386236, type: "transfer" },
    { hash: "0x9e68f49d6c780bb8b119ae21d6f9d7b6c6c13a55721cc42d9864bd820e0884ac", ts: 1782288899, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 202462, block: 25386215, type: "transfer" },
    { hash: "0x25b9f2a7af3c2c1b2f6d7321f7d780f9dc4f50ff7635dab09bd51b3cb635ff95", ts: 1782288791, from: "0xe1bb5c351d4aed7091e4a761181b232f412cbb8e", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 202596, block: 25386206, type: "transfer" },
    { hash: "0x2a4a314035943fa3d5f20d161078246fbdd4634ee76818a0acf0cc33257558f0", ts: 1782288719, from: "0xd83bbad310f696dd59464483d28bad209b76d1fb", to: "0xe1bb5c351d4aed7091e4a761181b232f412cbb8e", amount: 202596, block: 25386200, type: "transfer" },
    { hash: "0xd56ad1d58b56b36db0d81c0d601f87563e5f930bb922d11b4a371c9e58c39d04", ts: 1782288395, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 204084, block: 25386173, type: "transfer" },
    { hash: "0xac40af226da7d0e16f13b2e3ee84247e583b94e58638cd55daef569027f9de9a", ts: 1782287495, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 105161, block: 25386098, type: "transfer" },
    { hash: "0x31fe3a3a40a0fc2fff5e32b4608bf1fa16f5e1e155370bcbf79c2eb70607bd5c", ts: 1782286235, from: "0xb20b937599cd2f287508f167a4dfb26061f4da44", to: "0x7f51c134230eb9e5aba42bc364d3d3eba26d9712", amount: 103931, block: 25385995, type: "transfer" },
    { hash: "0xed09f3a39c53a5af2dc85e55cbf14a21f3ec0a3257a4d65201d37a93c343b82f", ts: 1782285947, from: "0xa57ea60844ac19c16983d0485526847ff4160721", to: "0xb20b937599cd2f287508f167a4dfb26061f4da44", amount: 100000, block: 25385971, type: "transfer" },
    { hash: "0x46081b8bf38e543f445280a5e01acd7017b6c1574f3d11c26deef46662c136f8", ts: 1782285743, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xa57ea60844ac19c16983d0485526847ff4160721", amount: 100000, block: 25385954, type: "transfer" },
    { hash: "0x93e0a4586aa409854c5a193462b0c2e06a80f492419237dc6a61aa507449cb87", ts: 1782279707, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 105295, block: 25385455, type: "transfer" },
    { hash: "0xe217325de1236419c8f166efcee98b4832b24855497cfc41656f935dd0e6acda", ts: 1782279383, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 105295, block: 25385428, type: "transfer" },
    { hash: "0x3f4f3249ff5a35b7f458f0741a290c8cf45a7796a061ffa9509ff3d9e886c023", ts: 1782247283, from: "0x7f51c134230eb9e5aba42bc364d3d3eba26d9712", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 101361, block: 25382765, type: "sell" },
    { hash: "0x3f4f3249ff5a35b7f458f0741a290c8cf45a7796a061ffa9509ff3d9e886c023", ts: 1782247283, from: "0x569bd76e645fc767e84f8cbb34f40261e7c74c76", to: "0x7f51c134230eb9e5aba42bc364d3d3eba26d9712", amount: 115205, block: 25382765, type: "transfer" },
    { hash: "0xf908cd82de33ff896153d3e8a4a307c8cf8c4fd3460e53438dc77305d5502d72", ts: 1782245675, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 145133, block: 25382631, type: "transfer" },
    { hash: "0xc600b10cdd0d63a0e64afa4b7f2394132368f616fb03d8aa70ebbf8974802f91", ts: 1782245051, from: "0x04c7b4e2db71b2abffe4f2131cf2754533cf32da", to: "0xbbf7e985e1e0ca6f854cecb5096274e8e797e8b4", amount: 120047, block: 25382580, type: "transfer" },
    { hash: "0xc69f3bc591e61990903521b37bdc5de7a2122871b86cc6b1ec816c2861c29493", ts: 1782244475, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 145133, block: 25382533, type: "transfer" },
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
    { hash: "0xbdbcbf085728ef84d196f023ab35e7f0e55c3fe4a174ab454c38f230f8b94229", ts: 1782212447, from: "0x58edf78281334335effa23101bbe3371b6a36a51", to: "0xe8c15aad9d4cd3f59c9dfa18828b91a8b2c49596", amount: 2340022, block: 25379879, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xe8c15aad9d4cd3f59c9dfa18828b91a8b2c49596", net: 2340022, received: 2340022, sent: 0, txs: 1 },
    { wallet: "0x7c5874a11b4dd3aba411fa8b942ae90d1d662705", net: 868689, received: 868689, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 837638, received: 1387320, sent: 549682, txs: 5 },
    { wallet: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", net: 767768, received: 1636457, sent: 868689, txs: 4 },
    { wallet: "0x7b348860bea02c43eecb4b2c68a7c0b6044f1e84", net: 512293, received: 512293, sent: 0, txs: 2 },
    { wallet: "0xe912d6cfeaee2c1ffde4bea98299d185fafdaa1d", net: 301370, received: 301370, sent: 0, txs: 1 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 272594, received: 272594, sent: 0, txs: 7 },
    { wallet: "0xb05ba67c11fc0b92a7bcb18e50cba87ce2d15109", net: 239890, received: 239890, sent: 0, txs: 1 },
    { wallet: "0x5a775cae835f7a77d11d8768a4770b6498292565", net: 132603, received: 132603, sent: 0, txs: 1 },
    { wallet: "0xbbf7e985e1e0ca6f854cecb5096274e8e797e8b4", net: 120047, received: 120047, sent: 0, txs: 1 },
    { wallet: "0x9df659ecd8cf577b1a61ecf2caa364bd9277481d", net: 100000, received: 100000, sent: 0, txs: 1 },
    { wallet: "0x5511a0371fa859183dfc7bc508bb036c93a7de49", net: 61370, received: 61370, sent: 0, txs: 1 },
    { wallet: "0xdc56fd9d0112f44c9c4944e544fd20987c8b3a8c", net: 51859, received: 51859, sent: 0, txs: 8 },
    { wallet: "0xe4ce413f5dce9d2e964b1001318c9c2ff98db25b", net: 50000, received: 50000, sent: 0, txs: 1 },
    { wallet: "0x12048321f7fb0bb0ff8bd100742e1271eaa96441", net: 34521, received: 34521, sent: 0, txs: 1 },
    { wallet: "0x4e5468a7fec3ae9bd430e116bb05d5bdecfd2cdc", net: 32808, received: 67808, sent: 35000, txs: 6 },
    { wallet: "0x51dedb895ed27222e6e9cfe1c7402370c7e52d8d", net: 31233, received: 31233, sent: 0, txs: 1 },
    { wallet: "0xbe4ae6e24d12dbd180517f126765178bae81f341", net: 19726, received: 19726, sent: 0, txs: 1 },
    { wallet: "0x5f1c5951c5b1cc112ba9e89b9467edca33063453", net: 17641, received: 17641, sent: 0, txs: 5 },
    { wallet: "0x7764c8727dab012fce187df0736dab2b00ef691c", net: 16438, received: 16438, sent: 0, txs: 1 },
    { wallet: "0xdb3812cd8d20f27888677ddc97df1241850f8c48", net: 16147, received: 16147, sent: 0, txs: 1 },
    { wallet: "0xc027fa8ba76de0ffc996c7e7a96e2e0c1c6aac49", net: 14521, received: 14521, sent: 0, txs: 1 },
    { wallet: "0x702e6e236856714e04c6fac583a2a2b76db190cc", net: 9637, received: 9637, sent: 0, txs: 1 },
    { wallet: "0x98f870ab30c0530b2e19d1adf5285200f52305a7", net: 6908, received: 6908, sent: 0, txs: 1 },
    { wallet: "0x12aaf8392c18349f7fad9335532fc85c7d43c73d", net: 6025, received: 6025, sent: 0, txs: 1 },
    { wallet: "0xaeb82911b72a3baaba841dc52a1f675c1b51afcf", net: 5987, received: 5987, sent: 0, txs: 1 },
    { wallet: "0x0761bacd001837594388349707bd398c02a7d7cf", net: 4110, received: 4110, sent: 0, txs: 1 },
    { wallet: "0x07c9128b7231950b6d306d0d3aa1f2ad580598da", net: 3699, received: 3699, sent: 0, txs: 1 },
    { wallet: "0x4015afef85dfe9020c37e094fca46e56854dc5c6", net: 3288, received: 3288, sent: 0, txs: 2 },
    { wallet: "0xc0146b106a90a1215552be29baaf6f3b1701d3dd", net: 2994, received: 2994, sent: 0, txs: 1 },
    { wallet: "0x87607b0495272d2cb7ab5bcccf26e24af4b84473", net: 2838, received: 2838, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 2192, received: 2192, sent: 0, txs: 2 },
    { wallet: "0x7c01c6f4babf102f2bbe852bd3e571c53e390913", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 2070, received: 2070, sent: 0, txs: 22 },
    { wallet: "0x9633c0430dffba87e43aaf00d036bde673a5a361", net: 1918, received: 1918, sent: 0, txs: 1 },
    { wallet: "0x62f2ec43631e073bc2a26e33f4efe689a66b5da5", net: 1899, received: 1899, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 1644, received: 1644, sent: 0, txs: 2 },
    { wallet: "0x6627c2f830928700f73475fe6e65177caf8b959a", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x1157e5e64b60d7a9ff9a16aa86f7b062b31a5f02", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x5d73e31d8588d928d2dcbea05dc8038d86730bf5", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x74b0b278e66991380b295d2358224f795958030d", net: 671, received: 671, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x1ab2a7c6178467e8e2fd9c9a42d33024c8d6e1d0", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 364, received: 364, sent: 0, txs: 4 },
    { wallet: "0x4840b523da9a23a09919124b68375f553e442f94", net: 335, received: 335, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 274, received: 274, sent: 0, txs: 2 },
    { wallet: "0x5987d62c93f864fff531f79c1f6c8da51eaffce2", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xfad4c8f1e71e4c56b87733bd916ff7cff46c6c29", net: 209, received: 209, sent: 0, txs: 6 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 137, received: 137, sent: 0, txs: 1 }
];

const WHALE_LABELS = {

};
