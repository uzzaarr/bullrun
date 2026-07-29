// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 29, 2026 at 02:01 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 133;
const WHALE_TOTAL_VOLUME      = 25095948;
const WHALE_BIGGEST_SINGLE    = 5699000;

const WHALE_TRANSFERS = [
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
    { hash: "0x65d00a54c4daba8f504f5aa12409674ee8ebba920c44077044984dbf07c9d7ac", ts: 1785241331, from: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 135202, block: 25631289, type: "transfer" },
    { hash: "0x9af13b418045341080e206d1d4ad89031913c0b88720ca484e2644f9f4d480d1", ts: 1785220079, from: "0xbbc971001a0a3697546b80ce09a5a217097db1b1", to: "0x217532e9322a6995854b47462f875edeb9dfb68f", amount: 1898000, block: 25629520, type: "transfer" },
    { hash: "0x372a4259ac8005bef593969994dd3f08102467f42862cde39e2c95aaa544f294", ts: 1785219215, from: "0xa2b801ab66f9b6c3ba70b36953d087339ac26406", to: "0xedc6b3f95f3e4ef39318a13bd1757716686d269a", amount: 5699000, block: 25629448, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xedc6b3f95f3e4ef39318a13bd1757716686d269a", net: 5699000, received: 5699000, sent: 0, txs: 1 },
    { wallet: "0xc8aa49d33a6df940a5d0defce1e4a5f4b877db92", net: 5178082, received: 5178082, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 2491366, received: 2491366, sent: 0, txs: 2 },
    { wallet: "0x217532e9322a6995854b47462f875edeb9dfb68f", net: 1900000, received: 1900000, sent: 0, txs: 3 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 1187547, received: 1187547, sent: 0, txs: 2 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 59934, received: 59934, sent: 0, txs: 6 },
    { wallet: "0x716e3fad60bc867449795cd624da34aab3dc381f", net: 32354, received: 32354, sent: 0, txs: 2 },
    { wallet: "0x0a1354ba9359d7aded40faf11bbe590e2c14bec7", net: 27798, received: 27798, sent: 0, txs: 1 },
    { wallet: "0x6a79b5142ed23875ce46f40826ff686b5429f78f", net: 25913, received: 25913, sent: 0, txs: 1 },
    { wallet: "0x139724a176a50f5089f4ed5bc653124e9d2c97f3", net: 13151, received: 13151, sent: 0, txs: 1 },
    { wallet: "0x41e896e6eb9856aa413234ecbfeef4060e9d8531", net: 10548, received: 10548, sent: 0, txs: 1 },
    { wallet: "0x04b2cf501a20f94a9e6273d5a991bd39f389495f", net: 7040, received: 7040, sent: 0, txs: 1 },
    { wallet: "0xac2dd467dbbca0b146d909a3363d9d3dcdec56aa", net: 6575, received: 6575, sent: 0, txs: 1 },
    { wallet: "0x7764c8727dab012fce187df0736dab2b00ef691c", net: 6575, received: 6575, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 4384, received: 4384, sent: 0, txs: 1 },
    { wallet: "0xc9e1571520eb117c1b2b59133a4d2ee4da235ecd", net: 3562, received: 3562, sent: 0, txs: 1 },
    { wallet: "0x187fe1a8b76c60b85c00a2819152ff00ff642386", net: 2475, received: 2475, sent: 0, txs: 1 },
    { wallet: "0xd1966596e0d9c4033d19b5e12d1f14b183dfa2c5", net: 2055, received: 2055, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 2027, received: 2027, sent: 0, txs: 11 },
    { wallet: "0xb8294f8f8f6619a299688f1ca12cb967fc9a6176", net: 1918, received: 1918, sent: 0, txs: 1 },
    { wallet: "0x6f2a4943267b1ec35cb8c17e57c5f6d9f7c57870", net: 1390, received: 1390, sent: 0, txs: 1 },
    { wallet: "0x7b9d43ef9d740bc6b6e593e1fc7c4b910a75fd00", net: 1328, received: 1328, sent: 0, txs: 1 },
    { wallet: "0xa0952edc243077c05148828cc5432c37486858c3", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x9df14235393c7a9d2bc38db6c12c61b699e094c6", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x5d73e31d8588d928d2dcbea05dc8038d86730bf5", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x3822d8b402d6fcbe3187b08b1733ae2e2e46a2d3", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x1ab2a7c6178467e8e2fd9c9a42d33024c8d6e1d0", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 94, received: 94, sent: 0, txs: 1 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 17, received: 17, sent: 0, txs: 1 },
    { wallet: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", net: 0, received: 1187547, sent: 1187547, txs: 4 },
    { wallet: "0x0b6d863af12a28765f76c8315e0ef8fe3fffd6ea", net: 0, received: 584182, sent: 584182, txs: 2 },
    { wallet: "0x321d995767dd1fdf453ecea12833902e2137cb87", net: 0, received: 1364, sent: 1364, txs: 2 },
    { wallet: "0x2d84a18d4d1356420f3115e4d11e26680671c62d", net: 0, received: 1370, sent: 1370, txs: 3 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 0, received: 1370, sent: 1370, txs: 2 },
    { wallet: "0xd021d039bc73d90c66aef43362112596f2088b06", net: 0, received: 547122, sent: 547122, txs: 2 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 94, sent: 94, txs: 2 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 59934, sent: 59934, txs: 17 },
    { wallet: "0x1f2f10d1c40777ae1da742455c65828ff36df387", net: 0, received: 2779, sent: 2779, txs: 2 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 20462, sent: 20462, txs: 4 },
    { wallet: "0x0889e9327b98d7d1be3c301a4585ff3330502c9a", net: 0, received: 29103, sent: 29103, txs: 10 },
    { wallet: "0x72567535804795179d361d42757fdce34f776d05", net: 0, received: 1390, sent: 1390, txs: 2 },
    { wallet: "0x111116053f09d34a7eae8102887004445176ca11", net: 0, received: 6772, sent: 6772, txs: 4 },
    { wallet: "0x634138e0716bbf2b33f06348f57e48a4be334728", net: 0, received: 6772, sent: 6772, txs: 2 }
];

const WHALE_LABELS = {

};
