// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "September 1, 2026 at 03:03 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 203;
const WHALE_TOTAL_VOLUME      = 4799847;
const WHALE_BIGGEST_SINGLE    = 619852;

const WHALE_TRANSFERS = [
    { hash: "0xbfbe2e75addd1a15b3658ce153758ef3ae55c519b77aace779e7a1400d5fa3a5", ts: 1788228383, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", amount: 148100, block: 25879333, type: "buy" },
    { hash: "0x8fcf3f558fab7fcdc55c82b7846978ef5ff2cac382da0df7618aee7e9dabf451", ts: 1788225131, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", amount: 151881, block: 25879062, type: "transfer" },
    { hash: "0x8fcf3f558fab7fcdc55c82b7846978ef5ff2cac382da0df7618aee7e9dabf451", ts: 1788225131, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 151881, block: 25879062, type: "buy" },
    { hash: "0xf4181b5c28ea0138b47b1bbb9c4eb6b8032420f034041692f65bf0782d5ec1a5", ts: 1788225119, from: "0x78bae4530a500fea643d270ff9219f0a0b92a5c8", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 236344, block: 25879061, type: "sell" },
    { hash: "0x32f1d9b9d012607209aa327f08c289ef25a646620e3c89f066036aa966af3cf9", ts: 1788224987, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x4c3b4d2f1359b3ede890fef41aee3a4cc16c1883", amount: 111781, block: 25879050, type: "transfer" },
    { hash: "0x2d98bb806aff4f0890b51ccf2c2f3f06a8d00e478f11b6fcd79af102b5924521", ts: 1788208943, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25877720, type: "buy" },
    { hash: "0xdc628ad81caff2578e16aebef478e3339de82b23d75c5a9ddd2a13c16d91c2cf", ts: 1788201887, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25877136, type: "buy" },
    { hash: "0x4f7171e9ca05e1b6f08988336c72bbc85117499943e084bbbb3d14d0b6a35981", ts: 1788200447, from: "0xb8001c3ec9aa1985f6c747e25c28324e4a361ec1", to: "0x4f5d3e4659bc564f411d91a85759662a4ec5a7af", amount: 605630, block: 25877016, type: "transfer" },
    { hash: "0xc24105766fe7eedeb6fe0a5ca6346a6af8d0975df43a0fb5f59e3c9ff8323d69", ts: 1788199919, from: "0x82af114cebcb99fdea86e3264f1d9c237293989c", to: "0xb8001c3ec9aa1985f6c747e25c28324e4a361ec1", amount: 619852, block: 25876972, type: "transfer" },
    { hash: "0x286a267ca647fe5f1574f02fff157dfb9daa02d756a10f83d0be3e5bd4bc6ac9", ts: 1788199259, from: "0xd83bbad310f696dd59464483d28bad209b76d1fb", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100461, block: 25876918, type: "sell" },
    { hash: "0xa63997c54eb0278aa0832fe6cc4ad3fe40a14adb4f404673d2bfbaf97feef2b7", ts: 1788198983, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x82af114cebcb99fdea86e3264f1d9c237293989c", amount: 619852, block: 25876895, type: "transfer" },
    { hash: "0xfa2349a37ccf13ae8e3b2ed30f1407af57e49256b3170c6c093067c7dd009140", ts: 1788192683, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x3c2348e54c5d1bdd985a1767165e0b8a00d25dea", amount: 151210, block: 25876373, type: "buy" },
    { hash: "0xd40ed56e2dc3c7bd395ce6d40ccdf22fcd6a3304ffe9dc02dbd4a109e5b5f70b", ts: 1788183659, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x3c2348e54c5d1bdd985a1767165e0b8a00d25dea", amount: 150593, block: 25875621, type: "buy" },
    { hash: "0xf4ce07ca57f94f496a2d88e5915bc989ee3d9d9d1b8b029f79789eab58bb7db1", ts: 1788182375, from: "0x4296339b4ff8e67f07de40d97a49a680f2598e0f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 109901, block: 25875515, type: "sell" },
    { hash: "0xf4ce07ca57f94f496a2d88e5915bc989ee3d9d9d1b8b029f79789eab58bb7db1", ts: 1788182375, from: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", to: "0x4296339b4ff8e67f07de40d97a49a680f2598e0f", amount: 111646, block: 25875515, type: "transfer" },
    { hash: "0xf4ce07ca57f94f496a2d88e5915bc989ee3d9d9d1b8b029f79789eab58bb7db1", ts: 1788182375, from: "0xd83bbad310f696dd59464483d28bad209b76d1fb", to: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", amount: 111646, block: 25875515, type: "transfer" },
    { hash: "0xdf63d2bf13e9d8f703a2ea623772f6fa6b2d1dcd83bd6ae56b8d95fb7677c226", ts: 1788179495, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25875278, type: "sell" },
    { hash: "0x61e30746b0d9fafa93f28f90cc2b779d5e8fbc8e5703b11368f06204d361781e", ts: 1788178451, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", amount: 151221, block: 25875191, type: "transfer" },
    { hash: "0xd207e8e11a20f7bfb53f214d452da81468f15d0d88bcee99fcb60b1b0f9939e2", ts: 1788172799, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25874723, type: "buy" },
    { hash: "0x2ac55fa794926cb218be43ca005991cb77891ccd60e24d4b86f5c043c39742d0", ts: 1788165467, from: "0x67336cec42645f55059eff241cb02ea5cc52ff86", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 142419, block: 25874116, type: "sell" },
    { hash: "0x5892125eb23d3291d4cb82c1274518f975714fb567e9d21c2e189b944021dedd", ts: 1788164903, from: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 145344, block: 25874069, type: "sell" },
    { hash: "0x2ca1e36db89d9b1a7bd8036fc0bc2edd8a1f38c6fe3400f744c23cdffcd65f1d", ts: 1788157523, from: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 144410, block: 25873455, type: "sell" },
    { hash: "0xe33f38f75ef9e4a89d48c409cff5167ae6691253e43c4fce2ba7e56004e1ff93", ts: 1788153431, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", amount: 145126, block: 25873114, type: "buy" },
    { hash: "0x25a9ce9a382a39ace72dbe4fb863e810fad1d5da4698e433e14a1f93f04904f1", ts: 1788152531, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", amount: 145732, block: 25873039, type: "buy" },
    { hash: "0x9d575eef869e2b39d7bb400f0060d9a59f398b52fcd984d41cb33f83a9533b64", ts: 1788146423, from: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 144817, block: 25872531, type: "sell" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x4f5d3e4659bc564f411d91a85759662a4ec5a7af", net: 605630, received: 605630, sent: 0, txs: 1 },
    { wallet: "0x3c2348e54c5d1bdd985a1767165e0b8a00d25dea", net: 301804, received: 301804, sent: 0, txs: 2 },
    { wallet: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", net: 200000, received: 300000, sent: 100000, txs: 4 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 151221, received: 151221, sent: 0, txs: 1 },
    { wallet: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", net: 148100, received: 148100, sent: 0, txs: 1 },
    { wallet: "0x4c3b4d2f1359b3ede890fef41aee3a4cc16c1883", net: 111781, received: 111781, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 100457, received: 105424, sent: 4967, txs: 5 },
    { wallet: "0x9abe1355078b45b7e7f42e3f3e40df246139bc7d", net: 44807, received: 44807, sent: 0, txs: 1 },
    { wallet: "0x2fb2c92431b35188007b2b1e0b0c717f9b7dae75", net: 23425, received: 23425, sent: 0, txs: 1 },
    { wallet: "0xb8001c3ec9aa1985f6c747e25c28324e4a361ec1", net: 14223, received: 619852, sent: 605630, txs: 2 },
    { wallet: "0x6532c2c4d01f27712586509a369166b5948c442a", net: 8630, received: 8630, sent: 0, txs: 1 },
    { wallet: "0xc742f1f075b6c890b8bb1fabfffb29973637bf20", net: 6094, received: 6094, sent: 0, txs: 1 },
    { wallet: "0xea1f8382cd15ccecc6393df43b11e8a87bf2545a", net: 6027, received: 6027, sent: 0, txs: 1 },
    { wallet: "0x66d1bd87005ae6dbe7cc5840802e818c5cdf7158", net: 4110, received: 4110, sent: 0, txs: 1 },
    { wallet: "0x20694bb5c906ee71e696587be233284f995564b7", net: 3836, received: 3836, sent: 0, txs: 1 },
    { wallet: "0x0fe336276fcfbe08930fc0fdbf6e76a9729940e8", net: 3710, received: 3710, sent: 0, txs: 1 },
    { wallet: "0xc580ff7114f1152947a4d6abffa925005dfde731", net: 3617, received: 3617, sent: 0, txs: 1 },
    { wallet: "0xee24dffca375eaa986e0159cbec5994f759c03ce", net: 3562, received: 3562, sent: 0, txs: 1 },
    { wallet: "0xac2a8724ca8bd3d7cb9d036793886fb03fce775e", net: 3488, received: 3488, sent: 0, txs: 1 },
    { wallet: "0x7764c8727dab012fce187df0736dab2b00ef691c", net: 3288, received: 19726, sent: 16438, txs: 4 },
    { wallet: "0x5e17a91c3b9e2d92b4e65fc0189ab5651ada0fe5", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0xc62b1da436e6407efd69d82994a3c803ff9a527d", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0xb1a78eea2125efcf4c9153c551b3ece73e8a3ca7", net: 1881, received: 4967, sent: 3086, txs: 2 },
    { wallet: "0xa3222357a0eccf60c73606170be6c99adecb59b3", net: 1688, received: 18144, sent: 16456, txs: 2 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1380, received: 1380, sent: 0, txs: 12 },
    { wallet: "0xd9bee2f424e7cf188ca816ebb6e57fb4f2ccab50", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0xe612cc0d682cb2551285992158f14b0b342cdc1b", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x0f36eb8f227aa28e2eb2705724233addabd61e15", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x139724a176a50f5089f4ed5bc653124e9d2c97f3", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x4f3889331539ab2ed976dbaf67c8def36deeed15", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x5aafc1f252d544f744d17a4e734afd6efc47ede4", net: 320, received: 320, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xa273dd2cbd0f0a5333ef0c0d31c8acc7b8bc0732", net: 86, received: 86, sent: 0, txs: 1 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 14, received: 14, sent: 0, txs: 1 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 161248, sent: 161248, txs: 16 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 88101, sent: 88101, txs: 10 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 642014, sent: 642014, txs: 28 },
    { wallet: "0x1f2f10d1c40777ae1da742455c65828ff36df387", net: 0, received: 23627, sent: 23627, txs: 2 },
    { wallet: "0xf971475a5416c4b2bb615c8aa6829eda1402b62b", net: 0, received: 1360, sent: 1360, txs: 2 },
    { wallet: "0x2d84a18d4d1356420f3115e4d11e26680671c62d", net: 0, received: 1370, sent: 1370, txs: 3 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 0, received: 1370, sent: 1370, txs: 2 },
    { wallet: "0x569bd76e645fc767e84f8cbb34f40261e7c74c76", net: 0, received: 47671, sent: 47671, txs: 2 },
    { wallet: "0x4296339b4ff8e67f07de40d97a49a680f2598e0f", net: 0, received: 114337, sent: 114337, txs: 8 },
    { wallet: "0x44926d92979d022991a31ed8ba12580bb9edaac8", net: 0, received: 1644, sent: 1644, txs: 3 },
    { wallet: "0xd11a748e4e1802d2c9e11bec1518736ad7646946", net: 0, received: 1233, sent: 1233, txs: 2 }
];

const WHALE_LABELS = {

};
