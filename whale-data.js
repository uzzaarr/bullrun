// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 21, 2026 at 01:24 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 171;
const WHALE_TOTAL_VOLUME      = 18505569;
const WHALE_BIGGEST_SINGLE    = 5729045;

const WHALE_TRANSFERS = [
    { hash: "0x00c137225e58ef102798fa04c039493f4de8803c2a471871ca09f1255783cd5b", ts: 1784637767, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xf3b2b361cfd4a56f0fa89148b8f9b504a943beb1", amount: 258904, block: 25581170, type: "transfer" },
    { hash: "0x999a720239a42995e6f95a22b63bfb8fb9fea6f9fea31fef23c9182355db3b5d", ts: 1784617991, from: "0x9642b23ed1e01df1092b92641051881a322f5d4e", to: "0x01340603cf2b88c5abe8ca9f94e2e25b937beaf9", amount: 101334, block: 25579525, type: "transfer" },
    { hash: "0xbc887d3e6b1a523ec62c726012ef2a7c9066048c19e0846814a819ed9b87af5d", ts: 1784617307, from: "0x4be7aefa836d4ca93aef8d3de25c1f83f6d354be", to: "0x4765e5a76d2aa4b8b6ffcab00da428dd4a96b5eb", amount: 107534, block: 25579468, type: "transfer" },
    { hash: "0x5ed790834e8e71c0d03bc1c6eeebf69f8639cfb08ca66ba8002b2471f968c60c", ts: 1784616971, from: "0x9642b23ed1e01df1092b92641051881a322f5d4e", to: "0x01340603cf2b88c5abe8ca9f94e2e25b937beaf9", amount: 147837, block: 25579440, type: "transfer" },
    { hash: "0x9a0f5fb88ec9b81cfa292a9411d922ff2ada1c7ca4f96e75359c65281c87b801", ts: 1784575859, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", amount: 124853, block: 25576027, type: "buy" },
    { hash: "0xbb7adcee31a5f0ce856bc448439e458c70d11fb05ef9ee63b13b8b62f64564f8", ts: 1784575847, from: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 127414, block: 25576026, type: "sell" },
    { hash: "0xbb7adcee31a5f0ce856bc448439e458c70d11fb05ef9ee63b13b8b62f64564f8", ts: 1784575847, from: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", to: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", amount: 175734, block: 25576026, type: "transfer" },
    { hash: "0xbb7adcee31a5f0ce856bc448439e458c70d11fb05ef9ee63b13b8b62f64564f8", ts: 1784575847, from: "0xafde5429338b81a1705b166d24ef4d09dafd8e96", to: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", amount: 175734, block: 25576026, type: "transfer" },
    { hash: "0xf5b4b131f4129bea27e1922dd92e4948e83c01fd67fd8398fe9f13ca9a907c24", ts: 1784575295, from: "0x9cb06a92c580e47fde4da8385ec78435b1baf75c", to: "0xafde5429338b81a1705b166d24ef4d09dafd8e96", amount: 110548, block: 25575980, type: "transfer" },
    { hash: "0x44bca85e0f84daf79141a172ddebc8be3ee7d38fd389a0d18dd1223bb61b084e", ts: 1784561195, from: "0xc079bfa54f348199ba51b2717595fe24e96f1542", to: "0x6912d024e2b88136c5a586e77b092199963b6083", amount: 4292487, block: 25574812, type: "transfer" },
    { hash: "0x44bca85e0f84daf79141a172ddebc8be3ee7d38fd389a0d18dd1223bb61b084e", ts: 1784561195, from: "0x15fcdea9c9ebb29740c5a821a1167485eb2107ef", to: "0xc079bfa54f348199ba51b2717595fe24e96f1542", amount: 4292487, block: 25574812, type: "transfer" },
    { hash: "0xd4b144d737ee47b49e3e25062fc58a41fe6a4ac30af0dd3ed8455e3838fb8c41", ts: 1784558435, from: "0xc079bfa54f348199ba51b2717595fe24e96f1542", to: "0x6912d024e2b88136c5a586e77b092199963b6083", amount: 1430829, block: 25574583, type: "transfer" },
    { hash: "0xd4b144d737ee47b49e3e25062fc58a41fe6a4ac30af0dd3ed8455e3838fb8c41", ts: 1784558435, from: "0x15fcdea9c9ebb29740c5a821a1167485eb2107ef", to: "0xc079bfa54f348199ba51b2717595fe24e96f1542", amount: 1430829, block: 25574583, type: "transfer" },
    { hash: "0x89b0beeb7940396af1c387f03267b0e51b7844f190ba46e0ea069e62990324ef", ts: 1784558363, from: "0xa73072adc6c34859426fcc29bc6ca2cac07c93c3", to: "0x15fcdea9c9ebb29740c5a821a1167485eb2107ef", amount: 5729045, block: 25574577, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 5750877, received: 5750877, sent: 0, txs: 3 },
    { wallet: "0xf3b2b361cfd4a56f0fa89148b8f9b504a943beb1", net: 258904, received: 258904, sent: 0, txs: 1 },
    { wallet: "0x01340603cf2b88c5abe8ca9f94e2e25b937beaf9", net: 249172, received: 249172, sent: 0, txs: 2 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 175026, received: 175026, sent: 0, txs: 2 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 119885, received: 119885, sent: 0, txs: 12 },
    { wallet: "0x8c75bf196ed8cf17e83ed58264f33e3aa0bd9204", net: 73973, received: 73973, sent: 0, txs: 1 },
    { wallet: "0x4765e5a76d2aa4b8b6ffcab00da428dd4a96b5eb", net: 62534, received: 107534, sent: 45000, txs: 3 },
    { wallet: "0x34c5da4a8046a0502ee91368998dfcc4991608fc", net: 46301, received: 46301, sent: 0, txs: 1 },
    { wallet: "0xb2655ac91bb3536bcfa0993069da6affabadc33d", net: 44398, received: 44398, sent: 0, txs: 1 },
    { wallet: "0xc07f8b8d4b5a5c7cc420267c3f50eb0c9e72f306", net: 38356, received: 38356, sent: 0, txs: 1 },
    { wallet: "0x3c340da97ea35dabdfda37f2c09d6420029f3f70", net: 36986, received: 36986, sent: 0, txs: 1 },
    { wallet: "0x9f6a44b7ff61580b9ec063fb30420729fee79202", net: 36849, received: 36849, sent: 0, txs: 1 },
    { wallet: "0xed7d4d97424f80f36a0b23ff62f2514c8f52c93c", net: 26849, received: 26849, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 23708, received: 23708, sent: 0, txs: 1 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 20298, received: 20298, sent: 0, txs: 1 },
    { wallet: "0x28086e8a7ebcaadfc10b034a8ba879d33fbb4ba2", net: 14681, received: 14681, sent: 0, txs: 1 },
    { wallet: "0xc2dfa1cd251252c306a16c00e48a08de47b3e698", net: 14624, received: 14624, sent: 0, txs: 1 },
    { wallet: "0x41e896e6eb9856aa413234ecbfeef4060e9d8531", net: 10548, received: 10548, sent: 0, txs: 1 },
    { wallet: "0xbbf7e985e1e0ca6f854cecb5096274e8e797e8b4", net: 6698, received: 6698, sent: 0, txs: 1 },
    { wallet: "0x82d9a407f99a95db4671e7021d625cbd0787a407", net: 5729, received: 5729, sent: 0, txs: 2 },
    { wallet: "0xe8d8209a5f00040af456c3555c6dc66186ea96ec", net: 4972, received: 4972, sent: 0, txs: 1 },
    { wallet: "0xa4b787983dc34fddf2a1bb262b7166f43eccbb6e", net: 4932, received: 4932, sent: 0, txs: 1 },
    { wallet: "0x6871656afb2460f25db9e2c766574e42c680beaf", net: 4521, received: 4521, sent: 0, txs: 1 },
    { wallet: "0xb1b99a4267a29ab0006044fe600f8ed0ac53f060", net: 4110, received: 4110, sent: 0, txs: 1 },
    { wallet: "0x4910a6e228bbbb1180e8e5657913377bb4d3daef", net: 3699, received: 3699, sent: 0, txs: 1 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 3425, received: 3425, sent: 0, txs: 1 },
    { wallet: "0xe28d7502e70c9b45de8218b122a72a1eaf972695", net: 2561, received: 2561, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1371, received: 1371, sent: 0, txs: 10 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0xd4ecca8f08ac6fadaed2cb141637c95ee4c74d43", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 1086, received: 1086, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 274, received: 274, sent: 0, txs: 2 },
    { wallet: "0x1ab2a7c6178467e8e2fd9c9a42d33024c8d6e1d0", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x39faf1de461849163e390d0a57d1eaa632064a49", net: 169, received: 169, sent: 0, txs: 1 },
    { wallet: "0xffe5e572477c4ef94a0e9482881ddcb65e974aa2", net: 159, received: 159, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xc4619b2dcba4278ede50f38e28014320857bad56", net: 4, received: 4, sent: 0, txs: 1 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 396157, sent: 396157, txs: 22 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 342812, sent: 342812, txs: 20 },
    { wallet: "0xff9609e5d9c3fcfb1605f4cbe9674a5bc96b4e7b", net: 0, received: 1086, sent: 1086, txs: 2 },
    { wallet: "0x44926d92979d022991a31ed8ba12580bb9edaac8", net: 0, received: 1096, sent: 1096, txs: 4 },
    { wallet: "0x747dd095f8b63a66d7c31f41bb22afb698224e36", net: 0, received: 1096, sent: 1096, txs: 4 },
    { wallet: "0x27ace13e9949900af2c5fdc1ad2aeb36b1e443a0", net: 0, received: 3699, sent: 3699, txs: 2 }
];

const WHALE_LABELS = {

};
