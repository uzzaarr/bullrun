// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "September 14, 2026 at 11:28 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 251;
const WHALE_TOTAL_VOLUME      = 8678348;
const WHALE_BIGGEST_SINGLE    = 1099433;

const WHALE_TRANSFERS = [
    { hash: "0x746c04d612623080ea1238eea71882755f0e8b5dc9123147e3ed4009e9d53ec4", ts: 1789383935, from: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 165106, block: 25975284, type: "sell" },
    { hash: "0xd7eb92703d7850b0aeaba41d0eb6dbb71145944521fb2231f7f3b5088971993f", ts: 1789381427, from: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 164158, block: 25975075, type: "sell" },
    { hash: "0xee13841d71da2b7866c3ed5fdf2383f40c1416676549db6ea1b7b8c48077742f", ts: 1789378007, from: "0x8f10b468b06c6fd214b65f87778827f7d113f996", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100629, block: 25974790, type: "sell" },
    { hash: "0xee13841d71da2b7866c3ed5fdf2383f40c1416676549db6ea1b7b8c48077742f", ts: 1789378007, from: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", to: "0x8f10b468b06c6fd214b65f87778827f7d113f996", amount: 100629, block: 25974790, type: "transfer" },
    { hash: "0xee13841d71da2b7866c3ed5fdf2383f40c1416676549db6ea1b7b8c48077742f", ts: 1789378007, from: "0x4d0533006898cb292dfd1fe0dce8bad8bbb74cab", to: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", amount: 100629, block: 25974790, type: "transfer" },
    { hash: "0x7885a846cf45d43c69503b3c1f44db5fb4b71c746c4cbad98eda47d13500f32b", ts: 1789367171, from: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 1099433, block: 25973887, type: "transfer" },
    { hash: "0xd82ed622d8f7919116062895cf86ec2b5e233ba8f0ef78842403c15f194dce98", ts: 1789366223, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", amount: 166451, block: 25973808, type: "buy" },
    { hash: "0x1078826bcb8f9a9ab1da344bd054972b23286249e359a93d6944a133508fd4ec", ts: 1789362983, from: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", to: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", amount: 1099433, block: 25973538, type: "transfer" },
    { hash: "0xf7910bbcfb457426828c674e393b9a54bb732e377f2f56a1445beb17961f5e63", ts: 1789362803, from: "0x09fc9b7545020f6a51d113e495e0a451597969d3", to: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", amount: 1099433, block: 25973523, type: "transfer" },
    { hash: "0xc14b1f6c9f681c73e3b2213a99c5121227362512a033ec63bb65c90ef118d893", ts: 1789354067, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", amount: 170988, block: 25972797, type: "buy" },
    { hash: "0x34b079dc5bfe6f377f2744df4524e73ebc2f35d6b87a96387f79b3862275165f", ts: 1789354067, from: "0x1f2f10d1c40777ae1da742455c65828ff36df387", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 153801, block: 25972797, type: "sell" },
    { hash: "0x34b079dc5bfe6f377f2744df4524e73ebc2f35d6b87a96387f79b3862275165f", ts: 1789354067, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x1f2f10d1c40777ae1da742455c65828ff36df387", amount: 153801, block: 25972797, type: "buy" },
    { hash: "0x92a92b442835e9cee395c461865a49e191dcded408f438b0ec0e10ae2e00ec46", ts: 1789353503, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", amount: 171802, block: 25972750, type: "buy" },
    { hash: "0xe652638fc948ae48e37cd731a494cdf1fd692c04714892f67343bf0b602882a5", ts: 1789347035, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25972212, type: "buy" },
    { hash: "0x43ea63c53f3b3b443bb84627214ba9e70238dba7894a3847c303f532fa7239f4", ts: 1789343903, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25971953, type: "buy" },
    { hash: "0xe073459fb5ceadb9071d8df791fd533a66de1b3c15a22d8f39a060f3fd9b033b", ts: 1789338107, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xd862cdcfeb856c32b3c4f7563f4811d8ddfd42e2", amount: 157281, block: 25971473, type: "transfer" },
    { hash: "0xb15f18f91af07b5d5308da4fb744e4becae5f229a4438e57980b925e0d9c4f72", ts: 1789338107, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x27ad186bb115a2b41fb64553efd4ba5a74b83b08", amount: 127669, block: 25971473, type: "transfer" },
    { hash: "0x18e37c606f8aca885fba57ebc63238c7deb98537a9d328dd39c77905c0e2ffff", ts: 1789338059, from: "0x27ad186bb115a2b41fb64553efd4ba5a74b83b08", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 127669, block: 25971470, type: "sell" },
    { hash: "0x053cff00310ec2dadf1d9c1472c38d3319acf582b57ac4e51a7f9bbd14341701", ts: 1789338059, from: "0xd862cdcfeb856c32b3c4f7563f4811d8ddfd42e2", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 157281, block: 25971470, type: "sell" },
    { hash: "0xc1f70669ba3c1c44c982244f6b2a64c1ba8e01d80e3d19433b705efb06b0c4f2", ts: 1789337771, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 113609, block: 25971447, type: "sell" },
    { hash: "0xc1f70669ba3c1c44c982244f6b2a64c1ba8e01d80e3d19433b705efb06b0c4f2", ts: 1789337771, from: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 113609, block: 25971447, type: "transfer" },
    { hash: "0xa08053d27b7925381a7bb9f781bf5e62d6781e849925e0d153e32dd9e58f144c", ts: 1789337423, from: "0x9642b23ed1e01df1092b92641051881a322f5d4e", to: "0xd862cdcfeb856c32b3c4f7563f4811d8ddfd42e2", amount: 157281, block: 25971418, type: "transfer" },
    { hash: "0xd6710fcbed813d2ebb38e78e2a37d6e69fee660a9db7851a1ac1b79a1ceefe18", ts: 1789337351, from: "0xd862cdcfeb856c32b3c4f7563f4811d8ddfd42e2", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 157281, block: 25971412, type: "sell" },
    { hash: "0x2d513fb6f46821dbd9d1121853787a3bcc6ea5d238772d55b8d0f143789a5eb6", ts: 1789336871, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25971372, type: "sell" },
    { hash: "0xcce905240f2f7028765c70847432e6dd8c6fff3706611174cb860e1710ef3d5d", ts: 1789325447, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25970421, type: "buy" },
    { hash: "0xac25bd0c7b84a639c1b3abe611ec13b4705f984cf24208a4de04d6d292f85da7", ts: 1789323959, from: "0x1308535a9d6bc643e76c198d28b1092b2fde0a60", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 127651, block: 25970298, type: "transfer" },
    { hash: "0xfbfa83def13515bda664c922ccd93ef23b083b3a17a9e24ac61ac4606fd22cba", ts: 1789322531, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", amount: 113609, block: 25970180, type: "transfer" },
    { hash: "0xfbfa83def13515bda664c922ccd93ef23b083b3a17a9e24ac61ac4606fd22cba", ts: 1789322531, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 113609, block: 25970180, type: "buy" },
    { hash: "0x53ee1d73d19dea0b7ee4479806e24b24ef48834e43744598052a93a73e4648ac", ts: 1789320299, from: "0x1a87aaec7927ab2527bf790625cc12843ede910e", to: "0x1308535a9d6bc643e76c198d28b1092b2fde0a60", amount: 127651, block: 25969995, type: "transfer" },
    { hash: "0x0559660bb229b831ad0108c4d16c8c5ad24809905f47c5870436f0ac7650d310", ts: 1789311707, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 130158, block: 25969279, type: "sell" },
    { hash: "0x0559660bb229b831ad0108c4d16c8c5ad24809905f47c5870436f0ac7650d310", ts: 1789311707, from: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 130158, block: 25969279, type: "transfer" },
    { hash: "0x96563ed423586373c42654c252200a06381a0cde26da4d368a757b533f238d00", ts: 1789302359, from: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 859608, block: 25968502, type: "transfer" },
    { hash: "0x4d88c34ce43bb372b8782bbdbc8b7b23dc3087a877ed3167b4fe10c17539a951", ts: 1789301231, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x09fc9b7545020f6a51d113e495e0a451597969d3", amount: 817931, block: 25968408, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 983810, received: 2086692, sent: 1102882, txs: 6 },
    { wallet: "0x09fc9b7545020f6a51d113e495e0a451597969d3", net: 650022, received: 2634308, sent: 1984286, txs: 85 },
    { wallet: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", net: 200000, received: 300000, sent: 100000, txs: 4 },
    { wallet: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", net: 170988, received: 170988, sent: 0, txs: 1 },
    { wallet: "0xd526f3928744baf03aa06352687746f7f908d21c", net: 90411, received: 90411, sent: 0, txs: 1 },
    { wallet: "0x5c793a60e739e3dc1dc439c26eef87a9b3c64a32", net: 60000, received: 120000, sent: 60000, txs: 3 },
    { wallet: "0x3d9f7660372711661693c7da65e30044426aac2a", net: 28767, received: 28767, sent: 0, txs: 1 },
    { wallet: "0xa62e9768da140c8a8cd52fab246f602d34b0d40f", net: 17397, received: 17397, sent: 0, txs: 1 },
    { wallet: "0x47670e064a9cf54102481f199915e392ce357d60", net: 13151, received: 13151, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 13095, received: 13095, sent: 0, txs: 4 },
    { wallet: "0x67336cec42645f55059eff241cb02ea5cc52ff86", net: 10133, received: 299555, sent: 289422, txs: 7 },
    { wallet: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", net: 8989, received: 338253, sent: 329264, txs: 4 },
    { wallet: "0x5fe491067a0041c61aa588717158096944801907", net: 8391, received: 8391, sent: 0, txs: 1 },
    { wallet: "0xbf83ce96835bb66eb074ad0ec470dad133448581", net: 7945, received: 7945, sent: 0, txs: 1 },
    { wallet: "0x3b9a6f589393f106c5a9ace667d355834d355554", net: 5494, received: 5494, sent: 0, txs: 1 },
    { wallet: "0xea2a14e490032e9ae7f9e5f38f9f33ebab3e13b8", net: 3014, received: 3014, sent: 0, txs: 1 },
    { wallet: "0xecfb16eca28ae690c82742ad373c0a4bb3167dd6", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x1b0b1ad3e6a2fb69c48c2913fea012bc38f0a2e9", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 959, received: 959, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 757, received: 757, sent: 0, txs: 13 },
    { wallet: "0x950618712a5cd5a221c8a95930947cb76576eb76", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x0faeb60e1b406c2f84454f169a2512a5792e1aa8", net: 358, received: 42561, sent: 42203, txs: 2 },
    { wallet: "0x1f0d9b1835e7b2844d94b0038c80ac387a439fcc", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x5987d62c93f864fff531f79c1f6c8da51eaffce2", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x17bd38ef6732b00ed77859c2c4f2b8e45cd70d58", net: 6, received: 6, sent: 0, txs: 1 },
    { wallet: "0x05e7c72498fdecf1c3638b66af2740adea8d7f8f", net: 2, received: 89210, sent: 89208, txs: 2 },
    { wallet: "0xd862cdcfeb856c32b3c4f7563f4811d8ddfd42e2", net: 1, received: 314562, sent: 314562, txs: 4 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 158594, sent: 158594, txs: 14 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 191414, sent: 191414, txs: 16 },
    { wallet: "0x90323400e2916e3354be6c5788737fd3e3f60224", net: 0, received: 4126, sent: 4126, txs: 2 },
    { wallet: "0x070919ea5fceada1f6029d3e7e506f3ebbb6f602", net: 0, received: 32877, sent: 32877, txs: 3 },
    { wallet: "0x7764c8727dab012fce187df0736dab2b00ef691c", net: 0, received: 9863, sent: 9863, txs: 3 },
    { wallet: "0xdaffdcbca50c6c35505460db58c0fc29ca19534f", net: 0, received: 9863, sent: 9863, txs: 2 },
    { wallet: "0xdd7042708cb97a03dec630d0415e7fd424401709", net: 0, received: 9589, sent: 9589, txs: 3 },
    { wallet: "0x22ec88b9ff78c6f2458ab1a7aa8bb99d84bd4b86", net: 0, received: 12550, sent: 12550, txs: 2 },
    { wallet: "0x337685fdab40d39bd02028545a4ffa7d287cc3e2", net: 0, received: 12550, sent: 12550, txs: 2 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 650678, sent: 650678, txs: 24 },
    { wallet: "0x972c4dfa22f6f8305fa944048889f2beb549b5b0", net: 0, received: 32930, sent: 32930, txs: 3 },
    { wallet: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", net: 0, received: 1099433, sent: 1099433, txs: 2 },
    { wallet: "0x1f2f10d1c40777ae1da742455c65828ff36df387", net: 0, received: 153801, sent: 153801, txs: 2 },
    { wallet: "0xc027fa8ba76de0ffc996c7e7a96e2e0c1c6aac49", net: 0, received: 7945, sent: 7945, txs: 2 },
    { wallet: "0xbfaf29775c794f16b11e28f049e2d193a61bf31d", net: 0, received: 1088, sent: 1088, txs: 2 },
    { wallet: "0x40b2f1262a394a69f4446ceebca52bc58eb92bf4", net: 0, received: 1096, sent: 1096, txs: 3 },
    { wallet: "0xad729fcd02e52938c29284d0ab3b4f1c3f66802c", net: 0, received: 1096, sent: 1096, txs: 2 },
    { wallet: "0x6d6dc03f4910ad2aa103e41629958c80367904f7", net: 0, received: 1362, sent: 1362, txs: 2 }
];

const WHALE_LABELS = {

};
