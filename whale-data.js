// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 27, 2026 at 02:23 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 105;
const WHALE_TOTAL_VOLUME      = 2148239;
const WHALE_BIGGEST_SINGLE    = 505427;

const WHALE_TRANSFERS = [
    { hash: "0x0b9207351346c133d8d573720ade17577e50072c6a5c87ab47f440e5d2bc0111", ts: 1785060947, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 505427, block: 25616307, type: "transfer" },
    { hash: "0x15c89242934798af62ff3595bbf3498ad3a0299a962a4250266a1d8e86da593e", ts: 1785060743, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 505427, block: 25616290, type: "transfer" },
    { hash: "0xdf60c2c7dc1365add251c2b93ae1d250c3f3a07892a8f8c58783f6aa23488c0d", ts: 1785060539, from: "0x6068146744760fef7ce41e15ce73bfcb85224db9", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 499248, block: 25616274, type: "transfer" },
    { hash: "0xbca6684ec65cd0360ab6013bfa5a7b79fff6056d78b591630f33101ad555ece9", ts: 1785060479, from: "0x6ba9f986d7ab9b884d356679e8af4ba5969415fa", to: "0x6068146744760fef7ce41e15ce73bfcb85224db9", amount: 499248, block: 25616269, type: "transfer" },
    { hash: "0x3227ecf348aa2594f645841c4527b40074ee31cc4d63bde700d513720adb4d03", ts: 1785060311, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x6ba9f986d7ab9b884d356679e8af4ba5969415fa", amount: 138889, block: 25616255, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 505427, received: 505427, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 79299, received: 585028, sent: 505728, txs: 8 },
    { wallet: "0x358bae996e9a172cc7f4a24bedd5cba5e6bc0944", net: 28767, received: 28767, sent: 0, txs: 1 },
    { wallet: "0x35df393f608a4679fee86c2798754972362b0767", net: 22877, received: 22877, sent: 0, txs: 1 },
    { wallet: "0x9be5b8a7314552fa47feb1355cd5b4adc7bb7516", net: 21667, received: 21667, sent: 0, txs: 1 },
    { wallet: "0x303b1bce3fa46bb73bd8a03d592720771b6a144d", net: 8219, received: 8219, sent: 0, txs: 1 },
    { wallet: "0xc6ecadb707c7f1ec9c99aaff05cf104db51887aa", net: 5883, received: 5883, sent: 0, txs: 1 },
    { wallet: "0x50e8e34147929096ab69b3316ac0f1adf8b684c1", net: 4932, received: 4932, sent: 0, txs: 1 },
    { wallet: "0x561e6326076713347d2bb3d3adb4e45a65009580", net: 3973, received: 3973, sent: 0, txs: 1 },
    { wallet: "0x71ebcff718d88d363622dcc4d4d7a6e75f370139", net: 3699, received: 3699, sent: 0, txs: 1 },
    { wallet: "0xc26ff22e2f18f54f82f74593529a27347a5a56ff", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1580, received: 1580, sent: 0, txs: 13 },
    { wallet: "0x2a76a5be3bca8200f7810600ed9201103746810b", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0xdd7042708cb97a03dec630d0415e7fd424401709", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x10916b18ce6deef279f0ee66fab6b6c0e3461b78", net: 1, received: 987, sent: 986, txs: 4 },
    { wallet: "0x6ecac0b40c73a8a776d8e0cd304440ab952b3c64", net: 0, received: 3973, sent: 3973, txs: 2 },
    { wallet: "0x15bc1ce2a361844e09037d9f60ba3d8dbcf7eea6", net: 0, received: 1363, sent: 1363, txs: 2 },
    { wallet: "0x2d84a18d4d1356420f3115e4d11e26680671c62d", net: 0, received: 1370, sent: 1370, txs: 3 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 0, received: 1370, sent: 1370, txs: 2 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 24514, sent: 24514, txs: 11 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 24514, sent: 24514, txs: 10 },
    { wallet: "0x44587972a298668b47e317aedd9dc0a4b597d812", net: 0, received: 3973, sent: 3973, txs: 3 },
    { wallet: "0xa174e6e4a05b7c55e598562c263ecc6e0b50f5e0", net: 0, received: 3973, sent: 3973, txs: 2 },
    { wallet: "0x66a9893cc07d91d95644aedd05d03f95e1dba8af", net: 0, received: 10285, sent: 10285, txs: 4 },
    { wallet: "0x006d0e0d006109f0020f3050000a713780b7b000", net: 0, received: 10285, sent: 10285, txs: 4 },
    { wallet: "0x4b67c7f8893bd8fbc819fa57b9dd9dde0b03ccba", net: 0, received: 1390, sent: 1390, txs: 2 },
    { wallet: "0x3d77cd92a41ca23d3289915b042424386e5ec956", net: 0, received: 1390, sent: 1390, txs: 2 },
    { wallet: "0x6624a1a20fb5b194718339b51cf5c68ecc41c4b3", net: 0, received: 3197, sent: 3197, txs: 3 },
    { wallet: "0x081f6bc39faadd1b573dcb83ff0239359d5af3d1", net: 0, received: 3197, sent: 3197, txs: 2 },
    { wallet: "0x76b3a381c43a679368d8a5cff20a45116308b03b", net: 0, received: 8895, sent: 8895, txs: 2 },
    { wallet: "0xb1b99a4267a29ab0006044fe600f8ed0ac53f060", net: 0, received: 1370, sent: 1370, txs: 2 },
    { wallet: "0x166cf1cb02397627f0837b3bae67e5bfab8bebf0", net: 0, received: 951, sent: 951, txs: 2 },
    { wallet: "0x01c579618213c31ebdfdbd68bb14d71d8329b9dc", net: 0, received: 959, sent: 959, txs: 3 },
    { wallet: "0xa315a2fc9b7bd651e0ebaa134859bd8153ff12a7", net: 0, received: 959, sent: 959, txs: 2 },
    { wallet: "0x0ce2b366e425d7e53904ea61cfb2ea03b06283f7", net: 0, received: 822, sent: 822, txs: 3 },
    { wallet: "0xa0952edc243077c05148828cc5432c37486858c3", net: 0, received: 822, sent: 822, txs: 2 },
    { wallet: "0xde527b0d6b0020f256475e8cfba143dd2e69f3b1", net: 0, received: 30043, sent: 30043, txs: 2 },
    { wallet: "0xc44a3acad70b221fd8e213726e20cc95e48bb2cc", net: 0, received: 30137, sent: 30137, txs: 3 },
    { wallet: "0xca08005f080c57936effa193da94547e95a3439a", net: 0, received: 30137, sent: 30137, txs: 2 },
    { wallet: "0x08fd3a0ed40260dbb0f5fbccfb98cf2ffb6f8653", net: 0, received: 2877, sent: 2876, txs: 3 },
    { wallet: "0xf8f87935a9919db73a5c1706b9a287874245ae54", net: 0, received: 2877, sent: 2877, txs: 2 },
    { wallet: "0xbc9971a01a3c9ccd21cfb8270423ea9c985626e6", net: 0, received: 980, sent: 980, txs: 2 },
    { wallet: "0xfba9bcac82f9e78d477c9445efa6e3b0eeef0e7a", net: 0, received: 21667, sent: 21667, txs: 2 }
];

const WHALE_LABELS = {

};
