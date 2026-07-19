// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 19, 2026 at 01:03 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 155;
const WHALE_TOTAL_VOLUME      = 3287086;
const WHALE_BIGGEST_SINGLE    = 1835616;

const WHALE_TRANSFERS = [
    { hash: "0xe697f8566e9f55e9097253c89e5d1ba4346d753d03fb4f28608118497b9823a2", ts: 1784455799, from: "0x8a5d398abc6fd50af88f10cfa7e4c197e793fc69", to: "0x034b46cb5975d85aecafe2a37c6d88895c92bd87", amount: 1835616, block: 25566066, type: "transfer" },
    { hash: "0x41728f90f1577c3a1ea84a16c1f0bd9abe7017ee360650243e7e2cb85811a382", ts: 1784455619, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x8a5d398abc6fd50af88f10cfa7e4c197e793fc69", amount: 561644, block: 25566051, type: "transfer" },
    { hash: "0x15bd0099d3dfe506e93d9affc1774d74e0a826ffae9880e72c8343e1452d502d", ts: 1784421587, from: "0x11cc93fdd6997e9a83d613759c3316ea253b88b8", to: "0x9642b23ed1e01df1092b92641051881a322f5d4e", amount: 203409, block: 25563228, type: "transfer" },
    { hash: "0x475bebd3d0569c6b8484ebdf03e319f91ba6e62b3f262bef2dd746b666496f6e", ts: 1784421275, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x11cc93fdd6997e9a83d613759c3316ea253b88b8", amount: 203409, block: 25563202, type: "transfer" },
    { hash: "0x984d7ae13d23fc943696d0a6850d4a7bdc33b20f66181a579d0641d81ed56db6", ts: 1784394791, from: "0x9642b23ed1e01df1092b92641051881a322f5d4e", to: "0xacbee96f3a3ff3d6f7c3bbb6e39752cdcc717c6c", amount: 377165, block: 25561008, type: "transfer" },
    { hash: "0x25461edd93827a655af319d31497f7d4db6e34f658aab9273a8ba9c2c4a9a47d", ts: 1784388839, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0x7b22efbed1f0eaaa64c850c99490ecc067b85c58", amount: 105843, block: 25560512, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x034b46cb5975d85aecafe2a37c6d88895c92bd87", net: 1835616, received: 1835616, sent: 0, txs: 1 },
    { wallet: "0xacbee96f3a3ff3d6f7c3bbb6e39752cdcc717c6c", net: 377165, received: 377165, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 130144, received: 130144, sent: 0, txs: 8 },
    { wallet: "0x7b22efbed1f0eaaa64c850c99490ecc067b85c58", net: 105843, received: 105843, sent: 0, txs: 1 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 39982, received: 39982, sent: 0, txs: 4 },
    { wallet: "0xddd770e9d27e098b5e2d7335fed99a896ec89657", net: 17123, received: 17123, sent: 0, txs: 1 },
    { wallet: "0x1ca5918f9329646f5a62f44f8c7b832b067d38d1", net: 16438, received: 16438, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 5753, received: 5753, sent: 0, txs: 1 },
    { wallet: "0x0ecb136fc3ddcdf682c7f5b7e564ca5a7e0f8559", net: 5753, received: 5753, sent: 0, txs: 1 },
    { wallet: "0xad0bd75cd30241a1f0936459be4ca3509d878e6b", net: 3818, received: 3818, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x2d04ec9565f9f8841bc9e32c0fdec20c7eea783e", net: 1657, received: 1657, sent: 0, txs: 1 },
    { wallet: "0xc1c1fdadd3f76ff4e34f6f3f0b00f4db9b539a8f", net: 1657, received: 1657, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 306, received: 306, sent: 0, txs: 13 },
    { wallet: "0x39faf1de461849163e390d0a57d1eaa632064a49", net: 284, received: 284, sent: 0, txs: 1 },
    { wallet: "0xf4fa0b0bfb3f7a4adc0deed435b29534e23791a4", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xf99c2a4b5ec794b209ece4e2b1c47072f22020a8", net: 147, received: 147, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xbb2f922edc5f7e28114061366838ff50e3225a84", net: 3, received: 3, sent: 0, txs: 1 },
    { wallet: "0xe6b13eddb259d734ee63280670eee43dbc6f6404", net: 1, received: 1, sent: 0, txs: 2 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 14849, sent: 14849, txs: 11 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 15676, sent: 15676, txs: 14 },
    { wallet: "0x6762e034ce6ff41b38a25a4d8e6ef0fa87199454", net: 0, received: 5342, sent: 5342, txs: 3 },
    { wallet: "0xf4741ff340dd0c961a417583e28b16ddd94f0d81", net: 0, received: 5342, sent: 5342, txs: 2 },
    { wallet: "0x84cab37995229530d9e6e5cff2f8f4ebe4517d66", net: 0, received: 130144, sent: 130144, txs: 29 },
    { wallet: "0x4cbf822cf0dddc3ebacb5d25d77fb4e05ddef2a4", net: 0, received: 62740, sent: 62739, txs: 5 },
    { wallet: "0xc10ee9031f2a0b84766a86b55a8d90f357910fb4", net: 0, received: 97, sent: 97, txs: 2 },
    { wallet: "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae", net: 0, received: 4306, sent: 4306, txs: 5 },
    { wallet: "0x89c6340b1a1f4b25d36cd8b063d49045caf3f818", net: 0, received: 97, sent: 97, txs: 2 },
    { wallet: "0x3de0d70dedf741f77abb5894ca24c8e97c265d4b", net: 0, received: 822, sent: 822, txs: 2 },
    { wallet: "0xa9e70d8f1605d6e8ed90458a78d132d757c33089", net: 0, received: 21132, sent: 21132, txs: 9 },
    { wallet: "0xbd3b62d7a8e8ef0eda3d1b427ae864d7ec3e8a74", net: 0, received: 4915, sent: 4915, txs: 2 },
    { wallet: "0xc26ff22e2f18f54f82f74593529a27347a5a56ff", net: 0, received: 4932, sent: 4932, txs: 3 },
    { wallet: "0xd5e58030831ff4f4728c3a7a23600c66d9e7f13e", net: 0, received: 10822, sent: 10822, txs: 2 },
    { wallet: "0xbbae39e17e0f2b016d491ba2eb9cdf80d3b576d3", net: 0, received: 954, sent: 954, txs: 2 },
    { wallet: "0x01c579618213c31ebdfdbd68bb14d71d8329b9dc", net: 0, received: 959, sent: 959, txs: 3 },
    { wallet: "0xa315a2fc9b7bd651e0ebaa134859bd8153ff12a7", net: 0, received: 959, sent: 959, txs: 2 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 0, received: 274, sent: 274, txs: 2 },
    { wallet: "0x20caeb73d8452fc145aa185d135ca6039e23526e", net: 0, received: 2729, sent: 2729, txs: 2 },
    { wallet: "0x2d84a18d4d1356420f3115e4d11e26680671c62d", net: 0, received: 2740, sent: 2740, txs: 3 },
    { wallet: "0x3a0a751d298851543cd0e3ac0e4539aec7baafa5", net: 0, received: 13655, sent: 13655, txs: 2 },
    { wallet: "0x44926d92979d022991a31ed8ba12580bb9edaac8", net: 0, received: 13699, sent: 13699, txs: 3 },
    { wallet: "0x747dd095f8b63a66d7c31f41bb22afb698224e36", net: 0, received: 13699, sent: 13699, txs: 2 },
    { wallet: "0x11cc93fdd6997e9a83d613759c3316ea253b88b8", net: 0, received: 203409, sent: 203409, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 826, sent: 826, txs: 4 },
    { wallet: "0x10916b18ce6deef279f0ee66fab6b6c0e3461b78", net: 0, received: 759, sent: 759, txs: 4 }
];

const WHALE_LABELS = {

};
