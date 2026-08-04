// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "August 4, 2026 at 01:56 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 176;
const WHALE_TOTAL_VOLUME      = 11486423;
const WHALE_BIGGEST_SINGLE    = 2071233;

const WHALE_TRANSFERS = [
    { hash: "0xebe3eeea0973d5f95d3df01015a856be4f7898b6742eba46e711019ed1f9b2e5", ts: 1785802115, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 1126037, block: 25677862, type: "transfer" },
    { hash: "0x78b89cc0c74010e0b7ef832346c70c220d11595441b0056f7828ebf0bb4312d7", ts: 1785801263, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 1126037, block: 25677791, type: "transfer" },
    { hash: "0x18a8dd5becfaf0a6334733ee6285769281a936385fff42fbed3c4da7a90543c0", ts: 1785801119, from: "0x597419fce661f0fdb5f3b9e6e49a2b3b4240d340", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 1115102, block: 25677779, type: "transfer" },
    { hash: "0xc3a535b95c5d26bf44879b779bcfae30319a78464597a70dfc88db4414449744", ts: 1785801071, from: "0xd5e647f9d6b5945cb40b06c83fc4350154fb6d24", to: "0x597419fce661f0fdb5f3b9e6e49a2b3b4240d340", amount: 1115102, block: 25677775, type: "transfer" },
    { hash: "0xecd27b967cb488fd267853c65ab01d0424db75df988897af5fc8f498b0f23569", ts: 1785800855, from: "0x9254fb742daefda0329cdbe71b3f15a361566697", to: "0xd5e647f9d6b5945cb40b06c83fc4350154fb6d24", amount: 2071233, block: 25677757, type: "transfer" },
    { hash: "0xb07991ba2309bbeef8a7774f081263f3fde308eaca936fb36e6bb737b685c426", ts: 1785800663, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x9254fb742daefda0329cdbe71b3f15a361566697", amount: 1571918, block: 25677741, type: "transfer" },
    { hash: "0xdd0bb22ce070112d346fc8d155ff1cbf0023faadf3c96f60413a795e0c8a1dad", ts: 1785770915, from: "0x0889e9327b98d7d1be3c301a4585ff3330502c9a", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 107745, block: 25675268, type: "sell" },
    { hash: "0xdd0bb22ce070112d346fc8d155ff1cbf0023faadf3c96f60413a795e0c8a1dad", ts: 1785770915, from: "0x569bd76e645fc767e84f8cbb34f40261e7c74c76", to: "0x0889e9327b98d7d1be3c301a4585ff3330502c9a", amount: 123151, block: 25675268, type: "transfer" },
    { hash: "0x9bc0085af9680e465ef7586627c19deed4c86d458a39a2ec02e494eb073f0a2e", ts: 1785770867, from: "0xa747fb6dfc7903bb0d1a1e490681418de4931e7e", to: "0x569bd76e645fc767e84f8cbb34f40261e7c74c76", amount: 123151, block: 25675264, type: "transfer" },
    { hash: "0x534da675fd5101a831191ddc9a5e3cdc35575a2b5ae0f225e05d51049ff4e24a", ts: 1785770795, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xa747fb6dfc7903bb0d1a1e490681418de4931e7e", amount: 123151, block: 25675259, type: "transfer" },
    { hash: "0xb367fa7ccee06748d308c7beefdf8c908c2f0b92f7220b21e983ab005e841152", ts: 1785766715, from: "0xda210e140405b9f94a5348167c803cda05f325d4", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 700000, block: 25674919, type: "transfer" },
    { hash: "0x280bc3d58f2ee9b7d10d4b0acf67e78c8fbef5633513611ebfdc40eb6dedec30", ts: 1785766295, from: "0x0c066c61c1784640946a008767f9c0dc48448bc9", to: "0xda210e140405b9f94a5348167c803cda05f325d4", amount: 700000, block: 25674884, type: "transfer" },
    { hash: "0xc0958e8fb9c965e341183d5a5bdbb934df0f31f3797bd24ef3f6c185ad1bff82", ts: 1785759791, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xd862cdcfeb856c32b3c4f7563f4811d8ddfd42e2", amount: 102161, block: 25674342, type: "transfer" },
    { hash: "0xbae60f5ed472035bab3201426eb1e6a3e8e894066feeb7aa7e58933069eb7971", ts: 1785759707, from: "0xd862cdcfeb856c32b3c4f7563f4811d8ddfd42e2", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 102161, block: 25674335, type: "sell" },
    { hash: "0x2e4f8ac25e1ea6cab63c7a57f7653c8389c1e716aae32aa923633aa147191e43", ts: 1785758963, from: "0x504ce9e51e508c85a161058c12e970a903d482fc", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 1279474, block: 25674274, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 2059941, received: 2059941, sent: 0, txs: 4 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 1126037, received: 1126037, sent: 0, txs: 1 },
    { wallet: "0xd5e647f9d6b5945cb40b06c83fc4350154fb6d24", net: 954453, received: 2071233, sent: 1116780, txs: 3 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 231784, received: 298931, sent: 67148, txs: 23 },
    { wallet: "0xead224e9ac09ac94a3d4c0ab1f16bc4e7cb4574c", net: 61649, received: 61649, sent: 0, txs: 1 },
    { wallet: "0x69987be7ce4cc89d0e00e0b8fa652f10e22fce7c", net: 47945, received: 47945, sent: 0, txs: 1 },
    { wallet: "0x30899b705d6941f8f92ed06ca91f617e7ac922c2", net: 46027, received: 46027, sent: 0, txs: 1 },
    { wallet: "0x28ede55e0ff5e20d732b989879aecfd87b8f761b", net: 24634, received: 24634, sent: 0, txs: 1 },
    { wallet: "0x3d9f7660372711661693c7da65e30044426aac2a", net: 12329, received: 12329, sent: 0, txs: 1 },
    { wallet: "0xce5422d95915914c89590c057fbebb3d328cd3d6", net: 6341, received: 6341, sent: 0, txs: 1 },
    { wallet: "0x591568bfebc0888aec7df8434c61a95d008608af", net: 4795, received: 4795, sent: 0, txs: 1 },
    { wallet: "0xf68f7da978ca3cd9acbcb80672c9bde2e050b35f", net: 4110, received: 4110, sent: 0, txs: 1 },
    { wallet: "0xc4dbaa815a793a9f72a66b0e95f7547fe03849f7", net: 2207, received: 2207, sent: 0, txs: 1 },
    { wallet: "0xbccae79a82a8a81ab726885a37b3a86418e55d3c", net: 2050, received: 2050, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 2019, received: 2019, sent: 0, txs: 10 },
    { wallet: "0x378387ee4fe347320b3907a6dda1153b1f332046", net: 2000, received: 2000, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 1644, received: 1644, sent: 0, txs: 2 },
    { wallet: "0x3822d8b402d6fcbe3187b08b1733ae2e2e46a2d3", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x032a343a8c77e8ab0dbddd0e24cebaf5b3f0c3bf", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x139724a176a50f5089f4ed5bc653124e9d2c97f3", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x0f36eb8f227aa28e2eb2705724233addabd61e15", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x9df14235393c7a9d2bc38db6c12c61b699e094c6", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x855992fbda59048156cb4bc75fad65d0bfa80f3b", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd11a748e4e1802d2c9e11bec1518736ad7646946", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x5d73e31d8588d928d2dcbea05dc8038d86730bf5", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 61, received: 61, sent: 0, txs: 2 },
    { wallet: "0xdff2fb2944d6571be99573d9c3ec03fda3f02465", net: 16, received: 16, sent: 0, txs: 1 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 15, received: 15, sent: 0, txs: 2 },
    { wallet: "0xf232f58c3f679ec801b1556f7640becf9c7a695b", net: 4, received: 4, sent: 0, txs: 1 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 1, received: 822, sent: 821, txs: 2 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 366079, sent: 366079, txs: 46 },
    { wallet: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", net: 0, received: 1126037, sent: 1126037, txs: 2 },
    { wallet: "0x597419fce661f0fdb5f3b9e6e49a2b3b4240d340", net: 0, received: 1115102, sent: 1115102, txs: 2 },
    { wallet: "0x0889e9327b98d7d1be3c301a4585ff3330502c9a", net: 0, received: 130006, sent: 130006, txs: 9 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 178779, sent: 178779, txs: 14 },
    { wallet: "0xf342a326abadbecaeb220080efb94d442d5674dc", net: 0, received: 65441, sent: 65441, txs: 2 },
    { wallet: "0x652beec615a5f2373715efed78483ca9bf982d5a", net: 0, received: 821, sent: 821, txs: 2 },
    { wallet: "0x447a03c131c0a97a8b8d548e3cd81aec4ce05d73", net: 0, received: 66016, sent: 66016, txs: 4 },
    { wallet: "0x4d3db4516a7e0ba33ab6e708f663c03c2d56e6da", net: 0, received: 21965, sent: 21965, txs: 4 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 161766, sent: 161766, txs: 16 },
    { wallet: "0x111116053f09d34a7eae8102887004445176ca11", net: 0, received: 26422, sent: 26422, txs: 10 },
    { wallet: "0x45a8adc1b8cc006e4e6f9640b1d8bb11b4c25dcc", net: 0, received: 11781, sent: 11781, txs: 3 },
    { wallet: "0x7b673ac3d725523109bf09112a8ee13199a13f23", net: 0, received: 11781, sent: 11781, txs: 2 },
    { wallet: "0x569bd76e645fc767e84f8cbb34f40261e7c74c76", net: 0, received: 123151, sent: 123151, txs: 2 }
];

const WHALE_LABELS = {

};
