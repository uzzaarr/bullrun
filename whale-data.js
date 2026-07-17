// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 17, 2026 at 01:15 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 117;
const WHALE_TOTAL_VOLUME      = 2196623;
const WHALE_BIGGEST_SINGLE    = 500000;

const WHALE_TRANSFERS = [
    { hash: "0x026bb51f5f2fa9d0cb072f4554f8cfece79d923be2dbc791f2471502dd79b779", ts: 1784290139, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", amount: 145760, block: 25552311, type: "transfer" },
    { hash: "0x45c6660bd3e5b5b34f74b040744cb0595487f7ab243eb6ac0003e2551cc32dd4", ts: 1784283455, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x5cd4d5dec5cb3794349a9e20b9671fd187dbd7b2", amount: 298082, block: 25551755, type: "transfer" },
    { hash: "0x06aaeb4e141a4b88027d05a89ca8e82d6cda08915f8432352196eb202efc59a3", ts: 1784246243, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xd526f3928744baf03aa06352687746f7f908d21c", amount: 143151, block: 25548662, type: "transfer" },
    { hash: "0x32706faa3e0f90bc2d25e9000d74105e9f20d2ea3dbcb369e5d0bfa707fec80c", ts: 1784235107, from: "0x40a88150427465cca3911358edc96cf16f06e431", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 166020, block: 25547737, type: "sell" },
    { hash: "0xd5fa82e7575c150603fce14e094bab7885bbf6322e00b3351bc4d94fffd7ffeb", ts: 1784234807, from: "0xc079bfa54f348199ba51b2717595fe24e96f1542", to: "0x6912d024e2b88136c5a586e77b092199963b6083", amount: 165854, block: 25547712, type: "transfer" },
    { hash: "0xd5fa82e7575c150603fce14e094bab7885bbf6322e00b3351bc4d94fffd7ffeb", ts: 1784234807, from: "0x40a88150427465cca3911358edc96cf16f06e431", to: "0xc079bfa54f348199ba51b2717595fe24e96f1542", amount: 165854, block: 25547712, type: "transfer" },
    { hash: "0x724978be0cc54dc78612fa0767a018645c5c4b1276c98b1a05b64a1b1b694b51", ts: 1784234711, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x40a88150427465cca3911358edc96cf16f06e431", amount: 332040, block: 25547704, type: "buy" },
    { hash: "0xba75499ea1912da6b1cdc18bc1b7914fa86cc5198ba413fa2c01a511e165bbe9", ts: 1784218799, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x760dbc4910a15afd4634df2a3455b9122d0f2a8a", amount: 135068, block: 25546382, type: "transfer" },
    { hash: "0xac7138ea0bbf9f33e540f3e7db0dbda461df79f696b7104aae36fa1fed4941e9", ts: 1784218091, from: "0xed00342ef006d0a7a6dcf7150af56ab8778af247", to: "0x1030f7269e44feb2c9a9e202edf940658d3100c3", amount: 500000, block: 25546324, type: "transfer" },
    { hash: "0x5c563acadc0e4216fac3d938cfc93ac552d9932b8d0b541ddfe08a70b9dee71b", ts: 1784210951, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xd0a9f73f78c4b7dd03d045efe5dbd00e1381b51e", amount: 144794, block: 25545731, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x1030f7269e44feb2c9a9e202edf940658d3100c3", net: 500000, received: 500000, sent: 0, txs: 1 },
    { wallet: "0x5cd4d5dec5cb3794349a9e20b9671fd187dbd7b2", net: 298082, received: 298082, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 165854, received: 165854, sent: 0, txs: 1 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 145760, received: 145760, sent: 0, txs: 1 },
    { wallet: "0xd0a9f73f78c4b7dd03d045efe5dbd00e1381b51e", net: 144794, received: 144794, sent: 0, txs: 1 },
    { wallet: "0xd526f3928744baf03aa06352687746f7f908d21c", net: 143151, received: 143151, sent: 0, txs: 1 },
    { wallet: "0x760dbc4910a15afd4634df2a3455b9122d0f2a8a", net: 135068, received: 135068, sent: 0, txs: 1 },
    { wallet: "0x9e26f69f9099ed7ec32cb6a60cb0442ce0828232", net: 72740, received: 72740, sent: 0, txs: 1 },
    { wallet: "0x0decfa21bc90262f6dfdc7e2060d1529d88f0c6b", net: 48544, received: 49444, sent: 900, txs: 3 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 42344, received: 72080, sent: 29736, txs: 4 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 39959, received: 59959, sent: 20000, txs: 8 },
    { wallet: "0x26e74d15a5c6d6f89a2e9d8cc2da3260f953c95b", net: 29736, received: 29736, sent: 0, txs: 1 },
    { wallet: "0x4cc6b53fea0150e92de6f68a53b918ba6c33ccce", net: 26761, received: 26761, sent: 0, txs: 1 },
    { wallet: "0x3d9f7660372711661693c7da65e30044426aac2a", net: 21233, received: 21233, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 10959, received: 10959, sent: 0, txs: 1 },
    { wallet: "0xbff1acb408ec3b8847b8cd0ea0af9fd02f06400d", net: 7945, received: 7945, sent: 0, txs: 1 },
    { wallet: "0x971c922b9273a0213dfb34b3ab9178f7fed0246c", net: 4247, received: 4247, sent: 0, txs: 1 },
    { wallet: "0x857780896d7870eaa04b5ec90e43f9502bfe9722", net: 4247, received: 4247, sent: 0, txs: 1 },
    { wallet: "0x6f983e1cdab14ed5b72686df0f308b5a3c5acd3d", net: 3699, received: 3699, sent: 0, txs: 1 },
    { wallet: "0x5532d65385e664eef604976354608a9dc4d9ae7c", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x2a76a5be3bca8200f7810600ed9201103746810b", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0x5d73e31d8588d928d2dcbea05dc8038d86730bf5", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x0ce2b366e425d7e53904ea61cfb2ea03b06283f7", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x23df718fc21dcc112f802bcc00580dba02e1d6ba", net: 725, received: 14085, sent: 13360, txs: 2 },
    { wallet: "0x5afdfc44e2dfa3e3940f479ac23097103387c23a", net: 686, received: 686, sent: 0, txs: 1 },
    { wallet: "0xc448fcb3a2ad47f4a8288b76efb13f6c0c0c54af", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x9df14235393c7a9d2bc38db6c12c61b699e094c6", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0xdfc90a70d89bece5ac9331fbd680e3306e9afc15", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 497, received: 497, sent: 0, txs: 10 },
    { wallet: "0x907262769c7143796829c3d9595d8d4007e65cd1", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 178, received: 178, sent: 0, txs: 2 },
    { wallet: "0x82d9a407f99a95db4671e7021d625cbd0787a407", net: 166, received: 166, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x855992fbda59048156cb4bc75fad65d0bfa80f3b", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 15, received: 15, sent: 0, txs: 1 },
    { wallet: "0x3de0d70dedf741f77abb5894ca24c8e97c265d4b", net: 0, received: 822, sent: 822, txs: 2 },
    { wallet: "0x4b6915950f1400abbd05e2e805bfab7fe29b4652", net: 0, received: 1370, sent: 1370, txs: 3 },
    { wallet: "0x7764c8727dab012fce187df0736dab2b00ef691c", net: 0, received: 6575, sent: 6575, txs: 3 },
    { wallet: "0x163f3103de041d25464e2c8a4f8f3187ec1856e0", net: 0, received: 20000, sent: 20000, txs: 4 },
    { wallet: "0xa58bdd0ab5ebbb8dc425090fea8fd0ba969c1668", net: 0, received: 65330, sent: 65330, txs: 11 },
    { wallet: "0xdaffdcbca50c6c35505460db58c0fc29ca19534f", net: 0, received: 6575, sent: 6575, txs: 2 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 56953, sent: 56953, txs: 10 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 62667, sent: 62667, txs: 10 },
    { wallet: "0xd47217d55b68c9f92b920ae42fe844d3a4d52221", net: 0, received: 9589, sent: 9589, txs: 3 },
    { wallet: "0x26e0704627cd4ae33218c1d88391fec751462f22", net: 0, received: 9589, sent: 9589, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 5714, sent: 5714, txs: 2 },
    { wallet: "0xbaa8254ae8b9769ae9053d9f25cca5f90f07427e", net: 0, received: 5753, sent: 5753, txs: 3 },
    { wallet: "0x1f90afd2a5429c5477f873d0162e748723a0d459", net: 0, received: 1360, sent: 1360, txs: 2 }
];

const WHALE_LABELS = {

};
