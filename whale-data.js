// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 30, 2026 at 02:46 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 154;
const WHALE_TOTAL_VOLUME      = 74687563;
const WHALE_BIGGEST_SINGLE    = 36208817;

const WHALE_TRANSFERS = [
    { hash: "0x2c393c6093234f9c1c921fb2421c99a3b5a208d1b0e4f708fd9a26ccacad1ecd", ts: 1782782579, from: "0x39927a709eaba03d43c351ea0b1bf4228ce99ade", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 2426100, block: 25427180, type: "transfer" },
    { hash: "0x7168edb6c4e736e015e8aa3cb3d6565c3ed588fb35623e526617824f329427f9", ts: 1782781019, from: "0xa230ae47c4e13b2484dcb9b3a50228ec1336fe59", to: "0x39927a709eaba03d43c351ea0b1bf4228ce99ade", amount: 2426100, block: 25427050, type: "transfer" },
    { hash: "0x2d9bed7bf2b4b5f0a37017e182fa240fe49abc309a121fd4ef9c6cf9a1f184e6", ts: 1782780911, from: "0x6912d024e2b88136c5a586e77b092199963b6083", to: "0xa230ae47c4e13b2484dcb9b3a50228ec1336fe59", amount: 2426100, block: 25427041, type: "transfer" },
    { hash: "0xddbcada0e3ff386adaebba1264e4359f62b7b8fa849482a816147a11815aa843", ts: 1782778679, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xa7749a59d3cda51dbca87319ebaec51ceef07854", amount: 4843562, block: 25426856, type: "transfer" },
    { hash: "0x9c18f8cdb2c752558ad926c333118dcee7d0e341b9d0cc95b78960cb4d9c1dec", ts: 1782778667, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xa7749a59d3cda51dbca87319ebaec51ceef07854", amount: 2300000, block: 25426855, type: "transfer" },
    { hash: "0x06cbd8081ef8ff0a5b05548212f4fd1cc16dff33afee25173ff4e0a3bf73215f", ts: 1782777635, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x9c29f9c46b3279cae1fff5897ad7fe13ac154327", amount: 105479, block: 25426769, type: "transfer" },
    { hash: "0x50b4927b50f3bf4dd06b12b4698bc162126bb78d71e0cdaecdfaf758d01aa99d", ts: 1782766631, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x34f1a88435cf57ab0af85343fda98d6980dff366", amount: 500000, block: 25425857, type: "transfer" },
    { hash: "0xe8f73caf0bfe63ef8f4d7babcef4f1100b77573059fc4fc75785978837f8446a", ts: 1782763487, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xe19ed11103265687a351662aab588a890ec598b4", amount: 36208817, block: 25425595, type: "transfer" },
    { hash: "0xbc208c36d3c8896ac7643a441fc614d06afcee10216a4240a21aec16fbd20f86", ts: 1782755219, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x7ecc8b7e980d6048ddebeb86d62e2712bd05a332", amount: 179452, block: 25424906, type: "transfer" },
    { hash: "0x9f9811f11b83721da0b2107cd7b71e83e183e4e399c4e1cc8c7069cfe4a6c9ea", ts: 1782754043, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xf8191d98ae98d2f7abdfb63a9b0b812b93c873aa", amount: 22771953, block: 25424809, type: "transfer" },
    { hash: "0x1688ead4330978740bd86c5f3e0e688b7b77d6347c13a077ad8a5f4d6cd83a8c", ts: 1782744527, from: "0x8bb88a3eafd6ba0b6cce254c0c447c4cf5860afe", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 500000, block: 25424021, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xe19ed11103265687a351662aab588a890ec598b4", net: 36209217, received: 36209717, sent: 500, txs: 3 },
    { wallet: "0xf8191d98ae98d2f7abdfb63a9b0b812b93c873aa", net: 22771953, received: 22771953, sent: 0, txs: 1 },
    { wallet: "0xa7749a59d3cda51dbca87319ebaec51ceef07854", net: 7143562, received: 7143562, sent: 0, txs: 2 },
    { wallet: "0x34f1a88435cf57ab0af85343fda98d6980dff366", net: 500000, received: 500000, sent: 0, txs: 1 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 195912, received: 195912, sent: 0, txs: 7 },
    { wallet: "0x7ecc8b7e980d6048ddebeb86d62e2712bd05a332", net: 179452, received: 179452, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 132082, received: 133849, sent: 1767, txs: 3 },
    { wallet: "0x9c29f9c46b3279cae1fff5897ad7fe13ac154327", net: 105479, received: 105479, sent: 0, txs: 1 },
    { wallet: "0xef91b28f5763b49812f39154d0db15a01ca1506a", net: 75000, received: 75000, sent: 0, txs: 1 },
    { wallet: "0xc07f8b8d4b5a5c7cc420267c3f50eb0c9e72f306", net: 57534, received: 57534, sent: 0, txs: 1 },
    { wallet: "0x9f80ab805e4a0f66d0a73c4337fd4e2d60b678d5", net: 54795, received: 54795, sent: 0, txs: 1 },
    { wallet: "0x7ba98b5263b87a206d6d1d6087588e479167700a", net: 45205, received: 45205, sent: 0, txs: 1 },
    { wallet: "0xdc56fd9d0112f44c9c4944e544fd20987c8b3a8c", net: 29128, received: 29128, sent: 0, txs: 7 },
    { wallet: "0x1a996eb2a69423926d60973fc3d73cf1fa847a2f", net: 28493, received: 28493, sent: 0, txs: 1 },
    { wallet: "0xa57c4a6678025e728d160d7ef1bb8ff733531850", net: 20548, received: 20548, sent: 0, txs: 1 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 19992, received: 19992, sent: 0, txs: 2 },
    { wallet: "0xbe4ae6e24d12dbd180517f126765178bae81f341", net: 19726, received: 19726, sent: 0, txs: 1 },
    { wallet: "0xb5fa089ed78657e10d02c2e9e2a9f673deb15c33", net: 18561, received: 18561, sent: 0, txs: 2 },
    { wallet: "0x0252f98c9b560057024b470a7363484233b7c017", net: 16849, received: 33699, sent: 16850, txs: 3 },
    { wallet: "0x69987be7ce4cc89d0e00e0b8fa652f10e22fce7c", net: 13425, received: 13425, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 11811, received: 11822, sent: 11, txs: 7 },
    { wallet: "0x82a365858b4a82eed80e5473c6f698f93b48617f", net: 6895, received: 74461, sent: 67566, txs: 4 },
    { wallet: "0xad88fb933661272a3ca088527c5b1506fc05d85f", net: 6671, received: 6671, sent: 0, txs: 1 },
    { wallet: "0x9b8393d3fb2753970a9028d6c2d2fa9758d2fbf0", net: 5205, received: 5205, sent: 0, txs: 1 },
    { wallet: "0xac2dd467dbbca0b146d909a3363d9d3dcdec56aa", net: 4521, received: 4521, sent: 0, txs: 1 },
    { wallet: "0x96be881acee07e498be404a5726814182bb8e0f9", net: 4384, received: 4384, sent: 0, txs: 1 },
    { wallet: "0x591568bfebc0888aec7df8434c61a95d008608af", net: 3836, received: 3836, sent: 0, txs: 1 },
    { wallet: "0xe7ff8186307f7781bce361dbe7245e1330550c52", net: 2877, received: 2877, sent: 0, txs: 1 },
    { wallet: "0xc097f3238e49c690df6a7d15cf82065bc98291a5", net: 2740, received: 2740, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x40756e446e568e2f27dcd7ca3c505e77944f1c43", net: 1767, received: 1767, sent: 0, txs: 1 },
    { wallet: "0x4a68582fa823b753896a49b2047dc7d8e2b73f30", net: 1657, received: 1657, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 1644, received: 1644, sent: 0, txs: 2 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xb1f8db9d1b0b6698aca9d7ba189d60a30139dd94", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x1b0b1ad3e6a2fb69c48c2913fea012bc38f0a2e9", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x855992fbda59048156cb4bc75fad65d0bfa80f3b", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0xd031b8c380ff6df254cdc1f8d55b8bbd81ff4216", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 303, received: 303, sent: 0, txs: 5 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 128, received: 128, sent: 0, txs: 1 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 50, received: 50, sent: 0, txs: 5 },
    { wallet: "0x136f2ef5329b0426b60fa07b928468c418c8f49e", net: 9, received: 9, sent: 0, txs: 1 },
    { wallet: "0x283c6f54ddd678d002a49f69b6aec799e424ab6a", net: 7, received: 7, sent: 0, txs: 1 },
    { wallet: "0x7e648db6a05c487072416fd708a88f8715ec29bb", net: 6, received: 6, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 5, received: 5, sent: 0, txs: 2 },
    { wallet: "0xe4dbc68177c79f223e6139cfd29925fc258a12d0", net: 5, received: 5, sent: 0, txs: 2 },
    { wallet: "0xf5c4f3dc02c3fb9279495a8fef7b0741da956157", net: 1, received: 1, sent: 0, txs: 1 }
];

const WHALE_LABELS = {

};
