// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 25, 2026 at 07:50 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 176;
const WHALE_TOTAL_VOLUME      = 50251815;
const WHALE_BIGGEST_SINGLE    = 20713458;

const WHALE_TRANSFERS = [
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
    { hash: "0xb8140a8cdbfc6c6991e3a3e4da1e6611d0669c1610dcffcf9671cf07b36ea4ff", ts: 1782378119, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0x5e83b45dd143d4c3ccfd760749692c792eb9237f", amount: 186122, block: 25393613, type: "transfer" },
    { hash: "0x4b89641c5ebcb03fe69f5f9bb2a192dfd1f5244118c527be41ad54b460687845", ts: 1782375731, from: "0x09f3cd247af544c17710e84bbfa238aaaba3ca23", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 119158, block: 25393414, type: "transfer" },
    { hash: "0xb83f2a3725a7839f989180729127f22a096a8a56c1e078c0ff71122495c206aa", ts: 1782375263, from: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", to: "0x09f3cd247af544c17710e84bbfa238aaaba3ca23", amount: 119158, block: 25393375, type: "transfer" },
    { hash: "0xf847067c1261f946b51d2dc7b3410bf8dccf328bd76c4bf96fd34a01c13c90d0", ts: 1782373895, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x87c62ae604b236c0953b346b571527db3c51a61c", amount: 100274, block: 25393261, type: "transfer" },
    { hash: "0xcade5134ffcaafbf10ace59dd1325c9ea40c5b1d9d0d9c270cf43edcddcefe30", ts: 1782371291, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x804b68f60765f4559b7096b158c912ed33aa0c26", amount: 8000000, block: 25393045, type: "transfer" },
    { hash: "0xf8e70f12575b755b05a1505a8d04e73011ed67ed87c5be19014b8f6d4653aaf2", ts: 1782352895, from: "0x4c3b4d2f1359b3ede890fef41aee3a4cc16c1883", to: "0x78bae4530a500fea643d270ff9219f0a0b92a5c8", amount: 236712, block: 25391516, type: "transfer" },
    { hash: "0x53a1d8546a2977624c513b2448fc1a742494bcb5a5b55be46878990b40945e84", ts: 1782352799, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x4c3b4d2f1359b3ede890fef41aee3a4cc16c1883", amount: 236712, block: 25391508, type: "transfer" },
    { hash: "0x35cdb492791318f26aab42b17ffebd50b6705724fa02bee4249a619ac5c47941", ts: 1782335699, from: "0xe912d6cfeaee2c1ffde4bea98299d185fafdaa1d", to: "0x3395d86d44bc6bb20d41d5d04434aa76187c2be7", amount: 308200, block: 25390089, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", net: 19233407, received: 21189140, sent: 1955734, txs: 4 },
    { wallet: "0x804b68f60765f4559b7096b158c912ed33aa0c26", net: 8000000, received: 8000000, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 4364957, received: 4364957, sent: 0, txs: 8 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 403016, received: 403016, sent: 0, txs: 1 },
    { wallet: "0x3395d86d44bc6bb20d41d5d04434aa76187c2be7", net: 308200, received: 308200, sent: 0, txs: 1 },
    { wallet: "0x2f4243b2fecfb26841e8af99c357ca475b96d777", net: 300000, received: 300000, sent: 0, txs: 1 },
    { wallet: "0x78bae4530a500fea643d270ff9219f0a0b92a5c8", net: 236712, received: 236712, sent: 0, txs: 1 },
    { wallet: "0x87c62ae604b236c0953b346b571527db3c51a61c", net: 100274, received: 100274, sent: 0, txs: 1 },
    { wallet: "0xe77790c24bd3abd7f56371fe16d44feb5003bab8", net: 99863, received: 99863, sent: 0, txs: 1 },
    { wallet: "0xca3aed0ff2eeb36fcdfa05cb01972d165b80a392", net: 93673, received: 93673, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 66778, received: 75750, sent: 8971, txs: 14 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 32942, received: 32942, sent: 0, txs: 3 },
    { wallet: "0x19888e92ee029e6641e178ebd2346fc1f7d845bd", net: 20822, received: 20822, sent: 0, txs: 1 },
    { wallet: "0x82a365858b4a82eed80e5473c6f698f93b48617f", net: 16733, received: 16733, sent: 0, txs: 1 },
    { wallet: "0xb5fa089ed78657e10d02c2e9e2a9f673deb15c33", net: 10752, received: 10752, sent: 0, txs: 1 },
    { wallet: "0x5f1c5951c5b1cc112ba9e89b9467edca33063453", net: 9502, received: 9502, sent: 0, txs: 3 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 6575, received: 6575, sent: 0, txs: 1 },
    { wallet: "0x7b9d43ef9d740bc6b6e593e1fc7c4b910a75fd00", net: 4577, received: 10588, sent: 6011, txs: 4 },
    { wallet: "0x1894c5c5d9d976a7971a0ccd252f2f6064efd3a8", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0x1ec97b855540f5495895868fea813ffc955ec714", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xee24dffca375eaa986e0159cbec5994f759c03ce", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 851, received: 851, sent: 0, txs: 11 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x3c2d4c38e1e28d7f09409c196f4e6658ce83060f", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xef7debd3329fc163e4eccf875f057b69f8abeb22", net: 501, received: 501, sent: 0, txs: 1 },
    { wallet: "0xa0952edc243077c05148828cc5432c37486858c3", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x1ab2a7c6178467e8e2fd9c9a42d33024c8d6e1d0", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xd7ca08ec1aee9cce8a8eda9365343ef197674e1a", net: 112, received: 71797, sent: 71685, txs: 6 },
    { wallet: "0xedc6531b10297788cbb0fcfaee904a3803d3e2e4", net: 48, received: 48, sent: 0, txs: 1 },
    { wallet: "0xaee149444ee65ae1da3bf9a049363419330569bb", net: 47, received: 47, sent: 0, txs: 1 },
    { wallet: "0xb2d9e823315aa1f3a3faedf1ddd2597eabce28e6", net: 5, received: 5, sent: 0, txs: 1 },
    { wallet: "0x52866fd157577897ce627022b9c19bd2e622fd7a", net: 3, received: 3, sent: 0, txs: 1 },
    { wallet: "0x93bbe542debb742d097117d3c23058b30ccfba5e", net: 3, received: 3, sent: 0, txs: 1 },
    { wallet: "0x4f82e73edb06d29ff62c91ec8f5ff06571bdeb29", net: 2, received: 2, sent: 0, txs: 1 },
    { wallet: "0x11356147119ac90cd9e5a4316fe1088fd53616ba", net: 1, received: 93674, sent: 93673, txs: 4 },
    { wallet: "0xad01c20d5886137e056775af56915de824c8fce5", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0x8e972e2a66d2307df40a45c68c95a15e98b95fb6", net: 1, received: 33425, sent: 33424, txs: 2 },
    { wallet: "0x9631288f4050f7cfbf77b77f8540decf6cfc7012", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 45407, sent: 45407, txs: 15 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 16670, sent: 16670, txs: 10 },
    { wallet: "0xc26ff22e2f18f54f82f74593529a27347a5a56ff", net: 0, received: 1233, sent: 1233, txs: 3 },
    { wallet: "0xc19546d779445ebe498abb9b903a494c648427ed", net: 0, received: 42740, sent: 42740, txs: 4 },
    { wallet: "0xab9f6ac1c97b3233b9d22078a0cc003028e6a25f", net: 0, received: 42740, sent: 42740, txs: 2 },
    { wallet: "0xd2d9c936165a85f27a5a7e07afb974d022b89463", net: 0, received: 4292658, sent: 4292658, txs: 11 },
    { wallet: "0x71563634a3eacb41fd03dd9045129e019e06fcff", net: 0, received: 500505, sent: 500505, txs: 2 },
    { wallet: "0x7336bc7430cabaa56339e8521b06ee9c3382e68c", net: 0, received: 10067, sent: 10067, txs: 2 },
    { wallet: "0x0a211a1c77655e17a699b9dce8882251c393cc43", net: 0, received: 55451, sent: 55451, txs: 2 },
    { wallet: "0x70c69520eb6595d102bfd8aed8fc58428489c4e4", net: 0, received: 3792153, sent: 3792153, txs: 8 }
];

const WHALE_LABELS = {

};
