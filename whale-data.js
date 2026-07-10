// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 10, 2026 at 09:24 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 78;
const WHALE_TOTAL_VOLUME      = 6243593;
const WHALE_BIGGEST_SINGLE    = 2500000;

const WHALE_TRANSFERS = [
    { hash: "0x411f1889a43d90009ac5f9ee5110dd910805b64337401e22e28003c2039966fb", ts: 1783661243, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x4bf6a3177ef5db01aec5578b5ad7058f228c7788", amount: 1000000, block: 25500092, type: "transfer" },
    { hash: "0x6516ef5327e9b97040dc8818645f723eec550f0b10445f04eac74ea7bec95331", ts: 1783660451, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xb5eadb7db50a4fcb81827c2c7a2ca40f564214a6", amount: 2500000, block: 25500026, type: "transfer" },
    { hash: "0x23dad96177a9db572bbabc963b09d6d5daedcbab60f38ad988f1ef3cb80dd6fd", ts: 1783660139, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x3fb012b74468eb3adad7aadedcb53e678f5faee2", amount: 2500000, block: 25500000, type: "transfer" },
    { hash: "0x1c2d7c7bec47431b37cd08706b55fca98b656ad24bfbc7dda794e33e8b8097df", ts: 1783599143, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", amount: 243593, block: 25494944, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xb5eadb7db50a4fcb81827c2c7a2ca40f564214a6", net: 2500000, received: 2500000, sent: 0, txs: 1 },
    { wallet: "0x3fb012b74468eb3adad7aadedcb53e678f5faee2", net: 2500000, received: 2500000, sent: 0, txs: 1 },
    { wallet: "0x4bf6a3177ef5db01aec5578b5ad7058f228c7788", net: 1000000, received: 1000000, sent: 0, txs: 1 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 243593, received: 243593, sent: 0, txs: 1 },
    { wallet: "0x19888e92ee029e6641e178ebd2346fc1f7d845bd", net: 72877, received: 72877, sent: 0, txs: 1 },
    { wallet: "0x57ba479e67ae2107ebf5b4bf6f45761eeacbdbba", net: 47260, received: 47260, sent: 0, txs: 1 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 40006, received: 40006, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 27957, received: 27957, sent: 0, txs: 1 },
    { wallet: "0x035ae7d933dcbfe617ffba194a88af0c2867b90c", net: 22539, received: 22539, sent: 0, txs: 1 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 19898, received: 19898, sent: 0, txs: 2 },
    { wallet: "0x9be5b8a7314552fa47feb1355cd5b4adc7bb7516", net: 19779, received: 19779, sent: 0, txs: 1 },
    { wallet: "0xbf83ce96835bb66eb074ad0ec470dad133448581", net: 18904, received: 18904, sent: 0, txs: 1 },
    { wallet: "0x47670e064a9cf54102481f199915e392ce357d60", net: 9863, received: 9863, sent: 0, txs: 1 },
    { wallet: "0xe5e6ee25986549a41a61ae31080719d6db316580", net: 8286, received: 8286, sent: 0, txs: 1 },
    { wallet: "0x311f520e51b3f5a6354d4e620443edb7ad59e996", net: 6575, received: 6575, sent: 0, txs: 1 },
    { wallet: "0x1a996eb2a69423926d60973fc3d73cf1fa847a2f", net: 4384, received: 4384, sent: 0, txs: 1 },
    { wallet: "0xe94a146d6bb643c4439405495ddee4472eb115ac", net: 4110, received: 4110, sent: 0, txs: 1 },
    { wallet: "0x69987be7ce4cc89d0e00e0b8fa652f10e22fce7c", net: 3836, received: 3836, sent: 0, txs: 1 },
    { wallet: "0xdc56fd9d0112f44c9c4944e544fd20987c8b3a8c", net: 2802, received: 2802, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x38cede3bc1c8cefd6cb12441d51d16761a19db11", net: 616, received: 1233, sent: 616, txs: 2 },
    { wallet: "0x4960b06d436537eb7a81da1c3e13559ac718b864", net: 616, received: 616, sent: 0, txs: 1 },
    { wallet: "0x39faf1de461849163e390d0a57d1eaa632064a49", net: 245, received: 245, sent: 0, txs: 1 },
    { wallet: "0xec4017fda40716ca24f8d1cb03a5baaa1e8b422a", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 119, received: 119, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 101, received: 101, sent: 0, txs: 4 },
    { wallet: "0xe88d8498cfce81ddf785d1881ce0ed9035da3e79", net: 0, received: 8286, sent: 8286, txs: 2 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 15334, sent: 15334, txs: 7 },
    { wallet: "0x775c4b0f9f13fc32548b060ab4bf5eff44b08348", net: 0, received: 12616, sent: 12616, txs: 2 },
    { wallet: "0xc67510e10883b981a4bd621118fec90dd4e7fa1c", net: 0, received: 16572, sent: 16572, txs: 3 },
    { wallet: "0xd085a5781c95a0753db5b2dd909291c5e4fb66cd", net: 0, received: 16572, sent: 16572, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 29922, sent: 29922, txs: 6 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 4683, sent: 4683, txs: 8 },
    { wallet: "0x5dbcc85be5377a71ae69be8ca3b4e482de3311e0", net: 0, received: 1781, sent: 1781, txs: 3 },
    { wallet: "0x8ed1a186629c2fd4f5f7e570f134e3ace447b7b6", net: 0, received: 1781, sent: 1781, txs: 2 },
    { wallet: "0x2cedcc1fedb8dcae93a88bbf26df039071bb7243", net: 0, received: 137, sent: 137, txs: 2 },
    { wallet: "0xfba9bcac82f9e78d477c9445efa6e3b0eeef0e7a", net: 0, received: 19779, sent: 19779, txs: 2 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 119, sent: 119, txs: 2 },
    { wallet: "0xd9f76930d7df99aef4dc4cff48ee236d4583c28a", net: 0, received: 27957, sent: 27957, txs: 2 },
    { wallet: "0x1f2f10d1c40777ae1da742455c65828ff36df387", net: 0, received: 10295, sent: 10295, txs: 2 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 19898, sent: 19898, txs: 4 },
    { wallet: "0x66a9893cc07d91d95644aedd05d03f95e1dba8af", net: 0, received: 1657, sent: 1657, txs: 2 },
    { wallet: "0x96f87e6c7dd37676c1503aa77a93f86eddc0cd25", net: 0, received: 1657, sent: 1657, txs: 2 },
    { wallet: "0x480bd2968f4767209daaa83e04d2bf4716784711", net: 0, received: 31233, sent: 31233, txs: 4 },
    { wallet: "0xc10ee9031f2a0b84766a86b55a8d90f357910fb4", net: 0, received: 32192, sent: 32192, txs: 2 },
    { wallet: "0x10916b18ce6deef279f0ee66fab6b6c0e3461b78", net: 0, received: 884, sent: 884, txs: 4 },
    { wallet: "0xa4090e8fa74a6650e88c498659c5e05d6968d416", net: -6308, received: 6308, sent: 12616, txs: 2 },
    { wallet: "0x032a343a8c77e8ab0dbddd0e24cebaf5b3f0c3bf", net: -10411, received: 4932, sent: 15342, txs: 2 },
    { wallet: "0xc027fa8ba76de0ffc996c7e7a96e2e0c1c6aac49", net: -15616, received: 3288, sent: 18904, txs: 2 }
];

const WHALE_LABELS = {

};
