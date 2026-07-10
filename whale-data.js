// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 10, 2026 at 02:08 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 111;
const WHALE_TOTAL_VOLUME      = 6815095;
const WHALE_BIGGEST_SINGLE    = 2500000;

const WHALE_TRANSFERS = [
    { hash: "0x4ec01c1a4909f7d8ec057f5626e3d392e5d497f806f3ee6a4b653e956e5b407e", ts: 1783692239, from: "0x0ff258cc4aba5a91566c5630f059d62a31e74e79", to: "0xde795c7407df50133d25fd17e51b97a67d356e93", amount: 141918, block: 25502666, type: "transfer" },
    { hash: "0xdb93899d07b0da399cfa2806382f53a65eed708f825f401983a277e6fe5dbfec", ts: 1783685195, from: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 673177, block: 25502080, type: "transfer" },
    { hash: "0x411f1889a43d90009ac5f9ee5110dd910805b64337401e22e28003c2039966fb", ts: 1783661243, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x4bf6a3177ef5db01aec5578b5ad7058f228c7788", amount: 1000000, block: 25500092, type: "transfer" },
    { hash: "0x6516ef5327e9b97040dc8818645f723eec550f0b10445f04eac74ea7bec95331", ts: 1783660451, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xb5eadb7db50a4fcb81827c2c7a2ca40f564214a6", amount: 2500000, block: 25500026, type: "transfer" },
    { hash: "0x23dad96177a9db572bbabc963b09d6d5daedcbab60f38ad988f1ef3cb80dd6fd", ts: 1783660139, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x3fb012b74468eb3adad7aadedcb53e678f5faee2", amount: 2500000, block: 25500000, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xb5eadb7db50a4fcb81827c2c7a2ca40f564214a6", net: 2500000, received: 2500000, sent: 0, txs: 1 },
    { wallet: "0x3fb012b74468eb3adad7aadedcb53e678f5faee2", net: 2500000, received: 2500000, sent: 0, txs: 1 },
    { wallet: "0x4bf6a3177ef5db01aec5578b5ad7058f228c7788", net: 1000000, received: 1000000, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 663542, received: 673177, sent: 9635, txs: 2 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 141466, received: 141466, sent: 0, txs: 2 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 99756, received: 99756, sent: 0, txs: 10 },
    { wallet: "0x6cffe5ab78191da6ef7e12e9c4b54377d2d202fe", net: 66164, received: 66164, sent: 0, txs: 1 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 65600, received: 65600, sent: 0, txs: 2 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 63426, received: 63426, sent: 0, txs: 3 },
    { wallet: "0x57ba479e67ae2107ebf5b4bf6f45761eeacbdbba", net: 47260, received: 47260, sent: 0, txs: 1 },
    { wallet: "0x035ae7d933dcbfe617ffba194a88af0c2867b90c", net: 22539, received: 22539, sent: 0, txs: 1 },
    { wallet: "0x9be5b8a7314552fa47feb1355cd5b4adc7bb7516", net: 19779, received: 19779, sent: 0, txs: 1 },
    { wallet: "0xbf83ce96835bb66eb074ad0ec470dad133448581", net: 18904, received: 18904, sent: 0, txs: 1 },
    { wallet: "0x5f1c5951c5b1cc112ba9e89b9467edca33063453", net: 11035, received: 11035, sent: 0, txs: 1 },
    { wallet: "0x47670e064a9cf54102481f199915e392ce357d60", net: 9863, received: 9863, sent: 0, txs: 1 },
    { wallet: "0xe19ed11103265687a351662aab588a890ec598b4", net: 9635, received: 9635, sent: 0, txs: 1 },
    { wallet: "0xe5e6ee25986549a41a61ae31080719d6db316580", net: 8286, received: 8286, sent: 0, txs: 1 },
    { wallet: "0x311f520e51b3f5a6354d4e620443edb7ad59e996", net: 6575, received: 6575, sent: 0, txs: 1 },
    { wallet: "0x1a996eb2a69423926d60973fc3d73cf1fa847a2f", net: 4384, received: 4384, sent: 0, txs: 1 },
    { wallet: "0xe94a146d6bb643c4439405495ddee4472eb115ac", net: 4110, received: 4110, sent: 0, txs: 1 },
    { wallet: "0xe28d7502e70c9b45de8218b122a72a1eaf972695", net: 3900, received: 3900, sent: 0, txs: 1 },
    { wallet: "0x69987be7ce4cc89d0e00e0b8fa652f10e22fce7c", net: 3836, received: 3836, sent: 0, txs: 1 },
    { wallet: "0xdc56fd9d0112f44c9c4944e544fd20987c8b3a8c", net: 2802, received: 2802, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x38cede3bc1c8cefd6cb12441d51d16761a19db11", net: 616, received: 1233, sent: 616, txs: 2 },
    { wallet: "0x4960b06d436537eb7a81da1c3e13559ac718b864", net: 616, received: 616, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 525, received: 525, sent: 0, txs: 4 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x39faf1de461849163e390d0a57d1eaa632064a49", net: 245, received: 245, sent: 0, txs: 1 },
    { wallet: "0x5afdfc44e2dfa3e3940f479ac23097103387c23a", net: 167, received: 4068, sent: 3900, txs: 3 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xec4017fda40716ca24f8d1cb03a5baaa1e8b422a", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 119, received: 119, sent: 0, txs: 1 },
    { wallet: "0x8aefefe076b757a13db9cc13a177254b76f4d5bd", net: 0, received: 70733, sent: 70733, txs: 2 },
    { wallet: "0x886f7a8bce487e4279f793b9ef795e19e6948606", net: 0, received: 70733, sent: 70733, txs: 2 },
    { wallet: "0xde795c7407df50133d25fd17e51b97a67d356e93", net: 0, received: 141918, sent: 141918, txs: 5 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 31128, sent: 31128, txs: 6 },
    { wallet: "0x40a88150427465cca3911358edc96cf16f06e431", net: 0, received: 1405, sent: 1405, txs: 2 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 99756, sent: 99756, txs: 24 },
    { wallet: "0x198f0c215e1491a6002e64be2ac37e12d75687f5", net: 0, received: 35469, sent: 35469, txs: 8 },
    { wallet: "0x88cc0800464fcef3e643a369e8a0532990995eee", net: 0, received: 11035, sent: 11035, txs: 3 },
    { wallet: "0xe88d8498cfce81ddf785d1881ce0ed9035da3e79", net: 0, received: 8286, sent: 8286, txs: 2 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 12616, sent: 12616, txs: 3 },
    { wallet: "0x775c4b0f9f13fc32548b060ab4bf5eff44b08348", net: 0, received: 12616, sent: 12616, txs: 2 },
    { wallet: "0xc67510e10883b981a4bd621118fec90dd4e7fa1c", net: 0, received: 16572, sent: 16572, txs: 3 },
    { wallet: "0xd085a5781c95a0753db5b2dd909291c5e4fb66cd", net: 0, received: 16572, sent: 16572, txs: 2 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 1766, sent: 1766, txs: 2 },
    { wallet: "0x5dbcc85be5377a71ae69be8ca3b4e482de3311e0", net: 0, received: 1781, sent: 1781, txs: 3 },
    { wallet: "0x8ed1a186629c2fd4f5f7e570f134e3ace447b7b6", net: 0, received: 1781, sent: 1781, txs: 2 }
];

const WHALE_LABELS = {

};
