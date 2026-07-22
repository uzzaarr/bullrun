// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 22, 2026 at 08:15 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 128;
const WHALE_TOTAL_VOLUME      = 8053116;
const WHALE_BIGGEST_SINGLE    = 6849315;

const WHALE_TRANSFERS = [
    { hash: "0x308a231c9aa76fb44edca743fff7b914e58718c88272033074346ea2bd3f561c", ts: 1784699735, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xa8c3e1a954b0271dd9c3c80f44a56dde9b68d5c8", amount: 6849315, block: 25586317, type: "transfer" },
    { hash: "0xd3d3ea58877ab735858e9a6465f34e550138efaadda85bdc1d7a2f70a77b077b", ts: 1784698679, from: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", to: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", amount: 179828, block: 25586229, type: "transfer" },
    { hash: "0x0cf765f0165e5404949c4da63e2d689857df4adca60f33522fd94d426a1f8498", ts: 1784687483, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x57ba479e67ae2107ebf5b4bf6f45761eeacbdbba", amount: 110274, block: 25585297, type: "transfer" },
    { hash: "0xce06741909b3e8a677a22e3680f8da64d98cf8f235f46099449cdb6462eda84a", ts: 1784652275, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x8c4a41a9eb5c1a04bcaf38b788eba16eba8791d6", amount: 554795, block: 25582376, type: "transfer" },
    { hash: "0x28a6d4af482b0e818a4529ee6871d522bddfc40a3469ea72585af540d0939ee0", ts: 1784640395, from: "0x4be98a86f71f1130c3c0c3e2c09aa313299bd29d", to: "0x424aefa74980b1b85f8f2b8d2ab90ec5c2148ed6", amount: 100000, block: 25581388, type: "transfer" },
    { hash: "0x00c137225e58ef102798fa04c039493f4de8803c2a471871ca09f1255783cd5b", ts: 1784637767, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xf3b2b361cfd4a56f0fa89148b8f9b504a943beb1", amount: 258904, block: 25581170, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xa8c3e1a954b0271dd9c3c80f44a56dde9b68d5c8", net: 6849315, received: 6849315, sent: 0, txs: 1 },
    { wallet: "0x8c4a41a9eb5c1a04bcaf38b788eba16eba8791d6", net: 554795, received: 554795, sent: 0, txs: 1 },
    { wallet: "0xf3b2b361cfd4a56f0fa89148b8f9b504a943beb1", net: 258904, received: 258904, sent: 0, txs: 1 },
    { wallet: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", net: 179828, received: 179828, sent: 0, txs: 1 },
    { wallet: "0x57ba479e67ae2107ebf5b4bf6f45761eeacbdbba", net: 110274, received: 110274, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 95673, received: 95673, sent: 0, txs: 6 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 74125, received: 74125, sent: 0, txs: 1 },
    { wallet: "0x8c75bf196ed8cf17e83ed58264f33e3aa0bd9204", net: 73973, received: 73973, sent: 0, txs: 1 },
    { wallet: "0x0cea2d9fe51ef641dc65013a7b058c943bbe593b", net: 65068, received: 65068, sent: 0, txs: 1 },
    { wallet: "0xcf4525dc26cc9ca58e15fffa3ef14d6619a55945", net: 55616, received: 55616, sent: 0, txs: 1 },
    { wallet: "0x34c5da4a8046a0502ee91368998dfcc4991608fc", net: 46301, received: 46301, sent: 0, txs: 1 },
    { wallet: "0xb2655ac91bb3536bcfa0993069da6affabadc33d", net: 44398, received: 44398, sent: 0, txs: 1 },
    { wallet: "0xc07f8b8d4b5a5c7cc420267c3f50eb0c9e72f306", net: 38356, received: 38356, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 24987, received: 24987, sent: 0, txs: 1 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 20298, received: 20298, sent: 0, txs: 1 },
    { wallet: "0x7764c8727dab012fce187df0736dab2b00ef691c", net: 16438, received: 16438, sent: 0, txs: 1 },
    { wallet: "0xc742f1f075b6c890b8bb1fabfffb29973637bf20", net: 15931, received: 15931, sent: 0, txs: 1 },
    { wallet: "0xc2dfa1cd251252c306a16c00e48a08de47b3e698", net: 14624, received: 14624, sent: 0, txs: 1 },
    { wallet: "0x88c2043994bcd2f9b6bf22efbceeef8022510072", net: 10000, received: 10000, sent: 0, txs: 1 },
    { wallet: "0xf8ec5ff27729cd8f6aadf2c2c85452e6899e6be2", net: 9863, received: 9863, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 9136, received: 9136, sent: 0, txs: 4 },
    { wallet: "0x40e42b7cb4f24ad764c77d4e3e96611d6e306d2b", net: 8219, received: 8219, sent: 0, txs: 1 },
    { wallet: "0x33e9565381b6407fa3e297cc8f6e4dcebae7d179", net: 7808, received: 7808, sent: 0, txs: 1 },
    { wallet: "0x1894c5c5d9d976a7971a0ccd252f2f6064efd3a8", net: 7671, received: 7671, sent: 0, txs: 1 },
    { wallet: "0x6627c2f830928700f73475fe6e65177caf8b959a", net: 7397, received: 7397, sent: 0, txs: 1 },
    { wallet: "0xbbc2e9fadd02f03bda75894d84148862f294983a", net: 6027, received: 6027, sent: 0, txs: 1 },
    { wallet: "0x746978b7451aa2dd1f305c60870129e4073f8603", net: 5890, received: 5890, sent: 0, txs: 1 },
    { wallet: "0xa4b787983dc34fddf2a1bb262b7166f43eccbb6e", net: 4932, received: 4932, sent: 0, txs: 1 },
    { wallet: "0x4910a6e228bbbb1180e8e5657913377bb4d3daef", net: 3699, received: 3699, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0x7641ae96ea7c7087fb9824c3d9285d76dc638d85", net: 2808, received: 2808, sent: 0, txs: 1 },
    { wallet: "0x1f0d9b1835e7b2844d94b0038c80ac387a439fcc", net: 2740, received: 2740, sent: 0, txs: 1 },
    { wallet: "0x20694bb5c906ee71e696587be233284f995564b7", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x7324fca2af715542903ef5512a639b403fb555e6", net: 1519, received: 1519, sent: 0, txs: 2 },
    { wallet: "0xb1b99a4267a29ab0006044fe600f8ed0ac53f060", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0x8257eea3d474ea047ef1aa124f85a4fb1700507b", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x0ce2b366e425d7e53904ea61cfb2ea03b06283f7", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x9df14235393c7a9d2bc38db6c12c61b699e094c6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x421679ec8237d08785f65ad01569ec6badbf402f", net: 701, received: 701, sent: 0, txs: 1 },
    { wallet: "0x83ce36503d668dc4efe16416b92f498d06cdc88b", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 300, received: 300, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 208, received: 208, sent: 0, txs: 5 },
    { wallet: "0xffe5e572477c4ef94a0e9482881ddcb65e974aa2", net: 159, received: 159, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xc4619b2dcba4278ede50f38e28014320857bad56", net: 4, received: 4, sent: 0, txs: 1 }
];

const WHALE_LABELS = {

};
