// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 6, 2026 at 02:36 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 64;
const WHALE_TOTAL_VOLUME      = 419508;
const WHALE_BIGGEST_SINGLE    = 200056;

const WHALE_TRANSFERS = [
    { hash: "0x475e5b13673fd97644dd85caf0e6a8cbf0be8e75bbbc5426c18330d5aaec968a", ts: 1783286063, from: "0x144cfc55b28b533fdee07c2e7fa8468354e12fda", to: "0x6f43923c8ce1f6c6d950cd3ba3ae2c7e2074abdc", amount: 109726, block: 25468939, type: "transfer" },
    { hash: "0xa18e66f9434de2566ee741a22d78fdd4692f0d446d297a42f4e773e64a2012d3", ts: 1783285919, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x144cfc55b28b533fdee07c2e7fa8468354e12fda", amount: 109726, block: 25468927, type: "transfer" },
    { hash: "0x6f60dc0f77be37dba6485cb9a3b72a6f307a55702e327874d9cddb6266e0bc92", ts: 1783229027, from: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", to: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", amount: 200056, block: 25464208, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x2040dfbbf948f02207fba8d9bf8c189da1583a53", net: 200056, received: 200056, sent: 0, txs: 1 },
    { wallet: "0xfb693ac2295a5c729b33aff6adfcc411aa9029d6", net: 63531, received: 63531, sent: 0, txs: 1 },
    { wallet: "0x2fb2c92431b35188007b2b1e0b0c717f9b7dae75", net: 21370, received: 21370, sent: 0, txs: 1 },
    { wallet: "0x8e116b4bf95b990b9240e84ad674bd10c0b0759c", net: 7123, received: 7123, sent: 0, txs: 1 },
    { wallet: "0x1f0d9b1835e7b2844d94b0038c80ac387a439fcc", net: 3836, received: 3836, sent: 0, txs: 1 },
    { wallet: "0x5151cc20b683f4492fb3ef70c2ea2d3d0480ed61", net: 3641, received: 3641, sent: 0, txs: 1 },
    { wallet: "0x192973a018630daac49cea4aeb84b152a77825e9", net: 3314, received: 3314, sent: 0, txs: 1 },
    { wallet: "0x2dca89a78a4c6b1b77baa27f650814d73e2d9cca", net: 2254, received: 2254, sent: 0, txs: 1 },
    { wallet: "0x5c9d1a6c9753e711db9b880b0404cd653a0e0032", net: 2055, received: 2055, sent: 0, txs: 1 },
    { wallet: "0x1157e5e64b60d7a9ff9a16aa86f7b062b31a5f02", net: 1781, received: 1781, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xe28d7502e70c9b45de8218b122a72a1eaf972695", net: 1222, received: 1222, sent: 0, txs: 1 },
    { wallet: "0x1b0b1ad3e6a2fb69c48c2913fea012bc38f0a2e9", net: 959, received: 959, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x07f3b652d1673b3f39933550bbbbd490c68fc4b2", net: 512, received: 512, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x88c40cd47ec72e481051c1c495fd0e7a23a30cee", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xb8294f8f8f6619a299688f1ca12cb967fc9a6176", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 224, received: 224, sent: 0, txs: 4 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x510d3ea344f63c3f1d46324637a1d1633fe9065f", net: 3, received: 3, sent: 0, txs: 2 },
    { wallet: "0x6f43923c8ce1f6c6d950cd3ba3ae2c7e2074abdc", net: 1, received: 109726, sent: 109725, txs: 5 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 29286, sent: 29286, txs: 11 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 34092, sent: 34092, txs: 10 },
    { wallet: "0x4fc5fc541416fafaacfa4c07c0065f772fec2edc", net: 0, received: 13031, sent: 13031, txs: 2 },
    { wallet: "0x144cfc55b28b533fdee07c2e7fa8468354e12fda", net: 0, received: 109726, sent: 109726, txs: 2 },
    { wallet: "0x08ac7cdcab984359b98da3431df0147f326c0ef6", net: 0, received: 411, sent: 411, txs: 2 },
    { wallet: "0x01c579618213c31ebdfdbd68bb14d71d8329b9dc", net: 0, received: 959, sent: 959, txs: 3 },
    { wallet: "0xa315a2fc9b7bd651e0ebaa134859bd8153ff12a7", net: 0, received: 959, sent: 959, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 6568, sent: 6568, txs: 4 },
    { wallet: "0x40a88150427465cca3911358edc96cf16f06e431", net: 0, received: 1250, sent: 1250, txs: 2 },
    { wallet: "0x6762e034ce6ff41b38a25a4d8e6ef0fa87199454", net: 0, received: 5342, sent: 5342, txs: 3 },
    { wallet: "0xf4741ff340dd0c961a417583e28b16ddd94f0d81", net: 0, received: 5342, sent: 5342, txs: 2 },
    { wallet: "0x08fd3a0ed40260dbb0f5fbccfb98cf2ffb6f8653", net: 0, received: 1781, sent: 1781, txs: 3 },
    { wallet: "0xf8f87935a9919db73a5c1706b9a287874245ae54", net: 0, received: 1781, sent: 1781, txs: 2 },
    { wallet: "0x163f3103de041d25464e2c8a4f8f3187ec1856e0", net: 0, received: 2857, sent: 2857, txs: 2 },
    { wallet: "0x8a722431c321be4f0ee127ba90d40efa92bdea32", net: 0, received: 2857, sent: 2857, txs: 2 },
    { wallet: "0xa3222357a0eccf60c73606170be6c99adecb59b3", net: -2211, received: 61320, sent: 63531, txs: 2 }
];

const WHALE_LABELS = {

};
