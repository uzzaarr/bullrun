// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 15, 2026 at 01:23 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 184;
const WHALE_TOTAL_VOLUME      = 6053273;
const WHALE_BIGGEST_SINGLE    = 1591233;

const WHALE_TRANSFERS = [
    { hash: "0xbbd307c4bec4ad99659384795e4f676ab9b1346ac7ce9449a6389969edd553e7", ts: 1784116571, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 119718, block: 25537896, type: "transfer" },
    { hash: "0xe1a8158a99795630f762b873c31523926f0d074dc579c0f54be72e68e18ee2e8", ts: 1784116103, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 119718, block: 25537857, type: "transfer" },
    { hash: "0xf38e5b4ce1e3c397516bc5314322bc5c9aa79f61f6f7b855cb6ef1fa4b1d57d7", ts: 1784090075, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 731520, block: 25535692, type: "transfer" },
    { hash: "0x9c124921f2af28141b7ecba711eb37ec2a73da6ede86a0afc341bb72d9489f91", ts: 1784089631, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 731520, block: 25535655, type: "transfer" },
    { hash: "0xef23fce8ed25fab9de2301ee3ec37fc0e150d737d33854b43f258da9a5e61aa9", ts: 1784089439, from: "0x49d50db0e1b3b704a9da0973e963468650ea2d62", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 689371, block: 25535639, type: "transfer" },
    { hash: "0xd3ae80fb69a0ab46392c0a3c6c3207976ee90b51d674a68102573b235c4e2f1b", ts: 1784089391, from: "0x1cecbc925f7fbd1565fd4f99c81a4a138c729b7c", to: "0x49d50db0e1b3b704a9da0973e963468650ea2d62", amount: 689371, block: 25535635, type: "transfer" },
    { hash: "0xd80aa69c095c4cb44bd0abc3e5915218b8c4b260136f2490046772c7db2ec65a", ts: 1784089187, from: "0xbd9949756de166350fea2661b609bb19cca3f3ce", to: "0x1cecbc925f7fbd1565fd4f99c81a4a138c729b7c", amount: 690411, block: 25535618, type: "transfer" },
    { hash: "0x464e49af34c7f582abb95ffd80460b4b44a3cce33b302fd1f4fb6f14829c3598", ts: 1784089091, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xbd9949756de166350fea2661b609bb19cca3f3ce", amount: 690411, block: 25535610, type: "transfer" },
    { hash: "0xf14aaabbfcf8125ed05c453646fbb330c01366ed402012dad02debbc2fe78eb2", ts: 1784081039, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xaa95a78b455c2e1f24fb7cbfbf1ebff5053cea43", amount: 1591233, block: 25534943, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xaa95a78b455c2e1f24fb7cbfbf1ebff5053cea43", net: 1591233, received: 1591233, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 926664, received: 926664, sent: 0, txs: 4 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 159659, received: 159659, sent: 0, txs: 16 },
    { wallet: "0xaa8d352b976537301177c6e6aa6e0ef3e56b2c87", net: 82192, received: 82192, sent: 0, txs: 1 },
    { wallet: "0x57ba479e67ae2107ebf5b4bf6f45761eeacbdbba", net: 78767, received: 78767, sent: 0, txs: 1 },
    { wallet: "0xcf4525dc26cc9ca58e15fffa3ef14d6619a55945", net: 63562, received: 63562, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 45613, received: 45613, sent: 0, txs: 3 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 35041, received: 35041, sent: 0, txs: 1 },
    { wallet: "0x19888e92ee029e6641e178ebd2346fc1f7d845bd", net: 31233, received: 31233, sent: 0, txs: 1 },
    { wallet: "0x1485e810d675528c4d56ccc508990a13643d86e9", net: 29452, received: 29452, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 16438, received: 16438, sent: 0, txs: 1 },
    { wallet: "0x4cf385855183202172e7b8614e077ea7778c8f3c", net: 8904, received: 8904, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 8219, received: 8219, sent: 0, txs: 1 },
    { wallet: "0xdc56fd9d0112f44c9c4944e544fd20987c8b3a8c", net: 5775, received: 5775, sent: 0, txs: 2 },
    { wallet: "0x75e0447261591cd9e9a3a5b87dd69c9b26bb484a", net: 5066, received: 5066, sent: 0, txs: 1 },
    { wallet: "0x0761bacd001837594388349707bd398c02a7d7cf", net: 4795, received: 4795, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 4384, received: 4384, sent: 0, txs: 1 },
    { wallet: "0xb1f8db9d1b0b6698aca9d7ba189d60a30139dd94", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0x242bc125a41885dd821e447e66333ba4666c1d27", net: 3014, received: 3014, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 2877, received: 2877, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 2877, received: 2877, sent: 0, txs: 1 },
    { wallet: "0x390e184344625adeb6b7d524de5992f85f523cc2", net: 2055, received: 2055, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1680, received: 1680, sent: 0, txs: 7 },
    { wallet: "0x298e6919c9a1b13a61f82aff610a03142afd78de", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xc7d559266d4c4b2255bb3bb62d53338c834b7da7", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0xdfc90a70d89bece5ac9331fbd680e3306e9afc15", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x315d2ee4fccda0def532ef4108ff57204f8d9eba", net: 979, received: 979, sent: 0, txs: 1 },
    { wallet: "0x907262769c7143796829c3d9595d8d4007e65cd1", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xb8294f8f8f6619a299688f1ca12cb967fc9a6176", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x8b10e16d47f111e219006963df9aebc53604c73a", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x855992fbda59048156cb4bc75fad65d0bfa80f3b", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 130, received: 130, sent: 0, txs: 1 },
    { wallet: "0xb3a221642e49c7804b35637af2b36924185f3765", net: 93, received: 93, sent: 0, txs: 1 },
    { wallet: "0xf5673ded917df02bfb5be68b42e0c0b29e4afd1f", net: 40, received: 40, sent: 0, txs: 1 },
    { wallet: "0x36aa91936598cc14da1a479086006629595ec1a8", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0xde7259893af7cdbc9fd806c6ba61d22d581d5667", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0x28bf6006d87de7f44445905aa4f5cb8c0d8cba02", net: 1, received: 2679, sent: 2679, txs: 2 },
    { wallet: "0xc079bfa54f348199ba51b2717595fe24e96f1542", net: 0, received: 10, sent: 10, txs: 4 },
    { wallet: "0x66a9893cc07d91d95644aedd05d03f95e1dba8af", net: 0, received: 6308, sent: 6308, txs: 2 },
    { wallet: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", net: 0, received: 851238, sent: 851238, txs: 4 },
    { wallet: "0xfe5d149508304a9397aa97f704d81eae227572cd", net: 0, received: 65976, sent: 65976, txs: 2 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 159659, sent: 159659, txs: 42 },
    { wallet: "0x84cab37995229530d9e6e5cff2f8f4ebe4517d66", net: 0, received: 45603, sent: 45603, txs: 8 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 56833, sent: 56833, txs: 12 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 46456, sent: 46456, txs: 10 },
    { wallet: "0x0258783f34ec7649294b94f4a31df43ab6c215b0", net: 0, received: 25808, sent: 25808, txs: 2 },
    { wallet: "0xc26ff22e2f18f54f82f74593529a27347a5a56ff", net: 0, received: 25890, sent: 25890, txs: 3 },
    { wallet: "0x5532d65385e664eef604976354608a9dc4d9ae7c", net: 0, received: 25890, sent: 25890, txs: 2 },
    { wallet: "0x3de0d70dedf741f77abb5894ca24c8e97c265d4b", net: 0, received: 8219, sent: 8219, txs: 2 }
];

const WHALE_LABELS = {

};
