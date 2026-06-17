// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 17, 2026 at 03:28 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 191;
const WHALE_TOTAL_VOLUME      = 16748494;
const WHALE_BIGGEST_SINGLE    = 3212562;

const WHALE_TRANSFERS = [
    { hash: "0x2dcf995df32909ab9e5cdc519fa953ced90ca3377bfc071727c0c54abf162f88", ts: 1781664371, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 261180, block: 25334365, type: "transfer" },
    { hash: "0xea4640efd7240f65538d57eae361216ff6f02cb606d90de3098959b080b76d73", ts: 1781663963, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 261180, block: 25334331, type: "transfer" },
    { hash: "0x90614452db55982004f5c8a37b7a1e17820f2da8b96535ffeeed1ee9ee17bbe5", ts: 1781663759, from: "0xfc904a0c244bd965e12a7ae3a5afd0208538dcea", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 247566, block: 25334314, type: "transfer" },
    { hash: "0x6333ea1b2c0015b079197cbc5bb18c08f15ad92359208c34b39f1b9421cb2293", ts: 1781663711, from: "0x787331fd03269ee6fb778c26e0e7adc505ba8bba", to: "0xfc904a0c244bd965e12a7ae3a5afd0208538dcea", amount: 247566, block: 25334310, type: "transfer" },
    { hash: "0xf4e893b2451f48d09c41d84a373197ff68cf0adce0de0e2350740dc5824b95ad", ts: 1781653787, from: "0xc1c4a5c41b62989acdbb9a11bbab668158f5d481", to: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", amount: 411488, block: 25333485, type: "transfer" },
    { hash: "0xbe0289d940b4309ccb06b97ab1d9a03c1cf4bfb429d726b360ea1b546d30afbb", ts: 1781652707, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xc1c4a5c41b62989acdbb9a11bbab668158f5d481", amount: 411488, block: 25333396, type: "transfer" },
    { hash: "0xbd03740db911f9b7c191363adfb8b04d5cd2cac70998ea21feec3e04a035c4eb", ts: 1781637779, from: "0x19cdb09eedf5b0ab940534391e5c53b499ef8d21", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 3212562, block: 25332152, type: "transfer" },
    { hash: "0x8bfe117b535f4c8734896b74eb5dce7238f59921cf3f7a45269e8afd7d2979b6", ts: 1781628671, from: "0xb8a52fff0c16c27aff3b718cadffb19ec21f7c8e", to: "0x19cdb09eedf5b0ab940534391e5c53b499ef8d21", amount: 3212552, block: 25331394, type: "transfer" },
    { hash: "0x52ca75e7649dbe52b717f6d242b1861f973d0c31fea287dce9f5d2a1f955e86e", ts: 1781614691, from: "0x3d126d6b1581f7566a34bd4e912920bba41367d5", to: "0x6912d024e2b88136c5a586e77b092199963b6083", amount: 112112, block: 25330230, type: "transfer" },
    { hash: "0x52ca75e7649dbe52b717f6d242b1861f973d0c31fea287dce9f5d2a1f955e86e", ts: 1781614691, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x3d126d6b1581f7566a34bd4e912920bba41367d5", amount: 101919, block: 25330230, type: "buy" },
    { hash: "0x1a5724662829d69d6bf1867b834722ff7a2e1c0993e2dff40293fd37037c9ddd", ts: 1781614679, from: "0x865338c177caaf9114758259320572a4d8aef0b1", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 137856, block: 25330229, type: "sell" },
    { hash: "0xc4538cec8093c2c3688d3911ada297579500818c330dc993cf678c7c003d78bb", ts: 1781613011, from: "0xc1c4a5c41b62989acdbb9a11bbab668158f5d481", to: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", amount: 346869, block: 25330090, type: "transfer" },
    { hash: "0xa5eef00db82926d07cf1f9082430de0e8f6d746642e66b4222a69230cc291459", ts: 1781612471, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xc1c4a5c41b62989acdbb9a11bbab668158f5d481", amount: 346869, block: 25330045, type: "transfer" },
    { hash: "0xd3b8776cb1b8682a84e388b4700612aab75c2917dbdb098afefd5e3f7bccc273", ts: 1781611943, from: "0x25dafdaa03a8b671909a79436718bc5c4a31dbf3", to: "0x865338c177caaf9114758259320572a4d8aef0b1", amount: 153425, block: 25330001, type: "transfer" },
    { hash: "0x40a6d8213b2e8d78ed682d7639f5d7b9fbaba9a73de6be4a3e2750f30b5d9f6d", ts: 1781611739, from: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 620638, block: 25329984, type: "transfer" },
    { hash: "0x29e3da3c4508b9dd9ae83e3693a6a1502bf93675b92ca7fe34dae04fe10c3c03", ts: 1781610611, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x25dafdaa03a8b671909a79436718bc5c4a31dbf3", amount: 153425, block: 25329891, type: "transfer" },
    { hash: "0xd49446eddeaa1247bc3be4c4ff7ebf89dcdfd10ebe4a5b28e1852dd20eeb177b", ts: 1781607827, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 1041677, block: 25329660, type: "transfer" },
    { hash: "0x6e37d0b2717e1596bff519abcd361986e3bbc842fa81e7b619714fa8cb12a33c", ts: 1781606927, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 1041677, block: 25329585, type: "transfer" },
    { hash: "0xe6279273479cc85d03b8a164bff48cc3c6e7ec3e56b3352969738a9f3a754d99", ts: 1781606699, from: "0x5ed7a6d55b987ecba2aed8481a0aadc50e9e4cca", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 1034060, block: 25329566, type: "transfer" },
    { hash: "0x5e822e2d62729932920699917c683abd268957edb5611e87692c3d9750ccb4b6", ts: 1781606651, from: "0x1cecbc925f7fbd1565fd4f99c81a4a138c729b7c", to: "0x5ed7a6d55b987ecba2aed8481a0aadc50e9e4cca", amount: 1034060, block: 25329562, type: "transfer" },
    { hash: "0xb9fda7d9735295b9cf8bc0bde7c08297a19babdaac4a1439448de0365be06dd9", ts: 1781606615, from: "0xbd9949756de166350fea2661b609bb19cca3f3ce", to: "0x1cecbc925f7fbd1565fd4f99c81a4a138c729b7c", amount: 1035617, block: 25329559, type: "transfer" },
    { hash: "0x04315f947ab0fd1216398ad29ce7be4bbab7229741eb10714c490633c4b85af4", ts: 1781606531, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xbd9949756de166350fea2661b609bb19cca3f3ce", amount: 1035616, block: 25329552, type: "transfer" },
    { hash: "0x8ac56c12448d0e32473c74da3889adc9f9adfa9fcc0b76437b8d3a1df3ac02b7", ts: 1781592395, from: "0x58eedc525050b711f56ae48050ad9d488e94ef19", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 143546, block: 25328379, type: "transfer" },
    { hash: "0x1a732175574f5830cc5905e55a4dac0e1299fe177dbb06725371d1f93662a3aa", ts: 1781590235, from: "0xe0afb959a5109e2209a6f1c9969e6f55a1953722", to: "0x58eedc525050b711f56ae48050ad9d488e94ef19", amount: 143546, block: 25328199, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 2454205, received: 3212562, sent: 758357, txs: 3 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 1452119, received: 1452119, sent: 0, txs: 5 },
    { wallet: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", net: 758357, received: 758357, sent: 0, txs: 2 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 620660, received: 622460, sent: 1800, txs: 6 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 192364, received: 192364, sent: 0, txs: 4 },
    { wallet: "0x0b1159d3c1a7e259509579d8317c5eb60baf2b1c", net: 87671, received: 87671, sent: 0, txs: 1 },
    { wallet: "0xa64046947fa1a6ef2fcf830979086bf54d97e9ac", net: 65959, received: 65959, sent: 0, txs: 1 },
    { wallet: "0x6aef801dcf9070fd4b240aae829e37c085dbae2e", net: 43468, received: 43468, sent: 0, txs: 1 },
    { wallet: "0x54e6af8ea8b0cbde057a0a7d9fe6166cd2c3e9e0", net: 33562, received: 33562, sent: 0, txs: 1 },
    { wallet: "0x0000ce08fa224696a819877070bf378e8b131acf", net: 32192, received: 32192, sent: 0, txs: 1 },
    { wallet: "0x5aa77ebdb73e1d91aeb22a911c7f5b0ccbf8f295", net: 27138, received: 27138, sent: 0, txs: 1 },
    { wallet: "0xbe4ae6e24d12dbd180517f126765178bae81f341", net: 26301, received: 26301, sent: 0, txs: 1 },
    { wallet: "0x65dff149e88d016a14a0ad086ab83e3ae8be6db0", net: 23151, received: 23151, sent: 0, txs: 1 },
    { wallet: "0x98f870ab30c0530b2e19d1adf5285200f52305a7", net: 20441, received: 20441, sent: 0, txs: 4 },
    { wallet: "0x7f5dffbd103ad4df1017ba42d44ccda4dc17c4a8", net: 19178, received: 19178, sent: 0, txs: 1 },
    { wallet: "0xf6414154ea3495ee098a88c8e35e47769d6fb205", net: 12670, received: 12670, sent: 0, txs: 4 },
    { wallet: "0xd032cd06ed43703be4429b413a7e4bcfd900c1d4", net: 11630, received: 11630, sent: 0, txs: 1 },
    { wallet: "0xbb0b683ebd2b2892ed03c0f4871cea073468ab75", net: 10685, received: 10685, sent: 0, txs: 1 },
    { wallet: "0x9b776c0e08ea1dd4878181149f36fc73ddad2824", net: 9041, received: 9041, sent: 0, txs: 1 },
    { wallet: "0xa47c51e0dd4f045a5f5c4fbf291268255cc0cc05", net: 8219, received: 8219, sent: 0, txs: 1 },
    { wallet: "0x7bdc65dbdc378d099da8da17add52a28f2f626ea", net: 7260, received: 7260, sent: 0, txs: 1 },
    { wallet: "0xbf7d14d0d1efefc6ec2ecc07b2bc026324743c00", net: 6027, received: 6027, sent: 0, txs: 1 },
    { wallet: "0x87607b0495272d2cb7ab5bcccf26e24af4b84473", net: 5785, received: 5785, sent: 0, txs: 1 },
    { wallet: "0xc007b04427e5fff04588aa71c82bf6c486203ffa", net: 5462, received: 5462, sent: 0, txs: 1 },
    { wallet: "0x8b10e16d47f111e219006963df9aebc53604c73a", net: 5205, received: 5205, sent: 0, txs: 1 },
    { wallet: "0x971c922b9273a0213dfb34b3ab9178f7fed0246c", net: 4795, received: 4795, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 4384, received: 4384, sent: 0, txs: 1 },
    { wallet: "0x7b9d43ef9d740bc6b6e593e1fc7c4b910a75fd00", net: 4273, received: 4273, sent: 0, txs: 4 },
    { wallet: "0x5317f98b67a892ecd4a83081e15a21d83dd161e5", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 3052, received: 3052, sent: 0, txs: 13 },
    { wallet: "0x437059127ca310796bea44a39d4b0338f9f6c12a", net: 3014, received: 3014, sent: 0, txs: 1 },
    { wallet: "0x543a74cf6ce42c95df200eb2c3b19af7e7157c16", net: 2994, received: 2994, sent: 0, txs: 1 },
    { wallet: "0xa9316ed0374857f5cc6aa20dde48fbd82dd08293", net: 2603, received: 2603, sent: 0, txs: 1 },
    { wallet: "0x1a996eb2a69423926d60973fc3d73cf1fa847a2f", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x6b67a3e46e45916a199bb58d060cc5fc728db778", net: 2055, received: 2055, sent: 0, txs: 1 },
    { wallet: "0x5f1c5951c5b1cc112ba9e89b9467edca33063453", net: 1391, received: 1391, sent: 0, txs: 1 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0x0988b52d012c75f43855000138906ad348d856b9", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0xe7ff8186307f7781bce361dbe7245e1330550c52", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xf68f7da978ca3cd9acbcb80672c9bde2e050b35f", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x4b6915950f1400abbd05e2e805bfab7fe29b4652", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 411, received: 411, sent: 0, txs: 2 },
    { wallet: "0x817dafcee58beef498fe640dbe0fac09929920aa", net: 400, received: 900, sent: 500, txs: 2 },
    { wallet: "0xe19ed11103265687a351662aab588a890ec598b4", net: 400, received: 900, sent: 500, txs: 2 },
    { wallet: "0x3d126d6b1581f7566a34bd4e912920bba41367d5", net: 354, received: 192717, sent: 192364, txs: 12 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 274, received: 274, sent: 0, txs: 1 }
];

const WHALE_LABELS = {

};
