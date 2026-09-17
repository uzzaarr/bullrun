// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "September 17, 2026 at 02:54 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 292;
const WHALE_TOTAL_VOLUME      = 12106745;
const WHALE_BIGGEST_SINGLE    = 1534247;

const WHALE_TRANSFERS = [
    { hash: "0xf903e95b900231a7d5088920c55026b176e5533c807b12094c5424c2fcf076b1", ts: 1789606463, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25993753, type: "sell" },
    { hash: "0x7417c33e5d03a4f03aee361da5d83f9fb416a2e942096db102f4efb3a8d05ac1", ts: 1789596179, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25992898, type: "sell" },
    { hash: "0xa51bedd2dc3794c8adff3428a747ce256b062d9de5822eb5dd177125590efe78", ts: 1789589171, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25992316, type: "buy" },
    { hash: "0x023dfdf9a38e1bffabb79c60bec43aacd6a6aef502f103ac3f6e92a8c6b399cb", ts: 1789588163, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25992232, type: "buy" },
    { hash: "0xe0a6d5c9fcd317fec75fb457d0a3583a4b58e424032d432a30c24785163248b5", ts: 1789586747, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25992114, type: "sell" },
    { hash: "0x318baa7d22b178ff97cc6161f38ccd6c338d303466da8c56d9db17106f65fc16", ts: 1789582571, from: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 175105, block: 25991768, type: "sell" },
    { hash: "0x59fd21c3c73d82ef15a602cad0cdfb7d2cfee2fcb65d8b2aa4cf070f88d24124", ts: 1789582307, from: "0x179c72585b3e121d15d68131dff8b9aa4c285fc4", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 1534247, block: 25991746, type: "transfer" },
    { hash: "0x20019820edf4f244a458c54b3db24afb17e71db3ad8d1e92ff926fdb83f8db12", ts: 1789581995, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", amount: 176031, block: 25991721, type: "buy" },
    { hash: "0xeea6806780e757f66943f2dd97bb8e07a0cc6c4e47f478b276b9d35223b6e6da", ts: 1789581947, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", amount: 149038, block: 25991717, type: "transfer" },
    { hash: "0xeea6806780e757f66943f2dd97bb8e07a0cc6c4e47f478b276b9d35223b6e6da", ts: 1789581947, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 149038, block: 25991717, type: "buy" },
    { hash: "0xd3f054f76ccf00f0ebc7f9c9ae23d8ff5d6c08a8500130b1222517d82d3499a3", ts: 1789581899, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25991713, type: "buy" },
    { hash: "0x973ca4dd109756fcaad727efa654380e3bb67f97e447b8310d8fd828a749a5cd", ts: 1789581863, from: "0xe29a56bb873f6166bcafee7e2287a9acb7710741", to: "0x179c72585b3e121d15d68131dff8b9aa4c285fc4", amount: 1534247, block: 25991710, type: "transfer" },
    { hash: "0xe4132fa6b8f50d2c7381d115406a06fefb968486f1fd106415c76f71c67090eb", ts: 1789581575, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xe29a56bb873f6166bcafee7e2287a9acb7710741", amount: 1534247, block: 25991686, type: "transfer" },
    { hash: "0x6cbdd80b0f66d27b9c1c36996bec17b4380af2fcde4d5afde26c2c23d2eb81f2", ts: 1789581131, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25991649, type: "sell" },
    { hash: "0xbcb378925379da46cfbcb4cbd4682fe0f7524df8fa601df461dff4ff0d3c7360", ts: 1789577927, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25991384, type: "buy" },
    { hash: "0x30fbaa584bdcc01173c891a8b120ccc305a4a449a9a7d92c992ff1571e42cb1f", ts: 1789576571, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xfe263102682933297cb65dc813e5193249769251", amount: 119050, block: 25991271, type: "transfer" },
    { hash: "0x760e7ecc48ab471fd5ed584e08e17d10a9645355166ab992a61d19d452949ed6", ts: 1789576475, from: "0x67336cec42645f55059eff241cb02ea5cc52ff86", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 329705, block: 25991263, type: "sell" },
    { hash: "0x6c5334bd3259f3f1fa702749d4cddec9f91dbba070a963eb6abc371b409a77f1", ts: 1789576463, from: "0x1103fc560de8b710983e7f3ec09d587f3f848566", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 119050, block: 25991262, type: "sell" },
    { hash: "0x6c5334bd3259f3f1fa702749d4cddec9f91dbba070a963eb6abc371b409a77f1", ts: 1789576463, from: "0xfe263102682933297cb65dc813e5193249769251", to: "0x1103fc560de8b710983e7f3ec09d587f3f848566", amount: 119050, block: 25991262, type: "transfer" },
    { hash: "0x4957acf0119b610d74190b982e2bde02fd0b9b7bbbfbe2e8a0f4cadca9e7df46", ts: 1789576127, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25991236, type: "sell" },
    { hash: "0xef7465b5749554d3a93f8b442c73eb6926780297361841bd352acfef636c582b", ts: 1789574819, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25991127, type: "sell" },
    { hash: "0xedf6c899c9d542c49441fd1ade4e29002b536a6d8efaf9434febf94aff37e149", ts: 1789573655, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", amount: 152852, block: 25991030, type: "transfer" },
    { hash: "0xedf6c899c9d542c49441fd1ade4e29002b536a6d8efaf9434febf94aff37e149", ts: 1789573655, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 152852, block: 25991030, type: "buy" },
    { hash: "0xcdeb05435cec6befa154ca445495e81d0f12b0fb2cdff16ebed2ae48f141531e", ts: 1789572227, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x8b2559cee51642d0b19ec4cf01f400b0c973e9de", amount: 1242740, block: 25990912, type: "transfer" },
    { hash: "0xee36ab507ec96e4b3bacf6eb828a6f2ebdf122817caff487ea3de44720358f4b", ts: 1789569023, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25990645, type: "buy" },
    { hash: "0xcac9c5fd6c3efc36815d93e1588b397a42c6d69b9dccf495466fa5b2b7e3a926", ts: 1789568999, from: "0xbf123a673c8cfee6a31f3a7ad24259489c4261f0", to: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", amount: 660304, block: 25990643, type: "transfer" },
    { hash: "0x22173b214e30ff4dfb1a87349e6181e5f266d3fb375385615ba397dd1ca05e6f", ts: 1789568807, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25990627, type: "buy" },
    { hash: "0xd0111509dbe1040f7531c875ab88fa673ef86f52b64c08b31d72e88da3397d5e", ts: 1789568531, from: "0x25cf82a47ca1158989d40e49edb649d2ea3cc8ed", to: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", amount: 541330, block: 25990604, type: "transfer" },
    { hash: "0x161f45753a15d4042d92924743536c3ef62d5a7ca04a76697cd4d4ad5653e243", ts: 1789568255, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x25cf82a47ca1158989d40e49edb649d2ea3cc8ed", amount: 462719, block: 25990581, type: "transfer" },
    { hash: "0x086b21c5e79a4ae8a39af7cb5ef5ec8350d5a5475f2a9ee6e523f4c84e6948f1", ts: 1789568075, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xbf123a673c8cfee6a31f3a7ad24259489c4261f0", amount: 581713, block: 25990566, type: "transfer" },
    { hash: "0xc900b23dd5a9abb7ccbc669102ae45c6332eb43f64e57a528c5f0c18eedda80f", ts: 1789562459, from: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 170795, block: 25990100, type: "sell" },
    { hash: "0xb956d63d6c21792c86062808ade3de452318558333e607a312b001fcddd435b2", ts: 1789561463, from: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 170180, block: 25990017, type: "sell" },
    { hash: "0x8c917f48595a8322365e75ff7cc6ad2ed274a3798982a8d934edd759c49da536", ts: 1789558211, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", amount: 171075, block: 25989747, type: "buy" },
    { hash: "0x865aa2cad8ffb16f77041501428be426acd7cd763b70162650dd039de49e0d13", ts: 1789556975, from: "0x348d8aec610e03b644ea8e99bad87f674a24f3f2", to: "0x9199ba7d5922ea8cb30e90dbee618e317b25dabc", amount: 145019, block: 25989644, type: "transfer" },
    { hash: "0xe85dbbb98b7702894e6c4546227d717b7c1d75f523d1a57030d084885c430505", ts: 1789552103, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", amount: 172283, block: 25989240, type: "buy" },
    { hash: "0xf7ee2fc28f1002e54915e9e6d5a04c98ae86055954c5f328ff431f7db11dc8a7", ts: 1789539539, from: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 171757, block: 25988198, type: "sell" },
    { hash: "0x0e77afa47d9b23ca9cf6bf4bf6ea80b9d04be3f9362d069ca39a0086d5c815a3", ts: 1789538075, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", amount: 172318, block: 25988076, type: "buy" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 1497618, received: 1587517, sent: 89899, txs: 8 },
    { wallet: "0x8b2559cee51642d0b19ec4cf01f400b0c973e9de", net: 1242740, received: 1242740, sent: 0, txs: 1 },
    { wallet: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", net: 607652, received: 660304, sent: 52652, txs: 3 },
    { wallet: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", net: 488756, received: 541330, sent: 52574, txs: 3 },
    { wallet: "0x67336cec42645f55059eff241cb02ea5cc52ff86", net: 185083, received: 609493, sent: 424411, txs: 9 },
    { wallet: "0x9199ba7d5922ea8cb30e90dbee618e317b25dabc", net: 145019, received: 145019, sent: 0, txs: 1 },
    { wallet: "0xbe4ae6e24d12dbd180517f126765178bae81f341", net: 78904, received: 78904, sent: 0, txs: 1 },
    { wallet: "0xe8446569ee2311ac5c455cf97e6eb5cd594356ea", net: 21918, received: 21918, sent: 0, txs: 1 },
    { wallet: "0x4792c3cea478c855376cfadc311da2e5893d5558", net: 19452, received: 19452, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 15739, received: 428630, sent: 412891, txs: 15 },
    { wallet: "0xc64f63f50eee4122cfb595009977856899faffc4", net: 11781, received: 11781, sent: 0, txs: 1 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 11474, received: 11474, sent: 0, txs: 1 },
    { wallet: "0x5bfdb327168803a1b33c6062ef28ac0e3fe88e31", net: 8573, received: 8573, sent: 0, txs: 1 },
    { wallet: "0x9019ee8d4fe33c501872e4ff106da3b89cc89db7", net: 6027, received: 6027, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 4384, received: 4384, sent: 0, txs: 1 },
    { wallet: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", net: 1821, received: 347106, sent: 345285, txs: 4 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 1644, received: 1644, sent: 0, txs: 2 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 1623, received: 1623, sent: 0, txs: 1 },
    { wallet: "0x8e116b4bf95b990b9240e84ad674bd10c0b0759c", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", net: 1488, received: 172283, sent: 170795, txs: 2 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 398, received: 398, sent: 0, txs: 10 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x45fe1ba15449d09cf7ebb8b825f7f1c859824563", net: 73, received: 73, sent: 0, txs: 1 },
    { wallet: "0x147cf09e7373b8fda6f12021f1b0f98d6da1a566", net: 49, received: 49, sent: 0, txs: 1 },
    { wallet: "0xb1a78eea2125efcf4c9153c551b3ece73e8a3ca7", net: 26, received: 26, sent: 0, txs: 1 },
    { wallet: "0x24ab00824016312c52cd32da7ade2050d9415b73", net: 12, received: 12, sent: 0, txs: 1 },
    { wallet: "0xc06ebbefd94032b85424d51906e2a335efae264b", net: 9, received: 9, sent: 0, txs: 1 },
    { wallet: "0x0730f6e24b2e583c3292d0f81f8976bcdb4258b5", net: 3, received: 3, sent: 0, txs: 1 },
    { wallet: "0x0a50d3b2c8517c8a7d46ec82c77ad75eb2d42ba3", net: 2, received: 2, sent: 0, txs: 1 },
    { wallet: "0xca5b3bbb368db39d223a9fa57a577f9a98a03638", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0x09fc1031d03a78ed4f60463fa9749870d33439bc", net: 0, received: 54247, sent: 54247, txs: 3 },
    { wallet: "0xca08005f080c57936effa193da94547e95a3439a", net: 0, received: 54247, sent: 54247, txs: 2 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 40131, sent: 40131, txs: 22 },
    { wallet: "0xec3543a772b5abd5c5e906745c7686a59c0665ac", net: 0, received: 2055, sent: 2055, txs: 3 },
    { wallet: "0x50e8e34147929096ab69b3316ac0f1adf8b684c1", net: 0, received: 2055, sent: 2055, txs: 2 },
    { wallet: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", net: 0, received: 600000, sent: 600000, txs: 12 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 841521, sent: 841521, txs: 30 },
    { wallet: "0x8257eea3d474ea047ef1aa124f85a4fb1700507b", net: 0, received: 1096, sent: 1096, txs: 3 },
    { wallet: "0x22ec88b9ff78c6f2458ab1a7aa8bb99d84bd4b86", net: 0, received: 3592, sent: 3592, txs: 2 },
    { wallet: "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae", net: 0, received: 5443, sent: 5443, txs: 6 },
    { wallet: "0x89c6340b1a1f4b25d36cd8b063d49045caf3f818", net: 0, received: 5443, sent: 5443, txs: 4 },
    { wallet: "0xcaf0beadeaefc66fef60ac6526ab566d58c8647a", net: 0, received: 1390, sent: 1390, txs: 2 },
    { wallet: "0xd1ce3a7c1671763ad1cb7f90ba9401c68f9b3ed6", net: 0, received: 1390, sent: 1390, txs: 2 },
    { wallet: "0xe9235ef454eae6d8fade26c4790fa94071623734", net: 0, received: 1370, sent: 1370, txs: 3 },
    { wallet: "0xdd5eaf1aba9cca3b1daa2cbfacd589ae9329d69a", net: 0, received: 1370, sent: 1370, txs: 2 },
    { wallet: "0xe947887d246883decd222214c8fef1da864982bf", net: 0, received: 1370, sent: 1370, txs: 2 }
];

const WHALE_LABELS = {

};
