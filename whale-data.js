// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "September 13, 2026 at 02:36 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 270;
const WHALE_TOTAL_VOLUME      = 13382963;
const WHALE_BIGGEST_SINGLE    = 1508178;

const WHALE_TRANSFERS = [
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
    { hash: "0x96793153a2e8a3f2e217f461d02d1caf03d60b3cb92357607da97af9e2b3874a", ts: 1789216439, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25961361, type: "sell" },
    { hash: "0x9d20c4baed8379c89413a5a76870a56d1f9db73720b67a051e67d4cdb9c07dbb", ts: 1789208735, from: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 743876, block: 25960720, type: "transfer" },
    { hash: "0x775ab3d83ac75d85f7801a46f2b67142aa0452752eb7b79eda68fb1ed86289ca", ts: 1789207499, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25960617, type: "buy" },
    { hash: "0xe01e54d7095310984376d71d2a9ea04a836026428d94d21b2694df4cae7fe242", ts: 1789206011, from: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", to: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", amount: 743876, block: 25960493, type: "transfer" },
    { hash: "0xf9d753b8d2563ea1a535ea851f878f95b3f87678dd384ab51a6121082686e539", ts: 1789205831, from: "0x09fc9b7545020f6a51d113e495e0a451597969d3", to: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", amount: 743876, block: 25960478, type: "transfer" },
    { hash: "0xb01872508831ec7758b523a47f8008002384c15c80471c5a78df89cb5a9d3381", ts: 1789205135, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25960420, type: "buy" },
    { hash: "0x9b61caca1d1f1dbde12a20aa4c08e580837d2e76b5f64fb9c9e25e9463922447", ts: 1789202579, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25960207, type: "sell" },
    { hash: "0x8e70899494c26beb276f43ac4eb1b93b1a228e381ecca758bc9e1c4d2af351bb", ts: 1789201823, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25960144, type: "sell" },
    { hash: "0xb719d55eac3b097c69c56417eed86ce1da176a6aee1ff812ccb0945edeac2007", ts: 1789198895, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25959901, type: "buy" },
    { hash: "0x5de6ca693671977fa639ae9e7407f26f7ce3df5c389556b47bd6887311456aca", ts: 1789197839, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25959814, type: "sell" },
    { hash: "0xc1bf58fdf98e332b04337d5ba505cd16a9ff512c291b473c4fe59378120ed7fe", ts: 1789195103, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25959586, type: "buy" },
    { hash: "0x258fcc7db5bd30e14e5d04c9bc235a023dfe95d26b9f77dbbd90ee21c6a83a69", ts: 1789192847, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25959399, type: "sell" },
    { hash: "0x4e8110baa6a0c3b3c8b921ca6bab17a9711d12f38d2bf96c06dcb7dfbacfa0bb", ts: 1789192427, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25959364, type: "buy" },
    { hash: "0xd76c3e445a65b8d9e538e63f1991901efdf25971135812eba4398a8074e1a900", ts: 1789192379, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8bb88a3eafd6ba0b6cce254c0c447c4cf5860afe", amount: 139102, block: 25959360, type: "buy" },
    { hash: "0x29cc5e5af3cef6ec1bcd43e60fad421b4a7b1262b6d04fdf622ed4ab917ddb05", ts: 1789189883, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25959153, type: "sell" },
    { hash: "0x8d2316f0f1128a325baf854cf7f6084902cc15022aad410e169c02b0a7e58f0b", ts: 1789183547, from: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 726609, block: 25958627, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 3072536, received: 3829412, sent: 756876, txs: 7 },
    { wallet: "0x8bb88a3eafd6ba0b6cce254c0c447c4cf5860afe", net: 296366, received: 361711, sent: 65345, txs: 9 },
    { wallet: "0x09fc9b7545020f6a51d113e495e0a451597969d3", net: 183701, received: 3318728, sent: 3135027, txs: 90 },
    { wallet: "0x660378def1b48c6b47a64739a7060013ff5fd8a2", net: 89762, received: 89762, sent: 0, txs: 1 },
    { wallet: "0x5db6fb1ffef3bf4078c2e2fdb80cdc99e02f09a1", net: 64247, received: 64247, sent: 0, txs: 1 },
    { wallet: "0xc47df3f8335e81696abfe0d082d33bec570d4fa2", net: 60000, received: 120000, sent: 60000, txs: 3 },
    { wallet: "0x68374e811f889a43fde858526754dc5292aa82b2", net: 52524, received: 52693, sent: 169, txs: 3 },
    { wallet: "0x6e77863fc26a3c181c30634c487bb0facf530d8c", net: 46301, received: 46301, sent: 0, txs: 1 },
    { wallet: "0xeca52c2a56e32c1c98c33936d8bdb990bf0e8525", net: 29589, received: 29589, sent: 0, txs: 1 },
    { wallet: "0x67336cec42645f55059eff241cb02ea5cc52ff86", net: 21470, received: 114695, sent: 93225, txs: 4 },
    { wallet: "0x3402f587a513189dc2440e78af417274fa3f986a", net: 14384, received: 14384, sent: 0, txs: 1 },
    { wallet: "0x0d1930192957a6419de12dbb845f52a270bb90e4", net: 10521, received: 10521, sent: 0, txs: 1 },
    { wallet: "0x592bd906b7427f7439da672b86587356032c015b", net: 10274, received: 10274, sent: 0, txs: 1 },
    { wallet: "0x342644e8b8cce432921c0d04d9fa3236140fc5bb", net: 7607, received: 7607, sent: 0, txs: 1 },
    { wallet: "0xd7b2e95d7e29b0158daa91534806a62a4d008419", net: 7397, received: 7397, sent: 0, txs: 1 },
    { wallet: "0x351192ff1dc76b3656f5c979e224ce14f85348fc", net: 6556, received: 6556, sent: 0, txs: 1 },
    { wallet: "0x4dc40a8d58772fa690b910a559203e7e2f18b067", net: 4932, received: 4932, sent: 0, txs: 1 },
    { wallet: "0x1175f1a50bf89bc5182038ea27e6ecd2fd12d0ae", net: 4658, received: 4658, sent: 0, txs: 1 },
    { wallet: "0xb27a659480f419771b955fa65c45d91f45ef1353", net: 4155, received: 4155, sent: 0, txs: 1 },
    { wallet: "0x2d84a18d4d1356420f3115e4d11e26680671c62d", net: 4110, received: 4110, sent: 0, txs: 1 },
    { wallet: "0x446935174f93554ba4162099255ec0c165e2f741", net: 2055, received: 2055, sent: 0, txs: 1 },
    { wallet: "0x4228708cc62910caba6440357e3c4653d4b5ac49", net: 1964, received: 1964, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 1644, received: 1644, sent: 0, txs: 2 },
    { wallet: "0x1f0d9b1835e7b2844d94b0038c80ac387a439fcc", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 941, received: 941, sent: 0, txs: 1 },
    { wallet: "0x6387efd3bb9fa2b800c814068de6fbc40239b039", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x88c40cd47ec72e481051c1c495fd0e7a23a30cee", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x9a90217e1f1b6ce825c478c38ad0bc957bd4975c", net: 501, received: 501, sent: 0, txs: 1 },
    { wallet: "0xdeeeaad17da7519544463330ced17616032207cc", net: 429, received: 429, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 411, received: 540, sent: 129, txs: 8 },
    { wallet: "0xd4ecca8f08ac6fadaed2cb141637c95ee4c74d43", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x93cdc5653a707f7db2f63041d05a4ffaae47a45a", net: 129, received: 43143, sent: 43014, txs: 4 },
    { wallet: "0xa4d9d7068d84bbdf2e3caf1bbf2e1135bcd41984", net: 113, received: 113, sent: 0, txs: 1 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 62, received: 62, sent: 0, txs: 3 },
    { wallet: "0xb1a78eea2125efcf4c9153c551b3ece73e8a3ca7", net: 40, received: 40, sent: 0, txs: 1 },
    { wallet: "0xc06ebbefd94032b85424d51906e2a335efae264b", net: 6, received: 6, sent: 0, txs: 1 },
    { wallet: "0x716e3fad60bc867449795cd624da34aab3dc381f", net: 0, received: 102273, sent: 102273, txs: 5 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 0, received: 822, sent: 822, txs: 3 },
    { wallet: "0xfe263102682933297cb65dc813e5193249769251", net: 0, received: 102273, sent: 102273, txs: 6 },
    { wallet: "0x5c793a60e739e3dc1dc439c26eef87a9b3c64a32", net: 0, received: 240000, sent: 240000, txs: 8 },
    { wallet: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", net: 0, received: 3000529, sent: 3000529, txs: 8 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 161624, sent: 161624, txs: 14 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 178480, sent: 178480, txs: 20 },
    { wallet: "0x6762e034ce6ff41b38a25a4d8e6ef0fa87199454", net: 0, received: 7123, sent: 7123, txs: 3 }
];

const WHALE_LABELS = {

};
