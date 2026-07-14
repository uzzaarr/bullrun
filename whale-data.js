// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 14, 2026 at 07:52 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 135;
const WHALE_TOTAL_VOLUME      = 252877;
const WHALE_BIGGEST_SINGLE    = 252877;

const WHALE_TRANSFERS = [
    { hash: "0x7599d2498db397f5a4fd9406d11f83f7b6f38f25ba531987c326f574519b8938", ts: 1783983527, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xa7749a59d3cda51dbca87319ebaec51ceef07854", amount: 252877, block: 25526848, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xa7749a59d3cda51dbca87319ebaec51ceef07854", net: 252877, received: 252877, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 231143, received: 231143, sent: 0, txs: 4 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 48933, received: 62520, sent: 13587, txs: 2 },
    { wallet: "0x9abe1355078b45b7e7f42e3f3e40df246139bc7d", net: 45013, received: 45013, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 21096, received: 21096, sent: 0, txs: 1 },
    { wallet: "0xd308fc4ec59cf2779eb75787810f05fc80fedb60", net: 19863, received: 27808, sent: 7945, txs: 3 },
    { wallet: "0xbe4ae6e24d12dbd180517f126765178bae81f341", net: 19726, received: 19726, sent: 0, txs: 1 },
    { wallet: "0xd17cb60b2260477e580def6925e2c1049fb0d790", net: 14594, received: 14594, sent: 0, txs: 2 },
    { wallet: "0xe19ed11103265687a351662aab588a890ec598b4", net: 13587, received: 13587, sent: 0, txs: 1 },
    { wallet: "0xa54c11dc5c04ed8b95481d1cd8ec07695b1d5583", net: 6849, received: 6849, sent: 0, txs: 1 },
    { wallet: "0x1182ad22b3df49fd1da9a004a8a42ad6ce8211c8", net: 6308, received: 6308, sent: 0, txs: 1 },
    { wallet: "0x5f1c5951c5b1cc112ba9e89b9467edca33063453", net: 5768, received: 5768, sent: 0, txs: 1 },
    { wallet: "0xe612cc0d682cb2551285992158f14b0b342cdc1b", net: 3014, received: 3014, sent: 0, txs: 1 },
    { wallet: "0x6532c2c4d01f27712586509a369166b5948c442a", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0x70fe74e426e5419223a9c0a5d343dc3d96c8a1cf", net: 2329, received: 2329, sent: 0, txs: 1 },
    { wallet: "0x538960b9e4849bd2eeea32d3994480969e1da019", net: 1918, received: 1918, sent: 0, txs: 1 },
    { wallet: "0x5afdfc44e2dfa3e3940f479ac23097103387c23a", net: 1622, received: 1622, sent: 0, txs: 1 },
    { wallet: "0xbbcec987e4c189fcbab0a2534c77b3ba89229f11", net: 1593, received: 1593, sent: 0, txs: 1 },
    { wallet: "0x855992fbda59048156cb4bc75fad65d0bfa80f3b", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 774, received: 774, sent: 0, txs: 17 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 274, received: 274, sent: 0, txs: 2 },
    { wallet: "0xb695091eb0618245a5e61f3f6c52babddcbf6aba", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xee927082434f0c866f5030444818d19fe714a6bc", net: 1, received: 822, sent: 822, txs: 3 },
    { wallet: "0x6413d8f85a2eff1dc3ee3e0db7d8c89ccbd51dc5", net: 1, received: 5753, sent: 5752, txs: 3 },
    { wallet: "0x163f3103de041d25464e2c8a4f8f3187ec1856e0", net: 0, received: 315, sent: 315, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 59363, sent: 59363, txs: 5 },
    { wallet: "0xa58bdd0ab5ebbb8dc425090fea8fd0ba969c1668", net: 0, received: 28432, sent: 28432, txs: 6 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 45133, sent: 45133, txs: 14 },
    { wallet: "0x279a2a69bf25427fe07e594af2e58a1810e9bde9", net: 0, received: 35667, sent: 35667, txs: 4 },
    { wallet: "0x45342aae013043c6ae304aefb310a7dea735ce99", net: 0, received: 10239, sent: 10239, txs: 2 },
    { wallet: "0x4fa80e131103d75beb2b59811e358410a4dec80e", net: 0, received: 10274, sent: 10274, txs: 3 },
    { wallet: "0xe26dcfdfbc60e46e73a0297c313f6c305f1dad12", net: 0, received: 10274, sent: 10274, txs: 2 },
    { wallet: "0x94b1b42f495ffe4a832cda96480bd5297bb37af3", net: 0, received: 18024, sent: 18024, txs: 2 },
    { wallet: "0x070919ea5fceada1f6029d3e7e506f3ebbb6f602", net: 0, received: 18082, sent: 18082, txs: 3 },
    { wallet: "0xeca52c2a56e32c1c98c33936d8bdb990bf0e8525", net: 0, received: 18082, sent: 18082, txs: 2 },
    { wallet: "0xc079bfa54f348199ba51b2717595fe24e96f1542", net: 0, received: 21096, sent: 21096, txs: 2 },
    { wallet: "0x2f3b95cc92e89838245756803f0c2cb440687d20", net: 0, received: 21096, sent: 21096, txs: 2 },
    { wallet: "0xbaa8254ae8b9769ae9053d9f25cca5f90f07427e", net: 0, received: 21096, sent: 21096, txs: 2 },
    { wallet: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", net: 0, received: 195475, sent: 195475, txs: 4 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 30783, sent: 30783, txs: 15 },
    { wallet: "0xfa23444ea0862bc5fec0059534526aa15f164c14", net: 0, received: 18024, sent: 18024, txs: 2 },
    { wallet: "0xa938442ef1914ed8002a268b2f79252a64006d04", net: 0, received: 18082, sent: 18082, txs: 3 },
    { wallet: "0x1be3f39f61769003f151c0d0bd898ba422900212", net: 0, received: 18082, sent: 18082, txs: 2 },
    { wallet: "0xb9e59e4ff78b0eaccb197e029331ef2b6ebdb245", net: 0, received: 18025, sent: 18025, txs: 2 },
    { wallet: "0x04eb3e586641b64ab52bcb71b619b49087e416ca", net: 0, received: 18082, sent: 18082, txs: 3 },
    { wallet: "0xd5a47398f9b2d819b1c6521b095d7ee01c9afc44", net: 0, received: 18082, sent: 18082, txs: 2 },
    { wallet: "0x89c525d4d8d1ac88937266dc3b5d415d15d66814", net: 0, received: 18082, sent: 18082, txs: 4 },
    { wallet: "0x4420e5673a381fa4b1782015549f0da1d1b7ff35", net: 0, received: 18082, sent: 18082, txs: 2 },
    { wallet: "0x1f136460751bdf1eb7cf30a1ab8619a6dce7bb1a", net: 0, received: 18082, sent: 18082, txs: 4 },
    { wallet: "0x099105baf4d6080a2cc29765dd78a4c4a7a13385", net: 0, received: 18082, sent: 18082, txs: 2 }
];

const WHALE_LABELS = {

};
