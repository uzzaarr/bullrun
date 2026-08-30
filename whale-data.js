// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "August 30, 2026 at 11:02 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 305;
const WHALE_TOTAL_VOLUME      = 8938537;
const WHALE_BIGGEST_SINGLE    = 599901;

const WHALE_TRANSFERS = [
    { hash: "0x377e1bdfc3d4283910c1ac09545320b4877fd3623e20b17502f76e633c35e39f", ts: 1788083951, from: "0x66a9893cc07d91d95644aedd05d03f95e1dba8af", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 203242, block: 25867343, type: "sell" },
    { hash: "0x377e1bdfc3d4283910c1ac09545320b4877fd3623e20b17502f76e633c35e39f", ts: 1788083951, from: "0x1d1735bcf925d10b600279ce720da2673c2274c5", to: "0x66a9893cc07d91d95644aedd05d03f95e1dba8af", amount: 203242, block: 25867343, type: "transfer" },
    { hash: "0x377e1bdfc3d4283910c1ac09545320b4877fd3623e20b17502f76e633c35e39f", ts: 1788083951, from: "0x97ccdbea4632140639ad5ea9b944aa034eb15fd4", to: "0x1d1735bcf925d10b600279ce720da2673c2274c5", amount: 203242, block: 25867343, type: "transfer" },
    { hash: "0x377e1bdfc3d4283910c1ac09545320b4877fd3623e20b17502f76e633c35e39f", ts: 1788083951, from: "0xd83bbad310f696dd59464483d28bad209b76d1fb", to: "0x97ccdbea4632140639ad5ea9b944aa034eb15fd4", amount: 203242, block: 25867343, type: "transfer" },
    { hash: "0xf457044db727edbfdf26a8fd8ba930913aae86ee9f020a2ba9cb382c57797a76", ts: 1788079595, from: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 135403, block: 25866982, type: "sell" },
    { hash: "0xd928895760182d8cf359462dc6db591c052a81c58f1001c2d67ecbb1b3fd6026", ts: 1788076691, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xd862cdcfeb856c32b3c4f7563f4811d8ddfd42e2", amount: 157280, block: 25866741, type: "transfer" },
    { hash: "0xe3f483e8a647d27a11292763a4782fb9eeff220247c88538b865d0a78f0e51b6", ts: 1788076667, from: "0xd862cdcfeb856c32b3c4f7563f4811d8ddfd42e2", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 157280, block: 25866739, type: "sell" },
    { hash: "0x71c1024adb5fdbcaf6cc0486c53dfa2224ca24927d7ee88c187c059d715fd093", ts: 1788065783, from: "0x2c0552e5dcb79b064fd23e358a86810bc5994244", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 221527, block: 25865835, type: "sell" },
    { hash: "0x71c1024adb5fdbcaf6cc0486c53dfa2224ca24927d7ee88c187c059d715fd093", ts: 1788065783, from: "0x9008d19f58aabd9ed0d60971565aa8510560ab41", to: "0x2c0552e5dcb79b064fd23e358a86810bc5994244", amount: 221527, block: 25865835, type: "transfer" },
    { hash: "0x71c1024adb5fdbcaf6cc0486c53dfa2224ca24927d7ee88c187c059d715fd093", ts: 1788065783, from: "0x140a7d1824a16372913fa572c79c10ff77388f7e", to: "0x9008d19f58aabd9ed0d60971565aa8510560ab41", amount: 221555, block: 25865835, type: "transfer" },
    { hash: "0x23281c40bcfe0dc25b4cc0e0320bd4de0274d742135460181d280e5ebb1ddce3", ts: 1788063011, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0xd83bbad310f696dd59464483d28bad209b76d1fb", amount: 203862, block: 25865605, type: "buy" },
    { hash: "0xc830e04608b36e35dd9096546ca13cb74c9294b9c805f6b136ae072ebbcd0bd2", ts: 1788052559, from: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 137728, block: 25864735, type: "sell" },
    { hash: "0x11b6fe3e0ebc327814d823c25dc4fff58434b4db9530232f333c289e5b270797", ts: 1788048107, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25864367, type: "sell" },
    { hash: "0xb9087b8104dcb6f05c853a55b6a746e9f631213c81055262a85dcf1d45bd1be8", ts: 1788045935, from: "0x756f62303d0bfade926b06104f17b2009f667e56", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 599901, block: 25864186, type: "transfer" },
    { hash: "0xeeaab9b944befb61f040b309989fd629b6e35964485ac5d605aa83beb19d2355", ts: 1788040007, from: "0xb8001c3ec9aa1985f6c747e25c28324e4a361ec1", to: "0x756f62303d0bfade926b06104f17b2009f667e56", amount: 599901, block: 25863693, type: "transfer" },
    { hash: "0xd4221b5e649f6ea436d724b261042f31cc2aa21625a803c97f8f7b87c884679f", ts: 1788039863, from: "0x2c0552e5dcb79b064fd23e358a86810bc5994244", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 221528, block: 25863681, type: "sell" },
    { hash: "0xd4221b5e649f6ea436d724b261042f31cc2aa21625a803c97f8f7b87c884679f", ts: 1788039863, from: "0x9008d19f58aabd9ed0d60971565aa8510560ab41", to: "0x2c0552e5dcb79b064fd23e358a86810bc5994244", amount: 221528, block: 25863681, type: "transfer" },
    { hash: "0xd4221b5e649f6ea436d724b261042f31cc2aa21625a803c97f8f7b87c884679f", ts: 1788039863, from: "0x140a7d1824a16372913fa572c79c10ff77388f7e", to: "0x9008d19f58aabd9ed0d60971565aa8510560ab41", amount: 221555, block: 25863681, type: "transfer" },
    { hash: "0x322ba2d7d43512f9786b0e96707b60ecbf0136572a628a3eb65bebd788edea69", ts: 1788039035, from: "0x4d8d906c17c06344ee73c3185bad269e55869c95", to: "0xb8001c3ec9aa1985f6c747e25c28324e4a361ec1", amount: 595225, block: 25863612, type: "transfer" },
    { hash: "0xcebfcf55022ca3310dce4fbec7e029669fbf1d03e9490d311320c22f7fa0e766", ts: 1788038603, from: "0xfa9eafa915f9faba41034862050a0411e2d4325f", to: "0x4d8d906c17c06344ee73c3185bad269e55869c95", amount: 298000, block: 25863576, type: "transfer" },
    { hash: "0x0802af0894facc18c9897f9feb6453a2179eddbce7555c9c7315dc0cfb29e1eb", ts: 1788038039, from: "0x4f5d3e4659bc564f411d91a85759662a4ec5a7af", to: "0x4d8d906c17c06344ee73c3185bad269e55869c95", amount: 297225, block: 25863529, type: "transfer" },
    { hash: "0xffa9b2187e2625c921d0ca5001ae93acac189eec05749166e7c7b88779d56e44", ts: 1788036299, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25863384, type: "sell" },
    { hash: "0x3c63bac8516c7d1e7c1967d400f98c412b7acc5585590f463478585ab87debf5", ts: 1788033047, from: "0xa7f16ebaa8aa66b70d9a27aec7e499a9ca5d33dd", to: "0xc0157506932eeccd4bacdc32001d2f8aab75872f", amount: 195000, block: 25863113, type: "transfer" },
    { hash: "0x86c337ce17fdb2bedca2af6f5fe0eadfc74016a47a5cdd88f0276e019648284f", ts: 1788032651, from: "0xd197fb641b691f253cb4581ecda76486e713ba84", to: "0xa7f16ebaa8aa66b70d9a27aec7e499a9ca5d33dd", amount: 226986, block: 25863081, type: "transfer" },
    { hash: "0xdea5d044513c21fe614b6bd9e8f21f281af8779fef529307cd1c1a1c2816c46c", ts: 1788032507, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", amount: 136346, block: 25863069, type: "buy" },
    { hash: "0x478440e7b37403cff00fbc66db4be157c2b6687f529e24e4fd623753a5b694ed", ts: 1788021839, from: "0x5bfdb327168803a1b33c6062ef28ac0e3fe88e31", to: "0x89f4a530ed80f2ec836ec89460c5f244db6d2552", amount: 184081, block: 25862182, type: "transfer" },
    { hash: "0x2e1206bdcd45eef932bbd35315b840b9d28f72a7093ae05fb0cebaff53eaafff", ts: 1788016787, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", amount: 136694, block: 25861761, type: "buy" },
    { hash: "0xcd7e6a51eb9172082b7bcf70d5c9913795f8f21cc13ac76ed0610fac1b07f2a1", ts: 1788016763, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", amount: 137248, block: 25861759, type: "buy" },
    { hash: "0x089abc1e7017cb5b201eeed757da64b575c4c7dce636f10e24ae33830804d6c8", ts: 1788014723, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25861589, type: "buy" },
    { hash: "0xf13e36f93f0c436e22dd7bdb9a4205b6795a22c21b4c5c6abd8c61b0799396d0", ts: 1788014711, from: "0x6b6be75e64eb9ab9bb8f9c73479178ca9b0bf020", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 419733, block: 25861588, type: "sell" },
    { hash: "0x57206e37676c6c15e573aa92b34aeb58623fa3962c0d38b4dd8b0084fd220505", ts: 1788013967, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25861526, type: "buy" },
    { hash: "0x1c653d894f55e9d34c23456ddfe7257d05518b9fee4f111dc40dbcb24869b943", ts: 1788013955, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", amount: 159855, block: 25861525, type: "transfer" },
    { hash: "0x1c653d894f55e9d34c23456ddfe7257d05518b9fee4f111dc40dbcb24869b943", ts: 1788013955, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 159855, block: 25861525, type: "buy" },
    { hash: "0xcf04ee76e1572f44c9ec9e1f43b0641fab0194957111a0dcfa92fd4ee014888d", ts: 1788013943, from: "0x2c0552e5dcb79b064fd23e358a86810bc5994244", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 221528, block: 25861524, type: "sell" },
    { hash: "0xcf04ee76e1572f44c9ec9e1f43b0641fab0194957111a0dcfa92fd4ee014888d", ts: 1788013943, from: "0x9008d19f58aabd9ed0d60971565aa8510560ab41", to: "0x2c0552e5dcb79b064fd23e358a86810bc5994244", amount: 221528, block: 25861524, type: "transfer" },
    { hash: "0xcf04ee76e1572f44c9ec9e1f43b0641fab0194957111a0dcfa92fd4ee014888d", ts: 1788013943, from: "0x140a7d1824a16372913fa572c79c10ff77388f7e", to: "0x9008d19f58aabd9ed0d60971565aa8510560ab41", amount: 221555, block: 25861524, type: "transfer" },
    { hash: "0xd37b57c4ba4376197b73a25110e0f365c5398f74e6289eabbcc4956119cb5049", ts: 1788006299, from: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 135691, block: 25860894, type: "sell" },
    { hash: "0xbc52b16ea2e281a69077db060aeee8f00f4866d98fe4cf1dcbbac530f7849d1f", ts: 1788004031, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", amount: 136378, block: 25860705, type: "buy" },
    { hash: "0xc2b396acf22d37816f942cde2e0a112b05ba8512361bdf39a2366989e6a8dc61", ts: 1788003383, from: "0x8feab81d36e7576107d5de0758c1b839be31b4f6", to: "0x6b6be75e64eb9ab9bb8f9c73479178ca9b0bf020", amount: 259919, block: 25860652, type: "transfer" },
    { hash: "0xc2b396acf22d37816f942cde2e0a112b05ba8512361bdf39a2366989e6a8dc61", ts: 1788003383, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8feab81d36e7576107d5de0758c1b839be31b4f6", amount: 262147, block: 25860652, type: "buy" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x09fc9b7545020f6a51d113e495e0a451597969d3", net: 583208, received: 828360, sent: 245152, txs: 41 },
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 462341, received: 700225, sent: 237884, txs: 5 },
    { wallet: "0x89f4a530ed80f2ec836ec89460c5f244db6d2552", net: 184081, received: 184081, sent: 0, txs: 1 },
    { wallet: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", net: 137935, received: 273626, sent: 135691, txs: 3 },
    { wallet: "0xc0157506932eeccd4bacdc32001d2f8aab75872f", net: 100000, received: 195000, sent: 95000, txs: 2 },
    { wallet: "0x6e23764919be8395d2d5899bc9070b26893cdd27", net: 63288, received: 63288, sent: 0, txs: 1 },
    { wallet: "0x78aa406e413216d0b26f660faea1f01510dad0f4", net: 24626, received: 24626, sent: 0, txs: 5 },
    { wallet: "0xfba8cdd846b80fabcac617df0f4794b3df73e700", net: 21370, received: 21370, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 15348, received: 16163, sent: 815, txs: 7 },
    { wallet: "0xeba60de37e3633386ab8e303c149b4b157797486", net: 14932, received: 14932, sent: 0, txs: 1 },
    { wallet: "0x0cb2f3930a04f6c22c5e9f6bbdf838247ad1bc6f", net: 10844, received: 10844, sent: 0, txs: 1 },
    { wallet: "0xf89e4d2ae8ff6c1b30e9f9f5f3f60b385a099124", net: 10685, received: 10685, sent: 0, txs: 1 },
    { wallet: "0xc07f8b8d4b5a5c7cc420267c3f50eb0c9e72f306", net: 9589, received: 9589, sent: 0, txs: 2 },
    { wallet: "0xa7f16ebaa8aa66b70d9a27aec7e499a9ca5d33dd", net: 4966, received: 226986, sent: 222020, txs: 5 },
    { wallet: "0x5532d65385e664eef604976354608a9dc4d9ae7c", net: 4932, received: 4932, sent: 0, txs: 1 },
    { wallet: "0xbf788945bff795f110e3beed15414f8cc289bc71", net: 3454, received: 3454, sent: 0, txs: 1 },
    { wallet: "0x139724a176a50f5089f4ed5bc653124e9d2c97f3", net: 2740, received: 2740, sent: 0, txs: 1 },
    { wallet: "0x2cffed5d56eb6a17662756ca0fdf350e732c9818", net: 2228, received: 2228, sent: 0, txs: 1 },
    { wallet: "0x50e8e34147929096ab69b3316ac0f1adf8b684c1", net: 2055, received: 2055, sent: 0, txs: 1 },
    { wallet: "0x047f273577c00fdc1f8dc66d922e9d15052afa4c", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", net: 1291, received: 136694, sent: 135403, txs: 2 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1150, received: 1153, sent: 3, txs: 18 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x950618712a5cd5a221c8a95930947cb76576eb76", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0xd9f04ab1db28774e1c0fe8ab6e764f25dc02161c", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xdfc90a70d89bece5ac9331fbd680e3306e9afc15", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xb8294f8f8f6619a299688f1ca12cb967fc9a6176", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x39faf1de461849163e390d0a57d1eaa632064a49", net: 168, received: 168, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x9008d19f58aabd9ed0d60971565aa8510560ab41", net: 82, received: 664664, sent: 664582, txs: 6 },
    { wallet: "0x50705b5ee9a18c38a17d5f29a422ab0549d5583c", net: 70, received: 70, sent: 0, txs: 1 },
    { wallet: "0x5aafc1f252d544f744d17a4e734afd6efc47ede4", net: 70, received: 70, sent: 0, txs: 2 },
    { wallet: "0xad01c20d5886137e056775af56915de824c8fce5", net: 7, received: 7, sent: 0, txs: 2 },
    { wallet: "0x2882d5a643c9d5338de98e5ef27d5681a41d26aa", net: 0, received: 15867, sent: 15867, txs: 2 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 532081, sent: 532081, txs: 32 },
    { wallet: "0x66a9893cc07d91d95644aedd05d03f95e1dba8af", net: 0, received: 203242, sent: 203242, txs: 2 },
    { wallet: "0x1d1735bcf925d10b600279ce720da2673c2274c5", net: 0, received: 203242, sent: 203242, txs: 2 },
    { wallet: "0x97ccdbea4632140639ad5ea9b944aa034eb15fd4", net: 0, received: 203242, sent: 203242, txs: 2 },
    { wallet: "0xd83bbad310f696dd59464483d28bad209b76d1fb", net: 0, received: 203862, sent: 203862, txs: 3 },
    { wallet: "0x4296339b4ff8e67f07de40d97a49a680f2598e0f", net: 0, received: 111634, sent: 111634, txs: 17 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 163533, sent: 163533, txs: 26 },
    { wallet: "0xb5b70055bf151c228b260ec18ea7efdc79297b97", net: 0, received: 1781, sent: 1781, txs: 3 },
    { wallet: "0xece0ba1a87885c04650ccd790fa8a09b3cb35552", net: 0, received: 1781, sent: 1781, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 137151, sent: 137151, txs: 12 },
    { wallet: "0x46fe8d172054b95d83a403680286f85e481f4354", net: 0, received: 4939, sent: 4939, txs: 2 }
];

const WHALE_LABELS = {

};
