// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "August 1, 2026 at 01:05 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 338;
const WHALE_TOTAL_VOLUME      = 15016265;
const WHALE_BIGGEST_SINGLE    = 2232603;

const WHALE_TRANSFERS = [
    { hash: "0x35a22c86d0779e50e0b2549f2f3f67dd35ff328f01eba2568063166061734683", ts: 1785588683, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x7f5dffbd103ad4df1017ba42d44ccda4dc17c4a8", amount: 176438, block: 25660139, type: "transfer" },
    { hash: "0x53e8da05d9345e9eb0f1bb1a29a011aa4aca8e51a2f010ad9fef98327c598fd9", ts: 1785550475, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 998270, block: 25656962, type: "transfer" },
    { hash: "0x4a16043d095d43c52e491e18bebf6b4f9ffdb8cadd216c1f9b95e8ac24a060da", ts: 1785549875, from: "0xe641dca2e131fa8bfe1d7931b9b040e3fe0c5bdc", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 1232503, block: 25656912, type: "sell" },
    { hash: "0x684b8879bed563ad911d7e73fec5d68f0d0f83419e5ab4cc375219ff2fd094d4", ts: 1785549431, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 998270, block: 25656875, type: "transfer" },
    { hash: "0xf2654205574f3f66aaaa4335955b3db38ffe81088d445c8bcc7fcac9e384306a", ts: 1785549239, from: "0x8b1f0020a76b8eeb559bdcbf55214f7c4b739c75", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 998598, block: 25656859, type: "transfer" },
    { hash: "0x66b624b16f7f47161cf1481e20d2b1f8e187a526204f91df9d4112eb417e78db", ts: 1785549191, from: "0x66178ab7c90e568246465253fb042bcbfdf79e8b", to: "0x8b1f0020a76b8eeb559bdcbf55214f7c4b739c75", amount: 998598, block: 25656855, type: "transfer" },
    { hash: "0xd9902ffeb529175d37fd40336bb0ba06ce99d405eddb2f3e07d7242f9d48251e", ts: 1785549059, from: "0xe641dca2e131fa8bfe1d7931b9b040e3fe0c5bdc", to: "0x66178ab7c90e568246465253fb042bcbfdf79e8b", amount: 1000000, block: 25656845, type: "transfer" },
    { hash: "0x6af29051c3400cd569c21f67a3efa52b1ee9e25f1b3be8fdb11d330c3718eb88", ts: 1785548639, from: "0xcf4525dc26cc9ca58e15fffa3ef14d6619a55945", to: "0xe641dca2e131fa8bfe1d7931b9b040e3fe0c5bdc", amount: 2232603, block: 25656810, type: "transfer" },
    { hash: "0x099f27fdf78060dc9eb562574cbecdc5344dbebdeda9b43e92343728a834d70a", ts: 1785547811, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x57ba479e67ae2107ebf5b4bf6f45761eeacbdbba", amount: 157534, block: 25656741, type: "transfer" },
    { hash: "0xaba1143d621cea236248289bcfcd427699d3d3ac9508ff5ce79af856daf78209", ts: 1785544331, from: "0xdaf0a9771537aec3269cda2e8184075132081d81", to: "0x9642b23ed1e01df1092b92641051881a322f5d4e", amount: 100000, block: 25656452, type: "transfer" },
    { hash: "0x81137f698435b8cfbb9e44c30226500a1bb747b27cf82ff2ffb56d04a157ce6d", ts: 1785535631, from: "0xd99ed35ac471d20b7a3f2286645b315aa4002c9e", to: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", amount: 127123, block: 25655728, type: "transfer" },
    { hash: "0x65e4bdb4956c5b16a21adf6a903571e913031b683d59063de68d04fd8e6d6617", ts: 1785525023, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 263601, block: 25654844, type: "transfer" },
    { hash: "0xde406028a6851142e9a6ad2dbcb2d57522c7f627569f86d926a5b6fe865343c5", ts: 1785524423, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 263601, block: 25654795, type: "transfer" },
    { hash: "0x6c6ac5204257e116deff8f683d22c604170a56f841f364b27556967ff11a313c", ts: 1785524243, from: "0xa4caf2f828ba10993ecb016b333834fd5d4f7404", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 266716, block: 25654780, type: "transfer" },
    { hash: "0x6cc6f89a246bd30a3e09fbb1e4654d8e8ff8cf6f05c5a58645d21667670827a0", ts: 1785524171, from: "0xd3bc5acd80a1c9a201d7345d0677cc9899ef8079", to: "0xa4caf2f828ba10993ecb016b333834fd5d4f7404", amount: 266716, block: 25654774, type: "transfer" },
    { hash: "0x2bd65e8f53fc3fe9a0e1e2def6248e43cd214e0b909d8a78f37c509825177622", ts: 1785524135, from: "0xa0206aa3938f7892d01832150cd13e19c0b130d1", to: "0xd3bc5acd80a1c9a201d7345d0677cc9899ef8079", amount: 267123, block: 25654771, type: "transfer" },
    { hash: "0x754358a56e2bf6572aa49eac92a9b0784f9e55d2b9dba137fb47014ddf555c2a", ts: 1785522359, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xa0206aa3938f7892d01832150cd13e19c0b130d1", amount: 253425, block: 25654624, type: "transfer" },
    { hash: "0x09493cf1b6d172f4d3b107b6ee5a8431b6a4307ccad92967a160f5edda667759", ts: 1785515279, from: "0x51f13e2b1eb67701a857858d13377169165f9204", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 100000, block: 25654037, type: "transfer" },
    { hash: "0x43d793eaf30cfe07efd9faa81eea7aad982add0a6e108c6d74ab2cd3453f643f", ts: 1785511907, from: "0x4013f3f89a8d137a71e4b0aa5bbbf177e9a68618", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 100000, block: 25653757, type: "transfer" },
    { hash: "0x81773a10ad73f755ac19817cebea3367b80d3ca308f8d230d4cc8dde3510f72c", ts: 1785508607, from: "0xb1e3aa45a7ab51f938f86db545b03f3041a1620b", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 108493, block: 25653482, type: "transfer" },
    { hash: "0x4ee40dbfd853a9eb3b2672944afcf7a00d40091d5c85ba33376368d5b460cde5", ts: 1785505871, from: "0x1e1357db875454accefd4e13b0aadf2864341601", to: "0xf1a6d3273ab0ba8c18cb887bf2e215e458d1cb91", amount: 1698630, block: 25653254, type: "transfer" },
    { hash: "0x35dd76a0657e8b1fffac779e5751dd01bc64230f7828721cd6d509147fabf637", ts: 1785504923, from: "0xfaa2996d3a7fad40ff44058086c186173bf23066", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 129315, block: 25653175, type: "transfer" },
    { hash: "0xc7f8c262af3a2955a509671d911eb73d6b0ef80b5aaf45d3276b9925af79b535", ts: 1785504791, from: "0xdf01d590d1d9764855c8f346bb81766a6efc5782", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 122053, block: 25653165, type: "transfer" },
    { hash: "0x3c48cc3c62472c8a54bd28a82517a5c25a2756f92942d47a25c91fa568ec16ac", ts: 1785504635, from: "0x077189fcc1c208191d645af5c0f587e9a6ab57bb", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 150534, block: 25653152, type: "transfer" },
    { hash: "0x410a3dbf9fd88fbcc15883a03169ff90ad4a88aed209d428128b8f8a87abd6fc", ts: 1785504611, from: "0xa9b4fe105bed6f2ff9e440698fdb3e01334ed4e0", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 151327, block: 25653150, type: "transfer" },
    { hash: "0xce0e5dffbbe2d94ebcda77d4b52890d6bd96739f3657a129b15127cde8e602e5", ts: 1785504563, from: "0x25d2c6f087a8434db46af51a3f7edbfefaba1917", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 156164, block: 25653146, type: "transfer" },
    { hash: "0x4890486c53fe8d03735ee7db4042cf55442357414dd42a3d99a040ccaea36014", ts: 1785503519, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x1e1357db875454accefd4e13b0aadf2864341601", amount: 1698630, block: 25653060, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 5035549, received: 5035549, sent: 0, txs: 59 },
    { wallet: "0xf1a6d3273ab0ba8c18cb887bf2e215e458d1cb91", net: 1698630, received: 1698630, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 1261871, received: 1261871, sent: 0, txs: 2 },
    { wallet: "0x67336cec42645f55059eff241cb02ea5cc52ff86", net: 282074, received: 282074, sent: 0, txs: 17 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 218066, received: 422236, sent: 204169, txs: 41 },
    { wallet: "0x7f5dffbd103ad4df1017ba42d44ccda4dc17c4a8", net: 176438, received: 176438, sent: 0, txs: 1 },
    { wallet: "0x57ba479e67ae2107ebf5b4bf6f45761eeacbdbba", net: 157534, received: 157534, sent: 0, txs: 1 },
    { wallet: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", net: 127123, received: 127123, sent: 0, txs: 1 },
    { wallet: "0x97fae140a6607bd0100acc505420584161229588", net: 87671, received: 87671, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 85832, received: 100000, sent: 14168, txs: 2 },
    { wallet: "0xdeddd73257c62f136f6927af57fb78b234809138", net: 45729, received: 45729, sent: 0, txs: 1 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 39848, received: 39848, sent: 0, txs: 4 },
    { wallet: "0x45993524e4a5ca1a3f4fcd28683e068d13b5f8e2", net: 38356, received: 38356, sent: 0, txs: 1 },
    { wallet: "0x71eb8935c0473f1c2e29090fa0eab6072c077d19", net: 36583, received: 36583, sent: 0, txs: 1 },
    { wallet: "0xe8446569ee2311ac5c455cf97e6eb5cd594356ea", net: 27397, received: 27397, sent: 0, txs: 1 },
    { wallet: "0x0cea2d9fe51ef641dc65013a7b058c943bbe593b", net: 23425, received: 23425, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 18905, received: 1281410, sent: 1262505, txs: 10 },
    { wallet: "0x4161e34bfc38c2c33349b4c815844727d117e1ff", net: 17260, received: 17260, sent: 0, txs: 1 },
    { wallet: "0xc2ef27c0432a66a03f7d58639da327230e07422b", net: 15205, received: 15205, sent: 0, txs: 1 },
    { wallet: "0x2c2319b9db559e08a6403c0b80afe1638ce2516d", net: 14168, received: 14168, sent: 0, txs: 1 },
    { wallet: "0x4dc40a8d58772fa690b910a559203e7e2f18b067", net: 12329, received: 12329, sent: 0, txs: 1 },
    { wallet: "0x58a3bfcc09411fc55327e262ee140bfe10905987", net: 5595, received: 5595, sent: 0, txs: 1 },
    { wallet: "0x12aaf8392c18349f7fad9335532fc85c7d43c73d", net: 5595, received: 5595, sent: 0, txs: 1 },
    { wallet: "0xdfc90a70d89bece5ac9331fbd680e3306e9afc15", net: 4110, received: 4110, sent: 0, txs: 1 },
    { wallet: "0x28ede55e0ff5e20d732b989879aecfd87b8f761b", net: 3530, received: 3530, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 2577, received: 2577, sent: 0, txs: 13 },
    { wallet: "0x4005d4b50140bcf6221b3ae8df455e10600a02c0", net: 1918, received: 1918, sent: 0, txs: 1 },
    { wallet: "0xd58521c0d2b0c00d0694aff0022dc67419e832bb", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0x20694bb5c906ee71e696587be233284f995564b7", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xc26ff22e2f18f54f82f74593529a27347a5a56ff", net: 1000, received: 3699, sent: 2699, txs: 3 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x5d73e31d8588d928d2dcbea05dc8038d86730bf5", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xd11a748e4e1802d2c9e11bec1518736ad7646946", net: 411, received: 822, sent: 411, txs: 3 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xfe263102682933297cb65dc813e5193249769251", net: 8, received: 65829, sent: 65821, txs: 8 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 626405, sent: 626405, txs: 82 },
    { wallet: "0x163f3103de041d25464e2c8a4f8f3187ec1856e0", net: 0, received: 26094, sent: 26094, txs: 4 },
    { wallet: "0x84cab37995229530d9e6e5cff2f8f4ebe4517d66", net: 0, received: 22214, sent: 22214, txs: 2 },
    { wallet: "0xae0562f6349e1b574a75248bd53848a3039751aa", net: 0, received: 5375, sent: 5375, txs: 8 },
    { wallet: "0x652beec615a5f2373715efed78483ca9bf982d5a", net: 0, received: 822, sent: 822, txs: 2 },
    { wallet: "0x66a9893cc07d91d95644aedd05d03f95e1dba8af", net: 0, received: 16679, sent: 16679, txs: 2 }
];

const WHALE_LABELS = {

};
