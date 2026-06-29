// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 29, 2026 at 03:36 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 135;
const WHALE_TOTAL_VOLUME      = 1030000;
const WHALE_BIGGEST_SINGLE    = 500000;

const WHALE_TRANSFERS = [
    { hash: "0x1688ead4330978740bd86c5f3e0e688b7b77d6347c13a077ad8a5f4d6cd83a8c", ts: 1782744527, from: "0x8bb88a3eafd6ba0b6cce254c0c447c4cf5860afe", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 500000, block: 25424021, type: "transfer" },
    { hash: "0x0eed44764fce2b4bbf5aef1d21baddc84faf5fdb617932d7664a9a0f6855a8d9", ts: 1782694571, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xcf4525dc26cc9ca58e15fffa3ef14d6619a55945", amount: 262192, block: 25419878, type: "transfer" },
    { hash: "0x43008110e169d046507efc0075317265a5b8c8508bfd441b632c875630dabc8e", ts: 1782694523, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x57ba479e67ae2107ebf5b4bf6f45761eeacbdbba", amount: 267808, block: 25419874, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", net: 500000, received: 500000, sent: 0, txs: 1 },
    { wallet: "0x57ba479e67ae2107ebf5b4bf6f45761eeacbdbba", net: 267808, received: 267808, sent: 0, txs: 1 },
    { wallet: "0xcf4525dc26cc9ca58e15fffa3ef14d6619a55945", net: 262192, received: 262192, sent: 0, txs: 1 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 86713, received: 86713, sent: 0, txs: 3 },
    { wallet: "0xef91b28f5763b49812f39154d0db15a01ca1506a", net: 75000, received: 75000, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 67566, received: 67566, sent: 0, txs: 1 },
    { wallet: "0xc07f8b8d4b5a5c7cc420267c3f50eb0c9e72f306", net: 57534, received: 57534, sent: 0, txs: 1 },
    { wallet: "0x9f80ab805e4a0f66d0a73c4337fd4e2d60b678d5", net: 54795, received: 54795, sent: 0, txs: 1 },
    { wallet: "0x50df5c15b3489371227901e86354954e9f2afce2", net: 30822, received: 30822, sent: 0, txs: 1 },
    { wallet: "0xa57c4a6678025e728d160d7ef1bb8ff733531850", net: 20548, received: 20548, sent: 0, txs: 1 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 19992, received: 19992, sent: 0, txs: 2 },
    { wallet: "0xbe4ae6e24d12dbd180517f126765178bae81f341", net: 19726, received: 19726, sent: 0, txs: 1 },
    { wallet: "0xb5fa089ed78657e10d02c2e9e2a9f673deb15c33", net: 18561, received: 18561, sent: 0, txs: 2 },
    { wallet: "0x0252f98c9b560057024b470a7363484233b7c017", net: 16849, received: 33699, sent: 16850, txs: 3 },
    { wallet: "0x82fc1e4232adda70ae4e67d60b549a4063888086", net: 15068, received: 15068, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 11819, received: 11824, sent: 5, txs: 7 },
    { wallet: "0xdc56fd9d0112f44c9c4944e544fd20987c8b3a8c", net: 10115, received: 10115, sent: 0, txs: 2 },
    { wallet: "0x95bfbdadf65679ef4941a0c2ef8e242a4034e302", net: 10062, received: 10062, sent: 0, txs: 4 },
    { wallet: "0xad88fb933661272a3ca088527c5b1506fc05d85f", net: 6671, received: 6671, sent: 0, txs: 1 },
    { wallet: "0x187fe1a8b76c60b85c00a2819152ff00ff642386", net: 6297, received: 6297, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 6208, received: 7108, sent: 900, txs: 3 },
    { wallet: "0xac2dd467dbbca0b146d909a3363d9d3dcdec56aa", net: 4521, received: 4521, sent: 0, txs: 1 },
    { wallet: "0x96be881acee07e498be404a5726814182bb8e0f9", net: 4384, received: 4384, sent: 0, txs: 1 },
    { wallet: "0x591568bfebc0888aec7df8434c61a95d008608af", net: 3836, received: 3836, sent: 0, txs: 1 },
    { wallet: "0x3f75b60dc13751e09c215f09224325c38087974e", net: 3527, received: 3527, sent: 0, txs: 1 },
    { wallet: "0x0faafa9fff76cd4d6dbf01d31d20dc7e75b6771a", net: 2877, received: 2877, sent: 0, txs: 1 },
    { wallet: "0xc097f3238e49c690df6a7d15cf82065bc98291a5", net: 2740, received: 2740, sent: 0, txs: 1 },
    { wallet: "0x23710ee704d16e42e1a03d1d2dcf3b62ea9b961c", net: 2403, received: 2403, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0xb8294f8f8f6619a299688f1ca12cb967fc9a6176", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x561e6326076713347d2bb3d3adb4e45a65009580", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0x1b0b1ad3e6a2fb69c48c2913fea012bc38f0a2e9", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x907262769c7143796829c3d9595d8d4007e65cd1", net: 959, received: 959, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x3272d7dc4a555dd75842bf9b58bbddaa8b636073", net: 798, received: 798, sent: 0, txs: 1 },
    { wallet: "0x855992fbda59048156cb4bc75fad65d0bfa80f3b", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0xe19ed11103265687a351662aab588a890ec598b4", net: 400, received: 900, sent: 500, txs: 2 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 244, received: 244, sent: 0, txs: 4 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 128, received: 128, sent: 0, txs: 1 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 41, received: 41, sent: 0, txs: 5 },
    { wallet: "0x136f2ef5329b0426b60fa07b928468c418c8f49e", net: 9, received: 9, sent: 0, txs: 1 },
    { wallet: "0x283c6f54ddd678d002a49f69b6aec799e424ab6a", net: 7, received: 7, sent: 0, txs: 1 },
    { wallet: "0xe4dbc68177c79f223e6139cfd29925fc258a12d0", net: 5, received: 5, sent: 0, txs: 2 },
    { wallet: "0xf5c4f3dc02c3fb9279495a8fef7b0741da956157", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0x25d870f41c8a0419b48982b6fb58f56eadb4b79d", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0xe6950916a7630605aca56354d2d6b93b04a2bf16", net: 0, received: 241, sent: 241, txs: 2 },
    { wallet: "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae", net: 0, received: 1599, sent: 1599, txs: 12 }
];

const WHALE_LABELS = {

};
