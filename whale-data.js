// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 5, 2026 at 08:45 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 101;
const WHALE_TOTAL_VOLUME      = 3455029;
const WHALE_BIGGEST_SINGLE    = 999877;

const WHALE_TRANSFERS = [
    { hash: "0x6f60dc0f77be37dba6485cb9a3b72a6f307a55702e327874d9cddb6266e0bc92", ts: 1783229027, from: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", to: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", amount: 200056, block: 25464208, type: "transfer" },
    { hash: "0x985eeae983b5a19c01f9c683b0f37c015e4d908b1f8a487c306604bed5be497e", ts: 1783217471, from: "0xa230ae47c4e13b2484dcb9b3a50228ec1336fe59", to: "0x6912d024e2b88136c5a586e77b092199963b6083", amount: 999877, block: 25463251, type: "transfer" },
    { hash: "0xa56a58d3144ac799efe43833e9cf693dda39498abb4189ba17fb6dc0f3214c4b", ts: 1783217291, from: "0x86e5568cd41188a0957d6ddf12d0a4194e122465", to: "0xa230ae47c4e13b2484dcb9b3a50228ec1336fe59", amount: 999877, block: 25463236, type: "transfer" },
    { hash: "0xeee2fc2bfa1c726e289c319ddab29cff08b27d1596449a24d5b387b523050b12", ts: 1783216823, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x86e5568cd41188a0957d6ddf12d0a4194e122465", amount: 999877, block: 25463197, type: "transfer" },
    { hash: "0x82d0ba41ee09267532a38944297b535c997a4af177e23c98692caa0f886eaaa2", ts: 1783180439, from: "0xd4939dddd13ede0bbadbcbf5699967c259a5a821", to: "0x522a8b4e8572d0fbd315372d160eda66bbedf0b4", amount: 255342, block: 25460184, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 999877, received: 999877, sent: 0, txs: 1 },
    { wallet: "0x522a8b4e8572d0fbd315372d160eda66bbedf0b4", net: 254082, received: 255342, sent: 1261, txs: 3 },
    { wallet: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", net: 200056, received: 200056, sent: 0, txs: 1 },
    { wallet: "0xc4b8f36d2eee2df7a130ba994fd7b48f059e703f", net: 63288, received: 63288, sent: 0, txs: 1 },
    { wallet: "0x442bee95d7fea5217431a02a0df4d10bb1e85e68", net: 60411, received: 60411, sent: 0, txs: 1 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 27130, received: 27130, sent: 0, txs: 1 },
    { wallet: "0xd308fc4ec59cf2779eb75787810f05fc80fedb60", net: 23836, received: 23836, sent: 0, txs: 1 },
    { wallet: "0x2eae04d70f3c955e6c5a100c9779d6aae246410d", net: 12318, received: 12318, sent: 0, txs: 1 },
    { wallet: "0xfd9072f3715419414e2345da949fe5048c839877", net: 8767, received: 8767, sent: 0, txs: 1 },
    { wallet: "0x0ecb136fc3ddcdf682c7f5b7e564ca5a7e0f8559", net: 8630, received: 8630, sent: 0, txs: 1 },
    { wallet: "0x2dca89a78a4c6b1b77baa27f650814d73e2d9cca", net: 2254, received: 2254, sent: 0, txs: 1 },
    { wallet: "0x5c9d1a6c9753e711db9b880b0404cd653a0e0032", net: 2055, received: 2055, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 1644, received: 1644, sent: 0, txs: 2 },
    { wallet: "0xe28d7502e70c9b45de8218b122a72a1eaf972695", net: 1222, received: 1222, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xd11a748e4e1802d2c9e11bec1518736ad7646946", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 394, received: 409, sent: 15, txs: 9 },
    { wallet: "0xc89e3b392348b20bbebe4c5c918ecb505c64b8a7", net: 301, received: 601, sent: 301, txs: 3 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 123850, sent: 123850, txs: 24 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 103597, sent: 103597, txs: 22 },
    { wallet: "0x08fd3a0ed40260dbb0f5fbccfb98cf2ffb6f8653", net: 0, received: 1781, sent: 1781, txs: 3 },
    { wallet: "0xf8f87935a9919db73a5c1706b9a287874245ae54", net: 0, received: 1781, sent: 1781, txs: 2 },
    { wallet: "0x163f3103de041d25464e2c8a4f8f3187ec1856e0", net: 0, received: 2857, sent: 2857, txs: 2 },
    { wallet: "0x8a722431c321be4f0ee127ba90d40efa92bdea32", net: 0, received: 2857, sent: 2857, txs: 2 },
    { wallet: "0xa230ae47c4e13b2484dcb9b3a50228ec1336fe59", net: 0, received: 999877, sent: 999877, txs: 2 },
    { wallet: "0x86e5568cd41188a0957d6ddf12d0a4194e122465", net: 0, received: 999877, sent: 999877, txs: 2 },
    { wallet: "0x43dd58078bc74a9aa233e6f699f08134dda45a6f", net: 0, received: 3044, sent: 3044, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 22667, sent: 22667, txs: 8 },
    { wallet: "0xd43026d607c66f4ecadd408867e8ba9af05f3875", net: 0, received: 23836, sent: 23836, txs: 2 },
    { wallet: "0x9164fac423074db84d3f451ec3c7637e255bde53", net: 0, received: 12318, sent: 12318, txs: 2 },
    { wallet: "0xf40ffd618c7fee6a912ca029ad05aaada6c01d70", net: 0, received: 9726, sent: 9726, txs: 3 },
    { wallet: "0x519c9dbf12d99fceae8871fd5acc2797c0ca904a", net: 0, received: 1096, sent: 1096, txs: 3 },
    { wallet: "0x2671ae6251ae1bc7c51419ed05d330d0dbec2961", net: 0, received: 60411, sent: 60411, txs: 2 },
    { wallet: "0xeac35e5fd9b9e0a6bad0dcd1da8fda75a2a642c1", net: 0, received: 75993, sent: 75993, txs: 3 },
    { wallet: "0xd7b4a4cc6501aea2d93ad67c62ec39d4db7cf5b8", net: 0, received: 2184, sent: 2184, txs: 3 },
    { wallet: "0xb8d2876a0f6ae808c13bb54d2662a88534a5aad1", net: 0, received: 63288, sent: 63288, txs: 2 },
    { wallet: "0x40a88150427465cca3911358edc96cf16f06e431", net: 0, received: 5209, sent: 5209, txs: 2 },
    { wallet: "0x7f51c134230eb9e5aba42bc364d3d3eba26d9712", net: 0, received: 5619, sent: 5619, txs: 3 },
    { wallet: "0x036f1e40bd41595e30737b23bb3526420b1d11f9", net: 0, received: 25393, sent: 25393, txs: 2 },
    { wallet: "0xfc92fbb76b61ac01d7562b3edde09a02ab5d6483", net: 0, received: 25393, sent: 25393, txs: 2 },
    { wallet: "0x3c9108700724d9d96cff2ac8979d6ad2a8d469ae", net: -137, received: 137, sent: 274, txs: 2 },
    { wallet: "0x10916b18ce6deef279f0ee66fab6b6c0e3461b78", net: -274, received: 439, sent: 713, txs: 4 },
    { wallet: "0xd031b8c380ff6df254cdc1f8d55b8bbd81ff4216", net: -411, received: 685, sent: 1096, txs: 2 },
    { wallet: "0x4cc75e430f2901cb7bcd13f75f7528d662b773b5", net: -4985, received: 15, sent: 5000, txs: 3 },
    { wallet: "0x7bdc65dbdc378d099da8da17add52a28f2f626ea", net: -7260, received: 2466, sent: 9726, txs: 2 },
    { wallet: "0x0e727149016c00a66096425cf6b186f17313e8f3", net: -60377, received: 15616, sent: 75993, txs: 2 },
    { wallet: "0xd4939dddd13ede0bbadbcbf5699967c259a5a821", net: -241370, received: 13973, sent: 255342, txs: 2 }
];

const WHALE_LABELS = {

};
