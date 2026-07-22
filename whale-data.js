// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 22, 2026 at 02:02 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 113;
const WHALE_TOTAL_VOLUME      = 1270404;
const WHALE_BIGGEST_SINGLE    = 554795;

const WHALE_TRANSFERS = [
    { hash: "0xce06741909b3e8a677a22e3680f8da64d98cf8f235f46099449cdb6462eda84a", ts: 1784652275, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x8c4a41a9eb5c1a04bcaf38b788eba16eba8791d6", amount: 554795, block: 25582376, type: "transfer" },
    { hash: "0x28a6d4af482b0e818a4529ee6871d522bddfc40a3469ea72585af540d0939ee0", ts: 1784640395, from: "0x4be98a86f71f1130c3c0c3e2c09aa313299bd29d", to: "0x424aefa74980b1b85f8f2b8d2ab90ec5c2148ed6", amount: 100000, block: 25581388, type: "transfer" },
    { hash: "0x00c137225e58ef102798fa04c039493f4de8803c2a471871ca09f1255783cd5b", ts: 1784637767, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xf3b2b361cfd4a56f0fa89148b8f9b504a943beb1", amount: 258904, block: 25581170, type: "transfer" },
    { hash: "0x999a720239a42995e6f95a22b63bfb8fb9fea6f9fea31fef23c9182355db3b5d", ts: 1784617991, from: "0x9642b23ed1e01df1092b92641051881a322f5d4e", to: "0x01340603cf2b88c5abe8ca9f94e2e25b937beaf9", amount: 101334, block: 25579525, type: "transfer" },
    { hash: "0xbc887d3e6b1a523ec62c726012ef2a7c9066048c19e0846814a819ed9b87af5d", ts: 1784617307, from: "0x4be7aefa836d4ca93aef8d3de25c1f83f6d354be", to: "0x4765e5a76d2aa4b8b6ffcab00da428dd4a96b5eb", amount: 107534, block: 25579468, type: "transfer" },
    { hash: "0x5ed790834e8e71c0d03bc1c6eeebf69f8639cfb08ca66ba8002b2471f968c60c", ts: 1784616971, from: "0x9642b23ed1e01df1092b92641051881a322f5d4e", to: "0x01340603cf2b88c5abe8ca9f94e2e25b937beaf9", amount: 147837, block: 25579440, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x8c4a41a9eb5c1a04bcaf38b788eba16eba8791d6", net: 554795, received: 554795, sent: 0, txs: 1 },
    { wallet: "0xf3b2b361cfd4a56f0fa89148b8f9b504a943beb1", net: 258904, received: 258904, sent: 0, txs: 1 },
    { wallet: "0x01340603cf2b88c5abe8ca9f94e2e25b937beaf9", net: 249172, received: 249172, sent: 0, txs: 2 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 74125, received: 74125, sent: 0, txs: 1 },
    { wallet: "0x8c75bf196ed8cf17e83ed58264f33e3aa0bd9204", net: 73973, received: 73973, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 65864, received: 65864, sent: 0, txs: 3 },
    { wallet: "0x0cea2d9fe51ef641dc65013a7b058c943bbe593b", net: 65068, received: 65068, sent: 0, txs: 1 },
    { wallet: "0x4765e5a76d2aa4b8b6ffcab00da428dd4a96b5eb", net: 62534, received: 107534, sent: 45000, txs: 3 },
    { wallet: "0x34c5da4a8046a0502ee91368998dfcc4991608fc", net: 46301, received: 46301, sent: 0, txs: 1 },
    { wallet: "0xb2655ac91bb3536bcfa0993069da6affabadc33d", net: 44398, received: 44398, sent: 0, txs: 1 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 39955, received: 39955, sent: 0, txs: 4 },
    { wallet: "0xc07f8b8d4b5a5c7cc420267c3f50eb0c9e72f306", net: 38356, received: 38356, sent: 0, txs: 1 },
    { wallet: "0x3c340da97ea35dabdfda37f2c09d6420029f3f70", net: 36986, received: 36986, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 24987, received: 24987, sent: 0, txs: 1 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 20298, received: 20298, sent: 0, txs: 1 },
    { wallet: "0xc742f1f075b6c890b8bb1fabfffb29973637bf20", net: 15931, received: 15931, sent: 0, txs: 1 },
    { wallet: "0x28086e8a7ebcaadfc10b034a8ba879d33fbb4ba2", net: 14681, received: 14681, sent: 0, txs: 1 },
    { wallet: "0xc2dfa1cd251252c306a16c00e48a08de47b3e698", net: 14624, received: 14624, sent: 0, txs: 1 },
    { wallet: "0x41e896e6eb9856aa413234ecbfeef4060e9d8531", net: 10548, received: 10548, sent: 0, txs: 1 },
    { wallet: "0x88c2043994bcd2f9b6bf22efbceeef8022510072", net: 10000, received: 10000, sent: 0, txs: 1 },
    { wallet: "0xf8ec5ff27729cd8f6aadf2c2c85452e6899e6be2", net: 9863, received: 9863, sent: 0, txs: 1 },
    { wallet: "0x40e42b7cb4f24ad764c77d4e3e96611d6e306d2b", net: 8219, received: 8219, sent: 0, txs: 1 },
    { wallet: "0x33e9565381b6407fa3e297cc8f6e4dcebae7d179", net: 7808, received: 7808, sent: 0, txs: 1 },
    { wallet: "0x1894c5c5d9d976a7971a0ccd252f2f6064efd3a8", net: 7671, received: 7671, sent: 0, txs: 1 },
    { wallet: "0x6627c2f830928700f73475fe6e65177caf8b959a", net: 7397, received: 7397, sent: 0, txs: 1 },
    { wallet: "0xbbf7e985e1e0ca6f854cecb5096274e8e797e8b4", net: 6698, received: 6698, sent: 0, txs: 1 },
    { wallet: "0xbbc2e9fadd02f03bda75894d84148862f294983a", net: 6027, received: 6027, sent: 0, txs: 1 },
    { wallet: "0x746978b7451aa2dd1f305c60870129e4073f8603", net: 5890, received: 5890, sent: 0, txs: 1 },
    { wallet: "0xe8d8209a5f00040af456c3555c6dc66186ea96ec", net: 4972, received: 4972, sent: 0, txs: 1 },
    { wallet: "0xa4b787983dc34fddf2a1bb262b7166f43eccbb6e", net: 4932, received: 4932, sent: 0, txs: 1 },
    { wallet: "0xb1b99a4267a29ab0006044fe600f8ed0ac53f060", net: 4110, received: 4110, sent: 0, txs: 1 },
    { wallet: "0x4910a6e228bbbb1180e8e5657913377bb4d3daef", net: 3699, received: 3699, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0x7641ae96ea7c7087fb9824c3d9285d76dc638d85", net: 2808, received: 2808, sent: 0, txs: 1 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 2740, received: 2740, sent: 0, txs: 2 },
    { wallet: "0x1f0d9b1835e7b2844d94b0038c80ac387a439fcc", net: 2740, received: 2740, sent: 0, txs: 1 },
    { wallet: "0xe28d7502e70c9b45de8218b122a72a1eaf972695", net: 2561, received: 2561, sent: 0, txs: 1 },
    { wallet: "0xc26ff22e2f18f54f82f74593529a27347a5a56ff", net: 2466, received: 2466, sent: 0, txs: 2 },
    { wallet: "0x20694bb5c906ee71e696587be233284f995564b7", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x8257eea3d474ea047ef1aa124f85a4fb1700507b", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 1086, received: 1086, sent: 0, txs: 1 },
    { wallet: "0x0ce2b366e425d7e53904ea61cfb2ea03b06283f7", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x9df14235393c7a9d2bc38db6c12c61b699e094c6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 332, received: 332, sent: 0, txs: 3 }
];

const WHALE_LABELS = {

};
