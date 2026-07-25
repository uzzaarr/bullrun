// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 25, 2026 at 06:58 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 165;
const WHALE_TOTAL_VOLUME      = 159882;
const WHALE_BIGGEST_SINGLE    = 159882;

const WHALE_TRANSFERS = [
    { hash: "0xb3e42913ccb084ec019b75667817d7642af02142e06fda1c38b26b4ceacdea84", ts: 1784988623, from: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", to: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", amount: 159882, block: 25610291, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", net: 159882, received: 159882, sent: 0, txs: 1 },
    { wallet: "0x9be5b8a7314552fa47feb1355cd5b4adc7bb7516", net: 27581, received: 27581, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 22646, received: 22647, sent: 1, txs: 7 },
    { wallet: "0xbbf7e985e1e0ca6f854cecb5096274e8e797e8b4", net: 18078, received: 18078, sent: 0, txs: 5 },
    { wallet: "0x716e3fad60bc867449795cd624da34aab3dc381f", net: 16176, received: 16176, sent: 0, txs: 2 },
    { wallet: "0x0ae67ae903a7fef1d3842cb2b65dd1d74889a4f1", net: 14384, received: 14384, sent: 0, txs: 1 },
    { wallet: "0xb62dd1c4bf59563d30d597aeebdeee23d3f54789", net: 12740, received: 12740, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 10959, received: 10959, sent: 0, txs: 1 },
    { wallet: "0x7764c8727dab012fce187df0736dab2b00ef691c", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0x23b59cf3e07c9cf1b5fd9a450ced9c9d67835588", net: 3047, received: 3047, sent: 0, txs: 1 },
    { wallet: "0xbd26b1dc74d73d441c1c25fb0fb7af22c2607eab", net: 1905, received: 1905, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xc1c1fdadd3f76ff4e34f6f3f0b00f4db9b539a8f", net: 1390, received: 1390, sent: 0, txs: 1 },
    { wallet: "0x5532d65385e664eef604976354608a9dc4d9ae7c", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xf68f7da978ca3cd9acbcb80672c9bde2e050b35f", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x1ab2a7c6178467e8e2fd9c9a42d33024c8d6e1d0", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 414, received: 414, sent: 0, txs: 14 },
    { wallet: "0x3620002e79381c888479e4c57074d8c385f8d932", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x3c9108700724d9d96cff2ac8979d6ad2a8d469ae", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd7ea18fb6224773215c8b40c91546c80af72d3b3", net: 90, received: 90, sent: 0, txs: 1 },
    { wallet: "0x3dc8b1a6027d4ed55a91a8e86ee0b6d7b149539f", net: 2, received: 196, sent: 195, txs: 3 },
    { wallet: "0x6286b89bcfdea48b4c8b165dd2e479d3aca43564", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0x04c7b4e2db71b2abffe4f2131cf2754533cf32da", net: 0, received: 18078, sent: 18078, txs: 10 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 18078, sent: 18078, txs: 10 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 18728, sent: 18728, txs: 14 },
    { wallet: "0xdedd1067c722ed993a7bcc3a631d8bb96d9e39e5", net: 0, received: 1781, sent: 1781, txs: 3 },
    { wallet: "0x0889e9327b98d7d1be3c301a4585ff3330502c9a", net: 0, received: 5479, sent: 5479, txs: 2 },
    { wallet: "0xfe263102682933297cb65dc813e5193249769251", net: 0, received: 16176, sent: 16176, txs: 4 },
    { wallet: "0x829736d0a82a0468fafc3ed004af00be2411c636", net: 0, received: 27581, sent: 27581, txs: 2 },
    { wallet: "0x9da85ba4e27c624d5182f144c14efcab2c8075ab", net: 0, received: 4095, sent: 4095, txs: 2 },
    { wallet: "0xd9f04ab1db28774e1c0fe8ab6e764f25dc02161c", net: 0, received: 4110, sent: 4110, txs: 3 },
    { wallet: "0xae0562f6349e1b574a75248bd53848a3039751aa", net: 0, received: 2278, sent: 2278, txs: 4 },
    { wallet: "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae", net: 0, received: 160, sent: 160, txs: 2 },
    { wallet: "0x89c6340b1a1f4b25d36cd8b063d49045caf3f818", net: 0, received: 160, sent: 160, txs: 2 },
    { wallet: "0x1861db3c3daed74cbd360c7a431de05edc771db2", net: 0, received: 160, sent: 160, txs: 2 },
    { wallet: "0x163f3103de041d25464e2c8a4f8f3187ec1856e0", net: 0, received: 5558, sent: 5558, txs: 4 },
    { wallet: "0x22ecf2bed494976503a8087add30e134c30fbd98", net: 0, received: 4224, sent: 4224, txs: 2 },
    { wallet: "0x40a88150427465cca3911358edc96cf16f06e431", net: 0, received: 5558, sent: 5558, txs: 3 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 99932, sent: 99932, txs: 26 },
    { wallet: "0x4433b9e33b2bf0a901613ce302857475d53fe010", net: 0, received: 5971, sent: 5971, txs: 2 },
    { wallet: "0x0faeb60e1b406c2f84454f169a2512a5792e1aa8", net: 0, received: 5971, sent: 5971, txs: 3 },
    { wallet: "0xc463097e33b71ad1c586c2f4b14699e05a1f1fae", net: 0, received: 1089, sent: 1089, txs: 2 },
    { wallet: "0x09582004268eae1508e0e379f882a4b317cfc91c", net: 0, received: 548, sent: 548, txs: 2 },
    { wallet: "0x747dd095f8b63a66d7c31f41bb22afb698224e36", net: 0, received: 548, sent: 548, txs: 2 },
    { wallet: "0x4a68582fa823b753896a49b2047dc7d8e2b73f30", net: 0, received: 1390, sent: 1390, txs: 2 },
    { wallet: "0xdd7042708cb97a03dec630d0415e7fd424401709", net: 0, received: 9589, sent: 9589, txs: 6 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 6129, sent: 6129, txs: 6 }
];

const WHALE_LABELS = {

};
