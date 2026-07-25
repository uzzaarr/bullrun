// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 25, 2026 at 07:57 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 158;
const WHALE_TOTAL_VOLUME      = 1424658;
const WHALE_BIGGEST_SINGLE    = 854795;

const WHALE_TRANSFERS = [
    { hash: "0x87db1e3fb6ccc32eb5f760528976f96a143654b976b2309f6f9329c2120318cc", ts: 1784885795, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x8b04b028c2b5b4cfa24a3d85d4d5c082f321094d", amount: 854795, block: 25601742, type: "transfer" },
    { hash: "0xba4885ae4bee21a652e66b3836b3aa1e1cf6c43e47d250bc20b7042542ab4c2e", ts: 1784885699, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xcd0cafe8cbe560315a941f016964c20f663744d4", amount: 569863, block: 25601734, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x8b04b028c2b5b4cfa24a3d85d4d5c082f321094d", net: 854795, received: 854795, sent: 0, txs: 1 },
    { wallet: "0xcd0cafe8cbe560315a941f016964c20f663744d4", net: 513794, received: 569863, sent: 56069, txs: 8 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 79936, received: 79936, sent: 0, txs: 8 },
    { wallet: "0x4015afef85dfe9020c37e094fca46e56854dc5c6", net: 37808, received: 37808, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 28784, received: 28784, sent: 0, txs: 7 },
    { wallet: "0x0ae67ae903a7fef1d3842cb2b65dd1d74889a4f1", net: 14384, received: 14384, sent: 0, txs: 1 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 11342, received: 11342, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 10959, received: 10959, sent: 0, txs: 1 },
    { wallet: "0x187fe1a8b76c60b85c00a2819152ff00ff642386", net: 10136, received: 10136, sent: 0, txs: 1 },
    { wallet: "0x5d7f7f0fa4fb9a90b54435fb9f8f7a29d2d62855", net: 6000, received: 6000, sent: 0, txs: 1 },
    { wallet: "0x2ef1b2567aa33e1ba07f4fbd1a297223df28bafa", net: 5479, received: 33278, sent: 27798, txs: 3 },
    { wallet: "0xc79b289d73e7916da768dc9b1daedc9743f6b1d5", net: 5282, received: 5282, sent: 0, txs: 1 },
    { wallet: "0x7764c8727dab012fce187df0736dab2b00ef691c", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0x6f983e1cdab14ed5b72686df0f308b5a3c5acd3d", net: 2877, received: 2877, sent: 0, txs: 1 },
    { wallet: "0xc935272c374e290de31dedba7aba3314af8aec4e", net: 1984, received: 1984, sent: 0, txs: 1 },
    { wallet: "0xbd26b1dc74d73d441c1c25fb0fb7af22c2607eab", net: 1905, received: 1905, sent: 0, txs: 1 },
    { wallet: "0xec3b05d01d02b58b2392d8fccb7823d0c0094a00", net: 1862, received: 1862, sent: 0, txs: 1 },
    { wallet: "0x5532d65385e664eef604976354608a9dc4d9ae7c", net: 1233, received: 3699, sent: 2466, txs: 3 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xf68f7da978ca3cd9acbcb80672c9bde2e050b35f", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 378, received: 378, sent: 0, txs: 13 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd2384bf5eb365a72efb81b1c1f26acd30cc34c36", net: 3, received: 3, sent: 0, txs: 1 },
    { wallet: "0x82d9a407f99a95db4671e7021d625cbd0787a407", net: 1, received: 1, sent: 0, txs: 2 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 34060, sent: 34060, txs: 13 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 6261, sent: 6261, txs: 8 },
    { wallet: "0x2d6b34df065a635ea57eec21e0528641da6a2340", net: 0, received: 2466, sent: 2466, txs: 3 },
    { wallet: "0x568d7cf85017da98283703591aeac41554c4d76f", net: 0, received: 2466, sent: 2466, txs: 2 },
    { wallet: "0x2646382abb743f12683dbab24361f745abb8427c", net: 0, received: 951, sent: 951, txs: 2 },
    { wallet: "0x88c40cd47ec72e481051c1c495fd0e7a23a30cee", net: 0, received: 959, sent: 959, txs: 3 },
    { wallet: "0x08ac7cdcab984359b98da3431df0147f326c0ef6", net: 0, received: 959, sent: 959, txs: 2 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 79936, sent: 79936, txs: 20 },
    { wallet: "0x64e1b0de6c289d9484a0788e15051527a03a4ae8", net: 0, received: 1360, sent: 1360, txs: 2 },
    { wallet: "0x2d84a18d4d1356420f3115e4d11e26680671c62d", net: 0, received: 1370, sent: 1370, txs: 3 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 0, received: 1370, sent: 1370, txs: 2 },
    { wallet: "0x36ba572345210c5f03521b8bf7b0b198367adcf5", net: 0, received: 3288, sent: 3288, txs: 3 },
    { wallet: "0xbcfe88e74a030f05684c95da7d11afd3342ada82", net: 0, received: 3288, sent: 3288, txs: 2 },
    { wallet: "0xe76b4a33f7ee743edadb04a37555f52bdfc22207", net: 0, received: 815, sent: 815, txs: 2 },
    { wallet: "0x950618712a5cd5a221c8a95930947cb76576eb76", net: 0, received: 822, sent: 822, txs: 3 },
    { wallet: "0xdaffdcbca50c6c35505460db58c0fc29ca19534f", net: 0, received: 3288, sent: 3288, txs: 2 },
    { wallet: "0x3de0d70dedf741f77abb5894ca24c8e97c265d4b", net: 0, received: 822, sent: 822, txs: 2 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 0, received: 822, sent: 822, txs: 3 },
    { wallet: "0x8f64a54fac8e1577a740b363128ff72f49a7a93f", net: 0, received: 14336, sent: 14336, txs: 2 },
    { wallet: "0xcf96bd96aa81d08e1bec7d5af06b18f00e8a0640", net: 0, received: 14384, sent: 14384, txs: 3 },
    { wallet: "0x6b67a3e46e45916a199bb58d060cc5fc728db778", net: 0, received: 14384, sent: 14384, txs: 2 },
    { wallet: "0x0ce2b366e425d7e53904ea61cfb2ea03b06283f7", net: 0, received: 822, sent: 822, txs: 3 },
    { wallet: "0xa0952edc243077c05148828cc5432c37486858c3", net: 0, received: 822, sent: 822, txs: 2 }
];

const WHALE_LABELS = {

};
