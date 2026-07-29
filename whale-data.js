// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 29, 2026 at 08:29 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 180;
const WHALE_TOTAL_VOLUME      = 32022929;
const WHALE_BIGGEST_SINGLE    = 6639795;

const WHALE_TRANSFERS = [
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
    { hash: "0x0d6eb822b942a78df0ccf95b4f6acd36d17934585f534b0dce903e44a153aa53", ts: 1785290063, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 585507, block: 25635332, type: "transfer" },
    { hash: "0x06a76d9bd46ff18bf990ab15c0162cf0c8f5705167054ea891dcea670d7a8aa9", ts: 1785288995, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 585507, block: 25635243, type: "transfer" },
    { hash: "0x2e08e05a44d2b206f1218d0590b38228d25dbf944470de944ea0c317ded0fe6d", ts: 1785288863, from: "0x0b6d863af12a28765f76c8315e0ef8fe3fffd6ea", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 584182, block: 25635232, type: "transfer" },
    { hash: "0xb5c6f5caf7e5de54c53382b8075dc5900789eab961a2bf111fd4a68acdfd942e", ts: 1785288755, from: "0x7c59bd2b2064883093452ab32492f3e5fa03971d", to: "0x0b6d863af12a28765f76c8315e0ef8fe3fffd6ea", amount: 584182, block: 25635224, type: "transfer" },
    { hash: "0x520b81445fe84076442ad5efb30f4f24c526973de943051e2b4cf61831c43597", ts: 1785287003, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 602039, block: 25635078, type: "transfer" },
    { hash: "0x761a596f0b11a2ff8e3c9356e21623ad52b81ed2a1ecc240a63993d8c9c1db80", ts: 1785286835, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 602039, block: 25635064, type: "transfer" },
    { hash: "0x7d22532e00d27b30ce6675f4abfbd27a58c23b425dff16f239981167576902ee", ts: 1785286763, from: "0xd021d039bc73d90c66aef43362112596f2088b06", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 547122, block: 25635058, type: "transfer" },
    { hash: "0x5fc334237063cc8aac0c807e93e08f3f1993049c00db9733af47630e91d5fe14", ts: 1785286715, from: "0x3395d86d44bc6bb20d41d5d04434aa76187c2be7", to: "0xd021d039bc73d90c66aef43362112596f2088b06", amount: 547122, block: 25635054, type: "transfer" },
    { hash: "0xa1008c948807bb8d18b98d479ef636c4c1a91f19888731c5f6abc2e6afeeb889", ts: 1785286679, from: "0xe912d6cfeaee2c1ffde4bea98299d185fafdaa1d", to: "0x3395d86d44bc6bb20d41d5d04434aa76187c2be7", amount: 239746, block: 25635051, type: "transfer" },
    { hash: "0x2dfef442ccb760d8f392989a34301b8c5d5b34b9c781d799943341bb03b1bae7", ts: 1785286619, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xe912d6cfeaee2c1ffde4bea98299d185fafdaa1d", amount: 239726, block: 25635046, type: "transfer" },
    { hash: "0xad916cc64b93e48dc6401d706299d3ee3dff184391f04aa1d59361436e1c02d6", ts: 1785245039, from: "0xbee0fbcb4ae3dc5127258b5669407b71ccce1bd9", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 2356164, block: 25631598, type: "transfer" },
    { hash: "0xe6071f3b4be1baab3e27ed552157e83e14c987131b7a7e4e0c39237f40617aa4", ts: 1785244607, from: "0xe29a56bb873f6166bcafee7e2287a9acb7710741", to: "0xbee0fbcb4ae3dc5127258b5669407b71ccce1bd9", amount: 2356164, block: 25631562, type: "transfer" },
    { hash: "0x3e356efb1090c18c60fe3d9797b01f4dcacbeda2c028615f0fb60001bb83ce2e", ts: 1785244547, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xe29a56bb873f6166bcafee7e2287a9acb7710741", amount: 2356164, block: 25631557, type: "transfer" },
    { hash: "0x11fbd94a8b80de27b51f94a39e4cd3846caea1307570829557ce31ddcb93cb38", ts: 1785241655, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xc8aa49d33a6df940a5d0defce1e4a5f4b877db92", amount: 5178082, block: 25631316, type: "transfer" },
    { hash: "0x65d00a54c4daba8f504f5aa12409674ee8ebba920c44077044984dbf07c9d7ac", ts: 1785241331, from: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 135202, block: 25631289, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 6613882, received: 6639795, sent: 25913, txs: 2 },
    { wallet: "0xc8aa49d33a6df940a5d0defce1e4a5f4b877db92", net: 5178082, received: 5178082, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 2491366, received: 2491366, sent: 0, txs: 2 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 1290710, received: 1290710, sent: 0, txs: 4 },
    { wallet: "0xc5862cd771e917b498830ec40b071178bbbbdf32", net: 215000, received: 215000, sent: 0, txs: 2 },
    { wallet: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", net: 139656, received: 139656, sent: 0, txs: 1 },
    { wallet: "0x716e3fad60bc867449795cd624da34aab3dc381f", net: 53763, received: 53763, sent: 0, txs: 4 },
    { wallet: "0x0a1354ba9359d7aded40faf11bbe590e2c14bec7", net: 27798, received: 27798, sent: 0, txs: 1 },
    { wallet: "0x6a79b5142ed23875ce46f40826ff686b5429f78f", net: 25913, received: 25913, sent: 0, txs: 1 },
    { wallet: "0x41e896e6eb9856aa413234ecbfeef4060e9d8531", net: 10548, received: 10548, sent: 0, txs: 1 },
    { wallet: "0x3858cabc26239038c74ad6b03b78b441383364be", net: 7397, received: 7397, sent: 0, txs: 1 },
    { wallet: "0x04b2cf501a20f94a9e6273d5a991bd39f389495f", net: 7040, received: 7040, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 4384, received: 4384, sent: 0, txs: 1 },
    { wallet: "0x0faafa9fff76cd4d6dbf01d31d20dc7e75b6771a", net: 4110, received: 4110, sent: 0, txs: 1 },
    { wallet: "0xc9e1571520eb117c1b2b59133a4d2ee4da235ecd", net: 3562, received: 3562, sent: 0, txs: 1 },
    { wallet: "0x0faeb60e1b406c2f84454f169a2512a5792e1aa8", net: 3513, received: 3513, sent: 0, txs: 1 },
    { wallet: "0xdc56fd9d0112f44c9c4944e544fd20987c8b3a8c", net: 2550, received: 2550, sent: 0, txs: 1 },
    { wallet: "0x5f1c5951c5b1cc112ba9e89b9467edca33063453", net: 2523, received: 2523, sent: 0, txs: 1 },
    { wallet: "0xfa7d15c941da051bc4276ab341d3cb37cc09b73f", net: 2521, received: 2521, sent: 0, txs: 5 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1925, received: 1925, sent: 0, txs: 10 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x6f2a4943267b1ec35cb8c17e57c5f6d9f7c57870", net: 1390, received: 1390, sent: 0, txs: 1 },
    { wallet: "0x7b9d43ef9d740bc6b6e593e1fc7c4b910a75fd00", net: 1328, received: 1328, sent: 0, txs: 1 },
    { wallet: "0x5532d65385e664eef604976354608a9dc4d9ae7c", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xa0952edc243077c05148828cc5432c37486858c3", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x9df14235393c7a9d2bc38db6c12c61b699e094c6", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x3822d8b402d6fcbe3187b08b1733ae2e2e46a2d3", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x1ab2a7c6178467e8e2fd9c9a42d33024c8d6e1d0", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 187, received: 187, sent: 0, txs: 2 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 137, received: 548, sent: 411, txs: 3 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 17, received: 17, sent: 0, txs: 1 },
    { wallet: "0x111111125421ca6dc452d289314280a0f8842a65", net: 0, received: 704, sent: 704, txs: 2 },
    { wallet: "0x81834604603d3eaf5fdb4eb31369b4655d7be7e5", net: 0, received: 215000, sent: 215000, txs: 4 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 28471, sent: 28471, txs: 10 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 890, sent: 890, txs: 2 },
    { wallet: "0x97caca78ac2a94c67643d07843f85afaa44a3ea5", net: 0, received: 235, sent: 235, txs: 2 },
    { wallet: "0xa8f8296f4053fd65e89b245d6c7f983a70234c8b", net: 0, received: 235, sent: 235, txs: 4 },
    { wallet: "0x0889e9327b98d7d1be3c301a4585ff3330502c9a", net: 0, received: 36222, sent: 36222, txs: 16 },
    { wallet: "0x1bc0e3b77972ba5090e0e2428543ce01df5ad2ec", net: 0, received: 6639795, sent: 6639795, txs: 3 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 99709, sent: 99709, txs: 28 },
    { wallet: "0x1f2f10d1c40777ae1da742455c65828ff36df387", net: 0, received: 12585, sent: 12585, txs: 4 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 187, sent: 187, txs: 4 }
];

const WHALE_LABELS = {

};
