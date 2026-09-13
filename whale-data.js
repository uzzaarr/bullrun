// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "September 13, 2026 at 10:56 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 305;
const WHALE_TOTAL_VOLUME      = 12081505;
const WHALE_BIGGEST_SINGLE    = 1508178;

const WHALE_TRANSFERS = [
    { hash: "0x07f4bb4bb850560d12ab92114a1b5ab8b2f2714eb32917949477c2f4d65a7d0e", ts: 1789287899, from: "0x51b97d5c29af7e89bca1f5aa05de0224b9ad186b", to: "0x9642b23ed1e01df1092b92641051881a322f5d4e", amount: 500000, block: 25967298, type: "transfer" },
    { hash: "0x4b5f63ac72945550273cb2c88e5cd08de09fe9fb91f90c63378d457292fc159b", ts: 1789287647, from: "0x58edf78281334335effa23101bbe3371b6a36a51", to: "0x51b97d5c29af7e89bca1f5aa05de0224b9ad186b", amount: 500000, block: 25967277, type: "transfer" },
    { hash: "0xc59720ab94c88a5aac4570f7ed424f1f2fbe044f00a82290a501693894d855a0", ts: 1789287023, from: "0xc19546d779445ebe498abb9b903a494c648427ed", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 213365, block: 25967225, type: "sell" },
    { hash: "0xefdde62683b449a574e2ff57ef7b87b861708956f185fb2f7056b55ca0f7869a", ts: 1789286867, from: "0xab9f6ac1c97b3233b9d22078a0cc003028e6a25f", to: "0xc19546d779445ebe498abb9b903a494c648427ed", amount: 213699, block: 25967212, type: "transfer" },
    { hash: "0x0cd52e3e5e6d9b830cdac34b0eee41383a16c0ffa3b08d886ec61b86e5633bdc", ts: 1789286819, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xab9f6ac1c97b3233b9d22078a0cc003028e6a25f", amount: 213699, block: 25967208, type: "transfer" },
    { hash: "0x48a27fc219dd9a491ea0fd5d74be69740730c3732e3018ba538b5e81b328e4c7", ts: 1789285751, from: "0x24c5f17686a7c969cbc7384e28e0c654f270ea89", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 165201, block: 25967120, type: "sell" },
    { hash: "0xb78b87368cb339bd2b96546c2905d88a04632110a1131a348d45ca9be7547006", ts: 1789278263, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x67336cec42645f55059eff241cb02ea5cc52ff86", amount: 161316, block: 25966496, type: "buy" },
    { hash: "0x12c933100ddfae0148f570329ae3ca04e4d2ca4bdb6260fcd019ebbdfcc229b0", ts: 1789277447, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25966429, type: "sell" },
    { hash: "0x4c3a7a2af4d36b499f6825ee15ae4569ccf0999f17f8804060f2028e5543ff23", ts: 1789276955, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25966388, type: "sell" },
    { hash: "0x09b7c1342cfa0d8468eace32c37bddbe7fb6818669fcd08cbb793eea1731c0ca", ts: 1789274999, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25966225, type: "buy" },
    { hash: "0xf074c44ff88b77e6c68ccbdb21b3f2b2bfebd9b81988ee5995938943726f32f3", ts: 1789274843, from: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 163062, block: 25966212, type: "sell" },
    { hash: "0x9230befdb56c754b97ed34f726a51fe4da61215a9a7b0f9d1100fc8757d7243d", ts: 1789274651, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25966196, type: "buy" },
    { hash: "0x2ea011e830a5baf112044481ef23d37ee8523bb5547925cef8f8baac0a344eaf", ts: 1789271291, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", amount: 165539, block: 25965918, type: "buy" },
    { hash: "0x4a8fe3036f031b1bc56e3cba129c46c003beab7b149a9d64c72c3b0bf54f7a7c", ts: 1789268015, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25965646, type: "sell" },
    { hash: "0x40a766057b8553a511cdc951239ee1781e4ad1abeb01f5224de1a3940b92ccfa", ts: 1789262975, from: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 1508178, block: 25965226, type: "transfer" },
    { hash: "0x6cbfab77294e2b6a007ca8775c6e4b7ea59db8258470e26f095ea1bb7e5cdb18", ts: 1789261583, from: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", to: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", amount: 755079, block: 25965111, type: "transfer" },
    { hash: "0xc9c183c82a239e70728a33c1554ce95f53ba7e05f3b239460223d9d1b9e1f2df", ts: 1789261439, from: "0x09fc9b7545020f6a51d113e495e0a451597969d3", to: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", amount: 755079, block: 25965099, type: "transfer" },
    { hash: "0x819345817072e282e58ada1ef3c6f630e7a7e2c178a1e83eb7ac687e42279775", ts: 1789260743, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x09fc9b7545020f6a51d113e495e0a451597969d3", amount: 756876, block: 25965041, type: "transfer" },
    { hash: "0x8eaa40a078b7555dd8d5c4d721a2e66d4c0c8935aee4784839f6b466b3c32935", ts: 1789259591, from: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", to: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", amount: 753099, block: 25964946, type: "transfer" },
    { hash: "0x04273ffd63cec755848b1ab8a1fae403c08b74e994944f59e2d7faf09a1acabc", ts: 1789259399, from: "0x09fc9b7545020f6a51d113e495e0a451597969d3", to: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", amount: 753099, block: 25964930, type: "transfer" },
    { hash: "0xb95fe228b311d52a2a1b6061336fcedefb258d68b48e02164198064627881b4c", ts: 1789259315, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25964923, type: "buy" },
    { hash: "0x3490dfb68392d206892fdc81a8e137d6cb03e3f8502880ad67c22a58985b3031", ts: 1789249067, from: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 165918, block: 25964071, type: "sell" },
    { hash: "0x90b9324bc4709ca68241139e906fcc5183dc80ae871f34686b7fff65c20cdd53", ts: 1789248911, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 102654, block: 25964058, type: "sell" },
    { hash: "0x90b9324bc4709ca68241139e906fcc5183dc80ae871f34686b7fff65c20cdd53", ts: 1789248911, from: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 102654, block: 25964058, type: "transfer" },
    { hash: "0x7e24bb2efb9dbaae987cb76ac59ba56b4c65ba3638f83e51c09581ac9f34ac5a", ts: 1789235399, from: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 164755, block: 25962937, type: "sell" },
    { hash: "0xe68847a61dd7c76da14ae2270b1b5c57792b2a70e88fbf391ac58cf8d3e5e116", ts: 1789235387, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 211728, block: 25962936, type: "sell" },
    { hash: "0xe68847a61dd7c76da14ae2270b1b5c57792b2a70e88fbf391ac58cf8d3e5e116", ts: 1789235387, from: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 211728, block: 25962936, type: "transfer" },
    { hash: "0x3a9a03df24694fc78ffb8783e0ceeb9b93cacd44405e6419dd9a38a790121211", ts: 1789233935, from: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 748476, block: 25962815, type: "transfer" },
    { hash: "0xa1329f54f5c8e8535ab327de0d795d086eeb8e01b568ff039da919f2ce1a4c4d", ts: 1789232255, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", amount: 166171, block: 25962676, type: "buy" },
    { hash: "0xcd6d9dd0d51c46025fd6a43381bb20b7a7d3e74e02341ba431b39ff5403c4820", ts: 1789231367, from: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", to: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", amount: 748476, block: 25962602, type: "transfer" },
    { hash: "0x27c52b342e502b97eb3893affd928149c3f51ff29cebf7cfa4f63c73b7ea1a0f", ts: 1789231199, from: "0x09fc9b7545020f6a51d113e495e0a451597969d3", to: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", amount: 748476, block: 25962588, type: "transfer" },
    { hash: "0xdb325905fe02e88145e418049cd2f7885030b344443981b424720a92a2d40d26", ts: 1789227467, from: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 167080, block: 25962278, type: "sell" },
    { hash: "0x93bbf0b6052bb65c3936bd469c1e0f62e0ff117ae92bcd1407fb0f37f377fef1", ts: 1789222523, from: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 166098, block: 25961868, type: "sell" },
    { hash: "0x11afe1dc5e0d1a8d273f9cf2d1cc9790f97cccf459cc7c442aff5ddd11ed0bd6", ts: 1789216715, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25961384, type: "sell" },
    { hash: "0x96793153a2e8a3f2e217f461d02d1caf03d60b3cb92357607da97af9e2b3874a", ts: 1789216439, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25961361, type: "sell" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 1549895, received: 2306771, sent: 756876, txs: 4 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 500000, received: 500000, sent: 0, txs: 1 },
    { wallet: "0x09fc9b7545020f6a51d113e495e0a451597969d3", net: 388802, received: 2944167, sent: 2555366, txs: 83 },
    { wallet: "0x68374e811f889a43fde858526754dc5292aa82b2", net: 52693, received: 52693, sent: 0, txs: 2 },
    { wallet: "0xd308fc4ec59cf2779eb75787810f05fc80fedb60", net: 42848, received: 43699, sent: 851, txs: 3 },
    { wallet: "0xeca52c2a56e32c1c98c33936d8bdb990bf0e8525", net: 29589, received: 29589, sent: 0, txs: 1 },
    { wallet: "0xc07f8b8d4b5a5c7cc420267c3f50eb0c9e72f306", net: 19178, received: 19178, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 16820, received: 16820, sent: 0, txs: 1 },
    { wallet: "0xb388788b29fa56289c5f2b87b5fe29e41dd31b26", net: 11096, received: 11096, sent: 0, txs: 1 },
    { wallet: "0x0d1930192957a6419de12dbb845f52a270bb90e4", net: 10521, received: 10521, sent: 0, txs: 1 },
    { wallet: "0x342644e8b8cce432921c0d04d9fa3236140fc5bb", net: 7607, received: 7607, sent: 0, txs: 1 },
    { wallet: "0x104ce1232266869b3519daabc7516260ca389628", net: 4658, received: 4658, sent: 0, txs: 1 },
    { wallet: "0x1175f1a50bf89bc5182038ea27e6ecd2fd12d0ae", net: 4658, received: 4658, sent: 0, txs: 1 },
    { wallet: "0xb27a659480f419771b955fa65c45d91f45ef1353", net: 4155, received: 4155, sent: 0, txs: 1 },
    { wallet: "0xc62b1da436e6407efd69d82994a3c803ff9a527d", net: 3836, received: 3836, sent: 0, txs: 1 },
    { wallet: "0x1f0d9b1835e7b2844d94b0038c80ac387a439fcc", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 961, received: 1090, sent: 129, txs: 15 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0xd4ecca8f08ac6fadaed2cb141637c95ee4c74d43", net: 548, received: 548, sent: 0, txs: 2 },
    { wallet: "0x9a90217e1f1b6ce825c478c38ad0bc957bd4975c", net: 501, received: 501, sent: 0, txs: 1 },
    { wallet: "0xdeeeaad17da7519544463330ced17616032207cc", net: 429, received: 429, sent: 0, txs: 1 },
    { wallet: "0x0b2f7a288161b237f783c2cbc8a7f1f1305f6379", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x722a6b207b2d49cc27bb2806d4de7b65d47a97b3", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x93cdc5653a707f7db2f63041d05a4ffaae47a45a", net: 129, received: 43143, sent: 43014, txs: 4 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 62, received: 62, sent: 0, txs: 2 },
    { wallet: "0xb1a78eea2125efcf4c9153c551b3ece73e8a3ca7", net: 40, received: 40, sent: 0, txs: 1 },
    { wallet: "0x660378def1b48c6b47a64739a7060013ff5fd8a2", net: 15, received: 89762, sent: 89747, txs: 2 },
    { wallet: "0xa938442ef1914ed8002a268b2f79252a64006d04", net: 2, received: 16849, sent: 16847, txs: 3 },
    { wallet: "0x89c525d4d8d1ac88937266dc3b5d415d15d66814", net: 2, received: 16849, sent: 16847, txs: 3 },
    { wallet: "0x1f136460751bdf1eb7cf30a1ab8619a6dce7bb1a", net: 1, received: 16849, sent: 16848, txs: 3 },
    { wallet: "0x1be3f39f61769003f151c0d0bd898ba422900212", net: 0, received: 16849, sent: 16849, txs: 2 },
    { wallet: "0x921b4ee464d65a1a50059d67682011b06250e94b", net: 0, received: 16820, sent: 16820, txs: 2 },
    { wallet: "0x04eb3e586641b64ab52bcb71b619b49087e416ca", net: 0, received: 16849, sent: 16849, txs: 3 },
    { wallet: "0xd5a47398f9b2d819b1c6521b095d7ee01c9afc44", net: 0, received: 16849, sent: 16849, txs: 2 },
    { wallet: "0x4420e5673a381fa4b1782015549f0da1d1b7ff35", net: 0, received: 16849, sent: 16849, txs: 2 },
    { wallet: "0x099105baf4d6080a2cc29765dd78a4c4a7a13385", net: 0, received: 16849, sent: 16849, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 300773, sent: 300773, txs: 20 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 343951, sent: 343951, txs: 26 },
    { wallet: "0xfd9072f3715419414e2345da949fe5048c839877", net: 0, received: 3836, sent: 3836, txs: 2 },
    { wallet: "0x66a9893cc07d91d95644aedd05d03f95e1dba8af", net: 0, received: 1795, sent: 1795, txs: 2 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 670883, sent: 670883, txs: 26 },
    { wallet: "0x51b97d5c29af7e89bca1f5aa05de0224b9ad186b", net: 0, received: 500000, sent: 500000, txs: 2 },
    { wallet: "0xc19546d779445ebe498abb9b903a494c648427ed", net: 0, received: 213699, sent: 213699, txs: 3 }
];

const WHALE_LABELS = {

};
