// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 16, 2026 at 04:34 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 159;
const WHALE_TOTAL_VOLUME      = 8907040;
const WHALE_BIGGEST_SINGLE    = 1041677;

const WHALE_TRANSFERS = [
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
    { hash: "0x1a732175574f5830cc5905e55a4dac0e1299fe177dbb06725371d1f93662a3aa", ts: 1781590235, from: "0xe0afb959a5109e2209a6f1c9969e6f55a1953722", to: "0x58eedc525050b711f56ae48050ad9d488e94ef19", amount: 143546, block: 25328199, type: "transfer" },
    { hash: "0xbce8e9d3d81600d29768502007fe757d296d3e2deb8596fb0234a90888331864", ts: 1781580035, from: "0x236cd9dd6d431bfe47b31cbc1b92debac2524ab9", to: "0xe0afb959a5109e2209a6f1c9969e6f55a1953722", amount: 143546, block: 25327352, type: "transfer" },
    { hash: "0xe2b54f421359ec296ed7fdd0b5996a41ab15f42363482e7b30bf8867fc7bf4e9", ts: 1781548835, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 140291, block: 25324756, type: "transfer" },
    { hash: "0x2304f5361c75f3d63353a3e4fde25d0a995118bd79b4077b5c8e00e088127282", ts: 1781547863, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 140291, block: 25324676, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 1330075, received: 1330075, sent: 0, txs: 4 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 620660, received: 622460, sent: 1800, txs: 6 },
    { wallet: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", net: 346869, received: 346869, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 192364, received: 192364, sent: 0, txs: 4 },
    { wallet: "0x0b1159d3c1a7e259509579d8317c5eb60baf2b1c", net: 87671, received: 87671, sent: 0, txs: 1 },
    { wallet: "0x6aef801dcf9070fd4b240aae829e37c085dbae2e", net: 43468, received: 43468, sent: 0, txs: 1 },
    { wallet: "0x54e6af8ea8b0cbde057a0a7d9fe6166cd2c3e9e0", net: 33562, received: 33562, sent: 0, txs: 1 },
    { wallet: "0x5aa77ebdb73e1d91aeb22a911c7f5b0ccbf8f295", net: 27138, received: 27138, sent: 0, txs: 1 },
    { wallet: "0x65dff149e88d016a14a0ad086ab83e3ae8be6db0", net: 23151, received: 23151, sent: 0, txs: 1 },
    { wallet: "0x7f5dffbd103ad4df1017ba42d44ccda4dc17c4a8", net: 19178, received: 19178, sent: 0, txs: 1 },
    { wallet: "0x98f870ab30c0530b2e19d1adf5285200f52305a7", net: 15314, received: 15314, sent: 0, txs: 3 },
    { wallet: "0xf6414154ea3495ee098a88c8e35e47769d6fb205", net: 12670, received: 12670, sent: 0, txs: 4 },
    { wallet: "0xd032cd06ed43703be4429b413a7e4bcfd900c1d4", net: 11630, received: 11630, sent: 0, txs: 1 },
    { wallet: "0xbb0b683ebd2b2892ed03c0f4871cea073468ab75", net: 10685, received: 10685, sent: 0, txs: 1 },
    { wallet: "0x9b776c0e08ea1dd4878181149f36fc73ddad2824", net: 9041, received: 9041, sent: 0, txs: 1 },
    { wallet: "0x7bdc65dbdc378d099da8da17add52a28f2f626ea", net: 7260, received: 7260, sent: 0, txs: 1 },
    { wallet: "0x87607b0495272d2cb7ab5bcccf26e24af4b84473", net: 5785, received: 5785, sent: 0, txs: 1 },
    { wallet: "0x7b9d43ef9d740bc6b6e593e1fc7c4b910a75fd00", net: 5484, received: 5484, sent: 0, txs: 5 },
    { wallet: "0xc007b04427e5fff04588aa71c82bf6c486203ffa", net: 5462, received: 5462, sent: 0, txs: 1 },
    { wallet: "0x6f983e1cdab14ed5b72686df0f308b5a3c5acd3d", net: 4932, received: 4932, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 4384, received: 4384, sent: 0, txs: 1 },
    { wallet: "0x5317f98b67a892ecd4a83081e15a21d83dd161e5", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 2493, received: 2493, sent: 0, txs: 13 },
    { wallet: "0x1a996eb2a69423926d60973fc3d73cf1fa847a2f", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x28bed33a551ada8caca12327c75a5b0ece9fb87a", net: 1781, received: 1781, sent: 0, txs: 1 },
    { wallet: "0x139724a176a50f5089f4ed5bc653124e9d2c97f3", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xf68f7da978ca3cd9acbcb80672c9bde2e050b35f", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x4b6915950f1400abbd05e2e805bfab7fe29b4652", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x817dafcee58beef498fe640dbe0fac09929920aa", net: 400, received: 900, sent: 500, txs: 2 },
    { wallet: "0xe19ed11103265687a351662aab588a890ec598b4", net: 400, received: 900, sent: 500, txs: 2 },
    { wallet: "0x3d126d6b1581f7566a34bd4e912920bba41367d5", net: 354, received: 192717, sent: 192364, txs: 12 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x9df14235393c7a9d2bc38db6c12c61b699e094c6", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x0f36eb8f227aa28e2eb2705724233addabd61e15", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xb8294f8f8f6619a299688f1ca12cb967fc9a6176", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x907262769c7143796829c3d9595d8d4007e65cd1", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x06e5b4ad474368f350c2526dc0f034294c92f004", net: 67, received: 67, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 52, received: 52, sent: 0, txs: 1 },
    { wallet: "0xcc9ce65eed05a3825fe7bfe5f48fbe9777da7d39", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0x66a9893cc07d91d95644aedd05d03f95e1dba8af", net: 0, received: 9037, sent: 9037, txs: 4 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 22608, sent: 22608, txs: 10 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 54023, sent: 54023, txs: 6 }
];

const WHALE_LABELS = {

};
