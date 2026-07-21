// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 21, 2026 at 07:10 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 167;
const WHALE_TOTAL_VOLUME      = 1984687;
const WHALE_BIGGEST_SINGLE    = 554795;

const WHALE_TRANSFERS = [
    { hash: "0xce06741909b3e8a677a22e3680f8da64d98cf8f235f46099449cdb6462eda84a", ts: 1784652275, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x8c4a41a9eb5c1a04bcaf38b788eba16eba8791d6", amount: 554795, block: 25582376, type: "transfer" },
    { hash: "0x28a6d4af482b0e818a4529ee6871d522bddfc40a3469ea72585af540d0939ee0", ts: 1784640395, from: "0x4be98a86f71f1130c3c0c3e2c09aa313299bd29d", to: "0x424aefa74980b1b85f8f2b8d2ab90ec5c2148ed6", amount: 100000, block: 25581388, type: "transfer" },
    { hash: "0x00c137225e58ef102798fa04c039493f4de8803c2a471871ca09f1255783cd5b", ts: 1784637767, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xf3b2b361cfd4a56f0fa89148b8f9b504a943beb1", amount: 258904, block: 25581170, type: "transfer" },
    { hash: "0x999a720239a42995e6f95a22b63bfb8fb9fea6f9fea31fef23c9182355db3b5d", ts: 1784617991, from: "0x9642b23ed1e01df1092b92641051881a322f5d4e", to: "0x01340603cf2b88c5abe8ca9f94e2e25b937beaf9", amount: 101334, block: 25579525, type: "transfer" },
    { hash: "0xbc887d3e6b1a523ec62c726012ef2a7c9066048c19e0846814a819ed9b87af5d", ts: 1784617307, from: "0x4be7aefa836d4ca93aef8d3de25c1f83f6d354be", to: "0x4765e5a76d2aa4b8b6ffcab00da428dd4a96b5eb", amount: 107534, block: 25579468, type: "transfer" },
    { hash: "0x5ed790834e8e71c0d03bc1c6eeebf69f8639cfb08ca66ba8002b2471f968c60c", ts: 1784616971, from: "0x9642b23ed1e01df1092b92641051881a322f5d4e", to: "0x01340603cf2b88c5abe8ca9f94e2e25b937beaf9", amount: 147837, block: 25579440, type: "transfer" },
    { hash: "0x9a0f5fb88ec9b81cfa292a9411d922ff2ada1c7ca4f96e75359c65281c87b801", ts: 1784575859, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", amount: 124853, block: 25576027, type: "buy" },
    { hash: "0xbb7adcee31a5f0ce856bc448439e458c70d11fb05ef9ee63b13b8b62f64564f8", ts: 1784575847, from: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 127414, block: 25576026, type: "sell" },
    { hash: "0xbb7adcee31a5f0ce856bc448439e458c70d11fb05ef9ee63b13b8b62f64564f8", ts: 1784575847, from: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", to: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", amount: 175734, block: 25576026, type: "transfer" },
    { hash: "0xbb7adcee31a5f0ce856bc448439e458c70d11fb05ef9ee63b13b8b62f64564f8", ts: 1784575847, from: "0xafde5429338b81a1705b166d24ef4d09dafd8e96", to: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", amount: 175734, block: 25576026, type: "transfer" },
    { hash: "0xf5b4b131f4129bea27e1922dd92e4948e83c01fd67fd8398fe9f13ca9a907c24", ts: 1784575295, from: "0x9cb06a92c580e47fde4da8385ec78435b1baf75c", to: "0xafde5429338b81a1705b166d24ef4d09dafd8e96", amount: 110548, block: 25575980, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x8c4a41a9eb5c1a04bcaf38b788eba16eba8791d6", net: 554795, received: 554795, sent: 0, txs: 1 },
    { wallet: "0xf3b2b361cfd4a56f0fa89148b8f9b504a943beb1", net: 258904, received: 258904, sent: 0, txs: 1 },
    { wallet: "0x01340603cf2b88c5abe8ca9f94e2e25b937beaf9", net: 249172, received: 249172, sent: 0, txs: 2 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 198978, received: 198978, sent: 0, txs: 2 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 93425, received: 93425, sent: 0, txs: 4 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 79933, received: 79933, sent: 0, txs: 8 },
    { wallet: "0x8c75bf196ed8cf17e83ed58264f33e3aa0bd9204", net: 73973, received: 73973, sent: 0, txs: 1 },
    { wallet: "0x0cea2d9fe51ef641dc65013a7b058c943bbe593b", net: 65068, received: 65068, sent: 0, txs: 1 },
    { wallet: "0x4765e5a76d2aa4b8b6ffcab00da428dd4a96b5eb", net: 62534, received: 107534, sent: 45000, txs: 3 },
    { wallet: "0x34c5da4a8046a0502ee91368998dfcc4991608fc", net: 46301, received: 46301, sent: 0, txs: 1 },
    { wallet: "0xb2655ac91bb3536bcfa0993069da6affabadc33d", net: 44398, received: 44398, sent: 0, txs: 1 },
    { wallet: "0xc07f8b8d4b5a5c7cc420267c3f50eb0c9e72f306", net: 38356, received: 38356, sent: 0, txs: 1 },
    { wallet: "0x3c340da97ea35dabdfda37f2c09d6420029f3f70", net: 36986, received: 36986, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 24987, received: 24987, sent: 0, txs: 1 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 20298, received: 20298, sent: 0, txs: 1 },
    { wallet: "0x28086e8a7ebcaadfc10b034a8ba879d33fbb4ba2", net: 14681, received: 14681, sent: 0, txs: 1 },
    { wallet: "0xc2dfa1cd251252c306a16c00e48a08de47b3e698", net: 14624, received: 14624, sent: 0, txs: 1 },
    { wallet: "0x41e896e6eb9856aa413234ecbfeef4060e9d8531", net: 10548, received: 10548, sent: 0, txs: 1 },
    { wallet: "0xbbf7e985e1e0ca6f854cecb5096274e8e797e8b4", net: 6698, received: 6698, sent: 0, txs: 1 },
    { wallet: "0xbbc2e9fadd02f03bda75894d84148862f294983a", net: 6027, received: 6027, sent: 0, txs: 1 },
    { wallet: "0x746978b7451aa2dd1f305c60870129e4073f8603", net: 5890, received: 5890, sent: 0, txs: 1 },
    { wallet: "0xe8d8209a5f00040af456c3555c6dc66186ea96ec", net: 4972, received: 4972, sent: 0, txs: 1 },
    { wallet: "0xa4b787983dc34fddf2a1bb262b7166f43eccbb6e", net: 4932, received: 4932, sent: 0, txs: 1 },
    { wallet: "0x6871656afb2460f25db9e2c766574e42c680beaf", net: 4521, received: 4521, sent: 0, txs: 1 },
    { wallet: "0xb1b99a4267a29ab0006044fe600f8ed0ac53f060", net: 4110, received: 4110, sent: 0, txs: 1 },
    { wallet: "0x4910a6e228bbbb1180e8e5657913377bb4d3daef", net: 3699, received: 3699, sent: 0, txs: 1 },
    { wallet: "0x7641ae96ea7c7087fb9824c3d9285d76dc638d85", net: 2808, received: 2808, sent: 0, txs: 1 },
    { wallet: "0x1f0d9b1835e7b2844d94b0038c80ac387a439fcc", net: 2740, received: 2740, sent: 0, txs: 1 },
    { wallet: "0xe28d7502e70c9b45de8218b122a72a1eaf972695", net: 2561, received: 2561, sent: 0, txs: 1 },
    { wallet: "0x5532d65385e664eef604976354608a9dc4d9ae7c", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0x20694bb5c906ee71e696587be233284f995564b7", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1146, received: 1146, sent: 0, txs: 9 },
    { wallet: "0x8257eea3d474ea047ef1aa124f85a4fb1700507b", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 1086, received: 1086, sent: 0, txs: 1 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 822, received: 822, sent: 0, txs: 2 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 300, received: 300, sent: 0, txs: 1 },
    { wallet: "0x1ab2a7c6178467e8e2fd9c9a42d33024c8d6e1d0", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x39faf1de461849163e390d0a57d1eaa632064a49", net: 169, received: 169, sent: 0, txs: 1 },
    { wallet: "0xffe5e572477c4ef94a0e9482881ddcb65e974aa2", net: 159, received: 159, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xc4619b2dcba4278ede50f38e28014320857bad56", net: 4, received: 4, sent: 0, txs: 1 },
    { wallet: "0x9f4846679287e7c8da0e8e61f08eb378b6d5f3cf", net: 0, received: 24987, sent: 24987, txs: 2 },
    { wallet: "0x84cab37995229530d9e6e5cff2f8f4ebe4517d66", net: 0, received: 68249, sent: 68249, txs: 12 }
];

const WHALE_LABELS = {

};
