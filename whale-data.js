// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 9, 2026 at 02:24 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 165;
const WHALE_TOTAL_VOLUME      = 9396472;
const WHALE_BIGGEST_SINGLE    = 3499863;

const WHALE_TRANSFERS = [
    { hash: "0x489fb3d8ae1cc17c6f91e152a4e6ffb7fc10402abba195ab5bdc87e1aa190672", ts: 1783554719, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 116050, block: 25491256, type: "transfer" },
    { hash: "0x888bd2c8ebb98b2d3a4ab724eec1eba479fc87d84ba8b65a732cdb05b7c60493", ts: 1783554167, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 116050, block: 25491210, type: "transfer" },
    { hash: "0x5c3e0a3f9126b5b0a6526d82679ab02dbbe17780efb03ea43cf0b046045968dc", ts: 1783546223, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xaeca508f9ea380b7ea9799ce206b3615d3aa7e27", amount: 105616, block: 25490548, type: "transfer" },
    { hash: "0xa4dc83fa4c51065e80a045a21d45b98afb5e3e5ee4348f99beee9b1db2910e77", ts: 1783525763, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x70c69520eb6595d102bfd8aed8fc58428489c4e4", amount: 303208, block: 25488850, type: "transfer" },
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
    { hash: "0x1aca9c86d2a3e32000fe5875ae717678addfbc62d14f406cc291e143b2723e0c", ts: 1783477463, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 1006230, block: 25484840, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x28ede55e0ff5e20d732b989879aecfd87b8f761b", net: 3503846, received: 3503846, sent: 0, txs: 2 },
    { wallet: "0xb4dc0ae16db607778e7fb4951ec0889852403f2c", net: 1753425, received: 1753425, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 1122279, received: 1122279, sent: 0, txs: 2 },
    { wallet: "0x7ebe1a45f44775fa1ea36673435f079406f0ecc9", net: 457671, received: 457671, sent: 0, txs: 1 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 392241, received: 392241, sent: 0, txs: 1 },
    { wallet: "0x70c69520eb6595d102bfd8aed8fc58428489c4e4", net: 303208, received: 303208, sent: 0, txs: 1 },
    { wallet: "0x8ed880099dd748f2995e07b6dec87f8c6932c558", net: 161096, received: 161096, sent: 0, txs: 1 },
    { wallet: "0xaeca508f9ea380b7ea9799ce206b3615d3aa7e27", net: 105616, received: 105616, sent: 0, txs: 1 },
    { wallet: "0x8ddbf4335cec8ed7b97a0cc76a77ec69160c6d7a", net: 100000, received: 100000, sent: 0, txs: 1 },
    { wallet: "0xe56b7c1bc8da8e37552c1e10c1315f855d34c6ff", net: 88904, received: 88904, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 76370, received: 132767, sent: 56398, txs: 2 },
    { wallet: "0x047223b0f9429f865c3a1f1fa1302ee02b44c15f", net: 56398, received: 56398, sent: 0, txs: 1 },
    { wallet: "0xd83bbad310f696dd59464483d28bad209b76d1fb", net: 36016, received: 36016, sent: 0, txs: 1 },
    { wallet: "0xda910ef639c863c35ed36c02fe58e2f84c3f59f1", net: 29676, received: 29676, sent: 0, txs: 1 },
    { wallet: "0x9c80be297da76357cb8b57f93b68bfa51a8e3843", net: 28315, received: 113258, sent: 84944, txs: 6 },
    { wallet: "0x21dce84e1c9ea03025ddaefd186d6119ccb1e819", net: 11507, received: 11507, sent: 0, txs: 1 },
    { wallet: "0xfba8cdd846b80fabcac617df0f4794b3df73e700", net: 11507, received: 11507, sent: 0, txs: 1 },
    { wallet: "0xf2a9867ab1305a40a431169e2a6fe88217bc5f14", net: 10959, received: 10959, sent: 0, txs: 1 },
    { wallet: "0xe2faf292ce91a961cf922177e1937652dd129e99", net: 10959, received: 10959, sent: 0, txs: 1 },
    { wallet: "0x0761bacd001837594388349707bd398c02a7d7cf", net: 10274, received: 10274, sent: 0, txs: 1 },
    { wallet: "0x6f983e1cdab14ed5b72686df0f308b5a3c5acd3d", net: 9041, received: 9041, sent: 0, txs: 1 },
    { wallet: "0x14a3222c00290641d90c9ce52b6af3d7b2f6e8d3", net: 5479, received: 5479, sent: 0, txs: 2 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 4384, received: 4384, sent: 0, txs: 1 },
    { wallet: "0xec3b05d01d02b58b2392d8fccb7823d0c0094a00", net: 2221, received: 2221, sent: 0, txs: 1 },
    { wallet: "0xbd36454db179b132d0b38d7049bd00467ecd21b3", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0x855992fbda59048156cb4bc75fad65d0bfa80f3b", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 668, received: 668, sent: 0, txs: 10 },
    { wallet: "0x5d73e31d8588d928d2dcbea05dc8038d86730bf5", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xb8294f8f8f6619a299688f1ca12cb967fc9a6176", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x907262769c7143796829c3d9595d8d4007e65cd1", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x9df14235393c7a9d2bc38db6c12c61b699e094c6", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x298e6919c9a1b13a61f82aff610a03142afd78de", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xe02b4b1b8074e85f591dd27e703f345bb266cdd5", net: 243, received: 243, sent: 0, txs: 1 },
    { wallet: "0xea60c81326e93b1e240f33c0f62c0beca518bd81", net: 171, received: 171, sent: 0, txs: 1 },
    { wallet: "0xc097f3238e49c690df6a7d15cf82065bc98291a5", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xb3ee9d0f2ad274fc83df7fa363b5307bdd03987d", net: 37, received: 37, sent: 0, txs: 1 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 28, received: 28, sent: 0, txs: 1 },
    { wallet: "0x9abe1355078b45b7e7f42e3f3e40df246139bc7d", net: 2, received: 45002, sent: 45000, txs: 2 },
    { wallet: "0x2db6f5e838ed2bad993e9ff2d3d7a5c1cc35704c", net: 1, received: 45068, sent: 45068, txs: 3 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 68876, sent: 68876, txs: 20 },
    { wallet: "0x337685fdab40d39bd02028545a4ffa7d287cc3e2", net: 0, received: 2514, sent: 2514, txs: 2 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 67161, sent: 67161, txs: 16 },
    { wallet: "0x2cedcc1fedb8dcae93a88bbf26df039071bb7243", net: 0, received: 685, sent: 685, txs: 2 },
    { wallet: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", net: 0, received: 1122279, sent: 1122279, txs: 4 },
    { wallet: "0xf98b589a3bb76a78930cba26c19673ed4e67426b", net: 0, received: 56819, sent: 56819, txs: 2 },
    { wallet: "0xeac35e5fd9b9e0a6bad0dcd1da8fda75a2a642c1", net: 0, received: 56995, sent: 56995, txs: 3 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 100884, sent: 100884, txs: 12 },
    { wallet: "0xd44893fc4e74c9dbfbca539ea9ab941ae1304ea2", net: 0, received: 45068, sent: 45068, txs: 2 },
    { wallet: "0x866f32da6816068e1c2cdd4920d0c03b9627d8db", net: 0, received: 16381, sent: 16381, txs: 2 }
];

const WHALE_LABELS = {

};
