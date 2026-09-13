// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "September 13, 2026 at 08:08 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 285;
const WHALE_TOTAL_VOLUME      = 12788108;
const WHALE_BIGGEST_SINGLE    = 1508178;

const WHALE_TRANSFERS = [
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
    { hash: "0x90b9324bc4709ca68241139e906fcc5183dc80ae871f34686b7fff65c20cdd53", ts: 1789248911, from: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 102654, block: 25964058, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 970747, received: 2545554, sent: 1574808, txs: 6 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 410790, received: 500000, sent: 89210, txs: 2 },
    { wallet: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", net: 100000, received: 400000, sent: 300000, txs: 7 },
    { wallet: "0x5c793a60e739e3dc1dc439c26eef87a9b3c64a32", net: 60000, received: 180000, sent: 120000, txs: 5 },
    { wallet: "0xd308fc4ec59cf2779eb75787810f05fc80fedb60", net: 42848, received: 43699, sent: 851, txs: 3 },
    { wallet: "0xc07f8b8d4b5a5c7cc420267c3f50eb0c9e72f306", net: 19178, received: 19178, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 18454, received: 18454, sent: 0, txs: 2 },
    { wallet: "0x47670e064a9cf54102481f199915e392ce357d60", net: 13151, received: 13151, sent: 0, txs: 1 },
    { wallet: "0xb388788b29fa56289c5f2b87b5fe29e41dd31b26", net: 11096, received: 11096, sent: 0, txs: 1 },
    { wallet: "0x342644e8b8cce432921c0d04d9fa3236140fc5bb", net: 7607, received: 7607, sent: 0, txs: 1 },
    { wallet: "0x3b9a6f589393f106c5a9ace667d355834d355554", net: 5494, received: 5494, sent: 0, txs: 1 },
    { wallet: "0x104ce1232266869b3519daabc7516260ca389628", net: 4658, received: 4658, sent: 0, txs: 1 },
    { wallet: "0x1175f1a50bf89bc5182038ea27e6ecd2fd12d0ae", net: 4658, received: 4658, sent: 0, txs: 1 },
    { wallet: "0xc62b1da436e6407efd69d82994a3c803ff9a527d", net: 3836, received: 3836, sent: 0, txs: 1 },
    { wallet: "0xecfb16eca28ae690c82742ad373c0a4bb3167dd6", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0x1f0d9b1835e7b2844d94b0038c80ac387a439fcc", net: 1918, received: 1918, sent: 0, txs: 2 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1000, received: 1129, sent: 129, txs: 18 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x950618712a5cd5a221c8a95930947cb76576eb76", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x9a90217e1f1b6ce825c478c38ad0bc957bd4975c", net: 501, received: 501, sent: 0, txs: 1 },
    { wallet: "0x0b2f7a288161b237f783c2cbc8a7f1f1305f6379", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x0faeb60e1b406c2f84454f169a2512a5792e1aa8", net: 358, received: 42561, sent: 42203, txs: 2 },
    { wallet: "0x722a6b207b2d49cc27bb2806d4de7b65d47a97b3", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x5987d62c93f864fff531f79c1f6c8da51eaffce2", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd4ecca8f08ac6fadaed2cb141637c95ee4c74d43", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x93cdc5653a707f7db2f63041d05a4ffaae47a45a", net: 129, received: 43143, sent: 43014, txs: 4 },
    { wallet: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", net: 110, received: 185511, sent: 185401, txs: 4 },
    { wallet: "0x660378def1b48c6b47a64739a7060013ff5fd8a2", net: 15, received: 89762, sent: 89747, txs: 2 },
    { wallet: "0x05e7c72498fdecf1c3638b66af2740adea8d7f8f", net: 2, received: 89210, sent: 89208, txs: 2 },
    { wallet: "0xa938442ef1914ed8002a268b2f79252a64006d04", net: 2, received: 16849, sent: 16847, txs: 3 },
    { wallet: "0x89c525d4d8d1ac88937266dc3b5d415d15d66814", net: 2, received: 16849, sent: 16847, txs: 3 },
    { wallet: "0x1f136460751bdf1eb7cf30a1ab8619a6dce7bb1a", net: 1, received: 16849, sent: 16848, txs: 3 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 0, received: 548, sent: 548, txs: 2 },
    { wallet: "0x519c9dbf12d99fceae8871fd5acc2797c0ca904a", net: 0, received: 3836, sent: 3836, txs: 3 },
    { wallet: "0x1308535a9d6bc643e76c198d28b1092b2fde0a60", net: 0, received: 127651, sent: 127651, txs: 2 },
    { wallet: "0x54e4271bf1096d69aeaa3640d827e3775589732c", net: 0, received: 1635, sent: 1635, txs: 2 },
    { wallet: "0x44926d92979d022991a31ed8ba12580bb9edaac8", net: 0, received: 1644, sent: 1644, txs: 3 },
    { wallet: "0x747dd095f8b63a66d7c31f41bb22afb698224e36", net: 0, received: 1644, sent: 1644, txs: 2 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 830358, sent: 830358, txs: 36 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 293988, sent: 293988, txs: 18 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 337166, sent: 337166, txs: 24 },
    { wallet: "0x01c579618213c31ebdfdbd68bb14d71d8329b9dc", net: 0, received: 959, sent: 959, txs: 3 },
    { wallet: "0xa315a2fc9b7bd651e0ebaa134859bd8153ff12a7", net: 0, received: 959, sent: 959, txs: 2 },
    { wallet: "0x4433b9e33b2bf0a901613ce302857475d53fe010", net: 0, received: 42203, sent: 42203, txs: 2 },
    { wallet: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", net: 0, received: 2367786, sent: 2367786, txs: 5 }
];

const WHALE_LABELS = {

};
