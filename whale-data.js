// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "September 2, 2026 at 08:24 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 232;
const WHALE_TOTAL_VOLUME      = 10389390;
const WHALE_BIGGEST_SINGLE    = 5000000;

const WHALE_TRANSFERS = [
    { hash: "0x51a9a10624d323d0aa48ea288e4a2ca09f2c802307f0d1e08c80fc6771983a47", ts: 1788375899, from: "0x4296339b4ff8e67f07de40d97a49a680f2598e0f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 191186, block: 25891585, type: "sell" },
    { hash: "0x51a9a10624d323d0aa48ea288e4a2ca09f2c802307f0d1e08c80fc6771983a47", ts: 1788375899, from: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", to: "0x4296339b4ff8e67f07de40d97a49a680f2598e0f", amount: 191186, block: 25891585, type: "transfer" },
    { hash: "0x51a9a10624d323d0aa48ea288e4a2ca09f2c802307f0d1e08c80fc6771983a47", ts: 1788375899, from: "0xd09ba92bf57152b781d28dc8c54bb89780b59ab7", to: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", amount: 191186, block: 25891585, type: "transfer" },
    { hash: "0x9dcc0e05ae255e9fd594f4b113404f116f15ca784272490ea334bcd48d5f7d70", ts: 1788374111, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25891436, type: "sell" },
    { hash: "0xf70146a4d10c08da26a68857e04f967b4b90d7f6cbb127f2d4c6b2f61c76749f", ts: 1788371783, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25891242, type: "buy" },
    { hash: "0x409e18a4847a6d5259e52a9dd58cdaacaa0d3631f8b9dc29416b9f98f3dfcbc2", ts: 1788371231, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", amount: 154231, block: 25891196, type: "buy" },
    { hash: "0x6e3638ce863d5152b3a72dc3f09c95ee20f7889764945aa49411c7ab72e0494d", ts: 1788369935, from: "0xf732ebce4e66e48ac2ba592648c62aeeb52d9f73", to: "0xd09ba92bf57152b781d28dc8c54bb89780b59ab7", amount: 191781, block: 25891089, type: "transfer" },
    { hash: "0x83afbc3f31e2fe2eab07c507309899230f1dc6312f66577e5f4eb80843f187a8", ts: 1788369839, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xf732ebce4e66e48ac2ba592648c62aeeb52d9f73", amount: 191781, block: 25891081, type: "transfer" },
    { hash: "0xf94a9c512fdbf881d84ab89c7a540492e2fdb9f8bd14b108a6aeca7b9db75599", ts: 1788368879, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25891001, type: "sell" },
    { hash: "0xd8d2dd10788cf28a38483a4887051d5af4c84dbc929177d22bd74eef0fe12905", ts: 1788364415, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25890629, type: "buy" },
    { hash: "0x92ad80d8b0a7cfa7cfb3b42dacd26fe75fb5b3fca9a6889fbcb713ee7b8bb80d", ts: 1788361559, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", amount: 154982, block: 25890392, type: "buy" },
    { hash: "0x49d7841c199954ee7dff685997059347a51c43c86718e6a558d6ae120c472969", ts: 1788358055, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", amount: 154585, block: 25890101, type: "buy" },
    { hash: "0xa6f5b295b5ce7192f84896d7d3f876ae1e06cdaf6b2daac5618c301cf296364e", ts: 1788352943, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", amount: 249270, block: 25889677, type: "transfer" },
    { hash: "0xc881aed0ca73f180f6996e0d222f0986d1cf12c200607926d581cdbb60e84ee7", ts: 1788351263, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", amount: 155373, block: 25889537, type: "buy" },
    { hash: "0x5fc0c8723b9b688f33344c7e725a647537f41a579117f9158e94f87b59446bf0", ts: 1788342071, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25888776, type: "sell" },
    { hash: "0x6ff97cba1cbcccd4fb9d942c604ae78d29e00e63234427688ed135ba58b086ce", ts: 1788341627, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25888740, type: "sell" },
    { hash: "0x1336b1364fbff3f84fc6d19b15ee03895d1a072a98b6d61ecb60c2772d1a69bc", ts: 1788339515, from: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 153791, block: 25888565, type: "sell" },
    { hash: "0x4093fc530edf97d5a49b7e648aa606cec7f89ca708dd51f329247632fac772fa", ts: 1788337859, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", amount: 154355, block: 25888427, type: "buy" },
    { hash: "0xd3f73457a2cf3706fa40c9975e8d4d778fce366746c01691a99d20d0f033d8c2", ts: 1788337775, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25888420, type: "buy" },
    { hash: "0x78a9a7c5e5a42e61761fe18b338425115750b0ecb3784a2f0acd6733f9a3bd6d", ts: 1788333107, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", amount: 155542, block: 25888032, type: "buy" },
    { hash: "0xd266d59bad582bf30aa029f58ca5996c0c4c2713e302f22129241e1d7c0550c3", ts: 1788332723, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", amount: 156215, block: 25888001, type: "buy" },
    { hash: "0x68db3a37221b33b8b913a26c3c54d1dd87b7cdeb5f5a342bc38259f332182b38", ts: 1788332723, from: "0x1f2f10d1c40777ae1da742455c65828ff36df387", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 145033, block: 25888001, type: "sell" },
    { hash: "0x68db3a37221b33b8b913a26c3c54d1dd87b7cdeb5f5a342bc38259f332182b38", ts: 1788332723, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x1f2f10d1c40777ae1da742455c65828ff36df387", amount: 145033, block: 25888001, type: "buy" },
    { hash: "0x046838c105f9b8a72fe4a76fcd653ad26a99cc957fe385aad69eeed1ae445a40", ts: 1788332519, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25887984, type: "buy" },
    { hash: "0xf856e69bdea3030851bdf4cc97ac27da7aa4ba5639257b8b6ff497053f290fd3", ts: 1788323171, from: "0x7c1bf16c2b56738a580bcb16e4d1dd6a7bfa7638", to: "0xd874d858efd18a65f9cb76863474cf64e1be3d60", amount: 5000000, block: 25887205, type: "transfer" },
    { hash: "0xb8cd03c80df24c6223d4a12a9d40fd52e8de5fef4352650546e087c253fb3c1b", ts: 1788320999, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x8cf6b31c82aa9f7c832adb397b7c84a10403b152", amount: 219178, block: 25887024, type: "transfer" },
    { hash: "0xb6f6c274f22ae78d7798b22ea188a2dfa6a07b9f921b9824b6f4c7a877c8b7cd", ts: 1788317063, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", amount: 157390, block: 25886696, type: "buy" },
    { hash: "0x42cfe7c9e1e86fd765e52a13eed48dd3ac958151e17c15df3876e4500c2f7b89", ts: 1788313295, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25886384, type: "sell" },
    { hash: "0xd07bfaffc1c770e2af5b7073e70d44c6b4c51039139b9fc0042339128e31f4e5", ts: 1788312431, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25886313, type: "sell" },
    { hash: "0x1f3e4453bd8303b5b94f9accfe5da386734ad96754b367e40a4d3249d156680e", ts: 1788312359, from: "0xd0be1fded5d964619b92b3672c08c43305529be0", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 100786, block: 25886307, type: "transfer" },
    { hash: "0x70b62a6ba8fc5a0305d0c61ffc3170b3c623c134fbdb7e60ef598e8ab8dbba0a", ts: 1788311555, from: "0x9f4846679287e7c8da0e8e61f08eb378b6d5f3cf", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 112551, block: 25886240, type: "transfer" },
    { hash: "0xeda42dee331de74840c8c629dd9fc727d24e46670bc8d024e2aefd83f4a2e77c", ts: 1788310919, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", amount: 157375, block: 25886187, type: "buy" },
    { hash: "0xc5c1ba6c4e16c7eee9d4624bd62339c000b8e677e309d11498ed353a904c8a8c", ts: 1788309887, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", amount: 158323, block: 25886101, type: "buy" },
    { hash: "0x47674cf420e931c3ddd5df943d4c8bbcd850cfbb2910a2f409a00ea59ead772b", ts: 1788309815, from: "0x447a03c131c0a97a8b8d548e3cd81aec4ce05d73", to: "0x9f4846679287e7c8da0e8e61f08eb378b6d5f3cf", amount: 112551, block: 25886095, type: "transfer" },
    { hash: "0x47674cf420e931c3ddd5df943d4c8bbcd850cfbb2910a2f409a00ea59ead772b", ts: 1788309815, from: "0x447a03c131c0a97a8b8d548e3cd81aec4ce05d73", to: "0xd0be1fded5d964619b92b3672c08c43305529be0", amount: 100786, block: 25886095, type: "transfer" },
    { hash: "0x47674cf420e931c3ddd5df943d4c8bbcd850cfbb2910a2f409a00ea59ead772b", ts: 1788309815, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x447a03c131c0a97a8b8d548e3cd81aec4ce05d73", amount: 213338, block: 25886095, type: "buy" },
    { hash: "0x58f757059e207f3b2e05d0404562650ef3ffc3ffbc30238f1a18f16bb3dd58a6", ts: 1788308315, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", amount: 160332, block: 25885970, type: "buy" },
    { hash: "0x6c2a5e8b8c33898c7a228c414c201c977bae6a8dcf9b86209d1ada0dabaff26a", ts: 1788305651, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", amount: 161250, block: 25885750, type: "buy" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xd874d858efd18a65f9cb76863474cf64e1be3d60", net: 5000000, received: 5000000, sent: 0, txs: 1 },
    { wallet: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", net: 789682, received: 943473, sent: 153791, txs: 7 },
    { wallet: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", net: 465500, received: 465500, sent: 0, txs: 3 },
    { wallet: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", net: 313590, received: 313590, sent: 0, txs: 2 },
    { wallet: "0xc47df3f8335e81696abfe0d082d33bec570d4fa2", net: 300000, received: 420000, sent: 120000, txs: 9 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 249270, received: 249270, sent: 0, txs: 1 },
    { wallet: "0x8cf6b31c82aa9f7c832adb397b7c84a10403b152", net: 219178, received: 219178, sent: 0, txs: 1 },
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 211736, received: 211736, sent: 0, txs: 3 },
    { wallet: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", net: 157390, received: 157390, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 112551, received: 112551, sent: 0, txs: 1 },
    { wallet: "0x67336cec42645f55059eff241cb02ea5cc52ff86", net: 106186, received: 106186, sent: 0, txs: 2 },
    { wallet: "0x1f5e1b5999e02cbc42243272deef6cbb35ab368d", net: 85753, received: 85753, sent: 0, txs: 1 },
    { wallet: "0xb68fa1961773db566f68fbf641e2cacb4c5f151f", net: 85753, received: 85753, sent: 0, txs: 1 },
    { wallet: "0x38123a191e9685448658d2207b0543e2fb9282cc", net: 41233, received: 41233, sent: 0, txs: 1 },
    { wallet: "0x0faeb60e1b406c2f84454f169a2512a5792e1aa8", net: 30886, received: 30886, sent: 0, txs: 1 },
    { wallet: "0x053e6294400a9268e35df445624f58087c7f388f", net: 8021, received: 8021, sent: 0, txs: 1 },
    { wallet: "0x28ede55e0ff5e20d732b989879aecfd87b8f761b", net: 4232, received: 54232, sent: 50000, txs: 7 },
    { wallet: "0xa14715e203bbfc7eae1f6797c81c292b3b6dcad5", net: 4024, received: 4024, sent: 0, txs: 1 },
    { wallet: "0x0fe336276fcfbe08930fc0fdbf6e76a9729940e8", net: 3992, received: 3992, sent: 0, txs: 1 },
    { wallet: "0x026a34860e13909b21672c2470239b2cd65a7939", net: 3915, received: 3915, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 3543, received: 3543, sent: 0, txs: 2 },
    { wallet: "0xdaffdcbca50c6c35505460db58c0fc29ca19534f", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0x23b59cf3e07c9cf1b5fd9a450ced9c9d67835588", net: 1657, received: 1657, sent: 0, txs: 1 },
    { wallet: "0x1b0b1ad3e6a2fb69c48c2913fea012bc38f0a2e9", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xfd9072f3715419414e2345da949fe5048c839877", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1005, received: 1005, sent: 0, txs: 11 },
    { wallet: "0x4f3889331539ab2ed976dbaf67c8def36deeed15", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x7b9d43ef9d740bc6b6e593e1fc7c4b910a75fd00", net: 550, received: 550, sent: 0, txs: 1 },
    { wallet: "0x3822d8b402d6fcbe3187b08b1733ae2e2e46a2d3", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x10916b18ce6deef279f0ee66fab6b6c0e3461b78", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xf3b41e096731dffff3cb4a28ad989a825ffd9d67", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x722a6b207b2d49cc27bb2806d4de7b65d47a97b3", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x504ce9e51e508c85a161058c12e970a903d482fc", net: 344, received: 344, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xf19ff5a1fa85f64b6d2cd567198c4cf3fc7dde2a", net: 216, received: 216, sent: 0, txs: 1 },
    { wallet: "0x4ea2bbc14909742ca4d14164025599b81f625ebd", net: 3, received: 3, sent: 0, txs: 1 },
    { wallet: "0xe6b9148455dac80434b55db3b7d17843d0b8afd2", net: 3, received: 3, sent: 0, txs: 1 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 1083495, sent: 1083495, txs: 60 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 332327, sent: 332327, txs: 26 },
    { wallet: "0x41e896e6eb9856aa413234ecbfeef4060e9d8531", net: 0, received: 1507, sent: 1507, txs: 3 },
    { wallet: "0x4296339b4ff8e67f07de40d97a49a680f2598e0f", net: 0, received: 268653, sent: 268653, txs: 12 },
    { wallet: "0xd09ba92bf57152b781d28dc8c54bb89780b59ab7", net: 0, received: 191781, sent: 191781, txs: 3 },
    { wallet: "0xd308fc4ec59cf2779eb75787810f05fc80fedb60", net: 0, received: 19863, sent: 19863, txs: 3 },
    { wallet: "0xd43026d607c66f4ecadd408867e8ba9af05f3875", net: 0, received: 19863, sent: 19863, txs: 2 },
    { wallet: "0xf732ebce4e66e48ac2ba592648c62aeeb52d9f73", net: 0, received: 191781, sent: 191781, txs: 2 }
];

const WHALE_LABELS = {

};
