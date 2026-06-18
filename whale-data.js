// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 18, 2026 at 02:55 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 133;
const WHALE_TOTAL_VOLUME      = 1060880;
const WHALE_BIGGEST_SINGLE    = 365532;

const WHALE_TRANSFERS = [
    { hash: "0xc995095d1e3396cc99cf9792164c79ad507f360d002afa23a577248815083b21", ts: 1781777927, from: "0xa3222357a0eccf60c73606170be6c99adecb59b3", to: "0x0c70953989d157b715356da761e6f96960002a6d", amount: 329816, block: 25343804, type: "transfer" },
    { hash: "0x25a25d20af20e55c84f6b3b039a51837c6db07fe933de7a0c02a19589d7b84ea", ts: 1781777735, from: "0x187fe1a8b76c60b85c00a2819152ff00ff642386", to: "0xa3222357a0eccf60c73606170be6c99adecb59b3", amount: 365532, block: 25343788, type: "transfer" },
    { hash: "0xdfb66785c21cebdfb8473aa2820c2b8cde6b3126dcb9909507d85d96786b8149", ts: 1781775875, from: "0x102aea96175b8d5477293be89369ea22826ca0ff", to: "0x187fe1a8b76c60b85c00a2819152ff00ff642386", amount: 365532, block: 25343634, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x0c70953989d157b715356da761e6f96960002a6d", net: 329816, received: 329816, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 99252, received: 99252, sent: 0, txs: 1 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 67571, received: 67571, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 57968, received: 57968, sent: 0, txs: 1 },
    { wallet: "0xdecd6fd4e783b30ee688f5b8ac6f5db8054bf919", net: 52603, received: 52603, sent: 0, txs: 1 },
    { wallet: "0xa3222357a0eccf60c73606170be6c99adecb59b3", net: 35716, received: 365532, sent: 329816, txs: 2 },
    { wallet: "0x179998589d1b00a604449b34f1d9f03bcda0eaab", net: 16438, received: 16438, sent: 0, txs: 1 },
    { wallet: "0x98f870ab30c0530b2e19d1adf5285200f52305a7", net: 9805, received: 9805, sent: 0, txs: 4 },
    { wallet: "0xbcc316901ce399789fc5f0559056871c6dba42a6", net: 9726, received: 9726, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 8767, received: 8767, sent: 0, txs: 1 },
    { wallet: "0xde704aca4424f7177a6204e42d4ce943d44bf7be", net: 7260, received: 7260, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 6867, received: 106124, sent: 99257, txs: 15 },
    { wallet: "0x55e3ec6dc795e29dea7b36fe3619940d02c743a4", net: 6849, received: 6849, sent: 0, txs: 1 },
    { wallet: "0x14a3222c00290641d90c9ce52b6af3d7b2f6e8d3", net: 5753, received: 5753, sent: 0, txs: 2 },
    { wallet: "0x311f520e51b3f5a6354d4e620443edb7ad59e996", net: 5753, received: 5753, sent: 0, txs: 1 },
    { wallet: "0x3492dbcc50c8fa86a2d9013a33a1972cbbd9e929", net: 5342, received: 5342, sent: 0, txs: 1 },
    { wallet: "0x5f1c5951c5b1cc112ba9e89b9467edca33063453", net: 4814, received: 4814, sent: 0, txs: 2 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 2964, received: 2964, sent: 0, txs: 1 },
    { wallet: "0x87607b0495272d2cb7ab5bcccf26e24af4b84473", net: 1985, received: 1985, sent: 0, txs: 1 },
    { wallet: "0xc9e1571520eb117c1b2b59133a4d2ee4da235ecd", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0xd4ecca8f08ac6fadaed2cb141637c95ee4c74d43", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0x834e69fd1a34854b64b15f62140c91bcad9be270", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x20694bb5c906ee71e696587be233284f995564b7", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x5987d62c93f864fff531f79c1f6c8da51eaffce2", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 498, received: 498, sent: 0, txs: 16 },
    { wallet: "0xd032d55ae33a27e3a1d2bc6d915e88c4771d8b3e", net: 419, received: 419, sent: 0, txs: 1 },
    { wallet: "0xf68f7da978ca3cd9acbcb80672c9bde2e050b35f", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x3d126d6b1581f7566a34bd4e912920bba41367d5", net: 64, received: 58032, sent: 57968, txs: 3 },
    { wallet: "0x35586485360a0734e4236097e43ea162a15d59ec", net: 42, received: 42, sent: 0, txs: 1 },
    { wallet: "0xf5f6151fcbb0071dad5c7b813270a5347ba85304", net: 26, received: 26, sent: 0, txs: 1 },
    { wallet: "0xedc6531b10297788cbb0fcfaee904a3803d3e2e4", net: 21, received: 21, sent: 0, txs: 1 },
    { wallet: "0x6f1d3836afb86b0d2a7ab7869e1f877082e6be1b", net: 5, received: 5, sent: 0, txs: 2 },
    { wallet: "0x22a607be5bf946935def3b7b5bd3310b4f81cead", net: 1, received: 3288, sent: 3287, txs: 3 },
    { wallet: "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae", net: 0, received: 419, sent: 419, txs: 2 },
    { wallet: "0x28bf6006d87de7f44445905aa4f5cb8c0d8cba02", net: 0, received: 419, sent: 419, txs: 2 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 2573, sent: 2573, txs: 3 },
    { wallet: "0xf4d655ee262049701c9eb5d3cf2be18d48495949", net: 0, received: 815, sent: 815, txs: 2 },
    { wallet: "0xd9164a3b93dc6935a158c2a058b39d48f9f96ec3", net: 0, received: 3068, sent: 3068, txs: 2 },
    { wallet: "0x4910a6e228bbbb1180e8e5657913377bb4d3daef", net: 0, received: 822, sent: 822, txs: 3 },
    { wallet: "0xc26ff22e2f18f54f82f74593529a27347a5a56ff", net: 0, received: 4932, sent: 4931, txs: 6 },
    { wallet: "0x759affd56c1b39a4b5b0a156dac1884039bc2cac", net: 0, received: 951, sent: 951, txs: 2 },
    { wallet: "0x40b2f1262a394a69f4446ceebca52bc58eb92bf4", net: 0, received: 959, sent: 959, txs: 3 },
    { wallet: "0xad729fcd02e52938c29284d0ab3b4f1c3f66802c", net: 0, received: 959, sent: 959, txs: 2 },
    { wallet: "0x187fe1a8b76c60b85c00a2819152ff00ff642386", net: 0, received: 365532, sent: 365532, txs: 2 }
];

const WHALE_LABELS = {

};
