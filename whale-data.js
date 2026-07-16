// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 16, 2026 at 08:02 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 153;
const WHALE_TOTAL_VOLUME      = 399284;
const WHALE_BIGGEST_SINGLE    = 159848;

const WHALE_TRANSFERS = [
    { hash: "0x3f38dbc80cc3bd1f72011e2ecefb1e0ab5430d45c22ff1455749da3899f09d30", ts: 1784172551, from: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", to: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", amount: 159848, block: 25542542, type: "transfer" },
    { hash: "0xbbd307c4bec4ad99659384795e4f676ab9b1346ac7ce9449a6389969edd553e7", ts: 1784116571, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 119718, block: 25537896, type: "transfer" },
    { hash: "0xe1a8158a99795630f762b873c31523926f0d074dc579c0f54be72e68e18ee2e8", ts: 1784116103, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 119718, block: 25537857, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", net: 159848, received: 159848, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 138110, received: 138110, sent: 0, txs: 2 },
    { wallet: "0x129ab3a1c3eb5c3d27183a9f55cafe21a8de49d7", net: 63482, received: 63482, sent: 0, txs: 1 },
    { wallet: "0x1e2e283b230cb15857a446fa64745b2dfe4f9450", net: 47000, received: 47000, sent: 0, txs: 1 },
    { wallet: "0x9abe1355078b45b7e7f42e3f3e40df246139bc7d", net: 45005, received: 45005, sent: 0, txs: 1 },
    { wallet: "0xe28d7502e70c9b45de8218b122a72a1eaf972695", net: 43763, received: 43763, sent: 0, txs: 2 },
    { wallet: "0x19888e92ee029e6641e178ebd2346fc1f7d845bd", net: 31233, received: 31233, sent: 0, txs: 1 },
    { wallet: "0x9be5b8a7314552fa47feb1355cd5b4adc7bb7516", net: 30707, received: 30707, sent: 0, txs: 2 },
    { wallet: "0x4dc40a8d58772fa690b910a559203e7e2f18b067", net: 23836, received: 23836, sent: 0, txs: 1 },
    { wallet: "0xb6d4fb85c951d5948137a9f9dce9b7b4363a6799", net: 20000, received: 20000, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 18992, received: 25836, sent: 6844, txs: 4 },
    { wallet: "0x6a79b5142ed23875ce46f40826ff686b5429f78f", net: 14965, received: 14965, sent: 0, txs: 1 },
    { wallet: "0x2144a7644e8cc88be18144dc7ee71e49f1d12c90", net: 8904, received: 8904, sent: 0, txs: 1 },
    { wallet: "0x4cf385855183202172e7b8614e077ea7778c8f3c", net: 8904, received: 8904, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 3014, received: 3014, sent: 0, txs: 2 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x390e184344625adeb6b7d524de5992f85f523cc2", net: 2055, received: 2055, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x40b2f1262a394a69f4446ceebca52bc58eb92bf4", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x992a56bf0ff75c544fafbfa73e1e8c02b5277ca3", net: 415, received: 415, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 412, received: 439, sent: 27, txs: 9 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 411, received: 411, sent: 0, txs: 2 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x74323b4161747f4e7beb536c961f394e6068c2da", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 250, received: 250, sent: 0, txs: 1 },
    { wallet: "0x39faf1de461849163e390d0a57d1eaa632064a49", net: 160, received: 160, sent: 0, txs: 1 },
    { wallet: "0x855992fbda59048156cb4bc75fad65d0bfa80f3b", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 38, received: 38, sent: 0, txs: 1 },
    { wallet: "0x38cede3bc1c8cefd6cb12441d51d16761a19db11", net: 34, received: 685, sent: 651, txs: 2 },
    { wallet: "0x9631288f4050f7cfbf77b77f8540decf6cfc7012", net: 10, received: 10, sent: 0, txs: 1 },
    { wallet: "0xfca55213628d92a3a4b23aba47344f6dd703e48b", net: 0, received: 63482, sent: 63482, txs: 2 },
    { wallet: "0xfba9bcac82f9e78d477c9445efa6e3b0eeef0e7a", net: 0, received: 30707, sent: 30707, txs: 4 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 123179, sent: 123178, txs: 24 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 47075, sent: 47075, txs: 12 },
    { wallet: "0x2d6b34df065a635ea57eec21e0528641da6a2340", net: 0, received: 4384, sent: 4384, txs: 3 },
    { wallet: "0x568d7cf85017da98283703591aeac41554c4d76f", net: 0, received: 4384, sent: 4384, txs: 2 },
    { wallet: "0xe094ee443aa4e1d88b916597ba71ac37785bfd76", net: 0, received: 1361, sent: 1361, txs: 2 },
    { wallet: "0x2d84a18d4d1356420f3115e4d11e26680671c62d", net: 0, received: 1370, sent: 1370, txs: 3 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 0, received: 1370, sent: 1370, txs: 2 },
    { wallet: "0x2ef1b2567aa33e1ba07f4fbd1a297223df28bafa", net: 0, received: 6164, sent: 6164, txs: 2 },
    { wallet: "0x0f4ab87873e5b6abc6bbfe87ce8857e284cdd2de", net: 0, received: 6164, sent: 6164, txs: 2 },
    { wallet: "0xad729fcd02e52938c29284d0ab3b4f1c3f66802c", net: 0, received: 548, sent: 548, txs: 2 },
    { wallet: "0x279a2a69bf25427fe07e594af2e58a1810e9bde9", net: 0, received: 18392, sent: 18392, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 144755, sent: 144755, txs: 8 },
    { wallet: "0x9ebd1afdeaa627b5514082c95c8998b80b828cb9", net: 0, received: 14965, sent: 14965, txs: 2 },
    { wallet: "0xa58bdd0ab5ebbb8dc425090fea8fd0ba969c1668", net: 0, received: 19536, sent: 19536, txs: 7 },
    { wallet: "0xf8c0b70f325cc8ac26b87ca7ab2f7e9477a4deeb", net: 0, received: 12740, sent: 12740, txs: 3 },
    { wallet: "0x8ff910c8040e00b2c4f5225f11a05d1c84ca252c", net: 0, received: 16986, sent: 16986, txs: 3 },
    { wallet: "0xa0952edc243077c05148828cc5432c37486858c3", net: 0, received: 8630, sent: 8630, txs: 2 }
];

const WHALE_LABELS = {

};
