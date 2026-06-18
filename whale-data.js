// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 18, 2026 at 02:56 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 112;
const WHALE_TOTAL_VOLUME      = 7839448;
const WHALE_BIGGEST_SINGLE    = 2575342;

const WHALE_TRANSFERS = [
    { hash: "0x0a6a65f2e2e3b4325919b1b0f0731e6fd236262cc93bb41eceb7ffefeba959d6", ts: 1781698571, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0x7dafba1d69f6c01ae7567ffd7b046ca03b706f83", amount: 168130, block: 25337205, type: "transfer" },
    { hash: "0xed11a806707bdad7038b4ca47099da5de679936932139824399796f43fdb8a44", ts: 1781698571, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", amount: 286356, block: 25337205, type: "transfer" },
    { hash: "0x6422fb9a63d1f15a3e545523a89a8ceac9a365a342f246242530548a88b7a04d", ts: 1781694863, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xc07f8b8d4b5a5c7cc420267c3f50eb0c9e72f306", amount: 115068, block: 25336899, type: "transfer" },
    { hash: "0xef5809a108006ada2f0a0383543a8d0107fb0654eaba92dbf4ed657e4f5bd294", ts: 1781685119, from: "0x1e1357db875454accefd4e13b0aadf2864341601", to: "0xf1a6d3273ab0ba8c18cb887bf2e215e458d1cb91", amount: 2575342, block: 25336090, type: "transfer" },
    { hash: "0x9369f0eb11291321c08a5d170f432164b59a5a237d59daa7940fa4b630d63707", ts: 1781684915, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x1e1357db875454accefd4e13b0aadf2864341601", amount: 2575342, block: 25336073, type: "transfer" },
    { hash: "0x56c650ea24465557f116e990c004521cc00ec84f9c05c2290eb4ffffce4687df", ts: 1781680331, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0x8782163068c7cd74d2510768a61135c1e4eb07b3", amount: 204819, block: 25335692, type: "transfer" },
    { hash: "0x78fef3d182c65c7b2168e68d700cec49993840cb879a89fb10ae32eef7a15fe1", ts: 1781680307, from: "0x58edf78281334335effa23101bbe3371b6a36a51", to: "0x8782163068c7cd74d2510768a61135c1e4eb07b3", amount: 114391, block: 25335690, type: "transfer" },
    { hash: "0x3261b16d62c804909da3f04f186d609f91297ca6da8da8113bf82bb115dc64fb", ts: 1781672243, from: "0x818331cb8264229320220c1af7fa0784d905a90f", to: "0xf73abe6b4fc98a223926db091742e1cd7d7b1bce", amount: 1800000, block: 25335020, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xf1a6d3273ab0ba8c18cb887bf2e215e458d1cb91", net: 2575342, received: 2575342, sent: 0, txs: 1 },
    { wallet: "0xf73abe6b4fc98a223926db091742e1cd7d7b1bce", net: 1800000, received: 1800000, sent: 0, txs: 1 },
    { wallet: "0x8782163068c7cd74d2510768a61135c1e4eb07b3", net: 319210, received: 319210, sent: 0, txs: 2 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 286356, received: 286356, sent: 0, txs: 1 },
    { wallet: "0x7dafba1d69f6c01ae7567ffd7b046ca03b706f83", net: 168130, received: 168130, sent: 0, txs: 1 },
    { wallet: "0xc07f8b8d4b5a5c7cc420267c3f50eb0c9e72f306", net: 115068, received: 115068, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 75785, received: 75790, sent: 5, txs: 10 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 57968, received: 57968, sent: 0, txs: 1 },
    { wallet: "0xbaa8254ae8b9769ae9053d9f25cca5f90f07427e", net: 19178, received: 19178, sent: 0, txs: 1 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 18417, received: 18417, sent: 0, txs: 3 },
    { wallet: "0x98f870ab30c0530b2e19d1adf5285200f52305a7", net: 9805, received: 9805, sent: 0, txs: 4 },
    { wallet: "0xbcc316901ce399789fc5f0559056871c6dba42a6", net: 9726, received: 9726, sent: 0, txs: 1 },
    { wallet: "0xd926c341af7bdee4431007f01ed62ac04511b703", net: 9452, received: 9452, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 8767, received: 8767, sent: 0, txs: 1 },
    { wallet: "0xb63d8fe95d2781935d31d3cbc1f525099c61a2cd", net: 7945, received: 7945, sent: 0, txs: 1 },
    { wallet: "0xde704aca4424f7177a6204e42d4ce943d44bf7be", net: 7260, received: 7260, sent: 0, txs: 1 },
    { wallet: "0x55e3ec6dc795e29dea7b36fe3619940d02c743a4", net: 6849, received: 6849, sent: 0, txs: 1 },
    { wallet: "0x878498d7a1ef5e2a2a8b69377a52ef3c08238781", net: 6027, received: 6027, sent: 0, txs: 1 },
    { wallet: "0x793a9558a0ca9de122cbffa8a8b5542213672a19", net: 5890, received: 5890, sent: 0, txs: 1 },
    { wallet: "0x311f520e51b3f5a6354d4e620443edb7ad59e996", net: 5753, received: 5753, sent: 0, txs: 1 },
    { wallet: "0x4dc40a8d58772fa690b910a559203e7e2f18b067", net: 4110, received: 4110, sent: 0, txs: 1 },
    { wallet: "0x0343006f2012c0eb312b53a84ffeb569ac11e64a", net: 4098, received: 4098, sent: 0, txs: 1 },
    { wallet: "0x5f1c5951c5b1cc112ba9e89b9467edca33063453", net: 2400, received: 2400, sent: 0, txs: 1 },
    { wallet: "0x87607b0495272d2cb7ab5bcccf26e24af4b84473", net: 1985, received: 1985, sent: 0, txs: 1 },
    { wallet: "0xc26ff22e2f18f54f82f74593529a27347a5a56ff", net: 1849, received: 1849, sent: 0, txs: 1 },
    { wallet: "0xee24dffca375eaa986e0159cbec5994f759c03ce", net: 1781, received: 1781, sent: 0, txs: 1 },
    { wallet: "0xd4ecca8f08ac6fadaed2cb141637c95ee4c74d43", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0x834e69fd1a34854b64b15f62140c91bcad9be270", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x20694bb5c906ee71e696587be233284f995564b7", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x2efc655f68d1e0c7c5e41f0a25ffc8230ac96b22", net: 949, received: 949, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x5532d65385e664eef604976354608a9dc4d9ae7c", net: 616, received: 2466, sent: 1849, txs: 2 },
    { wallet: "0x5987d62c93f864fff531f79c1f6c8da51eaffce2", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xf68f7da978ca3cd9acbcb80672c9bde2e050b35f", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 387, received: 387, sent: 0, txs: 10 },
    { wallet: "0x1ab2a7c6178467e8e2fd9c9a42d33024c8d6e1d0", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x907262769c7143796829c3d9595d8d4007e65cd1", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x3d126d6b1581f7566a34bd4e912920bba41367d5", net: 64, received: 58032, sent: 57968, txs: 3 },
    { wallet: "0x6f1d3836afb86b0d2a7ab7869e1f877082e6be1b", net: 5, received: 5, sent: 0, txs: 2 },
    { wallet: "0xac1aa30296bb107b1164b32c1c3ad27733f20487", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0x2155422d571ee78f3bab97d8dddf15a6d9157acf", net: 0, received: 4110, sent: 4110, txs: 3 },
    { wallet: "0x21dce84e1c9ea03025ddaefd186d6119ccb1e819", net: 0, received: 19178, sent: 19178, txs: 2 },
    { wallet: "0xb1b99a4267a29ab0006044fe600f8ed0ac53f060", net: 0, received: 4110, sent: 4110, txs: 2 },
    { wallet: "0xc71f12f55de31f3446775862bf3b7848edc2ad0f", net: 0, received: 11877, sent: 11877, txs: 2 },
    { wallet: "0xd308fc4ec59cf2779eb75787810f05fc80fedb60", net: 0, received: 11918, sent: 11918, txs: 3 },
    { wallet: "0xd43026d607c66f4ecadd408867e8ba9af05f3875", net: 0, received: 11918, sent: 11918, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 670, sent: 670, txs: 4 }
];

const WHALE_LABELS = {

};
