// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 4, 2026 at 08:29 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 197;
const WHALE_TOTAL_VOLUME      = 26578902;
const WHALE_BIGGEST_SINGLE    = 11293428;

const WHALE_TRANSFERS = [
    { hash: "0xfbb717a87793de94b6b38cb6904626667ddbe86f037e4a00ca900955192e9796", ts: 1783134683, from: "0x82a365858b4a82eed80e5473c6f698f93b48617f", to: "0x9642b23ed1e01df1092b92641051881a322f5d4e", amount: 101916, block: 25456386, type: "transfer" },
    { hash: "0x14b5069a9254e07b5cecd1486384aba12f9d05474b47d75f7968cde9aa1a864e", ts: 1783134671, from: "0x5043144a3be4643b599834b0c614113901bb6a1c", to: "0xc967d082aa2481e737e9040dc079a2c69194f1e0", amount: 515212, block: 25456385, type: "transfer" },
    { hash: "0x66e3a2443b07fe5f7eb6543150e9b2446f238f4b0fb31791be5413102edc2eda", ts: 1783134635, from: "0x8f10b468b06c6fd214b65f87778827f7d113f996", to: "0x5043144a3be4643b599834b0c614113901bb6a1c", amount: 515212, block: 25456382, type: "transfer" },
    { hash: "0x66e3a2443b07fe5f7eb6543150e9b2446f238f4b0fb31791be5413102edc2eda", ts: 1783134635, from: "0xbedfac7488dccaafdd66d1d7d56349780fe0477e", to: "0x8f10b468b06c6fd214b65f87778827f7d113f996", amount: 599084, block: 25456382, type: "transfer" },
    { hash: "0x66e3a2443b07fe5f7eb6543150e9b2446f238f4b0fb31791be5413102edc2eda", ts: 1783134635, from: "0x4fe93ebc4ce6ae4f81601cc7ce7139023919e003", to: "0xbedfac7488dccaafdd66d1d7d56349780fe0477e", amount: 599084, block: 25456382, type: "transfer" },
    { hash: "0x66e3a2443b07fe5f7eb6543150e9b2446f238f4b0fb31791be5413102edc2eda", ts: 1783134635, from: "0x3591c5c2c481fccd8815bb1ad76112e62dcadfd2", to: "0x4fe93ebc4ce6ae4f81601cc7ce7139023919e003", amount: 599084, block: 25456382, type: "transfer" },
    { hash: "0xb74a659846166ea5b48b5a3d3c4c866578524c3b0ebcbeb5e1323579d94ca475", ts: 1783134611, from: "0x8be45c42756a18482529e5258fab3191d4df1b1b", to: "0x3591c5c2c481fccd8815bb1ad76112e62dcadfd2", amount: 600000, block: 25456380, type: "transfer" },
    { hash: "0x9bd9e919c0bd8ff16aec711d61957105c42c466529afc0b54c1a4fc42efe7ef9", ts: 1783134263, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x8be45c42756a18482529e5258fab3191d4df1b1b", amount: 600000, block: 25456351, type: "transfer" },
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
    { wallet: "0xc967d082aa2481e737e9040dc079a2c69194f1e0", net: 515212, received: 515212, sent: 0, txs: 1 },
    { wallet: "0xbc354e35a9afb51b9dc9471c75d1a90a44a94479", net: 417808, received: 417808, sent: 0, txs: 1 },
    { wallet: "0xe19ed11103265687a351662aab588a890ec598b4", net: 407160, received: 407160, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 186322, received: 455450, sent: 269128, txs: 5 },
    { wallet: "0x27ad186bb115a2b41fb64553efd4ba5a74b83b08", net: 127837, received: 396997, sent: 269160, txs: 4 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 126469, received: 126469, sent: 0, txs: 1 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 119721, received: 119721, sent: 0, txs: 12 },
    { wallet: "0x047223b0f9429f865c3a1f1fa1302ee02b44c15f", net: 68986, received: 68986, sent: 0, txs: 1 },
    { wallet: "0xe337c67ee9077e31aab205b25e8593b0e1c00cc4", net: 52305, received: 52305, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 51958, received: 51958, sent: 0, txs: 2 },
    { wallet: "0x9abe1355078b45b7e7f42e3f3e40df246139bc7d", net: 44930, received: 44930, sent: 0, txs: 1 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 22246, received: 22246, sent: 0, txs: 1 },
    { wallet: "0x716e3fad60bc867449795cd624da34aab3dc381f", net: 18387, received: 18387, sent: 0, txs: 3 },
    { wallet: "0xdd6f260582c7868c2e454f6ad2b2c2a71222cf52", net: 12231, received: 12231, sent: 0, txs: 1 },
    { wallet: "0x298e6919c9a1b13a61f82aff610a03142afd78de", net: 10959, received: 10959, sent: 0, txs: 1 },
    { wallet: "0x7546a1047a8273dc9185a6388d078be1e2e97b98", net: 3973, received: 3973, sent: 0, txs: 1 },
    { wallet: "0xe6d3210b13f577b8361d90c4a11c458da8a9594e", net: 3836, received: 3836, sent: 0, txs: 1 },
    { wallet: "0x081f6bc39faadd1b573dcb83ff0239359d5af3d1", net: 3812, received: 3812, sent: 0, txs: 1 },
    { wallet: "0x0fe4b65be3215098a599512ba28ffae10a34fc3e", net: 3039, received: 3039, sent: 0, txs: 1 },
    { wallet: "0xf6414154ea3495ee098a88c8e35e47769d6fb205", net: 3028, received: 3028, sent: 0, txs: 1 },
    { wallet: "0xc4dbaa815a793a9f72a66b0e95f7547fe03849f7", net: 2632, received: 2632, sent: 0, txs: 1 },
    { wallet: "0x785322915463f5279b76103b8f28fb548a8c8b98", net: 2603, received: 2603, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x5afdfc44e2dfa3e3940f479ac23097103387c23a", net: 1222, received: 2308, sent: 1086, txs: 3 },
    { wallet: "0x5d73e31d8588d928d2dcbea05dc8038d86730bf5", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x139724a176a50f5089f4ed5bc653124e9d2c97f3", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xe28d7502e70c9b45de8218b122a72a1eaf972695", net: 1086, received: 1086, sent: 0, txs: 1 },
    { wallet: "0x3591c5c2c481fccd8815bb1ad76112e62dcadfd2", net: 900, received: 600000, sent: 599100, txs: 3 },
    { wallet: "0x536dc310c06209a8d108aedaa665db2c8233807a", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 394, received: 394, sent: 0, txs: 10 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xec4017fda40716ca24f8d1cb03a5baaa1e8b422a", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x3c9108700724d9d96cff2ac8979d6ad2a8d469ae", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 131, received: 131, sent: 0, txs: 3 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 83, received: 83, sent: 0, txs: 1 },
    { wallet: "0x8474f0e7f5f7152bd078790274cd5dfeaf92ec3a", net: 9, received: 9, sent: 0, txs: 2 },
    { wallet: "0xedc6531b10297788cbb0fcfaee904a3803d3e2e4", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0xd1fa539b4c964704b7db7ae66478ebd353c4d515", net: 1, received: 11096, sent: 11095, txs: 3 },
    { wallet: "0xf62ec4c0049c99684cf3ce27c91c7c946b8d1ddf", net: 0, received: 4658, sent: 4658, txs: 3 },
    { wallet: "0x4cc2c6e14c96aed6e99087c4477e4708a5db11a4", net: 0, received: 31246, sent: 31246, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 695720, sent: 695720, txs: 23 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 71641, sent: 71641, txs: 19 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 69486, sent: 69486, txs: 14 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 119721, sent: 119721, txs: 29 },
    { wallet: "0x5ac37964ebcbc68efb51497031ccc355a137dcc5", net: 0, received: 9836, sent: 9836, txs: 2 }
];

const WHALE_LABELS = {

};
