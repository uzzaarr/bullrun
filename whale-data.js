// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 3, 2026 at 08:54 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 182;
const WHALE_TOTAL_VOLUME      = 10804535;
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
    { hash: "0x0b2f363def4dea03b901cfed12e4df240e09303d742e5ddb7295ff19ebbab129", ts: 1782994091, from: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 282331, block: 25444728, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xa8c3e1a954b0271dd9c3c80f44a56dde9b68d5c8", net: 6506849, received: 6506849, sent: 0, txs: 1 },
    { wallet: "0x236cd9dd6d431bfe47b31cbc1b92debac2524ab9", net: 504156, received: 504156, sent: 0, txs: 2 },
    { wallet: "0x6ccdc93dd3e792eeb7e4c9fafbc44d5d8fac1a1b", net: 360147, received: 360147, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 282331, received: 282331, sent: 0, txs: 1 },
    { wallet: "0xbbf7e985e1e0ca6f854cecb5096274e8e797e8b4", net: 113874, received: 113874, sent: 0, txs: 2 },
    { wallet: "0xe2faf292ce91a961cf922177e1937652dd129e99", net: 94247, received: 94247, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 84374, received: 84374, sent: 0, txs: 1 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 80300, received: 80300, sent: 0, txs: 9 },
    { wallet: "0x57ba479e67ae2107ebf5b4bf6f45761eeacbdbba", net: 47260, received: 47260, sent: 0, txs: 1 },
    { wallet: "0xe28d7502e70c9b45de8218b122a72a1eaf972695", net: 43519, received: 43519, sent: 0, txs: 1 },
    { wallet: "0xcafc51eab28e52c8a98955382ea19c6bc06b6029", net: 29299, received: 29299, sent: 0, txs: 1 },
    { wallet: "0x9cfdda1408cd99a2c98402473a647fbae27be5a7", net: 20693, received: 20693, sent: 0, txs: 1 },
    { wallet: "0x716e3fad60bc867449795cd624da34aab3dc381f", net: 12250, received: 12250, sent: 0, txs: 2 },
    { wallet: "0x299bf882a249ded7ef13754c4d271fe3648216b7", net: 11771, received: 11771, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 6575, received: 6575, sent: 0, txs: 1 },
    { wallet: "0x1a996eb2a69423926d60973fc3d73cf1fa847a2f", net: 6575, received: 6575, sent: 0, txs: 1 },
    { wallet: "0xbbc2e9fadd02f03bda75894d84148862f294983a", net: 4932, received: 4932, sent: 0, txs: 1 },
    { wallet: "0x139724a176a50f5089f4ed5bc653124e9d2c97f3", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0x7c876bdaa5c038e19f633714f622f6def949b102", net: 3246, received: 363394, sent: 360147, txs: 2 },
    { wallet: "0x55243b1b3bb69796466bcf8f12f31e5905756036", net: 2923, received: 2923, sent: 0, txs: 1 },
    { wallet: "0x5c9d1a6c9753e711db9b880b0404cd653a0e0032", net: 2740, received: 2740, sent: 0, txs: 1 },
    { wallet: "0x88c40cd47ec72e481051c1c495fd0e7a23a30cee", net: 2603, received: 2603, sent: 0, txs: 1 },
    { wallet: "0xc9e1571520eb117c1b2b59133a4d2ee4da235ecd", net: 1918, received: 1918, sent: 0, txs: 1 },
    { wallet: "0x29b71fd85d1148098e7400b23880cafbaf19342f", net: 1918, received: 1918, sent: 0, txs: 1 },
    { wallet: "0x4005d4b50140bcf6221b3ae8df455e10600a02c0", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 1319, received: 1319, sent: 0, txs: 3 },
    { wallet: "0x999b2dc7d728ef06953f33c1f44c450b200e5588", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1055, received: 1271, sent: 216, txs: 14 },
    { wallet: "0x9df14235393c7a9d2bc38db6c12c61b699e094c6", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x907262769c7143796829c3d9595d8d4007e65cd1", net: 548, received: 548, sent: 0, txs: 2 },
    { wallet: "0x17e792101c59dbc95fc780951484c73dbac282ab", net: 491, received: 491, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x10916b18ce6deef279f0ee66fab6b6c0e3461b78", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xc2082544fe32590184b955f53628a53aeafd5c8b", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x9631288f4050f7cfbf77b77f8540decf6cfc7012", net: 6, received: 6, sent: 0, txs: 1 },
    { wallet: "0x04c7b4e2db71b2abffe4f2131cf2754533cf32da", net: 0, received: 113874, sent: 113874, txs: 6 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 79682, sent: 79682, txs: 19 },
    { wallet: "0x163f3103de041d25464e2c8a4f8f3187ec1856e0", net: 0, received: 23391, sent: 23391, txs: 6 },
    { wallet: "0x8a722431c321be4f0ee127ba90d40efa92bdea32", net: 0, received: 5035, sent: 5035, txs: 2 },
    { wallet: "0x4a3f4cc42ff0b8a18474c68031d4ce46605bd86d", net: 0, received: 11771, sent: 11771, txs: 2 },
    { wallet: "0x22ecf2bed494976503a8087add30e134c30fbd98", net: 0, received: 13216, sent: 13216, txs: 2 },
    { wallet: "0x61069bea4361ec129593aa34ab84975e7d8273cf", net: 0, received: 18356, sent: 18356, txs: 3 },
    { wallet: "0x242bc125a41885dd821e447e66333ba4666c1d27", net: 0, received: 18356, sent: 18356, txs: 2 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 77975, sent: 77975, txs: 7 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 304584, sent: 304584, txs: 26 },
    { wallet: "0x070919ea5fceada1f6029d3e7e506f3ebbb6f602", net: 0, received: 3288, sent: 3288, txs: 3 },
    { wallet: "0xeca52c2a56e32c1c98c33936d8bdb990bf0e8525", net: 0, received: 3288, sent: 3288, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 744067, sent: 744067, txs: 28 }
];

const WHALE_LABELS = {

};
