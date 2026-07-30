// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 30, 2026 at 08:13 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 147;
const WHALE_TOTAL_VOLUME      = 17798000;
const WHALE_BIGGEST_SINGLE    = 5900000;

const WHALE_TRANSFERS = [
    { hash: "0xc8230a8d66fb5493afb22761bc0a3101b5155deaccca2d80722965756946b801", ts: 1785340787, from: "0x8143a1780b70d275587850c02222baf2d1ee49a8", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 5899000, block: 25639544, type: "transfer" },
    { hash: "0xf0fb3d0080172dc69a9ca192db41b140b7f9d7ff88dda1174c32787a8f1ef6b3", ts: 1785340355, from: "0x7fe4b2632f5ae6d930677d662af26bc0a06672b3", to: "0x8143a1780b70d275587850c02222baf2d1ee49a8", amount: 5899000, block: 25639508, type: "transfer" },
    { hash: "0x5d03970906dfb4e423bdeff1a8c46cd623b14b4840bc5cac08d812788efc3111", ts: 1785337223, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x7fe4b2632f5ae6d930677d662af26bc0a06672b3", amount: 5900000, block: 25639248, type: "transfer" },
    { hash: "0x722b533bfb4ae28afbaeeb38a6ca8e2fc938ddebe1c48875ddd72a412682626b", ts: 1785319811, from: "0x9642b23ed1e01df1092b92641051881a322f5d4e", to: "0x34a91c04decde6660fa73c8b8edff6ecd390f343", amount: 100000, block: 25637800, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 5896166, received: 5915120, sent: 18953, txs: 5 },
    { wallet: "0x999b2dc7d728ef06953f33c1f44c450b200e5588", net: 118740, received: 118740, sent: 0, txs: 2 },
    { wallet: "0x34a91c04decde6660fa73c8b8edff6ecd390f343", net: 100000, received: 100000, sent: 0, txs: 1 },
    { wallet: "0x9be5b8a7314552fa47feb1355cd5b4adc7bb7516", net: 84217, received: 84217, sent: 0, txs: 1 },
    { wallet: "0x19888e92ee029e6641e178ebd2346fc1f7d845bd", net: 72877, received: 72877, sent: 0, txs: 1 },
    { wallet: "0xb8001c3ec9aa1985f6c747e25c28324e4a361ec1", net: 49965, received: 99866, sent: 49901, txs: 2 },
    { wallet: "0x198346a51e6a1b18bc2efed80ec9e792791e846e", net: 49901, received: 49901, sent: 0, txs: 1 },
    { wallet: "0xeac35e5fd9b9e0a6bad0dcd1da8fda75a2a642c1", net: 38321, received: 90835, sent: 52514, txs: 7 },
    { wallet: "0xb8569931164b4c3a4b596c48d0e97b9089344e3a", net: 31597, received: 31597, sent: 0, txs: 1 },
    { wallet: "0x651b2ba365a5293dddc7343b2fbf0e5f8271426b", net: 26113, received: 40000, sent: 13887, txs: 2 },
    { wallet: "0x9f1e7f58da5d6a0a95db6839e97fd1f1ec113e68", net: 25500, received: 25500, sent: 0, txs: 1 },
    { wallet: "0x74b06101e70d3b3f30d277bbbdd8cb276a2e4cdc", net: 24795, received: 24795, sent: 0, txs: 1 },
    { wallet: "0x716e3fad60bc867449795cd624da34aab3dc381f", net: 19459, received: 19459, sent: 0, txs: 2 },
    { wallet: "0x38519da87fb8c5bab2b22d0aab6a4c50b0807d75", net: 19444, received: 19444, sent: 0, txs: 1 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 18953, received: 18953, sent: 0, txs: 1 },
    { wallet: "0xa215ad4a812b222cd204e4c54b35aa37ffafc0a3", net: 9315, received: 9315, sent: 0, txs: 1 },
    { wallet: "0xbc85cd88002e4e8fda662d4b102799fe0662ac8b", net: 6849, received: 6849, sent: 0, txs: 1 },
    { wallet: "0x1abdb5af79b603452db3eabfd6ce09b67a8915e8", net: 6027, received: 6027, sent: 0, txs: 1 },
    { wallet: "0x7b9d43ef9d740bc6b6e593e1fc7c4b910a75fd00", net: 5659, received: 6110, sent: 451, txs: 3 },
    { wallet: "0xdd209b5fec3d1024b32be2be972b92ca663ef957", net: 5595, received: 5595, sent: 0, txs: 1 },
    { wallet: "0xd06aa22ecc13018a77796e8832718a3d17d7c2ec", net: 5205, received: 5205, sent: 0, txs: 1 },
    { wallet: "0xc1de062378818b970712a395c35abd9ba41d01a9", net: 4256, received: 4256, sent: 0, txs: 1 },
    { wallet: "0x16fcf0b577fef57595de4926803ab9c21004cd80", net: 3059, received: 3059, sent: 0, txs: 1 },
    { wallet: "0x20694bb5c906ee71e696587be233284f995564b7", net: 2740, received: 2740, sent: 0, txs: 1 },
    { wallet: "0x6f983e1cdab14ed5b72686df0f308b5a3c5acd3d", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0x1894c5c5d9d976a7971a0ccd252f2f6064efd3a8", net: 1918, received: 1918, sent: 0, txs: 1 },
    { wallet: "0x0f36eb8f227aa28e2eb2705724233addabd61e15", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0x50e8e34147929096ab69b3316ac0f1adf8b684c1", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0x5532d65385e664eef604976354608a9dc4d9ae7c", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0x139724a176a50f5089f4ed5bc653124e9d2c97f3", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x1f0d9b1835e7b2844d94b0038c80ac387a439fcc", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xfaa78f45f59770b9274d19bf7bf9b0a10fd5a851", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x80826c8570f2e3370c6d0d74fd0344bc963efca9", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 674, received: 674, sent: 0, txs: 13 },
    { wallet: "0xfa7d15c941da051bc4276ab341d3cb37cc09b73f", net: 633, received: 633, sent: 0, txs: 1 },
    { wallet: "0xd4ecca8f08ac6fadaed2cb141637c95ee4c74d43", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x3b88a3f26f6a282ade57783b59c0a8d00a087764", net: 367, received: 367, sent: 0, txs: 1 },
    { wallet: "0xb8294f8f8f6619a299688f1ca12cb967fc9a6176", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xee894331c3e81d72caacf755840b6e2a7a037e8b", net: 194, received: 25822, sent: 25628, txs: 3 },
    { wallet: "0xaacc720fdc9d9740f5b6795828bbe81baba22770", net: 167, received: 167, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x3f546b0124e20e118186689026fa1d6f29b5e602", net: 15, received: 15, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 8, received: 8, sent: 0, txs: 1 },
    { wallet: "0xedc6531b10297788cbb0fcfaee904a3803d3e2e4", net: 4, received: 4, sent: 0, txs: 1 },
    { wallet: "0x652beec615a5f2373715efed78483ca9bf982d5a", net: 0, received: 1233, sent: 1233, txs: 2 },
    { wallet: "0x0889e9327b98d7d1be3c301a4585ff3330502c9a", net: 0, received: 22680, sent: 22680, txs: 12 },
    { wallet: "0x111116053f09d34a7eae8102887004445176ca11", net: 0, received: 2696, sent: 2696, txs: 3 }
];

const WHALE_LABELS = {

};
