// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "August 5, 2026 at 07:21 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 562;
const WHALE_TOTAL_VOLUME      = 14709367;
const WHALE_BIGGEST_SINGLE    = 4469610;

const WHALE_TRANSFERS = [
    { hash: "0x844266053cae8d24cc4bd2b19e795c8505d61bf74c600ebc99d00778f805f0eb", ts: 1785956567, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 128806, block: 25690690, type: "transfer" },
    { hash: "0x9dacfe62dee466ad8ffc4b4e26efd495ef119d129ded2549c446d14cc792325e", ts: 1785956519, from: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 103934, block: 25690686, type: "sell" },
    { hash: "0x791bd2544e927206a050f90aaac218bd980164ccde8cc36f500b1e415c4d8439", ts: 1785956411, from: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 103813, block: 25690677, type: "sell" },
    { hash: "0x37b15e1f8625c1419b0eec8ca44b44d454709ac52b09987a40f150671c7b918e", ts: 1785956411, from: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 103813, block: 25690677, type: "sell" },
    { hash: "0x27a7ef9ca60204a61407a95eff54409ff8f3c85c1d39e3b663b25057648136b2", ts: 1785956411, from: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 103813, block: 25690677, type: "sell" },
    { hash: "0x237591fcd730e94c56efb46a9d8b07e62c046bb23ba9abd710dd36f183f98b49", ts: 1785956411, from: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 103813, block: 25690677, type: "sell" },
    { hash: "0xd41b5cab9d51dd7410177b535d65f4bcf96b27bd2f63ed49ea501a814c62ae74", ts: 1785956351, from: "0xebae2d568b9853dcecd328276241a63345b3ce7a", to: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", amount: 319438, block: 25690672, type: "transfer" },
    { hash: "0x03dd65119fa0545f4a946b087cd96fd7cdac7a9352aa0be78b8ce45957f6ca39", ts: 1785956015, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xebae2d568b9853dcecd328276241a63345b3ce7a", amount: 319438, block: 25690644, type: "transfer" },
    { hash: "0x4498c05c32b7a6dc01fabd0b7490761ff1bb50ad0beb0ac4706d127798b8392c", ts: 1785956003, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", amount: 103952, block: 25690643, type: "buy" },
    { hash: "0x63ca534c2e3d42a51255d3d5bc460ba263be93218ae29a05c6317b02a24258e8", ts: 1785956003, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", amount: 103952, block: 25690643, type: "buy" },
    { hash: "0x8888310b563718ab42da52d90cb9f5d90b7952c10d945b61a65fd8f6d5549025", ts: 1785956003, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", amount: 103944, block: 25690643, type: "buy" },
    { hash: "0xf266b61bd701e1e0f68b193a21f430d08a1af7e5bfbdd383ef2e86cd36c8f225", ts: 1785956003, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", amount: 103952, block: 25690643, type: "buy" },
    { hash: "0x9e9947504a885b027a3e7904c8d107ec4b1786f97239fe2a3e57685f1ede8055", ts: 1785955967, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", amount: 137358, block: 25690640, type: "buy" },
    { hash: "0xc1fbf24937b9a60c51657dc5c92809bd9195d17af2c2990b910477533d247e2b", ts: 1785955703, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 128806, block: 25690618, type: "transfer" },
    { hash: "0xaa3fdb58bf9ebe21c772ac59c27fc0d2746e87a74ce36b7cf239a2b494ad4f3a", ts: 1785954911, from: "0x95d5ca541f3b2816cc0efdd771450517d195c380", to: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", amount: 100000, block: 25690552, type: "transfer" },
    { hash: "0xe1656bc5b810cc9ae1a231d1fc9831eb77b947d4938a954cd940d14a2f94b342", ts: 1785951023, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x8b2559cee51642d0b19ec4cf01f400b0c973e9de", amount: 874521, block: 25690228, type: "transfer" },
    { hash: "0xcd178b117370512cf949c3e45a90e48b7d04356ef8d69fd8c3606910c8d18531", ts: 1785947051, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x9950f7eaf9f1c02e4c7c48623763016c5e452e42", amount: 100000, block: 25689900, type: "transfer" },
    { hash: "0xa7ce94d5d8cce6475ee84966eda4fc53e0925da67d4af3c31c055801cbc681cb", ts: 1785943535, from: "0xd0be1fded5d964619b92b3672c08c43305529be0", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 244896, block: 25689608, type: "transfer" },
    { hash: "0xa369a2be06ec1c874820c402f21e635d7cb2f2524810c26421a07a98b9f62f04", ts: 1785942407, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", amount: 113454, block: 25689514, type: "buy" },
    { hash: "0x8f1f2309c6ec52ba54af0116e06a2f58964c770ca8bf93682c7bc0d8a327420a", ts: 1785942359, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", amount: 119192, block: 25689510, type: "buy" },
    { hash: "0x1dc8e6ac89a636373d0842bc9f55045e25c79ba13f009ecc2988bcdddab40d0d", ts: 1785940115, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0xd0be1fded5d964619b92b3672c08c43305529be0", amount: 179810, block: 25689325, type: "buy" },
    { hash: "0x233f99360d08de6c59f6fab2d31956f829f4a5f1adc81f4467d73f0ff8bf48be", ts: 1785940091, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", amount: 126957, block: 25689323, type: "buy" },
    { hash: "0xe902cf27aa2c8b6d5f4e3121c311a63c5fa476f71931335c24e4bc4c0bca5549", ts: 1785938759, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x25dafdaa03a8b671909a79436718bc5c4a31dbf3", amount: 197260, block: 25689212, type: "transfer" },
    { hash: "0xd0e51264d2551aa2aef4232a08ee64f360184885dfe466693408a55419cc7d61", ts: 1785932795, from: "0x039ac6fbcebf02b54259bc690e13540693d9eb8d", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 166230, block: 25688717, type: "transfer" },
    { hash: "0xb3b0ab09f54485039b9c48924a343d6497d726fec9bb7ab1b77a875c66b2f45f", ts: 1785932795, from: "0xbbf7e985e1e0ca6f854cecb5096274e8e797e8b4", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 242455, block: 25688717, type: "transfer" },
    { hash: "0xe72a8fab45b43988ed26897fc9204a03cedb92a3a32e633b6aa6c2adb13f9727", ts: 1785930971, from: "0x9642b23ed1e01df1092b92641051881a322f5d4e", to: "0x34a91c04decde6660fa73c8b8edff6ecd390f343", amount: 100001, block: 25688565, type: "transfer" },
    { hash: "0x18922c1313e8d90bc00d038e45b0fec50b057d09257aa6bde914c43f724df752", ts: 1785930227, from: "0x04c7b4e2db71b2abffe4f2131cf2754533cf32da", to: "0xbbf7e985e1e0ca6f854cecb5096274e8e797e8b4", amount: 150865, block: 25688504, type: "transfer" },
    { hash: "0x4ae016889e2c38645ed7ee11bbb860f44b14f84ef52b4410a018e281ba620227", ts: 1785929591, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x9abe1355078b45b7e7f42e3f3e40df246139bc7d", amount: 241955, block: 25688451, type: "transfer" },
    { hash: "0xdf3006a029dbdd765c702a80bd7037e9544d8a205e5afc27d740f42fcee27dbc", ts: 1785929555, from: "0x8f10b468b06c6fd214b65f87778827f7d113f996", to: "0x04c7b4e2db71b2abffe4f2131cf2754533cf32da", amount: 150865, block: 25688448, type: "transfer" },
    { hash: "0xdf3006a029dbdd765c702a80bd7037e9544d8a205e5afc27d740f42fcee27dbc", ts: 1785929555, from: "0x9abe1355078b45b7e7f42e3f3e40df246139bc7d", to: "0x8f10b468b06c6fd214b65f87778827f7d113f996", amount: 150865, block: 25688448, type: "transfer" },
    { hash: "0x57b100a05913fdd5309f6a5c0a92f13f24d6bac42dce5e42c4e6baad7b7831d8", ts: 1785929543, from: "0xb1b2d032aa2f52347fbcfd08e5c3cc55216e8404", to: "0x039ac6fbcebf02b54259bc690e13540693d9eb8d", amount: 134815, block: 25688447, type: "transfer" },
    { hash: "0x5cc87faf1a050a9ee3e543849da265d80c8b083e4d4189e780a5e2fb6efa0d2f", ts: 1785929483, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 203587, block: 25688442, type: "sell" },
    { hash: "0x5cc87faf1a050a9ee3e543849da265d80c8b083e4d4189e780a5e2fb6efa0d2f", ts: 1785929483, from: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 203587, block: 25688442, type: "transfer" },
    { hash: "0x759ebe01b1b9dbca9f90b788b30a9f668e34b6503b218a5e679e718db757bd5b", ts: 1785882335, from: "0x6455327f820edd69c4cd665b995e0fec679d7f9e", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 4469610, block: 25684529, type: "transfer" },
    { hash: "0x073b5816222cdeda488ca06b6f0e0877d5b28f62aac38c4d5baebe5fcd698b74", ts: 1785879059, from: "0x58edf78281334335effa23101bbe3371b6a36a51", to: "0x6455327f820edd69c4cd665b995e0fec679d7f9e", amount: 4469610, block: 25684259, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 4890711, received: 5505821, sent: 615109, txs: 24 },
    { wallet: "0x8b2559cee51642d0b19ec4cf01f400b0c973e9de", net: 874521, received: 874521, sent: 0, txs: 1 },
    { wallet: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", net: 419438, received: 419438, sent: 0, txs: 2 },
    { wallet: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", net: 255808, received: 463555, sent: 207747, txs: 6 },
    { wallet: "0x67336cec42645f55059eff241cb02ea5cc52ff86", net: 189290, received: 189290, sent: 0, txs: 8 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 188607, received: 1364909, sent: 1176302, txs: 109 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 137358, received: 219029, sent: 81671, txs: 5 },
    { wallet: "0x716e3fad60bc867449795cd624da34aab3dc381f", net: 111147, received: 303010, sent: 191864, txs: 15 },
    { wallet: "0x34a91c04decde6660fa73c8b8edff6ecd390f343", net: 100001, received: 100001, sent: 0, txs: 1 },
    { wallet: "0x9950f7eaf9f1c02e4c7c48623763016c5e452e42", net: 100000, received: 100000, sent: 0, txs: 1 },
    { wallet: "0x9abe1355078b45b7e7f42e3f3e40df246139bc7d", net: 91090, received: 241955, sent: 150865, txs: 2 },
    { wallet: "0x5e554e3639065beea9507be2620acc006b1c1753", net: 64932, received: 64932, sent: 0, txs: 1 },
    { wallet: "0xd3bc5acd80a1c9a201d7345d0677cc9899ef8079", net: 34247, received: 34247, sent: 0, txs: 1 },
    { wallet: "0xb1b2d032aa2f52347fbcfd08e5c3cc55216e8404", net: 30225, received: 252289, sent: 222065, txs: 12 },
    { wallet: "0xead224e9ac09ac94a3d4c0ab1f16bc4e7cb4574c", net: 29300, received: 29300, sent: 0, txs: 1 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 19955, received: 39955, sent: 20000, txs: 5 },
    { wallet: "0xfd9072f3715419414e2345da949fe5048c839877", net: 13699, received: 13699, sent: 0, txs: 1 },
    { wallet: "0x79266c740fb0d72539f0758d3a25681d3649a0ba", net: 12055, received: 12055, sent: 0, txs: 1 },
    { wallet: "0xdeedd94590291d7b2640cea472ed2288e7812b05", net: 11372, received: 11372, sent: 0, txs: 1 },
    { wallet: "0xa40ba1d41c1be423c9d7f3173b8c76175bcc1c99", net: 7671, received: 7671, sent: 0, txs: 1 },
    { wallet: "0x4d39df30749918d5048bbe1c10f110ce0ab2c21e", net: 7123, received: 7123, sent: 0, txs: 1 },
    { wallet: "0x4f3889331539ab2ed976dbaf67c8def36deeed15", net: 6164, received: 6164, sent: 0, txs: 1 },
    { wallet: "0xb6d4fb85c951d5948137a9f9dce9b7b4363a6799", net: 5479, received: 5479, sent: 0, txs: 1 },
    { wallet: "0xe641dca2e131fa8bfe1d7931b9b040e3fe0c5bdc", net: 5389, received: 11310, sent: 5922, txs: 2 },
    { wallet: "0x0a78bf955b7b6bb043117e6a2a4dd16fcf4f72bc", net: 4822, received: 4822, sent: 0, txs: 2 },
    { wallet: "0xee24dffca375eaa986e0159cbec5994f759c03ce", net: 3014, received: 3014, sent: 0, txs: 1 },
    { wallet: "0x7c01c6f4babf102f2bbe852bd3e571c53e390913", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1416, received: 1452, sent: 36, txs: 25 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 761, received: 761, sent: 0, txs: 4 },
    { wallet: "0x20694bb5c906ee71e696587be233284f995564b7", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", net: 139, received: 103952, sent: 103813, txs: 2 },
    { wallet: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", net: 139, received: 103952, sent: 103813, txs: 2 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", net: 131, received: 103944, sent: 103813, txs: 2 },
    { wallet: "0x54914a963c4197172130c26d496a367bd6609d88", net: 49, received: 49, sent: 0, txs: 2 },
    { wallet: "0xd493066498ace409059fda4c1bcd2e73d8cffe01", net: 4, received: 4, sent: 0, txs: 1 },
    { wallet: "0x6a2a7099ba60b0ee5d440993948e6588b8fe5caf", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0xb1f8db9d1b0b6698aca9d7ba189d60a30139dd94", net: 0, received: 2192, sent: 2192, txs: 2 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 63547, sent: 63547, txs: 14 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 2541211, sent: 2541211, txs: 218 },
    { wallet: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", net: 0, received: 128806, sent: 128806, txs: 2 },
    { wallet: "0xa0206aa3938f7892d01832150cd13e19c0b130d1", net: 0, received: 34247, sent: 34247, txs: 2 },
    { wallet: "0x163f3103de041d25464e2c8a4f8f3187ec1856e0", net: 0, received: 22062, sent: 22062, txs: 4 },
    { wallet: "0xebae2d568b9853dcecd328276241a63345b3ce7a", net: 0, received: 319438, sent: 319438, txs: 2 },
    { wallet: "0x8a44fb98a2ad415809e6f8f57e5ca8fa2747ff3e", net: 0, received: 4871, sent: 4871, txs: 6 }
];

const WHALE_LABELS = {

};
