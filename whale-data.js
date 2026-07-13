// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 13, 2026 at 08:57 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 106;
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
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 39867, received: 39867, sent: 0, txs: 4 },
    { wallet: "0xbcbf8103e16bdd31d5e6b39b1d4ee510b4a13f11", net: 35753, received: 35753, sent: 0, txs: 1 },
    { wallet: "0xc967d082aa2481e737e9040dc079a2c69194f1e0", net: 28954, received: 28954, sent: 0, txs: 1 },
    { wallet: "0xbe4ae6e24d12dbd180517f126765178bae81f341", net: 19726, received: 19726, sent: 0, txs: 1 },
    { wallet: "0x1ef272a3d6d0d07dd1ef065bb5238786e46d8d8c", net: 17260, received: 17260, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 8767, received: 8767, sent: 0, txs: 1 },
    { wallet: "0x64ed1cb0cbe5e9206627bd294f144202e31839af", net: 7620, received: 7620, sent: 0, txs: 1 },
    { wallet: "0xc07f8b8d4b5a5c7cc420267c3f50eb0c9e72f306", net: 4795, received: 4795, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 3814, received: 3814, sent: 0, txs: 2 },
    { wallet: "0xe41d9b3c2be1dd213f97ede35d9da0de654e12a8", net: 3670, received: 3670, sent: 0, txs: 1 },
    { wallet: "0x8b10e16d47f111e219006963df9aebc53604c73a", net: 3562, received: 3562, sent: 0, txs: 1 },
    { wallet: "0xd1966596e0d9c4033d19b5e12d1f14b183dfa2c5", net: 2877, received: 2877, sent: 0, txs: 1 },
    { wallet: "0xe28d7502e70c9b45de8218b122a72a1eaf972695", net: 2099, received: 2099, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xfaa78f45f59770b9274d19bf7bf9b0a10fd5a851", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x549ad2435760a459bbbe4c6585db7f2b31b0112f", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x08ac7cdcab984359b98da3431df0147f326c0ef6", net: 959, received: 959, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x950618712a5cd5a221c8a95930947cb76576eb76", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x7bdc65dbdc378d099da8da17add52a28f2f626ea", net: 616, received: 1233, sent: 616, txs: 2 },
    { wallet: "0xf40ffd618c7fee6a912ca029ad05aaada6c01d70", net: 616, received: 616, sent: 0, txs: 1 },
    { wallet: "0xc427eb594bf7e6f83a522bc47007d6276ebaed14", net: 572, received: 572, sent: 0, txs: 1 },
    { wallet: "0x40b2f1262a394a69f4446ceebca52bc58eb92bf4", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xec4017fda40716ca24f8d1cb03a5baaa1e8b422a", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x3c9108700724d9d96cff2ac8979d6ad2a8d469ae", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x3036e2dba06fbc54fd7ec22473f314f292105aff", net: 153, received: 153, sent: 0, txs: 1 },
    { wallet: "0x74323b4161747f4e7beb536c961f394e6068c2da", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 127, received: 127, sent: 0, txs: 5 },
    { wallet: "0x10025d5f67676b2aaf72caeb56e9159132151b72", net: 2, received: 2, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 2, received: 2, sent: 0, txs: 1 },
    { wallet: "0x3c8b6ff2eb679f0a69c98af2aab62260ba247cb3", net: 2, received: 2, sent: 0, txs: 1 },
    { wallet: "0x9631288f4050f7cfbf77b77f8540decf6cfc7012", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0xc079bfa54f348199ba51b2717595fe24e96f1542", net: 0, received: 10, sent: 10, txs: 4 },
    { wallet: "0xa58bdd0ab5ebbb8dc425090fea8fd0ba969c1668", net: 0, received: 31509, sent: 31509, txs: 9 },
    { wallet: "0xdb3812cd8d20f27888677ddc97df1241850f8c48", net: 0, received: 7399, sent: 7399, txs: 2 },
    { wallet: "0x2cedcc1fedb8dcae93a88bbf26df039071bb7243", net: 0, received: 411, sent: 411, txs: 2 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 39867, sent: 39867, txs: 11 },
    { wallet: "0xad729fcd02e52938c29284d0ab3b4f1c3f66802c", net: 0, received: 548, sent: 548, txs: 2 },
    { wallet: "0x9e622d9e9137fd38fc033cc0d583aa89eed9c5fd", net: 0, received: 475409, sent: 475409, txs: 6 },
    { wallet: "0x1f2f10d1c40777ae1da742455c65828ff36df387", net: 0, received: 9684, sent: 9684, txs: 2 },
    { wallet: "0x163f3103de041d25464e2c8a4f8f3187ec1856e0", net: 0, received: 118852, sent: 118852, txs: 6 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 22586, sent: 22586, txs: 12 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 13505, sent: 13505, txs: 4 },
    { wallet: "0xf93d03e45988eccb2e1388cfafbbddf155a1595c", net: 0, received: 2862, sent: 2862, txs: 2 },
    { wallet: "0x5b1ab2c47b44d15172c799a8db7c61ab4f8df375", net: 0, received: 952, sent: 952, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 1869, sent: 1869, txs: 2 },
    { wallet: "0x40a88150427465cca3911358edc96cf16f06e431", net: 0, received: 1869, sent: 1869, txs: 2 }
];

const WHALE_LABELS = {

};
