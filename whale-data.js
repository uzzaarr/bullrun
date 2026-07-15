// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 15, 2026 at 01:51 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 94;
const WHALE_TOTAL_VOLUME      = 200000;
const WHALE_BIGGEST_SINGLE    = 200000;

const WHALE_TRANSFERS = [
    { hash: "0xf2ce65929b958a7ba26e3db6273b4a9fbdfd60c44bc8fd6e6f247683a3e38efe", ts: 1784018435, from: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", to: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", amount: 200000, block: 25529747, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", net: 200000, received: 200000, sent: 0, txs: 1 },
    { wallet: "0x9abe1355078b45b7e7f42e3f3e40df246139bc7d", net: 45013, received: 45013, sent: 0, txs: 1 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 44356, received: 44356, sent: 0, txs: 1 },
    { wallet: "0x0779bf904ba7495de478d9fae5cba4e89ac5fca1", net: 42740, received: 42740, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 41361, received: 41361, sent: 0, txs: 4 },
    { wallet: "0x1485e810d675528c4d56ccc508990a13643d86e9", net: 29452, received: 29452, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 18598, received: 18598, sent: 0, txs: 1 },
    { wallet: "0x50e8e34147929096ab69b3316ac0f1adf8b684c1", net: 13562, received: 13562, sent: 0, txs: 1 },
    { wallet: "0xdc56fd9d0112f44c9c4944e544fd20987c8b3a8c", net: 5775, received: 5775, sent: 0, txs: 2 },
    { wallet: "0x5f1c5951c5b1cc112ba9e89b9467edca33063453", net: 5768, received: 5768, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 4384, received: 4384, sent: 0, txs: 1 },
    { wallet: "0x242bc125a41885dd821e447e66333ba4666c1d27", net: 3014, received: 3014, sent: 0, txs: 1 },
    { wallet: "0x6532c2c4d01f27712586509a369166b5948c442a", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0xee24dffca375eaa986e0159cbec5994f759c03ce", net: 1918, received: 1918, sent: 0, txs: 1 },
    { wallet: "0x298e6919c9a1b13a61f82aff610a03142afd78de", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xe28d7502e70c9b45de8218b122a72a1eaf972695", net: 1622, received: 1622, sent: 0, txs: 1 },
    { wallet: "0x855992fbda59048156cb4bc75fad65d0bfa80f3b", net: 959, received: 959, sent: 0, txs: 2 },
    { wallet: "0x907262769c7143796829c3d9595d8d4007e65cd1", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xb8294f8f8f6619a299688f1ca12cb967fc9a6176", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x2cacf25ae508d3bf9eaeb4e46ebb219a137c24b7", net: 580, received: 580, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 290, received: 290, sent: 0, txs: 5 },
    { wallet: "0x8b10e16d47f111e219006963df9aebc53604c73a", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 130, received: 130, sent: 0, txs: 1 },
    { wallet: "0xb3a221642e49c7804b35637af2b36924185f3765", net: 93, received: 93, sent: 0, txs: 1 },
    { wallet: "0x507b05e29ec2c4c8bbb5ef7208a6f63e9c9e5f7d", net: 23, received: 23, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 2, received: 3, sent: 1, txs: 2 },
    { wallet: "0x28bf6006d87de7f44445905aa4f5cb8c0d8cba02", net: 1, received: 2679, sent: 2679, txs: 2 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 39938, sent: 39938, txs: 9 },
    { wallet: "0x1f2f10d1c40777ae1da742455c65828ff36df387", net: 0, received: 4907, sent: 4907, txs: 2 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 41390, sent: 41390, txs: 7 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 60391, sent: 60391, txs: 10 },
    { wallet: "0x3c045d92b7c3bb83e2018e2e296f6a0bc0e2eb07", net: 0, received: 30000, sent: 30000, txs: 3 },
    { wallet: "0x654ef5092b3dc4bf12e9c4d916bfa68f6de65c7e", net: 0, received: 2585, sent: 2585, txs: 2 },
    { wallet: "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae", net: 0, received: 2679, sent: 2679, txs: 3 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 130, sent: 130, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 100041, sent: 100041, txs: 10 },
    { wallet: "0xdbe546d57b4bfa415162069bb5500f45a1bbc014", net: 0, received: 4650, sent: 4650, txs: 2 },
    { wallet: "0x6c1ddfb81a3666188267296f10253a5a9b5bae40", net: 0, received: 36027, sent: 36027, txs: 2 },
    { wallet: "0x3298ce3a6c679b9f0dc6b3162eee954fdbadb5a8", net: 0, received: 36027, sent: 36027, txs: 2 },
    { wallet: "0x3bb9ea3b2128e1acd440f7a563ff94494b94421f", net: 0, received: 10511, sent: 10511, txs: 2 },
    { wallet: "0x41e896e6eb9856aa413234ecbfeef4060e9d8531", net: 0, received: 10548, sent: 10548, txs: 3 },
    { wallet: "0xc079bfa54f348199ba51b2717595fe24e96f1542", net: 0, received: 3, sent: 3, txs: 4 },
    { wallet: "0x163f3103de041d25464e2c8a4f8f3187ec1856e0", net: 0, received: 315, sent: 315, txs: 2 },
    { wallet: "0xa58bdd0ab5ebbb8dc425090fea8fd0ba969c1668", net: 0, received: 26806, sent: 26806, txs: 3 },
    { wallet: "0x279a2a69bf25427fe07e594af2e58a1810e9bde9", net: 0, received: 18598, sent: 18598, txs: 2 },
    { wallet: "0x45342aae013043c6ae304aefb310a7dea735ce99", net: 0, received: 10239, sent: 10239, txs: 2 },
    { wallet: "0x4fa80e131103d75beb2b59811e358410a4dec80e", net: 0, received: 10274, sent: 10274, txs: 3 },
    { wallet: "0xe26dcfdfbc60e46e73a0297c313f6c305f1dad12", net: 0, received: 10274, sent: 10274, txs: 2 }
];

const WHALE_LABELS = {

};
