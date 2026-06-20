// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 20, 2026 at 07:16 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 96;
const WHALE_TOTAL_VOLUME      = 9566904;
const WHALE_BIGGEST_SINGLE    = 2202147;

const WHALE_TRANSFERS = [
    { hash: "0x578c58fc735d5c47d6dcdd6060c884befb4f44a53774c007bef13501972e2423", ts: 1781968775, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0x035ae7d933dcbfe617ffba194a88af0c2867b90c", amount: 201647, block: 25359653, type: "transfer" },
    { hash: "0x4e97c017d176dd56d7414a10dfdc1ec23a372baebdd4f7a24471c915181866fc", ts: 1781968739, from: "0x58edf78281334335effa23101bbe3371b6a36a51", to: "0x035ae7d933dcbfe617ffba194a88af0c2867b90c", amount: 155056, block: 25359650, type: "transfer" },
    { hash: "0x391fbc6ae4e551ddd9ebbabe054518c2675b39ed1175bc5ef0f81a120139c33c", ts: 1781943119, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 453519, block: 25357521, type: "transfer" },
    { hash: "0x95170833f905512e9ab9ca413dd9d16fd66e359c99ea01a2382f9a7c1578e68e", ts: 1781942567, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 453519, block: 25357477, type: "transfer" },
    { hash: "0xc9e6cb995f867fc6aabc929dadc63f660cb75bffbdf10158003f2027e1adcbcb", ts: 1781942159, from: "0xc809aa49234761573f123a67f0e3228f424b7c24", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 399393, block: 25357443, type: "transfer" },
    { hash: "0xb476ede7241d55da38baf5076ed1f576eead975a1ce8ea0471922fe724022f98", ts: 1781942111, from: "0x787331fd03269ee6fb778c26e0e7adc505ba8bba", to: "0xc809aa49234761573f123a67f0e3228f424b7c24", amount: 399393, block: 25357439, type: "transfer" },
    { hash: "0x6523b5e0536e3daca50b7e6c160dd0a65ebfa6d2555457ea3cc5c37a2665ee6a", ts: 1781922119, from: "0x39927a709eaba03d43c351ea0b1bf4228ce99ade", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 2202147, block: 25355779, type: "transfer" },
    { hash: "0x79794bf45e4d917d1cc1bc6deff3def5d037e625af18104aa5fd60e3cdea78e9", ts: 1781919635, from: "0xa230ae47c4e13b2484dcb9b3a50228ec1336fe59", to: "0x39927a709eaba03d43c351ea0b1bf4228ce99ade", amount: 2202147, block: 25355572, type: "transfer" },
    { hash: "0xf83eaa4b8dc5ecc6e51be74ac277900c3721859f06956985b41481d0e8519bc0", ts: 1781919347, from: "0x6912d024e2b88136c5a586e77b092199963b6083", to: "0xa230ae47c4e13b2484dcb9b3a50228ec1336fe59", amount: 2202147, block: 25355548, type: "transfer" },
    { hash: "0x36203550aaba7538d7c2fc99ebd0a0a8d0b712c1049801f0b04818b635353d7e", ts: 1781909675, from: "0x01e6a33751257181b49cfebc6a4cf4495aa58871", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 229883, block: 25354745, type: "transfer" },
    { hash: "0x95da85ba0d98afbd1d90277d0d4fe7eef69e94e2bc1c64c1a76b84f4226042dc", ts: 1781909411, from: "0xa3222357a0eccf60c73606170be6c99adecb59b3", to: "0x01e6a33751257181b49cfebc6a4cf4495aa58871", amount: 229883, block: 25354723, type: "transfer" },
    { hash: "0x01c30d2f0914ffc4e9537155cc675ebd8588fcb6bd888ad08197e40ff7db4a72", ts: 1781909219, from: "0x187fe1a8b76c60b85c00a2819152ff00ff642386", to: "0xa3222357a0eccf60c73606170be6c99adecb59b3", amount: 219085, block: 25354708, type: "transfer" },
    { hash: "0x1ed3d082d876ee096b273f06170c7923cb657135ebeeb6da769ce29d433d31e8", ts: 1781907959, from: "0xf1208549184f4caa95c7225b7cfdd442334b31fd", to: "0x187fe1a8b76c60b85c00a2819152ff00ff642386", amount: 219085, block: 25354604, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 2202147, received: 2202147, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 528346, received: 683402, sent: 155056, txs: 3 },
    { wallet: "0x035ae7d933dcbfe617ffba194a88af0c2867b90c", net: 418064, received: 418064, sent: 0, txs: 3 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 47564, received: 47564, sent: 0, txs: 2 },
    { wallet: "0xe8446569ee2311ac5c455cf97e6eb5cd594356ea", net: 21918, received: 21918, sent: 0, txs: 1 },
    { wallet: "0x4015afef85dfe9020c37e094fca46e56854dc5c6", net: 19726, received: 19726, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 19072, received: 472591, sent: 453519, txs: 7 },
    { wallet: "0x689c30597e93dfd0e7877c77bb26ff19c6f9ef07", net: 12611, received: 12611, sent: 0, txs: 1 },
    { wallet: "0x33e9565381b6407fa3e297cc8f6e4dcebae7d179", net: 8630, received: 8630, sent: 0, txs: 1 },
    { wallet: "0x98f870ab30c0530b2e19d1adf5285200f52305a7", net: 7335, received: 7335, sent: 0, txs: 3 },
    { wallet: "0x3dd007028dd47ac93b808d66e177300cbeb45366", net: 3777, received: 3777, sent: 0, txs: 1 },
    { wallet: "0xdecd6fd4e783b30ee688f5b8ac6f5db8054bf919", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0x87607b0495272d2cb7ab5bcccf26e24af4b84473", net: 3222, received: 3222, sent: 0, txs: 1 },
    { wallet: "0xd66309e05152585e811f7856e82913e0c1bba603", net: 2603, received: 2603, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xdd7042708cb97a03dec630d0415e7fd424401709", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 949, received: 949, sent: 0, txs: 8 },
    { wallet: "0x2a76a5be3bca8200f7810600ed9201103746810b", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x1ab2a7c6178467e8e2fd9c9a42d33024c8d6e1d0", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1e362885e1cdd5bf7fe1ff2fd53e513bafa97243", net: 13, received: 13, sent: 0, txs: 1 },
    { wallet: "0xcdcea8b496e990036a0d5581460dabe72cd28e44", net: 13, received: 13, sent: 0, txs: 1 },
    { wallet: "0xd9f04ab1db28774e1c0fe8ab6e764f25dc02161c", net: 1, received: 685, sent: 684, txs: 3 },
    { wallet: "0xac3091e84bdfa52de510f29c5281abb9ef9d84d4", net: 0, received: 4, sent: 4, txs: 2 },
    { wallet: "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae", net: 0, received: 4, sent: 4, txs: 3 },
    { wallet: "0x36ba572345210c5f03521b8bf7b0b198367adcf5", net: 0, received: 2740, sent: 2740, txs: 4 },
    { wallet: "0xbcfe88e74a030f05684c95da7d11afd3342ada82", net: 0, received: 2740, sent: 2740, txs: 2 },
    { wallet: "0xc4a3ae32b748654ec5ff6d6fb80dea0faa45460d", net: 0, received: 65277, sent: 65277, txs: 2 },
    { wallet: "0x2aef575394520042ada90cb824f5805aef86a4a7", net: 0, received: 65479, sent: 65479, txs: 3 },
    { wallet: "0x6ab23ae52221a02ed706d1981bf368de91b8ce05", net: 0, received: 65479, sent: 65479, txs: 2 },
    { wallet: "0x43284dc469d348221b3ed7bde3a22196c186c085", net: 0, received: 3222, sent: 3222, txs: 3 },
    { wallet: "0x66a9893cc07d91d95644aedd05d03f95e1dba8af", net: 0, received: 573, sent: 573, txs: 2 },
    { wallet: "0x4f3889331539ab2ed976dbaf67c8def36deeed15", net: 0, received: 8630, sent: 8630, txs: 2 },
    { wallet: "0x91e06274744349cf51203c0b56c6f5dc1acc5732", net: 0, received: 1079, sent: 1079, txs: 2 },
    { wallet: "0x3c2d4c38e1e28d7f09409c196f4e6658ce83060f", net: 0, received: 1096, sent: 1096, txs: 3 },
    { wallet: "0x1ec97b855540f5495895868fea813ffc955ec714", net: 0, received: 19726, sent: 19726, txs: 2 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 3154, sent: 3154, txs: 4 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 640, sent: 640, txs: 2 },
    { wallet: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", net: 0, received: 453519, sent: 453519, txs: 2 },
    { wallet: "0xc809aa49234761573f123a67f0e3228f424b7c24", net: 0, received: 399393, sent: 399393, txs: 2 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 0, received: 137, sent: 137, txs: 2 },
    { wallet: "0x74de5d4fcbf63e00296fd95d33236b9794016631", net: 0, received: 13388, sent: 13388, txs: 4 },
    { wallet: "0x4e78e1c9a43116397d3ee23d5ebe24c70bd929a9", net: 0, received: 12000, sent: 12000, txs: 2 },
    { wallet: "0x39927a709eaba03d43c351ea0b1bf4228ce99ade", net: 0, received: 2202147, sent: 2202147, txs: 2 },
    { wallet: "0xa230ae47c4e13b2484dcb9b3a50228ec1336fe59", net: 0, received: 2202147, sent: 2202147, txs: 3 },
    { wallet: "0xe459fc5d50868ddee63123574a26827b91511575", net: 0, received: 1360, sent: 1360, txs: 2 },
    { wallet: "0x2d84a18d4d1356420f3115e4d11e26680671c62d", net: 0, received: 1370, sent: 1370, txs: 3 }
];

const WHALE_LABELS = {

};
