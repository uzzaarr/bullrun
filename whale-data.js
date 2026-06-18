// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 18, 2026 at 10:13 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 115;
const WHALE_TOTAL_VOLUME      = 935086;
const WHALE_BIGGEST_SINGLE    = 365532;

const WHALE_TRANSFERS = [
    { hash: "0xdfb66785c21cebdfb8473aa2820c2b8cde6b3126dcb9909507d85d96786b8149", ts: 1781775875, from: "0x102aea96175b8d5477293be89369ea22826ca0ff", to: "0x187fe1a8b76c60b85c00a2819152ff00ff642386", amount: 365532, block: 25343634, type: "transfer" },
    { hash: "0x0a6a65f2e2e3b4325919b1b0f0731e6fd236262cc93bb41eceb7ffefeba959d6", ts: 1781698571, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0x7dafba1d69f6c01ae7567ffd7b046ca03b706f83", amount: 168130, block: 25337205, type: "transfer" },
    { hash: "0xed11a806707bdad7038b4ca47099da5de679936932139824399796f43fdb8a44", ts: 1781698571, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", amount: 286356, block: 25337205, type: "transfer" },
    { hash: "0x6422fb9a63d1f15a3e545523a89a8ceac9a365a342f246242530548a88b7a04d", ts: 1781694863, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xc07f8b8d4b5a5c7cc420267c3f50eb0c9e72f306", amount: 115068, block: 25336899, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x187fe1a8b76c60b85c00a2819152ff00ff642386", net: 365532, received: 365532, sent: 0, txs: 1 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 286356, received: 286356, sent: 0, txs: 1 },
    { wallet: "0x7dafba1d69f6c01ae7567ffd7b046ca03b706f83", net: 168130, received: 168130, sent: 0, txs: 1 },
    { wallet: "0xc07f8b8d4b5a5c7cc420267c3f50eb0c9e72f306", net: 115068, received: 115068, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 99252, received: 99252, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 57968, received: 57968, sent: 0, txs: 1 },
    { wallet: "0xdecd6fd4e783b30ee688f5b8ac6f5db8054bf919", net: 52603, received: 52603, sent: 0, txs: 1 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 18417, received: 18417, sent: 0, txs: 3 },
    { wallet: "0x98f870ab30c0530b2e19d1adf5285200f52305a7", net: 9805, received: 9805, sent: 0, txs: 4 },
    { wallet: "0xbcc316901ce399789fc5f0559056871c6dba42a6", net: 9726, received: 9726, sent: 0, txs: 1 },
    { wallet: "0xd926c341af7bdee4431007f01ed62ac04511b703", net: 9452, received: 9452, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 8767, received: 8767, sent: 0, txs: 1 },
    { wallet: "0xde704aca4424f7177a6204e42d4ce943d44bf7be", net: 7260, received: 7260, sent: 0, txs: 1 },
    { wallet: "0x55e3ec6dc795e29dea7b36fe3619940d02c743a4", net: 6849, received: 6849, sent: 0, txs: 1 },
    { wallet: "0x878498d7a1ef5e2a2a8b69377a52ef3c08238781", net: 6027, received: 6027, sent: 0, txs: 1 },
    { wallet: "0x793a9558a0ca9de122cbffa8a8b5542213672a19", net: 5890, received: 5890, sent: 0, txs: 1 },
    { wallet: "0x14a3222c00290641d90c9ce52b6af3d7b2f6e8d3", net: 5753, received: 5753, sent: 0, txs: 2 },
    { wallet: "0x311f520e51b3f5a6354d4e620443edb7ad59e996", net: 5753, received: 5753, sent: 0, txs: 1 },
    { wallet: "0x5f1c5951c5b1cc112ba9e89b9467edca33063453", net: 4814, received: 4814, sent: 0, txs: 2 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 2033, received: 101290, sent: 99257, txs: 12 },
    { wallet: "0x87607b0495272d2cb7ab5bcccf26e24af4b84473", net: 1985, received: 1985, sent: 0, txs: 1 },
    { wallet: "0xd4ecca8f08ac6fadaed2cb141637c95ee4c74d43", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0x834e69fd1a34854b64b15f62140c91bcad9be270", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x20694bb5c906ee71e696587be233284f995564b7", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x4910a6e228bbbb1180e8e5657913377bb4d3daef", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x5987d62c93f864fff531f79c1f6c8da51eaffce2", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 469, received: 469, sent: 0, txs: 13 },
    { wallet: "0xf68f7da978ca3cd9acbcb80672c9bde2e050b35f", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 274, received: 274, sent: 0, txs: 2 },
    { wallet: "0x3d126d6b1581f7566a34bd4e912920bba41367d5", net: 64, received: 58032, sent: 57968, txs: 3 },
    { wallet: "0x35586485360a0734e4236097e43ea162a15d59ec", net: 42, received: 42, sent: 0, txs: 1 },
    { wallet: "0x6f1d3836afb86b0d2a7ab7869e1f877082e6be1b", net: 5, received: 5, sent: 0, txs: 2 },
    { wallet: "0x22a607be5bf946935def3b7b5bd3310b4f81cead", net: 1, received: 3288, sent: 3287, txs: 3 },
    { wallet: "0x27ace13e9949900af2c5fdc1ad2aeb36b1e443a0", net: 0, received: 822, sent: 822, txs: 2 },
    { wallet: "0xc9641a33dfd165916df85730d0b2457e1ad1c8c8", net: 0, received: 9979, sent: 9979, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 8426, sent: 8426, txs: 8 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 8426, sent: 8426, txs: 8 },
    { wallet: "0x6413d8f85a2eff1dc3ee3e0db7d8c89ccbd51dc5", net: 0, received: 4521, sent: 4521, txs: 3 },
    { wallet: "0xac2dd467dbbca0b146d909a3363d9d3dcdec56aa", net: 0, received: 4521, sent: 4521, txs: 2 },
    { wallet: "0xaf7d83cc45464d813bbdd7c62e94a9e531b6311c", net: 0, received: 1839, sent: 1839, txs: 2 },
    { wallet: "0xc26ff22e2f18f54f82f74593529a27347a5a56ff", net: 0, received: 1849, sent: 1849, txs: 3 },
    { wallet: "0x1f75db534608607802f819708b5e1a1ea3ebeb21", net: 0, received: 1359, sent: 1359, txs: 2 },
    { wallet: "0x2d84a18d4d1356420f3115e4d11e26680671c62d", net: 0, received: 1370, sent: 1370, txs: 3 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 0, received: 1370, sent: 1370, txs: 2 },
    { wallet: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", net: 0, received: 99252, sent: 99252, txs: 2 },
    { wallet: "0x79eb36520638787d5802b735c7bf2bd8a29c6648", net: 0, received: 19145, sent: 19145, txs: 2 },
    { wallet: "0xbaa8254ae8b9769ae9053d9f25cca5f90f07427e", net: 0, received: 19178, sent: 19178, txs: 3 }
];

const WHALE_LABELS = {

};
