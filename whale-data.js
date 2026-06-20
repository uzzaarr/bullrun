// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 20, 2026 at 08:46 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 99;
const WHALE_TOTAL_VOLUME      = 9404149;
const WHALE_BIGGEST_SINGLE    = 2202147;

const WHALE_TRANSFERS = [
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
    { hash: "0x1ed3d082d876ee096b273f06170c7923cb657135ebeeb6da769ce29d433d31e8", ts: 1781907959, from: "0xf1208549184f4caa95c7225b7cfdd442334b31fd", to: "0x187fe1a8b76c60b85c00a2819152ff00ff642386", amount: 219085, block: 25354604, type: "transfer" },
    { hash: "0xc1c96692c68500158f7bf935bb179870918dcc2f8343e22b2bdf894823254825", ts: 1781870879, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", amount: 193948, block: 25351524, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 2202147, received: 2202147, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 683402, received: 683402, sent: 0, txs: 2 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 193948, received: 193948, sent: 0, txs: 1 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 52407, received: 52407, sent: 0, txs: 3 },
    { wallet: "0xea1f8382cd15ccecc6393df43b11e8a87bf2545a", net: 36712, received: 36712, sent: 0, txs: 1 },
    { wallet: "0xb1e642c3d7e0f83633828c0d96e68affd99be0ea", net: 22603, received: 22603, sent: 0, txs: 1 },
    { wallet: "0xf301d11baaefe7e724865ce410d4cbd9c099a307", net: 21644, received: 21644, sent: 0, txs: 1 },
    { wallet: "0x689c30597e93dfd0e7877c77bb26ff19c6f9ef07", net: 12611, received: 12611, sent: 0, txs: 1 },
    { wallet: "0xcfda5643065feae6a9f6925c83528e1cc2822595", net: 11781, received: 11781, sent: 0, txs: 1 },
    { wallet: "0xb92c3bc24bb406d650b4e5012b29c8f2bc07c4c9", net: 10685, received: 10685, sent: 0, txs: 1 },
    { wallet: "0x98f870ab30c0530b2e19d1adf5285200f52305a7", net: 9770, received: 9770, sent: 0, txs: 4 },
    { wallet: "0x0ae67ae903a7fef1d3842cb2b65dd1d74889a4f1", net: 4521, received: 4521, sent: 0, txs: 1 },
    { wallet: "0x3dd007028dd47ac93b808d66e177300cbeb45366", net: 3777, received: 3777, sent: 0, txs: 1 },
    { wallet: "0xdecd6fd4e783b30ee688f5b8ac6f5db8054bf919", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0x87607b0495272d2cb7ab5bcccf26e24af4b84473", net: 3222, received: 3222, sent: 0, txs: 1 },
    { wallet: "0xd66309e05152585e811f7856e82913e0c1bba603", net: 2603, received: 2603, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x0fdeda23b17d459b0b90673a956a02f77af9eafc", net: 2000, received: 2000, sent: 0, txs: 1 },
    { wallet: "0xd83bbad310f696dd59464483d28bad209b76d1fb", net: 1543, received: 3597, sent: 2054, txs: 4 },
    { wallet: "0xdd7042708cb97a03dec630d0415e7fd424401709", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0x3822d8b402d6fcbe3187b08b1733ae2e2e46a2d3", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 831, received: 831, sent: 0, txs: 6 },
    { wallet: "0x2a76a5be3bca8200f7810600ed9201103746810b", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x1ab2a7c6178467e8e2fd9c9a42d33024c8d6e1d0", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x0f36eb8f227aa28e2eb2705724233addabd61e15", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x4a57bec2ddb761ec9b7e7e0e576757b9e915219b", net: 352, received: 352, sent: 0, txs: 1 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 274, received: 274, sent: 0, txs: 2 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd7ca08ec1aee9cce8a8eda9365343ef197674e1a", net: 76, received: 90685, sent: 90608, txs: 3 },
    { wallet: "0xcdcea8b496e990036a0d5581460dabe72cd28e44", net: 13, received: 13, sent: 0, txs: 1 },
    { wallet: "0x3c56f651e24606593284a6cb85419f0da2fd81a7", net: 12, received: 12, sent: 0, txs: 1 },
    { wallet: "0x8ccd035c53b504b2a07007c734531e7bab6d1556", net: 4, received: 4, sent: 0, txs: 1 },
    { wallet: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", net: 0, received: 453519, sent: 453519, txs: 2 },
    { wallet: "0xc809aa49234761573f123a67f0e3228f424b7c24", net: 0, received: 399393, sent: 399393, txs: 2 },
    { wallet: "0xf4fa0b0bfb3f7a4adc0deed435b29534e23791a4", net: 0, received: 411, sent: 411, txs: 3 },
    { wallet: "0x74de5d4fcbf63e00296fd95d33236b9794016631", net: 0, received: 13388, sent: 13388, txs: 4 },
    { wallet: "0x4e78e1c9a43116397d3ee23d5ebe24c70bd929a9", net: 0, received: 12000, sent: 12000, txs: 2 },
    { wallet: "0x39927a709eaba03d43c351ea0b1bf4228ce99ade", net: 0, received: 2202147, sent: 2202147, txs: 2 },
    { wallet: "0xa230ae47c4e13b2484dcb9b3a50228ec1336fe59", net: 0, received: 2202147, sent: 2202147, txs: 3 },
    { wallet: "0xe459fc5d50868ddee63123574a26827b91511575", net: 0, received: 1360, sent: 1360, txs: 2 },
    { wallet: "0x2d84a18d4d1356420f3115e4d11e26680671c62d", net: 0, received: 1370, sent: 1370, txs: 3 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 0, received: 1370, sent: 1370, txs: 2 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 2514, sent: 2514, txs: 2 },
    { wallet: "0x337685fdab40d39bd02028545a4ffa7d287cc3e2", net: 0, received: 2514, sent: 2514, txs: 2 }
];

const WHALE_LABELS = {

};
