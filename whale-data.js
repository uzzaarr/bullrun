// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 26, 2026 at 08:55 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 212;
const WHALE_TOTAL_VOLUME      = 42673096;
const WHALE_BIGGEST_SINGLE    = 20713458;

const WHALE_TRANSFERS = [
    { hash: "0x6307df8a810fe307c1b2a5ded5d363be0862d49fb3b8546721dcd8da93c8e631", ts: 1782458339, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x9ecebfb64bb6845ad6954a73224c7e1e41a183f4", amount: 359863, block: 25400265, type: "transfer" },
    { hash: "0x506a60ac67be9cfa6137ceafcfef3d946095a348c65c22b60242877e178d3ad3", ts: 1782456791, from: "0xc079bfa54f348199ba51b2717595fe24e96f1542", to: "0x6912d024e2b88136c5a586e77b092199963b6083", amount: 172085, block: 25400137, type: "transfer" },
    { hash: "0x506a60ac67be9cfa6137ceafcfef3d946095a348c65c22b60242877e178d3ad3", ts: 1782456791, from: "0x38123a191e9685448658d2207b0543e2fb9282cc", to: "0xc079bfa54f348199ba51b2717595fe24e96f1542", amount: 172085, block: 25400137, type: "transfer" },
    { hash: "0xc7ae18e8a18d99f2297ec92ab2c557e2cefa88a94341e3b5e515fc3654edde01", ts: 1782456491, from: "0x9ce450e7673c6d4a04ef982282b051c8626d0b8e", to: "0x38123a191e9685448658d2207b0543e2fb9282cc", amount: 172257, block: 25400112, type: "transfer" },
    { hash: "0x03e1fd9435520b162f876ee17a875c1c69776618877030311671ce77ef3dc565", ts: 1782456431, from: "0xedbbbd009bdddf3fa5e923e0c69cc2219d6a414b", to: "0x9ce450e7673c6d4a04ef982282b051c8626d0b8e", amount: 165205, block: 25400107, type: "transfer" },
    { hash: "0x3178cf123d7643681e064f01d483a7b1868d51c661182e19a84899ea87047ef9", ts: 1782427535, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xf15b191bdcbf9b016b0bfb0d494a7f0902420e30", amount: 500000, block: 25397710, type: "transfer" },
    { hash: "0x8587e58b5d9fdc02b68e8c5b6117c19dc8be2862ee4eb7c849b68df45c994f19", ts: 1782401951, from: "0xd2d9c936165a85f27a5a7e07afb974d022b89463", to: "0x6912d024e2b88136c5a586e77b092199963b6083", amount: 500004, block: 25395593, type: "transfer" },
    { hash: "0x8587e58b5d9fdc02b68e8c5b6117c19dc8be2862ee4eb7c849b68df45c994f19", ts: 1782401951, from: "0x71563634a3eacb41fd03dd9045129e019e06fcff", to: "0xd2d9c936165a85f27a5a7e07afb974d022b89463", amount: 500505, block: 25395593, type: "transfer" },
    { hash: "0x1ec23780398b807c24f49ed67f7357be8b468a5402ca5af9ff3579842660db96", ts: 1782401735, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x71563634a3eacb41fd03dd9045129e019e06fcff", amount: 500505, block: 25395575, type: "transfer" },
    { hash: "0xba4f851c000a0c647d1e9c2447dd1608ccbbf6d5ca2321f862c6d36b1eb8ac34", ts: 1782400979, from: "0x7c5874a11b4dd3aba411fa8b942ae90d1d662705", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 3429207, block: 25395512, type: "transfer" },
    { hash: "0x16baa83735bd005b13c133fc4c1d79f3c0ee3e98511ebd1f5cb75e284a1ac1f3", ts: 1782398579, from: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", to: "0x7c5874a11b4dd3aba411fa8b942ae90d1d662705", amount: 604784, block: 25395312, type: "transfer" },
    { hash: "0x1ed3b9ff3ccd80b4c5d00ce42f4f1054312ecbea6f8dcae8fef11af0d630341e", ts: 1782398111, from: "0xd2d9c936165a85f27a5a7e07afb974d022b89463", to: "0x6912d024e2b88136c5a586e77b092199963b6083", amount: 766807, block: 25395273, type: "transfer" },
    { hash: "0x1ed3b9ff3ccd80b4c5d00ce42f4f1054312ecbea6f8dcae8fef11af0d630341e", ts: 1782398111, from: "0x70c69520eb6595d102bfd8aed8fc58428489c4e4", to: "0xd2d9c936165a85f27a5a7e07afb974d022b89463", amount: 766807, block: 25395273, type: "transfer" },
    { hash: "0xfc90b0a98224b9938fb5175e7adef02a5248a0fbef05f7868d843e7cd711d28d", ts: 1782397967, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x70c69520eb6595d102bfd8aed8fc58428489c4e4", amount: 766807, block: 25395261, type: "transfer" },
    { hash: "0x5973b2faef5f0846a8042864a5e96400ad18cb2ca8af810e7bfe0242e8cdbe43", ts: 1782397139, from: "0xd2d9c936165a85f27a5a7e07afb974d022b89463", to: "0x6912d024e2b88136c5a586e77b092199963b6083", amount: 1062989, block: 25395192, type: "transfer" },
    { hash: "0x5973b2faef5f0846a8042864a5e96400ad18cb2ca8af810e7bfe0242e8cdbe43", ts: 1782397139, from: "0x70c69520eb6595d102bfd8aed8fc58428489c4e4", to: "0xd2d9c936165a85f27a5a7e07afb974d022b89463", amount: 1062989, block: 25395192, type: "transfer" },
    { hash: "0x29c75c83327d850ea1e85ed733dfd7cd031d0d6ee421891439803f13104f5ac1", ts: 1782397055, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x70c69520eb6595d102bfd8aed8fc58428489c4e4", amount: 1062989, block: 25395185, type: "transfer" },
    { hash: "0x59729595612884d1638a9989155a5d34a684f1b95f5fe99256f17dcd48b7e1c6", ts: 1782396431, from: "0x885890fc96c05bce6809f4deb19124499da5bde0", to: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", amount: 20713458, block: 25395133, type: "transfer" },
    { hash: "0x121235670ebc40ba832db3008b5b669975ef7011e02bfb9d279df32473299bae", ts: 1782396179, from: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", to: "0x7c5874a11b4dd3aba411fa8b942ae90d1d662705", amount: 979061, block: 25395112, type: "transfer" },
    { hash: "0xe57279982e13b136a081bccb7f15091ff8e0dde3da00a883e9a5877e4fb3d838", ts: 1782396167, from: "0xc1633af596c1362fea47dbb3c9175682a1089c57", to: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", amount: 475682, block: 25395111, type: "transfer" },
    { hash: "0x87dc455eba5b71db64c264ace9a921c8b67134476c43e36ea109fbfa71b56809", ts: 1782395999, from: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", to: "0x7c5874a11b4dd3aba411fa8b942ae90d1d662705", amount: 976673, block: 25395097, type: "transfer" },
    { hash: "0x2aab192283d7ceb57f8c8169aa03dc294822be9a342211941c97505f24dde564", ts: 1782395987, from: "0xd2d9c936165a85f27a5a7e07afb974d022b89463", to: "0x6912d024e2b88136c5a586e77b092199963b6083", amount: 833211, block: 25395096, type: "transfer" },
    { hash: "0x2aab192283d7ceb57f8c8169aa03dc294822be9a342211941c97505f24dde564", ts: 1782395987, from: "0x70c69520eb6595d102bfd8aed8fc58428489c4e4", to: "0xd2d9c936165a85f27a5a7e07afb974d022b89463", amount: 833211, block: 25395096, type: "transfer" },
    { hash: "0x38a71766de756c2fbcf167a73ae563f8d89efed19b4192e6b2bad5323418dcfb", ts: 1782395903, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x70c69520eb6595d102bfd8aed8fc58428489c4e4", amount: 833211, block: 25395089, type: "transfer" },
    { hash: "0x6016623b4ebc10c32898eeec20b44c0fac5ff4d4434eddda23862ec9e95e56df", ts: 1782395747, from: "0xd2d9c936165a85f27a5a7e07afb974d022b89463", to: "0x6912d024e2b88136c5a586e77b092199963b6083", amount: 1129147, block: 25395076, type: "transfer" },
    { hash: "0x6016623b4ebc10c32898eeec20b44c0fac5ff4d4434eddda23862ec9e95e56df", ts: 1782395747, from: "0x70c69520eb6595d102bfd8aed8fc58428489c4e4", to: "0xd2d9c936165a85f27a5a7e07afb974d022b89463", amount: 1129147, block: 25395076, type: "transfer" },
    { hash: "0x7bdd5f3252db3318dad5f5bb8ec7a17f9c5c8a13d9f494a6a5dddb210c317bd5", ts: 1782395687, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x70c69520eb6595d102bfd8aed8fc58428489c4e4", amount: 1129147, block: 25395071, type: "transfer" },
    { hash: "0x5ff8e890d5e3aaffb70f38b446c37cb63b46d07a09c9fcd3c3ee7c0ab8f0bbbe", ts: 1782389699, from: "0x6dbe266372d4b134c817462abd854792368a8dd3", to: "0x2f4243b2fecfb26841e8af99c357ca475b96d777", amount: 300000, block: 25394574, type: "transfer" },
    { hash: "0x3f77a06ddfe3f9e3860ef92390981e8bf984f9714bcd76f1f89deee91d7f5b56", ts: 1782389495, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", amount: 403016, block: 25394557, type: "transfer" },
    { hash: "0x76ebc69d3262d1ffd5b40d9eae66924637fca42f8bc8be5a6ddf532df2fa275b", ts: 1782380123, from: "0x5e83b45dd143d4c3ccfd760749692c792eb9237f", to: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", amount: 186122, block: 25393779, type: "transfer" },
    { hash: "0xb8140a8cdbfc6c6991e3a3e4da1e6611d0669c1610dcffcf9671cf07b36ea4ff", ts: 1782378119, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0x5e83b45dd143d4c3ccfd760749692c792eb9237f", amount: 186122, block: 25393613, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", net: 19233407, received: 21189140, sent: 1955734, txs: 4 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 4640094, received: 4640094, sent: 0, txs: 10 },
    { wallet: "0xf15b191bdcbf9b016b0bfb0d494a7f0902420e30", net: 500000, received: 500000, sent: 0, txs: 1 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 403016, received: 403016, sent: 0, txs: 1 },
    { wallet: "0x9ecebfb64bb6845ad6954a73224c7e1e41a183f4", net: 359863, received: 359863, sent: 0, txs: 1 },
    { wallet: "0x2f4243b2fecfb26841e8af99c357ca475b96d777", net: 300000, received: 300000, sent: 0, txs: 1 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 196276, received: 196276, sent: 0, txs: 8 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 114264, received: 123270, sent: 9006, txs: 12 },
    { wallet: "0xca3aed0ff2eeb36fcdfa05cb01972d165b80a392", net: 93673, received: 93673, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 41321, received: 72792, sent: 31471, txs: 4 },
    { wallet: "0x5f1c5951c5b1cc112ba9e89b9467edca33063453", net: 21559, received: 21559, sent: 0, txs: 5 },
    { wallet: "0x19888e92ee029e6641e178ebd2346fc1f7d845bd", net: 20822, received: 20822, sent: 0, txs: 1 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 19980, received: 19980, sent: 0, txs: 2 },
    { wallet: "0x82a365858b4a82eed80e5473c6f698f93b48617f", net: 19524, received: 92316, sent: 72792, txs: 4 },
    { wallet: "0xbf1cebb7f4262ef0308859a9aebb8546e6c2dc47", net: 17105, received: 17105, sent: 0, txs: 1 },
    { wallet: "0xb5fa089ed78657e10d02c2e9e2a9f673deb15c33", net: 10752, received: 10752, sent: 0, txs: 1 },
    { wallet: "0xdc56fd9d0112f44c9c4944e544fd20987c8b3a8c", net: 6876, received: 6876, sent: 0, txs: 3 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 6575, received: 6575, sent: 0, txs: 1 },
    { wallet: "0x29b71fd85d1148098e7400b23880cafbaf19342f", net: 4658, received: 4658, sent: 0, txs: 1 },
    { wallet: "0x557819dffe2884e51334d0ce2b1c57911c84db24", net: 4299, received: 4299, sent: 0, txs: 1 },
    { wallet: "0x172c24a8e7e18cf03328924b6a707017ee79350c", net: 4000, received: 4000, sent: 0, txs: 1 },
    { wallet: "0xde240ef14c9942bf6c7dfdc2cc01e6496438ecd8", net: 3425, received: 3425, sent: 0, txs: 1 },
    { wallet: "0x3492dbcc50c8fa86a2d9013a33a1972cbbd9e929", net: 2877, received: 2877, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 1644, received: 1644, sent: 0, txs: 2 },
    { wallet: "0x1ec97b855540f5495895868fea813ffc955ec714", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1101, received: 1101, sent: 0, txs: 11 },
    { wallet: "0xee24dffca375eaa986e0159cbec5994f759c03ce", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 862, received: 862, sent: 0, txs: 4 },
    { wallet: "0xd031b8c380ff6df254cdc1f8d55b8bbd81ff4216", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xef7debd3329fc163e4eccf875f057b69f8abeb22", net: 501, received: 501, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 274, received: 274, sent: 0, txs: 2 },
    { wallet: "0xd7ca08ec1aee9cce8a8eda9365343ef197674e1a", net: 241, received: 163730, sent: 163489, txs: 9 },
    { wallet: "0x2cd002ca2a1ab8706144d85d0b28d408124d35fd", net: 180, received: 180, sent: 0, txs: 1 },
    { wallet: "0x82d9a407f99a95db4671e7021d625cbd0787a407", net: 172, received: 172, sent: 0, txs: 1 },
    { wallet: "0xedc6531b10297788cbb0fcfaee904a3803d3e2e4", net: 48, received: 48, sent: 0, txs: 1 },
    { wallet: "0xaee149444ee65ae1da3bf9a049363419330569bb", net: 47, received: 47, sent: 0, txs: 1 },
    { wallet: "0xfad4c8f1e71e4c56b87733bd916ff7cff46c6c29", net: 34, received: 34, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 12, received: 12, sent: 0, txs: 1 },
    { wallet: "0xc06ebbefd94032b85424d51906e2a335efae264b", net: 6, received: 6, sent: 0, txs: 1 },
    { wallet: "0x4f82e73edb06d29ff62c91ec8f5ff06571bdeb29", net: 2, received: 2, sent: 0, txs: 1 },
    { wallet: "0x11356147119ac90cd9e5a4316fe1088fd53616ba", net: 1, received: 93674, sent: 93673, txs: 4 },
    { wallet: "0xad01c20d5886137e056775af56915de824c8fce5", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0x8e972e2a66d2307df40a45c68c95a15e98b95fb6", net: 1, received: 33425, sent: 33424, txs: 2 },
    { wallet: "0x4c8a45a507242650a400f3790ef93605dadfc038", net: 0, received: 11959, sent: 11959, txs: 2 },
    { wallet: "0xc079bfa54f348199ba51b2717595fe24e96f1542", net: 0, received: 172257, sent: 172257, txs: 4 },
    { wallet: "0x38123a191e9685448658d2207b0543e2fb9282cc", net: 0, received: 172257, sent: 172257, txs: 3 },
    { wallet: "0xbdad64510439e77df3e11cfb5605ea090555b00d", net: 0, received: 39929, sent: 39929, txs: 2 },
    { wallet: "0x7ae7b151c4fa2204bf35b61b32d0d39e32d3cc16", net: 0, received: 6411, sent: 6411, txs: 2 }
];

const WHALE_LABELS = {

};
