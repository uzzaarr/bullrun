// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 30, 2026 at 01:52 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 168;
const WHALE_TOTAL_VOLUME      = 32907488;
const WHALE_BIGGEST_SINGLE    = 6639795;

const WHALE_TRANSFERS = [
    { hash: "0xc8230a8d66fb5493afb22761bc0a3101b5155deaccca2d80722965756946b801", ts: 1785340787, from: "0x8143a1780b70d275587850c02222baf2d1ee49a8", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 5899000, block: 25639544, type: "transfer" },
    { hash: "0xf0fb3d0080172dc69a9ca192db41b140b7f9d7ff88dda1174c32787a8f1ef6b3", ts: 1785340355, from: "0x7fe4b2632f5ae6d930677d662af26bc0a06672b3", to: "0x8143a1780b70d275587850c02222baf2d1ee49a8", amount: 5899000, block: 25639508, type: "transfer" },
    { hash: "0x5d03970906dfb4e423bdeff1a8c46cd623b14b4840bc5cac08d812788efc3111", ts: 1785337223, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x7fe4b2632f5ae6d930677d662af26bc0a06672b3", amount: 5900000, block: 25639248, type: "transfer" },
    { hash: "0x722b533bfb4ae28afbaeeb38a6ca8e2fc938ddebe1c48875ddd72a412682626b", ts: 1785319811, from: "0x9642b23ed1e01df1092b92641051881a322f5d4e", to: "0x34a91c04decde6660fa73c8b8edff6ecd390f343", amount: 100000, block: 25637800, type: "transfer" },
    { hash: "0x88588f3e36986f7e34f94ca4a6ac5a06d2b31a9af1edcb956929f7c397a35e3f", ts: 1785312143, from: "0x81834604603d3eaf5fdb4eb31369b4655d7be7e5", to: "0xc5862cd771e917b498830ec40b071178bbbbdf32", amount: 200000, block: 25637163, type: "transfer" },
    { hash: "0xd3f9d6d03100d941f3d68e15ed282d6e62cfdaa6294bf179336ba4e4cac119a1", ts: 1785311915, from: "0xbd6e282da05804251d60db2cf73d19df2a9f70f8", to: "0x81834604603d3eaf5fdb4eb31369b4655d7be7e5", amount: 200000, block: 25637144, type: "transfer" },
    { hash: "0xec562601b20b0ce655226601dc53e02e5daceedaa3111f506e4cae425bd65b44", ts: 1785311183, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xbd6e282da05804251d60db2cf73d19df2a9f70f8", amount: 103562, block: 25637083, type: "transfer" },
    { hash: "0x941fa7a32bdbed142b48216015575089babb719166a1cba77a27b140dbfc3093", ts: 1785309779, from: "0x1bc0e3b77972ba5090e0e2428543ce01df5ad2ec", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 6639795, block: 25636966, type: "transfer" },
    { hash: "0x7188e8542a4d06d3df1c53a2409534e482f38f6ca7dc5c0cf3e705782d55fe5c", ts: 1785309431, from: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", to: "0x1bc0e3b77972ba5090e0e2428543ce01df5ad2ec", amount: 3319898, block: 25636937, type: "transfer" },
    { hash: "0x92bf640241e22d0b09ac3f21547eabe3d98db65800ac48da12516bbfd7e693db", ts: 1785309071, from: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", to: "0x1bc0e3b77972ba5090e0e2428543ce01df5ad2ec", amount: 3319898, block: 25636907, type: "transfer" },
    { hash: "0x56448642771f50ca696f815f9c56ac3592012a588e81d66cd7b8db8962f4ff25", ts: 1785302723, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 100586, block: 25636384, type: "transfer" },
    { hash: "0x153ecf3c3118335aa9702d5a01c0c6d0b73fb1770393f02af56d8273df60e750", ts: 1785302291, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 100586, block: 25636348, type: "transfer" },
    { hash: "0xd519a94d8cd0c1cc781e8e1e32bb31b862f87c98a6bcaca2a0bc4da4c6374f9d", ts: 1785302111, from: "0x230d33b1b1bd51c5849d30d00b20d2dd9e040865", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 100000, block: 25636333, type: "transfer" },
    { hash: "0xa176c6700885483183866947eb661974a5d42b4bf01bd909c9382335516474c0", ts: 1785302051, from: "0x69460570c93f9de5e2edbc3052bf10125f0ca22d", to: "0x230d33b1b1bd51c5849d30d00b20d2dd9e040865", amount: 100000, block: 25636328, type: "transfer" },
    { hash: "0xa176c6700885483183866947eb661974a5d42b4bf01bd909c9382335516474c0", ts: 1785302051, from: "0xb300000b72deaeb607a12d5f54773d1c19c7028d", to: "0x69460570c93f9de5e2edbc3052bf10125f0ca22d", amount: 100000, block: 25636328, type: "transfer" },
    { hash: "0xa176c6700885483183866947eb661974a5d42b4bf01bd909c9382335516474c0", ts: 1785302051, from: "0xf8681031149e4bb58a4311dad2d46694c15e2016", to: "0xb300000b72deaeb607a12d5f54773d1c19c7028d", amount: 100000, block: 25636328, type: "transfer" },
    { hash: "0xbf67093094d9411c52156c47110824755863fbbdea802ab8841f183e0506b5c0", ts: 1785300539, from: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", to: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", amount: 139656, block: 25636203, type: "transfer" },
    { hash: "0x0d6eb822b942a78df0ccf95b4f6acd36d17934585f534b0dce903e44a153aa53", ts: 1785290063, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 585507, block: 25635332, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 6539929, received: 6639795, sent: 99866, txs: 2 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 5894934, received: 5913887, sent: 18953, txs: 4 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 688671, received: 688671, sent: 0, txs: 3 },
    { wallet: "0xc5862cd771e917b498830ec40b071178bbbbdf32", net: 215000, received: 215000, sent: 0, txs: 2 },
    { wallet: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", net: 139656, received: 139656, sent: 0, txs: 1 },
    { wallet: "0x999b2dc7d728ef06953f33c1f44c450b200e5588", net: 118740, received: 118740, sent: 0, txs: 2 },
    { wallet: "0x34a91c04decde6660fa73c8b8edff6ecd390f343", net: 100000, received: 100000, sent: 0, txs: 1 },
    { wallet: "0x9be5b8a7314552fa47feb1355cd5b4adc7bb7516", net: 84217, received: 84217, sent: 0, txs: 1 },
    { wallet: "0x19888e92ee029e6641e178ebd2346fc1f7d845bd", net: 72877, received: 72877, sent: 0, txs: 1 },
    { wallet: "0xb8001c3ec9aa1985f6c747e25c28324e4a361ec1", net: 49965, received: 99866, sent: 49901, txs: 2 },
    { wallet: "0x198346a51e6a1b18bc2efed80ec9e792791e846e", net: 49901, received: 49901, sent: 0, txs: 1 },
    { wallet: "0x716e3fad60bc867449795cd624da34aab3dc381f", net: 30808, received: 30808, sent: 0, txs: 3 },
    { wallet: "0x651b2ba365a5293dddc7343b2fbf0e5f8271426b", net: 26113, received: 40000, sent: 13887, txs: 2 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 18953, received: 18953, sent: 0, txs: 1 },
    { wallet: "0xa215ad4a812b222cd204e4c54b35aa37ffafc0a3", net: 9315, received: 9315, sent: 0, txs: 1 },
    { wallet: "0x3858cabc26239038c74ad6b03b78b441383364be", net: 7397, received: 7397, sent: 0, txs: 1 },
    { wallet: "0x7b9d43ef9d740bc6b6e593e1fc7c4b910a75fd00", net: 6110, received: 6110, sent: 0, txs: 2 },
    { wallet: "0x1abdb5af79b603452db3eabfd6ce09b67a8915e8", net: 6027, received: 6027, sent: 0, txs: 1 },
    { wallet: "0xdd209b5fec3d1024b32be2be972b92ca663ef957", net: 5595, received: 5595, sent: 0, txs: 1 },
    { wallet: "0xd06aa22ecc13018a77796e8832718a3d17d7c2ec", net: 5205, received: 5205, sent: 0, txs: 1 },
    { wallet: "0xc1de062378818b970712a395c35abd9ba41d01a9", net: 4256, received: 4256, sent: 0, txs: 1 },
    { wallet: "0x0faafa9fff76cd4d6dbf01d31d20dc7e75b6771a", net: 4110, received: 4110, sent: 0, txs: 1 },
    { wallet: "0x0faeb60e1b406c2f84454f169a2512a5792e1aa8", net: 3513, received: 17114, sent: 13601, txs: 4 },
    { wallet: "0xfa7d15c941da051bc4276ab341d3cb37cc09b73f", net: 3154, received: 3154, sent: 0, txs: 6 },
    { wallet: "0x16fcf0b577fef57595de4926803ab9c21004cd80", net: 3059, received: 3059, sent: 0, txs: 1 },
    { wallet: "0x20694bb5c906ee71e696587be233284f995564b7", net: 2740, received: 2740, sent: 0, txs: 1 },
    { wallet: "0xdc56fd9d0112f44c9c4944e544fd20987c8b3a8c", net: 2550, received: 2550, sent: 0, txs: 1 },
    { wallet: "0x5f1c5951c5b1cc112ba9e89b9467edca33063453", net: 2523, received: 2523, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x1894c5c5d9d976a7971a0ccd252f2f6064efd3a8", net: 1918, received: 1918, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0x50e8e34147929096ab69b3316ac0f1adf8b684c1", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0x5532d65385e664eef604976354608a9dc4d9ae7c", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0x1f0d9b1835e7b2844d94b0038c80ac387a439fcc", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xfaa78f45f59770b9274d19bf7bf9b0a10fd5a851", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x80826c8570f2e3370c6d0d74fd0344bc963efca9", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xd4ecca8f08ac6fadaed2cb141637c95ee4c74d43", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x3b88a3f26f6a282ade57783b59c0a8d00a087764", net: 367, received: 367, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 330, received: 330, sent: 0, txs: 8 },
    { wallet: "0xaacc720fdc9d9740f5b6795828bbe81baba22770", net: 167, received: 167, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x3f546b0124e20e118186689026fa1d6f29b5e602", net: 15, received: 15, sent: 0, txs: 1 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 204, sent: 204, txs: 4 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 41736, sent: 41736, txs: 16 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 18498, sent: 18498, txs: 9 }
];

const WHALE_LABELS = {

};
