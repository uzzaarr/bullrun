// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 6, 2026 at 03:19 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 100;
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
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 67083, received: 67083, sent: 0, txs: 1 },
    { wallet: "0xfb693ac2295a5c729b33aff6adfcc411aa9029d6", net: 63531, received: 63531, sent: 0, txs: 1 },
    { wallet: "0xd83bbad310f696dd59464483d28bad209b76d1fb", net: 54667, received: 54667, sent: 0, txs: 1 },
    { wallet: "0x538960b9e4849bd2eeea32d3994480969e1da019", net: 43014, received: 43014, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 31393, received: 31393, sent: 0, txs: 1 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 30772, received: 30772, sent: 0, txs: 1 },
    { wallet: "0x04c7b4e2db71b2abffe4f2131cf2754533cf32da", net: 28665, received: 28665, sent: 0, txs: 2 },
    { wallet: "0x0b1159d3c1a7e259509579d8317c5eb60baf2b1c", net: 27397, received: 27397, sent: 0, txs: 1 },
    { wallet: "0xee367d7e1151fc6d22f505738954d426eea9136d", net: 25479, received: 25479, sent: 0, txs: 1 },
    { wallet: "0xa22fec6701a2450c7bb89ec44c1dc709978d37c7", net: 23129, received: 23129, sent: 0, txs: 1 },
    { wallet: "0xd43026d607c66f4ecadd408867e8ba9af05f3875", net: 7945, received: 7945, sent: 0, txs: 1 },
    { wallet: "0x5ef14c2575cd87b59742c165abdc039e441261de", net: 7393, received: 7393, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 4384, received: 4384, sent: 0, txs: 1 },
    { wallet: "0x1f0d9b1835e7b2844d94b0038c80ac387a439fcc", net: 3836, received: 3836, sent: 0, txs: 1 },
    { wallet: "0x5151cc20b683f4492fb3ef70c2ea2d3d0480ed61", net: 3641, received: 3641, sent: 0, txs: 1 },
    { wallet: "0xc7d559266d4c4b2255bb3bb62d53338c834b7da7", net: 3014, received: 3014, sent: 0, txs: 1 },
    { wallet: "0x4b5f834ede79c52bd33d952c719a0b641a0310ea", net: 2765, received: 2765, sent: 0, txs: 1 },
    { wallet: "0x2a76a5be3bca8200f7810600ed9201103746810b", net: 1918, received: 1918, sent: 0, txs: 1 },
    { wallet: "0x1157e5e64b60d7a9ff9a16aa86f7b062b31a5f02", net: 1781, received: 1781, sent: 0, txs: 1 },
    { wallet: "0x4f3889331539ab2ed976dbaf67c8def36deeed15", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x1b0b1ad3e6a2fb69c48c2913fea012bc38f0a2e9", net: 959, received: 959, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 691, received: 691, sent: 0, txs: 6 },
    { wallet: "0x83ce36503d668dc4efe16416b92f498d06cdc88b", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x07f3b652d1673b3f39933550bbbbd490c68fc4b2", net: 512, received: 512, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x88c40cd47ec72e481051c1c495fd0e7a23a30cee", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xb8294f8f8f6619a299688f1ca12cb967fc9a6176", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x9be5b8a7314552fa47feb1355cd5b4adc7bb7516", net: 336, received: 30859, sent: 30523, txs: 4 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 274, received: 274, sent: 0, txs: 2 },
    { wallet: "0xa05853274a5c3bb5080352e413487d24e758444a", net: 165, received: 165, sent: 0, txs: 1 },
    { wallet: "0x510d3ea344f63c3f1d46324637a1d1633fe9065f", net: 3, received: 3, sent: 0, txs: 2 },
    { wallet: "0x6f43923c8ce1f6c6d950cd3ba3ae2c7e2074abdc", net: 1, received: 109726, sent: 109725, txs: 5 },
    { wallet: "0x767c23ea87debe44f3d7b02e10e66b6af9e5c2a3", net: 0, received: 23129, sent: 23129, txs: 2 },
    { wallet: "0xf9b7ad873ce26a2e62b5eca375f84ee86020354e", net: 0, received: 23298, sent: 23298, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 169149, sent: 169149, txs: 15 },
    { wallet: "0x40a88150427465cca3911358edc96cf16f06e431", net: 0, received: 2683, sent: 2683, txs: 2 },
    { wallet: "0x235a94dca08aef3e0740c35ccea69651568a1b00", net: 0, received: 7393, sent: 7393, txs: 2 },
    { wallet: "0xb699f7085c6aa8478f81499d972f8ce16539c3ad", net: 0, received: 7561, sent: 7561, txs: 2 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 54890, sent: 54890, txs: 16 },
    { wallet: "0xd3df5bce12bc0789add17a823d723ed8e499d538", net: 0, received: 4637, sent: 4637, txs: 2 },
    { wallet: "0x23d061e59d8d6a2edf56963ca0305b338f5fc95f", net: 0, received: 4637, sent: 4637, txs: 2 },
    { wallet: "0xd2a9bae5bdcbe791ddea1c7e23f20040fc547dfe", net: 0, received: 31393, sent: 31393, txs: 2 },
    { wallet: "0x7a8b0fb130cd597ec0053e2d7b18972458e42ea9", net: 0, received: 7505, sent: 7505, txs: 2 },
    { wallet: "0x09fc1031d03a78ed4f60463fa9749870d33439bc", net: 0, received: 7534, sent: 7534, txs: 3 },
    { wallet: "0xca08005f080c57936effa193da94547e95a3439a", net: 0, received: 7534, sent: 7534, txs: 2 },
    { wallet: "0x9b2727759f4b3fcfb84ce40d7b9a77b214d42d1a", net: 0, received: 10510, sent: 10510, txs: 2 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 164928, sent: 164928, txs: 12 },
    { wallet: "0x139f510d1791959c5357fc57804fdfff6697afab", net: 0, received: 33836, sent: 33836, txs: 3 },
    { wallet: "0xb136218cf4c0864a786a799ad1b84bd449d4dc3e", net: 0, received: 33836, sent: 33836, txs: 2 }
];

const WHALE_LABELS = {

};
