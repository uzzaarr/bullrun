// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 6, 2026 at 07:48 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 140;
const WHALE_TOTAL_VOLUME      = 523335;
const WHALE_BIGGEST_SINGLE    = 109726;

const WHALE_TRANSFERS = [
    { hash: "0xa9022f857b1348f0cb85b066cf6ba9c924832698f49219bdcaa277d340cd8800", ts: 1783325291, from: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", to: "0x8f10b468b06c6fd214b65f87778827f7d113f996", amount: 101188, block: 25472195, type: "transfer" },
    { hash: "0xa9022f857b1348f0cb85b066cf6ba9c924832698f49219bdcaa277d340cd8800", ts: 1783325291, from: "0xd7a8cd5bed870772fbb2c54291a6f8df4588e110", to: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", amount: 101188, block: 25472195, type: "transfer" },
    { hash: "0x1f18ffb9e3f34847c2c59e83805dcc0646a306df271ec2b10d803aff204e7428", ts: 1783325075, from: "0x65dff149e88d016a14a0ad086ab83e3ae8be6db0", to: "0xd7a8cd5bed870772fbb2c54291a6f8df4588e110", amount: 101507, block: 25472177, type: "transfer" },
    { hash: "0x475e5b13673fd97644dd85caf0e6a8cbf0be8e75bbbc5426c18330d5aaec968a", ts: 1783286063, from: "0x144cfc55b28b533fdee07c2e7fa8468354e12fda", to: "0x6f43923c8ce1f6c6d950cd3ba3ae2c7e2074abdc", amount: 109726, block: 25468939, type: "transfer" },
    { hash: "0xa18e66f9434de2566ee741a22d78fdd4692f0d446d297a42f4e773e64a2012d3", ts: 1783285919, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x144cfc55b28b533fdee07c2e7fa8468354e12fda", amount: 109726, block: 25468927, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 95630, received: 95630, sent: 0, txs: 3 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 81886, received: 81886, sent: 0, txs: 2 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 67083, received: 67083, sent: 0, txs: 1 },
    { wallet: "0xd83bbad310f696dd59464483d28bad209b76d1fb", net: 54667, received: 54667, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 50790, received: 80466, sent: 29676, txs: 3 },
    { wallet: "0x82a365858b4a82eed80e5473c6f698f93b48617f", net: 49183, received: 49183, sent: 0, txs: 2 },
    { wallet: "0x65668dfa245f0f8b519b8c9f25174023ebadc2aa", net: 47000, received: 47000, sent: 0, txs: 1 },
    { wallet: "0x6a79b5142ed23875ce46f40826ff686b5429f78f", net: 43339, received: 43339, sent: 0, txs: 1 },
    { wallet: "0x538960b9e4849bd2eeea32d3994480969e1da019", net: 43014, received: 43014, sent: 0, txs: 1 },
    { wallet: "0x2eae04d70f3c955e6c5a100c9779d6aae246410d", net: 38057, received: 38057, sent: 0, txs: 1 },
    { wallet: "0xe91a382ec99df4cbe0d1de546b5aa17ea0f2cedc", net: 29676, received: 29676, sent: 0, txs: 1 },
    { wallet: "0xbbf7e985e1e0ca6f854cecb5096274e8e797e8b4", net: 28665, received: 28665, sent: 0, txs: 1 },
    { wallet: "0x0b1159d3c1a7e259509579d8317c5eb60baf2b1c", net: 27397, received: 27397, sent: 0, txs: 1 },
    { wallet: "0xee367d7e1151fc6d22f505738954d426eea9136d", net: 25479, received: 25479, sent: 0, txs: 1 },
    { wallet: "0xa22fec6701a2450c7bb89ec44c1dc709978d37c7", net: 23129, received: 23129, sent: 0, txs: 1 },
    { wallet: "0x9be5b8a7314552fa47feb1355cd5b4adc7bb7516", net: 20679, received: 51202, sent: 30523, txs: 5 },
    { wallet: "0x16947937aca05aa185b1406d0a2432fc8bdd0126", net: 15000, received: 15000, sent: 0, txs: 1 },
    { wallet: "0xe2a4de267cdd4ff5ed9ba13552f5c624b12db9b2", net: 9452, received: 9452, sent: 0, txs: 1 },
    { wallet: "0x1a996eb2a69423926d60973fc3d73cf1fa847a2f", net: 8767, received: 8767, sent: 0, txs: 1 },
    { wallet: "0xd43026d607c66f4ecadd408867e8ba9af05f3875", net: 7945, received: 7945, sent: 0, txs: 1 },
    { wallet: "0x5ef14c2575cd87b59742c165abdc039e441261de", net: 7393, received: 7393, sent: 0, txs: 1 },
    { wallet: "0x5511a0371fa859183dfc7bc508bb036c93a7de49", net: 7123, received: 7123, sent: 0, txs: 1 },
    { wallet: "0x716e3fad60bc867449795cd624da34aab3dc381f", net: 6382, received: 6382, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 4384, received: 4384, sent: 0, txs: 1 },
    { wallet: "0x1f0d9b1835e7b2844d94b0038c80ac387a439fcc", net: 3836, received: 3836, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0xc7d559266d4c4b2255bb3bb62d53338c834b7da7", net: 3014, received: 3014, sent: 0, txs: 1 },
    { wallet: "0x4b5f834ede79c52bd33d952c719a0b641a0310ea", net: 2765, received: 2765, sent: 0, txs: 1 },
    { wallet: "0x2a76a5be3bca8200f7810600ed9201103746810b", net: 1918, received: 1918, sent: 0, txs: 1 },
    { wallet: "0x1157e5e64b60d7a9ff9a16aa86f7b062b31a5f02", net: 1781, received: 1781, sent: 0, txs: 1 },
    { wallet: "0x4f3889331539ab2ed976dbaf67c8def36deeed15", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x1b0b1ad3e6a2fb69c48c2913fea012bc38f0a2e9", net: 959, received: 959, sent: 0, txs: 1 },
    { wallet: "0x676429768cbeac163383f26cab1f5a12f6ffec53", net: 890, received: 15890, sent: 15000, txs: 2 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 722, received: 722, sent: 0, txs: 7 },
    { wallet: "0x9df14235393c7a9d2bc38db6c12c61b699e094c6", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x83ce36503d668dc4efe16416b92f498d06cdc88b", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x2cacf25ae508d3bf9eaeb4e46ebb219a137c24b7", net: 412, received: 412, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xa05853274a5c3bb5080352e413487d24e758444a", net: 165, received: 165, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x28bf6006d87de7f44445905aa4f5cb8c0d8cba02", net: 18, received: 50511, sent: 50493, txs: 5 },
    { wallet: "0x510d3ea344f63c3f1d46324637a1d1633fe9065f", net: 3, received: 3, sent: 0, txs: 2 },
    { wallet: "0x6f43923c8ce1f6c6d950cd3ba3ae2c7e2074abdc", net: 1, received: 109726, sent: 109725, txs: 5 },
    { wallet: "0x279a2a69bf25427fe07e594af2e58a1810e9bde9", net: 0, received: 80466, sent: 80466, txs: 4 },
    { wallet: "0xabed4c12a28d714ae84c0ed2f21c78272f05032a", net: 0, received: 6970, sent: 6970, txs: 2 },
    { wallet: "0xfe263102682933297cb65dc813e5193249769251", net: 0, received: 6382, sent: 6382, txs: 2 },
    { wallet: "0x04c7b4e2db71b2abffe4f2131cf2754533cf32da", net: 0, received: 28665, sent: 28665, txs: 3 },
    { wallet: "0x9164fac423074db84d3f451ec3c7637e255bde53", net: 0, received: 38057, sent: 38057, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 207206, sent: 207206, txs: 18 }
];

const WHALE_LABELS = {

};
