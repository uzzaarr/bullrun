// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 3, 2026 at 07:10 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 179;
const WHALE_TOTAL_VOLUME      = 22944302;
const WHALE_BIGGEST_SINGLE    = 11293428;

const WHALE_TRANSFERS = [
    { hash: "0x49fae55969d9b99f936279de8c549999505d4475c70c9516836fa01b32a917fb", ts: 1783095683, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xbc354e35a9afb51b9dc9471c75d1a90a44a94479", amount: 417808, block: 25453149, type: "transfer" },
    { hash: "0x56ff04f6bb3336bad8599c8f1833063abd08c1cacbebde3e2ae666cc49438137", ts: 1783089851, from: "0xb0a3a2b60e969afd26561429aa4c1444c57e4411", to: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", amount: 9000000, block: 25452664, type: "transfer" },
    { hash: "0x5babf4d911c153509e586c630d7b1e84a033191111b2890c4788d746c2007ec5", ts: 1783086671, from: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", to: "0xf8191d98ae98d2f7abdfb63a9b0b812b93c873aa", amount: 11293428, block: 25452400, type: "transfer" },
    { hash: "0xbb62c38739ebbb0d9429bfdeec4dc6eef45678501f5fe3cae428fcad018ce80a", ts: 1783081295, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xe19ed11103265687a351662aab588a890ec598b4", amount: 407160, block: 25451952, type: "transfer" },
    { hash: "0xeeff2a8f779cd2e503e3cac22d8fae77fb9fbb2de83f858091df15c99bbfd6e0", ts: 1783080539, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", amount: 126469, block: 25451889, type: "transfer" },
    { hash: "0x5cc132d12dcc7a72f052c7687709a86a0d61aebbf57ddd2c06121e343d9dd28e", ts: 1783041767, from: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", to: "0x8f10b468b06c6fd214b65f87778827f7d113f996", amount: 121229, block: 25448680, type: "transfer" },
    { hash: "0x5cc132d12dcc7a72f052c7687709a86a0d61aebbf57ddd2c06121e343d9dd28e", ts: 1783041767, from: "0x83f953956671d9f88adf75bbe2ecea58c76ad98e", to: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", amount: 121229, block: 25448680, type: "transfer" },
    { hash: "0x89b369fc6c3c72f8ec363de389b3854ba5f5bdee9cbffdf94ebdf40f650e2d08", ts: 1783041587, from: "0xdd6d41bd79b943d29945bd775730328ce56ce8fa", to: "0x83f953956671d9f88adf75bbe2ecea58c76ad98e", amount: 121608, block: 25448665, type: "transfer" },
    { hash: "0xc9dc11f735bb3c11d02de80eeb269caa8fe388cb492b76dc6ba262a37e307538", ts: 1783040123, from: "0x40a88150427465cca3911358edc96cf16f06e431", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 124218, block: 25448546, type: "sell" },
    { hash: "0x00a2a728c134adc224a775ef79824a2b341b46863718b413953f818771776e66", ts: 1783039955, from: "0x7c876bdaa5c038e19f633714f622f6def949b102", to: "0x6ccdc93dd3e792eeb7e4c9fafbc44d5d8fac1a1b", amount: 360147, block: 25448532, type: "transfer" },
    { hash: "0x32857f6622ea37ab30236ed6fbc8a4a5a7b2cbc179cb1bad53a94e3022d5ae0e", ts: 1783039919, from: "0x6912d024e2b88136c5a586e77b092199963b6083", to: "0x40a88150427465cca3911358edc96cf16f06e431", amount: 124218, block: 25448529, type: "transfer" },
    { hash: "0x556c8e6da4d6bc23b214502046acf0d4d82d3c4ca145fad854ed39055d97ade1", ts: 1783038311, from: "0x98e695dd0c6e9277298b7188a9e50743872e4bef", to: "0x7c876bdaa5c038e19f633714f622f6def949b102", amount: 363394, block: 25448395, type: "transfer" },
    { hash: "0xddda6e342dbe6d108871d3b0daf0835210a586bd70539ff9234901d82767b42c", ts: 1783037699, from: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", to: "0x98e695dd0c6e9277298b7188a9e50743872e4bef", amount: 363394, block: 25448344, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xf8191d98ae98d2f7abdfb63a9b0b812b93c873aa", net: 11293428, received: 11293428, sent: 0, txs: 1 },
    { wallet: "0xbc354e35a9afb51b9dc9471c75d1a90a44a94479", net: 417808, received: 417808, sent: 0, txs: 1 },
    { wallet: "0xe19ed11103265687a351662aab588a890ec598b4", net: 407160, received: 407160, sent: 0, txs: 1 },
    { wallet: "0x6ccdc93dd3e792eeb7e4c9fafbc44d5d8fac1a1b", net: 360147, received: 360147, sent: 0, txs: 1 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 160043, received: 160043, sent: 0, txs: 17 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 126469, received: 126469, sent: 0, txs: 1 },
    { wallet: "0xe2faf292ce91a961cf922177e1937652dd129e99", net: 94247, received: 94247, sent: 0, txs: 1 },
    { wallet: "0xbbf7e985e1e0ca6f854cecb5096274e8e797e8b4", net: 87281, received: 87281, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 84374, received: 84374, sent: 0, txs: 1 },
    { wallet: "0xe337c67ee9077e31aab205b25e8593b0e1c00cc4", net: 52305, received: 52305, sent: 0, txs: 1 },
    { wallet: "0x57ba479e67ae2107ebf5b4bf6f45761eeacbdbba", net: 47260, received: 47260, sent: 0, txs: 1 },
    { wallet: "0x9abe1355078b45b7e7f42e3f3e40df246139bc7d", net: 44930, received: 44930, sent: 0, txs: 1 },
    { wallet: "0x716e3fad60bc867449795cd624da34aab3dc381f", net: 24905, received: 24905, sent: 0, txs: 4 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 22246, received: 22246, sent: 0, txs: 1 },
    { wallet: "0xdd6f260582c7868c2e454f6ad2b2c2a71222cf52", net: 12231, received: 12231, sent: 0, txs: 1 },
    { wallet: "0x299bf882a249ded7ef13754c4d271fe3648216b7", net: 11771, received: 11771, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 6575, received: 6575, sent: 0, txs: 1 },
    { wallet: "0xbbc2e9fadd02f03bda75894d84148862f294983a", net: 4932, received: 4932, sent: 0, txs: 1 },
    { wallet: "0x0fe4b65be3215098a599512ba28ffae10a34fc3e", net: 3039, received: 3039, sent: 0, txs: 1 },
    { wallet: "0x88c40cd47ec72e481051c1c495fd0e7a23a30cee", net: 2603, received: 2603, sent: 0, txs: 1 },
    { wallet: "0x4005d4b50140bcf6221b3ae8df455e10600a02c0", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xe28d7502e70c9b45de8218b122a72a1eaf972695", net: 1086, received: 1086, sent: 0, txs: 1 },
    { wallet: "0xc89e3b392348b20bbebe4c5c918ecb505c64b8a7", net: 993, received: 993, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 720, received: 720, sent: 0, txs: 9 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x3c9108700724d9d96cff2ac8979d6ad2a8d469ae", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x907262769c7143796829c3d9595d8d4007e65cd1", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 131, received: 131, sent: 0, txs: 3 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 14, received: 14, sent: 0, txs: 1 },
    { wallet: "0x8474f0e7f5f7152bd078790274cd5dfeaf92ec3a", net: 9, received: 9, sent: 0, txs: 2 },
    { wallet: "0xd1fa539b4c964704b7db7ae66478ebd353c4d515", net: 1, received: 11096, sent: 11095, txs: 3 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 159426, sent: 159426, txs: 38 },
    { wallet: "0x5afdfc44e2dfa3e3940f479ac23097103387c23a", net: 0, received: 1086, sent: 1086, txs: 2 },
    { wallet: "0xfe263102682933297cb65dc813e5193249769251", net: 0, received: 24905, sent: 24905, txs: 8 },
    { wallet: "0x198f0c215e1491a6002e64be2ac37e12d75687f5", net: 0, received: 20712, sent: 20712, txs: 4 },
    { wallet: "0x111111125421ca6dc452d289314280a0f8842a65", net: 0, received: 52305, sent: 52305, txs: 3 },
    { wallet: "0x41c72cf57bdc2c83dfac5b126c815b5e1afb8d88", net: 0, received: 99969, sent: 99969, txs: 8 },
    { wallet: "0x80b4a27276d0c9cce34bf984877c5c9ed5982a9f", net: 0, received: 99969, sent: 99969, txs: 5 },
    { wallet: "0x9008d19f58aabd9ed0d60971565aa8510560ab41", net: 0, received: 99969, sent: 99969, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 212923, sent: 212923, txs: 22 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 168209, sent: 168209, txs: 16 },
    { wallet: "0xb11b5ebaed46f5be1259d6badc7e091bbdfa61cd", net: 0, received: 3699, sent: 3699, txs: 3 },
    { wallet: "0xd11a748e4e1802d2c9e11bec1518736ad7646946", net: 0, received: 3699, sent: 3699, txs: 2 },
    { wallet: "0xdd7976fc67805518ac5ccd388e5cfc99b26f5b76", net: 0, received: 3039, sent: 3039, txs: 2 },
    { wallet: "0x7f51c134230eb9e5aba42bc364d3d3eba26d9712", net: 0, received: 20841, sent: 20841, txs: 9 },
    { wallet: "0x4dfe356a556352acf9167d4278ffd60a88c99bd9", net: 0, received: 4110, sent: 4110, txs: 3 }
];

const WHALE_LABELS = {

};
