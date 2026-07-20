// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 20, 2026 at 01:54 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 138;
const WHALE_TOTAL_VOLUME      = 1661055;
const WHALE_BIGGEST_SINGLE    = 1520479;

const WHALE_TRANSFERS = [
    { hash: "0xb1e933f386e9bb408c8e646ff3f8f17c71368c80e08356b72347cd255f03e3f5", ts: 1784535779, from: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 1520479, block: 25572704, type: "transfer" },
    { hash: "0x163eaaf2f087819431924de61dea9e0d5dae65e5c3b85983b227af2887b2dfea", ts: 1784533667, from: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", to: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", amount: 140576, block: 25572529, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 1520479, received: 1520479, sent: 0, txs: 1 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 50173, received: 50173, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 50098, received: 50098, sent: 0, txs: 3 },
    { wallet: "0x6ccdc93dd3e792eeb7e4c9fafbc44d5d8fac1a1b", net: 44852, received: 44852, sent: 0, txs: 1 },
    { wallet: "0x91d05643e27b847f342296df8e862bd3c4568b5e", net: 29623, received: 29623, sent: 0, txs: 1 },
    { wallet: "0x279a2a69bf25427fe07e594af2e58a1810e9bde9", net: 23708, received: 23708, sent: 0, txs: 1 },
    { wallet: "0x9be5b8a7314552fa47feb1355cd5b4adc7bb7516", net: 21668, received: 21668, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 19945, received: 19957, sent: 12, txs: 3 },
    { wallet: "0xd846d1cac06490d0ca4b7e0f659ba46b40880a42", net: 17552, received: 17552, sent: 0, txs: 1 },
    { wallet: "0xd69f4cfa65b30ea11b0acdcd1e9ebd38b871363a", net: 15342, received: 15342, sent: 0, txs: 1 },
    { wallet: "0xd17cb60b2260477e580def6925e2c1049fb0d790", net: 14995, received: 14995, sent: 0, txs: 1 },
    { wallet: "0x3348f137e8981cc29e14b8ee85463876be26fff3", net: 6301, received: 6301, sent: 0, txs: 1 },
    { wallet: "0x4f3889331539ab2ed976dbaf67c8def36deeed15", net: 4932, received: 4932, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 4384, received: 4384, sent: 0, txs: 2 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 3425, received: 3425, sent: 0, txs: 1 },
    { wallet: "0x0761bacd001837594388349707bd398c02a7d7cf", net: 3425, received: 3425, sent: 0, txs: 1 },
    { wallet: "0xdc56fd9d0112f44c9c4944e544fd20987c8b3a8c", net: 2947, received: 2947, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x3ba632ae3870943a88e799c6c58edac86407a416", net: 1781, received: 1781, sent: 0, txs: 1 },
    { wallet: "0x6f2a4943267b1ec35cb8c17e57c5f6d9f7c57870", net: 1657, received: 1657, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 1585, received: 16580, sent: 14995, txs: 7 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x2144a7644e8cc88be18144dc7ee71e49f1d12c90", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x8e116b4bf95b990b9240e84ad674bd10c0b0759c", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 511, received: 511, sent: 0, txs: 8 },
    { wallet: "0x1ab2a7c6178467e8e2fd9c9a42d33024c8d6e1d0", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x7c876bdaa5c038e19f633714f622f6def949b102", net: 284, received: 62687, sent: 62404, txs: 3 },
    { wallet: "0x855992fbda59048156cb4bc75fad65d0bfa80f3b", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xb90c2fa273b8aa13e10c4baa65d45ca8a1975a73", net: 231, received: 231, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 63, received: 63, sent: 0, txs: 1 },
    { wallet: "0x87c914dfc0a5d130fc7c255e3b79dddb6c269f3a", net: 57, received: 57, sent: 0, txs: 1 },
    { wallet: "0x08f5cf1e548c79f3e6d0a449f54088d13079e058", net: 7, received: 7, sent: 0, txs: 1 },
    { wallet: "0x7831dbdbf4e75912ed2bca0b69eb7b57c0eceeae", net: 1, received: 21233, sent: 21232, txs: 5 },
    { wallet: "0xde7259893af7cdbc9fd806c6ba61d22d581d5667", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 59933, sent: 59933, txs: 16 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 111563, sent: 111563, txs: 11 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 111544, sent: 111544, txs: 6 },
    { wallet: "0xc19546d779445ebe498abb9b903a494c648427ed", net: 0, received: 28493, sent: 28493, txs: 4 },
    { wallet: "0xab9f6ac1c97b3233b9d22078a0cc003028e6a25f", net: 0, received: 28493, sent: 28493, txs: 2 },
    { wallet: "0x163f3103de041d25464e2c8a4f8f3187ec1856e0", net: 0, received: 2829, sent: 2829, txs: 2 },
    { wallet: "0x40a88150427465cca3911358edc96cf16f06e431", net: 0, received: 2829, sent: 2829, txs: 2 },
    { wallet: "0xad974874faf13c955c5ef4dd36cbd47343a7d973", net: 0, received: 7691, sent: 7691, txs: 2 },
    { wallet: "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae", net: 0, received: 11282, sent: 11282, txs: 9 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 9835, sent: 9835, txs: 6 },
    { wallet: "0x84cab37995229530d9e6e5cff2f8f4ebe4517d66", net: 0, received: 19950, sent: 19950, txs: 4 },
    { wallet: "0x337685fdab40d39bd02028545a4ffa7d287cc3e2", net: 0, received: 19, sent: 19, txs: 2 },
    { wallet: "0x3138a80ca8f943441678d074d83d25609357afb4", net: 0, received: 19, sent: 19, txs: 4 },
    { wallet: "0xa58bdd0ab5ebbb8dc425090fea8fd0ba969c1668", net: 0, received: 20920, sent: 20920, txs: 4 }
];

const WHALE_LABELS = {

};
