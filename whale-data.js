// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 8, 2026 at 02:06 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 139;
const WHALE_TOTAL_VOLUME      = 8344065;
const WHALE_BIGGEST_SINGLE    = 5700000;

const WHALE_TRANSFERS = [
    { hash: "0x03f3d709c4911e77d98dfec8560d7ba0cbb890ffafdceeae4f3e8cc25a65440d", ts: 1783473395, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xbbc971001a0a3697546b80ce09a5a217097db1b1", amount: 1900000, block: 25484503, type: "transfer" },
    { hash: "0x99f9b18a3676fa0d105b91fd5ab8a444c9389426f1ca3585b399e3e66732d386", ts: 1783472327, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xa2b801ab66f9b6c3ba70b36953d087339ac26406", amount: 5700000, block: 25484414, type: "transfer" },
    { hash: "0xb94fdae877378611eaa04b8137368d4e1bff27eaa57ffc4a8f8081a07fd4564a", ts: 1783426091, from: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 280167, block: 25480570, type: "transfer" },
    { hash: "0xdd69cfab32717b5e0421d5fa54213131d53ebe1b8e6966fed2d123633ff8df1e", ts: 1783423823, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 114415, block: 25480381, type: "transfer" },
    { hash: "0xd45060adc3e71bbb31e596dfc79e1e95e27fb63ae9b77ba4a055d8f9b2723670", ts: 1783422923, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 114415, block: 25480306, type: "transfer" },
    { hash: "0x2a69a6ea4232e2cd02f1430679011e3bc9d70dc2a10e743eb5c9e5a797b05a5d", ts: 1783422827, from: "0xbb3ed0e2b5c1fcd70120cfe69b2265fa1eec8b58", to: "0xec66c5f04d2699512abc2c7c0b0eb3bc4fe2826c", amount: 135068, block: 25480298, type: "transfer" },
    { hash: "0xccff4360097d6ae3909f852012091a4dcca4d2116593a03f20b3a7fcdb059a05", ts: 1783409687, from: "0x8dc59f001b8883aea71eacd4e5842dc3395b2ae6", to: "0x22510fe99f63ae03ba792c21a29ec10fd87cae08", amount: 100000, block: 25479206, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xa2b801ab66f9b6c3ba70b36953d087339ac26406", net: 5700000, received: 5700000, sent: 0, txs: 1 },
    { wallet: "0xbbc971001a0a3697546b80ce09a5a217097db1b1", net: 1900000, received: 1900000, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 280167, received: 280167, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 114415, received: 114415, sent: 0, txs: 1 },
    { wallet: "0x57ba479e67ae2107ebf5b4bf6f45761eeacbdbba", net: 78767, received: 78767, sent: 0, txs: 1 },
    { wallet: "0xcf4525dc26cc9ca58e15fffa3ef14d6619a55945", net: 63562, received: 63562, sent: 0, txs: 1 },
    { wallet: "0xec66c5f04d2699512abc2c7c0b0eb3bc4fe2826c", net: 35069, received: 135068, sent: 100000, txs: 3 },
    { wallet: "0xedbdc1049e4375c18d60a814537c980f4a4da116", net: 34859, received: 34859, sent: 0, txs: 1 },
    { wallet: "0xbe4ae6e24d12dbd180517f126765178bae81f341", net: 26301, received: 26301, sent: 0, txs: 1 },
    { wallet: "0xcf720926891ea8641b899152a8149de71017b67c", net: 20822, received: 20822, sent: 0, txs: 1 },
    { wallet: "0xe8446569ee2311ac5c455cf97e6eb5cd594356ea", net: 18630, received: 18630, sent: 0, txs: 1 },
    { wallet: "0xcf96bd96aa81d08e1bec7d5af06b18f00e8a0640", net: 16438, received: 16438, sent: 0, txs: 1 },
    { wallet: "0x69987be7ce4cc89d0e00e0b8fa652f10e22fce7c", net: 15342, received: 15342, sent: 0, txs: 1 },
    { wallet: "0x4a7e47734c98a1d8e091d8b608775e322c5d5d36", net: 13562, received: 13562, sent: 0, txs: 1 },
    { wallet: "0x9be5b8a7314552fa47feb1355cd5b4adc7bb7516", net: 13471, received: 13471, sent: 0, txs: 1 },
    { wallet: "0x1abdb5af79b603452db3eabfd6ce09b67a8915e8", net: 10685, received: 10685, sent: 0, txs: 1 },
    { wallet: "0xbf7d14d0d1efefc6ec2ecc07b2bc026324743c00", net: 10548, received: 10548, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 8930, received: 123451, sent: 114521, txs: 5 },
    { wallet: "0xd308fc4ec59cf2779eb75787810f05fc80fedb60", net: 7945, received: 7945, sent: 0, txs: 1 },
    { wallet: "0x3ba632ae3870943a88e799c6c58edac86407a416", net: 7534, received: 7534, sent: 0, txs: 1 },
    { wallet: "0x12aaf8392c18349f7fad9335532fc85c7d43c73d", net: 6671, received: 6671, sent: 0, txs: 1 },
    { wallet: "0x05b483bf0c0758faf875bce4a7987f34a21bec67", net: 3167, received: 3167, sent: 0, txs: 1 },
    { wallet: "0x1a996eb2a69423926d60973fc3d73cf1fa847a2f", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x298e6919c9a1b13a61f82aff610a03142afd78de", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xc097f3238e49c690df6a7d15cf82065bc98291a5", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 596, received: 596, sent: 0, txs: 10 },
    { wallet: "0x907262769c7143796829c3d9595d8d4007e65cd1", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x4f3889331539ab2ed976dbaf67c8def36deeed15", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 198, received: 198, sent: 0, txs: 1 },
    { wallet: "0x9d8f05790f3aacc9d7ec66ba4c874e3268376065", net: 106, received: 106, sent: 0, txs: 1 },
    { wallet: "0x5f90761496cb500b6c9f64d15dcd6f0e7d9aaffe", net: 94, received: 94, sent: 0, txs: 1 },
    { wallet: "0xd862cdcfeb856c32b3c4f7563f4811d8ddfd42e2", net: 0, received: 54124, sent: 54124, txs: 2 },
    { wallet: "0x27ad186bb115a2b41fb64553efd4ba5a74b83b08", net: 0, received: 26789, sent: 26789, txs: 2 },
    { wallet: "0x7f51c134230eb9e5aba42bc364d3d3eba26d9712", net: 0, received: 7211, sent: 7211, txs: 3 },
    { wallet: "0xdb3812cd8d20f27888677ddc97df1241850f8c48", net: 0, received: 7211, sent: 7211, txs: 2 },
    { wallet: "0xa04f8f64316da5af55be74b0c5f31835f3e2386b", net: 0, received: 8738, sent: 8738, txs: 2 },
    { wallet: "0xc838177d624df6703ae42467b1eea4569c7533b3", net: 0, received: 8767, sent: 8767, txs: 3 },
    { wallet: "0xc25d5361e3b854c13c11ee19ffcba6f35f2676bc", net: 0, received: 8767, sent: 8767, txs: 2 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 7354, sent: 7354, txs: 6 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 9275, sent: 9275, txs: 8 },
    { wallet: "0x7bad9b16a6bb66865d3be6c76f959c4b3245eabd", net: 0, received: 5479, sent: 5479, txs: 3 },
    { wallet: "0x0f4ab87873e5b6abc6bbfe87ce8857e284cdd2de", net: 0, received: 5479, sent: 5479, txs: 2 },
    { wallet: "0x6762e034ce6ff41b38a25a4d8e6ef0fa87199454", net: 0, received: 3562, sent: 3562, txs: 3 },
    { wallet: "0xf4741ff340dd0c961a417583e28b16ddd94f0d81", net: 0, received: 3562, sent: 3562, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 94281, sent: 94281, txs: 9 },
    { wallet: "0x40a88150427465cca3911358edc96cf16f06e431", net: 0, received: 4281, sent: 4281, txs: 2 },
    { wallet: "0x4b6915950f1400abbd05e2e805bfab7fe29b4652", net: 0, received: 1918, sent: 1918, txs: 3 },
    { wallet: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", net: 0, received: 114415, sent: 114415, txs: 2 },
    { wallet: "0x51e58309099aa17ca0af76ec936a1ed3c934596c", net: 0, received: 99694, sent: 99694, txs: 2 }
];

const WHALE_LABELS = {

};
