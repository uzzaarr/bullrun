// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 11, 2026 at 07:46 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 123;
const WHALE_TOTAL_VOLUME      = 1097859;
const WHALE_BIGGEST_SINGLE    = 673177;

const WHALE_TRANSFERS = [
    { hash: "0x934c6084221d7625671104edbfc46c369cba98950f1441cf81e8f48c0bf238b6", ts: 1783692875, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 141382, block: 25502719, type: "transfer" },
    { hash: "0x16bef469df61fcc801d49036b6444754f111410f665a3bd5a6872eb83e81e3e5", ts: 1783692563, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 141382, block: 25502693, type: "transfer" },
    { hash: "0x4ec01c1a4909f7d8ec057f5626e3d392e5d497f806f3ee6a4b653e956e5b407e", ts: 1783692239, from: "0x0ff258cc4aba5a91566c5630f059d62a31e74e79", to: "0xde795c7407df50133d25fd17e51b97a67d356e93", amount: 141918, block: 25502666, type: "transfer" },
    { hash: "0xdb93899d07b0da399cfa2806382f53a65eed708f825f401983a277e6fe5dbfec", ts: 1783685195, from: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 673177, block: 25502080, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 663542, received: 673177, sent: 9635, txs: 2 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 235513, received: 235513, sent: 0, txs: 2 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 100506, received: 100506, sent: 0, txs: 11 },
    { wallet: "0x6cffe5ab78191da6ef7e12e9c4b54377d2d202fe", net: 66164, received: 66164, sent: 0, txs: 1 },
    { wallet: "0x0a29399c261985cf1ff1113af58270d954ed4567", net: 52181, received: 52181, sent: 0, txs: 1 },
    { wallet: "0xd0a9f73f78c4b7dd03d045efe5dbd00e1381b51e", net: 40306, received: 40306, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 35469, received: 35469, sent: 0, txs: 2 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 25594, received: 25594, sent: 0, txs: 1 },
    { wallet: "0xf95eab540c8890ee18d481e0613116c2f7e4442a", net: 16712, received: 16712, sent: 0, txs: 1 },
    { wallet: "0x7b7dacd75a88121a6a34d6de6d1c631032af3fda", net: 16712, received: 16712, sent: 0, txs: 1 },
    { wallet: "0xc7740a92cffc35ff79228af625216d9c15545b5f", net: 14383, received: 14383, sent: 0, txs: 1 },
    { wallet: "0x5f1c5951c5b1cc112ba9e89b9467edca33063453", net: 11035, received: 11035, sent: 0, txs: 1 },
    { wallet: "0x28b66df6914b9874432a62358e5a2e949d8583cd", net: 10373, received: 10373, sent: 0, txs: 1 },
    { wallet: "0xe19ed11103265687a351662aab588a890ec598b4", net: 9635, received: 9635, sent: 0, txs: 1 },
    { wallet: "0x08975eb9695e5ce896f7416daa9a5f62e81142b3", net: 7397, received: 7397, sent: 0, txs: 1 },
    { wallet: "0x58a3bfcc09411fc55327e262ee140bfe10905987", net: 6671, received: 6671, sent: 0, txs: 1 },
    { wallet: "0xbbc2e9fadd02f03bda75894d84148862f294983a", net: 4384, received: 4384, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 4384, received: 4384, sent: 0, txs: 1 },
    { wallet: "0xe28d7502e70c9b45de8218b122a72a1eaf972695", net: 3900, received: 3900, sent: 0, txs: 1 },
    { wallet: "0xfd9072f3715419414e2345da949fe5048c839877", net: 3836, received: 3836, sent: 0, txs: 1 },
    { wallet: "0xf3b41e096731dffff3cb4a28ad989a825ffd9d67", net: 3699, received: 3699, sent: 0, txs: 1 },
    { wallet: "0xa82d671e74c0f1d1f77f25cd79345d6f5c8d9005", net: 2877, received: 2877, sent: 0, txs: 1 },
    { wallet: "0x5afdfc44e2dfa3e3940f479ac23097103387c23a", net: 1405, received: 5305, sent: 3900, txs: 4 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 1233, received: 1233, sent: 0, txs: 2 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 740, received: 740, sent: 0, txs: 8 },
    { wallet: "0x9df14235393c7a9d2bc38db6c12c61b699e094c6", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x3c9108700724d9d96cff2ac8979d6ad2a8d469ae", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x39faf1de461849163e390d0a57d1eaa632064a49", net: 152, received: 152, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 123, received: 123, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 39, received: 237150, sent: 237112, txs: 6 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 123, sent: 123, txs: 2 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 75891, sent: 75891, txs: 10 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 61743, sent: 61743, txs: 10 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 99839, sent: 99839, txs: 25 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 15553, sent: 15553, txs: 5 },
    { wallet: "0x614a51e12add1d69bffe1114b0e80c878654fa9b", net: 0, received: 1370, sent: 1370, txs: 3 },
    { wallet: "0x66d1bd87005ae6dbe7cc5840802e818c5cdf7158", net: 0, received: 1370, sent: 1370, txs: 2 },
    { wallet: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", net: 0, received: 235513, sent: 235513, txs: 4 },
    { wallet: "0x659ae9205525a6be10cfac08222c45f86eff2524", net: 0, received: 95684, sent: 95684, txs: 2 },
    { wallet: "0x17f74590b301995487dd58a8e15bed20664d417d", net: 0, received: 95833, sent: 95833, txs: 3 },
    { wallet: "0x7be84e4dbe421f5e53fbc33227ee1186ab5d5ee8", net: 0, received: 7671, sent: 7671, txs: 3 },
    { wallet: "0x1aba1313639cae8325c10d0d3f83015c0e771d2e", net: 0, received: 7671, sent: 7671, txs: 2 },
    { wallet: "0x22a607be5bf946935def3b7b5bd3310b4f81cead", net: 0, received: 6301, sent: 6302, txs: 4 },
    { wallet: "0x072a59700edfa7e6662dcac145a1a355f38a326b", net: 0, received: 14384, sent: 14383, txs: 2 },
    { wallet: "0x61270ef841f9673255270c38cea84ad66c935051", net: 0, received: 14384, sent: 14384, txs: 2 },
    { wallet: "0x8aefefe076b757a13db9cc13a177254b76f4d5bd", net: 0, received: 70733, sent: 70733, txs: 2 }
];

const WHALE_LABELS = {

};
