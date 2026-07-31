// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 31, 2026 at 02:10 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 166;
const WHALE_TOTAL_VOLUME      = 383943;
const WHALE_BIGGEST_SINGLE    = 235998;

const WHALE_TRANSFERS = [
    { hash: "0xf9a5560fea918373604d30e11db0632f15f858e4f2775beff561e04afc5856a9", ts: 1785423167, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x9c058a285b1f1bb2058ff04d54574ac12a53b2f5", amount: 147945, block: 25646393, type: "transfer" },
    { hash: "0x141871ddae2f678f8fc2a52ef68fb986abe32d74b008e4e702cfe2ce9b75cc90", ts: 1785413783, from: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 235998, block: 25645613, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 237231, received: 237231, sent: 0, txs: 2 },
    { wallet: "0x9c058a285b1f1bb2058ff04d54574ac12a53b2f5", net: 147945, received: 147945, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 110467, received: 110467, sent: 0, txs: 8 },
    { wallet: "0xeac35e5fd9b9e0a6bad0dcd1da8fda75a2a642c1", net: 38321, received: 90835, sent: 52514, txs: 7 },
    { wallet: "0xe56b7c1bc8da8e37552c1e10c1315f855d34c6ff", net: 33151, received: 33151, sent: 0, txs: 1 },
    { wallet: "0xb8569931164b4c3a4b596c48d0e97b9089344e3a", net: 31597, received: 31597, sent: 0, txs: 1 },
    { wallet: "0x716e3fad60bc867449795cd624da34aab3dc381f", net: 29210, received: 29210, sent: 0, txs: 2 },
    { wallet: "0x74b06101e70d3b3f30d277bbbdd8cb276a2e4cdc", net: 24795, received: 24795, sent: 0, txs: 1 },
    { wallet: "0xcb7d87f5502fc91529e0fe92373dddd8ff1f3d7c", net: 23425, received: 23425, sent: 0, txs: 1 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 19891, received: 19891, sent: 0, txs: 2 },
    { wallet: "0x38519da87fb8c5bab2b22d0aab6a4c50b0807d75", net: 19444, received: 19444, sent: 0, txs: 1 },
    { wallet: "0x311f520e51b3f5a6354d4e620443edb7ad59e996", net: 8630, received: 8630, sent: 0, txs: 1 },
    { wallet: "0xe5e6ee25986549a41a61ae31080719d6db316580", net: 6950, received: 6950, sent: 0, txs: 1 },
    { wallet: "0xbc85cd88002e4e8fda662d4b102799fe0662ac8b", net: 6849, received: 6849, sent: 0, txs: 1 },
    { wallet: "0xbbc2e9fadd02f03bda75894d84148862f294983a", net: 4932, received: 4932, sent: 0, txs: 1 },
    { wallet: "0x0779bf904ba7495de478d9fae5cba4e89ac5fca1", net: 4658, received: 4658, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 4384, received: 4384, sent: 0, txs: 1 },
    { wallet: "0x7b9d43ef9d740bc6b6e593e1fc7c4b910a75fd00", net: 2549, received: 4752, sent: 2203, txs: 9 },
    { wallet: "0x6f983e1cdab14ed5b72686df0f308b5a3c5acd3d", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xb1f8db9d1b0b6698aca9d7ba189d60a30139dd94", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x5987d62c93f864fff531f79c1f6c8da51eaffce2", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x855992fbda59048156cb4bc75fad65d0bfa80f3b", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 728, received: 728, sent: 0, txs: 14 },
    { wallet: "0x6b0125f1356c12fc4cee7e941e03a7bd5b4c8100", net: 500, received: 500, sent: 0, txs: 1 },
    { wallet: "0x1ab2a7c6178467e8e2fd9c9a42d33024c8d6e1d0", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xb8294f8f8f6619a299688f1ca12cb967fc9a6176", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xee894331c3e81d72caacf755840b6e2a7a037e8b", net: 194, received: 25822, sent: 25628, txs: 3 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 86, received: 86, sent: 0, txs: 2 },
    { wallet: "0xfa7d15c941da051bc4276ab341d3cb37cc09b73f", net: 53, received: 53, sent: 0, txs: 1 },
    { wallet: "0xedc6531b10297788cbb0fcfaee904a3803d3e2e4", net: 10, received: 10, sent: 0, txs: 2 },
    { wallet: "0xfad4c8f1e71e4c56b87733bd916ff7cff46c6c29", net: 8, received: 8, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 8, received: 8, sent: 0, txs: 1 },
    { wallet: "0x9391a5fbeede8da7131bff6c235d5968ec490ffb", net: 2, received: 2, sent: 0, txs: 1 },
    { wallet: "0xad01c20d5886137e056775af56915de824c8fce5", net: 2, received: 2, sent: 0, txs: 6 },
    { wallet: "0xc06ebbefd94032b85424d51906e2a335efae264b", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 55376, sent: 55376, txs: 12 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 37150, sent: 37150, txs: 10 },
    { wallet: "0x10916b18ce6deef279f0ee66fab6b6c0e3461b78", net: 0, received: 672, sent: 672, txs: 4 },
    { wallet: "0x4605db668606de400a888854cccf7d9e85e88cef", net: 0, received: 2724, sent: 2724, txs: 2 },
    { wallet: "0x2d84a18d4d1356420f3115e4d11e26680671c62d", net: 0, received: 2740, sent: 2740, txs: 3 },
    { wallet: "0x3c9108700724d9d96cff2ac8979d6ad2a8d469ae", net: 0, received: 411, sent: 411, txs: 2 },
    { wallet: "0x1f2f10d1c40777ae1da742455c65828ff36df387", net: 0, received: 6323, sent: 6323, txs: 4 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 19891, sent: 19891, txs: 6 },
    { wallet: "0x0e9bf71a9931e11d90ca77961708aa7e86d96687", net: 0, received: 18709, sent: 18709, txs: 2 },
    { wallet: "0x111116053f09d34a7eae8102887004445176ca11", net: 0, received: 37284, sent: 37284, txs: 11 }
];

const WHALE_LABELS = {

};
