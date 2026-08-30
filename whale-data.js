// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "August 30, 2026 at 03:52 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 293;
const WHALE_TOTAL_VOLUME      = 10184820;
const WHALE_BIGGEST_SINGLE    = 819792;

const WHALE_TRANSFERS = [
    { hash: "0x36c3bb8b24259a5284480d1c2971addf130fcbb0062e8adc7acf4a0e9fcedb51", ts: 1788103607, from: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 819792, block: 25868975, type: "transfer" },
    { hash: "0x311d1b8527d4e30d0cf71e0e8df62ef2257dfb17f3c6f31ebb90a808558d05ed", ts: 1788098027, from: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", to: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", amount: 819792, block: 25868513, type: "transfer" },
    { hash: "0x8ed665b723568b4335a4262c7422734a98f53cca1b76572db777588231bd909c", ts: 1788097859, from: "0x09fc9b7545020f6a51d113e495e0a451597969d3", to: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", amount: 819791, block: 25868499, type: "transfer" },
    { hash: "0x6aea82542c23ad37830bfad4e9c5a1f33435645c630674e65a9cd77cce2e610c", ts: 1788097091, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x952189f2a431efb4ac0ae65be9940800acb19ece", amount: 187945, block: 25868435, type: "transfer" },
    { hash: "0x0ac0d26ab20618b40bedbc7624a6949133046b73f6595f1fc00b4fe92499f454", ts: 1788096551, from: "0xd83bbad310f696dd59464483d28bad209b76d1fb", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 203058, block: 25868390, type: "sell" },
    { hash: "0x9d6878741c12d9f0cf8bff7f4a2193c474e11ca55ab61c98d9dc0d8a0c2e32a1", ts: 1788096095, from: "0x74de5d4fcbf63e00296fd95d33236b9794016631", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25868352, type: "sell" },
    { hash: "0x9d6878741c12d9f0cf8bff7f4a2193c474e11ca55ab61c98d9dc0d8a0c2e32a1", ts: 1788096095, from: "0xc0157506932eeccd4bacdc32001d2f8aab75872f", to: "0x74de5d4fcbf63e00296fd95d33236b9794016631", amount: 100000, block: 25868352, type: "transfer" },
    { hash: "0x5b8b5646dc847b766fbf658fcb11a79f1b6597795b2afebdd3ef44177995e18f", ts: 1788092267, from: "0x4d4e14fbdf6bb02b6e036f86f120f00abe41c791", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 221555, block: 25868034, type: "sell" },
    { hash: "0x5b8b5646dc847b766fbf658fcb11a79f1b6597795b2afebdd3ef44177995e18f", ts: 1788092267, from: "0x9008d19f58aabd9ed0d60971565aa8510560ab41", to: "0x4d4e14fbdf6bb02b6e036f86f120f00abe41c791", amount: 221555, block: 25868034, type: "transfer" },
    { hash: "0x5b8b5646dc847b766fbf658fcb11a79f1b6597795b2afebdd3ef44177995e18f", ts: 1788092267, from: "0x140a7d1824a16372913fa572c79c10ff77388f7e", to: "0x9008d19f58aabd9ed0d60971565aa8510560ab41", amount: 221555, block: 25868034, type: "transfer" },
    { hash: "0xd5d9939c8c0c7cf1f2241c453948d9e1e821f2ba21997ea452566beb29f70e12", ts: 1788092255, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0xd83bbad310f696dd59464483d28bad209b76d1fb", amount: 203371, block: 25868033, type: "buy" },
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
    { hash: "0x478440e7b37403cff00fbc66db4be157c2b6687f529e24e4fd623753a5b694ed", ts: 1788021839, from: "0x5bfdb327168803a1b33c6062ef28ac0e3fe88e31", to: "0x89f4a530ed80f2ec836ec89460c5f244db6d2552", amount: 184081, block: 25862182, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 1282133, received: 1520017, sent: 237884, txs: 6 },
    { wallet: "0x952189f2a431efb4ac0ae65be9940800acb19ece", net: 187945, received: 187945, sent: 0, txs: 1 },
    { wallet: "0x89f4a530ed80f2ec836ec89460c5f244db6d2552", net: 184081, received: 184081, sent: 0, txs: 1 },
    { wallet: "0x6e23764919be8395d2d5899bc9070b26893cdd27", net: 63288, received: 63288, sent: 0, txs: 1 },
    { wallet: "0x78aa406e413216d0b26f660faea1f01510dad0f4", net: 24626, received: 24626, sent: 0, txs: 5 },
    { wallet: "0xfba8cdd846b80fabcac617df0f4794b3df73e700", net: 21370, received: 21370, sent: 0, txs: 1 },
    { wallet: "0xab8392879b6c49a9c290dfaf24c6d6520d9179ac", net: 17154, received: 17154, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 15348, received: 16163, sent: 815, txs: 7 },
    { wallet: "0xeba60de37e3633386ab8e303c149b4b157797486", net: 14932, received: 14932, sent: 0, txs: 1 },
    { wallet: "0xb39eff872639e3fbb7f8e4bc6e0139633318aaa5", net: 14452, received: 14452, sent: 0, txs: 1 },
    { wallet: "0x1a996eb2a69423926d60973fc3d73cf1fa847a2f", net: 10959, received: 10959, sent: 0, txs: 1 },
    { wallet: "0x0cb2f3930a04f6c22c5e9f6bbdf838247ad1bc6f", net: 10844, received: 10844, sent: 0, txs: 1 },
    { wallet: "0xf89e4d2ae8ff6c1b30e9f9f5f3f60b385a099124", net: 10685, received: 10685, sent: 0, txs: 1 },
    { wallet: "0xc07f8b8d4b5a5c7cc420267c3f50eb0c9e72f306", net: 9589, received: 9589, sent: 0, txs: 2 },
    { wallet: "0xc39e4d2939d414bdb04e71d8ad02828c8bdd7b38", net: 6074, received: 6074, sent: 0, txs: 1 },
    { wallet: "0xa7f16ebaa8aa66b70d9a27aec7e499a9ca5d33dd", net: 4966, received: 226986, sent: 222020, txs: 5 },
    { wallet: "0x33e9565381b6407fa3e297cc8f6e4dcebae7d179", net: 4932, received: 4932, sent: 0, txs: 1 },
    { wallet: "0x5532d65385e664eef604976354608a9dc4d9ae7c", net: 4932, received: 4932, sent: 0, txs: 1 },
    { wallet: "0x139724a176a50f5089f4ed5bc653124e9d2c97f3", net: 2740, received: 2740, sent: 0, txs: 1 },
    { wallet: "0x8baf08a5452ba13680c906812eda355db80af77f", net: 1657, received: 1657, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1379, received: 1382, sent: 3, txs: 21 },
    { wallet: "0xf3b41e096731dffff3cb4a28ad989a825ffd9d67", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x950618712a5cd5a221c8a95930947cb76576eb76", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x722a6b207b2d49cc27bb2806d4de7b65d47a97b3", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xdfc90a70d89bece5ac9331fbd680e3306e9afc15", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xb8294f8f8f6619a299688f1ca12cb967fc9a6176", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x39faf1de461849163e390d0a57d1eaa632064a49", net: 168, received: 168, sent: 0, txs: 1 },
    { wallet: "0x50705b5ee9a18c38a17d5f29a422ab0549d5583c", net: 70, received: 70, sent: 0, txs: 1 },
    { wallet: "0x5aafc1f252d544f744d17a4e734afd6efc47ede4", net: 70, received: 70, sent: 0, txs: 2 },
    { wallet: "0x9008d19f58aabd9ed0d60971565aa8510560ab41", net: 55, received: 664664, sent: 664609, txs: 6 },
    { wallet: "0xad01c20d5886137e056775af56915de824c8fce5", net: 7, received: 7, sent: 0, txs: 2 },
    { wallet: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", net: 0, received: 819792, sent: 819792, txs: 2 },
    { wallet: "0x4296339b4ff8e67f07de40d97a49a680f2598e0f", net: 0, received: 51307, sent: 51307, txs: 14 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 93995, sent: 93995, txs: 26 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 0, received: 137, sent: 137, txs: 2 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 444417, sent: 444417, txs: 36 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 65971, sent: 65971, txs: 10 },
    { wallet: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", net: 0, received: 819791, sent: 819792, txs: 2 },
    { wallet: "0xd83bbad310f696dd59464483d28bad209b76d1fb", net: 0, received: 407233, sent: 407233, txs: 6 },
    { wallet: "0x74de5d4fcbf63e00296fd95d33236b9794016631", net: 0, received: 195000, sent: 195000, txs: 4 },
    { wallet: "0xc0157506932eeccd4bacdc32001d2f8aab75872f", net: 0, received: 195000, sent: 195000, txs: 3 },
    { wallet: "0xbae79c8743c527cd8a5dd7ef91d16c78ec7b0c70", net: 0, received: 1644, sent: 1644, txs: 3 },
    { wallet: "0x80826c8570f2e3370c6d0d74fd0344bc963efca9", net: 0, received: 1644, sent: 1644, txs: 2 }
];

const WHALE_LABELS = {

};
