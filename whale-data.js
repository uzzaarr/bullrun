// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 19, 2026 at 06:58 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 118;
const WHALE_TOTAL_VOLUME      = 2804078;
const WHALE_BIGGEST_SINGLE    = 1835616;

const WHALE_TRANSFERS = [
    { hash: "0xe697f8566e9f55e9097253c89e5d1ba4346d753d03fb4f28608118497b9823a2", ts: 1784455799, from: "0x8a5d398abc6fd50af88f10cfa7e4c197e793fc69", to: "0x034b46cb5975d85aecafe2a37c6d88895c92bd87", amount: 1835616, block: 25566066, type: "transfer" },
    { hash: "0x41728f90f1577c3a1ea84a16c1f0bd9abe7017ee360650243e7e2cb85811a382", ts: 1784455619, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x8a5d398abc6fd50af88f10cfa7e4c197e793fc69", amount: 561644, block: 25566051, type: "transfer" },
    { hash: "0x15bd0099d3dfe506e93d9affc1774d74e0a826ffae9880e72c8343e1452d502d", ts: 1784421587, from: "0x11cc93fdd6997e9a83d613759c3316ea253b88b8", to: "0x9642b23ed1e01df1092b92641051881a322f5d4e", amount: 203409, block: 25563228, type: "transfer" },
    { hash: "0x475bebd3d0569c6b8484ebdf03e319f91ba6e62b3f262bef2dd746b666496f6e", ts: 1784421275, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x11cc93fdd6997e9a83d613759c3316ea253b88b8", amount: 203409, block: 25563202, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x034b46cb5975d85aecafe2a37c6d88895c92bd87", net: 1835616, received: 1835616, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 203409, received: 203409, sent: 0, txs: 1 },
    { wallet: "0x6ccdc93dd3e792eeb7e4c9fafbc44d5d8fac1a1b", net: 44852, received: 44852, sent: 0, txs: 1 },
    { wallet: "0x9be5b8a7314552fa47feb1355cd5b4adc7bb7516", net: 21668, received: 21668, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 19927, received: 19927, sent: 0, txs: 1 },
    { wallet: "0x7c876bdaa5c038e19f633714f622f6def949b102", net: 17835, received: 62687, sent: 44852, txs: 2 },
    { wallet: "0x1ca5918f9329646f5a62f44f8c7b832b067d38d1", net: 16438, received: 16438, sent: 0, txs: 1 },
    { wallet: "0x1030f7269e44feb2c9a9e202edf940658d3100c3", net: 15342, received: 15342, sent: 0, txs: 1 },
    { wallet: "0xd17cb60b2260477e580def6925e2c1049fb0d790", net: 14995, received: 14995, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 14782, received: 29779, sent: 14996, txs: 11 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 5753, received: 5753, sent: 0, txs: 1 },
    { wallet: "0x0ecb136fc3ddcdf682c7f5b7e564ca5a7e0f8559", net: 5753, received: 5753, sent: 0, txs: 1 },
    { wallet: "0xdc56fd9d0112f44c9c4944e544fd20987c8b3a8c", net: 2908, received: 2908, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x6f2a4943267b1ec35cb8c17e57c5f6d9f7c57870", net: 1657, received: 1657, sent: 0, txs: 1 },
    { wallet: "0x2d04ec9565f9f8841bc9e32c0fdec20c7eea783e", net: 1657, received: 1657, sent: 0, txs: 1 },
    { wallet: "0xc1c1fdadd3f76ff4e34f6f3f0b00f4db9b539a8f", net: 1657, received: 1657, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x1ab2a7c6178467e8e2fd9c9a42d33024c8d6e1d0", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 283, received: 283, sent: 0, txs: 12 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x87c914dfc0a5d130fc7c255e3b79dddb6c269f3a", net: 57, received: 57, sent: 0, txs: 1 },
    { wallet: "0x08f5cf1e548c79f3e6d0a449f54088d13079e058", net: 7, received: 7, sent: 0, txs: 1 },
    { wallet: "0xbb2f922edc5f7e28114061366838ff50e3225a84", net: 3, received: 3, sent: 0, txs: 1 },
    { wallet: "0xde7259893af7cdbc9fd806c6ba61d22d581d5667", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0xe6b13eddb259d734ee63280670eee43dbc6f6404", net: 1, received: 1, sent: 0, txs: 2 },
    { wallet: "0xedf011639d656a5c5e39acc5339b33d2e4458c42", net: 0, received: 817, sent: 817, txs: 2 },
    { wallet: "0x950618712a5cd5a221c8a95930947cb76576eb76", net: 0, received: 822, sent: 822, txs: 3 },
    { wallet: "0x72567535804795179d361d42757fdce34f776d05", net: 0, received: 1657, sent: 1657, txs: 2 },
    { wallet: "0x2b95e0d432b0e3ec99bd76f9b287e3accf560a10", net: 0, received: 14995, sent: 14995, txs: 2 },
    { wallet: "0x07d6e47bbc29fa6c1fef4b09996e58c8311b0d50", net: 0, received: 62687, sent: 62687, txs: 2 },
    { wallet: "0x920c4692f06eb413bfeefcefc165ac45abaa3fd4", net: 0, received: 1855, sent: 1855, txs: 2 },
    { wallet: "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae", net: 0, received: 3458, sent: 3458, txs: 8 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 2739, sent: 2739, txs: 8 },
    { wallet: "0x8dccc51115652e6231776b1a9bf82a98224e6144", net: 0, received: 1440, sent: 1440, txs: 2 },
    { wallet: "0xc10ee9031f2a0b84766a86b55a8d90f357910fb4", net: 0, received: 1546, sent: 1546, txs: 5 },
    { wallet: "0xad49d021263fcf47b416561d032c4910a462d226", net: 0, received: 3412, sent: 3412, txs: 2 },
    { wallet: "0x2fef680e707a97a7eb3839ed539308403cd7e43d", net: 0, received: 3425, sent: 3425, txs: 3 },
    { wallet: "0x523f4ab9e8154e94e5da6b9e416ed16918d9bf1b", net: 0, received: 3425, sent: 3425, txs: 2 },
    { wallet: "0xfba9bcac82f9e78d477c9445efa6e3b0eeef0e7a", net: 0, received: 21668, sent: 21668, txs: 2 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 10231, sent: 10231, txs: 5 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 11057, sent: 11057, txs: 8 },
    { wallet: "0x6762e034ce6ff41b38a25a4d8e6ef0fa87199454", net: 0, received: 5342, sent: 5342, txs: 3 },
    { wallet: "0xf4741ff340dd0c961a417583e28b16ddd94f0d81", net: 0, received: 5342, sent: 5342, txs: 2 },
    { wallet: "0x84cab37995229530d9e6e5cff2f8f4ebe4517d66", net: 0, received: 19927, sent: 19927, txs: 4 },
    { wallet: "0x4cbf822cf0dddc3ebacb5d25d77fb4e05ddef2a4", net: 0, received: 62740, sent: 62739, txs: 5 },
    { wallet: "0x89c6340b1a1f4b25d36cd8b063d49045caf3f818", net: 0, received: 97, sent: 97, txs: 2 },
    { wallet: "0x3de0d70dedf741f77abb5894ca24c8e97c265d4b", net: 0, received: 822, sent: 822, txs: 2 },
    { wallet: "0xa9e70d8f1605d6e8ed90458a78d132d757c33089", net: 0, received: 21132, sent: 21132, txs: 9 }
];

const WHALE_LABELS = {

};
