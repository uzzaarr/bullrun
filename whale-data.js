// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 26, 2026 at 01:06 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 162;
const WHALE_TOTAL_VOLUME      = 2308121;
const WHALE_BIGGEST_SINGLE    = 505427;

const WHALE_TRANSFERS = [
    { hash: "0x0b9207351346c133d8d573720ade17577e50072c6a5c87ab47f440e5d2bc0111", ts: 1785060947, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 505427, block: 25616307, type: "transfer" },
    { hash: "0x15c89242934798af62ff3595bbf3498ad3a0299a962a4250266a1d8e86da593e", ts: 1785060743, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 505427, block: 25616290, type: "transfer" },
    { hash: "0xdf60c2c7dc1365add251c2b93ae1d250c3f3a07892a8f8c58783f6aa23488c0d", ts: 1785060539, from: "0x6068146744760fef7ce41e15ce73bfcb85224db9", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 499248, block: 25616274, type: "transfer" },
    { hash: "0xbca6684ec65cd0360ab6013bfa5a7b79fff6056d78b591630f33101ad555ece9", ts: 1785060479, from: "0x6ba9f986d7ab9b884d356679e8af4ba5969415fa", to: "0x6068146744760fef7ce41e15ce73bfcb85224db9", amount: 499248, block: 25616269, type: "transfer" },
    { hash: "0x3227ecf348aa2594f645841c4527b40074ee31cc4d63bde700d513720adb4d03", ts: 1785060311, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x6ba9f986d7ab9b884d356679e8af4ba5969415fa", amount: 138889, block: 25616255, type: "transfer" },
    { hash: "0xb3e42913ccb084ec019b75667817d7642af02142e06fda1c38b26b4ceacdea84", ts: 1784988623, from: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", to: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", amount: 159882, block: 25610291, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 505427, received: 505427, sent: 0, txs: 1 },
    { wallet: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", net: 159882, received: 159882, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 55126, received: 560855, sent: 505729, txs: 10 },
    { wallet: "0x716e3fad60bc867449795cd624da34aab3dc381f", net: 54620, received: 54620, sent: 0, txs: 6 },
    { wallet: "0x9be5b8a7314552fa47feb1355cd5b4adc7bb7516", net: 49248, received: 49248, sent: 0, txs: 2 },
    { wallet: "0x35df393f608a4679fee86c2798754972362b0767", net: 22877, received: 22877, sent: 0, txs: 1 },
    { wallet: "0xce7219393216eee8f9768809494f1d2fb84d89ee", net: 20987, received: 20987, sent: 0, txs: 1 },
    { wallet: "0xb62dd1c4bf59563d30d597aeebdeee23d3f54789", net: 12740, received: 12740, sent: 0, txs: 1 },
    { wallet: "0x303b1bce3fa46bb73bd8a03d592720771b6a144d", net: 8219, received: 8219, sent: 0, txs: 1 },
    { wallet: "0xbbf7e985e1e0ca6f854cecb5096274e8e797e8b4", net: 7242, received: 7242, sent: 0, txs: 2 },
    { wallet: "0x50e8e34147929096ab69b3316ac0f1adf8b684c1", net: 4932, received: 4932, sent: 0, txs: 1 },
    { wallet: "0x71ebcff718d88d363622dcc4d4d7a6e75f370139", net: 3699, received: 3699, sent: 0, txs: 1 },
    { wallet: "0x23b59cf3e07c9cf1b5fd9a450ced9c9d67835588", net: 3047, received: 3047, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1101, received: 1101, sent: 0, txs: 13 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x1ab2a7c6178467e8e2fd9c9a42d33024c8d6e1d0", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 112, received: 112, sent: 0, txs: 1 },
    { wallet: "0x3dc8b1a6027d4ed55a91a8e86ee0b6d7b149539f", net: 2, received: 196, sent: 195, txs: 3 },
    { wallet: "0x10916b18ce6deef279f0ee66fab6b6c0e3461b78", net: 1, received: 987, sent: 986, txs: 4 },
    { wallet: "0xc15d42051db8bf7120bd5fe9529279911f9830a3", net: 1, received: 13521, sent: 13520, txs: 2 },
    { wallet: "0x6286b89bcfdea48b4c8b165dd2e479d3aca43564", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0x08fd3a0ed40260dbb0f5fbccfb98cf2ffb6f8653", net: 0, received: 2877, sent: 2876, txs: 3 },
    { wallet: "0xf8f87935a9919db73a5c1706b9a287874245ae54", net: 0, received: 2877, sent: 2877, txs: 2 },
    { wallet: "0xbc9971a01a3c9ccd21cfb8270423ea9c985626e6", net: 0, received: 980, sent: 980, txs: 2 },
    { wallet: "0xfba9bcac82f9e78d477c9445efa6e3b0eeef0e7a", net: 0, received: 21667, sent: 21667, txs: 2 },
    { wallet: "0xbb84118e278c1ab278d808c99a0c7e818a121a7c", net: 0, received: 52443, sent: 52443, txs: 2 },
    { wallet: "0x6886d7a170ad7856f988a8096148b0456b5066c9", net: 0, received: 52603, sent: 52603, txs: 3 },
    { wallet: "0xdecd6fd4e783b30ee688f5b8ac6f5db8054bf919", net: 0, received: 52603, sent: 52603, txs: 2 },
    { wallet: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", net: 0, received: 505427, sent: 505427, txs: 2 },
    { wallet: "0x6068146744760fef7ce41e15ce73bfcb85224db9", net: 0, received: 499248, sent: 499248, txs: 2 },
    { wallet: "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae", net: 0, received: 18106, sent: 18106, txs: 10 },
    { wallet: "0x401dacb7697a9c8dfbefc5fcc0102ca29aa007fd", net: 0, received: 2, sent: 2, txs: 2 },
    { wallet: "0xb9f7f9c706f1d014264f065408bf69635f8885ac", net: 0, received: 15342, sent: 15342, txs: 4 },
    { wallet: "0xcf720926891ea8641b899152a8149de71017b67c", net: 0, received: 15342, sent: 15342, txs: 2 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 15152, sent: 15152, txs: 6 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 38348, sent: 38348, txs: 10 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 28676, sent: 28676, txs: 9 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 112, sent: 112, txs: 2 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 59960, sent: 59960, txs: 17 },
    { wallet: "0xfe263102682933297cb65dc813e5193249769251", net: 0, received: 54620, sent: 54620, txs: 12 },
    { wallet: "0x242857542359d247f3729cc374c774eb96121a7c", net: 0, received: 1363, sent: 1363, txs: 2 },
    { wallet: "0x2d84a18d4d1356420f3115e4d11e26680671c62d", net: 0, received: 1370, sent: 1370, txs: 3 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 0, received: 1370, sent: 1370, txs: 2 },
    { wallet: "0xae0562f6349e1b574a75248bd53848a3039751aa", net: 0, received: 17694, sent: 17694, txs: 5 }
];

const WHALE_LABELS = {

};
