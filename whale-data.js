// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "September 9, 2026 at 02:34 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 265;
const WHALE_TOTAL_VOLUME      = 5193365;
const WHALE_BIGGEST_SINGLE    = 252055;

const WHALE_TRANSFERS = [
    { hash: "0xe027a3af45d81a2a85a535637182de02c136a081b0cd77defc555e002c7c9259", ts: 1788916787, from: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 148279, block: 25936487, type: "sell" },
    { hash: "0xfbe9661937e788bbae1a1d112420e3d2a38dab1174c306be4ab4b4d17d39cf89", ts: 1788913595, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x57ba479e67ae2107ebf5b4bf6f45761eeacbdbba", amount: 252055, block: 25936222, type: "transfer" },
    { hash: "0xf6e02bd8b1ff5f0c35ed34ef0da9fe8360de16155bcb6ccc12fe2450e9f486b9", ts: 1788899699, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x25dafdaa03a8b671909a79436718bc5c4a31dbf3", amount: 186301, block: 25935067, type: "transfer" },
    { hash: "0xb7fca787eade88eeb2eba4476decb7d18cfd7ec38ed412237b1d4e228dc1b9f8", ts: 1788893363, from: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 148136, block: 25934540, type: "sell" },
    { hash: "0x339d90ee115f589f5277a594fec889979bf1890a9ca7d68965778bb7bb3a8aaa", ts: 1788891887, from: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 147269, block: 25934417, type: "sell" },
    { hash: "0x4b05193f52eff61fde634e816eff5bd43d4a0b97cc612aea11dd1cc5e8618809", ts: 1788891575, from: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 146408, block: 25934392, type: "sell" },
    { hash: "0xed0318638a24448c9f3940cd8446a96f9bc1f116d6a037836a1cac4254277476", ts: 1788891311, from: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 145489, block: 25934370, type: "sell" },
    { hash: "0xd460e4d344c2b51fc4e6fbf1780ea65bf53a5a3b31495f33a4701ae2b383e9fe", ts: 1788888167, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25934108, type: "sell" },
    { hash: "0x8000947d8129b34f7113e9b20fbe8bb932f1b77d00431c40e59785c24c1b539c", ts: 1788881267, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", amount: 122362, block: 25933537, type: "buy" },
    { hash: "0xa01330b8f93c70cb8236c0713f51cb8f0041d68b9c0b94630199fd74e8a441fb", ts: 1788881267, from: "0x1f2f10d1c40777ae1da742455c65828ff36df387", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 136715, block: 25933537, type: "sell" },
    { hash: "0xa01330b8f93c70cb8236c0713f51cb8f0041d68b9c0b94630199fd74e8a441fb", ts: 1788881267, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x1f2f10d1c40777ae1da742455c65828ff36df387", amount: 136715, block: 25933537, type: "buy" },
    { hash: "0xb8c0f68f7cee3697ab97bc56e5357a31b69a8f70077792c5fe56f5b9205e2762", ts: 1788880967, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25933512, type: "sell" },
    { hash: "0xaab0cc6c30b647f4dddc09170f8a5324ff6ea45b05cd2bfde9c2c975973ebb49", ts: 1788880811, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", amount: 159961, block: 25933499, type: "transfer" },
    { hash: "0xaab0cc6c30b647f4dddc09170f8a5324ff6ea45b05cd2bfde9c2c975973ebb49", ts: 1788880811, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 159961, block: 25933499, type: "buy" },
    { hash: "0x8fc709244a9841d798fa4ed088a1d5c837180d592ba71e46f0c0d72bc2055c83", ts: 1788880787, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", amount: 113591, block: 25933497, type: "transfer" },
    { hash: "0x8fc709244a9841d798fa4ed088a1d5c837180d592ba71e46f0c0d72bc2055c83", ts: 1788880787, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 113591, block: 25933497, type: "buy" },
    { hash: "0xc26599dcd4222a8db6d2580050118b089c5f6d5c3879759b35d9fd8dc03a9b56", ts: 1788880775, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", amount: 147057, block: 25933496, type: "buy" },
    { hash: "0x30aa17532caefa5b737f3c420bc109d9953c4335940de2346d56ccf6e9f9cfec", ts: 1788880571, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25933480, type: "buy" },
    { hash: "0xfdb3dbe8671bc0066efd302414e547f9304f3b89bc32312c7c0490cee63a968b", ts: 1788880319, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25933460, type: "buy" },
    { hash: "0x018d2c1e94f822703782ffe598f17f163a201323baa8c44ea08c4cf0630f5539", ts: 1788874547, from: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 147041, block: 25932980, type: "sell" },
    { hash: "0xe22358ea7dc86ef4d978dd9d80000b82664e177bf311f06d9b14b1ca6a2a166c", ts: 1788874451, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25932972, type: "sell" },
    { hash: "0x35fad623984c61a93bad4de15414151868360a4c00a302004ec7163fb7e15662", ts: 1788874355, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25932964, type: "sell" },
    { hash: "0xbc405bf37a758fd93ea175f0f570bd454faf71a41b4769680289c38b9c873977", ts: 1788860255, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25931799, type: "buy" },
    { hash: "0x3923d2eec00d19b01bb505c692d7c6d7284824d71219a75e80867c817cb7cf59", ts: 1788859583, from: "0xff3176d76486e9cae7dfa081ef5a1b4f22c3ddef", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 241163, block: 25931744, type: "transfer" },
    { hash: "0x2618b3452eacfef198e85a6ab682172772d90546bf7c69c7f18f36d5a7efa65e", ts: 1788858899, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25931688, type: "buy" },
    { hash: "0x688f677ad447e04bb5c1272c3207be6a61135bd8735180aef6f5b971b7615305", ts: 1788856007, from: "0x9abe1355078b45b7e7f42e3f3e40df246139bc7d", to: "0xff3176d76486e9cae7dfa081ef5a1b4f22c3ddef", amount: 241163, block: 25931447, type: "transfer" },
    { hash: "0x0e343f3d59b8e37aa0f6e1b3ac9e36892e9a12579490a979ba3ae837aed37454", ts: 1788854771, from: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 147274, block: 25931344, type: "sell" },
    { hash: "0xe1eb8d8e1feb7cb134b1b851c3e504af389f9bff7c884a805dd42ecda9bb4c5f", ts: 1788848723, from: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 146364, block: 25930841, type: "sell" },
    { hash: "0x9f96c6007a4038600287658a4e502a39b43df1e8cc915f83629f26e4583efeb6", ts: 1788848411, from: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 145510, block: 25930815, type: "sell" },
    { hash: "0xca3280a56f1dd581799d3dd5ffbe7ebf75f958fe8c2813994efef42f19357ff6", ts: 1788848387, from: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", to: "0x4d0533006898cb292dfd1fe0dce8bad8bbb74cab", amount: 179365, block: 25930813, type: "transfer" },
    { hash: "0xca3280a56f1dd581799d3dd5ffbe7ebf75f958fe8c2813994efef42f19357ff6", ts: 1788848387, from: "0x8f10b468b06c6fd214b65f87778827f7d113f996", to: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", amount: 179365, block: 25930813, type: "transfer" },
    { hash: "0xca3280a56f1dd581799d3dd5ffbe7ebf75f958fe8c2813994efef42f19357ff6", ts: 1788848387, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8f10b468b06c6fd214b65f87778827f7d113f996", amount: 179365, block: 25930813, type: "buy" },
    { hash: "0x7306bc15d277f4a37dfab182aef625429fdbe2885bad50932b4ff03b6f5c0909", ts: 1788847511, from: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 145531, block: 25930740, type: "sell" },
    { hash: "0xbaa8b0159292e253861fc1a85beeb8d924ab6179efa84160358cf7a76a762a6f", ts: 1788836447, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", amount: 145858, block: 25929820, type: "buy" },
    { hash: "0x132be0cb4e9bca1ba225ea19b0d2ba2e9b1c7314cd718f5bc7e61fc28e207751", ts: 1788836447, from: "0x9205a569b0ff45df1e4f5ae48e21bc7f0656f0bb", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 115738, block: 25929820, type: "sell" },
    { hash: "0x132be0cb4e9bca1ba225ea19b0d2ba2e9b1c7314cd718f5bc7e61fc28e207751", ts: 1788836447, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x9205a569b0ff45df1e4f5ae48e21bc7f0656f0bb", amount: 115738, block: 25929820, type: "buy" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 273429, received: 273429, sent: 0, txs: 2 },
    { wallet: "0x09fc9b7545020f6a51d113e495e0a451597969d3", net: 258744, received: 552270, sent: 293526, txs: 30 },
    { wallet: "0x57ba479e67ae2107ebf5b4bf6f45761eeacbdbba", net: 252055, received: 252055, sent: 0, txs: 1 },
    { wallet: "0x25dafdaa03a8b671909a79436718bc5c4a31dbf3", net: 186301, received: 186301, sent: 0, txs: 1 },
    { wallet: "0x4d0533006898cb292dfd1fe0dce8bad8bbb74cab", net: 179365, received: 179365, sent: 0, txs: 1 },
    { wallet: "0xaa8d352b976537301177c6e6aa6e0ef3e56b2c87", net: 90411, received: 90411, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 71734, received: 520812, sent: 449078, txs: 22 },
    { wallet: "0x5c793a60e739e3dc1dc439c26eef87a9b3c64a32", net: 60000, received: 120000, sent: 60000, txs: 3 },
    { wallet: "0xe58f41df6044f8ecb45135ef3e395f5fc0034876", net: 43699, received: 43699, sent: 0, txs: 1 },
    { wallet: "0x0faeb60e1b406c2f84454f169a2512a5792e1aa8", net: 40226, received: 41856, sent: 1629, txs: 2 },
    { wallet: "0xc07f8b8d4b5a5c7cc420267c3f50eb0c9e72f306", net: 23973, received: 23973, sent: 0, txs: 1 },
    { wallet: "0x9a9f2be0f7c1123a131b8bb42b4b66d35a060a0c", net: 20179, received: 20179, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 19726, received: 19726, sent: 0, txs: 1 },
    { wallet: "0x54cfb9d7a1e5c29079577630ec1f030e59e5cd6f", net: 15324, received: 15324, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 11697, received: 11697, sent: 0, txs: 2 },
    { wallet: "0x2f8a761fa4aa95fa36b88adee1390c24d416f194", net: 9940, received: 9940, sent: 0, txs: 1 },
    { wallet: "0x72358c76dc5b581758f2cf946a9b67aec1fdf2c0", net: 8094, received: 16861, sent: 8767, txs: 6 },
    { wallet: "0x5bfdb327168803a1b33c6062ef28ac0e3fe88e31", net: 7353, received: 7353, sent: 0, txs: 1 },
    { wallet: "0x961b0048b8e32a33c77f0c71913e6161a1f5b21d", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0x5532d65385e664eef604976354608a9dc4d9ae7c", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0x3822d8b402d6fcbe3187b08b1733ae2e2e46a2d3", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x1a996eb2a69423926d60973fc3d73cf1fa847a2f", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x1894c5c5d9d976a7971a0ccd252f2f6064efd3a8", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x5c9d1a6c9753e711db9b880b0404cd653a0e0032", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x27ace13e9949900af2c5fdc1ad2aeb36b1e443a0", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 411, received: 1233, sent: 822, txs: 3 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x1aafbce1cde1e0b7f32e0435bc892bf33ffde848", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 314, received: 461, sent: 147, txs: 18 },
    { wallet: "0x18723ead8c7561c28d793bbe1626dc2a4f3f5afd", net: 311, received: 311, sent: 0, txs: 1 },
    { wallet: "0x5987d62c93f864fff531f79c1f6c8da51eaffce2", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x83ce36503d668dc4efe16416b92f498d06cdc88b", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xb5626b9a19c1c7863debd5dd3bb7f284fa1df45e", net: 118, received: 39506, sent: 39388, txs: 4 },
    { wallet: "0x90710b7c1f5b4a3bc1aa1f5121d5b53fbd4cd009", net: 49, received: 49, sent: 0, txs: 1 },
    { wallet: "0xa36b23f900f2d7b43d8dd875c608384f77d654cf", net: 2, received: 2, sent: 0, txs: 1 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 969891, sent: 969891, txs: 44 },
    { wallet: "0x300ce031db871dda32837b0444b386c0958bafff", net: 0, received: 43485, sent: 43485, txs: 4 },
    { wallet: "0x0fc1f19abe58ff60a9dd08cd5d2433990f5a9b1c", net: 0, received: 1629, sent: 1629, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 375762, sent: 375762, txs: 34 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 375762, sent: 375762, txs: 34 },
    { wallet: "0x04cfa080e66a42f9e08a9ace11b3c86f05f4e4f9", net: 0, received: 4384, sent: 4384, txs: 3 },
    { wallet: "0x81fc131b87abe507d647ddec6a49e1a0540f54b8", net: 0, received: 4384, sent: 4384, txs: 2 },
    { wallet: "0x111116053f09d34a7eae8102887004445176ca11", net: 0, received: 10274, sent: 10274, txs: 2 },
    { wallet: "0x59da89baee7c773f991731fca0a8bba58d511c05", net: 0, received: 10274, sent: 10274, txs: 2 }
];

const WHALE_LABELS = {

};
