// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 30, 2026 at 01:44 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 171;
const WHALE_TOTAL_VOLUME      = 17933998;
const WHALE_BIGGEST_SINGLE    = 5900000;

const WHALE_TRANSFERS = [
    { hash: "0x141871ddae2f678f8fc2a52ef68fb986abe32d74b008e4e702cfe2ce9b75cc90", ts: 1785413783, from: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 235998, block: 25645613, type: "transfer" },
    { hash: "0xc8230a8d66fb5493afb22761bc0a3101b5155deaccca2d80722965756946b801", ts: 1785340787, from: "0x8143a1780b70d275587850c02222baf2d1ee49a8", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 5899000, block: 25639544, type: "transfer" },
    { hash: "0xf0fb3d0080172dc69a9ca192db41b140b7f9d7ff88dda1174c32787a8f1ef6b3", ts: 1785340355, from: "0x7fe4b2632f5ae6d930677d662af26bc0a06672b3", to: "0x8143a1780b70d275587850c02222baf2d1ee49a8", amount: 5899000, block: 25639508, type: "transfer" },
    { hash: "0x5d03970906dfb4e423bdeff1a8c46cd623b14b4840bc5cac08d812788efc3111", ts: 1785337223, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x7fe4b2632f5ae6d930677d662af26bc0a06672b3", amount: 5900000, block: 25639248, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 6137231, received: 6137231, sent: 0, txs: 4 },
    { wallet: "0x19888e92ee029e6641e178ebd2346fc1f7d845bd", net: 72877, received: 72877, sent: 0, txs: 1 },
    { wallet: "0xb8001c3ec9aa1985f6c747e25c28324e4a361ec1", net: 49965, received: 99866, sent: 49901, txs: 2 },
    { wallet: "0x198346a51e6a1b18bc2efed80ec9e792791e846e", net: 49901, received: 49901, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 44491, received: 76338, sent: 31848, txs: 7 },
    { wallet: "0xeac35e5fd9b9e0a6bad0dcd1da8fda75a2a642c1", net: 38321, received: 90835, sent: 52514, txs: 7 },
    { wallet: "0x999b2dc7d728ef06953f33c1f44c450b200e5588", net: 31848, received: 31848, sent: 0, txs: 1 },
    { wallet: "0xb8569931164b4c3a4b596c48d0e97b9089344e3a", net: 31597, received: 31597, sent: 0, txs: 1 },
    { wallet: "0x74b06101e70d3b3f30d277bbbdd8cb276a2e4cdc", net: 24795, received: 24795, sent: 0, txs: 1 },
    { wallet: "0x38519da87fb8c5bab2b22d0aab6a4c50b0807d75", net: 19444, received: 19444, sent: 0, txs: 1 },
    { wallet: "0x716e3fad60bc867449795cd624da34aab3dc381f", net: 10059, received: 10059, sent: 0, txs: 1 },
    { wallet: "0xa215ad4a812b222cd204e4c54b35aa37ffafc0a3", net: 9315, received: 9315, sent: 0, txs: 1 },
    { wallet: "0x7b9d43ef9d740bc6b6e593e1fc7c4b910a75fd00", net: 8658, received: 10861, sent: 2203, txs: 11 },
    { wallet: "0xe5e6ee25986549a41a61ae31080719d6db316580", net: 6950, received: 6950, sent: 0, txs: 1 },
    { wallet: "0xbc85cd88002e4e8fda662d4b102799fe0662ac8b", net: 6849, received: 6849, sent: 0, txs: 1 },
    { wallet: "0x1abdb5af79b603452db3eabfd6ce09b67a8915e8", net: 6027, received: 6027, sent: 0, txs: 1 },
    { wallet: "0xdd209b5fec3d1024b32be2be972b92ca663ef957", net: 5595, received: 5595, sent: 0, txs: 1 },
    { wallet: "0xd06aa22ecc13018a77796e8832718a3d17d7c2ec", net: 5205, received: 5205, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 4384, received: 4384, sent: 0, txs: 1 },
    { wallet: "0x16fcf0b577fef57595de4926803ab9c21004cd80", net: 3059, received: 3059, sent: 0, txs: 1 },
    { wallet: "0x20694bb5c906ee71e696587be233284f995564b7", net: 2740, received: 2740, sent: 0, txs: 1 },
    { wallet: "0x6f983e1cdab14ed5b72686df0f308b5a3c5acd3d", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0x1894c5c5d9d976a7971a0ccd252f2f6064efd3a8", net: 1918, received: 1918, sent: 0, txs: 1 },
    { wallet: "0x5987d62c93f864fff531f79c1f6c8da51eaffce2", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x0f36eb8f227aa28e2eb2705724233addabd61e15", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0x139724a176a50f5089f4ed5bc653124e9d2c97f3", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x1f0d9b1835e7b2844d94b0038c80ac387a439fcc", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xfaa78f45f59770b9274d19bf7bf9b0a10fd5a851", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x80826c8570f2e3370c6d0d74fd0344bc963efca9", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 713, received: 713, sent: 0, txs: 13 },
    { wallet: "0xfa7d15c941da051bc4276ab341d3cb37cc09b73f", net: 633, received: 633, sent: 0, txs: 1 },
    { wallet: "0xd4ecca8f08ac6fadaed2cb141637c95ee4c74d43", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x6b0125f1356c12fc4cee7e941e03a7bd5b4c8100", net: 500, received: 500, sent: 0, txs: 1 },
    { wallet: "0x3b88a3f26f6a282ade57783b59c0a8d00a087764", net: 367, received: 367, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xb8294f8f8f6619a299688f1ca12cb967fc9a6176", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xee894331c3e81d72caacf755840b6e2a7a037e8b", net: 194, received: 25822, sent: 25628, txs: 3 },
    { wallet: "0xaacc720fdc9d9740f5b6795828bbe81baba22770", net: 167, received: 167, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 64, received: 64, sent: 0, txs: 1 },
    { wallet: "0x3f546b0124e20e118186689026fa1d6f29b5e602", net: 15, received: 15, sent: 0, txs: 1 },
    { wallet: "0xedc6531b10297788cbb0fcfaee904a3803d3e2e4", net: 10, received: 10, sent: 0, txs: 2 },
    { wallet: "0xfad4c8f1e71e4c56b87733bd916ff7cff46c6c29", net: 8, received: 8, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 8, received: 8, sent: 0, txs: 1 },
    { wallet: "0xad01c20d5886137e056775af56915de824c8fce5", net: 2, received: 2, sent: 0, txs: 6 },
    { wallet: "0xc06ebbefd94032b85424d51906e2a335efae264b", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0xe88d8498cfce81ddf785d1881ce0ed9035da3e79", net: 0, received: 6950, sent: 6950, txs: 2 },
    { wallet: "0x8e7cfd9cc2a5427e72494226bdf45b032f9baee8", net: 0, received: 986, sent: 986, txs: 2 }
];

const WHALE_LABELS = {

};
