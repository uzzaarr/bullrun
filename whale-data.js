// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 11, 2026 at 01:05 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 108;
const WHALE_TOTAL_VOLUME      = 3790862;
const WHALE_BIGGEST_SINGLE    = 3366180;

const WHALE_TRANSFERS = [
    { hash: "0xe48dcccf2e84a1e7496df74faffe8ea8e3f5c8b62af941212c1941d27e8be145", ts: 1783774271, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x28ede55e0ff5e20d732b989879aecfd87b8f761b", amount: 3366180, block: 25509484, type: "transfer" },
    { hash: "0x934c6084221d7625671104edbfc46c369cba98950f1441cf81e8f48c0bf238b6", ts: 1783692875, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 141382, block: 25502719, type: "transfer" },
    { hash: "0x16bef469df61fcc801d49036b6444754f111410f665a3bd5a6872eb83e81e3e5", ts: 1783692563, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 141382, block: 25502693, type: "transfer" },
    { hash: "0x4ec01c1a4909f7d8ec057f5626e3d392e5d497f806f3ee6a4b653e956e5b407e", ts: 1783692239, from: "0x0ff258cc4aba5a91566c5630f059d62a31e74e79", to: "0xde795c7407df50133d25fd17e51b97a67d356e93", amount: 141918, block: 25502666, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x28ede55e0ff5e20d732b989879aecfd87b8f761b", net: 3366180, received: 3366180, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 235513, received: 235513, sent: 0, txs: 2 },
    { wallet: "0x0a29399c261985cf1ff1113af58270d954ed4567", net: 52181, received: 52181, sent: 0, txs: 1 },
    { wallet: "0xd0a9f73f78c4b7dd03d045efe5dbd00e1381b51e", net: 40306, received: 40306, sent: 0, txs: 1 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 20649, received: 20649, sent: 0, txs: 3 },
    { wallet: "0xf95eab540c8890ee18d481e0613116c2f7e4442a", net: 16712, received: 16712, sent: 0, txs: 1 },
    { wallet: "0x7b7dacd75a88121a6a34d6de6d1c631032af3fda", net: 16712, received: 16712, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 16449, received: 253561, sent: 237112, txs: 7 },
    { wallet: "0xc7740a92cffc35ff79228af625216d9c15545b5f", net: 14383, received: 14383, sent: 0, txs: 1 },
    { wallet: "0x28b66df6914b9874432a62358e5a2e949d8583cd", net: 10373, received: 10373, sent: 0, txs: 1 },
    { wallet: "0x833d94482a13a7620cd3c9731bbe71c31d958012", net: 8356, received: 8356, sent: 0, txs: 1 },
    { wallet: "0x08975eb9695e5ce896f7416daa9a5f62e81142b3", net: 7397, received: 7397, sent: 0, txs: 1 },
    { wallet: "0xbf7d14d0d1efefc6ec2ecc07b2bc026324743c00", net: 6027, received: 6027, sent: 0, txs: 1 },
    { wallet: "0xbbc2e9fadd02f03bda75894d84148862f294983a", net: 4384, received: 4384, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 4384, received: 4384, sent: 0, txs: 1 },
    { wallet: "0xfd9072f3715419414e2345da949fe5048c839877", net: 3836, received: 3836, sent: 0, txs: 1 },
    { wallet: "0xf3b41e096731dffff3cb4a28ad989a825ffd9d67", net: 3699, received: 3699, sent: 0, txs: 1 },
    { wallet: "0xa82d671e74c0f1d1f77f25cd79345d6f5c8d9005", net: 2877, received: 2877, sent: 0, txs: 1 },
    { wallet: "0x5afdfc44e2dfa3e3940f479ac23097103387c23a", net: 1405, received: 1405, sent: 0, txs: 2 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 1233, received: 1233, sent: 0, txs: 2 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 821, received: 821, sent: 0, txs: 11 },
    { wallet: "0x5d73e31d8588d928d2dcbea05dc8038d86730bf5", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x9df14235393c7a9d2bc38db6c12c61b699e094c6", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x39faf1de461849163e390d0a57d1eaa632064a49", net: 152, received: 152, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 123, received: 123, sent: 0, txs: 1 },
    { wallet: "0x1b8b2d9127f16804e94e0523b0f0e21a852f3d07", net: 33, received: 33, sent: 0, txs: 1 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 62874, sent: 62874, txs: 15 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 83655, sent: 83655, txs: 16 },
    { wallet: "0x10916b18ce6deef279f0ee66fab6b6c0e3461b78", net: 0, received: 710, sent: 710, txs: 4 },
    { wallet: "0x3c9108700724d9d96cff2ac8979d6ad2a8d469ae", net: 0, received: 274, sent: 274, txs: 2 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 22186, sent: 22186, txs: 8 },
    { wallet: "0x77b8610446bcf562faabadb6aa41680565b83609", net: 0, received: 6671, sent: 6671, txs: 3 },
    { wallet: "0x58a3bfcc09411fc55327e262ee140bfe10905987", net: 0, received: 6671, sent: 6671, txs: 2 },
    { wallet: "0x5b89183e8307f0aefbaf0c63b406207fd5476394", net: 0, received: 16410, sent: 16410, txs: 2 },
    { wallet: "0x214a439a6c52259117ac3598bebe62d0c2efa813", net: 0, received: 16438, sent: 16438, txs: 3 },
    { wallet: "0x49a2299840a9a5495cae51415548c2b1344bd4f3", net: 0, received: 16438, sent: 16438, txs: 2 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 123, sent: 123, txs: 2 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 19981, sent: 19981, txs: 5 },
    { wallet: "0x614a51e12add1d69bffe1114b0e80c878654fa9b", net: 0, received: 1370, sent: 1370, txs: 3 },
    { wallet: "0x66d1bd87005ae6dbe7cc5840802e818c5cdf7158", net: 0, received: 1370, sent: 1370, txs: 2 },
    { wallet: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", net: 0, received: 235513, sent: 235513, txs: 4 },
    { wallet: "0x659ae9205525a6be10cfac08222c45f86eff2524", net: 0, received: 95684, sent: 95684, txs: 2 },
    { wallet: "0x17f74590b301995487dd58a8e15bed20664d417d", net: 0, received: 95833, sent: 95833, txs: 3 },
    { wallet: "0x7be84e4dbe421f5e53fbc33227ee1186ab5d5ee8", net: 0, received: 7671, sent: 7671, txs: 3 },
    { wallet: "0x1aba1313639cae8325c10d0d3f83015c0e771d2e", net: 0, received: 7671, sent: 7671, txs: 2 },
    { wallet: "0x22a607be5bf946935def3b7b5bd3310b4f81cead", net: 0, received: 6301, sent: 6302, txs: 4 },
    { wallet: "0x072a59700edfa7e6662dcac145a1a355f38a326b", net: 0, received: 14384, sent: 14383, txs: 2 },
    { wallet: "0x61270ef841f9673255270c38cea84ad66c935051", net: 0, received: 14384, sent: 14384, txs: 2 }
];

const WHALE_LABELS = {

};
