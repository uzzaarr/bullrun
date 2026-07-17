// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 17, 2026 at 06:59 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 166;
const WHALE_TOTAL_VOLUME      = 1416761;
const WHALE_BIGGEST_SINGLE    = 332040;

const WHALE_TRANSFERS = [
    { hash: "0x026bb51f5f2fa9d0cb072f4554f8cfece79d923be2dbc791f2471502dd79b779", ts: 1784290139, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", amount: 145760, block: 25552311, type: "transfer" },
    { hash: "0x45c6660bd3e5b5b34f74b040744cb0595487f7ab243eb6ac0003e2551cc32dd4", ts: 1784283455, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x5cd4d5dec5cb3794349a9e20b9671fd187dbd7b2", amount: 298082, block: 25551755, type: "transfer" },
    { hash: "0x06aaeb4e141a4b88027d05a89ca8e82d6cda08915f8432352196eb202efc59a3", ts: 1784246243, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xd526f3928744baf03aa06352687746f7f908d21c", amount: 143151, block: 25548662, type: "transfer" },
    { hash: "0x32706faa3e0f90bc2d25e9000d74105e9f20d2ea3dbcb369e5d0bfa707fec80c", ts: 1784235107, from: "0x40a88150427465cca3911358edc96cf16f06e431", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 166020, block: 25547737, type: "sell" },
    { hash: "0xd5fa82e7575c150603fce14e094bab7885bbf6322e00b3351bc4d94fffd7ffeb", ts: 1784234807, from: "0xc079bfa54f348199ba51b2717595fe24e96f1542", to: "0x6912d024e2b88136c5a586e77b092199963b6083", amount: 165854, block: 25547712, type: "transfer" },
    { hash: "0xd5fa82e7575c150603fce14e094bab7885bbf6322e00b3351bc4d94fffd7ffeb", ts: 1784234807, from: "0x40a88150427465cca3911358edc96cf16f06e431", to: "0xc079bfa54f348199ba51b2717595fe24e96f1542", amount: 165854, block: 25547712, type: "transfer" },
    { hash: "0x724978be0cc54dc78612fa0767a018645c5c4b1276c98b1a05b64a1b1b694b51", ts: 1784234711, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x40a88150427465cca3911358edc96cf16f06e431", amount: 332040, block: 25547704, type: "buy" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x5cd4d5dec5cb3794349a9e20b9671fd187dbd7b2", net: 298082, received: 298082, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 178279, received: 178279, sent: 0, txs: 2 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 145760, received: 145760, sent: 0, txs: 1 },
    { wallet: "0xd526f3928744baf03aa06352687746f7f908d21c", net: 143151, received: 143151, sent: 0, txs: 1 },
    { wallet: "0x9e26f69f9099ed7ec32cb6a60cb0442ce0828232", net: 72740, received: 72740, sent: 0, txs: 1 },
    { wallet: "0x0decfa21bc90262f6dfdc7e2060d1529d88f0c6b", net: 48544, received: 49444, sent: 900, txs: 3 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 39952, received: 59952, sent: 20000, txs: 8 },
    { wallet: "0x26e74d15a5c6d6f89a2e9d8cc2da3260f953c95b", net: 29736, received: 29736, sent: 0, txs: 1 },
    { wallet: "0x9be5b8a7314552fa47feb1355cd5b4adc7bb7516", net: 23898, received: 23898, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 18223, received: 18223, sent: 0, txs: 1 },
    { wallet: "0x3822d8b402d6fcbe3187b08b1733ae2e2e46a2d3", net: 12603, received: 12603, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 10959, received: 10959, sent: 0, txs: 1 },
    { wallet: "0xbff1acb408ec3b8847b8cd0ea0af9fd02f06400d", net: 7945, received: 7945, sent: 0, txs: 1 },
    { wallet: "0x242db1a849dd1a6da266e710ee8b925547519f9d", net: 5816, received: 5816, sent: 0, txs: 1 },
    { wallet: "0x971c922b9273a0213dfb34b3ab9178f7fed0246c", net: 4247, received: 4247, sent: 0, txs: 1 },
    { wallet: "0x6f983e1cdab14ed5b72686df0f308b5a3c5acd3d", net: 3699, received: 3699, sent: 0, txs: 1 },
    { wallet: "0x5532d65385e664eef604976354608a9dc4d9ae7c", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x2a76a5be3bca8200f7810600ed9201103746810b", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0x5d73e31d8588d928d2dcbea05dc8038d86730bf5", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x23df718fc21dcc112f802bcc00580dba02e1d6ba", net: 725, received: 14085, sent: 13360, txs: 2 },
    { wallet: "0xe28d7502e70c9b45de8218b122a72a1eaf972695", net: 686, received: 686, sent: 0, txs: 1 },
    { wallet: "0xc448fcb3a2ad47f4a8288b76efb13f6c0c0c54af", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x3c9108700724d9d96cff2ac8979d6ad2a8d469ae", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x834e69fd1a34854b64b15f62140c91bcad9be270", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xdfc90a70d89bece5ac9331fbd680e3306e9afc15", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 367, received: 367, sent: 0, txs: 11 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 291, received: 291, sent: 0, txs: 1 },
    { wallet: "0x907262769c7143796829c3d9595d8d4007e65cd1", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x82d9a407f99a95db4671e7021d625cbd0787a407", net: 166, received: 166, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 151, received: 151, sent: 0, txs: 2 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x855992fbda59048156cb4bc75fad65d0bfa80f3b", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x40ebd62f2bda83b30d60c5b2218a6be782239e3a", net: 56, received: 56, sent: 0, txs: 1 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 15, received: 15, sent: 0, txs: 1 },
    { wallet: "0xfba9bcac82f9e78d477c9445efa6e3b0eeef0e7a", net: 0, received: 23898, sent: 23898, txs: 2 },
    { wallet: "0x4af98e1451de381c1e546fd4cd60c3ef63687879", net: 0, received: 1226, sent: 1226, txs: 2 },
    { wallet: "0xad729fcd02e52938c29284d0ab3b4f1c3f66802c", net: 0, received: 137, sent: 137, txs: 2 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 59952, sent: 59952, txs: 15 },
    { wallet: "0x5afdfc44e2dfa3e3940f479ac23097103387c23a", net: 0, received: 686, sent: 686, txs: 2 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 118699, sent: 118699, txs: 20 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 176066, sent: 176066, txs: 31 },
    { wallet: "0x4cc6b53fea0150e92de6f68a53b918ba6c33ccce", net: 0, received: 26761, sent: 26761, txs: 4 },
    { wallet: "0x279a2a69bf25427fe07e594af2e58a1810e9bde9", net: 0, received: 18223, sent: 18223, txs: 2 },
    { wallet: "0x84cab37995229530d9e6e5cff2f8f4ebe4517d66", net: 0, received: 12426, sent: 12426, txs: 4 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 291, sent: 291, txs: 2 },
    { wallet: "0x00000000009726632680fb29d3f7a9734e3010e2", net: 0, received: 63081, sent: 63081, txs: 2 }
];

const WHALE_LABELS = {

};
