// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 26, 2026 at 02:12 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 262;
const WHALE_TOTAL_VOLUME      = 14965856;
const WHALE_BIGGEST_SINGLE    = 3429207;

const WHALE_TRANSFERS = [
    { hash: "0xbf798be956ebc00387035f70791b9823c8f1d74b2c28387137275d40eed05c01", ts: 1782476855, from: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 354688, block: 25401802, type: "transfer" },
    { hash: "0xc3bf857ad899d98f201c2e70b8be99376756bf15c99140144921e42a02bb191b", ts: 1782475787, from: "0xe0afb959a5109e2209a6f1c9969e6f55a1953722", to: "0x236cd9dd6d431bfe47b31cbc1b92debac2524ab9", amount: 174000, block: 25401713, type: "transfer" },
    { hash: "0x1c0d0a84da6033bd950e44d267877fe02545d9b00888f13566d533bd06601c8e", ts: 1782475739, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", amount: 105593, block: 25401709, type: "buy" },
    { hash: "0xa36f320bf604df9d3905bea87ff2f4048b894306f8b40d4ea506d0ddaa9efb78", ts: 1782475727, from: "0x8f10b468b06c6fd214b65f87778827f7d113f996", to: "0xe0afb959a5109e2209a6f1c9969e6f55a1953722", amount: 174000, block: 25401708, type: "transfer" },
    { hash: "0xa36f320bf604df9d3905bea87ff2f4048b894306f8b40d4ea506d0ddaa9efb78", ts: 1782475727, from: "0x8f10b468b06c6fd214b65f87778827f7d113f996", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 126000, block: 25401708, type: "sell" },
    { hash: "0xa36f320bf604df9d3905bea87ff2f4048b894306f8b40d4ea506d0ddaa9efb78", ts: 1782475727, from: "0x74de5d4fcbf63e00296fd95d33236b9794016631", to: "0x8f10b468b06c6fd214b65f87778827f7d113f996", amount: 300000, block: 25401708, type: "transfer" },
    { hash: "0xa36f320bf604df9d3905bea87ff2f4048b894306f8b40d4ea506d0ddaa9efb78", ts: 1782475727, from: "0x3430b9c4636744dbe738d66a70a494170097bb85", to: "0x74de5d4fcbf63e00296fd95d33236b9794016631", amount: 300000, block: 25401708, type: "transfer" },
    { hash: "0xec6bfb1a2bc3ee2304dd2c3e3ea62c1a4256ccb71793c180221ce10d264ee5ca", ts: 1782474803, from: "0x74de5d4fcbf63e00296fd95d33236b9794016631", to: "0x7f51c134230eb9e5aba42bc364d3d3eba26d9712", amount: 100000, block: 25401632, type: "transfer" },
    { hash: "0xec6bfb1a2bc3ee2304dd2c3e3ea62c1a4256ccb71793c180221ce10d264ee5ca", ts: 1782474803, from: "0x3430b9c4636744dbe738d66a70a494170097bb85", to: "0x74de5d4fcbf63e00296fd95d33236b9794016631", amount: 100000, block: 25401632, type: "transfer" },
    { hash: "0x4346931edc9cef0f5c48541455eba7db421e15692b503860c9de32e5d52bd1ef", ts: 1782473627, from: "0x82a365858b4a82eed80e5473c6f698f93b48617f", to: "0x9642b23ed1e01df1092b92641051881a322f5d4e", amount: 110231, block: 25401534, type: "transfer" },
    { hash: "0x2eee2467069510f79089c8832dfc2bc39e1ed7972fec1d68c51b6e51f07dccc5", ts: 1782471275, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 127728, block: 25401338, type: "transfer" },
    { hash: "0x8a9b82ac2baeaa2444112bd3cd2b273e3077f387e669f6eafadfc59a6a3df76b", ts: 1782470807, from: "0x3430b9c4636744dbe738d66a70a494170097bb85", to: "0x74de5d4fcbf63e00296fd95d33236b9794016631", amount: 100000, block: 25401299, type: "transfer" },
    { hash: "0x419dd43500f74b0b44be31cbee8d24597f80e13a99d97d192da69b28bff5d3b4", ts: 1782470579, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 127728, block: 25401280, type: "transfer" },
    { hash: "0x71c04b0f051292ab762a5d26e9cd7aae9af05be3654bfad12ccca7084cb919ac", ts: 1782468119, from: "0x74de5d4fcbf63e00296fd95d33236b9794016631", to: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", amount: 100000, block: 25401077, type: "transfer" },
    { hash: "0x71c04b0f051292ab762a5d26e9cd7aae9af05be3654bfad12ccca7084cb919ac", ts: 1782468119, from: "0x3430b9c4636744dbe738d66a70a494170097bb85", to: "0x74de5d4fcbf63e00296fd95d33236b9794016631", amount: 100000, block: 25401077, type: "transfer" },
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
    { hash: "0x29c75c83327d850ea1e85ed733dfd7cd031d0d6ee421891439803f13104f5ac1", ts: 1782397055, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x70c69520eb6595d102bfd8aed8fc58428489c4e4", amount: 1062989, block: 25395185, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 2691437, received: 2691437, sent: 0, txs: 9 },
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 1098906, received: 3429207, sent: 2330300, txs: 4 },
    { wallet: "0xf15b191bdcbf9b016b0bfb0d494a7f0902420e30", net: 500000, received: 500000, sent: 0, txs: 1 },
    { wallet: "0x9ecebfb64bb6845ad6954a73224c7e1e41a183f4", net: 359863, received: 359863, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 351931, received: 354688, sent: 2757, txs: 2 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 336273, received: 336273, sent: 0, txs: 9 },
    { wallet: "0x236cd9dd6d431bfe47b31cbc1b92debac2524ab9", net: 174000, received: 174000, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 151552, received: 183023, sent: 31471, txs: 5 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 127728, received: 127728, sent: 0, txs: 1 },
    { wallet: "0xdc56fd9d0112f44c9c4944e544fd20987c8b3a8c", net: 104511, received: 104511, sent: 0, txs: 8 },
    { wallet: "0xca3aed0ff2eeb36fcdfa05cb01972d165b80a392", net: 93673, received: 93673, sent: 0, txs: 1 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 79945, received: 79945, sent: 0, txs: 8 },
    { wallet: "0x87607b0495272d2cb7ab5bcccf26e24af4b84473", net: 64785, received: 64785, sent: 0, txs: 2 },
    { wallet: "0xb5fa089ed78657e10d02c2e9e2a9f673deb15c33", net: 39497, received: 39497, sent: 0, txs: 1 },
    { wallet: "0x5f1c5951c5b1cc112ba9e89b9467edca33063453", net: 21559, received: 21559, sent: 0, txs: 5 },
    { wallet: "0x19888e92ee029e6641e178ebd2346fc1f7d845bd", net: 20822, received: 20822, sent: 0, txs: 1 },
    { wallet: "0xbf1cebb7f4262ef0308859a9aebb8546e6c2dc47", net: 17105, received: 17105, sent: 0, txs: 1 },
    { wallet: "0xac8ec127c526929850610347ddbcd1a624ce2d12", net: 11507, received: 11507, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 8131, received: 184318, sent: 176187, txs: 16 },
    { wallet: "0x70fe74e426e5419223a9c0a5d343dc3d96c8a1cf", net: 6301, received: 6301, sent: 0, txs: 1 },
    { wallet: "0x9d40ce27fd53e65e2e543f2366b21dfe75c11304", net: 5972, received: 5972, sent: 0, txs: 1 },
    { wallet: "0x29b71fd85d1148098e7400b23880cafbaf19342f", net: 4658, received: 4658, sent: 0, txs: 1 },
    { wallet: "0x557819dffe2884e51334d0ce2b1c57911c84db24", net: 4299, received: 4299, sent: 0, txs: 1 },
    { wallet: "0x172c24a8e7e18cf03328924b6a707017ee79350c", net: 4000, received: 4000, sent: 0, txs: 1 },
    { wallet: "0xde240ef14c9942bf6c7dfdc2cc01e6496438ecd8", net: 3425, received: 3425, sent: 0, txs: 1 },
    { wallet: "0x3492dbcc50c8fa86a2d9013a33a1972cbbd9e929", net: 2877, received: 2877, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x1ec97b855540f5495895868fea813ffc955ec714", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1282, received: 1282, sent: 0, txs: 14 },
    { wallet: "0xee24dffca375eaa986e0159cbec5994f759c03ce", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 862, received: 862, sent: 0, txs: 4 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x82a365858b4a82eed80e5473c6f698f93b48617f", net: 520, received: 183543, sent: 183023, txs: 7 },
    { wallet: "0xef7debd3329fc163e4eccf875f057b69f8abeb22", net: 501, received: 501, sent: 0, txs: 1 },
    { wallet: "0x42d08db8d3f1efc653b905d52ab7d19a8544e5df", net: 321, received: 321, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 274, received: 274, sent: 0, txs: 2 },
    { wallet: "0xd7ca08ec1aee9cce8a8eda9365343ef197674e1a", net: 200, received: 164938, sent: 164738, txs: 9 },
    { wallet: "0x2cd002ca2a1ab8706144d85d0b28d408124d35fd", net: 180, received: 180, sent: 0, txs: 1 },
    { wallet: "0x82d9a407f99a95db4671e7021d625cbd0787a407", net: 172, received: 172, sent: 0, txs: 1 },
    { wallet: "0xedc6531b10297788cbb0fcfaee904a3803d3e2e4", net: 48, received: 48, sent: 0, txs: 1 },
    { wallet: "0xfad4c8f1e71e4c56b87733bd916ff7cff46c6c29", net: 34, received: 34, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 12, received: 12, sent: 0, txs: 1 },
    { wallet: "0xc06ebbefd94032b85424d51906e2a335efae264b", net: 6, received: 6, sent: 0, txs: 1 },
    { wallet: "0xdeb1fc5cdd7a275cb0c71c15c15a088ee07c0db3", net: 4, received: 4, sent: 0, txs: 1 },
    { wallet: "0xad01c20d5886137e056775af56915de824c8fce5", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0x8a94b995ee779c823c804b51b6905da355498ffa", net: 0, received: 41507, sent: 41507, txs: 4 },
    { wallet: "0x43284dc469d348221b3ed7bde3a22196c186c085", net: 0, received: 64785, sent: 64785, txs: 4 },
    { wallet: "0xe0afb959a5109e2209a6f1c9969e6f55a1953722", net: 0, received: 174000, sent: 174000, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 305972, sent: 305972, txs: 5 }
];

const WHALE_LABELS = {

};
