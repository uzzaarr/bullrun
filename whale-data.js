// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 25, 2026 at 02:05 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 125;
const WHALE_TOTAL_VOLUME      = 1424658;
const WHALE_BIGGEST_SINGLE    = 854795;

const WHALE_TRANSFERS = [
    { hash: "0x87db1e3fb6ccc32eb5f760528976f96a143654b976b2309f6f9329c2120318cc", ts: 1784885795, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x8b04b028c2b5b4cfa24a3d85d4d5c082f321094d", amount: 854795, block: 25601742, type: "transfer" },
    { hash: "0xba4885ae4bee21a652e66b3836b3aa1e1cf6c43e47d250bc20b7042542ab4c2e", ts: 1784885699, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xcd0cafe8cbe560315a941f016964c20f663744d4", amount: 569863, block: 25601734, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x8b04b028c2b5b4cfa24a3d85d4d5c082f321094d", net: 854795, received: 854795, sent: 0, txs: 1 },
    { wallet: "0xcd0cafe8cbe560315a941f016964c20f663744d4", net: 513794, received: 569863, sent: 56069, txs: 8 },
    { wallet: "0x4015afef85dfe9020c37e094fca46e56854dc5c6", net: 37808, received: 37808, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 25658, received: 25658, sent: 0, txs: 4 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 19969, received: 19969, sent: 0, txs: 2 },
    { wallet: "0x0ae67ae903a7fef1d3842cb2b65dd1d74889a4f1", net: 14384, received: 14384, sent: 0, txs: 1 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 11342, received: 11342, sent: 0, txs: 1 },
    { wallet: "0x187fe1a8b76c60b85c00a2819152ff00ff642386", net: 10136, received: 10136, sent: 0, txs: 1 },
    { wallet: "0x5d7f7f0fa4fb9a90b54435fb9f8f7a29d2d62855", net: 6000, received: 6000, sent: 0, txs: 1 },
    { wallet: "0x2ef1b2567aa33e1ba07f4fbd1a297223df28bafa", net: 5479, received: 33278, sent: 27798, txs: 3 },
    { wallet: "0xc79b289d73e7916da768dc9b1daedc9743f6b1d5", net: 5282, received: 5282, sent: 0, txs: 1 },
    { wallet: "0x6f983e1cdab14ed5b72686df0f308b5a3c5acd3d", net: 2877, received: 2877, sent: 0, txs: 1 },
    { wallet: "0xc935272c374e290de31dedba7aba3314af8aec4e", net: 1984, received: 1984, sent: 0, txs: 1 },
    { wallet: "0xec3b05d01d02b58b2392d8fccb7823d0c0094a00", net: 1862, received: 1862, sent: 0, txs: 1 },
    { wallet: "0xedc6b3f95f3e4ef39318a13bd1757716686d269a", net: 1000, received: 1000, sent: 0, txs: 1 },
    { wallet: "0xf68f7da978ca3cd9acbcb80672c9bde2e050b35f", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x3620002e79381c888479e4c57074d8c385f8d932", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x9df14235393c7a9d2bc38db6c12c61b699e094c6", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 214, received: 214, sent: 0, txs: 9 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x984e6b6601ad9638acc1f393955d102e72ca7997", net: 7, received: 7, sent: 0, txs: 1 },
    { wallet: "0xd2384bf5eb365a72efb81b1c1f26acd30cc34c36", net: 3, received: 3, sent: 0, txs: 1 },
    { wallet: "0x82d9a407f99a95db4671e7021d625cbd0787a407", net: 1, received: 1, sent: 0, txs: 2 },
    { wallet: "0x8f64a54fac8e1577a740b363128ff72f49a7a93f", net: 0, received: 14336, sent: 14336, txs: 2 },
    { wallet: "0xcf96bd96aa81d08e1bec7d5af06b18f00e8a0640", net: 0, received: 14384, sent: 14384, txs: 3 },
    { wallet: "0x6b67a3e46e45916a199bb58d060cc5fc728db778", net: 0, received: 14384, sent: 14384, txs: 2 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 32835, sent: 32835, txs: 13 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 5037, sent: 5037, txs: 8 },
    { wallet: "0x0ce2b366e425d7e53904ea61cfb2ea03b06283f7", net: 0, received: 822, sent: 822, txs: 3 },
    { wallet: "0xa0952edc243077c05148828cc5432c37486858c3", net: 0, received: 822, sent: 822, txs: 2 },
    { wallet: "0xae0562f6349e1b574a75248bd53848a3039751aa", net: 0, received: 2617, sent: 2617, txs: 4 },
    { wallet: "0x337685fdab40d39bd02028545a4ffa7d287cc3e2", net: 0, received: 2617, sent: 2617, txs: 4 },
    { wallet: "0xfe36d8ad2d4fbc2f27c4982dbf81b881bf8b2b07", net: 0, received: 1390, sent: 1390, txs: 2 },
    { wallet: "0x562130d8c7a5e6937a9ba8d6359317a2494e3284", net: 0, received: 1390, sent: 1390, txs: 2 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 19969, sent: 19969, txs: 5 },
    { wallet: "0x1f2f10d1c40777ae1da742455c65828ff36df387", net: 0, received: 9322, sent: 9322, txs: 2 },
    { wallet: "0x5a5ade0e45dd261ebd5762ffc4e6cf1acf69c87b", net: 0, received: 1891, sent: 1891, txs: 3 },
    { wallet: "0x4a1a379f549d22df220acd5d0344240f0cb03293", net: 0, received: 1862, sent: 1862, txs: 2 },
    { wallet: "0x20694bb5c906ee71e696587be233284f995564b7", net: 0, received: 1644, sent: 1644, txs: 3 },
    { wallet: "0x3822d8b402d6fcbe3187b08b1733ae2e2e46a2d3", net: 0, received: 1644, sent: 1644, txs: 2 },
    { wallet: "0x1ec97b855540f5495895868fea813ffc955ec714", net: 0, received: 37808, sent: 37808, txs: 2 },
    { wallet: "0x66a9893cc07d91d95644aedd05d03f95e1dba8af", net: 0, received: 8339, sent: 8339, txs: 2 },
    { wallet: "0xb150a2d34987a7d074668d27aff194d1723292f8", net: 0, received: 8339, sent: 8339, txs: 2 }
];

const WHALE_LABELS = {

};
