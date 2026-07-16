// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 16, 2026 at 01:29 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 139;
const WHALE_TOTAL_VOLUME      = 1041492;
const WHALE_BIGGEST_SINGLE    = 591781;

const WHALE_TRANSFERS = [
    { hash: "0x32ae7002d49b3a1665330696ea8212850c7b14e54c3a5ea9d8290b2829a86085", ts: 1784195375, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xb05ba67c11fc0b92a7bcb18e50cba87ce2d15109", amount: 289863, block: 25544438, type: "transfer" },
    { hash: "0xaa71e5ca4a5089ec3244e8f2ccbf5a0e3b1c76321d768c3becdfb27ad374f215", ts: 1784192591, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x78bb5b1b173ff84d0ec7b9354e791152d66ad780", amount: 591781, block: 25544206, type: "transfer" },
    { hash: "0x3f38dbc80cc3bd1f72011e2ecefb1e0ab5430d45c22ff1455749da3899f09d30", ts: 1784172551, from: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", to: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", amount: 159848, block: 25542542, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x78bb5b1b173ff84d0ec7b9354e791152d66ad780", net: 591781, received: 591781, sent: 0, txs: 1 },
    { wallet: "0xb05ba67c11fc0b92a7bcb18e50cba87ce2d15109", net: 289863, received: 289863, sent: 0, txs: 1 },
    { wallet: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", net: 159848, received: 159848, sent: 0, txs: 1 },
    { wallet: "0x179998589d1b00a604449b34f1d9f03bcda0eaab", net: 92055, received: 92055, sent: 0, txs: 1 },
    { wallet: "0x129ab3a1c3eb5c3d27183a9f55cafe21a8de49d7", net: 63482, received: 63482, sent: 0, txs: 1 },
    { wallet: "0x1e2e283b230cb15857a446fa64745b2dfe4f9450", net: 47000, received: 47000, sent: 0, txs: 1 },
    { wallet: "0x9abe1355078b45b7e7f42e3f3e40df246139bc7d", net: 45005, received: 45005, sent: 0, txs: 1 },
    { wallet: "0xe28d7502e70c9b45de8218b122a72a1eaf972695", net: 43763, received: 43763, sent: 0, txs: 2 },
    { wallet: "0x8079ee58e3ed3a1dc175e8ad172bbca5acc9ab49", net: 33699, received: 33699, sent: 0, txs: 1 },
    { wallet: "0x9be5b8a7314552fa47feb1355cd5b4adc7bb7516", net: 30707, received: 30707, sent: 0, txs: 2 },
    { wallet: "0x4dc40a8d58772fa690b910a559203e7e2f18b067", net: 23836, received: 23836, sent: 0, txs: 1 },
    { wallet: "0xb6d4fb85c951d5948137a9f9dce9b7b4363a6799", net: 20000, received: 20000, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 18392, received: 18392, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 17331, received: 17331, sent: 0, txs: 2 },
    { wallet: "0x6a79b5142ed23875ce46f40826ff686b5429f78f", net: 14965, received: 14965, sent: 0, txs: 1 },
    { wallet: "0x2144a7644e8cc88be18144dc7ee71e49f1d12c90", net: 8904, received: 8904, sent: 0, txs: 1 },
    { wallet: "0xee367d7e1151fc6d22f505738954d426eea9136d", net: 8219, received: 8219, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 3014, received: 3014, sent: 0, txs: 2 },
    { wallet: "0x1ab2a7c6178467e8e2fd9c9a42d33024c8d6e1d0", net: 2877, received: 2877, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x8e116b4bf95b990b9240e84ad674bd10c0b0759c", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 1363, received: 1363, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x40b2f1262a394a69f4446ceebca52bc58eb92bf4", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x992a56bf0ff75c544fafbfa73e1e8c02b5277ca3", net: 415, received: 415, sent: 0, txs: 1 },
    { wallet: "0xa0952edc243077c05148828cc5432c37486858c3", net: 411, received: 9041, sent: 8630, txs: 3 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 411, received: 411, sent: 0, txs: 2 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 405, received: 432, sent: 27, txs: 11 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x74323b4161747f4e7beb536c961f394e6068c2da", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 250, received: 250, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 187, received: 187, sent: 0, txs: 2 },
    { wallet: "0x39faf1de461849163e390d0a57d1eaa632064a49", net: 160, received: 160, sent: 0, txs: 1 },
    { wallet: "0x855992fbda59048156cb4bc75fad65d0bfa80f3b", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x38cede3bc1c8cefd6cb12441d51d16761a19db11", net: 34, received: 685, sent: 651, txs: 2 },
    { wallet: "0x9631288f4050f7cfbf77b77f8540decf6cfc7012", net: 10, received: 10, sent: 0, txs: 1 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 19992, sent: 19992, txs: 4 },
    { wallet: "0xa58bdd0ab5ebbb8dc425090fea8fd0ba969c1668", net: 0, received: 69280, sent: 69280, txs: 11 },
    { wallet: "0xc19546d779445ebe498abb9b903a494c648427ed", net: 0, received: 49863, sent: 49863, txs: 3 },
    { wallet: "0xab9f6ac1c97b3233b9d22078a0cc003028e6a25f", net: 0, received: 49863, sent: 49863, txs: 2 },
    { wallet: "0xf4fa0b0bfb3f7a4adc0deed435b29534e23791a4", net: 0, received: 2877, sent: 2877, txs: 2 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 0, received: 2877, sent: 2877, txs: 2 },
    { wallet: "0xa55e2f8177f4f2c045d6f92e8ceed74ea668c4fb", net: 0, received: 15970, sent: 15970, txs: 2 },
    { wallet: "0x6762e034ce6ff41b38a25a4d8e6ef0fa87199454", net: 0, received: 16027, sent: 16027, txs: 3 },
    { wallet: "0xf4741ff340dd0c961a417583e28b16ddd94f0d81", net: 0, received: 16027, sent: 16027, txs: 2 },
    { wallet: "0xfca55213628d92a3a4b23aba47344f6dd703e48b", net: 0, received: 63482, sent: 63482, txs: 2 },
    { wallet: "0xfba9bcac82f9e78d477c9445efa6e3b0eeef0e7a", net: 0, received: 30707, sent: 30707, txs: 4 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 118113, sent: 118113, txs: 21 }
];

const WHALE_LABELS = {

};
