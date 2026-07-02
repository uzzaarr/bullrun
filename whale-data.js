// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 2, 2026 at 01:46 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 213;
const WHALE_TOTAL_VOLUME      = 6909976;
const WHALE_BIGGEST_SINGLE    = 1248111;

const WHALE_TRANSFERS = [
    { hash: "0x0b2f363def4dea03b901cfed12e4df240e09303d742e5ddb7295ff19ebbab129", ts: 1782994091, from: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 282331, block: 25444728, type: "transfer" },
    { hash: "0x52c5a7e5a8bea814c28ab9e91bcab474655271721e26b31b37ca245d121b34e5", ts: 1782975935, from: "0xe0afb959a5109e2209a6f1c9969e6f55a1953722", to: "0x236cd9dd6d431bfe47b31cbc1b92debac2524ab9", amount: 312028, block: 25443225, type: "transfer" },
    { hash: "0x42d77aff9cdea4725c49769f21882e2cb469cb3a734e519f20ff884e6f59a7f3", ts: 1782972095, from: "0x5043144a3be4643b599834b0c614113901bb6a1c", to: "0xc967d082aa2481e737e9040dc079a2c69194f1e0", amount: 461801, block: 25442906, type: "transfer" },
    { hash: "0x65bdfdd6376e5161f12121bdd7073e89a926881d77ea173182582d9fdd84b83a", ts: 1782972011, from: "0xd7ca08ec1aee9cce8a8eda9365343ef197674e1a", to: "0x6912d024e2b88136c5a586e77b092199963b6083", amount: 250416, block: 25442899, type: "transfer" },
    { hash: "0x65bdfdd6376e5161f12121bdd7073e89a926881d77ea173182582d9fdd84b83a", ts: 1782972011, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0xd7ca08ec1aee9cce8a8eda9365343ef197674e1a", amount: 137568, block: 25442899, type: "buy" },
    { hash: "0x65bdfdd6376e5161f12121bdd7073e89a926881d77ea173182582d9fdd84b83a", ts: 1782972011, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0xd7ca08ec1aee9cce8a8eda9365343ef197674e1a", amount: 113221, block: 25442899, type: "buy" },
    { hash: "0xafaf74b2b37209789d012559d04fa5e510f933053dd3f27f6d6913b48bd0a485", ts: 1782971999, from: "0x8f10b468b06c6fd214b65f87778827f7d113f996", to: "0xe0afb959a5109e2209a6f1c9969e6f55a1953722", amount: 312028, block: 25442898, type: "transfer" },
    { hash: "0xafaf74b2b37209789d012559d04fa5e510f933053dd3f27f6d6913b48bd0a485", ts: 1782971999, from: "0x8f10b468b06c6fd214b65f87778827f7d113f996", to: "0x5043144a3be4643b599834b0c614113901bb6a1c", amount: 461801, block: 25442898, type: "transfer" },
    { hash: "0xafaf74b2b37209789d012559d04fa5e510f933053dd3f27f6d6913b48bd0a485", ts: 1782971999, from: "0x8f10b468b06c6fd214b65f87778827f7d113f996", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 187217, block: 25442898, type: "sell" },
    { hash: "0xafaf74b2b37209789d012559d04fa5e510f933053dd3f27f6d6913b48bd0a485", ts: 1782971999, from: "0x8f10b468b06c6fd214b65f87778827f7d113f996", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 199698, block: 25442898, type: "sell" },
    { hash: "0xafaf74b2b37209789d012559d04fa5e510f933053dd3f27f6d6913b48bd0a485", ts: 1782971999, from: "0xbedfac7488dccaafdd66d1d7d56349780fe0477e", to: "0x8f10b468b06c6fd214b65f87778827f7d113f996", amount: 1248111, block: 25442898, type: "transfer" },
    { hash: "0xafaf74b2b37209789d012559d04fa5e510f933053dd3f27f6d6913b48bd0a485", ts: 1782971999, from: "0x4fe93ebc4ce6ae4f81601cc7ce7139023919e003", to: "0xbedfac7488dccaafdd66d1d7d56349780fe0477e", amount: 1248111, block: 25442898, type: "transfer" },
    { hash: "0xafaf74b2b37209789d012559d04fa5e510f933053dd3f27f6d6913b48bd0a485", ts: 1782971999, from: "0x4bc629efe79672a15bc9af08b91c8f43cadc0324", to: "0x4fe93ebc4ce6ae4f81601cc7ce7139023919e003", amount: 1248111, block: 25442898, type: "transfer" },
    { hash: "0x0ac39c3c97f7e013c98efa1a7f2a819f7fd9d3d3712c52597d00bce4abbd7955", ts: 1782962927, from: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", to: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", amount: 200000, block: 25442144, type: "transfer" },
    { hash: "0xfc4bcbeff838c67d0a442d3704ce876bd5c48c1fe6efb91bdcbb126d977a4cd9", ts: 1782922583, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xc608b6c0d492d39078b9d969175de1d8761c2e37", amount: 247534, block: 25438799, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xc967d082aa2481e737e9040dc079a2c69194f1e0", net: 461801, received: 461801, sent: 0, txs: 1 },
    { wallet: "0x236cd9dd6d431bfe47b31cbc1b92debac2524ab9", net: 327443, received: 327443, sent: 0, txs: 2 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 313905, received: 315112, sent: 1207, txs: 4 },
    { wallet: "0xc608b6c0d492d39078b9d969175de1d8761c2e37", net: 247534, received: 247534, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 244794, received: 250418, sent: 5625, txs: 4 },
    { wallet: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", net: 200000, received: 200000, sent: 0, txs: 1 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 133291, received: 133291, sent: 0, txs: 5 },
    { wallet: "0x5f342964169fd6a1ab1251fbd1958fcd4a738b0a", net: 62406, received: 62406, sent: 0, txs: 1 },
    { wallet: "0x82a365858b4a82eed80e5473c6f698f93b48617f", net: 57609, received: 117502, sent: 59892, txs: 5 },
    { wallet: "0x0aff72995a947fbf220ac6f87117f438cc52d415", net: 36002, received: 36002, sent: 0, txs: 1 },
    { wallet: "0x2dea8f2c1656129f6e29979a2ae45b47ce97c77b", net: 31233, received: 31233, sent: 0, txs: 1 },
    { wallet: "0xcafc51eab28e52c8a98955382ea19c6bc06b6029", net: 29299, received: 29299, sent: 0, txs: 1 },
    { wallet: "0xbbf7e985e1e0ca6f854cecb5096274e8e797e8b4", net: 26593, received: 26593, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 23890, received: 59892, sent: 36002, txs: 2 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 13853, received: 22903, sent: 9050, txs: 8 },
    { wallet: "0xfe263102682933297cb65dc813e5193249769251", net: 11604, received: 17978, sent: 6374, txs: 3 },
    { wallet: "0x053e6294400a9268e35df445624f58087c7f388f", net: 8021, received: 8021, sent: 0, txs: 1 },
    { wallet: "0x4015afef85dfe9020c37e094fca46e56854dc5c6", net: 6575, received: 6575, sent: 0, txs: 1 },
    { wallet: "0x716e3fad60bc867449795cd624da34aab3dc381f", net: 6374, received: 6374, sent: 0, txs: 1 },
    { wallet: "0xa1b2a2dfe6300d3f2174e0a4f073fc0f78f5169f", net: 6171, received: 6171, sent: 0, txs: 1 },
    { wallet: "0xd1d4909e0756d1f00bdd3c7bace674ec7733d661", net: 6164, received: 6164, sent: 0, txs: 1 },
    { wallet: "0xb695091eb0618245a5e61f3f6c52babddcbf6aba", net: 5753, received: 5753, sent: 0, txs: 1 },
    { wallet: "0xdb3812cd8d20f27888677ddc97df1241850f8c48", net: 5619, received: 5619, sent: 0, txs: 1 },
    { wallet: "0xe28d7502e70c9b45de8218b122a72a1eaf972695", net: 5569, received: 5569, sent: 0, txs: 1 },
    { wallet: "0x7b7561db3020853674935f651dd1dc233c194a41", net: 5205, received: 5205, sent: 0, txs: 1 },
    { wallet: "0xff455304e5956baa8537a932db508df0fa0e3096", net: 4932, received: 4932, sent: 0, txs: 1 },
    { wallet: "0xa57f5c4d61a7fb4ec5e2651f86af39534308c3ab", net: 4932, received: 4932, sent: 0, txs: 1 },
    { wallet: "0x3a106b231ff6ca09d045ae79bd624c7bbf8edc40", net: 4153, received: 4153, sent: 0, txs: 1 },
    { wallet: "0xf68f7da978ca3cd9acbcb80672c9bde2e050b35f", net: 3699, received: 3699, sent: 0, txs: 1 },
    { wallet: "0x139724a176a50f5089f4ed5bc653124e9d2c97f3", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0x9520047179e27f23fc1cefa70f254342661ae19c", net: 2329, received: 2329, sent: 0, txs: 1 },
    { wallet: "0x29b71fd85d1148098e7400b23880cafbaf19342f", net: 1918, received: 1918, sent: 0, txs: 1 },
    { wallet: "0x999b2dc7d728ef06953f33c1f44c450b200e5588", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", net: 1078, received: 2318, sent: 1240, txs: 3 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 766, received: 777, sent: 12, txs: 20 },
    { wallet: "0xb8294f8f8f6619a299688f1ca12cb967fc9a6176", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x17e792101c59dbc95fc780951484c73dbac282ab", net: 491, received: 491, sent: 0, txs: 1 },
    { wallet: "0x907262769c7143796829c3d9595d8d4007e65cd1", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd7ca08ec1aee9cce8a8eda9365343ef197674e1a", net: 374, received: 250790, sent: 250416, txs: 3 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x3c9108700724d9d96cff2ac8979d6ad2a8d469ae", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 251, received: 251, sent: 0, txs: 2 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 119, received: 119, sent: 0, txs: 1 },
    { wallet: "0x21d58a9085b39398fa978b069dbaed28aa31e4d5", net: 97, received: 97, sent: 0, txs: 1 },
    { wallet: "0x7b9d43ef9d740bc6b6e593e1fc7c4b910a75fd00", net: 92, received: 1280, sent: 1187, txs: 2 },
    { wallet: "0xc89e3b392348b20bbebe4c5c918ecb505c64b8a7", net: 68, received: 639, sent: 571, txs: 2 }
];

const WHALE_LABELS = {

};
