// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 26, 2026 at 02:09 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 209;
const WHALE_TOTAL_VOLUME      = 159882;
const WHALE_BIGGEST_SINGLE    = 159882;

const WHALE_TRANSFERS = [
    { hash: "0xb3e42913ccb084ec019b75667817d7642af02142e06fda1c38b26b4ceacdea84", ts: 1784988623, from: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", to: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", amount: 159882, block: 25610291, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", net: 159882, received: 159882, sent: 0, txs: 1 },
    { wallet: "0x716e3fad60bc867449795cd624da34aab3dc381f", net: 62711, received: 62711, sent: 0, txs: 7 },
    { wallet: "0x9be5b8a7314552fa47feb1355cd5b4adc7bb7516", net: 27581, received: 27581, sent: 0, txs: 1 },
    { wallet: "0xce7219393216eee8f9768809494f1d2fb84d89ee", net: 20987, received: 20987, sent: 0, txs: 1 },
    { wallet: "0xbbf7e985e1e0ca6f854cecb5096274e8e797e8b4", net: 18078, received: 18078, sent: 0, txs: 5 },
    { wallet: "0xc15d42051db8bf7120bd5fe9529279911f9830a3", net: 13521, received: 13521, sent: 0, txs: 1 },
    { wallet: "0xb62dd1c4bf59563d30d597aeebdeee23d3f54789", net: 12740, received: 12740, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 12399, received: 12400, sent: 1, txs: 9 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 10959, received: 10959, sent: 0, txs: 1 },
    { wallet: "0x7764c8727dab012fce187df0736dab2b00ef691c", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0x23b59cf3e07c9cf1b5fd9a450ced9c9d67835588", net: 3047, received: 3047, sent: 0, txs: 1 },
    { wallet: "0xbd26b1dc74d73d441c1c25fb0fb7af22c2607eab", net: 1905, received: 1905, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xc1c1fdadd3f76ff4e34f6f3f0b00f4db9b539a8f", net: 1390, received: 1390, sent: 0, txs: 1 },
    { wallet: "0x5532d65385e664eef604976354608a9dc4d9ae7c", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x1ab2a7c6178467e8e2fd9c9a42d33024c8d6e1d0", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 410, received: 410, sent: 0, txs: 16 },
    { wallet: "0x3620002e79381c888479e4c57074d8c385f8d932", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x3c9108700724d9d96cff2ac8979d6ad2a8d469ae", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 112, received: 112, sent: 0, txs: 1 },
    { wallet: "0xd7ea18fb6224773215c8b40c91546c80af72d3b3", net: 90, received: 90, sent: 0, txs: 1 },
    { wallet: "0x401dacb7697a9c8dfbefc5fcc0102ca29aa007fd", net: 2, received: 2, sent: 0, txs: 1 },
    { wallet: "0x3dc8b1a6027d4ed55a91a8e86ee0b6d7b149539f", net: 2, received: 196, sent: 195, txs: 3 },
    { wallet: "0x6286b89bcfdea48b4c8b165dd2e479d3aca43564", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 40989, sent: 40989, txs: 18 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 39512, sent: 39512, txs: 15 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 0, received: 822, sent: 822, txs: 3 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 112, sent: 112, txs: 2 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 119927, sent: 119927, txs: 32 },
    { wallet: "0xfe263102682933297cb65dc813e5193249769251", net: 0, received: 62711, sent: 62711, txs: 14 },
    { wallet: "0x242857542359d247f3729cc374c774eb96121a7c", net: 0, received: 1363, sent: 1363, txs: 2 },
    { wallet: "0x2d84a18d4d1356420f3115e4d11e26680671c62d", net: 0, received: 2740, sent: 2740, txs: 6 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 0, received: 2740, sent: 2740, txs: 4 },
    { wallet: "0xae0562f6349e1b574a75248bd53848a3039751aa", net: 0, received: 17694, sent: 17694, txs: 5 },
    { wallet: "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae", net: 0, received: 18104, sent: 18104, txs: 7 },
    { wallet: "0x89c6340b1a1f4b25d36cd8b063d49045caf3f818", net: 0, received: 17694, sent: 17694, txs: 4 },
    { wallet: "0xdb3f60f5227e403d91200039b98fdfe97537cafe", net: 0, received: 17534, sent: 17534, txs: 2 },
    { wallet: "0xdb1e5d15658ae720658553c67eb37e16c5915890", net: 0, received: 17534, sent: 17534, txs: 2 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 6957, sent: 6957, txs: 7 },
    { wallet: "0xd4ecca8f08ac6fadaed2cb141637c95ee4c74d43", net: 0, received: 548, sent: 548, txs: 2 },
    { wallet: "0xcc85cc0a94da8df09a9a3841f587915d7b2178b1", net: 0, received: 407, sent: 407, txs: 2 },
    { wallet: "0xc10ee9031f2a0b84766a86b55a8d90f357910fb4", net: 0, received: 410, sent: 410, txs: 4 },
    { wallet: "0x36d9e742fc74c4d264a10fe1b5bab0171f7660d9", net: 0, received: 2319, sent: 2319, txs: 2 },
    { wallet: "0xcfdd72ad0a52276f9f03b5f579cb84a85e0060da", net: 0, received: 2329, sent: 2329, txs: 3 },
    { wallet: "0x6463a698e36c59fd41e99bee94da1e6e2d0e0a68", net: 0, received: 2329, sent: 2329, txs: 2 }
];

const WHALE_LABELS = {

};
