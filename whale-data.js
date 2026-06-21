// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 21, 2026 at 03:32 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 89;
const WHALE_TOTAL_VOLUME      = 6504606;
const WHALE_BIGGEST_SINGLE    = 1418465;

const WHALE_TRANSFERS = [
    { hash: "0xe5d928905f278e1654267fa0237fc251d958196987d931deefe1a92126bdbc32", ts: 1782004187, from: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", to: "0x7c5874a11b4dd3aba411fa8b942ae90d1d662705", amount: 1004509, block: 25362590, type: "transfer" },
    { hash: "0x8bb2263a1ad4fd339d82d2b042595712f3545a4673aede6e9b9dc551b021607d", ts: 1782001319, from: "0x7c5874a11b4dd3aba411fa8b942ae90d1d662705", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 1418465, block: 25362352, type: "transfer" },
    { hash: "0x733b0f107db05ba2e0795b5e241694abbec38cb4f43b733d1ed21fa4db9c59c4", ts: 1782000515, from: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", to: "0x7c5874a11b4dd3aba411fa8b942ae90d1d662705", amount: 1418465, block: 25362285, type: "transfer" },
    { hash: "0x712e6dced10c7f6594ed1900bb2e68937c7ac11ee53817f9ae83445ce9c0be40", ts: 1781992247, from: "0x04c7b4e2db71b2abffe4f2131cf2754533cf32da", to: "0xbbf7e985e1e0ca6f854cecb5096274e8e797e8b4", amount: 150160, block: 25361598, type: "transfer" },
    { hash: "0x2f248adf65099aa3118f88997b4ec0b03ba63cb93c018ecfbd66341415b453d8", ts: 1781990255, from: "0x8f10b468b06c6fd214b65f87778827f7d113f996", to: "0x04c7b4e2db71b2abffe4f2131cf2754533cf32da", amount: 150160, block: 25361433, type: "transfer" },
    { hash: "0x2f248adf65099aa3118f88997b4ec0b03ba63cb93c018ecfbd66341415b453d8", ts: 1781990255, from: "0x74de5d4fcbf63e00296fd95d33236b9794016631", to: "0x8f10b468b06c6fd214b65f87778827f7d113f996", amount: 150160, block: 25361433, type: "transfer" },
    { hash: "0x2f248adf65099aa3118f88997b4ec0b03ba63cb93c018ecfbd66341415b453d8", ts: 1781990255, from: "0x3430b9c4636744dbe738d66a70a494170097bb85", to: "0x74de5d4fcbf63e00296fd95d33236b9794016631", amount: 150160, block: 25361433, type: "transfer" },
    { hash: "0x578c58fc735d5c47d6dcdd6060c884befb4f44a53774c007bef13501972e2423", ts: 1781968775, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0x035ae7d933dcbfe617ffba194a88af0c2867b90c", amount: 201647, block: 25359653, type: "transfer" },
    { hash: "0x4e97c017d176dd56d7414a10dfdc1ec23a372baebdd4f7a24471c915181866fc", ts: 1781968739, from: "0x58edf78281334335effa23101bbe3371b6a36a51", to: "0x035ae7d933dcbfe617ffba194a88af0c2867b90c", amount: 155056, block: 25359650, type: "transfer" },
    { hash: "0x391fbc6ae4e551ddd9ebbabe054518c2675b39ed1175bc5ef0f81a120139c33c", ts: 1781943119, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 453519, block: 25357521, type: "transfer" },
    { hash: "0x95170833f905512e9ab9ca413dd9d16fd66e359c99ea01a2382f9a7c1578e68e", ts: 1781942567, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 453519, block: 25357477, type: "transfer" },
    { hash: "0xc9e6cb995f867fc6aabc929dadc63f660cb75bffbdf10158003f2027e1adcbcb", ts: 1781942159, from: "0xc809aa49234761573f123a67f0e3228f424b7c24", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 399393, block: 25357443, type: "transfer" },
    { hash: "0xb476ede7241d55da38baf5076ed1f576eead975a1ce8ea0471922fe724022f98", ts: 1781942111, from: "0x787331fd03269ee6fb778c26e0e7adc505ba8bba", to: "0xc809aa49234761573f123a67f0e3228f424b7c24", amount: 399393, block: 25357439, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 1418465, received: 1418465, sent: 0, txs: 1 },
    { wallet: "0x7c5874a11b4dd3aba411fa8b942ae90d1d662705", net: 1004509, received: 2422973, sent: 1418465, txs: 3 },
    { wallet: "0x035ae7d933dcbfe617ffba194a88af0c2867b90c", net: 418064, received: 418064, sent: 0, txs: 3 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 311074, received: 466130, sent: 155056, txs: 3 },
    { wallet: "0xbbf7e985e1e0ca6f854cecb5096274e8e797e8b4", net: 150160, received: 150160, sent: 0, txs: 1 },
    { wallet: "0x19888e92ee029e6641e178ebd2346fc1f7d845bd", net: 88493, received: 88493, sent: 0, txs: 1 },
    { wallet: "0xe6d3210b13f577b8361d90c4a11c458da8a9594e", net: 22192, received: 22192, sent: 0, txs: 1 },
    { wallet: "0xe8446569ee2311ac5c455cf97e6eb5cd594356ea", net: 21918, received: 21918, sent: 0, txs: 1 },
    { wallet: "0x4015afef85dfe9020c37e094fca46e56854dc5c6", net: 19726, received: 19726, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 12214, received: 465754, sent: 453540, txs: 8 },
    { wallet: "0x0cac5242ef806f210a19a5113270e3f28dae1c64", net: 9231, received: 9231, sent: 0, txs: 1 },
    { wallet: "0x33e9565381b6407fa3e297cc8f6e4dcebae7d179", net: 8630, received: 8630, sent: 0, txs: 1 },
    { wallet: "0x82a365858b4a82eed80e5473c6f698f93b48617f", net: 7715, received: 7715, sent: 0, txs: 1 },
    { wallet: "0xdecd6fd4e783b30ee688f5b8ac6f5db8054bf919", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0x7dcf46fa4fc7cd89de5fd534f9833cb8da1e37fb", net: 2506, received: 2506, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0xd06aa22ecc13018a77796e8832718a3d17d7c2ec", net: 1781, received: 1781, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 960, received: 960, sent: 0, txs: 8 },
    { wallet: "0x2a76a5be3bca8200f7810600ed9201103746810b", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x1ab2a7c6178467e8e2fd9c9a42d33024c8d6e1d0", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 274, received: 274, sent: 0, txs: 2 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 160, received: 160, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1e362885e1cdd5bf7fe1ff2fd53e513bafa97243", net: 13, received: 13, sent: 0, txs: 1 },
    { wallet: "0xcdcea8b496e990036a0d5581460dabe72cd28e44", net: 13, received: 13, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 4, received: 4, sent: 0, txs: 1 },
    { wallet: "0xd9f04ab1db28774e1c0fe8ab6e764f25dc02161c", net: 1, received: 685, sent: 684, txs: 3 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 160, sent: 160, txs: 2 },
    { wallet: "0xd87a9f0010c562332b2b534bde1752e11c05d135", net: 0, received: 21, sent: 21, txs: 4 },
    { wallet: "0x04c7b4e2db71b2abffe4f2131cf2754533cf32da", net: 0, received: 150160, sent: 150160, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 150160, sent: 150160, txs: 2 },
    { wallet: "0x74de5d4fcbf63e00296fd95d33236b9794016631", net: 0, received: 150160, sent: 150160, txs: 2 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 1586, sent: 1586, txs: 4 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 1586, sent: 1586, txs: 4 },
    { wallet: "0xec4017fda40716ca24f8d1cb03a5baaa1e8b422a", net: 0, received: 959, sent: 959, txs: 3 },
    { wallet: "0x2cedcc1fedb8dcae93a88bbf26df039071bb7243", net: 0, received: 959, sent: 959, txs: 2 },
    { wallet: "0x7f51c134230eb9e5aba42bc364d3d3eba26d9712", net: 0, received: 1212, sent: 1212, txs: 3 },
    { wallet: "0x0ce2b366e425d7e53904ea61cfb2ea03b06283f7", net: 0, received: 1233, sent: 1233, txs: 3 },
    { wallet: "0xa0952edc243077c05148828cc5432c37486858c3", net: 0, received: 1233, sent: 1233, txs: 2 },
    { wallet: "0xac3091e84bdfa52de510f29c5281abb9ef9d84d4", net: 0, received: 4, sent: 4, txs: 2 },
    { wallet: "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae", net: 0, received: 4, sent: 4, txs: 3 },
    { wallet: "0x36ba572345210c5f03521b8bf7b0b198367adcf5", net: 0, received: 2740, sent: 2740, txs: 4 },
    { wallet: "0xbcfe88e74a030f05684c95da7d11afd3342ada82", net: 0, received: 2740, sent: 2740, txs: 2 },
    { wallet: "0xc4a3ae32b748654ec5ff6d6fb80dea0faa45460d", net: 0, received: 65277, sent: 65277, txs: 2 },
    { wallet: "0x2aef575394520042ada90cb824f5805aef86a4a7", net: 0, received: 65479, sent: 65479, txs: 3 },
    { wallet: "0x6ab23ae52221a02ed706d1981bf368de91b8ce05", net: 0, received: 65479, sent: 65479, txs: 2 }
];

const WHALE_LABELS = {

};
