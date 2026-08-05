// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "August 5, 2026 at 08:26 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 225;
const WHALE_TOTAL_VOLUME      = 8939220;
const WHALE_BIGGEST_SINGLE    = 4469610;

const WHALE_TRANSFERS = [
    { hash: "0x759ebe01b1b9dbca9f90b788b30a9f668e34b6503b218a5e679e718db757bd5b", ts: 1785882335, from: "0x6455327f820edd69c4cd665b995e0fec679d7f9e", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 4469610, block: 25684529, type: "transfer" },
    { hash: "0x073b5816222cdeda488ca06b6f0e0877d5b28f62aac38c4d5baebe5fcd698b74", ts: 1785879059, from: "0x58edf78281334335effa23101bbe3371b6a36a51", to: "0x6455327f820edd69c4cd665b995e0fec679d7f9e", amount: 4469610, block: 25684259, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 4469610, received: 4469610, sent: 0, txs: 1 },
    { wallet: "0x67336cec42645f55059eff241cb02ea5cc52ff86", net: 189290, received: 189290, sent: 0, txs: 8 },
    { wallet: "0x2970e620ff7cb1fc2d26ea6672df1378e866fe5b", net: 81918, received: 81918, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 81885, received: 81885, sent: 0, txs: 2 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 78932, received: 78932, sent: 0, txs: 1 },
    { wallet: "0xd33120b8767dbe4d7b1a4290ce56228fc6854c05", net: 23836, received: 23836, sent: 0, txs: 1 },
    { wallet: "0x49a2299840a9a5495cae51415548c2b1344bd4f3", net: 13151, received: 13151, sent: 0, txs: 1 },
    { wallet: "0x651b2ba365a5293dddc7343b2fbf0e5f8271426b", net: 10000, received: 30000, sent: 20000, txs: 2 },
    { wallet: "0xb6d4fb85c951d5948137a9f9dce9b7b4363a6799", net: 5479, received: 5479, sent: 0, txs: 1 },
    { wallet: "0xee24dffca375eaa986e0159cbec5994f759c03ce", net: 3014, received: 3014, sent: 0, txs: 1 },
    { wallet: "0xc1601b2620b38b6dec38ecf17007a94818890dca", net: 2740, received: 2740, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x20694bb5c906ee71e696587be233284f995564b7", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x20fa473270be0c37a33e6592428b428ff808f653", net: 1781, received: 1781, sent: 0, txs: 1 },
    { wallet: "0x1601a91f99f6dd7cb805e70d9c1903f9b0eb9b75", net: 1781, received: 1781, sent: 0, txs: 1 },
    { wallet: "0x07c9128b7231950b6d306d0d3aa1f2ad580598da", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 1496, received: 1496, sent: 0, txs: 1 },
    { wallet: "0x793a9558a0ca9de122cbffa8a8b5542213672a19", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 488, received: 488, sent: 0, txs: 13 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 186, received: 186, sent: 0, txs: 3 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x40a88150427465cca3911358edc96cf16f06e431", net: 9, received: 9, sent: 0, txs: 1 },
    { wallet: "0xd493066498ace409059fda4c1bcd2e73d8cffe01", net: 4, received: 4, sent: 0, txs: 1 },
    { wallet: "0x9899f62ecf16b70bffc88677023026c47e48c218", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 76716, sent: 76716, txs: 16 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 124088, sent: 124088, txs: 19 },
    { wallet: "0xbaa8254ae8b9769ae9053d9f25cca5f90f07427e", net: 0, received: 5753, sent: 5753, txs: 3 },
    { wallet: "0x21dce84e1c9ea03025ddaefd186d6119ccb1e819", net: 0, received: 5753, sent: 5753, txs: 2 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 746528, sent: 746528, txs: 92 },
    { wallet: "0x111116053f09d34a7eae8102887004445176ca11", net: 0, received: 43937, sent: 43937, txs: 9 },
    { wallet: "0x7764c8727dab012fce187df0736dab2b00ef691c", net: 0, received: 19726, sent: 19726, txs: 3 },
    { wallet: "0xdaffdcbca50c6c35505460db58c0fc29ca19534f", net: 0, received: 19726, sent: 19726, txs: 2 },
    { wallet: "0x0889e9327b98d7d1be3c301a4585ff3330502c9a", net: 0, received: 55700, sent: 55700, txs: 9 },
    { wallet: "0x7ba98b5263b87a206d6d1d6087588e479167700a", net: 0, received: 73973, sent: 73972, txs: 5 },
    { wallet: "0x11111605ef067242653c980b8f6f1ffe50305afe", net: 0, received: 36921, sent: 36921, txs: 3 },
    { wallet: "0x2d84a18d4d1356420f3115e4d11e26680671c62d", net: 0, received: 2740, sent: 2740, txs: 3 },
    { wallet: "0x0ce2b366e425d7e53904ea61cfb2ea03b06283f7", net: 0, received: 822, sent: 822, txs: 3 },
    { wallet: "0xa0952edc243077c05148828cc5432c37486858c3", net: 0, received: 822, sent: 822, txs: 2 },
    { wallet: "0x6455327f820edd69c4cd665b995e0fec679d7f9e", net: 0, received: 4469610, sent: 4469610, txs: 2 },
    { wallet: "0xdb3812cd8d20f27888677ddc97df1241850f8c48", net: 0, received: 18935, sent: 18935, txs: 2 },
    { wallet: "0x8257eea3d474ea047ef1aa124f85a4fb1700507b", net: 0, received: 1370, sent: 1370, txs: 3 },
    { wallet: "0x6ecac0b40c73a8a776d8e0cd304440ab952b3c64", net: 0, received: 1096, sent: 1096, txs: 2 },
    { wallet: "0xa2697a4652e85d8fc6cfa11beb328edddaf33598", net: 0, received: 13899, sent: 13899, txs: 2 },
    { wallet: "0xda2a53c548fcc60cb9f275ff67e7203593ff90bd", net: 0, received: 13899, sent: 13899, txs: 2 },
    { wallet: "0x2316417e39e0d394b9341624efb3e3368cdd52e4", net: 0, received: 2740, sent: 2740, txs: 2 },
    { wallet: "0xd7185c486dd88eb9f3573b878a1469485644091f", net: 0, received: 3889, sent: 3889, txs: 2 },
    { wallet: "0xd3df5bce12bc0789add17a823d723ed8e499d538", net: 0, received: 3889, sent: 3889, txs: 2 }
];

const WHALE_LABELS = {

};
