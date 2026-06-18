// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 18, 2026 at 08:16 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 117;
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
    { wallet: "0xdecd6fd4e783b30ee688f5b8ac6f5db8054bf919", net: 52603, received: 52603, sent: 0, txs: 1 },
    { wallet: "0xa3222357a0eccf60c73606170be6c99adecb59b3", net: 35716, received: 365532, sent: 329816, txs: 2 },
    { wallet: "0xca902e065a5cbea896c6a37a3400d7ba166f7249", net: 23094, received: 23094, sent: 0, txs: 1 },
    { wallet: "0x179998589d1b00a604449b34f1d9f03bcda0eaab", net: 16438, received: 16438, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 8767, received: 8767, sent: 0, txs: 1 },
    { wallet: "0xcf720926891ea8641b899152a8149de71017b67c", net: 7671, received: 7671, sent: 0, txs: 1 },
    { wallet: "0x55e3ec6dc795e29dea7b36fe3619940d02c743a4", net: 6849, received: 6849, sent: 0, txs: 1 },
    { wallet: "0x14a3222c00290641d90c9ce52b6af3d7b2f6e8d3", net: 5753, received: 5753, sent: 0, txs: 2 },
    { wallet: "0x311f520e51b3f5a6354d4e620443edb7ad59e996", net: 5753, received: 5753, sent: 0, txs: 1 },
    { wallet: "0x3492dbcc50c8fa86a2d9013a33a1972cbbd9e929", net: 5342, received: 5342, sent: 0, txs: 1 },
    { wallet: "0x5f1c5951c5b1cc112ba9e89b9467edca33063453", net: 4814, received: 4814, sent: 0, txs: 2 },
    { wallet: "0x3a7797a4360cff2d72fbc914dbc95d0127d3a700", net: 4658, received: 4658, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 3951, received: 103204, sent: 99252, txs: 13 },
    { wallet: "0xfd9072f3715419414e2345da949fe5048c839877", net: 3836, received: 3836, sent: 0, txs: 1 },
    { wallet: "0x98f870ab30c0530b2e19d1adf5285200f52305a7", net: 2425, received: 2425, sent: 0, txs: 1 },
    { wallet: "0xc9e1571520eb117c1b2b59133a4d2ee4da235ecd", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0xd032d55ae33a27e3a1d2bc6d915e88c4771d8b3e", net: 1253, received: 1253, sent: 0, txs: 2 },
    { wallet: "0x834e69fd1a34854b64b15f62140c91bcad9be270", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 423, received: 423, sent: 0, txs: 15 },
    { wallet: "0xf68f7da978ca3cd9acbcb80672c9bde2e050b35f", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x35586485360a0734e4236097e43ea162a15d59ec", net: 42, received: 42, sent: 0, txs: 1 },
    { wallet: "0xf5f6151fcbb0071dad5c7b813270a5347ba85304", net: 26, received: 26, sent: 0, txs: 1 },
    { wallet: "0xedc6531b10297788cbb0fcfaee904a3803d3e2e4", net: 21, received: 21, sent: 0, txs: 1 },
    { wallet: "0x22a607be5bf946935def3b7b5bd3310b4f81cead", net: 1, received: 3288, sent: 3287, txs: 3 },
    { wallet: "0x715b6e59ce2d36bd7d7deb6c9901ef100759277f", net: 0, received: 4658, sent: 4658, txs: 2 },
    { wallet: "0x242f4f6af888d1624ba9cd7410e1b8a95476cac3", net: 0, received: 18416, sent: 18416, txs: 2 },
    { wallet: "0xcf96bd96aa81d08e1bec7d5af06b18f00e8a0640", net: 0, received: 18493, sent: 18493, txs: 4 },
    { wallet: "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae", net: 0, received: 1253, sent: 1253, txs: 4 },
    { wallet: "0x28bf6006d87de7f44445905aa4f5cb8c0d8cba02", net: 0, received: 1253, sent: 1253, txs: 4 },
    { wallet: "0xe0e0ad891920cc4c7a8c63e6d9dab191238a4a66", net: 0, received: 13635, sent: 13635, txs: 2 },
    { wallet: "0x792722cfd74e6899fd20fff92737f23fd5d9e956", net: 0, received: 13699, sent: 13699, txs: 3 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 2573, sent: 2573, txs: 3 },
    { wallet: "0xf4d655ee262049701c9eb5d3cf2be18d48495949", net: 0, received: 815, sent: 815, txs: 2 },
    { wallet: "0xd9164a3b93dc6935a158c2a058b39d48f9f96ec3", net: 0, received: 3068, sent: 3068, txs: 2 },
    { wallet: "0x4910a6e228bbbb1180e8e5657913377bb4d3daef", net: 0, received: 822, sent: 822, txs: 3 },
    { wallet: "0xc26ff22e2f18f54f82f74593529a27347a5a56ff", net: 0, received: 4932, sent: 4931, txs: 6 },
    { wallet: "0x759affd56c1b39a4b5b0a156dac1884039bc2cac", net: 0, received: 951, sent: 951, txs: 2 },
    { wallet: "0x40b2f1262a394a69f4446ceebca52bc58eb92bf4", net: 0, received: 959, sent: 959, txs: 3 },
    { wallet: "0xad729fcd02e52938c29284d0ab3b4f1c3f66802c", net: 0, received: 959, sent: 959, txs: 2 },
    { wallet: "0x187fe1a8b76c60b85c00a2819152ff00ff642386", net: 0, received: 365532, sent: 365532, txs: 2 },
    { wallet: "0x27ace13e9949900af2c5fdc1ad2aeb36b1e443a0", net: 0, received: 822, sent: 822, txs: 2 },
    { wallet: "0xc9641a33dfd165916df85730d0b2457e1ad1c8c8", net: 0, received: 9979, sent: 9979, txs: 2 }
];

const WHALE_LABELS = {

};
