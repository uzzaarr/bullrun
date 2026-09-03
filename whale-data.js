// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "September 3, 2026 at 10:32 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 224;
const WHALE_TOTAL_VOLUME      = 5638671;
const WHALE_BIGGEST_SINGLE    = 280559;

const WHALE_TRANSFERS = [
    { hash: "0x6aa84cfc656db40e5b5ae57004db8334afba99ad8e8aa92144f5c487e4648f58", ts: 1788429095, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25895998, type: "sell" },
    { hash: "0x65beced3b0f13ac95ec19e207aa287a81aa3bdc88c8273606b0c387c35b25369", ts: 1788419615, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", amount: 151808, block: 25895213, type: "buy" },
    { hash: "0x1bf4641c7423f74b8a99b62f6f1a5e8cddd17f0e1843b0d2a7f81ca440ee3672", ts: 1788419231, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", amount: 152457, block: 25895181, type: "buy" },
    { hash: "0xee6a747eae409a1f3831c2c97016b227e2b2f90cd294b6608c007b260c57855e", ts: 1788419231, from: "0xa462d9acaccb141ce7f17213b95198fe248c27a1", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 133121, block: 25895181, type: "sell" },
    { hash: "0xee6a747eae409a1f3831c2c97016b227e2b2f90cd294b6608c007b260c57855e", ts: 1788419231, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0xa462d9acaccb141ce7f17213b95198fe248c27a1", amount: 133121, block: 25895181, type: "buy" },
    { hash: "0x7b809e6a57d207cfe79805c92a06bea35196ccc68e40c691d78760f960ded435", ts: 1788418883, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", amount: 153111, block: 25895152, type: "buy" },
    { hash: "0xd622025bd852b44cc0eb5ccc59cfd2d0b197f6b3fc881a41ac3646b74ee27380", ts: 1788418883, from: "0xa462d9acaccb141ce7f17213b95198fe248c27a1", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 140384, block: 25895152, type: "sell" },
    { hash: "0xd622025bd852b44cc0eb5ccc59cfd2d0b197f6b3fc881a41ac3646b74ee27380", ts: 1788418883, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0xa462d9acaccb141ce7f17213b95198fe248c27a1", amount: 140384, block: 25895152, type: "buy" },
    { hash: "0xd08c9bee20b92b26b7f764ef17c077563f050bdcf73ffed2eb58df9af09c2113", ts: 1788410747, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", amount: 154413, block: 25894479, type: "buy" },
    { hash: "0xa642244521e38ab61907ca76d285fcbdfc4d266006a9604f8415df2b63cdff1d", ts: 1788410267, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25894439, type: "buy" },
    { hash: "0xd8126083dba832d077bc80bcc325da8174aff38c0735c133489e9c7fd20c64f9", ts: 1788409703, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25894392, type: "buy" },
    { hash: "0xc0d7b03eb347ffd58caa69b7b5bdf062bd5137345c800a4c096c448f65a39e3e", ts: 1788407099, from: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 154670, block: 25894175, type: "sell" },
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
    { hash: "0xc881aed0ca73f180f6996e0d222f0986d1cf12c200607926d581cdbb60e84ee7", ts: 1788351263, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", amount: 155373, block: 25889537, type: "buy" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", net: 463662, received: 463662, sent: 0, txs: 3 },
    { wallet: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", net: 307524, received: 307524, sent: 0, txs: 2 },
    { wallet: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", net: 304265, received: 304265, sent: 0, txs: 2 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 249270, received: 249270, sent: 0, txs: 1 },
    { wallet: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", net: 155288, received: 309958, sent: 154670, txs: 3 },
    { wallet: "0xc47df3f8335e81696abfe0d082d33bec570d4fa2", net: 120000, received: 240000, sent: 120000, txs: 6 },
    { wallet: "0x67336cec42645f55059eff241cb02ea5cc52ff86", net: 106186, received: 106186, sent: 0, txs: 2 },
    { wallet: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", net: 100000, received: 500000, sent: 400000, txs: 9 },
    { wallet: "0x1f5e1b5999e02cbc42243272deef6cbb35ab368d", net: 85753, received: 85753, sent: 0, txs: 1 },
    { wallet: "0x9abe1355078b45b7e7f42e3f3e40df246139bc7d", net: 44793, received: 44793, sent: 0, txs: 1 },
    { wallet: "0x0faeb60e1b406c2f84454f169a2512a5792e1aa8", net: 30886, received: 30886, sent: 0, txs: 1 },
    { wallet: "0x28ede55e0ff5e20d732b989879aecfd87b8f761b", net: 30080, received: 30080, sent: 0, txs: 1 },
    { wallet: "0x99dde06d54ca6b2cf1e064becfcdb3516e0dcad0", net: 16572, received: 16572, sent: 0, txs: 1 },
    { wallet: "0xe4bd0c8a5c5344a8015fbf77c261bd0cde8519b0", net: 12329, received: 12329, sent: 0, txs: 1 },
    { wallet: "0x82f6ac6afdc01d4556027315b7c4e4b8543b78ba", net: 11886, received: 11886, sent: 0, txs: 1 },
    { wallet: "0x053e6294400a9268e35df445624f58087c7f388f", net: 8021, received: 8021, sent: 0, txs: 1 },
    { wallet: "0xb1b99a4267a29ab0006044fe600f8ed0ac53f060", net: 5479, received: 5479, sent: 0, txs: 1 },
    { wallet: "0x0faafa9fff76cd4d6dbf01d31d20dc7e75b6771a", net: 4932, received: 4932, sent: 0, txs: 1 },
    { wallet: "0x44e61aff792aa58f33526ff23a84749a19ab0340", net: 3314, received: 3314, sent: 0, txs: 1 },
    { wallet: "0x857780896d7870eaa04b5ec90e43f9502bfe9722", net: 2877, received: 2877, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 2402, received: 3542, sent: 1140, txs: 3 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1698, received: 1698, sent: 0, txs: 12 },
    { wallet: "0x23b59cf3e07c9cf1b5fd9a450ced9c9d67835588", net: 1657, received: 1657, sent: 0, txs: 1 },
    { wallet: "0x1b0b1ad3e6a2fb69c48c2913fea012bc38f0a2e9", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xdfc90a70d89bece5ac9331fbd680e3306e9afc15", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0xfd9072f3715419414e2345da949fe5048c839877", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 959, received: 959, sent: 0, txs: 1 },
    { wallet: "0xd1966596e0d9c4033d19b5e12d1f14b183dfa2c5", net: 959, received: 959, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x4f3889331539ab2ed976dbaf67c8def36deeed15", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x4910a6e228bbbb1180e8e5657913377bb4d3daef", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x3822d8b402d6fcbe3187b08b1733ae2e2e46a2d3", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x83ce36503d668dc4efe16416b92f498d06cdc88b", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xf3b41e096731dffff3cb4a28ad989a825ffd9d67", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 21, received: 21, sent: 0, txs: 1 },
    { wallet: "0xc06ebbefd94032b85424d51906e2a335efae264b", net: 3, received: 3, sent: 0, txs: 1 },
    { wallet: "0x4ea2bbc14909742ca4d14164025599b81f625ebd", net: 3, received: 3, sent: 0, txs: 1 },
    { wallet: "0x05212522e46c3ae5ed322c18b47c3c6e6c00def1", net: 1, received: 725, sent: 724, txs: 3 },
    { wallet: "0xacb644c4d7c4b1874b145407b33b62ff3ea52546", net: 1, received: 1140, sent: 1139, txs: 2 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 1163801, sent: 1163801, txs: 46 },
    { wallet: "0x27ace13e9949900af2c5fdc1ad2aeb36b1e443a0", net: 0, received: 548, sent: 548, txs: 2 },
    { wallet: "0x04ce218ead72401702dd5f3e56cedb7d2d477777", net: 0, received: 724, sent: 724, txs: 2 },
    { wallet: "0xd085a5781c95a0753db5b2dd909291c5e4fb66cd", net: 0, received: 16572, sent: 16572, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 116095, sent: 116095, txs: 14 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 565573, sent: 565573, txs: 24 }
];

const WHALE_LABELS = {

};
