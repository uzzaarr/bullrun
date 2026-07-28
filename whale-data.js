// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 28, 2026 at 08:23 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 192;
const WHALE_TOTAL_VOLUME      = 14841837;
const WHALE_BIGGEST_SINGLE    = 5699000;

const WHALE_TRANSFERS = [
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
    { hash: "0x97cd438a2e7e38fb86ed12159355efc5a0763904fa350a35173f7d3316f92e3d", ts: 1785168503, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x572f7e870d91af90a62a5fd5b85c8141d881d963", amount: 127123, block: 25625240, type: "transfer" },
    { hash: "0x48401f84b48b81f1da0b9d7472bafc57518bc0664c89179fef7cbe8b55fdcbdb", ts: 1785158759, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x0c066c61c1784640946a008767f9c0dc48448bc9", amount: 700000, block: 25624432, type: "transfer" },
    { hash: "0xeb630939b7e4ec1eecec9f867282cc40d039dad556df6651ceb86cd253466518", ts: 1785154415, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", amount: 126022, block: 25624071, type: "transfer" },
    { hash: "0xaf857a30f825b88a74efac65bfaf32b6a308a2446bea36671d034148df44e091", ts: 1785147071, from: "0xa109e4d1e44da314d86aaa223330d3f8b9b0c037", to: "0x08975eb9695e5ce896f7416daa9a5f62e81142b3", amount: 110990, block: 25623462, type: "transfer" },
    { hash: "0xfa88791d34763ead87a3d22411c58998bffc6b71704d1b6f29661f9377617584", ts: 1785145619, from: "0xc1c4a5c41b62989acdbb9a11bbab668158f5d481", to: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", amount: 905687, block: 25623341, type: "transfer" },
    { hash: "0xf727233e991a70a0e88c6aa2bbf503d8d2112507b8815b65f2cd7201b3e4704f", ts: 1785144647, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xc1c4a5c41b62989acdbb9a11bbab668158f5d481", amount: 905687, block: 25623261, type: "transfer" },
    { hash: "0x4f7cf59cfc285e999e643e5c386eb2e7b01566baeac6de39f813c40812ada49c", ts: 1785141251, from: "0x43e86f6198b99e21918f3fa07c3a68a5587409e3", to: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", amount: 356557, block: 25622979, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xedc6b3f95f3e4ef39318a13bd1757716686d269a", net: 5699000, received: 5699000, sent: 0, txs: 1 },
    { wallet: "0x217532e9322a6995854b47462f875edeb9dfb68f", net: 1900000, received: 1900000, sent: 0, txs: 3 },
    { wallet: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", net: 905687, received: 905687, sent: 0, txs: 1 },
    { wallet: "0x0c066c61c1784640946a008767f9c0dc48448bc9", net: 700000, received: 700000, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 563021, received: 563021, sent: 0, txs: 2 },
    { wallet: "0x7c59bd2b2064883093452ab32492f3e5fa03971d", net: 488889, received: 488889, sent: 0, txs: 1 },
    { wallet: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", net: 356557, received: 356557, sent: 0, txs: 1 },
    { wallet: "0xd99ed35ac471d20b7a3f2286645b315aa4002c9e", net: 127123, received: 127123, sent: 0, txs: 1 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 126022, received: 126022, sent: 0, txs: 1 },
    { wallet: "0x08975eb9695e5ce896f7416daa9a5f62e81142b3", net: 110990, received: 110990, sent: 0, txs: 1 },
    { wallet: "0x51dedb895ed27222e6e9cfe1c7402370c7e52d8d", net: 88493, received: 88493, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 59301, received: 59301, sent: 0, txs: 1 },
    { wallet: "0x716e3fad60bc867449795cd624da34aab3dc381f", net: 47229, received: 47229, sent: 0, txs: 5 },
    { wallet: "0xbe4ae6e24d12dbd180517f126765178bae81f341", net: 46027, received: 46027, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 43628, received: 597072, sent: 553443, txs: 7 },
    { wallet: "0x2f36fb837850aa0a491cc2a5a075c90f5153a3fd", net: 32603, received: 32603, sent: 0, txs: 1 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 31345, received: 31345, sent: 0, txs: 2 },
    { wallet: "0x5c7bb5d31e178c4fb0534add88618a0d2688756d", net: 22192, received: 44384, sent: 22192, txs: 2 },
    { wallet: "0x8db66cd5d4538fdcdc5ff6d1c82abd1e52e998f4", net: 22192, received: 22192, sent: 0, txs: 1 },
    { wallet: "0x21fd0b315ce79304ee0203374e4a723f2587caa9", net: 18630, received: 18630, sent: 0, txs: 1 },
    { wallet: "0x139724a176a50f5089f4ed5bc653124e9d2c97f3", net: 13151, received: 13151, sent: 0, txs: 1 },
    { wallet: "0xd7af5ea14fad145b2d9fd57e321d7bf8301980b5", net: 9088, received: 9088, sent: 0, txs: 1 },
    { wallet: "0x7764c8727dab012fce187df0736dab2b00ef691c", net: 6575, received: 6575, sent: 0, txs: 1 },
    { wallet: "0xe8d8209a5f00040af456c3555c6dc66186ea96ec", net: 4170, received: 4170, sent: 0, txs: 1 },
    { wallet: "0x7772da6d353918acd13423feb30cb5a64670ca03", net: 3869, received: 3869, sent: 0, txs: 1 },
    { wallet: "0x8a722431c321be4f0ee127ba90d40efa92bdea32", net: 3159, received: 3159, sent: 0, txs: 1 },
    { wallet: "0x4e2d52bd29e0495cb8787cc2ce7964dadcfdd441", net: 2780, received: 2780, sent: 0, txs: 1 },
    { wallet: "0x543a74cf6ce42c95df200eb2c3b19af7e7157c16", net: 2780, received: 2780, sent: 0, txs: 1 },
    { wallet: "0xc0146b106a90a1215552be29baaf6f3b1701d3dd", net: 2780, received: 2780, sent: 0, txs: 1 },
    { wallet: "0x22a3752e30492b1421be1471e16703aaabe6af63", net: 2679, received: 5154, sent: 2475, txs: 2 },
    { wallet: "0xc097f3238e49c690df6a7d15cf82065bc98291a5", net: 2603, received: 2603, sent: 0, txs: 1 },
    { wallet: "0x187fe1a8b76c60b85c00a2819152ff00ff642386", net: 2475, received: 2475, sent: 0, txs: 1 },
    { wallet: "0xd1966596e0d9c4033d19b5e12d1f14b183dfa2c5", net: 2055, received: 2055, sent: 0, txs: 1 },
    { wallet: "0xb8294f8f8f6619a299688f1ca12cb967fc9a6176", net: 1918, received: 1918, sent: 0, txs: 1 },
    { wallet: "0x3822d8b402d6fcbe3187b08b1733ae2e2e46a2d3", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1349, received: 1349, sent: 0, txs: 14 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x5d73e31d8588d928d2dcbea05dc8038d86730bf5", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 411, received: 411, sent: 0, txs: 2 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 274, received: 274, sent: 0, txs: 2 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 132, received: 360, sent: 227, txs: 4 },
    { wallet: "0x52866fd157577897ce627022b9c19bd2e622fd7a", net: 5, received: 5, sent: 0, txs: 1 },
    { wallet: "0x22a607be5bf946935def3b7b5bd3310b4f81cead", net: 1, received: 4384, sent: 4383, txs: 3 },
    { wallet: "0x78d9e3a29e51b4326d5ac0def01ae2559f2a9844", net: 0, received: 37826, sent: 37826, txs: 2 },
    { wallet: "0xfe2f649142beb1d87b9069538ecb8e77ab1e4762", net: 0, received: 37945, sent: 37945, txs: 3 },
    { wallet: "0x9437a63a60f2a90b48a9972be8399e0c54701dd3", net: 0, received: 1000, sent: 1000, txs: 2 },
    { wallet: "0xdaffdcbca50c6c35505460db58c0fc29ca19534f", net: 0, received: 6575, sent: 6575, txs: 2 }
];

const WHALE_LABELS = {

};
