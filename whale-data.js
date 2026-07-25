// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 25, 2026 at 01:11 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 151;
const WHALE_TOTAL_VOLUME      = 0;
const WHALE_BIGGEST_SINGLE    = 0;

const WHALE_TRANSFERS = [

];

const WHALE_ACCUMULATORS = [
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 79936, received: 79936, sent: 0, txs: 8 },
    { wallet: "0x4015afef85dfe9020c37e094fca46e56854dc5c6", net: 37808, received: 37808, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 18552, received: 18552, sent: 0, txs: 5 },
    { wallet: "0x0ae67ae903a7fef1d3842cb2b65dd1d74889a4f1", net: 14384, received: 14384, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 10959, received: 10959, sent: 0, txs: 1 },
    { wallet: "0xbbf7e985e1e0ca6f854cecb5096274e8e797e8b4", net: 10836, received: 10836, sent: 0, txs: 3 },
    { wallet: "0x716e3fad60bc867449795cd624da34aab3dc381f", net: 8091, received: 8091, sent: 0, txs: 1 },
    { wallet: "0x0faeb60e1b406c2f84454f169a2512a5792e1aa8", net: 5971, received: 5971, sent: 0, txs: 2 },
    { wallet: "0x2ef1b2567aa33e1ba07f4fbd1a297223df28bafa", net: 5479, received: 33278, sent: 27798, txs: 3 },
    { wallet: "0x7764c8727dab012fce187df0736dab2b00ef691c", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0x23b59cf3e07c9cf1b5fd9a450ced9c9d67835588", net: 3047, received: 3047, sent: 0, txs: 1 },
    { wallet: "0xbd26b1dc74d73d441c1c25fb0fb7af22c2607eab", net: 1905, received: 1905, sent: 0, txs: 1 },
    { wallet: "0xec3b05d01d02b58b2392d8fccb7823d0c0094a00", net: 1862, received: 1862, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xc1c1fdadd3f76ff4e34f6f3f0b00f4db9b539a8f", net: 1390, received: 1390, sent: 0, txs: 1 },
    { wallet: "0x5532d65385e664eef604976354608a9dc4d9ae7c", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xf68f7da978ca3cd9acbcb80672c9bde2e050b35f", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 385, received: 385, sent: 0, txs: 13 },
    { wallet: "0x3620002e79381c888479e4c57074d8c385f8d932", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x3c9108700724d9d96cff2ac8979d6ad2a8d469ae", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd7ea18fb6224773215c8b40c91546c80af72d3b3", net: 90, received: 90, sent: 0, txs: 1 },
    { wallet: "0xc463097e33b71ad1c586c2f4b14699e05a1f1fae", net: 0, received: 1089, sent: 1089, txs: 2 },
    { wallet: "0x09582004268eae1508e0e379f882a4b317cfc91c", net: 0, received: 548, sent: 548, txs: 2 },
    { wallet: "0x747dd095f8b63a66d7c31f41bb22afb698224e36", net: 0, received: 548, sent: 548, txs: 2 },
    { wallet: "0x4a68582fa823b753896a49b2047dc7d8e2b73f30", net: 0, received: 1390, sent: 1390, txs: 2 },
    { wallet: "0x04c7b4e2db71b2abffe4f2131cf2754533cf32da", net: 0, received: 10836, sent: 10836, txs: 6 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 10836, sent: 10836, txs: 6 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 18589, sent: 18589, txs: 14 },
    { wallet: "0xdd7042708cb97a03dec630d0415e7fd424401709", net: 0, received: 9589, sent: 9589, txs: 6 },
    { wallet: "0xfe263102682933297cb65dc813e5193249769251", net: 0, received: 8091, sent: 8091, txs: 2 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 35551, sent: 35551, txs: 13 },
    { wallet: "0x66a9893cc07d91d95644aedd05d03f95e1dba8af", net: 0, received: 22239, sent: 22239, txs: 5 },
    { wallet: "0x238f6a3b38f8349947aea55c76bca0b690688fcf", net: 0, received: 13899, sent: 13899, txs: 2 },
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
    { wallet: "0xe76b4a33f7ee743edadb04a37555f52bdfc22207", net: 0, received: 815, sent: 815, txs: 2 }
];

const WHALE_LABELS = {

};
