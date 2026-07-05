// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 5, 2026 at 07:07 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 62;
const WHALE_TOTAL_VOLUME      = 3199687;
const WHALE_BIGGEST_SINGLE    = 999877;

const WHALE_TRANSFERS = [
    { hash: "0x6f60dc0f77be37dba6485cb9a3b72a6f307a55702e327874d9cddb6266e0bc92", ts: 1783229027, from: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", to: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", amount: 200056, block: 25464208, type: "transfer" },
    { hash: "0x985eeae983b5a19c01f9c683b0f37c015e4d908b1f8a487c306604bed5be497e", ts: 1783217471, from: "0xa230ae47c4e13b2484dcb9b3a50228ec1336fe59", to: "0x6912d024e2b88136c5a586e77b092199963b6083", amount: 999877, block: 25463251, type: "transfer" },
    { hash: "0xa56a58d3144ac799efe43833e9cf693dda39498abb4189ba17fb6dc0f3214c4b", ts: 1783217291, from: "0x86e5568cd41188a0957d6ddf12d0a4194e122465", to: "0xa230ae47c4e13b2484dcb9b3a50228ec1336fe59", amount: 999877, block: 25463236, type: "transfer" },
    { hash: "0xeee2fc2bfa1c726e289c319ddab29cff08b27d1596449a24d5b387b523050b12", ts: 1783216823, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x86e5568cd41188a0957d6ddf12d0a4194e122465", amount: 999877, block: 25463197, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 999877, received: 999877, sent: 0, txs: 1 },
    { wallet: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", net: 200056, received: 200056, sent: 0, txs: 1 },
    { wallet: "0xfb693ac2295a5c729b33aff6adfcc411aa9029d6", net: 63531, received: 63531, sent: 0, txs: 1 },
    { wallet: "0xd308fc4ec59cf2779eb75787810f05fc80fedb60", net: 23836, received: 23836, sent: 0, txs: 1 },
    { wallet: "0x2fb2c92431b35188007b2b1e0b0c717f9b7dae75", net: 21370, received: 21370, sent: 0, txs: 1 },
    { wallet: "0x2eae04d70f3c955e6c5a100c9779d6aae246410d", net: 12318, received: 12318, sent: 0, txs: 1 },
    { wallet: "0x8e116b4bf95b990b9240e84ad674bd10c0b0759c", net: 7123, received: 7123, sent: 0, txs: 1 },
    { wallet: "0x5151cc20b683f4492fb3ef70c2ea2d3d0480ed61", net: 3641, received: 3641, sent: 0, txs: 1 },
    { wallet: "0x192973a018630daac49cea4aeb84b152a77825e9", net: 3314, received: 3314, sent: 0, txs: 1 },
    { wallet: "0x2dca89a78a4c6b1b77baa27f650814d73e2d9cca", net: 2254, received: 2254, sent: 0, txs: 1 },
    { wallet: "0x5c9d1a6c9753e711db9b880b0404cd653a0e0032", net: 2055, received: 2055, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xe28d7502e70c9b45de8218b122a72a1eaf972695", net: 1222, received: 1222, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x07f3b652d1673b3f39933550bbbbd490c68fc4b2", net: 512, received: 512, sent: 0, txs: 1 },
    { wallet: "0xb8294f8f8f6619a299688f1ca12cb967fc9a6176", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 63, received: 78, sent: 15, txs: 5 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 9312, sent: 9312, txs: 10 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 19091, sent: 19091, txs: 12 },
    { wallet: "0x01c579618213c31ebdfdbd68bb14d71d8329b9dc", net: 0, received: 959, sent: 959, txs: 3 },
    { wallet: "0xa315a2fc9b7bd651e0ebaa134859bd8153ff12a7", net: 0, received: 959, sent: 959, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 23860, sent: 23860, txs: 8 },
    { wallet: "0x40a88150427465cca3911358edc96cf16f06e431", net: 0, received: 1250, sent: 1250, txs: 2 },
    { wallet: "0x6762e034ce6ff41b38a25a4d8e6ef0fa87199454", net: 0, received: 5342, sent: 5342, txs: 3 },
    { wallet: "0xf4741ff340dd0c961a417583e28b16ddd94f0d81", net: 0, received: 5342, sent: 5342, txs: 2 },
    { wallet: "0x08fd3a0ed40260dbb0f5fbccfb98cf2ffb6f8653", net: 0, received: 1781, sent: 1781, txs: 3 },
    { wallet: "0xf8f87935a9919db73a5c1706b9a287874245ae54", net: 0, received: 1781, sent: 1781, txs: 2 },
    { wallet: "0x163f3103de041d25464e2c8a4f8f3187ec1856e0", net: 0, received: 2857, sent: 2857, txs: 2 },
    { wallet: "0x8a722431c321be4f0ee127ba90d40efa92bdea32", net: 0, received: 2857, sent: 2857, txs: 2 },
    { wallet: "0xa230ae47c4e13b2484dcb9b3a50228ec1336fe59", net: 0, received: 999877, sent: 999877, txs: 2 },
    { wallet: "0x86e5568cd41188a0957d6ddf12d0a4194e122465", net: 0, received: 999877, sent: 999877, txs: 2 },
    { wallet: "0x43dd58078bc74a9aa233e6f699f08134dda45a6f", net: 0, received: 3044, sent: 3044, txs: 2 },
    { wallet: "0xd43026d607c66f4ecadd408867e8ba9af05f3875", net: 0, received: 23836, sent: 23836, txs: 2 },
    { wallet: "0x9164fac423074db84d3f451ec3c7637e255bde53", net: 0, received: 12318, sent: 12318, txs: 2 },
    { wallet: "0xa3222357a0eccf60c73606170be6c99adecb59b3", net: -2211, received: 61320, sent: 63531, txs: 2 },
    { wallet: "0x4cc75e430f2901cb7bcd13f75f7528d662b773b5", net: -4985, received: 15, sent: 5000, txs: 3 }
];

const WHALE_LABELS = {

};
