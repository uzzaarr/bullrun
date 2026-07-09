// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 9, 2026 at 09:33 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 142;
const WHALE_TOTAL_VOLUME      = 3109360;
const WHALE_BIGGEST_SINGLE    = 457671;

const WHALE_TRANSFERS = [
    { hash: "0xe29b726f3fd185e86cb3fd6640b0d15e2bb228c65bb0131f3764498c6d6b19b7", ts: 1783584671, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xd0a9f73f78c4b7dd03d045efe5dbd00e1381b51e", amount: 119807, block: 25493743, type: "transfer" },
    { hash: "0x69d0675574267fe4d50e5628e79bac9f165677ed0164e7a31a54dccc39d3ebbe", ts: 1783570667, from: "0x8a722431c321be4f0ee127ba90d40efa92bdea32", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 139021, block: 25492581, type: "sell" },
    { hash: "0x59aac18e0db4b3f3691be58faee352bb0b6149dce269ac9d90b702d94912f816", ts: 1783568219, from: "0xc079bfa54f348199ba51b2717595fe24e96f1542", to: "0x6912d024e2b88136c5a586e77b092199963b6083", amount: 138882, block: 25492377, type: "transfer" },
    { hash: "0x59aac18e0db4b3f3691be58faee352bb0b6149dce269ac9d90b702d94912f816", ts: 1783568219, from: "0x8a722431c321be4f0ee127ba90d40efa92bdea32", to: "0xc079bfa54f348199ba51b2717595fe24e96f1542", amount: 138882, block: 25492377, type: "transfer" },
    { hash: "0x82768e8496115292ec306717cd01842da78858e9b571264f7a47c39e16709e50", ts: 1783568051, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8a722431c321be4f0ee127ba90d40efa92bdea32", amount: 278042, block: 25492364, type: "buy" },
    { hash: "0xd90a21e6910b998bd81f9e33862775cc7629034fbe2bf66f04f8f290fc39106a", ts: 1783566827, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x2970e620ff7cb1fc2d26ea6672df1378e866fe5b", amount: 277260, block: 25492262, type: "transfer" },
    { hash: "0x489fb3d8ae1cc17c6f91e152a4e6ffb7fc10402abba195ab5bdc87e1aa190672", ts: 1783554719, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 116050, block: 25491256, type: "transfer" },
    { hash: "0x888bd2c8ebb98b2d3a4ab724eec1eba479fc87d84ba8b65a732cdb05b7c60493", ts: 1783554167, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 116050, block: 25491210, type: "transfer" },
    { hash: "0x5c3e0a3f9126b5b0a6526d82679ab02dbbe17780efb03ea43cf0b046045968dc", ts: 1783546223, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xaeca508f9ea380b7ea9799ce206b3615d3aa7e27", amount: 105616, block: 25490548, type: "transfer" },
    { hash: "0xa4dc83fa4c51065e80a045a21d45b98afb5e3e5ee4348f99beee9b1db2910e77", ts: 1783525763, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x70c69520eb6595d102bfd8aed8fc58428489c4e4", amount: 303208, block: 25488850, type: "transfer" },
    { hash: "0x85233e75e34a1b0b66d6d8d742fa68673b2a941c5e6396da32f5da1e55d07615", ts: 1783515419, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", amount: 392241, block: 25487992, type: "transfer" },
    { hash: "0xa4e8bac0e153ff6460a5038c8943caf5c58af0b25ab23196f20c9c1a9cca9416", ts: 1783510199, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x7ebe1a45f44775fa1ea36673435f079406f0ecc9", amount: 457671, block: 25487559, type: "transfer" },
    { hash: "0xadc7a6b911e9d4c2cbec88d4af12932e24bc076a0ea67a79f973707be717c78e", ts: 1783509995, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x8ddbf4335cec8ed7b97a0cc76a77ec69160c6d7a", amount: 100000, block: 25487542, type: "transfer" },
    { hash: "0x7d801e65e479e810d8b2c58dd96ca9399f296c034b30af08d9069a2cd1cf3856", ts: 1783506227, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x8ed880099dd748f2995e07b6dec87f8c6932c558", amount: 161096, block: 25487230, type: "transfer" },
    { hash: "0xf192eeb6c3ace179207f718b4f82fab50f9801a91f61c2b582a171598a98081c", ts: 1783505123, from: "0xf2bf915c69f346877961d5fe19a59c30fb856165", to: "0x9642b23ed1e01df1092b92641051881a322f5d4e", amount: 132767, block: 25487138, type: "transfer" },
    { hash: "0x3a3c02be90250080f3e8ff8f160120b0399d23524d90467bb856bf5fe8db99be", ts: 1783504919, from: "0xf81b45b1663b7ea8716c74796d99bbe4ea26f488", to: "0xf2bf915c69f346877961d5fe19a59c30fb856165", amount: 132767, block: 25487121, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x7ebe1a45f44775fa1ea36673435f079406f0ecc9", net: 457671, received: 457671, sent: 0, txs: 1 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 392241, received: 392241, sent: 0, txs: 1 },
    { wallet: "0x70c69520eb6595d102bfd8aed8fc58428489c4e4", net: 303208, received: 303208, sent: 0, txs: 1 },
    { wallet: "0x2970e620ff7cb1fc2d26ea6672df1378e866fe5b", net: 277260, received: 277260, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 163660, received: 163660, sent: 0, txs: 2 },
    { wallet: "0x8ed880099dd748f2995e07b6dec87f8c6932c558", net: 161096, received: 161096, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 132767, received: 132767, sent: 0, txs: 1 },
    { wallet: "0xd0a9f73f78c4b7dd03d045efe5dbd00e1381b51e", net: 119807, received: 119807, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 116050, received: 116050, sent: 0, txs: 1 },
    { wallet: "0xaeca508f9ea380b7ea9799ce206b3615d3aa7e27", net: 105616, received: 105616, sent: 0, txs: 1 },
    { wallet: "0x8ddbf4335cec8ed7b97a0cc76a77ec69160c6d7a", net: 100000, received: 100000, sent: 0, txs: 1 },
    { wallet: "0x9abe1355078b45b7e7f42e3f3e40df246139bc7d", net: 45002, received: 45002, sent: 0, txs: 1 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 39928, received: 39928, sent: 0, txs: 4 },
    { wallet: "0xd83bbad310f696dd59464483d28bad209b76d1fb", net: 36016, received: 36016, sent: 0, txs: 1 },
    { wallet: "0xda910ef639c863c35ed36c02fe58e2f84c3f59f1", net: 29676, received: 29676, sent: 0, txs: 1 },
    { wallet: "0x21dce84e1c9ea03025ddaefd186d6119ccb1e819", net: 11507, received: 11507, sent: 0, txs: 1 },
    { wallet: "0xfba8cdd846b80fabcac617df0f4794b3df73e700", net: 11507, received: 11507, sent: 0, txs: 1 },
    { wallet: "0xf2a9867ab1305a40a431169e2a6fe88217bc5f14", net: 10959, received: 10959, sent: 0, txs: 1 },
    { wallet: "0xe2faf292ce91a961cf922177e1937652dd129e99", net: 10959, received: 10959, sent: 0, txs: 1 },
    { wallet: "0x6871656afb2460f25db9e2c766574e42c680beaf", net: 8219, received: 8219, sent: 0, txs: 1 },
    { wallet: "0x28ede55e0ff5e20d732b989879aecfd87b8f761b", net: 3983, received: 3983, sent: 0, txs: 1 },
    { wallet: "0xec3b05d01d02b58b2392d8fccb7823d0c0094a00", net: 2221, received: 2221, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 1644, received: 1644, sent: 0, txs: 2 },
    { wallet: "0xbd36454db179b132d0b38d7049bd00467ecd21b3", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0x3168680b562e8a74371c4140fda2979cf265961b", net: 1050, received: 1050, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 728, received: 728, sent: 0, txs: 11 },
    { wallet: "0x3c9108700724d9d96cff2ac8979d6ad2a8d469ae", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x907262769c7143796829c3d9595d8d4007e65cd1", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x9df14235393c7a9d2bc38db6c12c61b699e094c6", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x298e6919c9a1b13a61f82aff610a03142afd78de", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xe02b4b1b8074e85f591dd27e703f345bb266cdd5", net: 243, received: 243, sent: 0, txs: 1 },
    { wallet: "0xea60c81326e93b1e240f33c0f62c0beca518bd81", net: 171, received: 171, sent: 0, txs: 1 },
    { wallet: "0x82d9a407f99a95db4671e7021d625cbd0787a407", net: 139, received: 139, sent: 0, txs: 1 },
    { wallet: "0xc097f3238e49c690df6a7d15cf82065bc98291a5", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xb3ee9d0f2ad274fc83df7fa363b5307bdd03987d", net: 37, received: 37, sent: 0, txs: 1 },
    { wallet: "0x7c01c6f4babf102f2bbe852bd3e571c53e390913", net: 1, received: 4384, sent: 4383, txs: 3 },
    { wallet: "0x2db6f5e838ed2bad993e9ff2d3d7a5c1cc35704c", net: 1, received: 45068, sent: 45068, txs: 3 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 63907, sent: 63907, txs: 14 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 65622, sent: 65622, txs: 18 },
    { wallet: "0x9fa27562c0e30385d9970efba782407a1abb2689", net: 0, received: 12603, sent: 12603, txs: 3 },
    { wallet: "0x028fde8d77c17f96ca8334edbc007fa0e57cd2de", net: 0, received: 12603, sent: 12603, txs: 2 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 39928, sent: 39928, txs: 8 },
    { wallet: "0x1f2f10d1c40777ae1da742455c65828ff36df387", net: 0, received: 17788, sent: 17788, txs: 2 },
    { wallet: "0x198f0c215e1491a6002e64be2ac37e12d75687f5", net: 0, received: 24778, sent: 24778, txs: 4 },
    { wallet: "0xb1f8db9d1b0b6698aca9d7ba189d60a30139dd94", net: 0, received: 4384, sent: 4384, txs: 2 },
    { wallet: "0x8a722431c321be4f0ee127ba90d40efa92bdea32", net: 0, received: 278042, sent: 278042, txs: 4 },
    { wallet: "0xc19546d779445ebe498abb9b903a494c648427ed", net: 0, received: 42740, sent: 42740, txs: 3 },
    { wallet: "0xab9f6ac1c97b3233b9d22078a0cc003028e6a25f", net: 0, received: 42740, sent: 42740, txs: 2 }
];

const WHALE_LABELS = {

};
