// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 8, 2026 at 08:15 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 131;
const WHALE_TOTAL_VOLUME      = 17506807;
const WHALE_BIGGEST_SINGLE    = 5700000;

const WHALE_TRANSFERS = [
    { hash: "0x8a736649428b173d3382947990d4ed033a21457b1c7c12e51cb6f03cb74ab1cb", ts: 1783480331, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xb4dc0ae16db607778e7fb4951ec0889852403f2c", amount: 1753425, block: 25485078, type: "transfer" },
    { hash: "0x657d8adbdc4be0196cc9a0982e882b53c80755e02e2d770f42a24d0498cd5db9", ts: 1783479707, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x28ede55e0ff5e20d732b989879aecfd87b8f761b", amount: 3499863, block: 25485026, type: "transfer" },
    { hash: "0x62107e44e681bc9f3844237197055cb0051d1b8b2cf1e502d25f4f69b450a153", ts: 1783478075, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 1006230, block: 25484891, type: "transfer" },
    { hash: "0x1aca9c86d2a3e32000fe5875ae717678addfbc62d14f406cc291e143b2723e0c", ts: 1783477463, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 1006230, block: 25484840, type: "transfer" },
    { hash: "0xcd1c1ae43da40d36588e26eaf53cbd5e0280df44189b4c249044aef0feb6666b", ts: 1783477355, from: "0x6e11aa2800dc5095889e8a3c60c6d40f0d4f9aa0", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 998497, block: 25484831, type: "transfer" },
    { hash: "0x9c2a67de47d66cfac088e172b2302be2b9bd0be502ef61ecd1170c4391a946e5", ts: 1783477283, from: "0xe96681d02c145ec7be71879b89ce5cfa2a5fd11a", to: "0x6e11aa2800dc5095889e8a3c60c6d40f0d4f9aa0", amount: 998497, block: 25484825, type: "transfer" },
    { hash: "0x03f3d709c4911e77d98dfec8560d7ba0cbb890ffafdceeae4f3e8cc25a65440d", ts: 1783473395, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xbbc971001a0a3697546b80ce09a5a217097db1b1", amount: 1900000, block: 25484503, type: "transfer" },
    { hash: "0x99f9b18a3676fa0d105b91fd5ab8a444c9389426f1ca3585b399e3e66732d386", ts: 1783472327, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xa2b801ab66f9b6c3ba70b36953d087339ac26406", amount: 5700000, block: 25484414, type: "transfer" },
    { hash: "0xb94fdae877378611eaa04b8137368d4e1bff27eaa57ffc4a8f8081a07fd4564a", ts: 1783426091, from: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 280167, block: 25480570, type: "transfer" },
    { hash: "0xdd69cfab32717b5e0421d5fa54213131d53ebe1b8e6966fed2d123633ff8df1e", ts: 1783423823, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 114415, block: 25480381, type: "transfer" },
    { hash: "0xd45060adc3e71bbb31e596dfc79e1e95e27fb63ae9b77ba4a055d8f9b2723670", ts: 1783422923, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 114415, block: 25480306, type: "transfer" },
    { hash: "0x2a69a6ea4232e2cd02f1430679011e3bc9d70dc2a10e743eb5c9e5a797b05a5d", ts: 1783422827, from: "0xbb3ed0e2b5c1fcd70120cfe69b2265fa1eec8b58", to: "0xec66c5f04d2699512abc2c7c0b0eb3bc4fe2826c", amount: 135068, block: 25480298, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xa2b801ab66f9b6c3ba70b36953d087339ac26406", net: 5700000, received: 5700000, sent: 0, txs: 1 },
    { wallet: "0x28ede55e0ff5e20d732b989879aecfd87b8f761b", net: 3499863, received: 3499863, sent: 0, txs: 1 },
    { wallet: "0xbbc971001a0a3697546b80ce09a5a217097db1b1", net: 1900000, received: 1900000, sent: 0, txs: 1 },
    { wallet: "0xb4dc0ae16db607778e7fb4951ec0889852403f2c", net: 1753425, received: 1753425, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 1120644, received: 1120644, sent: 0, txs: 2 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 280167, received: 280167, sent: 0, txs: 1 },
    { wallet: "0x57ba479e67ae2107ebf5b4bf6f45761eeacbdbba", net: 78767, received: 78767, sent: 0, txs: 1 },
    { wallet: "0xcf4525dc26cc9ca58e15fffa3ef14d6619a55945", net: 63562, received: 63562, sent: 0, txs: 1 },
    { wallet: "0xec66c5f04d2699512abc2c7c0b0eb3bc4fe2826c", net: 35069, received: 135068, sent: 100000, txs: 3 },
    { wallet: "0xedbdc1049e4375c18d60a814537c980f4a4da116", net: 34859, received: 34859, sent: 0, txs: 1 },
    { wallet: "0xbe4ae6e24d12dbd180517f126765178bae81f341", net: 26301, received: 26301, sent: 0, txs: 1 },
    { wallet: "0xcf720926891ea8641b899152a8149de71017b67c", net: 20822, received: 20822, sent: 0, txs: 1 },
    { wallet: "0x69987be7ce4cc89d0e00e0b8fa652f10e22fce7c", net: 15342, received: 15342, sent: 0, txs: 1 },
    { wallet: "0x9be5b8a7314552fa47feb1355cd5b4adc7bb7516", net: 13471, received: 13471, sent: 0, txs: 1 },
    { wallet: "0x1abdb5af79b603452db3eabfd6ce09b67a8915e8", net: 10685, received: 10685, sent: 0, txs: 1 },
    { wallet: "0x0761bacd001837594388349707bd398c02a7d7cf", net: 10274, received: 10274, sent: 0, txs: 1 },
    { wallet: "0x6f983e1cdab14ed5b72686df0f308b5a3c5acd3d", net: 9041, received: 9041, sent: 0, txs: 1 },
    { wallet: "0x3ba632ae3870943a88e799c6c58edac86407a416", net: 7534, received: 7534, sent: 0, txs: 1 },
    { wallet: "0x12aaf8392c18349f7fad9335532fc85c7d43c73d", net: 6671, received: 6671, sent: 0, txs: 1 },
    { wallet: "0x14a3222c00290641d90c9ce52b6af3d7b2f6e8d3", net: 5479, received: 5479, sent: 0, txs: 2 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 4384, received: 4384, sent: 0, txs: 1 },
    { wallet: "0x1a996eb2a69423926d60973fc3d73cf1fa847a2f", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 2149, received: 2149, sent: 0, txs: 11 },
    { wallet: "0x855992fbda59048156cb4bc75fad65d0bfa80f3b", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 1198, received: 1121948, sent: 1120750, txs: 7 },
    { wallet: "0x298e6919c9a1b13a61f82aff610a03142afd78de", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xc097f3238e49c690df6a7d15cf82065bc98291a5", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x5d73e31d8588d928d2dcbea05dc8038d86730bf5", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xb8294f8f8f6619a299688f1ca12cb967fc9a6176", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x9d8f05790f3aacc9d7ec66ba4c874e3268376065", net: 106, received: 106, sent: 0, txs: 1 },
    { wallet: "0x5f90761496cb500b6c9f64d15dcd6f0e7d9aaffe", net: 94, received: 94, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 82, received: 198, sent: 116, txs: 2 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 28, received: 28, sent: 0, txs: 1 },
    { wallet: "0x198f0c215e1491a6002e64be2ac37e12d75687f5", net: 0, received: 34725, sent: 34725, txs: 7 },
    { wallet: "0x7f51c134230eb9e5aba42bc364d3d3eba26d9712", net: 0, received: 25680, sent: 25680, txs: 11 },
    { wallet: "0x22cab81e0fee2bad5b015dbbeb6a374a1b8738de", net: 0, received: 11096, sent: 11096, txs: 2 },
    { wallet: "0x8b60a1e669b518c63932fa13c3351a2df765dc09", net: 0, received: 11096, sent: 11096, txs: 2 },
    { wallet: "0x6532c2c4d01f27712586509a369166b5948c442a", net: 0, received: 11096, sent: 11096, txs: 2 },
    { wallet: "0x6fd5b2ddf56553b4eb4ac860c367ac2b4a347a4f", net: 0, received: 8493, sent: 8493, txs: 5 },
    { wallet: "0x1601a91f99f6dd7cb805e70d9c1903f9b0eb9b75", net: 0, received: 4247, sent: 4247, txs: 2 },
    { wallet: "0x5858d32d27f655f89764678e5d7d89f74f905b75", net: 0, received: 4247, sent: 4247, txs: 2 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 23355, sent: 23355, txs: 9 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 23355, sent: 23355, txs: 8 },
    { wallet: "0x602bbf1eed66373da672ee8e9f2fbe459ae7dd27", net: 0, received: 13562, sent: 13562, txs: 3 },
    { wallet: "0xdb3812cd8d20f27888677ddc97df1241850f8c48", net: 0, received: 14584, sent: 14584, txs: 4 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 49281, sent: 49281, txs: 5 },
    { wallet: "0x4a7e47734c98a1d8e091d8b608775e322c5d5d36", net: 0, received: 13562, sent: 13562, txs: 2 },
    { wallet: "0x05b483bf0c0758faf875bce4a7987f34a21bec67", net: 0, received: 3167, sent: 3167, txs: 2 },
    { wallet: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", net: 0, received: 1120644, sent: 1120644, txs: 4 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 314, sent: 314, txs: 4 }
];

const WHALE_LABELS = {

};
