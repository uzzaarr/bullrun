// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 19, 2026 at 03:43 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 103;
const WHALE_TOTAL_VOLUME      = 6157750;
const WHALE_BIGGEST_SINGLE    = 1463014;

const WHALE_TRANSFERS = [
    { hash: "0xb79fbec0a1e2623e301da5dd798ac013f90161e41f0a8dc045789df24f271b28", ts: 1781836355, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 107178, block: 25348654, type: "transfer" },
    { hash: "0x606e4b466df614646c0699d6c0d7102000ea6eb77842c54c41602d220bea2339", ts: 1781835539, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 107178, block: 25348586, type: "transfer" },
    { hash: "0x67c5879dc7dc8eff74b748c15dbf89d3e0f547247e7d82d558d235408a437dc1", ts: 1781828591, from: "0xb52ea6d7d65f735b82805c8541caff75bf652d4b", to: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", amount: 1463013, block: 25348009, type: "transfer" },
    { hash: "0xbbff9f0b3489540c9ddf3e637d59a937d5c0376346a1f10c6b014f91b1d2211e", ts: 1781828255, from: "0x072a59700edfa7e6662dcac145a1a355f38a326b", to: "0xb52ea6d7d65f735b82805c8541caff75bf652d4b", amount: 1463013, block: 25347981, type: "transfer" },
    { hash: "0x8aa6af80f0ec257971a03d82e3e4996e8083c3b577cda04aeeabeaf109bb6112", ts: 1781827739, from: "0x61270ef841f9673255270c38cea84ad66c935051", to: "0x072a59700edfa7e6662dcac145a1a355f38a326b", amount: 1463014, block: 25347938, type: "transfer" },
    { hash: "0x4c1798d523c8791bb73f15f72698e296be1c5e2023a6adb5fa36fd500806d7c8", ts: 1781827679, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x61270ef841f9673255270c38cea84ad66c935051", amount: 163014, block: 25347933, type: "transfer" },
    { hash: "0x5a48997456f93b5a65414e54dbe5492ad7317c859f2bd2b0dd5840aa45625f9d", ts: 1781827511, from: "0xb180647d5ad76abeb6be0d363f6e182bd8df46d1", to: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", amount: 330460, block: 25347919, type: "transfer" },
    { hash: "0xc995095d1e3396cc99cf9792164c79ad507f360d002afa23a577248815083b21", ts: 1781777927, from: "0xa3222357a0eccf60c73606170be6c99adecb59b3", to: "0x0c70953989d157b715356da761e6f96960002a6d", amount: 329816, block: 25343804, type: "transfer" },
    { hash: "0x25a25d20af20e55c84f6b3b039a51837c6db07fe933de7a0c02a19589d7b84ea", ts: 1781777735, from: "0x187fe1a8b76c60b85c00a2819152ff00ff642386", to: "0xa3222357a0eccf60c73606170be6c99adecb59b3", amount: 365532, block: 25343788, type: "transfer" },
    { hash: "0xdfb66785c21cebdfb8473aa2820c2b8cde6b3126dcb9909507d85d96786b8149", ts: 1781775875, from: "0x102aea96175b8d5477293be89369ea22826ca0ff", to: "0x187fe1a8b76c60b85c00a2819152ff00ff642386", amount: 365532, block: 25343634, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", net: 1793473, received: 1793473, sent: 0, txs: 2 },
    { wallet: "0x0c70953989d157b715356da761e6f96960002a6d", net: 329816, received: 329816, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 107178, received: 107178, sent: 0, txs: 1 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 67571, received: 67571, sent: 0, txs: 1 },
    { wallet: "0xdecd6fd4e783b30ee688f5b8ac6f5db8054bf919", net: 52603, received: 52603, sent: 0, txs: 1 },
    { wallet: "0xa3222357a0eccf60c73606170be6c99adecb59b3", net: 35716, received: 365532, sent: 329816, txs: 2 },
    { wallet: "0xca902e065a5cbea896c6a37a3400d7ba166f7249", net: 23094, received: 23094, sent: 0, txs: 1 },
    { wallet: "0x6a7d3a6fd7e6e4c4eb568806f87caf3a0a31ce63", net: 16926, received: 16926, sent: 0, txs: 1 },
    { wallet: "0x179998589d1b00a604449b34f1d9f03bcda0eaab", net: 16438, received: 16438, sent: 0, txs: 1 },
    { wallet: "0xba8f33ec095355bfaa69f5bf5f92915c60075f1d", net: 10411, received: 10411, sent: 0, txs: 1 },
    { wallet: "0xcf720926891ea8641b899152a8149de71017b67c", net: 7671, received: 7671, sent: 0, txs: 1 },
    { wallet: "0x98f870ab30c0530b2e19d1adf5285200f52305a7", net: 7264, received: 7264, sent: 0, txs: 2 },
    { wallet: "0x04050182662e0066195adb49dc5362465069827a", net: 5342, received: 5342, sent: 0, txs: 1 },
    { wallet: "0x3492dbcc50c8fa86a2d9013a33a1972cbbd9e929", net: 5342, received: 5342, sent: 0, txs: 1 },
    { wallet: "0x3a7797a4360cff2d72fbc914dbc95d0127d3a700", net: 4658, received: 4658, sent: 0, txs: 1 },
    { wallet: "0xfd9072f3715419414e2345da949fe5048c839877", net: 3836, received: 3836, sent: 0, txs: 1 },
    { wallet: "0x6627c2f830928700f73475fe6e65177caf8b959a", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 1942, received: 109120, sent: 107178, txs: 12 },
    { wallet: "0xc9e1571520eb117c1b2b59133a4d2ee4da235ecd", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0xd032d55ae33a27e3a1d2bc6d915e88c4771d8b3e", net: 1253, received: 1253, sent: 0, txs: 2 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x9df14235393c7a9d2bc38db6c12c61b699e094c6", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 358, received: 358, sent: 0, txs: 12 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x39faf1de461849163e390d0a57d1eaa632064a49", net: 273, received: 273, sent: 0, txs: 1 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x35586485360a0734e4236097e43ea162a15d59ec", net: 42, received: 42, sent: 0, txs: 1 },
    { wallet: "0xf5f6151fcbb0071dad5c7b813270a5347ba85304", net: 26, received: 26, sent: 0, txs: 1 },
    { wallet: "0xedc6531b10297788cbb0fcfaee904a3803d3e2e4", net: 21, received: 21, sent: 0, txs: 1 },
    { wallet: "0x072a59700edfa7e6662dcac145a1a355f38a326b", net: 1, received: 1463014, sent: 1463013, txs: 2 },
    { wallet: "0x8c2d511ffe45696bcc9258f6f3ddc6642f77a293", net: 0, received: 1909, sent: 1909, txs: 2 },
    { wallet: "0xf317932bd3386a0078b45fb5993c687b173cf1cd", net: 0, received: 1918, sent: 1918, txs: 3 },
    { wallet: "0x549ad2435760a459bbbe4c6585db7f2b31b0112f", net: 0, received: 1918, sent: 1918, txs: 2 },
    { wallet: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", net: 0, received: 107178, sent: 107178, txs: 2 },
    { wallet: "0x16fd541d508fd7802a7dab01a7dcd2564d6a1c74", net: 0, received: 55790, sent: 55790, txs: 2 },
    { wallet: "0xdaffdcbca50c6c35505460db58c0fc29ca19534f", net: 0, received: 16438, sent: 16438, txs: 2 },
    { wallet: "0x729bee96ebb66c444eb3d8e671352bf6e69b82af", net: 0, received: 1359, sent: 1359, txs: 2 },
    { wallet: "0x2d84a18d4d1356420f3115e4d11e26680671c62d", net: 0, received: 2740, sent: 2740, txs: 6 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 0, received: 2740, sent: 2740, txs: 4 },
    { wallet: "0xb52ea6d7d65f735b82805c8541caff75bf652d4b", net: 0, received: 1463013, sent: 1463013, txs: 2 },
    { wallet: "0x715b6e59ce2d36bd7d7deb6c9901ef100759277f", net: 0, received: 4658, sent: 4658, txs: 2 },
    { wallet: "0x242f4f6af888d1624ba9cd7410e1b8a95476cac3", net: 0, received: 18416, sent: 18416, txs: 2 },
    { wallet: "0xcf96bd96aa81d08e1bec7d5af06b18f00e8a0640", net: 0, received: 18493, sent: 18493, txs: 4 },
    { wallet: "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae", net: 0, received: 1253, sent: 1253, txs: 4 },
    { wallet: "0x28bf6006d87de7f44445905aa4f5cb8c0d8cba02", net: 0, received: 1253, sent: 1253, txs: 4 },
    { wallet: "0xe0e0ad891920cc4c7a8c63e6d9dab191238a4a66", net: 0, received: 13635, sent: 13635, txs: 2 },
    { wallet: "0x792722cfd74e6899fd20fff92737f23fd5d9e956", net: 0, received: 13699, sent: 13699, txs: 3 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 2573, sent: 2573, txs: 3 }
];

const WHALE_LABELS = {

};
