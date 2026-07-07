// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 7, 2026 at 07:46 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 167;
const WHALE_TOTAL_VOLUME      = 2014304;
const WHALE_BIGGEST_SINGLE    = 397301;

const WHALE_TRANSFERS = [
    { hash: "0xb94fdae877378611eaa04b8137368d4e1bff27eaa57ffc4a8f8081a07fd4564a", ts: 1783426091, from: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 280167, block: 25480570, type: "transfer" },
    { hash: "0xdd69cfab32717b5e0421d5fa54213131d53ebe1b8e6966fed2d123633ff8df1e", ts: 1783423823, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 114415, block: 25480381, type: "transfer" },
    { hash: "0xd45060adc3e71bbb31e596dfc79e1e95e27fb63ae9b77ba4a055d8f9b2723670", ts: 1783422923, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 114415, block: 25480306, type: "transfer" },
    { hash: "0x2a69a6ea4232e2cd02f1430679011e3bc9d70dc2a10e743eb5c9e5a797b05a5d", ts: 1783422827, from: "0xbb3ed0e2b5c1fcd70120cfe69b2265fa1eec8b58", to: "0xec66c5f04d2699512abc2c7c0b0eb3bc4fe2826c", amount: 135068, block: 25480298, type: "transfer" },
    { hash: "0xccff4360097d6ae3909f852012091a4dcca4d2116593a03f20b3a7fcdb059a05", ts: 1783409687, from: "0x8dc59f001b8883aea71eacd4e5842dc3395b2ae6", to: "0x22510fe99f63ae03ba792c21a29ec10fd87cae08", amount: 100000, block: 25479206, type: "transfer" },
    { hash: "0xa562c34500f13f4a4f5f1a81415b1bde763573eaa54f76148662bcc7449aa15b", ts: 1783387943, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x5db6fb1ffef3bf4078c2e2fdb80cdc99e02f09a1", amount: 245479, block: 25477404, type: "transfer" },
    { hash: "0x63a31aedfcd1d773c6aba201a8189a1f8b9d1f714b9a733c2f507e2edf7f906f", ts: 1783368875, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 397301, block: 25475816, type: "transfer" },
    { hash: "0x1c65343c77057a1d8cb062efff70b552a3d0ecb6db1192c64d6ef6a69eb1a8c3", ts: 1783368383, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 150111, block: 25475775, type: "transfer" },
    { hash: "0xe4d74eb0c1587ca6adc3f3694f8ca1f8bf3c3ff44d2ee5f99b2581b00cfaf65f", ts: 1783368191, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 247190, block: 25475759, type: "transfer" },
    { hash: "0xf464ab6465215c3647420298f039a1dd4799fa4b42cd8fb03f892710735fa900", ts: 1783367939, from: "0x9f149b14c0ecbfa0be9830510d2d647d73e53008", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 115079, block: 25475738, type: "transfer" },
    { hash: "0x49eda6de634e40eb3856b8f5540e1bdaf5c035d1b956e3dce5b245d6aae6c051", ts: 1783367891, from: "0x2f4243b2fecfb26841e8af99c357ca475b96d777", to: "0x9f149b14c0ecbfa0be9830510d2d647d73e53008", amount: 115079, block: 25475734, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 511716, received: 511716, sent: 0, txs: 2 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 280167, received: 280167, sent: 0, txs: 1 },
    { wallet: "0x5db6fb1ffef3bf4078c2e2fdb80cdc99e02f09a1", net: 245479, received: 245479, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 148400, received: 148400, sent: 0, txs: 2 },
    { wallet: "0x57ba479e67ae2107ebf5b4bf6f45761eeacbdbba", net: 78767, received: 78767, sent: 0, txs: 1 },
    { wallet: "0xcf4525dc26cc9ca58e15fffa3ef14d6619a55945", net: 63562, received: 63562, sent: 0, txs: 1 },
    { wallet: "0xec66c5f04d2699512abc2c7c0b0eb3bc4fe2826c", net: 35069, received: 135068, sent: 100000, txs: 3 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 30959, received: 47508, sent: 16549, txs: 2 },
    { wallet: "0xbe4ae6e24d12dbd180517f126765178bae81f341", net: 26301, received: 26301, sent: 0, txs: 1 },
    { wallet: "0xe8446569ee2311ac5c455cf97e6eb5cd594356ea", net: 18630, received: 18630, sent: 0, txs: 1 },
    { wallet: "0xcf96bd96aa81d08e1bec7d5af06b18f00e8a0640", net: 16438, received: 16438, sent: 0, txs: 1 },
    { wallet: "0x69987be7ce4cc89d0e00e0b8fa652f10e22fce7c", net: 15342, received: 15342, sent: 0, txs: 1 },
    { wallet: "0x9be5b8a7314552fa47feb1355cd5b4adc7bb7516", net: 13471, received: 13471, sent: 0, txs: 1 },
    { wallet: "0xbf7d14d0d1efefc6ec2ecc07b2bc026324743c00", net: 10548, received: 10548, sent: 0, txs: 1 },
    { wallet: "0xd308fc4ec59cf2779eb75787810f05fc80fedb60", net: 7945, received: 7945, sent: 0, txs: 1 },
    { wallet: "0x3ba632ae3870943a88e799c6c58edac86407a416", net: 7534, received: 7534, sent: 0, txs: 1 },
    { wallet: "0x12aaf8392c18349f7fad9335532fc85c7d43c73d", net: 6671, received: 6671, sent: 0, txs: 1 },
    { wallet: "0x1a996eb2a69423926d60973fc3d73cf1fa847a2f", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1827, received: 1827, sent: 0, txs: 16 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 1139, received: 513452, sent: 512313, txs: 13 },
    { wallet: "0xc097f3238e49c690df6a7d15cf82065bc98291a5", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xbdbfb6ced3502f6e13d638d7e6bdc7e379898362", net: 598, received: 598, sent: 0, txs: 1 },
    { wallet: "0x907262769c7143796829c3d9595d8d4007e65cd1", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x4f3889331539ab2ed976dbaf67c8def36deeed15", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 349, received: 349, sent: 0, txs: 2 },
    { wallet: "0x9008d19f58aabd9ed0d60971565aa8510560ab41", net: 282, received: 38144, sent: 37862, txs: 2 },
    { wallet: "0x5f90761496cb500b6c9f64d15dcd6f0e7d9aaffe", net: 94, received: 94, sent: 0, txs: 1 },
    { wallet: "0x7bad9b16a6bb66865d3be6c76f959c4b3245eabd", net: 0, received: 5479, sent: 5479, txs: 3 },
    { wallet: "0x0f4ab87873e5b6abc6bbfe87ce8857e284cdd2de", net: 0, received: 5479, sent: 5479, txs: 2 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 6108, sent: 6108, txs: 6 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 4186, sent: 4186, txs: 4 },
    { wallet: "0x6762e034ce6ff41b38a25a4d8e6ef0fa87199454", net: 0, received: 3562, sent: 3562, txs: 3 },
    { wallet: "0xf4741ff340dd0c961a417583e28b16ddd94f0d81", net: 0, received: 3562, sent: 3562, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 106250, sent: 106250, txs: 11 },
    { wallet: "0x40a88150427465cca3911358edc96cf16f06e431", net: 0, received: 4281, sent: 4281, txs: 2 },
    { wallet: "0x4b6915950f1400abbd05e2e805bfab7fe29b4652", net: 0, received: 1918, sent: 1918, txs: 3 },
    { wallet: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", net: 0, received: 511716, sent: 511716, txs: 5 },
    { wallet: "0x51e58309099aa17ca0af76ec936a1ed3c934596c", net: 0, received: 99694, sent: 99694, txs: 2 },
    { wallet: "0xfba9bcac82f9e78d477c9445efa6e3b0eeef0e7a", net: 0, received: 13471, sent: 13471, txs: 2 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 349, sent: 349, txs: 4 },
    { wallet: "0x163f3103de041d25464e2c8a4f8f3187ec1856e0", net: 0, received: 45142, sent: 45142, txs: 14 },
    { wallet: "0x6df7478bb48e047daccc2a70d1f8fa57a6bc495a", net: 0, received: 319, sent: 319, txs: 2 },
    { wallet: "0x162c40a9e70f75dd6d25e9a5d028377bfddd01a0", net: 0, received: 15019, sent: 15019, txs: 2 },
    { wallet: "0x41e896e6eb9856aa413234ecbfeef4060e9d8531", net: 0, received: 15068, sent: 15068, txs: 3 },
    { wallet: "0x09ad820aac5779683b481c4674208a4e1b024afa", net: 0, received: 75000, sent: 75000, txs: 18 },
    { wallet: "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae", net: 0, received: 100000, sent: 100000, txs: 9 },
    { wallet: "0x89c6340b1a1f4b25d36cd8b063d49045caf3f818", net: 0, received: 100000, sent: 100000, txs: 8 },
    { wallet: "0x22510fe99f63ae03ba792c21a29ec10fd87cae08", net: 0, received: 100000, sent: 100000, txs: 5 },
    { wallet: "0x22ecf2bed494976503a8087add30e134c30fbd98", net: 0, received: 15250, sent: 15250, txs: 2 }
];

const WHALE_LABELS = {

};
