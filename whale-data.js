// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "August 4, 2026 at 07:22 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 233;
const WHALE_TOTAL_VOLUME      = 8125429;
const WHALE_BIGGEST_SINGLE    = 2071233;

const WHALE_TRANSFERS = [
    { hash: "0xebe3eeea0973d5f95d3df01015a856be4f7898b6742eba46e711019ed1f9b2e5", ts: 1785802115, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 1126037, block: 25677862, type: "transfer" },
    { hash: "0x78b89cc0c74010e0b7ef832346c70c220d11595441b0056f7828ebf0bb4312d7", ts: 1785801263, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 1126037, block: 25677791, type: "transfer" },
    { hash: "0x18a8dd5becfaf0a6334733ee6285769281a936385fff42fbed3c4da7a90543c0", ts: 1785801119, from: "0x597419fce661f0fdb5f3b9e6e49a2b3b4240d340", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 1115102, block: 25677779, type: "transfer" },
    { hash: "0xc3a535b95c5d26bf44879b779bcfae30319a78464597a70dfc88db4414449744", ts: 1785801071, from: "0xd5e647f9d6b5945cb40b06c83fc4350154fb6d24", to: "0x597419fce661f0fdb5f3b9e6e49a2b3b4240d340", amount: 1115102, block: 25677775, type: "transfer" },
    { hash: "0xecd27b967cb488fd267853c65ab01d0424db75df988897af5fc8f498b0f23569", ts: 1785800855, from: "0x9254fb742daefda0329cdbe71b3f15a361566697", to: "0xd5e647f9d6b5945cb40b06c83fc4350154fb6d24", amount: 2071233, block: 25677757, type: "transfer" },
    { hash: "0xb07991ba2309bbeef8a7774f081263f3fde308eaca936fb36e6bb737b685c426", ts: 1785800663, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x9254fb742daefda0329cdbe71b3f15a361566697", amount: 1571918, block: 25677741, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 1126037, received: 1126037, sent: 0, txs: 1 },
    { wallet: "0xd5e647f9d6b5945cb40b06c83fc4350154fb6d24", net: 954453, received: 2071233, sent: 1116780, txs: 3 },
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 163385, received: 163385, sent: 0, txs: 4 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 82705, received: 82705, sent: 0, txs: 3 },
    { wallet: "0x2970e620ff7cb1fc2d26ea6672df1378e866fe5b", net: 81918, received: 81918, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 78932, received: 78932, sent: 0, txs: 1 },
    { wallet: "0xf74e4b7fae0e0bbfcd98a2f2800ff4e0229e53da", net: 73973, received: 73973, sent: 0, txs: 1 },
    { wallet: "0x4e5468a7fec3ae9bd430e116bb05d5bdecfd2cdc", net: 52740, received: 52740, sent: 0, txs: 1 },
    { wallet: "0x30899b705d6941f8f92ed06ca91f617e7ac922c2", net: 46027, received: 46027, sent: 0, txs: 1 },
    { wallet: "0xd33120b8767dbe4d7b1a4290ce56228fc6854c05", net: 23836, received: 23836, sent: 0, txs: 1 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 19962, received: 19962, sent: 0, txs: 2 },
    { wallet: "0xc64f63f50eee4122cfb595009977856899faffc4", net: 15068, received: 15068, sent: 0, txs: 1 },
    { wallet: "0x49a2299840a9a5495cae51415548c2b1344bd4f3", net: 13151, received: 13151, sent: 0, txs: 1 },
    { wallet: "0x3d9f7660372711661693c7da65e30044426aac2a", net: 12329, received: 12329, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 10673, received: 1136710, sent: 1126037, txs: 4 },
    { wallet: "0x651b2ba365a5293dddc7343b2fbf0e5f8271426b", net: 10000, received: 30000, sent: 20000, txs: 2 },
    { wallet: "0xc1601b2620b38b6dec38ecf17007a94818890dca", net: 2740, received: 2740, sent: 0, txs: 1 },
    { wallet: "0x20694bb5c906ee71e696587be233284f995564b7", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0xbccae79a82a8a81ab726885a37b3a86418e55d3c", net: 2050, received: 2050, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1970, received: 1970, sent: 0, txs: 8 },
    { wallet: "0x20fa473270be0c37a33e6592428b428ff808f653", net: 1781, received: 1781, sent: 0, txs: 1 },
    { wallet: "0x1601a91f99f6dd7cb805e70d9c1903f9b0eb9b75", net: 1781, received: 1781, sent: 0, txs: 1 },
    { wallet: "0x07c9128b7231950b6d306d0d3aa1f2ad580598da", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0x5532d65385e664eef604976354608a9dc4d9ae7c", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0x793a9558a0ca9de122cbffa8a8b5542213672a19", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xc097f3238e49c690df6a7d15cf82065bc98291a5", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x139724a176a50f5089f4ed5bc653124e9d2c97f3", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x0f36eb8f227aa28e2eb2705724233addabd61e15", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xd11a748e4e1802d2c9e11bec1518736ad7646946", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x5d73e31d8588d928d2dcbea05dc8038d86730bf5", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 151, received: 151, sent: 0, txs: 2 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x2ef8991a33764bb3158f78eb3a9a5c280938de4c", net: 116, received: 116, sent: 0, txs: 1 },
    { wallet: "0x40a88150427465cca3911358edc96cf16f06e431", net: 9, received: 9, sent: 0, txs: 1 },
    { wallet: "0xf232f58c3f679ec801b1556f7640becf9c7a695b", net: 4, received: 4, sent: 0, txs: 1 },
    { wallet: "0x9899f62ecf16b70bffc88677023026c47e48c218", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 739191, sent: 739191, txs: 98 },
    { wallet: "0x6ecac0b40c73a8a776d8e0cd304440ab952b3c64", net: 0, received: 1096, sent: 1096, txs: 2 },
    { wallet: "0xa2697a4652e85d8fc6cfa11beb328edddaf33598", net: 0, received: 13899, sent: 13899, txs: 2 },
    { wallet: "0xda2a53c548fcc60cb9f275ff67e7203593ff90bd", net: 0, received: 13899, sent: 13899, txs: 2 },
    { wallet: "0x2316417e39e0d394b9341624efb3e3368cdd52e4", net: 0, received: 2740, sent: 2740, txs: 2 },
    { wallet: "0x0889e9327b98d7d1be3c301a4585ff3330502c9a", net: 0, received: 14398, sent: 14398, txs: 7 },
    { wallet: "0xd7185c486dd88eb9f3573b878a1469485644091f", net: 0, received: 3889, sent: 3889, txs: 2 }
];

const WHALE_LABELS = {

};
