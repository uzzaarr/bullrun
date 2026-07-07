// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 7, 2026 at 09:31 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 210;
const WHALE_TOTAL_VOLUME      = 1370239;
const WHALE_BIGGEST_SINGLE    = 397301;

const WHALE_TRANSFERS = [
    { hash: "0xccff4360097d6ae3909f852012091a4dcca4d2116593a03f20b3a7fcdb059a05", ts: 1783409687, from: "0x8dc59f001b8883aea71eacd4e5842dc3395b2ae6", to: "0x22510fe99f63ae03ba792c21a29ec10fd87cae08", amount: 100000, block: 25479206, type: "transfer" },
    { hash: "0xa562c34500f13f4a4f5f1a81415b1bde763573eaa54f76148662bcc7449aa15b", ts: 1783387943, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x5db6fb1ffef3bf4078c2e2fdb80cdc99e02f09a1", amount: 245479, block: 25477404, type: "transfer" },
    { hash: "0x63a31aedfcd1d773c6aba201a8189a1f8b9d1f714b9a733c2f507e2edf7f906f", ts: 1783368875, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 397301, block: 25475816, type: "transfer" },
    { hash: "0x1c65343c77057a1d8cb062efff70b552a3d0ecb6db1192c64d6ef6a69eb1a8c3", ts: 1783368383, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 150111, block: 25475775, type: "transfer" },
    { hash: "0xe4d74eb0c1587ca6adc3f3694f8ca1f8bf3c3ff44d2ee5f99b2581b00cfaf65f", ts: 1783368191, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 247190, block: 25475759, type: "transfer" },
    { hash: "0xf464ab6465215c3647420298f039a1dd4799fa4b42cd8fb03f892710735fa900", ts: 1783367939, from: "0x9f149b14c0ecbfa0be9830510d2d647d73e53008", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 115079, block: 25475738, type: "transfer" },
    { hash: "0x49eda6de634e40eb3856b8f5540e1bdaf5c035d1b956e3dce5b245d6aae6c051", ts: 1783367891, from: "0x2f4243b2fecfb26841e8af99c357ca475b96d777", to: "0x9f149b14c0ecbfa0be9830510d2d647d73e53008", amount: 115079, block: 25475734, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 448091, received: 477767, sent: 29676, txs: 4 },
    { wallet: "0x5db6fb1ffef3bf4078c2e2fdb80cdc99e02f09a1", net: 245479, received: 245479, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 148400, received: 148400, sent: 0, txs: 2 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 112845, received: 129394, sent: 16549, txs: 4 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 95630, received: 95630, sent: 0, txs: 3 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 67083, received: 67083, sent: 0, txs: 1 },
    { wallet: "0xd83bbad310f696dd59464483d28bad209b76d1fb", net: 54667, received: 54667, sent: 0, txs: 1 },
    { wallet: "0x65668dfa245f0f8b519b8c9f25174023ebadc2aa", net: 47000, received: 47000, sent: 0, txs: 1 },
    { wallet: "0x6a79b5142ed23875ce46f40826ff686b5429f78f", net: 43339, received: 43339, sent: 0, txs: 1 },
    { wallet: "0x538960b9e4849bd2eeea32d3994480969e1da019", net: 43014, received: 43014, sent: 0, txs: 1 },
    { wallet: "0xe91a382ec99df4cbe0d1de546b5aa17ea0f2cedc", net: 29676, received: 29676, sent: 0, txs: 1 },
    { wallet: "0xbbf7e985e1e0ca6f854cecb5096274e8e797e8b4", net: 28665, received: 28665, sent: 0, txs: 1 },
    { wallet: "0xa22fec6701a2450c7bb89ec44c1dc709978d37c7", net: 23129, received: 23129, sent: 0, txs: 1 },
    { wallet: "0x9be5b8a7314552fa47feb1355cd5b4adc7bb7516", net: 20679, received: 51202, sent: 30523, txs: 5 },
    { wallet: "0xe8446569ee2311ac5c455cf97e6eb5cd594356ea", net: 18630, received: 18630, sent: 0, txs: 1 },
    { wallet: "0xcf96bd96aa81d08e1bec7d5af06b18f00e8a0640", net: 16438, received: 16438, sent: 0, txs: 1 },
    { wallet: "0x16947937aca05aa185b1406d0a2432fc8bdd0126", net: 15000, received: 15000, sent: 0, txs: 1 },
    { wallet: "0xbf7d14d0d1efefc6ec2ecc07b2bc026324743c00", net: 10548, received: 10548, sent: 0, txs: 1 },
    { wallet: "0xe2a4de267cdd4ff5ed9ba13552f5c624b12db9b2", net: 9452, received: 9452, sent: 0, txs: 1 },
    { wallet: "0x1a996eb2a69423926d60973fc3d73cf1fa847a2f", net: 8767, received: 8767, sent: 0, txs: 1 },
    { wallet: "0xd308fc4ec59cf2779eb75787810f05fc80fedb60", net: 7945, received: 7945, sent: 0, txs: 1 },
    { wallet: "0x5ef14c2575cd87b59742c165abdc039e441261de", net: 7393, received: 7393, sent: 0, txs: 1 },
    { wallet: "0x5511a0371fa859183dfc7bc508bb036c93a7de49", net: 7123, received: 7123, sent: 0, txs: 1 },
    { wallet: "0x716e3fad60bc867449795cd624da34aab3dc381f", net: 6382, received: 6382, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0x4b5f834ede79c52bd33d952c719a0b641a0310ea", net: 2765, received: 2765, sent: 0, txs: 1 },
    { wallet: "0x2a76a5be3bca8200f7810600ed9201103746810b", net: 1918, received: 1918, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1433, received: 1433, sent: 0, txs: 13 },
    { wallet: "0x676429768cbeac163383f26cab1f5a12f6ffec53", net: 890, received: 15890, sent: 15000, txs: 2 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xbdbfb6ced3502f6e13d638d7e6bdc7e379898362", net: 598, received: 598, sent: 0, txs: 1 },
    { wallet: "0x907262769c7143796829c3d9595d8d4007e65cd1", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x9df14235393c7a9d2bc38db6c12c61b699e094c6", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x83ce36503d668dc4efe16416b92f498d06cdc88b", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x2cacf25ae508d3bf9eaeb4e46ebb219a137c24b7", net: 412, received: 412, sent: 0, txs: 1 },
    { wallet: "0x4f3889331539ab2ed976dbaf67c8def36deeed15", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x9008d19f58aabd9ed0d60971565aa8510560ab41", net: 282, received: 38144, sent: 37862, txs: 2 },
    { wallet: "0xa05853274a5c3bb5080352e413487d24e758444a", net: 165, received: 165, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 151, received: 151, sent: 0, txs: 1 },
    { wallet: "0x28bf6006d87de7f44445905aa4f5cb8c0d8cba02", net: 18, received: 98019, sent: 98001, txs: 10 },
    { wallet: "0x162c40a9e70f75dd6d25e9a5d028377bfddd01a0", net: 0, received: 15019, sent: 15019, txs: 2 },
    { wallet: "0x41e896e6eb9856aa413234ecbfeef4060e9d8531", net: 0, received: 15068, sent: 15068, txs: 3 },
    { wallet: "0x09ad820aac5779683b481c4674208a4e1b024afa", net: 0, received: 75000, sent: 75000, txs: 18 },
    { wallet: "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae", net: 0, received: 100000, sent: 100000, txs: 9 },
    { wallet: "0x89c6340b1a1f4b25d36cd8b063d49045caf3f818", net: 0, received: 100000, sent: 100000, txs: 8 },
    { wallet: "0x22510fe99f63ae03ba792c21a29ec10fd87cae08", net: 0, received: 100000, sent: 100000, txs: 5 },
    { wallet: "0x163f3103de041d25464e2c8a4f8f3187ec1856e0", net: 0, received: 44823, sent: 44823, txs: 12 },
    { wallet: "0x22ecf2bed494976503a8087add30e134c30fbd98", net: 0, received: 15250, sent: 15250, txs: 2 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 7230, sent: 7230, txs: 6 },
    { wallet: "0x649cbf4fd4efb3cca89cbb9982114bcf22fad9ff", net: 0, received: 1922, sent: 1922, txs: 2 }
];

const WHALE_LABELS = {

};
