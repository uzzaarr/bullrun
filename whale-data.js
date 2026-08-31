// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "August 31, 2026 at 10:17 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 257;
const WHALE_TOTAL_VOLUME      = 5638230;
const WHALE_BIGGEST_SINGLE    = 619852;

const WHALE_TRANSFERS = [
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
    { hash: "0x9d575eef869e2b39d7bb400f0060d9a59f398b52fcd984d41cb33f83a9533b64", ts: 1788146423, from: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 144817, block: 25872531, type: "sell" },
    { hash: "0x3706d20cb0c7b1ee53c2dcd6f98e5f9910eec3498131facdd4ef21d35c08fe24", ts: 1788142763, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", amount: 146022, block: 25872229, type: "buy" },
    { hash: "0xcb26b65ba81dd28b1d2fb3f56192a0cb8c0b275ff21de84fbe835d54ba9adf16", ts: 1788134747, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", amount: 125634, block: 25871564, type: "transfer" },
    { hash: "0xcb26b65ba81dd28b1d2fb3f56192a0cb8c0b275ff21de84fbe835d54ba9adf16", ts: 1788134747, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 125634, block: 25871564, type: "buy" },
    { hash: "0xe07fb687ba2c76e7f46b702f4f529e97bee20a5dddf53652177476cfb5ebb4a6", ts: 1788133655, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 222547, block: 25871473, type: "sell" },
    { hash: "0xe07fb687ba2c76e7f46b702f4f529e97bee20a5dddf53652177476cfb5ebb4a6", ts: 1788133655, from: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 222547, block: 25871473, type: "transfer" },
    { hash: "0x130e27fe78d42b8710e2136a93be08649ebe8687f5c0c6c7a83dca4012f4cb49", ts: 1788133223, from: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 145228, block: 25871437, type: "sell" },
    { hash: "0x77d56bc6f05ba125a442b45b7e9ded44f1a21b82c15f0c27b5debe93cf47eecb", ts: 1788132575, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25871383, type: "sell" },
    { hash: "0xe7d374866b379ee4c64cfc2d771488b50e3ab6b23fa45230c57172709b423c28", ts: 1788132239, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 159669, block: 25871355, type: "sell" },
    { hash: "0xe7d374866b379ee4c64cfc2d771488b50e3ab6b23fa45230c57172709b423c28", ts: 1788132239, from: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 159669, block: 25871355, type: "transfer" },
    { hash: "0xe211ae25623ee66ea6f7a77027bf65e9f9b1d3311cf7f43ef8908718eefdd912", ts: 1788131855, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 115710, block: 25871323, type: "sell" },
    { hash: "0xe211ae25623ee66ea6f7a77027bf65e9f9b1d3311cf7f43ef8908718eefdd912", ts: 1788131855, from: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 115710, block: 25871323, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x4f5d3e4659bc564f411d91a85759662a4ec5a7af", net: 605630, received: 605630, sent: 0, txs: 1 },
    { wallet: "0x3c2348e54c5d1bdd985a1767165e0b8a00d25dea", net: 301804, received: 301804, sent: 0, txs: 2 },
    { wallet: "0x67336cec42645f55059eff241cb02ea5cc52ff86", net: 187378, received: 329797, sent: 142419, txs: 11 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 151221, received: 151221, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 125709, received: 125709, sent: 0, txs: 3 },
    { wallet: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", net: 100000, received: 300000, sent: 200000, txs: 5 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 99097, received: 104065, sent: 4967, txs: 4 },
    { wallet: "0xa747fb6dfc7903bb0d1a1e490681418de4931e7e", net: 43699, received: 43699, sent: 0, txs: 1 },
    { wallet: "0x2fb2c92431b35188007b2b1e0b0c717f9b7dae75", net: 23425, received: 23425, sent: 0, txs: 1 },
    { wallet: "0xfe311f553158b629adbb1d12dd566272e1a690ae", net: 16456, received: 34600, sent: 18144, txs: 3 },
    { wallet: "0xb8001c3ec9aa1985f6c747e25c28324e4a361ec1", net: 14223, received: 619852, sent: 605630, txs: 2 },
    { wallet: "0xa3222357a0eccf60c73606170be6c99adecb59b3", net: 12384, received: 46984, sent: 34600, txs: 5 },
    { wallet: "0x6532c2c4d01f27712586509a369166b5948c442a", net: 8630, received: 8630, sent: 0, txs: 1 },
    { wallet: "0x1aba1313639cae8325c10d0d3f83015c0e771d2e", net: 8219, received: 8219, sent: 0, txs: 1 },
    { wallet: "0xc742f1f075b6c890b8bb1fabfffb29973637bf20", net: 6094, received: 6094, sent: 0, txs: 1 },
    { wallet: "0xea1f8382cd15ccecc6393df43b11e8a87bf2545a", net: 6027, received: 6027, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 4384, received: 4384, sent: 0, txs: 1 },
    { wallet: "0x20694bb5c906ee71e696587be233284f995564b7", net: 3836, received: 3836, sent: 0, txs: 1 },
    { wallet: "0xc580ff7114f1152947a4d6abffa925005dfde731", net: 3617, received: 3617, sent: 0, txs: 1 },
    { wallet: "0xee24dffca375eaa986e0159cbec5994f759c03ce", net: 3562, received: 3562, sent: 0, txs: 1 },
    { wallet: "0xac2a8724ca8bd3d7cb9d036793886fb03fce775e", net: 3488, received: 3488, sent: 0, txs: 1 },
    { wallet: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", net: 2309, received: 436880, sent: 434571, txs: 6 },
    { wallet: "0xc62b1da436e6407efd69d82994a3c803ff9a527d", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0xb1a78eea2125efcf4c9153c551b3ece73e8a3ca7", net: 1881, received: 4967, sent: 3086, txs: 2 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1243, received: 1243, sent: 0, txs: 15 },
    { wallet: "0xd9bee2f424e7cf188ca816ebb6e57fb4f2ccab50", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0xe612cc0d682cb2551285992158f14b0b342cdc1b", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0x0f36eb8f227aa28e2eb2705724233addabd61e15", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x139724a176a50f5089f4ed5bc653124e9d2c97f3", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x4f3889331539ab2ed976dbaf67c8def36deeed15", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x5aafc1f252d544f744d17a4e734afd6efc47ede4", net: 320, received: 320, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xa273dd2cbd0f0a5333ef0c0d31c8acc7b8bc0732", net: 86, received: 86, sent: 0, txs: 1 },
    { wallet: "0xd7ca08ec1aee9cce8a8eda9365343ef197674e1a", net: 27, received: 52967, sent: 52941, txs: 2 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 14, received: 14, sent: 0, txs: 1 },
    { wallet: "0xca5b3bbb368db39d223a9fa57a577f9a98a03638", net: 4, received: 4, sent: 0, txs: 1 },
    { wallet: "0x4296339b4ff8e67f07de40d97a49a680f2598e0f", net: 0, received: 120676, sent: 120676, txs: 12 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 172927, sent: 172927, txs: 20 },
    { wallet: "0x44926d92979d022991a31ed8ba12580bb9edaac8", net: 0, received: 1644, sent: 1644, txs: 3 },
    { wallet: "0xd11a748e4e1802d2c9e11bec1518736ad7646946", net: 0, received: 1233, sent: 1233, txs: 2 },
    { wallet: "0x7829c55aea7a3152f0c67dd703ebfe1659b16e00", net: 0, received: 19928, sent: 19928, txs: 2 },
    { wallet: "0x0a9c28275d73815b4b69d3a0b37834621b4eb210", net: 0, received: 1096, sent: 1096, txs: 3 },
    { wallet: "0x83ce36503d668dc4efe16416b92f498d06cdc88b", net: 0, received: 1096, sent: 1096, txs: 2 },
    { wallet: "0x82af114cebcb99fdea86e3264f1d9c237293989c", net: 0, received: 619852, sent: 619852, txs: 2 }
];

const WHALE_LABELS = {

};
