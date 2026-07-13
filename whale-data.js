// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 13, 2026 at 07:17 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 120;
const WHALE_TOTAL_VOLUME      = 973882;
const WHALE_BIGGEST_SINGLE    = 475270;

const WHALE_TRANSFERS = [
    { hash: "0x32471b17688e1916f3cf8597c7cf0fd322d2ef3b1189ab2767bb4320ac3ddffa", ts: 1783907507, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x2f36fb837850aa0a491cc2a5a075c90f5153a3fd", amount: 142055, block: 25520545, type: "transfer" },
    { hash: "0xd5e5c34120218a386b31ac10f2bc3e2690d02f821f7cfcdabb4915f356aae5ba", ts: 1783893719, from: "0x9e622d9e9137fd38fc033cc0d583aa89eed9c5fd", to: "0x43e86f6198b99e21918f3fa07c3a68a5587409e3", amount: 356557, block: 25519398, type: "transfer" },
    { hash: "0x811badea4e22d736999269d65cd05e49dd2735fad0b7db8835e0a0bad3722a25", ts: 1783887071, from: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", to: "0x9e622d9e9137fd38fc033cc0d583aa89eed9c5fd", amount: 475270, block: 25518846, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x43e86f6198b99e21918f3fa07c3a68a5587409e3", net: 356557, received: 356557, sent: 0, txs: 1 },
    { wallet: "0x2f36fb837850aa0a491cc2a5a075c90f5153a3fd", net: 142055, received: 142055, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 98938, received: 98938, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 48933, received: 62520, sent: 13587, txs: 2 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 39867, received: 39867, sent: 0, txs: 4 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 24513, received: 138045, sent: 113532, txs: 5 },
    { wallet: "0xbe4ae6e24d12dbd180517f126765178bae81f341", net: 19726, received: 19726, sent: 0, txs: 1 },
    { wallet: "0x1ef272a3d6d0d07dd1ef065bb5238786e46d8d8c", net: 17260, received: 17260, sent: 0, txs: 1 },
    { wallet: "0x2b95e0d432b0e3ec99bd76f9b287e3accf560a10", net: 14446, received: 14594, sent: 148, txs: 2 },
    { wallet: "0xe19ed11103265687a351662aab588a890ec598b4", net: 13587, received: 13587, sent: 0, txs: 1 },
    { wallet: "0xa54c11dc5c04ed8b95481d1cd8ec07695b1d5583", net: 6849, received: 6849, sent: 0, txs: 1 },
    { wallet: "0x1182ad22b3df49fd1da9a004a8a42ad6ce8211c8", net: 6308, received: 6308, sent: 0, txs: 1 },
    { wallet: "0xc07f8b8d4b5a5c7cc420267c3f50eb0c9e72f306", net: 4795, received: 4795, sent: 0, txs: 1 },
    { wallet: "0xe41d9b3c2be1dd213f97ede35d9da0de654e12a8", net: 3670, received: 3670, sent: 0, txs: 1 },
    { wallet: "0x8b10e16d47f111e219006963df9aebc53604c73a", net: 3562, received: 3562, sent: 0, txs: 1 },
    { wallet: "0xd1966596e0d9c4033d19b5e12d1f14b183dfa2c5", net: 2877, received: 2877, sent: 0, txs: 1 },
    { wallet: "0x70fe74e426e5419223a9c0a5d343dc3d96c8a1cf", net: 2329, received: 2329, sent: 0, txs: 1 },
    { wallet: "0x538960b9e4849bd2eeea32d3994480969e1da019", net: 1918, received: 1918, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xfaa78f45f59770b9274d19bf7bf9b0a10fd5a851", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x5afdfc44e2dfa3e3940f479ac23097103387c23a", net: 1622, received: 1622, sent: 0, txs: 1 },
    { wallet: "0x7bdc65dbdc378d099da8da17add52a28f2f626ea", net: 616, received: 1233, sent: 616, txs: 2 },
    { wallet: "0xf40ffd618c7fee6a912ca029ad05aaada6c01d70", net: 616, received: 616, sent: 0, txs: 1 },
    { wallet: "0xc427eb594bf7e6f83a522bc47007d6276ebaed14", net: 572, received: 572, sent: 0, txs: 1 },
    { wallet: "0x40b2f1262a394a69f4446ceebca52bc58eb92bf4", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xec4017fda40716ca24f8d1cb03a5baaa1e8b422a", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 392, received: 392, sent: 0, txs: 9 },
    { wallet: "0xb695091eb0618245a5e61f3f6c52babddcbf6aba", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x3036e2dba06fbc54fd7ec22473f314f292105aff", net: 153, received: 153, sent: 0, txs: 1 },
    { wallet: "0xd17cb60b2260477e580def6925e2c1049fb0d790", net: 148, received: 148, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x74323b4161747f4e7beb536c961f394e6068c2da", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 5, received: 5, sent: 0, txs: 1 },
    { wallet: "0xee927082434f0c866f5030444818d19fe714a6bc", net: 1, received: 822, sent: 822, txs: 3 },
    { wallet: "0x6413d8f85a2eff1dc3ee3e0db7d8c89ccbd51dc5", net: 1, received: 5753, sent: 5752, txs: 3 },
    { wallet: "0x9631288f4050f7cfbf77b77f8540decf6cfc7012", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 31477, sent: 31477, txs: 15 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 31477, sent: 31477, txs: 12 },
    { wallet: "0xe68ca04bd664f37a348029803a330e5401c13847", net: 0, received: 6849, sent: 6849, txs: 2 },
    { wallet: "0x10916b18ce6deef279f0ee66fab6b6c0e3461b78", net: 0, received: 1201, sent: 1202, txs: 4 },
    { wallet: "0x3c9108700724d9d96cff2ac8979d6ad2a8d469ae", net: 0, received: 274, sent: 274, txs: 2 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 0, received: 959, sent: 959, txs: 4 },
    { wallet: "0xfd99919f25ec76b61d770d3d03528260dfbb2cb5", net: 0, received: 5720, sent: 5720, txs: 2 },
    { wallet: "0xac2dd467dbbca0b146d909a3363d9d3dcdec56aa", net: 0, received: 5753, sent: 5753, txs: 2 },
    { wallet: "0xa58bdd0ab5ebbb8dc425090fea8fd0ba969c1668", net: 0, received: 9026, sent: 9026, txs: 6 },
    { wallet: "0xb0a381f5b15f6a2d2f3a5aa7398837026cd6c949", net: 0, received: 1644, sent: 1644, txs: 3 },
    { wallet: "0x898b24d8c37b38c19bd7d1a14ea2988fe2a1c933", net: 0, received: 1644, sent: 1644, txs: 2 },
    { wallet: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", net: 0, received: 98938, sent: 98938, txs: 2 },
    { wallet: "0xcffbd944872e2cc0ac546c86a53ece2c57d48f26", net: 0, received: 69344, sent: 69344, txs: 2 },
    { wallet: "0x9c1fb92068bcd4e135e49845b46f3c8558bc2a7e", net: 0, received: 132532, sent: 132532, txs: 6 }
];

const WHALE_LABELS = {

};
