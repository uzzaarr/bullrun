// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 19, 2026 at 08:06 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 159;
const WHALE_TOTAL_VOLUME      = 1306970;
const WHALE_BIGGEST_SINGLE    = 377165;

const WHALE_TRANSFERS = [
    { hash: "0x15bd0099d3dfe506e93d9affc1774d74e0a826ffae9880e72c8343e1452d502d", ts: 1784421587, from: "0x11cc93fdd6997e9a83d613759c3316ea253b88b8", to: "0x9642b23ed1e01df1092b92641051881a322f5d4e", amount: 203409, block: 25563228, type: "transfer" },
    { hash: "0x475bebd3d0569c6b8484ebdf03e319f91ba6e62b3f262bef2dd746b666496f6e", ts: 1784421275, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x11cc93fdd6997e9a83d613759c3316ea253b88b8", amount: 203409, block: 25563202, type: "transfer" },
    { hash: "0x984d7ae13d23fc943696d0a6850d4a7bdc33b20f66181a579d0641d81ed56db6", ts: 1784394791, from: "0x9642b23ed1e01df1092b92641051881a322f5d4e", to: "0xacbee96f3a3ff3d6f7c3bbb6e39752cdcc717c6c", amount: 377165, block: 25561008, type: "transfer" },
    { hash: "0x25461edd93827a655af319d31497f7d4db6e34f658aab9273a8ba9c2c4a9a47d", ts: 1784388839, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0x7b22efbed1f0eaaa64c850c99490ecc067b85c58", amount: 105843, block: 25560512, type: "transfer" },
    { hash: "0x9572e461d59d0b3d4bc0ce65dbbb6070802497acfaa960d28c8c63cbdb7c3b1d", ts: 1784370323, from: "0xa0bba6d1620ce4cb59ff7ee0a1fe7ab1a484256a", to: "0x3c386b3d6499e09408d96424751d1667a87d9bc6", amount: 100000, block: 25558974, type: "transfer" },
    { hash: "0xa0e0819de36e9a400a83bd2f50a721f9ca864aa1fde39508414e73a72e67000c", ts: 1784368583, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0x42e800890a1a8edd09f130a16975ecb8f2c2939e", amount: 105644, block: 25558829, type: "transfer" },
    { hash: "0x2de7621ad810127b309bc30b5da109c47fb6585fd212bb752ba8fd59fa9c8bfc", ts: 1784368379, from: "0x07a33c3cbad439eaa857466a78ed3c308a42d03f", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 105750, block: 25558812, type: "transfer" },
    { hash: "0xae155a3d3282aa6e785c2aa336b8a3aa4df697e5acdbc1d5c4730190a0abc5ee", ts: 1784368331, from: "0xcbc5a4f9ddfe7ce43dabc876cb30fd6b61c0b3c9", to: "0x07a33c3cbad439eaa857466a78ed3c308a42d03f", amount: 105750, block: 25558808, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xacbee96f3a3ff3d6f7c3bbb6e39752cdcc717c6c", net: 377165, received: 377165, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 110216, received: 110216, sent: 0, txs: 7 },
    { wallet: "0x7b22efbed1f0eaaa64c850c99490ecc067b85c58", net: 105843, received: 105843, sent: 0, txs: 1 },
    { wallet: "0x42e800890a1a8edd09f130a16975ecb8f2c2939e", net: 105644, received: 105644, sent: 0, txs: 1 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 79889, received: 79889, sent: 0, txs: 8 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 59707, received: 59707, sent: 0, txs: 1 },
    { wallet: "0x9be5b8a7314552fa47feb1355cd5b4adc7bb7516", net: 27142, received: 27142, sent: 0, txs: 1 },
    { wallet: "0x80fd48b7777490e5c3c07f02bcfe94af2cb59223", net: 17808, received: 17808, sent: 0, txs: 1 },
    { wallet: "0xddd770e9d27e098b5e2d7335fed99a896ec89657", net: 17123, received: 17123, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 16571, received: 16571, sent: 0, txs: 1 },
    { wallet: "0x1ca5918f9329646f5a62f44f8c7b832b067d38d1", net: 16438, received: 16438, sent: 0, txs: 1 },
    { wallet: "0xd17cb60b2260477e580def6925e2c1049fb0d790", net: 14867, received: 14867, sent: 0, txs: 1 },
    { wallet: "0x04050182662e0066195adb49dc5362465069827a", net: 12329, received: 12329, sent: 0, txs: 1 },
    { wallet: "0x8f0e019b20b8c972a17c9726c80e35d30bc95294", net: 6308, received: 6308, sent: 0, txs: 1 },
    { wallet: "0x0ecb136fc3ddcdf682c7f5b7e564ca5a7e0f8559", net: 5753, received: 5753, sent: 0, txs: 1 },
    { wallet: "0xad0bd75cd30241a1f0936459be4ca3509d878e6b", net: 3818, received: 3818, sent: 0, txs: 1 },
    { wallet: "0x0f36eb8f227aa28e2eb2705724233addabd61e15", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0xdc56fd9d0112f44c9c4944e544fd20987c8b3a8c", net: 3070, received: 3070, sent: 0, txs: 1 },
    { wallet: "0x5532d65385e664eef604976354608a9dc4d9ae7c", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x4005d4b50140bcf6221b3ae8df455e10600a02c0", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 304, received: 304, sent: 0, txs: 10 },
    { wallet: "0x39faf1de461849163e390d0a57d1eaa632064a49", net: 284, received: 284, sent: 0, txs: 1 },
    { wallet: "0xf4fa0b0bfb3f7a4adc0deed435b29534e23791a4", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xf99c2a4b5ec794b209ece4e2b1c47072f22020a8", net: 147, received: 147, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x855992fbda59048156cb4bc75fad65d0bfa80f3b", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
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
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 10355, sent: 10355, txs: 12 },
    { wallet: "0x10916b18ce6deef279f0ee66fab6b6c0e3461b78", net: 0, received: 759, sent: 759, txs: 4 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 9529, sent: 9529, txs: 8 },
    { wallet: "0x076c05840a58d4ee99abffe77fadea2bf7c06c4d", net: 0, received: 4932, sent: 4932, txs: 3 },
    { wallet: "0x7ac0e699a2eea960e2171b469ca560864db2c9f8", net: 0, received: 3154, sent: 3154, txs: 2 },
    { wallet: "0xc7850ce575d049d8354137803efec4c92ff07742", net: 0, received: 3154, sent: 3154, txs: 2 },
    { wallet: "0x3c2d4c38e1e28d7f09409c196f4e6658ce83060f", net: 0, received: 3288, sent: 3288, txs: 6 },
    { wallet: "0x5987d62c93f864fff531f79c1f6c8da51eaffce2", net: 0, received: 3288, sent: 3288, txs: 3 },
    { wallet: "0x4a04c878922081427181db36e064475bc0a435fa", net: 0, received: 4061, sent: 4061, txs: 2 }
];

const WHALE_LABELS = {

};
