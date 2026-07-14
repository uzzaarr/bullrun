// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 14, 2026 at 07:09 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 97;
const WHALE_TOTAL_VOLUME      = 452877;
const WHALE_BIGGEST_SINGLE    = 252877;

const WHALE_TRANSFERS = [
    { hash: "0xf2ce65929b958a7ba26e3db6273b4a9fbdfd60c44bc8fd6e6f247683a3e38efe", ts: 1784018435, from: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", to: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", amount: 200000, block: 25529747, type: "transfer" },
    { hash: "0x7599d2498db397f5a4fd9406d11f83f7b6f38f25ba531987c326f574519b8938", ts: 1783983527, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xa7749a59d3cda51dbca87319ebaec51ceef07854", amount: 252877, block: 25526848, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xa7749a59d3cda51dbca87319ebaec51ceef07854", net: 252877, received: 252877, sent: 0, txs: 1 },
    { wallet: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", net: 200000, received: 200000, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 132205, received: 132205, sent: 0, txs: 3 },
    { wallet: "0x9abe1355078b45b7e7f42e3f3e40df246139bc7d", net: 45013, received: 45013, sent: 0, txs: 1 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 44356, received: 44356, sent: 0, txs: 1 },
    { wallet: "0x0779bf904ba7495de478d9fae5cba4e89ac5fca1", net: 42740, received: 42740, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 21098, received: 21099, sent: 1, txs: 3 },
    { wallet: "0xd308fc4ec59cf2779eb75787810f05fc80fedb60", net: 19863, received: 27808, sent: 7945, txs: 3 },
    { wallet: "0xd17cb60b2260477e580def6925e2c1049fb0d790", net: 14594, received: 14594, sent: 0, txs: 2 },
    { wallet: "0x50e8e34147929096ab69b3316ac0f1adf8b684c1", net: 13562, received: 13562, sent: 0, txs: 1 },
    { wallet: "0x5f1c5951c5b1cc112ba9e89b9467edca33063453", net: 5768, received: 5768, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 4384, received: 4384, sent: 0, txs: 1 },
    { wallet: "0x242bc125a41885dd821e447e66333ba4666c1d27", net: 3014, received: 3014, sent: 0, txs: 1 },
    { wallet: "0xe612cc0d682cb2551285992158f14b0b342cdc1b", net: 3014, received: 3014, sent: 0, txs: 1 },
    { wallet: "0x6532c2c4d01f27712586509a369166b5948c442a", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0xee24dffca375eaa986e0159cbec5994f759c03ce", net: 1918, received: 1918, sent: 0, txs: 1 },
    { wallet: "0xe28d7502e70c9b45de8218b122a72a1eaf972695", net: 1622, received: 1622, sent: 0, txs: 1 },
    { wallet: "0xbbcec987e4c189fcbab0a2534c77b3ba89229f11", net: 1593, received: 1593, sent: 0, txs: 1 },
    { wallet: "0xb8294f8f8f6619a299688f1ca12cb967fc9a6176", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x855992fbda59048156cb4bc75fad65d0bfa80f3b", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x2cacf25ae508d3bf9eaeb4e46ebb219a137c24b7", net: 580, received: 580, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 453, received: 453, sent: 0, txs: 10 },
    { wallet: "0x8b10e16d47f111e219006963df9aebc53604c73a", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x507b05e29ec2c4c8bbb5ef7208a6f63e9c9e5f7d", net: 23, received: 23, sent: 0, txs: 1 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 14748, sent: 14748, txs: 6 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 29099, sent: 29099, txs: 6 },
    { wallet: "0x3bb9ea3b2128e1acd440f7a563ff94494b94421f", net: 0, received: 10511, sent: 10511, txs: 2 },
    { wallet: "0x41e896e6eb9856aa413234ecbfeef4060e9d8531", net: 0, received: 10548, sent: 10548, txs: 3 },
    { wallet: "0xc079bfa54f348199ba51b2717595fe24e96f1542", net: 0, received: 21099, sent: 21099, txs: 6 },
    { wallet: "0x163f3103de041d25464e2c8a4f8f3187ec1856e0", net: 0, received: 315, sent: 315, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 59363, sent: 59363, txs: 5 },
    { wallet: "0xa58bdd0ab5ebbb8dc425090fea8fd0ba969c1668", net: 0, received: 26806, sent: 26806, txs: 3 },
    { wallet: "0x279a2a69bf25427fe07e594af2e58a1810e9bde9", net: 0, received: 35667, sent: 35667, txs: 4 },
    { wallet: "0x45342aae013043c6ae304aefb310a7dea735ce99", net: 0, received: 10239, sent: 10239, txs: 2 },
    { wallet: "0x4fa80e131103d75beb2b59811e358410a4dec80e", net: 0, received: 10274, sent: 10274, txs: 3 },
    { wallet: "0xe26dcfdfbc60e46e73a0297c313f6c305f1dad12", net: 0, received: 10274, sent: 10274, txs: 2 },
    { wallet: "0x94b1b42f495ffe4a832cda96480bd5297bb37af3", net: 0, received: 18024, sent: 18024, txs: 2 },
    { wallet: "0x070919ea5fceada1f6029d3e7e506f3ebbb6f602", net: 0, received: 18082, sent: 18082, txs: 3 },
    { wallet: "0xeca52c2a56e32c1c98c33936d8bdb990bf0e8525", net: 0, received: 18082, sent: 18082, txs: 2 },
    { wallet: "0x2f3b95cc92e89838245756803f0c2cb440687d20", net: 0, received: 21096, sent: 21096, txs: 2 },
    { wallet: "0xbaa8254ae8b9769ae9053d9f25cca5f90f07427e", net: 0, received: 21096, sent: 21096, txs: 2 },
    { wallet: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", net: 0, received: 96537, sent: 96537, txs: 2 },
    { wallet: "0xfa23444ea0862bc5fec0059534526aa15f164c14", net: 0, received: 18024, sent: 18024, txs: 2 },
    { wallet: "0xa938442ef1914ed8002a268b2f79252a64006d04", net: 0, received: 18082, sent: 18082, txs: 3 },
    { wallet: "0x1be3f39f61769003f151c0d0bd898ba422900212", net: 0, received: 18082, sent: 18082, txs: 2 },
    { wallet: "0xb9e59e4ff78b0eaccb197e029331ef2b6ebdb245", net: 0, received: 18025, sent: 18025, txs: 2 },
    { wallet: "0x04eb3e586641b64ab52bcb71b619b49087e416ca", net: 0, received: 18082, sent: 18082, txs: 3 },
    { wallet: "0xd5a47398f9b2d819b1c6521b095d7ee01c9afc44", net: 0, received: 18082, sent: 18082, txs: 2 }
];

const WHALE_LABELS = {

};
