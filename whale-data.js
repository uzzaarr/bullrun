// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 23, 2026 at 02:09 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 231;
const WHALE_TOTAL_VOLUME      = 9366104;
const WHALE_BIGGEST_SINGLE    = 6849315;

const WHALE_TRANSFERS = [
    { hash: "0x6b18edb683c225566a4358df416be13a9e70cd4b3711e9ae57ee54f72788db53", ts: 1784741939, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x30899b705d6941f8f92ed06ca91f617e7ac922c2", amount: 291507, block: 25589812, type: "transfer" },
    { hash: "0xc69f49bbfb2af42a15c37ac984b71b4cd40d1018d87e1a1c7966c3fbb2bc44aa", ts: 1784732687, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x004a37a6678b92903a001221552b14c9209c7af3", amount: 111370, block: 25589045, type: "transfer" },
    { hash: "0xe0032f40b6c59b0b000378974221b30fb56a29ce68d55afe58178ab33e1bb0a7", ts: 1784730251, from: "0x9642b23ed1e01df1092b92641051881a322f5d4e", to: "0xacbee96f3a3ff3d6f7c3bbb6e39752cdcc717c6c", amount: 384611, block: 25588845, type: "transfer" },
    { hash: "0xff97f1b2db1bf5c108b1fbc1deb05797d4da15a6b11eefa19282afe1c0dc265a", ts: 1784721983, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", amount: 1131117, block: 25588163, type: "transfer" },
    { hash: "0xdf85f48dd898b76d68086a5f3525490daa99074ec5e1d4dbdf25b3e52e16f04e", ts: 1784712059, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xf667ec3388e020c12cc45c61a8222f787a9fc40f", amount: 308082, block: 25587341, type: "transfer" },
    { hash: "0x308a231c9aa76fb44edca743fff7b914e58718c88272033074346ea2bd3f561c", ts: 1784699735, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xa8c3e1a954b0271dd9c3c80f44a56dde9b68d5c8", amount: 6849315, block: 25586317, type: "transfer" },
    { hash: "0xd3d3ea58877ab735858e9a6465f34e550138efaadda85bdc1d7a2f70a77b077b", ts: 1784698679, from: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", to: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", amount: 179828, block: 25586229, type: "transfer" },
    { hash: "0x0cf765f0165e5404949c4da63e2d689857df4adca60f33522fd94d426a1f8498", ts: 1784687483, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x57ba479e67ae2107ebf5b4bf6f45761eeacbdbba", amount: 110274, block: 25585297, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xa8c3e1a954b0271dd9c3c80f44a56dde9b68d5c8", net: 6849315, received: 6849315, sent: 0, txs: 1 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 1131117, received: 1131117, sent: 0, txs: 1 },
    { wallet: "0xacbee96f3a3ff3d6f7c3bbb6e39752cdcc717c6c", net: 384611, received: 384611, sent: 0, txs: 1 },
    { wallet: "0xf667ec3388e020c12cc45c61a8222f787a9fc40f", net: 308082, received: 308082, sent: 0, txs: 1 },
    { wallet: "0x30899b705d6941f8f92ed06ca91f617e7ac922c2", net: 291507, received: 291507, sent: 0, txs: 1 },
    { wallet: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", net: 179828, received: 179828, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 176077, received: 176077, sent: 0, txs: 13 },
    { wallet: "0x004a37a6678b92903a001221552b14c9209c7af3", net: 111370, received: 111370, sent: 0, txs: 1 },
    { wallet: "0x57ba479e67ae2107ebf5b4bf6f45761eeacbdbba", net: 110274, received: 110274, sent: 0, txs: 1 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 74554, received: 74554, sent: 0, txs: 3 },
    { wallet: "0x8b750cbcaf7a55fcd5bc257141b08bd76702a5a3", net: 71918, received: 71918, sent: 0, txs: 1 },
    { wallet: "0xcf4525dc26cc9ca58e15fffa3ef14d6619a55945", net: 55616, received: 55616, sent: 0, txs: 1 },
    { wallet: "0x0210b449f2d6c167fd45f344cc01bde83b950e2f", net: 41096, received: 41096, sent: 0, txs: 1 },
    { wallet: "0x6e1d9c66618d68fc4b41918e5d8cfaee296e3269", net: 34888, received: 34888, sent: 0, txs: 1 },
    { wallet: "0x1a996eb2a69423926d60973fc3d73cf1fa847a2f", net: 28493, received: 28493, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 26750, received: 26750, sent: 0, txs: 5 },
    { wallet: "0x663be09177f64abf43694177c05300a7fd28667d", net: 20000, received: 20000, sent: 0, txs: 1 },
    { wallet: "0x36b3ef6814613107459541b71971e0cf65a2d9dd", net: 19350, received: 19350, sent: 0, txs: 1 },
    { wallet: "0x49a2299840a9a5495cae51415548c2b1344bd4f3", net: 18082, received: 18082, sent: 0, txs: 1 },
    { wallet: "0x7764c8727dab012fce187df0736dab2b00ef691c", net: 16438, received: 16438, sent: 0, txs: 1 },
    { wallet: "0x246ac91234b83113e538086f9caf016816d70abe", net: 13796, received: 13796, sent: 0, txs: 1 },
    { wallet: "0x3348f137e8981cc29e14b8ee85463876be26fff3", net: 12537, received: 12537, sent: 0, txs: 1 },
    { wallet: "0xbbf7e985e1e0ca6f854cecb5096274e8e797e8b4", net: 10231, received: 10231, sent: 0, txs: 2 },
    { wallet: "0x3eb99584fd10c38a50a7a2b3b4f050f861601242", net: 9041, received: 9041, sent: 0, txs: 1 },
    { wallet: "0x3620002e79381c888479e4c57074d8c385f8d932", net: 8493, received: 8493, sent: 0, txs: 2 },
    { wallet: "0xf68f7da978ca3cd9acbcb80672c9bde2e050b35f", net: 8219, received: 8219, sent: 0, txs: 1 },
    { wallet: "0x878498d7a1ef5e2a2a8b69377a52ef3c08238781", net: 4795, received: 4795, sent: 0, txs: 1 },
    { wallet: "0x99329a9d73f7136ee28e344bd85132eeafae3fdc", net: 4289, received: 4289, sent: 0, txs: 1 },
    { wallet: "0xa3f4427c4924b103e1fd6c2e3709fe68a251d8e9", net: 4178, received: 4178, sent: 0, txs: 1 },
    { wallet: "0x124ba4069842d1c6b1af88927e9cdc544ad1f59d", net: 3267, received: 3267, sent: 0, txs: 1 },
    { wallet: "0xdc56fd9d0112f44c9c4944e544fd20987c8b3a8c", net: 2675, received: 2675, sent: 0, txs: 1 },
    { wallet: "0x5afdfc44e2dfa3e3940f479ac23097103387c23a", net: 1743, received: 1743, sent: 0, txs: 2 },
    { wallet: "0x7324fca2af715542903ef5512a639b403fb555e6", net: 1519, received: 1519, sent: 0, txs: 2 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0xb1b99a4267a29ab0006044fe600f8ed0ac53f060", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x421679ec8237d08785f65ad01569ec6badbf402f", net: 701, received: 701, sent: 0, txs: 1 },
    { wallet: "0x44926d92979d022991a31ed8ba12580bb9edaac8", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x83ce36503d668dc4efe16416b92f498d06cdc88b", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x01e7b7efee5150b83b4448f85ffee9d9e867e3c4", net: 378, received: 3299, sent: 2921, txs: 3 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 221, received: 221, sent: 0, txs: 10 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 190, received: 190, sent: 0, txs: 2 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 182, received: 182, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 }
];

const WHALE_LABELS = {

};
