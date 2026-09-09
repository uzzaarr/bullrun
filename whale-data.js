// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "September 9, 2026 at 10:35 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 253;
const WHALE_TOTAL_VOLUME      = 6341254;
const WHALE_BIGGEST_SINGLE    = 426027;

const WHALE_TRANSFERS = [
    { hash: "0x3f4d0a1e26d1cbe48aca70c43e90ea043514b19d8457fe6edc2d377eaade24eb", ts: 1788949571, from: "0x1308535a9d6bc643e76c198d28b1092b2fde0a60", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 127001, block: 25939208, type: "transfer" },
    { hash: "0x337f850b7f93a78c7f063951d43fcfbab79ea8249e165e1d4d55487e0da86314", ts: 1788949055, from: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 152314, block: 25939165, type: "sell" },
    { hash: "0x96c51a26a49cad0339d0fdeab97d0cf4023ed4a927e1e5b982afd30159cebe91", ts: 1788948575, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", amount: 153276, block: 25939125, type: "buy" },
    { hash: "0x443f4f6a96bab6dde980340ed309d78bf2f568ef6e47b6f9ffe387005a6bffe8", ts: 1788948551, from: "0xf347c211589cdc3fda645e5af2ca6d934a336623", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 425373, block: 25939123, type: "sell" },
    { hash: "0xe72363634e04c73a103cf5aa2e707e60556c4e1ed092cce4cad7d350ec145686", ts: 1788948275, from: "0x2c32980b4494162314a6dc442c7b37ba8d451749", to: "0xf347c211589cdc3fda645e5af2ca6d934a336623", amount: 426027, block: 25939100, type: "transfer" },
    { hash: "0xd5c386f661a32f249fe24bd60a38d31d39e5596c9bedf8e56176ce71de777ca6", ts: 1788948071, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x2c32980b4494162314a6dc442c7b37ba8d451749", amount: 426027, block: 25939083, type: "transfer" },
    { hash: "0x964180ee0e558b2294a6a78d1bb0f9f79a3e77dfd62104b85242d53bf863f998", ts: 1788947507, from: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 150574, block: 25939036, type: "sell" },
    { hash: "0x0780c96fb46fb7558aa9868a40b922e3bcd518f767a4842a50cad4c120e55202", ts: 1788946919, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25938987, type: "sell" },
    { hash: "0x970ec7c2539f397039bd11b0867bc079e0133e68b412535fc9af43330a732117", ts: 1788944363, from: "0x1a87aaec7927ab2527bf790625cc12843ede910e", to: "0x1308535a9d6bc643e76c198d28b1092b2fde0a60", amount: 127001, block: 25938775, type: "transfer" },
    { hash: "0xe9f0b600f07c6b87b98c0de0564ef35f5131d02962d33c8f21b85ef612dae51d", ts: 1788929639, from: "0xead224e9ac09ac94a3d4c0ab1f16bc4e7cb4574c", to: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", amount: 349964, block: 25937553, type: "transfer" },
    { hash: "0x5fb931ed5aecb7e46064da35f39750175659e4543b4cadcb3d4eebc5c78e3e0b", ts: 1788929327, from: "0x20a440823c94d20be8d13c21ccba21fdeb13588b", to: "0xe027081a1b290de039474cd484bb8ebbad896207", amount: 131000, block: 25937527, type: "transfer" },
    { hash: "0xca9a0115f921da703e33d62925d506224b922b43e426f86b72c32f4d61d345c6", ts: 1788929291, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25937524, type: "buy" },
    { hash: "0xdf0f912dbc85d6539651283f71939ca8fa9bfabe63b8e0521a3ae37b240f363a", ts: 1788929015, from: "0xc5cc5a01e7831567f2562a69c9342560fc5e8985", to: "0x20a440823c94d20be8d13c21ccba21fdeb13588b", amount: 131507, block: 25937501, type: "transfer" },
    { hash: "0xacb307b137add89f11260f389b40b91d60b44e981d28bddf57c30a445930d932", ts: 1788928703, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xc5cc5a01e7831567f2562a69c9342560fc5e8985", amount: 131507, block: 25937475, type: "transfer" },
    { hash: "0xd65c287921f0a5ce7f9f1308a13a68a372600eb0629f32b34e13ffaf9bf91749", ts: 1788923471, from: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 149690, block: 25937040, type: "sell" },
    { hash: "0x0fa78727260c28e6c3ea60c98cf7f8d79ff84d4dc671a55e4e4fa3f05c74e9a4", ts: 1788923003, from: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 149062, block: 25937002, type: "sell" },
    { hash: "0x18bb806bd9774d3dec32ec203a53e3612202aa417c86dfcc07e56ec5498306dc", ts: 1788922391, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xc37b79210040e7c6be73f29b40a5d0debb487994", amount: 100000, block: 25936951, type: "transfer" },
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
    { hash: "0x35fad623984c61a93bad4de15414151868360a4c00a302004ec7163fb7e15662", ts: 1788874355, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25932964, type: "sell" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", net: 349964, received: 349964, sent: 0, txs: 1 },
    { wallet: "0x57ba479e67ae2107ebf5b4bf6f45761eeacbdbba", net: 252055, received: 252055, sent: 0, txs: 1 },
    { wallet: "0x25dafdaa03a8b671909a79436718bc5c4a31dbf3", net: 186301, received: 186301, sent: 0, txs: 1 },
    { wallet: "0x5c793a60e739e3dc1dc439c26eef87a9b3c64a32", net: 180000, received: 300000, sent: 120000, txs: 7 },
    { wallet: "0xe027081a1b290de039474cd484bb8ebbad896207", net: 131000, received: 131000, sent: 0, txs: 1 },
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 127001, received: 127001, sent: 0, txs: 1 },
    { wallet: "0xc37b79210040e7c6be73f29b40a5d0debb487994", net: 100000, received: 100000, sent: 0, txs: 1 },
    { wallet: "0x09fc9b7545020f6a51d113e495e0a451597969d3", net: 88549, received: 476560, sent: 388011, txs: 30 },
    { wallet: "0x34e2cb7513a50b19f450a067ed5230a86c13a2e9", net: 54795, received: 54795, sent: 0, txs: 1 },
    { wallet: "0xe58f41df6044f8ecb45135ef3e395f5fc0034876", net: 43699, received: 43699, sent: 0, txs: 1 },
    { wallet: "0x0faeb60e1b406c2f84454f169a2512a5792e1aa8", net: 39683, received: 41856, sent: 2173, txs: 3 },
    { wallet: "0x69987be7ce4cc89d0e00e0b8fa652f10e22fce7c", net: 38356, received: 38356, sent: 0, txs: 1 },
    { wallet: "0xc07f8b8d4b5a5c7cc420267c3f50eb0c9e72f306", net: 23973, received: 23973, sent: 0, txs: 1 },
    { wallet: "0x9a9f2be0f7c1123a131b8bb42b4b66d35a060a0c", net: 20179, received: 20179, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 19726, received: 19726, sent: 0, txs: 1 },
    { wallet: "0x3e9fdd11c29b4e8ab64ae15bb6065ce9faa97acf", net: 15324, received: 15324, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 10875, received: 10875, sent: 0, txs: 1 },
    { wallet: "0xac2693462c8b79259efbee9ddab5492d5b7815af", net: 10411, received: 10411, sent: 0, txs: 1 },
    { wallet: "0x49a2299840a9a5495cae51415548c2b1344bd4f3", net: 9863, received: 9863, sent: 0, txs: 1 },
    { wallet: "0x5bfdb327168803a1b33c6062ef28ac0e3fe88e31", net: 7353, received: 7353, sent: 0, txs: 1 },
    { wallet: "0x58a3bfcc09411fc55327e262ee140bfe10905987", net: 6671, received: 6671, sent: 0, txs: 1 },
    { wallet: "0x4d53d9e26021474ffc67f84f157fefb9e14b3a81", net: 4784, received: 4784, sent: 0, txs: 1 },
    { wallet: "0x3b1d8ab8635e2b807b7f2d4a09b385aa431f8d03", net: 4535, received: 4535, sent: 0, txs: 1 },
    { wallet: "0x961b0048b8e32a33c77f0c71913e6161a1f5b21d", net: 3699, received: 3699, sent: 0, txs: 2 },
    { wallet: "0x2a76a5be3bca8200f7810600ed9201103746810b", net: 3151, received: 3151, sent: 0, txs: 1 },
    { wallet: "0x72358c76dc5b581758f2cf946a9b67aec1fdf2c0", net: 2478, received: 2478, sent: 0, txs: 1 },
    { wallet: "0x5532d65385e664eef604976354608a9dc4d9ae7c", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0x3822d8b402d6fcbe3187b08b1733ae2e2e46a2d3", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x1a996eb2a69423926d60973fc3d73cf1fa847a2f", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x280b23b84fdec3ec1cd0db020cf3090aaf682e86", net: 1480, received: 1480, sent: 0, txs: 1 },
    { wallet: "0xee24dffca375eaa986e0159cbec5994f759c03ce", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 956, received: 1103, sent: 147, txs: 17 },
    { wallet: "0x1894c5c5d9d976a7971a0ccd252f2f6064efd3a8", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xb59fa4d6c443acb362bd84c763dc83e5c5ca5df3", net: 761, received: 761, sent: 0, txs: 1 },
    { wallet: "0x5c9d1a6c9753e711db9b880b0404cd653a0e0032", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x27ace13e9949900af2c5fdc1ad2aeb36b1e443a0", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x20a440823c94d20be8d13c21ccba21fdeb13588b", net: 469, received: 131507, sent: 131038, txs: 3 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x1aafbce1cde1e0b7f32e0435bc892bf33ffde848", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x18723ead8c7561c28d793bbe1626dc2a4f3f5afd", net: 311, received: 311, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xb5626b9a19c1c7863debd5dd3bb7f284fa1df45e", net: 118, received: 39506, sent: 39388, txs: 4 },
    { wallet: "0x90710b7c1f5b4a3bc1aa1f5121d5b53fbd4cd009", net: 49, received: 49, sent: 0, txs: 1 },
    { wallet: "0x9008d19f58aabd9ed0d60971565aa8510560ab41", net: 20, received: 4804, sent: 4784, txs: 2 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 18, received: 18, sent: 0, txs: 1 },
    { wallet: "0x1308535a9d6bc643e76c198d28b1092b2fde0a60", net: 0, received: 127001, sent: 127001, txs: 2 },
    { wallet: "0x22ec88b9ff78c6f2458ab1a7aa8bb99d84bd4b86", net: 0, received: 15173, sent: 15173, txs: 6 }
];

const WHALE_LABELS = {

};
