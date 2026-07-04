// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 4, 2026 at 02:23 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 174;
const WHALE_TOTAL_VOLUME      = 22449310;
const WHALE_BIGGEST_SINGLE    = 11293428;

const WHALE_TRANSFERS = [
    { hash: "0x1fd250e45fb6de614409f259a8c186731ef4865c995f401a52783dcac3ebdcef", ts: 1783126307, from: "0x772542da746b6455bf7c20458197d53e70565b35", to: "0x9642b23ed1e01df1092b92641051881a322f5d4e", amount: 269160, block: 25455690, type: "transfer" },
    { hash: "0x229fad1ed0b0f3aa51fc1e0a8b24c9568fe9cd15b68ea195b86e6cd3b662e6bd", ts: 1783126103, from: "0x27ad186bb115a2b41fb64553efd4ba5a74b83b08", to: "0x772542da746b6455bf7c20458197d53e70565b35", amount: 269160, block: 25455673, type: "transfer" },
    { hash: "0xeaab79a9066f22c958c9376ae19d02cd0ec5ec072eada7e8c2cfeae49f6f7264", ts: 1783124039, from: "0x7336bc7430cabaa56339e8521b06ee9c3382e68c", to: "0x27ad186bb115a2b41fb64553efd4ba5a74b83b08", amount: 134564, block: 25455502, type: "transfer" },
    { hash: "0x36212764bdd4c232dec36abc274f22a78e33e06f48531527ea24ab01594bd0d1", ts: 1783123583, from: "0x9642b23ed1e01df1092b92641051881a322f5d4e", to: "0x7336bc7430cabaa56339e8521b06ee9c3382e68c", amount: 134564, block: 25455464, type: "transfer" },
    { hash: "0x2dfc4c914938a92b9514209336acab888864efa30abeaa1c1e58eed40ef3a2e7", ts: 1783123523, from: "0x7336bc7430cabaa56339e8521b06ee9c3382e68c", to: "0x27ad186bb115a2b41fb64553efd4ba5a74b83b08", amount: 134564, block: 25455459, type: "transfer" },
    { hash: "0x5aff85c491f4e2b7bb8b39676644332fc908c1a6c0ace2f983be86b638b8dbe3", ts: 1783123463, from: "0x9642b23ed1e01df1092b92641051881a322f5d4e", to: "0x7336bc7430cabaa56339e8521b06ee9c3382e68c", amount: 134564, block: 25455455, type: "transfer" },
    { hash: "0x72b668150219d18a21a7c2a0ce84d5315d8a444b16238fa7ae1c371677a0c234", ts: 1783123391, from: "0x7336bc7430cabaa56339e8521b06ee9c3382e68c", to: "0x27ad186bb115a2b41fb64553efd4ba5a74b83b08", amount: 127869, block: 25455449, type: "transfer" },
    { hash: "0x49fae55969d9b99f936279de8c549999505d4475c70c9516836fa01b32a917fb", ts: 1783095683, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xbc354e35a9afb51b9dc9471c75d1a90a44a94479", amount: 417808, block: 25453149, type: "transfer" },
    { hash: "0x56ff04f6bb3336bad8599c8f1833063abd08c1cacbebde3e2ae666cc49438137", ts: 1783089851, from: "0xb0a3a2b60e969afd26561429aa4c1444c57e4411", to: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", amount: 9000000, block: 25452664, type: "transfer" },
    { hash: "0x5babf4d911c153509e586c630d7b1e84a033191111b2890c4788d746c2007ec5", ts: 1783086671, from: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", to: "0xf8191d98ae98d2f7abdfb63a9b0b812b93c873aa", amount: 11293428, block: 25452400, type: "transfer" },
    { hash: "0xbb62c38739ebbb0d9429bfdeec4dc6eef45678501f5fe3cae428fcad018ce80a", ts: 1783081295, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xe19ed11103265687a351662aab588a890ec598b4", amount: 407160, block: 25451952, type: "transfer" },
    { hash: "0xeeff2a8f779cd2e503e3cac22d8fae77fb9fbb2de83f858091df15c99bbfd6e0", ts: 1783080539, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", amount: 126469, block: 25451889, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xf8191d98ae98d2f7abdfb63a9b0b812b93c873aa", net: 11293428, received: 11293428, sent: 0, txs: 1 },
    { wallet: "0xbc354e35a9afb51b9dc9471c75d1a90a44a94479", net: 417808, received: 417808, sent: 0, txs: 1 },
    { wallet: "0xe19ed11103265687a351662aab588a890ec598b4", net: 407160, received: 407160, sent: 0, txs: 1 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 140186, received: 140186, sent: 0, txs: 15 },
    { wallet: "0x27ad186bb115a2b41fb64553efd4ba5a74b83b08", net: 127837, received: 396997, sent: 269160, txs: 4 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 126469, received: 126469, sent: 0, txs: 1 },
    { wallet: "0xbbf7e985e1e0ca6f854cecb5096274e8e797e8b4", net: 87281, received: 87281, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 84406, received: 353534, sent: 269128, txs: 4 },
    { wallet: "0x047223b0f9429f865c3a1f1fa1302ee02b44c15f", net: 68986, received: 68986, sent: 0, txs: 1 },
    { wallet: "0xe337c67ee9077e31aab205b25e8593b0e1c00cc4", net: 52305, received: 52305, sent: 0, txs: 1 },
    { wallet: "0x9abe1355078b45b7e7f42e3f3e40df246139bc7d", net: 44930, received: 44930, sent: 0, txs: 1 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 22246, received: 22246, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 20712, received: 20712, sent: 0, txs: 1 },
    { wallet: "0x716e3fad60bc867449795cd624da34aab3dc381f", net: 18387, received: 18387, sent: 0, txs: 3 },
    { wallet: "0xdd6f260582c7868c2e454f6ad2b2c2a71222cf52", net: 12231, received: 12231, sent: 0, txs: 1 },
    { wallet: "0x299bf882a249ded7ef13754c4d271fe3648216b7", net: 11771, received: 11771, sent: 0, txs: 1 },
    { wallet: "0x298e6919c9a1b13a61f82aff610a03142afd78de", net: 10959, received: 10959, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 6575, received: 6575, sent: 0, txs: 1 },
    { wallet: "0x0fe4b65be3215098a599512ba28ffae10a34fc3e", net: 3039, received: 3039, sent: 0, txs: 1 },
    { wallet: "0xc4dbaa815a793a9f72a66b0e95f7547fe03849f7", net: 2632, received: 2632, sent: 0, txs: 1 },
    { wallet: "0x785322915463f5279b76103b8f28fb548a8c8b98", net: 2603, received: 2603, sent: 0, txs: 1 },
    { wallet: "0x5afdfc44e2dfa3e3940f479ac23097103387c23a", net: 1222, received: 2308, sent: 1086, txs: 3 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xe28d7502e70c9b45de8218b122a72a1eaf972695", net: 1086, received: 1086, sent: 0, txs: 1 },
    { wallet: "0xc89e3b392348b20bbebe4c5c918ecb505c64b8a7", net: 993, received: 993, sent: 0, txs: 1 },
    { wallet: "0x536dc310c06209a8d108aedaa665db2c8233807a", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 386, received: 386, sent: 0, txs: 8 },
    { wallet: "0xec4017fda40716ca24f8d1cb03a5baaa1e8b422a", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x3c9108700724d9d96cff2ac8979d6ad2a8d469ae", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x907262769c7143796829c3d9595d8d4007e65cd1", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 131, received: 131, sent: 0, txs: 3 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 83, received: 83, sent: 0, txs: 1 },
    { wallet: "0x8474f0e7f5f7152bd078790274cd5dfeaf92ec3a", net: 9, received: 9, sent: 0, txs: 2 },
    { wallet: "0xd1fa539b4c964704b7db7ae66478ebd353c4d515", net: 1, received: 11096, sent: 11095, txs: 3 },
    { wallet: "0x2cedcc1fedb8dcae93a88bbf26df039071bb7243", net: 0, received: 274, sent: 274, txs: 2 },
    { wallet: "0x772542da746b6455bf7c20458197d53e70565b35", net: 0, received: 269160, sent: 269160, txs: 2 },
    { wallet: "0xfe263102682933297cb65dc813e5193249769251", net: 0, received: 18387, sent: 18387, txs: 6 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 139569, sent: 139569, txs: 33 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 59574, sent: 59574, txs: 10 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 67383, sent: 67383, txs: 12 },
    { wallet: "0x7789646c7bccea34d4d2d296f8b92488055398b6", net: 0, received: 39726, sent: 39726, txs: 3 },
    { wallet: "0xa747fb6dfc7903bb0d1a1e490681418de4931e7e", net: 0, received: 39726, sent: 39726, txs: 2 },
    { wallet: "0x7f51c134230eb9e5aba42bc364d3d3eba26d9712", net: 0, received: 48291, sent: 48291, txs: 10 },
    { wallet: "0xc7a8e1f27a587312d608bce5068dc7212f06a421", net: 0, received: 68986, sent: 68986, txs: 2 },
    { wallet: "0x9c80be297da76357cb8b57f93b68bfa51a8e3843", net: 0, received: 4976, sent: 4976, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 55778, sent: 55778, txs: 12 }
];

const WHALE_LABELS = {

};
