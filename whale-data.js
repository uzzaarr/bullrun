// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 17, 2026 at 02:05 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 103;
const WHALE_TOTAL_VOLUME      = 2794273;
const WHALE_BIGGEST_SINGLE    = 591781;

const WHALE_TRANSFERS = [
    { hash: "0x06aaeb4e141a4b88027d05a89ca8e82d6cda08915f8432352196eb202efc59a3", ts: 1784246243, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xd526f3928744baf03aa06352687746f7f908d21c", amount: 143151, block: 25548662, type: "transfer" },
    { hash: "0x32706faa3e0f90bc2d25e9000d74105e9f20d2ea3dbcb369e5d0bfa707fec80c", ts: 1784235107, from: "0x40a88150427465cca3911358edc96cf16f06e431", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 166020, block: 25547737, type: "sell" },
    { hash: "0xd5fa82e7575c150603fce14e094bab7885bbf6322e00b3351bc4d94fffd7ffeb", ts: 1784234807, from: "0xc079bfa54f348199ba51b2717595fe24e96f1542", to: "0x6912d024e2b88136c5a586e77b092199963b6083", amount: 165854, block: 25547712, type: "transfer" },
    { hash: "0xd5fa82e7575c150603fce14e094bab7885bbf6322e00b3351bc4d94fffd7ffeb", ts: 1784234807, from: "0x40a88150427465cca3911358edc96cf16f06e431", to: "0xc079bfa54f348199ba51b2717595fe24e96f1542", amount: 165854, block: 25547712, type: "transfer" },
    { hash: "0x724978be0cc54dc78612fa0767a018645c5c4b1276c98b1a05b64a1b1b694b51", ts: 1784234711, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x40a88150427465cca3911358edc96cf16f06e431", amount: 332040, block: 25547704, type: "buy" },
    { hash: "0xba75499ea1912da6b1cdc18bc1b7914fa86cc5198ba413fa2c01a511e165bbe9", ts: 1784218799, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x760dbc4910a15afd4634df2a3455b9122d0f2a8a", amount: 135068, block: 25546382, type: "transfer" },
    { hash: "0xac7138ea0bbf9f33e540f3e7db0dbda461df79f696b7104aae36fa1fed4941e9", ts: 1784218091, from: "0xed00342ef006d0a7a6dcf7150af56ab8778af247", to: "0x1030f7269e44feb2c9a9e202edf940658d3100c3", amount: 500000, block: 25546324, type: "transfer" },
    { hash: "0x5c563acadc0e4216fac3d938cfc93ac552d9932b8d0b541ddfe08a70b9dee71b", ts: 1784210951, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xd0a9f73f78c4b7dd03d045efe5dbd00e1381b51e", amount: 144794, block: 25545731, type: "transfer" },
    { hash: "0x32ae7002d49b3a1665330696ea8212850c7b14e54c3a5ea9d8290b2829a86085", ts: 1784195375, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xb05ba67c11fc0b92a7bcb18e50cba87ce2d15109", amount: 289863, block: 25544438, type: "transfer" },
    { hash: "0xaa71e5ca4a5089ec3244e8f2ccbf5a0e3b1c76321d768c3becdfb27ad374f215", ts: 1784192591, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x78bb5b1b173ff84d0ec7b9354e791152d66ad780", amount: 591781, block: 25544206, type: "transfer" },
    { hash: "0x3f38dbc80cc3bd1f72011e2ecefb1e0ab5430d45c22ff1455749da3899f09d30", ts: 1784172551, from: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", to: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", amount: 159848, block: 25542542, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x78bb5b1b173ff84d0ec7b9354e791152d66ad780", net: 591781, received: 591781, sent: 0, txs: 1 },
    { wallet: "0x1030f7269e44feb2c9a9e202edf940658d3100c3", net: 500000, received: 500000, sent: 0, txs: 1 },
    { wallet: "0xb05ba67c11fc0b92a7bcb18e50cba87ce2d15109", net: 289863, received: 289863, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 165854, received: 165854, sent: 0, txs: 1 },
    { wallet: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", net: 159848, received: 159848, sent: 0, txs: 1 },
    { wallet: "0xd0a9f73f78c4b7dd03d045efe5dbd00e1381b51e", net: 144794, received: 144794, sent: 0, txs: 1 },
    { wallet: "0xd526f3928744baf03aa06352687746f7f908d21c", net: 143151, received: 143151, sent: 0, txs: 1 },
    { wallet: "0x760dbc4910a15afd4634df2a3455b9122d0f2a8a", net: 135068, received: 135068, sent: 0, txs: 1 },
    { wallet: "0x179998589d1b00a604449b34f1d9f03bcda0eaab", net: 92055, received: 92055, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 88051, received: 88051, sent: 0, txs: 4 },
    { wallet: "0x129ab3a1c3eb5c3d27183a9f55cafe21a8de49d7", net: 63482, received: 63482, sent: 0, txs: 1 },
    { wallet: "0x8079ee58e3ed3a1dc175e8ad172bbca5acc9ab49", net: 33699, received: 33699, sent: 0, txs: 1 },
    { wallet: "0x4cc6b53fea0150e92de6f68a53b918ba6c33ccce", net: 26761, received: 26761, sent: 0, txs: 1 },
    { wallet: "0x4dc40a8d58772fa690b910a559203e7e2f18b067", net: 23836, received: 23836, sent: 0, txs: 1 },
    { wallet: "0x3d9f7660372711661693c7da65e30044426aac2a", net: 21233, received: 21233, sent: 0, txs: 1 },
    { wallet: "0xb6d4fb85c951d5948137a9f9dce9b7b4363a6799", net: 20000, received: 20000, sent: 0, txs: 1 },
    { wallet: "0x9be5b8a7314552fa47feb1355cd5b4adc7bb7516", net: 13362, received: 13362, sent: 0, txs: 1 },
    { wallet: "0xee367d7e1151fc6d22f505738954d426eea9136d", net: 8219, received: 8219, sent: 0, txs: 1 },
    { wallet: "0xbaa8254ae8b9769ae9053d9f25cca5f90f07427e", net: 5753, received: 5753, sent: 0, txs: 1 },
    { wallet: "0x857780896d7870eaa04b5ec90e43f9502bfe9722", net: 4247, received: 4247, sent: 0, txs: 1 },
    { wallet: "0x1ab2a7c6178467e8e2fd9c9a42d33024c8d6e1d0", net: 2877, received: 2877, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x2a76a5be3bca8200f7810600ed9201103746810b", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0x8e116b4bf95b990b9240e84ad674bd10c0b0759c", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 1363, received: 1363, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x9df14235393c7a9d2bc38db6c12c61b699e094c6", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 482, received: 482, sent: 0, txs: 8 },
    { wallet: "0xa0952edc243077c05148828cc5432c37486858c3", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x82d9a407f99a95db4671e7021d625cbd0787a407", net: 166, received: 166, sent: 0, txs: 1 },
    { wallet: "0x39faf1de461849163e390d0a57d1eaa632064a49", net: 160, received: 160, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 149, received: 149, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x855992fbda59048156cb4bc75fad65d0bfa80f3b", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 0, received: 1370, sent: 1370, txs: 2 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 33867, sent: 33867, txs: 6 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 40031, sent: 40031, txs: 9 },
    { wallet: "0x21dce84e1c9ea03025ddaefd186d6119ccb1e819", net: 0, received: 5753, sent: 5753, txs: 2 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 59959, sent: 59959, txs: 14 },
    { wallet: "0x40a88150427465cca3911358edc96cf16f06e431", net: 0, received: 332040, sent: 332040, txs: 4 },
    { wallet: "0xc079bfa54f348199ba51b2717595fe24e96f1542", net: 0, received: 166020, sent: 166020, txs: 4 },
    { wallet: "0xd01fb59f3c15542b6482f23a5836d3585c0b690a", net: 0, received: 2986, sent: 2986, txs: 2 },
    { wallet: "0xa8abd4f765129e9c788aa5c973d7d37f010c3cdc", net: 0, received: 67734, sent: 67734, txs: 2 },
    { wallet: "0x4496b26c3d65952590762cef62165cd2887c30e1", net: 0, received: 67945, sent: 67945, txs: 3 },
    { wallet: "0x6bd85a77e152d9d6b5ecffe7153be0edeb2798c8", net: 0, received: 67945, sent: 67945, txs: 2 },
    { wallet: "0xa58bdd0ab5ebbb8dc425090fea8fd0ba969c1668", net: 0, received: 49744, sent: 49744, txs: 4 },
    { wallet: "0xc19546d779445ebe498abb9b903a494c648427ed", net: 0, received: 49863, sent: 49863, txs: 3 }
];

const WHALE_LABELS = {

};
