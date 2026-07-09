// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 9, 2026 at 07:29 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 135;
const WHALE_TOTAL_VOLUME      = 1673203;
const WHALE_BIGGEST_SINGLE    = 278042;

const WHALE_TRANSFERS = [
    { hash: "0x1c2d7c7bec47431b37cd08706b55fca98b656ad24bfbc7dda794e33e8b8097df", ts: 1783599143, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", amount: 243593, block: 25494944, type: "transfer" },
    { hash: "0xe29b726f3fd185e86cb3fd6640b0d15e2bb228c65bb0131f3764498c6d6b19b7", ts: 1783584671, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xd0a9f73f78c4b7dd03d045efe5dbd00e1381b51e", amount: 119807, block: 25493743, type: "transfer" },
    { hash: "0x69d0675574267fe4d50e5628e79bac9f165677ed0164e7a31a54dccc39d3ebbe", ts: 1783570667, from: "0x8a722431c321be4f0ee127ba90d40efa92bdea32", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 139021, block: 25492581, type: "sell" },
    { hash: "0x59aac18e0db4b3f3691be58faee352bb0b6149dce269ac9d90b702d94912f816", ts: 1783568219, from: "0xc079bfa54f348199ba51b2717595fe24e96f1542", to: "0x6912d024e2b88136c5a586e77b092199963b6083", amount: 138882, block: 25492377, type: "transfer" },
    { hash: "0x59aac18e0db4b3f3691be58faee352bb0b6149dce269ac9d90b702d94912f816", ts: 1783568219, from: "0x8a722431c321be4f0ee127ba90d40efa92bdea32", to: "0xc079bfa54f348199ba51b2717595fe24e96f1542", amount: 138882, block: 25492377, type: "transfer" },
    { hash: "0x82768e8496115292ec306717cd01842da78858e9b571264f7a47c39e16709e50", ts: 1783568051, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8a722431c321be4f0ee127ba90d40efa92bdea32", amount: 278042, block: 25492364, type: "buy" },
    { hash: "0xd90a21e6910b998bd81f9e33862775cc7629034fbe2bf66f04f8f290fc39106a", ts: 1783566827, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x2970e620ff7cb1fc2d26ea6672df1378e866fe5b", amount: 277260, block: 25492262, type: "transfer" },
    { hash: "0x489fb3d8ae1cc17c6f91e152a4e6ffb7fc10402abba195ab5bdc87e1aa190672", ts: 1783554719, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 116050, block: 25491256, type: "transfer" },
    { hash: "0x888bd2c8ebb98b2d3a4ab724eec1eba479fc87d84ba8b65a732cdb05b7c60493", ts: 1783554167, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 116050, block: 25491210, type: "transfer" },
    { hash: "0x5c3e0a3f9126b5b0a6526d82679ab02dbbe17780efb03ea43cf0b046045968dc", ts: 1783546223, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xaeca508f9ea380b7ea9799ce206b3615d3aa7e27", amount: 105616, block: 25490548, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x2970e620ff7cb1fc2d26ea6672df1378e866fe5b", net: 277260, received: 277260, sent: 0, txs: 1 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 243593, received: 243593, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 191617, received: 191617, sent: 0, txs: 3 },
    { wallet: "0xd0a9f73f78c4b7dd03d045efe5dbd00e1381b51e", net: 119807, received: 119807, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 116050, received: 116050, sent: 0, txs: 1 },
    { wallet: "0xaeca508f9ea380b7ea9799ce206b3615d3aa7e27", net: 105616, received: 105616, sent: 0, txs: 1 },
    { wallet: "0x19888e92ee029e6641e178ebd2346fc1f7d845bd", net: 72877, received: 72877, sent: 0, txs: 1 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 59826, received: 59826, sent: 0, txs: 6 },
    { wallet: "0x9abe1355078b45b7e7f42e3f3e40df246139bc7d", net: 45002, received: 45002, sent: 0, txs: 1 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 40006, received: 40006, sent: 0, txs: 1 },
    { wallet: "0xd83bbad310f696dd59464483d28bad209b76d1fb", net: 36016, received: 36016, sent: 0, txs: 1 },
    { wallet: "0x21dce84e1c9ea03025ddaefd186d6119ccb1e819", net: 11507, received: 11507, sent: 0, txs: 1 },
    { wallet: "0xf2a9867ab1305a40a431169e2a6fe88217bc5f14", net: 10959, received: 10959, sent: 0, txs: 1 },
    { wallet: "0x47670e064a9cf54102481f199915e392ce357d60", net: 9863, received: 9863, sent: 0, txs: 1 },
    { wallet: "0x6871656afb2460f25db9e2c766574e42c680beaf", net: 8219, received: 8219, sent: 0, txs: 1 },
    { wallet: "0xe94a146d6bb643c4439405495ddee4472eb115ac", net: 4110, received: 4110, sent: 0, txs: 1 },
    { wallet: "0x69987be7ce4cc89d0e00e0b8fa652f10e22fce7c", net: 3836, received: 3836, sent: 0, txs: 1 },
    { wallet: "0xdc56fd9d0112f44c9c4944e544fd20987c8b3a8c", net: 2802, received: 2802, sent: 0, txs: 1 },
    { wallet: "0x3168680b562e8a74371c4140fda2979cf265961b", net: 1050, received: 1050, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 622, received: 622, sent: 0, txs: 10 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x907262769c7143796829c3d9595d8d4007e65cd1", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x82d9a407f99a95db4671e7021d625cbd0787a407", net: 139, received: 139, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 119, received: 119, sent: 0, txs: 1 },
    { wallet: "0xb3ee9d0f2ad274fc83df7fa363b5307bdd03987d", net: 37, received: 37, sent: 0, txs: 1 },
    { wallet: "0x7c01c6f4babf102f2bbe852bd3e571c53e390913", net: 1, received: 4384, sent: 4383, txs: 3 },
    { wallet: "0x2db6f5e838ed2bad993e9ff2d3d7a5c1cc35704c", net: 1, received: 45068, sent: 45068, txs: 3 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 119, sent: 119, txs: 2 },
    { wallet: "0xd9f76930d7df99aef4dc4cff48ee236d4583c28a", net: 0, received: 27957, sent: 27957, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 73158, sent: 73158, txs: 7 },
    { wallet: "0x1f2f10d1c40777ae1da742455c65828ff36df387", net: 0, received: 28083, sent: 28083, txs: 4 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 59826, sent: 59826, txs: 12 },
    { wallet: "0x66a9893cc07d91d95644aedd05d03f95e1dba8af", net: 0, received: 1657, sent: 1657, txs: 2 },
    { wallet: "0x96f87e6c7dd37676c1503aa77a93f86eddc0cd25", net: 0, received: 1657, sent: 1657, txs: 2 },
    { wallet: "0x480bd2968f4767209daaa83e04d2bf4716784711", net: 0, received: 31233, sent: 31233, txs: 4 },
    { wallet: "0xc10ee9031f2a0b84766a86b55a8d90f357910fb4", net: 0, received: 32192, sent: 32192, txs: 2 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 64699, sent: 64699, txs: 18 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 62384, sent: 62384, txs: 14 },
    { wallet: "0x10916b18ce6deef279f0ee66fab6b6c0e3461b78", net: 0, received: 884, sent: 884, txs: 4 },
    { wallet: "0x3c9108700724d9d96cff2ac8979d6ad2a8d469ae", net: 0, received: 685, sent: 685, txs: 2 },
    { wallet: "0x9fa27562c0e30385d9970efba782407a1abb2689", net: 0, received: 12603, sent: 12603, txs: 3 },
    { wallet: "0x028fde8d77c17f96ca8334edbc007fa0e57cd2de", net: 0, received: 12603, sent: 12603, txs: 2 },
    { wallet: "0x198f0c215e1491a6002e64be2ac37e12d75687f5", net: 0, received: 24778, sent: 24778, txs: 4 },
    { wallet: "0xb1f8db9d1b0b6698aca9d7ba189d60a30139dd94", net: 0, received: 4384, sent: 4384, txs: 2 },
    { wallet: "0x8a722431c321be4f0ee127ba90d40efa92bdea32", net: 0, received: 278042, sent: 278042, txs: 4 },
    { wallet: "0xc19546d779445ebe498abb9b903a494c648427ed", net: 0, received: 42740, sent: 42740, txs: 3 },
    { wallet: "0xab9f6ac1c97b3233b9d22078a0cc003028e6a25f", net: 0, received: 42740, sent: 42740, txs: 2 },
    { wallet: "0xc079bfa54f348199ba51b2717595fe24e96f1542", net: 0, received: 139021, sent: 139021, txs: 4 }
];

const WHALE_LABELS = {

};
