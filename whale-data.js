// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 1, 2026 at 07:45 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 254;
const WHALE_TOTAL_VOLUME      = 23272590;
const WHALE_BIGGEST_SINGLE    = 2393263;

const WHALE_TRANSFERS = [
    { hash: "0xfc4bcbeff838c67d0a442d3704ce876bd5c48c1fe6efb91bdcbb126d977a4cd9", ts: 1782922583, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xc608b6c0d492d39078b9d969175de1d8761c2e37", amount: 247534, block: 25438799, type: "transfer" },
    { hash: "0x62813627faa1db02ca91a1480469b92496a803d13a68eae8e67ee5d32fa50be8", ts: 1782909371, from: "0x7f1cd22f3e8dfac287cb6b1d29a4d28ecb797b9c", to: "0xfaa2996d3a7fad40ff44058086c186173bf23066", amount: 129315, block: 25437705, type: "transfer" },
    { hash: "0x10e1107d66192b5239bbcebb43896d46b1b6d037fa87bc0c1da3fdf64e2cdeb3", ts: 1782909119, from: "0x12dbae22b8d1052abc21b768ccf938de5d888f66", to: "0x7f1cd22f3e8dfac287cb6b1d29a4d28ecb797b9c", amount: 129315, block: 25437684, type: "transfer" },
    { hash: "0xa58e817a8b9fa676b64ae78865454872136dd3d20e8d0f263d15efcbb6fc0999", ts: 1782909035, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x12dbae22b8d1052abc21b768ccf938de5d888f66", amount: 118356, block: 25437677, type: "transfer" },
    { hash: "0x8ccc71d8336496134facac0ae3bc0d5d6ac26f75962e70ad3cf34f30dc24752d", ts: 1782908975, from: "0xbf76f75bff0fa40bf02939c04c7d852940ec723a", to: "0x585a5d6c4f7cb4fb8ca12095dcbb7ffa01c57148", amount: 100000, block: 25437672, type: "transfer" },
    { hash: "0xb876a31c2fc1ab6efde98d2f935679d8dde163170a940b126695d628352cbd5b", ts: 1782908015, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", amount: 1351400, block: 25437592, type: "transfer" },
    { hash: "0x382b7caeff32a80af83019a7790be14f4b9150c0cd735c199d7d3afe7144a48d", ts: 1782907751, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x2ac2e9365cf2619f4400fe81d7e5e03bf5f0d97f", amount: 172603, block: 25437570, type: "transfer" },
    { hash: "0xca1fadc9660eeab9d5f8347feff5ed8f3c91f0ce7b5385ef8199324c6c69d4dd", ts: 1782905627, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x4bc629efe79672a15bc9af08b91c8f43cadc0324", amount: 180556, block: 25437394, type: "transfer" },
    { hash: "0xcf4d90a1005664d61fb18d9405fe516d6003fcf1aa41d15e7f4f80512dca73f9", ts: 1782904787, from: "0x04c7b4e2db71b2abffe4f2131cf2754533cf32da", to: "0xbbf7e985e1e0ca6f854cecb5096274e8e797e8b4", amount: 201033, block: 25437324, type: "transfer" },
    { hash: "0xa17d7b27989f82300ba77cc7cbd6e4edfb49a156968067674c8601872bbbb0e2", ts: 1782904319, from: "0x82a365858b4a82eed80e5473c6f698f93b48617f", to: "0x9642b23ed1e01df1092b92641051881a322f5d4e", amount: 116403, block: 25437286, type: "transfer" },
    { hash: "0xb47ce6b3d2f5acc9fe700c22a8fe527c1e0616827d798c24e034b3f0dcb8d518", ts: 1782904247, from: "0x8f10b468b06c6fd214b65f87778827f7d113f996", to: "0x04c7b4e2db71b2abffe4f2131cf2754533cf32da", amount: 201033, block: 25437280, type: "transfer" },
    { hash: "0xb47ce6b3d2f5acc9fe700c22a8fe527c1e0616827d798c24e034b3f0dcb8d518", ts: 1782904247, from: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", to: "0x8f10b468b06c6fd214b65f87778827f7d113f996", amount: 257735, block: 25437280, type: "transfer" },
    { hash: "0xb47ce6b3d2f5acc9fe700c22a8fe527c1e0616827d798c24e034b3f0dcb8d518", ts: 1782904247, from: "0x9a47f3289794e9bbc6a3c571f6d96ad4e7baed16", to: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", amount: 257735, block: 25437280, type: "transfer" },
    { hash: "0xb47ce6b3d2f5acc9fe700c22a8fe527c1e0616827d798c24e034b3f0dcb8d518", ts: 1782904247, from: "0x8e514f823c710d2658b056b83a36edef12b43b98", to: "0x9a47f3289794e9bbc6a3c571f6d96ad4e7baed16", amount: 260010, block: 25437280, type: "transfer" },
    { hash: "0x857afdafaee1546bf31e7bc9f2fe1f96e5664e4191c701413e86a567a1810e4e", ts: 1782903935, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", amount: 195844, block: 25437254, type: "buy" },
    { hash: "0x2e9307bbd8855f7f12ed84603ef4540b43f63c22dafae12f60ea6379dbeacc2b", ts: 1782903923, from: "0x7f51c134230eb9e5aba42bc364d3d3eba26d9712", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 262076, block: 25437253, type: "sell" },
    { hash: "0x2e9307bbd8855f7f12ed84603ef4540b43f63c22dafae12f60ea6379dbeacc2b", ts: 1782903923, from: "0x7f51c134230eb9e5aba42bc364d3d3eba26d9712", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 131038, block: 25437253, type: "sell" },
    { hash: "0x2e9307bbd8855f7f12ed84603ef4540b43f63c22dafae12f60ea6379dbeacc2b", ts: 1782903923, from: "0x480bb4de923f5e550d6c8db20f2ea5be6fe8f65d", to: "0x7f51c134230eb9e5aba42bc364d3d3eba26d9712", amount: 410726, block: 25437253, type: "transfer" },
    { hash: "0x8aebd76b4e3dfeb1316bfedd2d965d5dcb527934d973722171173baa335bbe74", ts: 1782903875, from: "0x2310747e34291ebbc0d197e4a235854e622e54db", to: "0x480bb4de923f5e550d6c8db20f2ea5be6fe8f65d", amount: 411370, block: 25437249, type: "transfer" },
    { hash: "0x41cab7789c7cd6c0172a44d07b2c5a5f13f9c91cff742f0e7ac58897284f9edd", ts: 1782881507, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 998238, block: 25435393, type: "transfer" },
    { hash: "0x1b325af647ab6187e2b3b717181f6ae9f317d00610e4495087aa838049a558aa", ts: 1782880943, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 998238, block: 25435346, type: "transfer" },
    { hash: "0x7f6d1459007d173f88793fb86845cd467af5af21a4dbb26a5a11e66554c2b8e6", ts: 1782880871, from: "0x26b6f4c5c5a9fe87547b731ce148bbe5ddf429e0", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 998498, block: 25435340, type: "transfer" },
    { hash: "0x8517591396fa615d1cc9bc2566f9cf2639cc8f41f13f4a8f0a7711fb9a4e975f", ts: 1782880811, from: "0xd874d858efd18a65f9cb76863474cf64e1be3d60", to: "0x26b6f4c5c5a9fe87547b731ce148bbe5ddf429e0", amount: 998498, block: 25435335, type: "transfer" },
    { hash: "0xdcfe15fa81654bb8cf50a5ef4dc2253ad91f567dd61779eeda4f71b18becfd86", ts: 1782879803, from: "0x39927a709eaba03d43c351ea0b1bf4228ce99ade", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 2393263, block: 25435251, type: "transfer" },
    { hash: "0x663ac87fcb544a179467ca906612e786ea84fc32a0c6078d73eee8258f15ae90", ts: 1782879767, from: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 1196534, block: 25435248, type: "transfer" },
    { hash: "0x7d98ac89d814fdfbea75f34d84eb77b830806092dd9671bb7e3ae1288c4886ca", ts: 1782879239, from: "0xa230ae47c4e13b2484dcb9b3a50228ec1336fe59", to: "0x39927a709eaba03d43c351ea0b1bf4228ce99ade", amount: 2393263, block: 25435204, type: "transfer" },
    { hash: "0xc04626102fc07377216c1b558b28fe7148eb57c5362bdfb6608d8039fcf30227", ts: 1782879203, from: "0x6912d024e2b88136c5a586e77b092199963b6083", to: "0xa230ae47c4e13b2484dcb9b3a50228ec1336fe59", amount: 2393263, block: 25435201, type: "transfer" },
    { hash: "0x42891a5e163a684fc43d152da6a49e3699cb1d20ff1373b0a831ae8d5b2adaa9", ts: 1782879107, from: "0xf733c29e2918271490d8318846f617b16e613be0", to: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", amount: 1224513, block: 25435193, type: "transfer" },
    { hash: "0xc6036a4bb8932e1c74b5a7f998dc102afdf82c2c8b783ec1598efe049a27af71", ts: 1782869627, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 743760, block: 25434405, type: "transfer" },
    { hash: "0x0dca5cb25837a8e4bdb69af6cdc12bbf43b41835bcadf3b047b888aa0df5c05e", ts: 1782869459, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 743760, block: 25434391, type: "transfer" },
    { hash: "0x757fd7026d27ce95c8f2b0ededaee12150ebd140aacb0fe5e910d656d1197516", ts: 1782869339, from: "0xaf5e84d0a592ae84a1415a14627fe65929c9d9ec", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 738614, block: 25434381, type: "transfer" },
    { hash: "0x6e0199cf3e486d3a9f5c08ecaf3c8c6bb24b070edfcd4c3c8756b905751470c9", ts: 1782869291, from: "0x1cecbc925f7fbd1565fd4f99c81a4a138c729b7c", to: "0xaf5e84d0a592ae84a1415a14627fe65929c9d9ec", amount: 738614, block: 25434377, type: "transfer" },
    { hash: "0x06fdb655444c39684df203e33c433c1f42815aea33edc639a7c58679cec73e33", ts: 1782869231, from: "0xbd9949756de166350fea2661b609bb19cca3f3ce", to: "0x1cecbc925f7fbd1565fd4f99c81a4a138c729b7c", amount: 739726, block: 25434372, type: "transfer" },
    { hash: "0xc151ef0106cfb4c51c8ddeab2575cd2adb030c111c138ee4ebec35fc87b435b9", ts: 1782869003, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xbd9949756de166350fea2661b609bb19cca3f3ce", amount: 739726, block: 25434353, type: "transfer" },
    { hash: "0x2a8768be0d7fa15b68ebee610f1c6218bd4b808a6ec18d9c71ce8241b082a942", ts: 1782864095, from: "0xbc7697aabf2789ecfc22ba2868a2bb8eec6ccd1d", to: "0xf7f3d88685953618d82e220c78ae73cab310a11f", amount: 100000, block: 25433946, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 3589797, received: 3589797, sent: 0, txs: 2 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 1741997, received: 1741997, sent: 0, txs: 2 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 1351400, received: 1351400, sent: 0, txs: 1 },
    { wallet: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", net: 1225624, received: 1225624, sent: 0, txs: 2 },
    { wallet: "0xbbf7e985e1e0ca6f854cecb5096274e8e797e8b4", net: 255868, received: 255868, sent: 0, txs: 2 },
    { wallet: "0xc608b6c0d492d39078b9d969175de1d8761c2e37", net: 247534, received: 247534, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 185017, received: 185017, sent: 0, txs: 2 },
    { wallet: "0x4bc629efe79672a15bc9af08b91c8f43cadc0324", net: 180556, received: 180556, sent: 0, txs: 1 },
    { wallet: "0x2ac2e9365cf2619f4400fe81d7e5e03bf5f0d97f", net: 172603, received: 172603, sent: 0, txs: 1 },
    { wallet: "0xfaa2996d3a7fad40ff44058086c186173bf23066", net: 129315, received: 129315, sent: 0, txs: 1 },
    { wallet: "0xf7f3d88685953618d82e220c78ae73cab310a11f", net: 100000, received: 100000, sent: 0, txs: 1 },
    { wallet: "0x6f754370cef4c943d56cb769468950f7988ebdd3", net: 99969, received: 99969, sent: 0, txs: 1 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 99940, received: 99940, sent: 0, txs: 10 },
    { wallet: "0xd1bd5d30e60b814d921352e2200fbf4255da36ed", net: 87137, received: 87137, sent: 0, txs: 1 },
    { wallet: "0x97fae140a6607bd0100acc505420584161229588", net: 79452, received: 79452, sent: 0, txs: 1 },
    { wallet: "0x82a365858b4a82eed80e5473c6f698f93b48617f", net: 59892, received: 244909, sent: 185017, txs: 8 },
    { wallet: "0x236cd9dd6d431bfe47b31cbc1b92debac2524ab9", net: 56702, received: 56702, sent: 0, txs: 1 },
    { wallet: "0x5f1c5951c5b1cc112ba9e89b9467edca33063453", net: 40113, received: 40113, sent: 0, txs: 5 },
    { wallet: "0x672d77321bb901f7e385e5e76984dd2471da0669", net: 34247, received: 34247, sent: 0, txs: 1 },
    { wallet: "0x0a1354ba9359d7aded40faf11bbe590e2c14bec7", net: 33144, received: 33144, sent: 0, txs: 1 },
    { wallet: "0x536dc310c06209a8d108aedaa665db2c8233807a", net: 30000, received: 30000, sent: 0, txs: 1 },
    { wallet: "0xe7753739c9ffc5b708412298b8a1c966f0a9ae52", net: 25685, received: 34247, sent: 8562, txs: 3 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 24197, received: 1773863, sent: 1749667, txs: 15 },
    { wallet: "0x26dea86f64944fb1652a9ec7530e82dcf21e3c59", net: 20822, received: 20822, sent: 0, txs: 1 },
    { wallet: "0xdc56fd9d0112f44c9c4944e544fd20987c8b3a8c", net: 17096, received: 17096, sent: 0, txs: 4 },
    { wallet: "0x8cc4519b63898ddc86c8b6a5387880e72700d7bd", net: 16849, received: 16849, sent: 0, txs: 1 },
    { wallet: "0x05c8a7e6c85d1082c239e9dcac3594de439072aa", net: 15918, received: 15918, sent: 0, txs: 1 },
    { wallet: "0xa16f4787861aa137759fb662179512a9ee6e4d94", net: 12740, received: 12740, sent: 0, txs: 1 },
    { wallet: "0xc44a3acad70b221fd8e213726e20cc95e48bb2cc", net: 10548, received: 10548, sent: 0, txs: 1 },
    { wallet: "0x534619104a9248b55a0293bf32e64ef939d8b5d0", net: 8630, received: 8630, sent: 0, txs: 1 },
    { wallet: "0xe28d7502e70c9b45de8218b122a72a1eaf972695", net: 7132, received: 7132, sent: 0, txs: 1 },
    { wallet: "0x4015afef85dfe9020c37e094fca46e56854dc5c6", net: 6575, received: 6575, sent: 0, txs: 1 },
    { wallet: "0xfe263102682933297cb65dc813e5193249769251", net: 6374, received: 6374, sent: 0, txs: 1 },
    { wallet: "0xd1d4909e0756d1f00bdd3c7bace674ec7733d661", net: 6164, received: 6164, sent: 0, txs: 1 },
    { wallet: "0xb695091eb0618245a5e61f3f6c52babddcbf6aba", net: 5753, received: 5753, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 3991, received: 4003, sent: 12, txs: 20 },
    { wallet: "0x9520047179e27f23fc1cefa70f254342661ae19c", net: 2329, received: 2329, sent: 0, txs: 1 },
    { wallet: "0x4acb6c4321253548a7d4bb9c84032cc4ee04bfd7", net: 2275, received: 2275, sent: 0, txs: 1 },
    { wallet: "0xa9316ed0374857f5cc6aa20dde48fbd82dd08293", net: 1918, received: 1918, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 1414, received: 1414, sent: 0, txs: 2 },
    { wallet: "0xca54464d196e46b426ff5e9959569f6763357899", net: 1024, received: 1024, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xf56abca2e60b22f038870d8e5c00b2ee2e68b8c5", net: 315, received: 315, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x9008d19f58aabd9ed0d60971565aa8510560ab41", net: 108, received: 54795, sent: 54686, txs: 6 },
    { wallet: "0xddeebb24f6d6603e5b7f0b6a468f61e0035a04cb", net: 24, received: 24, sent: 0, txs: 1 },
    { wallet: "0x82d9a407f99a95db4671e7021d625cbd0787a407", net: 9, received: 9, sent: 0, txs: 1 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 4, received: 4, sent: 0, txs: 1 }
];

const WHALE_LABELS = {

};
