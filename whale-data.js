// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "September 14, 2026 at 02:52 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 306;
const WHALE_TOTAL_VOLUME      = 9097544;
const WHALE_BIGGEST_SINGLE    = 859608;

const WHALE_TRANSFERS = [
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
    { hash: "0x4d88c34ce43bb372b8782bbdbc8b7b23dc3087a877ed3167b4fe10c17539a951", ts: 1789301231, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x09fc9b7545020f6a51d113e495e0a451597969d3", amount: 817931, block: 25968408, type: "transfer" },
    { hash: "0x59a407358a65f061b66be3ce9ed007235520f7ed03562a46134ca63f4595cbd2", ts: 1789298543, from: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", to: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", amount: 859608, block: 25968184, type: "transfer" },
    { hash: "0x68fad9d5f5a5f8e44a99b78910230e7f77b920888e36408fe37c25442edbffa6", ts: 1789298351, from: "0x09fc9b7545020f6a51d113e495e0a451597969d3", to: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", amount: 859608, block: 25968168, type: "transfer" },
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
    { hash: "0x4a8fe3036f031b1bc56e3cba129c46c003beab7b149a9d64c72c3b0bf54f7a7c", ts: 1789268015, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25965646, type: "sell" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x09fc9b7545020f6a51d113e495e0a451597969d3", net: 368776, received: 2278449, sent: 1909673, txs: 79 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 253510, received: 500000, sent: 246490, txs: 3 },
    { wallet: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", net: 171912, received: 357313, sent: 185401, txs: 5 },
    { wallet: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", net: 155580, received: 170988, sent: 15408, txs: 2 },
    { wallet: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", net: 100000, received: 500000, sent: 400000, txs: 9 },
    { wallet: "0xd308fc4ec59cf2779eb75787810f05fc80fedb60", net: 42848, received: 43699, sent: 851, txs: 3 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 29915, received: 29915, sent: 0, txs: 5 },
    { wallet: "0x3d9f7660372711661693c7da65e30044426aac2a", net: 28767, received: 28767, sent: 0, txs: 1 },
    { wallet: "0xc07f8b8d4b5a5c7cc420267c3f50eb0c9e72f306", net: 19178, received: 19178, sent: 0, txs: 1 },
    { wallet: "0x47670e064a9cf54102481f199915e392ce357d60", net: 13151, received: 13151, sent: 0, txs: 1 },
    { wallet: "0xb388788b29fa56289c5f2b87b5fe29e41dd31b26", net: 11096, received: 11096, sent: 0, txs: 1 },
    { wallet: "0x5fe491067a0041c61aa588717158096944801907", net: 8391, received: 8391, sent: 0, txs: 1 },
    { wallet: "0xbf83ce96835bb66eb074ad0ec470dad133448581", net: 7945, received: 7945, sent: 0, txs: 1 },
    { wallet: "0x3b9a6f589393f106c5a9ace667d355834d355554", net: 5494, received: 5494, sent: 0, txs: 1 },
    { wallet: "0x104ce1232266869b3519daabc7516260ca389628", net: 4658, received: 4658, sent: 0, txs: 1 },
    { wallet: "0xc62b1da436e6407efd69d82994a3c803ff9a527d", net: 3836, received: 3836, sent: 0, txs: 1 },
    { wallet: "0xecfb16eca28ae690c82742ad373c0a4bb3167dd6", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0x1b0b1ad3e6a2fb69c48c2913fea012bc38f0a2e9", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 959, received: 959, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 944, received: 944, sent: 0, txs: 18 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x950618712a5cd5a221c8a95930947cb76576eb76", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x0b2f7a288161b237f783c2cbc8a7f1f1305f6379", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x0faeb60e1b406c2f84454f169a2512a5792e1aa8", net: 358, received: 42561, sent: 42203, txs: 2 },
    { wallet: "0x1f0d9b1835e7b2844d94b0038c80ac387a439fcc", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x722a6b207b2d49cc27bb2806d4de7b65d47a97b3", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x5987d62c93f864fff531f79c1f6c8da51eaffce2", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd4ecca8f08ac6fadaed2cb141637c95ee4c74d43", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x05e7c72498fdecf1c3638b66af2740adea8d7f8f", net: 2, received: 89210, sent: 89208, txs: 2 },
    { wallet: "0xa938442ef1914ed8002a268b2f79252a64006d04", net: 2, received: 16849, sent: 16847, txs: 3 },
    { wallet: "0x89c525d4d8d1ac88937266dc3b5d415d15d66814", net: 2, received: 16849, sent: 16847, txs: 3 },
    { wallet: "0xd862cdcfeb856c32b3c4f7563f4811d8ddfd42e2", net: 1, received: 314562, sent: 314562, txs: 4 },
    { wallet: "0x1f136460751bdf1eb7cf30a1ab8619a6dce7bb1a", net: 1, received: 16849, sent: 16848, txs: 3 },
    { wallet: "0x1f2f10d1c40777ae1da742455c65828ff36df387", net: 0, received: 153801, sent: 153801, txs: 2 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 189402, sent: 189402, txs: 16 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 155042, sent: 155042, txs: 12 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 903252, sent: 903252, txs: 40 },
    { wallet: "0xc027fa8ba76de0ffc996c7e7a96e2e0c1c6aac49", net: 0, received: 7945, sent: 7945, txs: 2 },
    { wallet: "0xbfaf29775c794f16b11e28f049e2d193a61bf31d", net: 0, received: 1088, sent: 1088, txs: 2 },
    { wallet: "0x40b2f1262a394a69f4446ceebca52bc58eb92bf4", net: 0, received: 1096, sent: 1096, txs: 3 },
    { wallet: "0xad729fcd02e52938c29284d0ab3b4f1c3f66802c", net: 0, received: 1096, sent: 1096, txs: 2 },
    { wallet: "0x6d6dc03f4910ad2aa103e41629958c80367904f7", net: 0, received: 1362, sent: 1362, txs: 2 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 0, received: 1370, sent: 1370, txs: 2 },
    { wallet: "0x8c5ee6a0a6c5fbad919d310d5283b592ca842cc8", net: 0, received: 9010, sent: 9010, txs: 2 },
    { wallet: "0x41e896e6eb9856aa413234ecbfeef4060e9d8531", net: 0, received: 9041, sent: 9041, txs: 3 },
    { wallet: "0x27ad186bb115a2b41fb64553efd4ba5a74b83b08", net: 0, received: 127669, sent: 127669, txs: 2 },
    { wallet: "0x5c793a60e739e3dc1dc439c26eef87a9b3c64a32", net: 0, received: 120000, sent: 120000, txs: 4 }
];

const WHALE_LABELS = {

};
