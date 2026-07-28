// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 28, 2026 at 07:14 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 132;
const WHALE_TOTAL_VOLUME      = 20467665;
const WHALE_BIGGEST_SINGLE    = 5699000;

const WHALE_TRANSFERS = [
    { hash: "0xad916cc64b93e48dc6401d706299d3ee3dff184391f04aa1d59361436e1c02d6", ts: 1785245039, from: "0xbee0fbcb4ae3dc5127258b5669407b71ccce1bd9", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 2356164, block: 25631598, type: "transfer" },
    { hash: "0xe6071f3b4be1baab3e27ed552157e83e14c987131b7a7e4e0c39237f40617aa4", ts: 1785244607, from: "0xe29a56bb873f6166bcafee7e2287a9acb7710741", to: "0xbee0fbcb4ae3dc5127258b5669407b71ccce1bd9", amount: 2356164, block: 25631562, type: "transfer" },
    { hash: "0x3e356efb1090c18c60fe3d9797b01f4dcacbeda2c028615f0fb60001bb83ce2e", ts: 1785244547, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xe29a56bb873f6166bcafee7e2287a9acb7710741", amount: 2356164, block: 25631557, type: "transfer" },
    { hash: "0x11fbd94a8b80de27b51f94a39e4cd3846caea1307570829557ce31ddcb93cb38", ts: 1785241655, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xc8aa49d33a6df940a5d0defce1e4a5f4b877db92", amount: 5178082, block: 25631316, type: "transfer" },
    { hash: "0x65d00a54c4daba8f504f5aa12409674ee8ebba920c44077044984dbf07c9d7ac", ts: 1785241331, from: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 135202, block: 25631289, type: "transfer" },
    { hash: "0x9af13b418045341080e206d1d4ad89031913c0b88720ca484e2644f9f4d480d1", ts: 1785220079, from: "0xbbc971001a0a3697546b80ce09a5a217097db1b1", to: "0x217532e9322a6995854b47462f875edeb9dfb68f", amount: 1898000, block: 25629520, type: "transfer" },
    { hash: "0x372a4259ac8005bef593969994dd3f08102467f42862cde39e2c95aaa544f294", ts: 1785219215, from: "0xa2b801ab66f9b6c3ba70b36953d087339ac26406", to: "0xedc6b3f95f3e4ef39318a13bd1757716686d269a", amount: 5699000, block: 25629448, type: "transfer" },
    { hash: "0x6b604d5336e73323ae7d077b8c1d19aa16fcf1cd568a677ebd020ed51a7f3d40", ts: 1785196487, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x7c59bd2b2064883093452ab32492f3e5fa03971d", amount: 488889, block: 25627564, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xedc6b3f95f3e4ef39318a13bd1757716686d269a", net: 5699000, received: 5699000, sent: 0, txs: 1 },
    { wallet: "0xc8aa49d33a6df940a5d0defce1e4a5f4b877db92", net: 5178082, received: 5178082, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 2491366, received: 2491366, sent: 0, txs: 2 },
    { wallet: "0x217532e9322a6995854b47462f875edeb9dfb68f", net: 1900000, received: 1900000, sent: 0, txs: 3 },
    { wallet: "0x7c59bd2b2064883093452ab32492f3e5fa03971d", net: 488889, received: 488889, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 53277, received: 53847, sent: 569, txs: 7 },
    { wallet: "0x2f36fb837850aa0a491cc2a5a075c90f5153a3fd", net: 32603, received: 32603, sent: 0, txs: 1 },
    { wallet: "0x716e3fad60bc867449795cd624da34aab3dc381f", net: 32354, received: 32354, sent: 0, txs: 2 },
    { wallet: "0x6a79b5142ed23875ce46f40826ff686b5429f78f", net: 25913, received: 25913, sent: 0, txs: 1 },
    { wallet: "0x139724a176a50f5089f4ed5bc653124e9d2c97f3", net: 13151, received: 13151, sent: 0, txs: 1 },
    { wallet: "0x7764c8727dab012fce187df0736dab2b00ef691c", net: 6575, received: 6575, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 4384, received: 4384, sent: 0, txs: 1 },
    { wallet: "0x7772da6d353918acd13423feb30cb5a64670ca03", net: 3869, received: 3869, sent: 0, txs: 1 },
    { wallet: "0xc9e1571520eb117c1b2b59133a4d2ee4da235ecd", net: 3562, received: 3562, sent: 0, txs: 1 },
    { wallet: "0x4e2d52bd29e0495cb8787cc2ce7964dadcfdd441", net: 2780, received: 2780, sent: 0, txs: 1 },
    { wallet: "0xc097f3238e49c690df6a7d15cf82065bc98291a5", net: 2603, received: 2603, sent: 0, txs: 1 },
    { wallet: "0x187fe1a8b76c60b85c00a2819152ff00ff642386", net: 2475, received: 2475, sent: 0, txs: 1 },
    { wallet: "0xd1966596e0d9c4033d19b5e12d1f14b183dfa2c5", net: 2055, received: 2055, sent: 0, txs: 1 },
    { wallet: "0xb8294f8f8f6619a299688f1ca12cb967fc9a6176", net: 1918, received: 1918, sent: 0, txs: 1 },
    { wallet: "0x7b9d43ef9d740bc6b6e593e1fc7c4b910a75fd00", net: 1328, received: 1328, sent: 0, txs: 1 },
    { wallet: "0xa0952edc243077c05148828cc5432c37486858c3", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x5d73e31d8588d928d2dcbea05dc8038d86730bf5", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x3822d8b402d6fcbe3187b08b1733ae2e2e46a2d3", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 413, received: 413, sent: 0, txs: 12 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x22a607be5bf946935def3b7b5bd3310b4f81cead", net: 1, received: 4384, sent: 4383, txs: 3 },
    { wallet: "0xfe263102682933297cb65dc813e5193249769251", net: 0, received: 32354, sent: 32354, txs: 4 },
    { wallet: "0xb80599732e49f97942612c6a7e1dd693b28f3a8d", net: 0, received: 3485, sent: 3485, txs: 2 },
    { wallet: "0x7ed39d5cd5df58b05d12af88854facbf7efb2be9", net: 0, received: 3562, sent: 3562, txs: 3 },
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
    { wallet: "0x78d9e3a29e51b4326d5ac0def01ae2559f2a9844", net: 0, received: 37826, sent: 37826, txs: 2 },
    { wallet: "0xfe2f649142beb1d87b9069538ecb8e77ab1e4762", net: 0, received: 37945, sent: 37945, txs: 3 }
];

const WHALE_LABELS = {

};
