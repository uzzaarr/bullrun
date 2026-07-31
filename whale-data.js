// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 31, 2026 at 08:40 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 140;
const WHALE_TOTAL_VOLUME      = 5150347;
const WHALE_BIGGEST_SINGLE    = 806307;

const WHALE_TRANSFERS = [
    { hash: "0xcee361198ed914df933e43f6247c867a1632f502d29b82f0762907ad363fdc98", ts: 1785467663, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 806307, block: 25650078, type: "transfer" },
    { hash: "0xed97cee4e02a7c4613aad848b5a978e3c122d86c7951e39216a15d4e85cc6e5e", ts: 1785467363, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 806307, block: 25650053, type: "transfer" },
    { hash: "0xbfabea449a151aee38fe7498b75e62339ff0db89fd26b7522117cb7a78b542a9", ts: 1785467231, from: "0xa08e6ffdc55ea30c483f0c772089f0d3254b4480", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 787854, block: 25650042, type: "transfer" },
    { hash: "0x665514577d3837bc5a8d4fff5f225c41967f63cff2dd8afe857e3f992b4eeacb", ts: 1785467183, from: "0x1cecbc925f7fbd1565fd4f99c81a4a138c729b7c", to: "0xa08e6ffdc55ea30c483f0c772089f0d3254b4480", amount: 787854, block: 25650038, type: "transfer" },
    { hash: "0xb134830c38871321c161b811b6d70ba0d8ae414991686260c442ec26246c5db8", ts: 1785467147, from: "0xbd9949756de166350fea2661b609bb19cca3f3ce", to: "0x1cecbc925f7fbd1565fd4f99c81a4a138c729b7c", amount: 789041, block: 25650035, type: "transfer" },
    { hash: "0xbcbde975ddd3af9e3da907936071e977296878c5a131a5d3c86902644d577e9a", ts: 1785467051, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xbd9949756de166350fea2661b609bb19cca3f3ce", amount: 789041, block: 25650027, type: "transfer" },
    { hash: "0xf9a5560fea918373604d30e11db0632f15f858e4f2775beff561e04afc5856a9", ts: 1785423167, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x9c058a285b1f1bb2058ff04d54574ac12a53b2f5", amount: 147945, block: 25646393, type: "transfer" },
    { hash: "0x141871ddae2f678f8fc2a52ef68fb986abe32d74b008e4e702cfe2ce9b75cc90", ts: 1785413783, from: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 235998, block: 25645613, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 825907, received: 825907, sent: 0, txs: 2 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 235998, received: 235998, sent: 0, txs: 1 },
    { wallet: "0x9c058a285b1f1bb2058ff04d54574ac12a53b2f5", net: 147945, received: 147945, sent: 0, txs: 1 },
    { wallet: "0xc8fd6e59234ffadda514ab10bf70020de0f8e975", net: 55479, received: 55479, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 39669, received: 845977, sent: 806307, txs: 7 },
    { wallet: "0xe56b7c1bc8da8e37552c1e10c1315f855d34c6ff", net: 33151, received: 33151, sent: 0, txs: 1 },
    { wallet: "0x716e3fad60bc867449795cd624da34aab3dc381f", net: 30536, received: 30536, sent: 0, txs: 2 },
    { wallet: "0xcb7d87f5502fc91529e0fe92373dddd8ff1f3d7c", net: 23425, received: 23425, sent: 0, txs: 1 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 19891, received: 19891, sent: 0, txs: 2 },
    { wallet: "0xd3d40c351d8287179526b1da72d0456ba12070ba", net: 10839, received: 10839, sent: 0, txs: 1 },
    { wallet: "0xdc56fd9d0112f44c9c4944e544fd20987c8b3a8c", net: 10457, received: 10457, sent: 0, txs: 3 },
    { wallet: "0x311f520e51b3f5a6354d4e620443edb7ad59e996", net: 8630, received: 8630, sent: 0, txs: 1 },
    { wallet: "0xe5e6ee25986549a41a61ae31080719d6db316580", net: 6950, received: 6950, sent: 0, txs: 1 },
    { wallet: "0xbbc2e9fadd02f03bda75894d84148862f294983a", net: 4932, received: 4932, sent: 0, txs: 1 },
    { wallet: "0x0779bf904ba7495de478d9fae5cba4e89ac5fca1", net: 4658, received: 4658, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 4384, received: 4384, sent: 0, txs: 1 },
    { wallet: "0x07c9128b7231950b6d306d0d3aa1f2ad580598da", net: 3699, received: 3699, sent: 0, txs: 1 },
    { wallet: "0xd69f4cfa65b30ea11b0acdcd1e9ebd38b871363a", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0x5532d65385e664eef604976354608a9dc4d9ae7c", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1652, received: 1652, sent: 0, txs: 11 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xb1f8db9d1b0b6698aca9d7ba189d60a30139dd94", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x5987d62c93f864fff531f79c1f6c8da51eaffce2", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x855992fbda59048156cb4bc75fad65d0bfa80f3b", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0x7b9d43ef9d740bc6b6e593e1fc7c4b910a75fd00", net: 960, received: 2712, sent: 1752, txs: 5 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x1ab2a7c6178467e8e2fd9c9a42d33024c8d6e1d0", net: 411, received: 411, sent: 0, txs: 2 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x9df14235393c7a9d2bc38db6c12c61b699e094c6", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xfa7d15c941da051bc4276ab341d3cb37cc09b73f", net: 53, received: 53, sent: 0, txs: 1 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 23, received: 23, sent: 0, txs: 1 },
    { wallet: "0xfad4c8f1e71e4c56b87733bd916ff7cff46c6c29", net: 8, received: 8, sent: 0, txs: 1 },
    { wallet: "0xedc6531b10297788cbb0fcfaee904a3803d3e2e4", net: 6, received: 6, sent: 0, txs: 1 },
    { wallet: "0x9391a5fbeede8da7131bff6c235d5968ec490ffb", net: 2, received: 2, sent: 0, txs: 1 },
    { wallet: "0xc06ebbefd94032b85424d51906e2a335efae264b", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0xad01c20d5886137e056775af56915de824c8fce5", net: 1, received: 1, sent: 0, txs: 3 },
    { wallet: "0x9f4846679287e7c8da0e8e61f08eb378b6d5f3cf", net: 0, received: 19599, sent: 19599, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 5881, sent: 5881, txs: 8 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 19252, sent: 19252, txs: 10 },
    { wallet: "0xbaa8254ae8b9769ae9053d9f25cca5f90f07427e", net: 0, received: 15342, sent: 15342, txs: 6 },
    { wallet: "0x21dce84e1c9ea03025ddaefd186d6119ccb1e819", net: 0, received: 15342, sent: 15342, txs: 4 },
    { wallet: "0x0889e9327b98d7d1be3c301a4585ff3330502c9a", net: 0, received: 27676, sent: 27676, txs: 18 },
    { wallet: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", net: 0, received: 806307, sent: 806307, txs: 2 },
    { wallet: "0xa08e6ffdc55ea30c483f0c772089f0d3254b4480", net: 0, received: 787854, sent: 787854, txs: 2 },
    { wallet: "0x1cecbc925f7fbd1565fd4f99c81a4a138c729b7c", net: 0, received: 789041, sent: 789041, txs: 3 },
    { wallet: "0xbd9949756de166350fea2661b609bb19cca3f3ce", net: 0, received: 789041, sent: 789041, txs: 2 },
    { wallet: "0xfe263102682933297cb65dc813e5193249769251", net: 0, received: 30536, sent: 30536, txs: 4 },
    { wallet: "0x10916b18ce6deef279f0ee66fab6b6c0e3461b78", net: 0, received: 672, sent: 672, txs: 4 }
];

const WHALE_LABELS = {

};
