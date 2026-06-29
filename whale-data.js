// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 29, 2026 at 07:49 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 144;
const WHALE_TOTAL_VOLUME      = 23981405;
const WHALE_BIGGEST_SINGLE    = 22771953;

const WHALE_TRANSFERS = [
    { hash: "0xbc208c36d3c8896ac7643a441fc614d06afcee10216a4240a21aec16fbd20f86", ts: 1782755219, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x7ecc8b7e980d6048ddebeb86d62e2712bd05a332", amount: 179452, block: 25424906, type: "transfer" },
    { hash: "0x9f9811f11b83721da0b2107cd7b71e83e183e4e399c4e1cc8c7069cfe4a6c9ea", ts: 1782754043, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xf8191d98ae98d2f7abdfb63a9b0b812b93c873aa", amount: 22771953, block: 25424809, type: "transfer" },
    { hash: "0x1688ead4330978740bd86c5f3e0e688b7b77d6347c13a077ad8a5f4d6cd83a8c", ts: 1782744527, from: "0x8bb88a3eafd6ba0b6cce254c0c447c4cf5860afe", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 500000, block: 25424021, type: "transfer" },
    { hash: "0x0eed44764fce2b4bbf5aef1d21baddc84faf5fdb617932d7664a9a0f6855a8d9", ts: 1782694571, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xcf4525dc26cc9ca58e15fffa3ef14d6619a55945", amount: 262192, block: 25419878, type: "transfer" },
    { hash: "0x43008110e169d046507efc0075317265a5b8c8508bfd441b632c875630dabc8e", ts: 1782694523, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x57ba479e67ae2107ebf5b4bf6f45761eeacbdbba", amount: 267808, block: 25419874, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xf8191d98ae98d2f7abdfb63a9b0b812b93c873aa", net: 22771953, received: 22771953, sent: 0, txs: 1 },
    { wallet: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", net: 500000, received: 500000, sent: 0, txs: 1 },
    { wallet: "0x57ba479e67ae2107ebf5b4bf6f45761eeacbdbba", net: 267808, received: 267808, sent: 0, txs: 1 },
    { wallet: "0xcf4525dc26cc9ca58e15fffa3ef14d6619a55945", net: 262192, received: 262192, sent: 0, txs: 1 },
    { wallet: "0x7ecc8b7e980d6048ddebeb86d62e2712bd05a332", net: 179452, received: 179452, sent: 0, txs: 1 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 170955, received: 170955, sent: 0, txs: 6 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 132082, received: 133849, sent: 1767, txs: 3 },
    { wallet: "0xef91b28f5763b49812f39154d0db15a01ca1506a", net: 75000, received: 75000, sent: 0, txs: 1 },
    { wallet: "0xc07f8b8d4b5a5c7cc420267c3f50eb0c9e72f306", net: 57534, received: 57534, sent: 0, txs: 1 },
    { wallet: "0x9f80ab805e4a0f66d0a73c4337fd4e2d60b678d5", net: 54795, received: 54795, sent: 0, txs: 1 },
    { wallet: "0xdc56fd9d0112f44c9c4944e544fd20987c8b3a8c", net: 29128, received: 29128, sent: 0, txs: 7 },
    { wallet: "0x1a996eb2a69423926d60973fc3d73cf1fa847a2f", net: 28493, received: 28493, sent: 0, txs: 1 },
    { wallet: "0xa57c4a6678025e728d160d7ef1bb8ff733531850", net: 20548, received: 20548, sent: 0, txs: 1 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 19992, received: 19992, sent: 0, txs: 2 },
    { wallet: "0xbe4ae6e24d12dbd180517f126765178bae81f341", net: 19726, received: 19726, sent: 0, txs: 1 },
    { wallet: "0xb5fa089ed78657e10d02c2e9e2a9f673deb15c33", net: 18561, received: 18561, sent: 0, txs: 2 },
    { wallet: "0x0252f98c9b560057024b470a7363484233b7c017", net: 16849, received: 33699, sent: 16850, txs: 3 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 11817, received: 11822, sent: 5, txs: 6 },
    { wallet: "0x95bfbdadf65679ef4941a0c2ef8e242a4034e302", net: 10062, received: 10062, sent: 0, txs: 4 },
    { wallet: "0x82a365858b4a82eed80e5473c6f698f93b48617f", net: 6895, received: 74461, sent: 67566, txs: 4 },
    { wallet: "0xad88fb933661272a3ca088527c5b1506fc05d85f", net: 6671, received: 6671, sent: 0, txs: 1 },
    { wallet: "0x187fe1a8b76c60b85c00a2819152ff00ff642386", net: 6297, received: 6297, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 6208, received: 7108, sent: 900, txs: 3 },
    { wallet: "0x9b8393d3fb2753970a9028d6c2d2fa9758d2fbf0", net: 5205, received: 5205, sent: 0, txs: 1 },
    { wallet: "0xac2dd467dbbca0b146d909a3363d9d3dcdec56aa", net: 4521, received: 4521, sent: 0, txs: 1 },
    { wallet: "0x96be881acee07e498be404a5726814182bb8e0f9", net: 4384, received: 4384, sent: 0, txs: 1 },
    { wallet: "0x591568bfebc0888aec7df8434c61a95d008608af", net: 3836, received: 3836, sent: 0, txs: 1 },
    { wallet: "0x0faafa9fff76cd4d6dbf01d31d20dc7e75b6771a", net: 2877, received: 2877, sent: 0, txs: 1 },
    { wallet: "0xc097f3238e49c690df6a7d15cf82065bc98291a5", net: 2740, received: 2740, sent: 0, txs: 1 },
    { wallet: "0x23710ee704d16e42e1a03d1d2dcf3b62ea9b961c", net: 2403, received: 2403, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x40756e446e568e2f27dcd7ca3c505e77944f1c43", net: 1767, received: 1767, sent: 0, txs: 1 },
    { wallet: "0x4a68582fa823b753896a49b2047dc7d8e2b73f30", net: 1657, received: 1657, sent: 0, txs: 1 },
    { wallet: "0xb1f8db9d1b0b6698aca9d7ba189d60a30139dd94", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xb8294f8f8f6619a299688f1ca12cb967fc9a6176", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x1b0b1ad3e6a2fb69c48c2913fea012bc38f0a2e9", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x907262769c7143796829c3d9595d8d4007e65cd1", net: 959, received: 959, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x855992fbda59048156cb4bc75fad65d0bfa80f3b", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0xd031b8c380ff6df254cdc1f8d55b8bbd81ff4216", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xe19ed11103265687a351662aab588a890ec598b4", net: 400, received: 900, sent: 500, txs: 2 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 303, received: 303, sent: 0, txs: 5 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 128, received: 128, sent: 0, txs: 1 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 25, received: 25, sent: 0, txs: 4 },
    { wallet: "0x136f2ef5329b0426b60fa07b928468c418c8f49e", net: 9, received: 9, sent: 0, txs: 1 },
    { wallet: "0x283c6f54ddd678d002a49f69b6aec799e424ab6a", net: 7, received: 7, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 5, received: 5, sent: 0, txs: 2 }
];

const WHALE_LABELS = {

};
