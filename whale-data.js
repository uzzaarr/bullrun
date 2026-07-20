// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 20, 2026 at 08:47 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 100;
const WHALE_TOTAL_VOLUME      = 4058315;
const WHALE_BIGGEST_SINGLE    = 1835616;

const WHALE_TRANSFERS = [
    { hash: "0xb1e933f386e9bb408c8e646ff3f8f17c71368c80e08356b72347cd255f03e3f5", ts: 1784535779, from: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 1520479, block: 25572704, type: "transfer" },
    { hash: "0x163eaaf2f087819431924de61dea9e0d5dae65e5c3b85983b227af2887b2dfea", ts: 1784533667, from: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", to: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", amount: 140576, block: 25572529, type: "transfer" },
    { hash: "0xe697f8566e9f55e9097253c89e5d1ba4346d753d03fb4f28608118497b9823a2", ts: 1784455799, from: "0x8a5d398abc6fd50af88f10cfa7e4c197e793fc69", to: "0x034b46cb5975d85aecafe2a37c6d88895c92bd87", amount: 1835616, block: 25566066, type: "transfer" },
    { hash: "0x41728f90f1577c3a1ea84a16c1f0bd9abe7017ee360650243e7e2cb85811a382", ts: 1784455619, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x8a5d398abc6fd50af88f10cfa7e4c197e793fc69", amount: 561644, block: 25566051, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x034b46cb5975d85aecafe2a37c6d88895c92bd87", net: 1835616, received: 1835616, sent: 0, txs: 1 },
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 1520479, received: 1520479, sent: 0, txs: 1 },
    { wallet: "0x6ccdc93dd3e792eeb7e4c9fafbc44d5d8fac1a1b", net: 44852, received: 44852, sent: 0, txs: 1 },
    { wallet: "0x91d05643e27b847f342296df8e862bd3c4568b5e", net: 29623, received: 29623, sent: 0, txs: 1 },
    { wallet: "0x9be5b8a7314552fa47feb1355cd5b4adc7bb7516", net: 21668, received: 21668, sent: 0, txs: 1 },
    { wallet: "0x7831dbdbf4e75912ed2bca0b69eb7b57c0eceeae", net: 21233, received: 21233, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 19922, received: 19934, sent: 12, txs: 3 },
    { wallet: "0x7c876bdaa5c038e19f633714f622f6def949b102", net: 17835, received: 62687, sent: 44852, txs: 2 },
    { wallet: "0xd69f4cfa65b30ea11b0acdcd1e9ebd38b871363a", net: 15342, received: 15342, sent: 0, txs: 1 },
    { wallet: "0x1030f7269e44feb2c9a9e202edf940658d3100c3", net: 15342, received: 15342, sent: 0, txs: 1 },
    { wallet: "0xd17cb60b2260477e580def6925e2c1049fb0d790", net: 14995, received: 14995, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 9000, received: 9000, sent: 0, txs: 2 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 6575, received: 6575, sent: 0, txs: 2 },
    { wallet: "0x3348f137e8981cc29e14b8ee85463876be26fff3", net: 6301, received: 6301, sent: 0, txs: 1 },
    { wallet: "0x4f3889331539ab2ed976dbaf67c8def36deeed15", net: 4932, received: 4932, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 4384, received: 4384, sent: 0, txs: 2 },
    { wallet: "0x0761bacd001837594388349707bd398c02a7d7cf", net: 3425, received: 3425, sent: 0, txs: 1 },
    { wallet: "0xdc56fd9d0112f44c9c4944e544fd20987c8b3a8c", net: 2908, received: 2908, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x3ba632ae3870943a88e799c6c58edac86407a416", net: 1781, received: 1781, sent: 0, txs: 1 },
    { wallet: "0x6f2a4943267b1ec35cb8c17e57c5f6d9f7c57870", net: 1657, received: 1657, sent: 0, txs: 1 },
    { wallet: "0x2d04ec9565f9f8841bc9e32c0fdec20c7eea783e", net: 1657, received: 1657, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x1ab2a7c6178467e8e2fd9c9a42d33024c8d6e1d0", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 274, received: 274, sent: 0, txs: 2 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 144, received: 144, sent: 0, txs: 5 },
    { wallet: "0x87c914dfc0a5d130fc7c255e3b79dddb6c269f3a", net: 57, received: 57, sent: 0, txs: 1 },
    { wallet: "0x08f5cf1e548c79f3e6d0a449f54088d13079e058", net: 7, received: 7, sent: 0, txs: 1 },
    { wallet: "0x9631288f4050f7cfbf77b77f8540decf6cfc7012", net: 5, received: 12, sent: 7, txs: 3 },
    { wallet: "0xbb2f922edc5f7e28114061366838ff50e3225a84", net: 3, received: 3, sent: 0, txs: 1 },
    { wallet: "0xde7259893af7cdbc9fd806c6ba61d22d581d5667", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0xe6b13eddb259d734ee63280670eee43dbc6f6404", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0x41a513c7a413d60f7cdad1e94541f5f93bcc3696", net: 0, received: 9000, sent: 9000, txs: 4 },
    { wallet: "0x651b2ba365a5293dddc7343b2fbf0e5f8271426b", net: 0, received: 9000, sent: 9000, txs: 3 },
    { wallet: "0xd9695b20bb61cb0c4abd91922a1b696743ccaf66", net: 0, received: 9000, sent: 9000, txs: 2 },
    { wallet: "0xc079bfa54f348199ba51b2717595fe24e96f1542", net: 0, received: 7, sent: 7, txs: 4 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 11137, sent: 11137, txs: 6 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 11137, sent: 11137, txs: 4 },
    { wallet: "0x66a9893cc07d91d95644aedd05d03f95e1dba8af", net: 0, received: 18904, sent: 18904, txs: 2 },
    { wallet: "0x018189e3dceb9c1842fbb54dde69ca672fa32878", net: 0, received: 1363, sent: 1363, txs: 2 },
    { wallet: "0x2d84a18d4d1356420f3115e4d11e26680671c62d", net: 0, received: 1370, sent: 1370, txs: 3 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 0, received: 1370, sent: 1370, txs: 2 },
    { wallet: "0xedf011639d656a5c5e39acc5339b33d2e4458c42", net: 0, received: 817, sent: 817, txs: 2 },
    { wallet: "0x950618712a5cd5a221c8a95930947cb76576eb76", net: 0, received: 822, sent: 822, txs: 3 },
    { wallet: "0x72567535804795179d361d42757fdce34f776d05", net: 0, received: 1657, sent: 1657, txs: 2 },
    { wallet: "0x2b95e0d432b0e3ec99bd76f9b287e3accf560a10", net: 0, received: 14995, sent: 14995, txs: 2 },
    { wallet: "0x07d6e47bbc29fa6c1fef4b09996e58c8311b0d50", net: 0, received: 62687, sent: 62687, txs: 2 },
    { wallet: "0x920c4692f06eb413bfeefcefc165ac45abaa3fd4", net: 0, received: 1855, sent: 1855, txs: 2 },
    { wallet: "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae", net: 0, received: 3458, sent: 3458, txs: 8 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 1913, sent: 1913, txs: 4 }
];

const WHALE_LABELS = {

};
