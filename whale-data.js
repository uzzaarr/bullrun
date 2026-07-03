// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 3, 2026 at 02:24 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 229;
const WHALE_TOTAL_VOLUME      = 17184646;
const WHALE_BIGGEST_SINGLE    = 6506849;

const WHALE_TRANSFERS = [
    { hash: "0x5cc132d12dcc7a72f052c7687709a86a0d61aebbf57ddd2c06121e343d9dd28e", ts: 1783041767, from: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", to: "0x8f10b468b06c6fd214b65f87778827f7d113f996", amount: 121229, block: 25448680, type: "transfer" },
    { hash: "0x5cc132d12dcc7a72f052c7687709a86a0d61aebbf57ddd2c06121e343d9dd28e", ts: 1783041767, from: "0x83f953956671d9f88adf75bbe2ecea58c76ad98e", to: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", amount: 121229, block: 25448680, type: "transfer" },
    { hash: "0x89b369fc6c3c72f8ec363de389b3854ba5f5bdee9cbffdf94ebdf40f650e2d08", ts: 1783041587, from: "0xdd6d41bd79b943d29945bd775730328ce56ce8fa", to: "0x83f953956671d9f88adf75bbe2ecea58c76ad98e", amount: 121608, block: 25448665, type: "transfer" },
    { hash: "0xc9dc11f735bb3c11d02de80eeb269caa8fe388cb492b76dc6ba262a37e307538", ts: 1783040123, from: "0x40a88150427465cca3911358edc96cf16f06e431", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 124218, block: 25448546, type: "sell" },
    { hash: "0x00a2a728c134adc224a775ef79824a2b341b46863718b413953f818771776e66", ts: 1783039955, from: "0x7c876bdaa5c038e19f633714f622f6def949b102", to: "0x6ccdc93dd3e792eeb7e4c9fafbc44d5d8fac1a1b", amount: 360147, block: 25448532, type: "transfer" },
    { hash: "0x32857f6622ea37ab30236ed6fbc8a4a5a7b2cbc179cb1bad53a94e3022d5ae0e", ts: 1783039919, from: "0x6912d024e2b88136c5a586e77b092199963b6083", to: "0x40a88150427465cca3911358edc96cf16f06e431", amount: 124218, block: 25448529, type: "transfer" },
    { hash: "0x556c8e6da4d6bc23b214502046acf0d4d82d3c4ca145fad854ed39055d97ade1", ts: 1783038311, from: "0x98e695dd0c6e9277298b7188a9e50743872e4bef", to: "0x7c876bdaa5c038e19f633714f622f6def949b102", amount: 363394, block: 25448395, type: "transfer" },
    { hash: "0xddda6e342dbe6d108871d3b0daf0835210a586bd70539ff9234901d82767b42c", ts: 1783037699, from: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", to: "0x98e695dd0c6e9277298b7188a9e50743872e4bef", amount: 363394, block: 25448344, type: "transfer" },
    { hash: "0x7ca222e09540204e74e52a4b591507bf650065324db85fa9d67d1a1f9397811f", ts: 1783009955, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xa8c3e1a954b0271dd9c3c80f44a56dde9b68d5c8", amount: 6506849, block: 25446042, type: "transfer" },
    { hash: "0x7cb224e7da76db6059dae3598bdbf19bcd56f03fe317350419217a1630c87474", ts: 1783008395, from: "0xe0afb959a5109e2209a6f1c9969e6f55a1953722", to: "0x236cd9dd6d431bfe47b31cbc1b92debac2524ab9", amount: 488741, block: 25445913, type: "transfer" },
    { hash: "0x0d68f0847de3ca340602bd4626b2d39007e599f58047b443337a5f16a2b4d1fe", ts: 1783008359, from: "0x8f10b468b06c6fd214b65f87778827f7d113f996", to: "0xe0afb959a5109e2209a6f1c9969e6f55a1953722", amount: 488741, block: 25445910, type: "transfer" },
    { hash: "0x0d68f0847de3ca340602bd4626b2d39007e599f58047b443337a5f16a2b4d1fe", ts: 1783008359, from: "0x28d59e2e8d87b4b272a75b384f6f593a41b4df4a", to: "0x8f10b468b06c6fd214b65f87778827f7d113f996", amount: 514464, block: 25445910, type: "transfer" },
    { hash: "0xba869b355f11a52f968bb8cd35f5a29d67a35e96a6dbfa541b3dae9bfaafe3f1", ts: 1783008215, from: "0x303b1bce3fa46bb73bd8a03d592720771b6a144d", to: "0x28d59e2e8d87b4b272a75b384f6f593a41b4df4a", amount: 515753, block: 25445898, type: "transfer" },
    { hash: "0x6010be5735d598a6e0063ab5de59413fbac0732479591ff51e11f6331511f3df", ts: 1783007807, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x303b1bce3fa46bb73bd8a03d592720771b6a144d", amount: 308219, block: 25445864, type: "transfer" },
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
    { hash: "0x0ac39c3c97f7e013c98efa1a7f2a819f7fd9d3d3712c52597d00bce4abbd7955", ts: 1782962927, from: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", to: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", amount: 200000, block: 25442144, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xa8c3e1a954b0271dd9c3c80f44a56dde9b68d5c8", net: 6506849, received: 6506849, sent: 0, txs: 1 },
    { wallet: "0x236cd9dd6d431bfe47b31cbc1b92debac2524ab9", net: 816183, received: 816183, sent: 0, txs: 3 },
    { wallet: "0xc967d082aa2481e737e9040dc079a2c69194f1e0", net: 461801, received: 461801, sent: 0, txs: 1 },
    { wallet: "0x6ccdc93dd3e792eeb7e4c9fafbc44d5d8fac1a1b", net: 360147, received: 360147, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 282365, received: 283572, sent: 1207, txs: 3 },
    { wallet: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", net: 200000, received: 200000, sent: 0, txs: 1 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 133291, received: 133291, sent: 0, txs: 5 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 120576, received: 250418, sent: 129843, txs: 5 },
    { wallet: "0xe2faf292ce91a961cf922177e1937652dd129e99", net: 94247, received: 94247, sent: 0, txs: 1 },
    { wallet: "0x04c7b4e2db71b2abffe4f2131cf2754533cf32da", net: 87281, received: 113874, sent: 26593, txs: 5 },
    { wallet: "0x5f342964169fd6a1ab1251fbd1958fcd4a738b0a", net: 62406, received: 62406, sent: 0, txs: 1 },
    { wallet: "0xe28d7502e70c9b45de8218b122a72a1eaf972695", net: 49087, received: 49087, sent: 0, txs: 2 },
    { wallet: "0x57ba479e67ae2107ebf5b4bf6f45761eeacbdbba", net: 47260, received: 47260, sent: 0, txs: 1 },
    { wallet: "0x0aff72995a947fbf220ac6f87117f438cc52d415", net: 36002, received: 36002, sent: 0, txs: 1 },
    { wallet: "0xcafc51eab28e52c8a98955382ea19c6bc06b6029", net: 29299, received: 29299, sent: 0, txs: 1 },
    { wallet: "0xbbf7e985e1e0ca6f854cecb5096274e8e797e8b4", net: 26593, received: 26593, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 23890, received: 59892, sent: 36002, txs: 2 },
    { wallet: "0x9cfdda1408cd99a2c98402473a647fbae27be5a7", net: 20693, received: 20693, sent: 0, txs: 1 },
    { wallet: "0x716e3fad60bc867449795cd624da34aab3dc381f", net: 18624, received: 18624, sent: 0, txs: 3 },
    { wallet: "0x4a3f4cc42ff0b8a18474c68031d4ce46605bd86d", net: 11771, received: 74177, sent: 62406, txs: 3 },
    { wallet: "0x053e6294400a9268e35df445624f58087c7f388f", net: 8021, received: 8021, sent: 0, txs: 1 },
    { wallet: "0x1a996eb2a69423926d60973fc3d73cf1fa847a2f", net: 6575, received: 6575, sent: 0, txs: 1 },
    { wallet: "0xa1b2a2dfe6300d3f2174e0a4f073fc0f78f5169f", net: 6171, received: 6171, sent: 0, txs: 1 },
    { wallet: "0xdb3812cd8d20f27888677ddc97df1241850f8c48", net: 5619, received: 5619, sent: 0, txs: 1 },
    { wallet: "0xfe263102682933297cb65dc813e5193249769251", net: 5231, received: 23855, sent: 18624, txs: 6 },
    { wallet: "0xbbc2e9fadd02f03bda75894d84148862f294983a", net: 4932, received: 4932, sent: 0, txs: 1 },
    { wallet: "0xf68f7da978ca3cd9acbcb80672c9bde2e050b35f", net: 3699, received: 3699, sent: 0, txs: 1 },
    { wallet: "0x139724a176a50f5089f4ed5bc653124e9d2c97f3", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0x7c876bdaa5c038e19f633714f622f6def949b102", net: 3246, received: 363394, sent: 360147, txs: 2 },
    { wallet: "0x55243b1b3bb69796466bcf8f12f31e5905756036", net: 2923, received: 2923, sent: 0, txs: 1 },
    { wallet: "0x5c9d1a6c9753e711db9b880b0404cd653a0e0032", net: 2740, received: 2740, sent: 0, txs: 1 },
    { wallet: "0x88c40cd47ec72e481051c1c495fd0e7a23a30cee", net: 2603, received: 2603, sent: 0, txs: 1 },
    { wallet: "0xc9e1571520eb117c1b2b59133a4d2ee4da235ecd", net: 1918, received: 1918, sent: 0, txs: 1 },
    { wallet: "0x29b71fd85d1148098e7400b23880cafbaf19342f", net: 1918, received: 1918, sent: 0, txs: 1 },
    { wallet: "0x4005d4b50140bcf6221b3ae8df455e10600a02c0", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 1319, received: 1319, sent: 0, txs: 3 },
    { wallet: "0x999b2dc7d728ef06953f33c1f44c450b200e5588", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1086, received: 1302, sent: 216, txs: 16 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x9df14235393c7a9d2bc38db6c12c61b699e094c6", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0xb8294f8f8f6619a299688f1ca12cb967fc9a6176", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x17e792101c59dbc95fc780951484c73dbac282ab", net: 491, received: 491, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x907262769c7143796829c3d9595d8d4007e65cd1", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd7ca08ec1aee9cce8a8eda9365343ef197674e1a", net: 374, received: 250790, sent: 250416, txs: 3 },
    { wallet: "0x10916b18ce6deef279f0ee66fab6b6c0e3461b78", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xc2082544fe32590184b955f53628a53aeafd5c8b", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 274, received: 274, sent: 0, txs: 1 }
];

const WHALE_LABELS = {

};
