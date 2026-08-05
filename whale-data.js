// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "August 5, 2026 at 01:52 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 317;
const WHALE_TOTAL_VOLUME      = 10684445;
const WHALE_BIGGEST_SINGLE    = 4469610;

const WHALE_TRANSFERS = [
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
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 4361480, received: 4946365, sent: 584885, txs: 16 },
    { wallet: "0x67336cec42645f55059eff241cb02ea5cc52ff86", net: 189290, received: 189290, sent: 0, txs: 8 },
    { wallet: "0x34a91c04decde6660fa73c8b8edff6ecd390f343", net: 100001, received: 100001, sent: 0, txs: 1 },
    { wallet: "0x9abe1355078b45b7e7f42e3f3e40df246139bc7d", net: 91090, received: 241955, sent: 150865, txs: 2 },
    { wallet: "0x2970e620ff7cb1fc2d26ea6672df1378e866fe5b", net: 81918, received: 81918, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 80387, received: 80387, sent: 0, txs: 2 },
    { wallet: "0x5e554e3639065beea9507be2620acc006b1c1753", net: 64932, received: 64932, sent: 0, txs: 1 },
    { wallet: "0x79266c740fb0d72539f0758d3a25681d3649a0ba", net: 12055, received: 12055, sent: 0, txs: 1 },
    { wallet: "0xa40ba1d41c1be423c9d7f3173b8c76175bcc1c99", net: 7671, received: 7671, sent: 0, txs: 1 },
    { wallet: "0xb6d4fb85c951d5948137a9f9dce9b7b4363a6799", net: 5479, received: 5479, sent: 0, txs: 1 },
    { wallet: "0xee24dffca375eaa986e0159cbec5994f759c03ce", net: 3014, received: 3014, sent: 0, txs: 1 },
    { wallet: "0x20694bb5c906ee71e696587be233284f995564b7", net: 2740, received: 2740, sent: 0, txs: 2 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x793a9558a0ca9de122cbffa8a8b5542213672a19", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 547, received: 547, sent: 0, txs: 12 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 170, received: 170, sent: 0, txs: 2 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x40a88150427465cca3911358edc96cf16f06e431", net: 9, received: 9, sent: 0, txs: 1 },
    { wallet: "0xd493066498ace409059fda4c1bcd2e73d8cffe01", net: 4, received: 4, sent: 0, txs: 1 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 1537985, sent: 1537985, txs: 144 },
    { wallet: "0x0889e9327b98d7d1be3c301a4585ff3330502c9a", net: 0, received: 81207, sent: 81207, txs: 9 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 154170, sent: 154170, txs: 24 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 228268, sent: 228268, txs: 22 },
    { wallet: "0x10916b18ce6deef279f0ee66fab6b6c0e3461b78", net: 0, received: 685, sent: 685, txs: 3 },
    { wallet: "0x039ac6fbcebf02b54259bc690e13540693d9eb8d", net: 0, received: 166230, sent: 166230, txs: 3 },
    { wallet: "0xbbf7e985e1e0ca6f854cecb5096274e8e797e8b4", net: 0, received: 242455, sent: 242455, txs: 4 },
    { wallet: "0x04c7b4e2db71b2abffe4f2131cf2754533cf32da", net: 0, received: 242455, sent: 242455, txs: 6 },
    { wallet: "0xb1b2d032aa2f52347fbcfd08e5c3cc55216e8404", net: 0, received: 222065, sent: 222065, txs: 11 },
    { wallet: "0x1f2f10d1c40777ae1da742455c65828ff36df387", net: 0, received: 10404, sent: 10404, txs: 3 },
    { wallet: "0x925b332d6c56558fa207881c44ca613857534b04", net: 0, received: 28270, sent: 28270, txs: 2 },
    { wallet: "0x27ad186bb115a2b41fb64553efd4ba5a74b83b08", net: 0, received: 238452, sent: 238452, txs: 8 },
    { wallet: "0x1e5d00ac5c003aaf27281b305e87e4cec20dc058", net: 0, received: 34267, sent: 34267, txs: 2 },
    { wallet: "0xada3344693f368cd0ebf510f26617ad4213bf5b3", net: 0, received: 27565, sent: 27565, txs: 4 },
    { wallet: "0xb44446b0c8e56988c34f7ff73ae904982b5fdda5", net: 0, received: 27565, sent: 27565, txs: 3 },
    { wallet: "0x73851bf6c6e49cc44a1680451a127795c951c3e5", net: 0, received: 45818, sent: 45818, txs: 2 },
    { wallet: "0xa0f1c3ad83e07d97b5e7030e177718be175275ea", net: 0, received: 45773, sent: 45773, txs: 2 },
    { wallet: "0x1103fc560de8b710983e7f3ec09d587f3f848566", net: 0, received: 10447, sent: 10447, txs: 2 },
    { wallet: "0x950fd558f47e234a2fde23b7d61f7ccdbcb4a86f", net: 0, received: 13039, sent: 13039, txs: 2 },
    { wallet: "0xcbc35d5c850a94bf4866b768a72fa688db07dde6", net: 0, received: 7490, sent: 7490, txs: 2 },
    { wallet: "0x163f3103de041d25464e2c8a4f8f3187ec1856e0", net: 0, received: 2062, sent: 2062, txs: 2 },
    { wallet: "0x75851a375d1cc7bfd34058c0905437d996ec1a57", net: 0, received: 2062, sent: 2062, txs: 3 },
    { wallet: "0x3c9108700724d9d96cff2ac8979d6ad2a8d469ae", net: 0, received: 685, sent: 685, txs: 2 },
    { wallet: "0x716e3fad60bc867449795cd624da34aab3dc381f", net: 0, received: 26523, sent: 26523, txs: 2 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 0, received: 41546, sent: 41546, txs: 2 },
    { wallet: "0xb1b99a4267a29ab0006044fe600f8ed0ac53f060", net: 0, received: 13699, sent: 13699, txs: 2 },
    { wallet: "0xbaa8254ae8b9769ae9053d9f25cca5f90f07427e", net: 0, received: 5753, sent: 5753, txs: 3 },
    { wallet: "0x21dce84e1c9ea03025ddaefd186d6119ccb1e819", net: 0, received: 5753, sent: 5753, txs: 2 },
    { wallet: "0x111116053f09d34a7eae8102887004445176ca11", net: 0, received: 38618, sent: 38618, txs: 6 }
];

const WHALE_LABELS = {

};
