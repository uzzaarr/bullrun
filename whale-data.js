// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 28, 2026 at 01:50 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 154;
const WHALE_TOTAL_VOLUME      = 24118670;
const WHALE_BIGGEST_SINGLE    = 5699000;

const WHALE_TRANSFERS = [
    { hash: "0xad916cc64b93e48dc6401d706299d3ee3dff184391f04aa1d59361436e1c02d6", ts: 1785245039, from: "0xbee0fbcb4ae3dc5127258b5669407b71ccce1bd9", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 2356164, block: 25631598, type: "transfer" },
    { hash: "0xe6071f3b4be1baab3e27ed552157e83e14c987131b7a7e4e0c39237f40617aa4", ts: 1785244607, from: "0xe29a56bb873f6166bcafee7e2287a9acb7710741", to: "0xbee0fbcb4ae3dc5127258b5669407b71ccce1bd9", amount: 2356164, block: 25631562, type: "transfer" },
    { hash: "0x3e356efb1090c18c60fe3d9797b01f4dcacbeda2c028615f0fb60001bb83ce2e", ts: 1785244547, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xe29a56bb873f6166bcafee7e2287a9acb7710741", amount: 2356164, block: 25631557, type: "transfer" },
    { hash: "0x11fbd94a8b80de27b51f94a39e4cd3846caea1307570829557ce31ddcb93cb38", ts: 1785241655, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xc8aa49d33a6df940a5d0defce1e4a5f4b877db92", amount: 5178082, block: 25631316, type: "transfer" },
    { hash: "0x65d00a54c4daba8f504f5aa12409674ee8ebba920c44077044984dbf07c9d7ac", ts: 1785241331, from: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 135202, block: 25631289, type: "transfer" },
    { hash: "0x9af13b418045341080e206d1d4ad89031913c0b88720ca484e2644f9f4d480d1", ts: 1785220079, from: "0xbbc971001a0a3697546b80ce09a5a217097db1b1", to: "0x217532e9322a6995854b47462f875edeb9dfb68f", amount: 1898000, block: 25629520, type: "transfer" },
    { hash: "0x372a4259ac8005bef593969994dd3f08102467f42862cde39e2c95aaa544f294", ts: 1785219215, from: "0xa2b801ab66f9b6c3ba70b36953d087339ac26406", to: "0xedc6b3f95f3e4ef39318a13bd1757716686d269a", amount: 5699000, block: 25629448, type: "transfer" },
    { hash: "0x6b604d5336e73323ae7d077b8c1d19aa16fcf1cd568a677ebd020ed51a7f3d40", ts: 1785196487, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x7c59bd2b2064883093452ab32492f3e5fa03971d", amount: 488889, block: 25627564, type: "transfer" },
    { hash: "0xbb1584b80653699aa7091a1959287ad81d85577c4b84bf8dc7b47afe878821b2", ts: 1785177287, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 553443, block: 25625970, type: "transfer" },
    { hash: "0xef4ff5c791e9efb8d8491f277e4000c0436ad8184e5e3778b2d9f1de70aff069", ts: 1785176831, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 553443, block: 25625932, type: "transfer" },
    { hash: "0xdda000ba948f075e6a2ea727b221674938cffe34b39566ab66dee306436088b0", ts: 1785176639, from: "0xc39500170bf00d2a9c7d83af9b524eed24b9fca0", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 540279, block: 25625917, type: "transfer" },
    { hash: "0xae5757b3883bd01f9e1232810410d93499cbb7972d6e2c5fd91368d673b4811f", ts: 1785176567, from: "0xb9025e7a68ef7d90422bbcc72079bab9a17531e3", to: "0xc39500170bf00d2a9c7d83af9b524eed24b9fca0", amount: 540279, block: 25625911, type: "transfer" },
    { hash: "0x1eaf3dbbac7db2411dbe376ab7972c89971c1998908cb34f74f221b56c78e9b7", ts: 1785176471, from: "0xf36bd243de32750a92da251f60feca567642d025", to: "0xb9025e7a68ef7d90422bbcc72079bab9a17531e3", amount: 541096, block: 25625903, type: "transfer" },
    { hash: "0xc37224a68fc310946b380898d6ed1f7d92cf40e4480c0de63704dc18440e753a", ts: 1785176387, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xf36bd243de32750a92da251f60feca567642d025", amount: 541096, block: 25625896, type: "transfer" },
    { hash: "0xc360ad65ccda64853da2607a8700dfdf72dac4342fd6088c0e1e28f091ab1a00", ts: 1785168755, from: "0x1c5cd27eb040f4305958b2a9eddafa54548fce03", to: "0xd99ed35ac471d20b7a3f2286645b315aa4002c9e", amount: 127123, block: 25625261, type: "transfer" },
    { hash: "0x1da206024fd3d1e8e8b0cd2ee345c4be4da8efb253ece83836374a867f2c0cfa", ts: 1785168563, from: "0x572f7e870d91af90a62a5fd5b85c8141d881d963", to: "0x1c5cd27eb040f4305958b2a9eddafa54548fce03", amount: 127123, block: 25625245, type: "transfer" },
    { hash: "0x97cd438a2e7e38fb86ed12159355efc5a0763904fa350a35173f7d3316f92e3d", ts: 1785168503, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x572f7e870d91af90a62a5fd5b85c8141d881d963", amount: 127123, block: 25625240, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xedc6b3f95f3e4ef39318a13bd1757716686d269a", net: 5699000, received: 5699000, sent: 0, txs: 1 },
    { wallet: "0xc8aa49d33a6df940a5d0defce1e4a5f4b877db92", net: 5178082, received: 5178082, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 2491366, received: 2491366, sent: 0, txs: 2 },
    { wallet: "0x217532e9322a6995854b47462f875edeb9dfb68f", net: 1900000, received: 1900000, sent: 0, txs: 3 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 553443, received: 553443, sent: 0, txs: 1 },
    { wallet: "0x7c59bd2b2064883093452ab32492f3e5fa03971d", net: 488889, received: 488889, sent: 0, txs: 1 },
    { wallet: "0xd99ed35ac471d20b7a3f2286645b315aa4002c9e", net: 127123, received: 127123, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 36629, received: 590641, sent: 554013, txs: 8 },
    { wallet: "0x2f36fb837850aa0a491cc2a5a075c90f5153a3fd", net: 32603, received: 32603, sent: 0, txs: 1 },
    { wallet: "0x6a79b5142ed23875ce46f40826ff686b5429f78f", net: 25913, received: 25913, sent: 0, txs: 1 },
    { wallet: "0x8db66cd5d4538fdcdc5ff6d1c82abd1e52e998f4", net: 22192, received: 22192, sent: 0, txs: 1 },
    { wallet: "0x716e3fad60bc867449795cd624da34aab3dc381f", net: 21148, received: 21148, sent: 0, txs: 2 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 16272, received: 16272, sent: 0, txs: 1 },
    { wallet: "0x139724a176a50f5089f4ed5bc653124e9d2c97f3", net: 13151, received: 13151, sent: 0, txs: 1 },
    { wallet: "0x7764c8727dab012fce187df0736dab2b00ef691c", net: 6575, received: 6575, sent: 0, txs: 1 },
    { wallet: "0x7772da6d353918acd13423feb30cb5a64670ca03", net: 3869, received: 3869, sent: 0, txs: 1 },
    { wallet: "0xc9e1571520eb117c1b2b59133a4d2ee4da235ecd", net: 3562, received: 3562, sent: 0, txs: 1 },
    { wallet: "0x4e2d52bd29e0495cb8787cc2ce7964dadcfdd441", net: 2780, received: 2780, sent: 0, txs: 1 },
    { wallet: "0x543a74cf6ce42c95df200eb2c3b19af7e7157c16", net: 2780, received: 2780, sent: 0, txs: 1 },
    { wallet: "0xc0146b106a90a1215552be29baaf6f3b1701d3dd", net: 2780, received: 2780, sent: 0, txs: 1 },
    { wallet: "0xc097f3238e49c690df6a7d15cf82065bc98291a5", net: 2603, received: 2603, sent: 0, txs: 1 },
    { wallet: "0x187fe1a8b76c60b85c00a2819152ff00ff642386", net: 2475, received: 2475, sent: 0, txs: 1 },
    { wallet: "0x3822d8b402d6fcbe3187b08b1733ae2e2e46a2d3", net: 2192, received: 2192, sent: 0, txs: 2 },
    { wallet: "0xd1966596e0d9c4033d19b5e12d1f14b183dfa2c5", net: 2055, received: 2055, sent: 0, txs: 1 },
    { wallet: "0xb8294f8f8f6619a299688f1ca12cb967fc9a6176", net: 1918, received: 1918, sent: 0, txs: 1 },
    { wallet: "0x7b9d43ef9d740bc6b6e593e1fc7c4b910a75fd00", net: 1328, received: 1328, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1306, received: 1306, sent: 0, txs: 13 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x5d73e31d8588d928d2dcbea05dc8038d86730bf5", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x22a607be5bf946935def3b7b5bd3310b4f81cead", net: 1, received: 4384, sent: 4383, txs: 3 },
    { wallet: "0xbee0fbcb4ae3dc5127258b5669407b71ccce1bd9", net: 0, received: 2356164, sent: 2356164, txs: 2 },
    { wallet: "0xe29a56bb873f6166bcafee7e2287a9acb7710741", net: 0, received: 2356164, sent: 2356164, txs: 2 },
    { wallet: "0x0889e9327b98d7d1be3c301a4585ff3330502c9a", net: 0, received: 29918, sent: 29918, txs: 12 },
    { wallet: "0xd7185c486dd88eb9f3573b878a1469485644091f", net: 0, received: 7313, sent: 7313, txs: 2 },
    { wallet: "0x7661da94ae378f84fc9238f0485f3c26927423f5", net: 0, received: 7313, sent: 7313, txs: 2 },
    { wallet: "0xc4d43b4e707ab0e2684f66e89b97273fc80871b8", net: 0, received: 7313, sent: 7313, txs: 2 },
    { wallet: "0x4b6915950f1400abbd05e2e805bfab7fe29b4652", net: 0, received: 1507, sent: 1507, txs: 3 },
    { wallet: "0xe33eaaec84c6bb553a9bcb715e42e226db2dc472", net: 0, received: 25913, sent: 25913, txs: 2 },
    { wallet: "0x3c246abd56d3e7db618e9abe4545a77f5b2a6900", net: 0, received: 8168, sent: 8168, txs: 2 },
    { wallet: "0xe7a44c73e0a3bcdc99189625cfa8516de296fdeb", net: 0, received: 839, sent: 839, txs: 2 },
    { wallet: "0x3c9108700724d9d96cff2ac8979d6ad2a8d469ae", net: 0, received: 274, sent: 274, txs: 2 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 19994, sent: 19994, txs: 5 },
    { wallet: "0x78d9e3a29e51b4326d5ac0def01ae2559f2a9844", net: 0, received: 37826, sent: 37826, txs: 2 }
];

const WHALE_LABELS = {

};
