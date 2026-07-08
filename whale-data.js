// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 8, 2026 at 01:49 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 148;
const WHALE_TOTAL_VOLUME      = 18352542;
const WHALE_BIGGEST_SINGLE    = 5700000;

const WHALE_TRANSFERS = [
    { hash: "0x85233e75e34a1b0b66d6d8d742fa68673b2a941c5e6396da32f5da1e55d07615", ts: 1783515419, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", amount: 392241, block: 25487992, type: "transfer" },
    { hash: "0xa4e8bac0e153ff6460a5038c8943caf5c58af0b25ab23196f20c9c1a9cca9416", ts: 1783510199, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x7ebe1a45f44775fa1ea36673435f079406f0ecc9", amount: 457671, block: 25487559, type: "transfer" },
    { hash: "0xadc7a6b911e9d4c2cbec88d4af12932e24bc076a0ea67a79f973707be717c78e", ts: 1783509995, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x8ddbf4335cec8ed7b97a0cc76a77ec69160c6d7a", amount: 100000, block: 25487542, type: "transfer" },
    { hash: "0x7d801e65e479e810d8b2c58dd96ca9399f296c034b30af08d9069a2cd1cf3856", ts: 1783506227, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x8ed880099dd748f2995e07b6dec87f8c6932c558", amount: 161096, block: 25487230, type: "transfer" },
    { hash: "0xf192eeb6c3ace179207f718b4f82fab50f9801a91f61c2b582a171598a98081c", ts: 1783505123, from: "0xf2bf915c69f346877961d5fe19a59c30fb856165", to: "0x9642b23ed1e01df1092b92641051881a322f5d4e", amount: 132767, block: 25487138, type: "transfer" },
    { hash: "0x3a3c02be90250080f3e8ff8f160120b0399d23524d90467bb856bf5fe8db99be", ts: 1783504919, from: "0xf81b45b1663b7ea8716c74796d99bbe4ea26f488", to: "0xf2bf915c69f346877961d5fe19a59c30fb856165", amount: 132767, block: 25487121, type: "transfer" },
    { hash: "0x32efd845e7bee354ef4aee05e44074abaf75ecb1125b88bee63af68daa08ddca", ts: 1783499939, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x9c80be297da76357cb8b57f93b68bfa51a8e3843", amount: 113258, block: 25486708, type: "buy" },
    { hash: "0x8a736649428b173d3382947990d4ed033a21457b1c7c12e51cb6f03cb74ab1cb", ts: 1783480331, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xb4dc0ae16db607778e7fb4951ec0889852403f2c", amount: 1753425, block: 25485078, type: "transfer" },
    { hash: "0x657d8adbdc4be0196cc9a0982e882b53c80755e02e2d770f42a24d0498cd5db9", ts: 1783479707, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x28ede55e0ff5e20d732b989879aecfd87b8f761b", amount: 3499863, block: 25485026, type: "transfer" },
    { hash: "0x62107e44e681bc9f3844237197055cb0051d1b8b2cf1e502d25f4f69b450a153", ts: 1783478075, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 1006230, block: 25484891, type: "transfer" },
    { hash: "0x1aca9c86d2a3e32000fe5875ae717678addfbc62d14f406cc291e143b2723e0c", ts: 1783477463, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 1006230, block: 25484840, type: "transfer" },
    { hash: "0xcd1c1ae43da40d36588e26eaf53cbd5e0280df44189b4c249044aef0feb6666b", ts: 1783477355, from: "0x6e11aa2800dc5095889e8a3c60c6d40f0d4f9aa0", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 998497, block: 25484831, type: "transfer" },
    { hash: "0x9c2a67de47d66cfac088e172b2302be2b9bd0be502ef61ecd1170c4391a946e5", ts: 1783477283, from: "0xe96681d02c145ec7be71879b89ce5cfa2a5fd11a", to: "0x6e11aa2800dc5095889e8a3c60c6d40f0d4f9aa0", amount: 998497, block: 25484825, type: "transfer" },
    { hash: "0x03f3d709c4911e77d98dfec8560d7ba0cbb890ffafdceeae4f3e8cc25a65440d", ts: 1783473395, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xbbc971001a0a3697546b80ce09a5a217097db1b1", amount: 1900000, block: 25484503, type: "transfer" },
    { hash: "0x99f9b18a3676fa0d105b91fd5ab8a444c9389426f1ca3585b399e3e66732d386", ts: 1783472327, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xa2b801ab66f9b6c3ba70b36953d087339ac26406", amount: 5700000, block: 25484414, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xa2b801ab66f9b6c3ba70b36953d087339ac26406", net: 5700000, received: 5700000, sent: 0, txs: 1 },
    { wallet: "0x28ede55e0ff5e20d732b989879aecfd87b8f761b", net: 3499863, received: 3499863, sent: 0, txs: 1 },
    { wallet: "0xbbc971001a0a3697546b80ce09a5a217097db1b1", net: 1900000, received: 1900000, sent: 0, txs: 1 },
    { wallet: "0xb4dc0ae16db607778e7fb4951ec0889852403f2c", net: 1753425, received: 1753425, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 1006230, received: 1006230, sent: 0, txs: 1 },
    { wallet: "0x7ebe1a45f44775fa1ea36673435f079406f0ecc9", net: 457671, received: 457671, sent: 0, txs: 1 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 392241, received: 392241, sent: 0, txs: 1 },
    { wallet: "0x8ed880099dd748f2995e07b6dec87f8c6932c558", net: 161096, received: 161096, sent: 0, txs: 1 },
    { wallet: "0x8ddbf4335cec8ed7b97a0cc76a77ec69160c6d7a", net: 100000, received: 100000, sent: 0, txs: 1 },
    { wallet: "0xe56b7c1bc8da8e37552c1e10c1315f855d34c6ff", net: 88904, received: 88904, sent: 0, txs: 1 },
    { wallet: "0x57ba479e67ae2107ebf5b4bf6f45761eeacbdbba", net: 78767, received: 78767, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 76370, received: 132767, sent: 56398, txs: 2 },
    { wallet: "0x02ef8147e2d0997cca48d99f01bad846d16558fa", net: 73973, received: 73973, sent: 0, txs: 1 },
    { wallet: "0xcf4525dc26cc9ca58e15fffa3ef14d6619a55945", net: 63562, received: 63562, sent: 0, txs: 1 },
    { wallet: "0x047223b0f9429f865c3a1f1fa1302ee02b44c15f", net: 56398, received: 56398, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 42807, received: 1049143, sent: 1006336, txs: 6 },
    { wallet: "0xedbdc1049e4375c18d60a814537c980f4a4da116", net: 34859, received: 34859, sent: 0, txs: 1 },
    { wallet: "0xda910ef639c863c35ed36c02fe58e2f84c3f59f1", net: 29676, received: 29676, sent: 0, txs: 1 },
    { wallet: "0x9c80be297da76357cb8b57f93b68bfa51a8e3843", net: 28315, received: 113258, sent: 84944, txs: 6 },
    { wallet: "0xcf720926891ea8641b899152a8149de71017b67c", net: 20822, received: 20822, sent: 0, txs: 1 },
    { wallet: "0x69987be7ce4cc89d0e00e0b8fa652f10e22fce7c", net: 15342, received: 15342, sent: 0, txs: 1 },
    { wallet: "0xfba8cdd846b80fabcac617df0f4794b3df73e700", net: 11507, received: 11507, sent: 0, txs: 1 },
    { wallet: "0xe2faf292ce91a961cf922177e1937652dd129e99", net: 10959, received: 10959, sent: 0, txs: 1 },
    { wallet: "0x1abdb5af79b603452db3eabfd6ce09b67a8915e8", net: 10685, received: 10685, sent: 0, txs: 1 },
    { wallet: "0x0761bacd001837594388349707bd398c02a7d7cf", net: 10274, received: 10274, sent: 0, txs: 1 },
    { wallet: "0x6f983e1cdab14ed5b72686df0f308b5a3c5acd3d", net: 9041, received: 9041, sent: 0, txs: 1 },
    { wallet: "0x12aaf8392c18349f7fad9335532fc85c7d43c73d", net: 6671, received: 6671, sent: 0, txs: 1 },
    { wallet: "0x14a3222c00290641d90c9ce52b6af3d7b2f6e8d3", net: 5479, received: 5479, sent: 0, txs: 2 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 4384, received: 4384, sent: 0, txs: 1 },
    { wallet: "0x1a996eb2a69423926d60973fc3d73cf1fa847a2f", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1825, received: 1825, sent: 0, txs: 8 },
    { wallet: "0x298e6919c9a1b13a61f82aff610a03142afd78de", net: 1370, received: 1370, sent: 0, txs: 2 },
    { wallet: "0xbd36454db179b132d0b38d7049bd00467ecd21b3", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0x855992fbda59048156cb4bc75fad65d0bfa80f3b", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x5d73e31d8588d928d2dcbea05dc8038d86730bf5", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xb8294f8f8f6619a299688f1ca12cb967fc9a6176", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xe02b4b1b8074e85f591dd27e703f345bb266cdd5", net: 243, received: 243, sent: 0, txs: 1 },
    { wallet: "0xea60c81326e93b1e240f33c0f62c0beca518bd81", net: 171, received: 171, sent: 0, txs: 1 },
    { wallet: "0xc097f3238e49c690df6a7d15cf82065bc98291a5", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x9d8f05790f3aacc9d7ec66ba4c874e3268376065", net: 106, received: 106, sent: 0, txs: 1 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 28, received: 28, sent: 0, txs: 1 },
    { wallet: "0x8a03e8aaf3166e667ff7709f0a6cb4ec1f742b36", net: 0, received: 35094, sent: 35094, txs: 2 },
    { wallet: "0x823e6afe409a1acdd6c44e8be2ba18dbb6512e78", net: 0, received: 35205, sent: 35205, txs: 3 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 60163, sent: 60163, txs: 11 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 24339, sent: 24339, txs: 12 },
    { wallet: "0x0a9c28275d73815b4b69d3a0b37834621b4eb210", net: 0, received: 822, sent: 822, txs: 3 },
    { wallet: "0x40a88150427465cca3911358edc96cf16f06e431", net: 0, received: 7308, sent: 7308, txs: 4 },
    { wallet: "0xa47b2f3ca39434ffdced4f58331a3efdbd17093b", net: 0, received: 73973, sent: 73973, txs: 2 },
    { wallet: "0xf2bf915c69f346877961d5fe19a59c30fb856165", net: 0, received: 132767, sent: 132767, txs: 2 }
];

const WHALE_LABELS = {

};
