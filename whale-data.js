// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 21, 2026 at 02:04 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 197;
const WHALE_TOTAL_VOLUME      = 19551015;
const WHALE_BIGGEST_SINGLE    = 5729045;

const WHALE_TRANSFERS = [
    { hash: "0x9a0f5fb88ec9b81cfa292a9411d922ff2ada1c7ca4f96e75359c65281c87b801", ts: 1784575859, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", amount: 124853, block: 25576027, type: "buy" },
    { hash: "0xbb7adcee31a5f0ce856bc448439e458c70d11fb05ef9ee63b13b8b62f64564f8", ts: 1784575847, from: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 127414, block: 25576026, type: "sell" },
    { hash: "0xbb7adcee31a5f0ce856bc448439e458c70d11fb05ef9ee63b13b8b62f64564f8", ts: 1784575847, from: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", to: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", amount: 175734, block: 25576026, type: "transfer" },
    { hash: "0xbb7adcee31a5f0ce856bc448439e458c70d11fb05ef9ee63b13b8b62f64564f8", ts: 1784575847, from: "0xafde5429338b81a1705b166d24ef4d09dafd8e96", to: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", amount: 175734, block: 25576026, type: "transfer" },
    { hash: "0xf5b4b131f4129bea27e1922dd92e4948e83c01fd67fd8398fe9f13ca9a907c24", ts: 1784575295, from: "0x9cb06a92c580e47fde4da8385ec78435b1baf75c", to: "0xafde5429338b81a1705b166d24ef4d09dafd8e96", amount: 110548, block: 25575980, type: "transfer" },
    { hash: "0x44bca85e0f84daf79141a172ddebc8be3ee7d38fd389a0d18dd1223bb61b084e", ts: 1784561195, from: "0xc079bfa54f348199ba51b2717595fe24e96f1542", to: "0x6912d024e2b88136c5a586e77b092199963b6083", amount: 4292487, block: 25574812, type: "transfer" },
    { hash: "0x44bca85e0f84daf79141a172ddebc8be3ee7d38fd389a0d18dd1223bb61b084e", ts: 1784561195, from: "0x15fcdea9c9ebb29740c5a821a1167485eb2107ef", to: "0xc079bfa54f348199ba51b2717595fe24e96f1542", amount: 4292487, block: 25574812, type: "transfer" },
    { hash: "0xd4b144d737ee47b49e3e25062fc58a41fe6a4ac30af0dd3ed8455e3838fb8c41", ts: 1784558435, from: "0xc079bfa54f348199ba51b2717595fe24e96f1542", to: "0x6912d024e2b88136c5a586e77b092199963b6083", amount: 1430829, block: 25574583, type: "transfer" },
    { hash: "0xd4b144d737ee47b49e3e25062fc58a41fe6a4ac30af0dd3ed8455e3838fb8c41", ts: 1784558435, from: "0x15fcdea9c9ebb29740c5a821a1167485eb2107ef", to: "0xc079bfa54f348199ba51b2717595fe24e96f1542", amount: 1430829, block: 25574583, type: "transfer" },
    { hash: "0x89b0beeb7940396af1c387f03267b0e51b7844f190ba46e0ea069e62990324ef", ts: 1784558363, from: "0xa73072adc6c34859426fcc29bc6ca2cac07c93c3", to: "0x15fcdea9c9ebb29740c5a821a1167485eb2107ef", amount: 5729045, block: 25574577, type: "transfer" },
    { hash: "0xb1e933f386e9bb408c8e646ff3f8f17c71368c80e08356b72347cd255f03e3f5", ts: 1784535779, from: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 1520479, block: 25572704, type: "transfer" },
    { hash: "0x163eaaf2f087819431924de61dea9e0d5dae65e5c3b85983b227af2887b2dfea", ts: 1784533667, from: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", to: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", amount: 140576, block: 25572529, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 5770822, received: 5770834, sent: 12, txs: 6 },
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 1520479, received: 1520479, sent: 0, txs: 1 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 175026, received: 175026, sent: 0, txs: 2 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 50098, received: 50098, sent: 0, txs: 3 },
    { wallet: "0x9f6a44b7ff61580b9ec063fb30420729fee79202", net: 36849, received: 36849, sent: 0, txs: 1 },
    { wallet: "0x91d05643e27b847f342296df8e862bd3c4568b5e", net: 29623, received: 29623, sent: 0, txs: 1 },
    { wallet: "0xed7d4d97424f80f36a0b23ff62f2514c8f52c93c", net: 26849, received: 26849, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 23708, received: 23708, sent: 0, txs: 1 },
    { wallet: "0xd846d1cac06490d0ca4b7e0f659ba46b40880a42", net: 17552, received: 17552, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 7691, received: 7691, sent: 0, txs: 1 },
    { wallet: "0x04c7b4e2db71b2abffe4f2131cf2754533cf32da", net: 6698, received: 6698, sent: 0, txs: 2 },
    { wallet: "0x82d9a407f99a95db4671e7021d625cbd0787a407", net: 5729, received: 5729, sent: 0, txs: 3 },
    { wallet: "0x6871656afb2460f25db9e2c766574e42c680beaf", net: 4521, received: 4521, sent: 0, txs: 1 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 3425, received: 3425, sent: 0, txs: 1 },
    { wallet: "0x0761bacd001837594388349707bd398c02a7d7cf", net: 3425, received: 3425, sent: 0, txs: 1 },
    { wallet: "0xdc56fd9d0112f44c9c4944e544fd20987c8b3a8c", net: 2947, received: 2947, sent: 0, txs: 1 },
    { wallet: "0x5afdfc44e2dfa3e3940f479ac23097103387c23a", net: 2561, received: 2561, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x3ba632ae3870943a88e799c6c58edac86407a416", net: 1781, received: 1781, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1369, received: 1369, sent: 0, txs: 12 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x2144a7644e8cc88be18144dc7ee71e49f1d12c90", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x747dd095f8b63a66d7c31f41bb22afb698224e36", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x8e116b4bf95b990b9240e84ad674bd10c0b0759c", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x1ab2a7c6178467e8e2fd9c9a42d33024c8d6e1d0", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x855992fbda59048156cb4bc75fad65d0bfa80f3b", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xb90c2fa273b8aa13e10c4baa65d45ca8a1975a73", net: 231, received: 231, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 63, received: 63, sent: 0, txs: 1 },
    { wallet: "0x7831dbdbf4e75912ed2bca0b69eb7b57c0eceeae", net: 1, received: 21233, sent: 21232, txs: 5 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 16424, sent: 16424, txs: 10 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 348557, sent: 348557, txs: 22 },
    { wallet: "0x10916b18ce6deef279f0ee66fab6b6c0e3461b78", net: 0, received: 1002, sent: 1002, txs: 4 },
    { wallet: "0x3c9108700724d9d96cff2ac8979d6ad2a8d469ae", net: 0, received: 411, sent: 411, txs: 2 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 0, received: 274, sent: 274, txs: 2 },
    { wallet: "0x0ce2b366e425d7e53904ea61cfb2ea03b06283f7", net: 0, received: 1233, sent: 1233, txs: 3 },
    { wallet: "0xa0952edc243077c05148828cc5432c37486858c3", net: 0, received: 1233, sent: 1233, txs: 2 },
    { wallet: "0x163f3103de041d25464e2c8a4f8f3187ec1856e0", net: 0, received: 3330, sent: 3330, txs: 4 },
    { wallet: "0x0c0d58d78aae69a25433876c86e1f3c6474d3f75", net: 0, received: 5753, sent: 5753, txs: 3 },
    { wallet: "0x4c5d7a56235c957feaf5ffdf52761dbee80ccc22", net: 0, received: 5753, sent: 5753, txs: 2 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 139873, sent: 139873, txs: 35 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 340074, sent: 340074, txs: 24 },
    { wallet: "0xafde5429338b81a1705b166d24ef4d09dafd8e96", net: 0, received: 198219, sent: 198219, txs: 8 },
    { wallet: "0x8d47cd29cb5cce150bba43a0eb0a478c99313581", net: 0, received: 32877, sent: 32877, txs: 2 }
];

const WHALE_LABELS = {

};
