// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 12, 2026 at 08:07 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 85;
const WHALE_TOTAL_VOLUME      = 4290078;
const WHALE_BIGGEST_SINGLE    = 3366180;

const WHALE_TRANSFERS = [
    { hash: "0x8f54c598e45981a4583aa0ef632699da6a2fd93e3e1ce30d780fa4679dc5c2b7", ts: 1783838915, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xfbf8552292264e626ff594a6b7cef623ad5e6c18", amount: 162740, block: 25514848, type: "transfer" },
    { hash: "0x402241789bf0f32658c78af382bd87e951c6e5902a85f8d1eae3485a4ad8fe1f", ts: 1783793567, from: "0x7ac1ff9f15e3d736c613357308c4a8400a3ff379", to: "0x9642b23ed1e01df1092b92641051881a322f5d4e", amount: 380579, block: 25511087, type: "transfer" },
    { hash: "0xe28f11f7503e2c9568102a3a11b3980298edad5e9d9d1c06038b34ad9793e5c3", ts: 1783793075, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x7ac1ff9f15e3d736c613357308c4a8400a3ff379", amount: 380579, block: 25511047, type: "transfer" },
    { hash: "0xe48dcccf2e84a1e7496df74faffe8ea8e3f5c8b62af941212c1941d27e8be145", ts: 1783774271, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x28ede55e0ff5e20d732b989879aecfd87b8f761b", amount: 3366180, block: 25509484, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x28ede55e0ff5e20d732b989879aecfd87b8f761b", net: 3366180, received: 3366180, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 380579, received: 380579, sent: 0, txs: 1 },
    { wallet: "0xfbf8552292264e626ff594a6b7cef623ad5e6c18", net: 162740, received: 162740, sent: 0, txs: 1 },
    { wallet: "0x26e74d15a5c6d6f89a2e9d8cc2da3260f953c95b", net: 70754, received: 70754, sent: 0, txs: 1 },
    { wallet: "0xc07f8b8d4b5a5c7cc420267c3f50eb0c9e72f306", net: 62329, received: 62329, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 32111, received: 32111, sent: 0, txs: 3 },
    { wallet: "0x833d94482a13a7620cd3c9731bbe71c31d958012", net: 8356, received: 8356, sent: 0, txs: 1 },
    { wallet: "0xdfc90a70d89bece5ac9331fbd680e3306e9afc15", net: 7397, received: 7397, sent: 0, txs: 1 },
    { wallet: "0xbf7d14d0d1efefc6ec2ecc07b2bc026324743c00", net: 6027, received: 6027, sent: 0, txs: 1 },
    { wallet: "0xbf0290c90ec042f9d116458542f04f1c6e1dcb6c", net: 4110, received: 4110, sent: 0, txs: 1 },
    { wallet: "0xc0146b106a90a1215552be29baaf6f3b1701d3dd", net: 3314, received: 3314, sent: 0, txs: 1 },
    { wallet: "0xfc7c1d00b2ec6d3653e9de72590684456846c53d", net: 2877, received: 2877, sent: 0, txs: 1 },
    { wallet: "0xa9316ed0374857f5cc6aa20dde48fbd82dd08293", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0x772e39cc42b9a1ad0001ffb36ff7a3d9577f8f48", net: 1463, received: 1463, sent: 0, txs: 1 },
    { wallet: "0xb695091eb0618245a5e61f3f6c52babddcbf6aba", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0x41ae288f0a798046b33720c3dc80e0351892d6b9", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x5afdfc44e2dfa3e3940f479ac23097103387c23a", net: 694, received: 694, sent: 0, txs: 1 },
    { wallet: "0x9c80be297da76357cb8b57f93b68bfa51a8e3843", net: 307, received: 307, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 196, received: 196, sent: 0, txs: 6 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x39faf1de461849163e390d0a57d1eaa632064a49", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xe1d66051d028562e2c392f8d5805de9ca18a14a6", net: 41, received: 41, sent: 0, txs: 1 },
    { wallet: "0x1b8b2d9127f16804e94e0523b0f0e21a852f3d07", net: 33, received: 33, sent: 0, txs: 1 },
    { wallet: "0x5a59d9f31282f427efd742400b1dc042e8710253", net: 0, received: 1499, sent: 1499, txs: 2 },
    { wallet: "0x0536d0add5a1d3a2132bcd896277483605c4e11c", net: 0, received: 1507, sent: 1507, txs: 3 },
    { wallet: "0xc448fcb3a2ad47f4a8288b76efb13f6c0c0c54af", net: 0, received: 1507, sent: 1507, txs: 2 },
    { wallet: "0x17208147167097698aeab7c9678b7129783c51c2", net: 0, received: 14201, sent: 14201, txs: 2 },
    { wallet: "0xdedd1067c722ed993a7bcc3a631d8bb96d9e39e5", net: 0, received: 14247, sent: 14247, txs: 3 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 19990, sent: 19990, txs: 5 },
    { wallet: "0xb9f7f9c706f1d014264f065408bf69635f8885ac", net: 0, received: 33973, sent: 33973, txs: 4 },
    { wallet: "0x163f3103de041d25464e2c8a4f8f3187ec1856e0", net: 0, received: 56410, sent: 56410, txs: 14 },
    { wallet: "0x198f0c215e1491a6002e64be2ac37e12d75687f5", net: 0, received: 36410, sent: 36410, txs: 7 },
    { wallet: "0x22ecf2bed494976503a8087add30e134c30fbd98", net: 0, received: 12771, sent: 12771, txs: 4 },
    { wallet: "0x7ac1ff9f15e3d736c613357308c4a8400a3ff379", net: 0, received: 380579, sent: 380579, txs: 2 },
    { wallet: "0x8e29fb98ba7f111461609cc50c49fae14db8e893", net: 0, received: 4110, sent: 4110, txs: 2 },
    { wallet: "0x3eb99584fd10c38a50a7a2b3b4f050f861601242", net: 0, received: 4110, sent: 4110, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 1130, sent: 1130, txs: 5 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 7764, sent: 7764, txs: 6 },
    { wallet: "0x10916b18ce6deef279f0ee66fab6b6c0e3461b78", net: 0, received: 710, sent: 710, txs: 4 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 6633, sent: 6633, txs: 3 },
    { wallet: "0x77b8610446bcf562faabadb6aa41680565b83609", net: 0, received: 6671, sent: 6671, txs: 3 },
    { wallet: "0x5b89183e8307f0aefbaf0c63b406207fd5476394", net: 0, received: 16410, sent: 16410, txs: 2 },
    { wallet: "0x214a439a6c52259117ac3598bebe62d0c2efa813", net: 0, received: 16438, sent: 16438, txs: 3 },
    { wallet: "0x49a2299840a9a5495cae51415548c2b1344bd4f3", net: 0, received: 16438, sent: 16438, txs: 2 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: -10, received: 19990, sent: 20000, txs: 4 },
    { wallet: "0x74323b4161747f4e7beb536c961f394e6068c2da", net: -4384, received: 9863, sent: 14247, txs: 2 },
    { wallet: "0xcf720926891ea8641b899152a8149de71017b67c", net: -28493, received: 5479, sent: 33973, txs: 2 }
];

const WHALE_LABELS = {

};
