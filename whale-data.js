// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 22, 2026 at 03:35 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 100;
const WHALE_TOTAL_VOLUME      = 2310888;
const WHALE_BIGGEST_SINGLE    = 605350;

const WHALE_TRANSFERS = [
    { hash: "0x3f2a0575251586c80ce51c2082ba4b79fca57a1147709a54bfc3a1ac16466ba3", ts: 1782099203, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xa0206aa3938f7892d01832150cd13e19c0b130d1", amount: 130137, block: 25370471, type: "transfer" },
    { hash: "0x82dd63263eb0c750e3b2a319335a7b871149f94330db8ac5976bf9cfccb3739c", ts: 1782099167, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x748f9823870fa6afb6c7e15ecbe46a4942d68a8b", amount: 100000, block: 25370468, type: "transfer" },
    { hash: "0x6ffd56660b15a0f172d0453b3575965fb83bd5b34c06f443198da917dd3cf5e1", ts: 1782099071, from: "0xebae2d568b9853dcecd328276241a63345b3ce7a", to: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", amount: 605350, block: 25370460, type: "transfer" },
    { hash: "0xa52862a6718f390c0b69113f3796616184f3317e4b26517caff46ac46102bdf0", ts: 1782098771, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xebae2d568b9853dcecd328276241a63345b3ce7a", amount: 605350, block: 25370435, type: "transfer" },
    { hash: "0x79e7ad324f7df8a75b1456b96b3cd4f8c7e1993f7b05877ed1521c3521000154", ts: 1782031163, from: "0x16877b02f17e86fef7bdaa217f705a0807dea7a7", to: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", amount: 201274, block: 25364827, type: "transfer" },
    { hash: "0xc63e89663fb9f4027aea33f2e00a234ceaa5b27fd8e9cefa1e91d8a6d93cc7a5", ts: 1782029939, from: "0xc5fe50deb784983b0967b22fafbf239841518829", to: "0x16877b02f17e86fef7bdaa217f705a0807dea7a7", amount: 201274, block: 25364725, type: "transfer" },
    { hash: "0xbb6de1233041ecac77f8ee5730afa29825796a94a71e586e54e28d2c76075bfe", ts: 1782029231, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xc5fe50deb784983b0967b22fafbf239841518829", amount: 201274, block: 25364667, type: "transfer" },
    { hash: "0x2402f04013690e8c9da6dcbd729d652fcb95ff55ca584756d426f486ffe4392f", ts: 1782014075, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 266229, block: 25363413, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", net: 605350, received: 605350, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 266229, received: 266229, sent: 0, txs: 1 },
    { wallet: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", net: 206405, received: 206405, sent: 0, txs: 2 },
    { wallet: "0xa0206aa3938f7892d01832150cd13e19c0b130d1", net: 130137, received: 130137, sent: 0, txs: 1 },
    { wallet: "0x748f9823870fa6afb6c7e15ecbe46a4942d68a8b", net: 100000, received: 100000, sent: 0, txs: 1 },
    { wallet: "0x0d51d069ecf91b13db666708f3e1610af79b9eed", net: 25037, received: 25037, sent: 0, txs: 1 },
    { wallet: "0x47670e064a9cf54102481f199915e392ce357d60", net: 24658, received: 24658, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 12274, received: 12914, sent: 641, txs: 7 },
    { wallet: "0x98f870ab30c0530b2e19d1adf5285200f52305a7", net: 9985, received: 9985, sent: 0, txs: 2 },
    { wallet: "0x4ff2f85d8c0864f96de3da4b41272b0abdcca2f5", net: 7397, received: 7397, sent: 0, txs: 1 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 7358, received: 7358, sent: 0, txs: 1 },
    { wallet: "0xdaffdcbca50c6c35505460db58c0fc29ca19534f", net: 6575, received: 6575, sent: 0, txs: 1 },
    { wallet: "0xd1966596e0d9c4033d19b5e12d1f14b183dfa2c5", net: 4521, received: 4521, sent: 0, txs: 1 },
    { wallet: "0xb2730eb750573322e015765076dd5981204e8503", net: 4329, received: 4329, sent: 0, txs: 1 },
    { wallet: "0x3621680aeefc7aaedaece7b41f33af48ea22ef52", net: 3699, received: 3699, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 2740, received: 2740, sent: 0, txs: 1 },
    { wallet: "0x3620002e79381c888479e4c57074d8c385f8d932", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0x441a7d5b829530afeda825043e6daf75535b72bb", net: 2329, received: 2329, sent: 0, txs: 1 },
    { wallet: "0xbb0b683ebd2b2892ed03c0f4871cea073468ab75", net: 2055, received: 2055, sent: 0, txs: 1 },
    { wallet: "0x4005d4b50140bcf6221b3ae8df455e10600a02c0", net: 1781, received: 1781, sent: 0, txs: 1 },
    { wallet: "0x1b0b1ad3e6a2fb69c48c2913fea012bc38f0a2e9", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x41ae288f0a798046b33720c3dc80e0351892d6b9", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0xe7ff8186307f7781bce361dbe7245e1330550c52", net: 1233, received: 1233, sent: 0, txs: 2 },
    { wallet: "0x1f0d9b1835e7b2844d94b0038c80ac387a439fcc", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x40b2f1262a394a69f4446ceebca52bc58eb92bf4", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x6ecac0b40c73a8a776d8e0cd304440ab952b3c64", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xcfa692be640c86bbabe30100e71fc955fdca0ab7", net: 511, received: 511, sent: 0, txs: 1 },
    { wallet: "0xb5fa089ed78657e10d02c2e9e2a9f673deb15c33", net: 486, received: 486, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 382, received: 382, sent: 0, txs: 2 },
    { wallet: "0xe281cb25c08d549659100e2688029aa667653395", net: 154, received: 154, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 152, received: 152, sent: 0, txs: 8 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x5987d62c93f864fff531f79c1f6c8da51eaffce2", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd35bc6fbf44781d488b08a3a5cb02aa010ad27d6", net: 18, received: 18, sent: 0, txs: 1 },
    { wallet: "0xebae2d568b9853dcecd328276241a63345b3ce7a", net: 0, received: 605350, sent: 605350, txs: 2 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 382, sent: 382, txs: 4 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 29341, sent: 29341, txs: 8 },
    { wallet: "0x3b817aba33c77e92df6b393b676fd1c48d221fe2", net: 0, received: 5867, sent: 5867, txs: 2 },
    { wallet: "0x08fd3a0ed40260dbb0f5fbccfb98cf2ffb6f8653", net: 0, received: 5890, sent: 5890, txs: 3 },
    { wallet: "0xf8f87935a9919db73a5c1706b9a287874245ae54", net: 0, received: 5890, sent: 5890, txs: 2 },
    { wallet: "0x5e83b45dd143d4c3ccfd760749692c792eb9237f", net: 0, received: 5131, sent: 5131, txs: 2 },
    { wallet: "0xf5de24ff32bbb1aff81c5a7d9b1e54adea865a59", net: 0, received: 2728, sent: 2728, txs: 2 },
    { wallet: "0x2d84a18d4d1356420f3115e4d11e26680671c62d", net: 0, received: 2740, sent: 2740, txs: 3 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 0, received: 2740, sent: 2740, txs: 3 },
    { wallet: "0xad729fcd02e52938c29284d0ab3b4f1c3f66802c", net: 0, received: 548, sent: 548, txs: 2 },
    { wallet: "0xa4544bd0fdb27ddf1feb629a48ff2c917a91ebf8", net: 0, received: 2728, sent: 2728, txs: 2 }
];

const WHALE_LABELS = {

};
