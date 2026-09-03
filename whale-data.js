// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "September 3, 2026 at 02:30 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 214;
const WHALE_TOTAL_VOLUME      = 10711739;
const WHALE_BIGGEST_SINGLE    = 5000000;

const WHALE_TRANSFERS = [
    { hash: "0x987b7e2c5e6ec2ba90a108f12a9bd3b959ad37eceea676b6d816efd81b7e1b76", ts: 1788396611, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25893301, type: "sell" },
    { hash: "0xaef41bde7bc8ef5464cb7cd12a9365c6bfbf9194be920a3ad7d8c5114537944b", ts: 1788394619, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", amount: 154449, block: 25893136, type: "buy" },
    { hash: "0x9870a9464fae0be836216fba4a900a32f9fb7631b2465f66fbec26c679b31978", ts: 1788394247, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25893105, type: "buy" },
    { hash: "0x8d2e8d9727fc3d8731b0e7fd64e5842aa808ff81a6795c8a5293a4049e9e08b3", ts: 1788390443, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", amount: 166552, block: 25892790, type: "transfer" },
    { hash: "0x8d2e8d9727fc3d8731b0e7fd64e5842aa808ff81a6795c8a5293a4049e9e08b3", ts: 1788390443, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 166552, block: 25892790, type: "buy" },
    { hash: "0x856f16ed2a564461e5a9196e4e7a82cb1933d0f6ce4acbcf842d66d653d20f5e", ts: 1788390431, from: "0x4296339b4ff8e67f07de40d97a49a680f2598e0f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 280559, block: 25892789, type: "sell" },
    { hash: "0x856f16ed2a564461e5a9196e4e7a82cb1933d0f6ce4acbcf842d66d653d20f5e", ts: 1788390431, from: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", to: "0x4296339b4ff8e67f07de40d97a49a680f2598e0f", amount: 280559, block: 25892789, type: "transfer" },
    { hash: "0x856f16ed2a564461e5a9196e4e7a82cb1933d0f6ce4acbcf842d66d653d20f5e", ts: 1788390431, from: "0x045ff9b2dbcc4bff1f477e591ea262fd2b1f3f5b", to: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", amount: 280559, block: 25892789, type: "transfer" },
    { hash: "0x9ee6a07301f72d97cb13170de9be3506ba4047eefa68ccd782f9ada62fdc7695", ts: 1788388571, from: "0x139724a176a50f5089f4ed5bc653124e9d2c97f3", to: "0x045ff9b2dbcc4bff1f477e591ea262fd2b1f3f5b", amount: 270411, block: 25892634, type: "transfer" },
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
    { hash: "0xb6f6c274f22ae78d7798b22ea188a2dfa6a07b9f921b9824b6f4c7a877c8b7cd", ts: 1788317063, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", amount: 157390, block: 25886696, type: "buy" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xd874d858efd18a65f9cb76863474cf64e1be3d60", net: 5000000, received: 5000000, sent: 0, txs: 1 },
    { wallet: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", net: 465500, received: 465500, sent: 0, txs: 3 },
    { wallet: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", net: 464226, received: 618017, sent: 153791, txs: 5 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 249270, received: 249270, sent: 0, txs: 1 },
    { wallet: "0x8cf6b31c82aa9f7c832adb397b7c84a10403b152", net: 219178, received: 219178, sent: 0, txs: 1 },
    { wallet: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", net: 157390, received: 157390, sent: 0, txs: 1 },
    { wallet: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", net: 156215, received: 156215, sent: 0, txs: 1 },
    { wallet: "0xc47df3f8335e81696abfe0d082d33bec570d4fa2", net: 120000, received: 300000, sent: 180000, txs: 8 },
    { wallet: "0x67336cec42645f55059eff241cb02ea5cc52ff86", net: 106186, received: 106186, sent: 0, txs: 2 },
    { wallet: "0x1f5e1b5999e02cbc42243272deef6cbb35ab368d", net: 85753, received: 85753, sent: 0, txs: 1 },
    { wallet: "0xb68fa1961773db566f68fbf641e2cacb4c5f151f", net: 85753, received: 85753, sent: 0, txs: 1 },
    { wallet: "0x9abe1355078b45b7e7f42e3f3e40df246139bc7d", net: 44793, received: 44793, sent: 0, txs: 1 },
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 42775, received: 42775, sent: 0, txs: 1 },
    { wallet: "0x0faeb60e1b406c2f84454f169a2512a5792e1aa8", net: 30886, received: 30886, sent: 0, txs: 1 },
    { wallet: "0x053e6294400a9268e35df445624f58087c7f388f", net: 8021, received: 8021, sent: 0, txs: 1 },
    { wallet: "0x6fd5b2ddf56553b4eb4ac860c367ac2b4a347a4f", net: 7123, received: 7123, sent: 0, txs: 2 },
    { wallet: "0x0faafa9fff76cd4d6dbf01d31d20dc7e75b6771a", net: 4932, received: 4932, sent: 0, txs: 1 },
    { wallet: "0x28ede55e0ff5e20d732b989879aecfd87b8f761b", net: 4232, received: 54232, sent: 50000, txs: 7 },
    { wallet: "0x026a34860e13909b21672c2470239b2cd65a7939", net: 3915, received: 3915, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 3543, received: 3543, sent: 0, txs: 2 },
    { wallet: "0xdaffdcbca50c6c35505460db58c0fc29ca19534f", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1834, received: 1834, sent: 0, txs: 12 },
    { wallet: "0x23b59cf3e07c9cf1b5fd9a450ced9c9d67835588", net: 1657, received: 1657, sent: 0, txs: 1 },
    { wallet: "0x1b0b1ad3e6a2fb69c48c2913fea012bc38f0a2e9", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 1370, received: 2740, sent: 1370, txs: 3 },
    { wallet: "0xfd9072f3715419414e2345da949fe5048c839877", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x4f3889331539ab2ed976dbaf67c8def36deeed15", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x7b9d43ef9d740bc6b6e593e1fc7c4b910a75fd00", net: 550, received: 550, sent: 0, txs: 1 },
    { wallet: "0x3822d8b402d6fcbe3187b08b1733ae2e2e46a2d3", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x10916b18ce6deef279f0ee66fab6b6c0e3461b78", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xf3b41e096731dffff3cb4a28ad989a825ffd9d67", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x722a6b207b2d49cc27bb2806d4de7b65d47a97b3", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 21, received: 21, sent: 0, txs: 1 },
    { wallet: "0x4ea2bbc14909742ca4d14164025599b81f625ebd", net: 3, received: 3, sent: 0, txs: 1 },
    { wallet: "0xe6b9148455dac80434b55db3b7d17843d0b8afd2", net: 3, received: 3, sent: 0, txs: 1 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 1207934, sent: 1207934, txs: 50 },
    { wallet: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", net: 0, received: 500000, sent: 500000, txs: 10 },
    { wallet: "0x20fa473270be0c37a33e6592428b428ff808f653", net: 0, received: 3562, sent: 3562, txs: 2 },
    { wallet: "0x111116053f09d34a7eae8102887004445176ca11", net: 0, received: 7101, sent: 7101, txs: 3 },
    { wallet: "0x682febbb9b646aaf240b994b07ebd00f77272a78", net: 0, received: 7123, sent: 7123, txs: 3 },
    { wallet: "0x812e5c1c9d970c28bdec73763733a15894ec8cb2", net: 0, received: 7123, sent: 7123, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 108587, sent: 108587, txs: 15 },
    { wallet: "0x4296339b4ff8e67f07de40d97a49a680f2598e0f", net: 0, received: 583668, sent: 583668, txs: 14 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 607709, sent: 607709, txs: 26 },
    { wallet: "0xfe703b84b4353529c799314a27a9e9082cb9df1b", net: 0, received: 4704, sent: 4704, txs: 2 }
];

const WHALE_LABELS = {

};
