// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 14, 2026 at 07:17 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 123;
const WHALE_TOTAL_VOLUME      = 2854573;
const WHALE_BIGGEST_SINGLE    = 558810;

const WHALE_TRANSFERS = [
    { hash: "0x4b5f3951b55ccd48366857c18967ea4cc0f371c63172182035106cf2213100a0", ts: 1781449427, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 143481, block: 25316498, type: "transfer" },
    { hash: "0x7035a6ac49b436aa4deab2cc0444a309ccee71b3a90031d00b5cc74ddbb0eeb4", ts: 1781448527, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 143481, block: 25316423, type: "transfer" },
    { hash: "0x66249cb5520c847e6c0908e000619f58c1f51c6f061ed49ad96a1da6d82856ef", ts: 1781448299, from: "0x193223fb0c821a00232366c471271a343785e8a9", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 142169, block: 25316404, type: "transfer" },
    { hash: "0xb49380db763596000e075f9c4004a25dde147471150b19b4fed6579b90a5624c", ts: 1781448191, from: "0xd83bbad310f696dd59464483d28bad209b76d1fb", to: "0x193223fb0c821a00232366c471271a343785e8a9", amount: 142169, block: 25316395, type: "transfer" },
    { hash: "0x694cccec1038a5826df60217985dbe921a322e3aa2abc7743808a4269b56e860", ts: 1781434955, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 558810, block: 25315300, type: "transfer" },
    { hash: "0xd9f221173a5aefddffc8220040305c979dab390a66832f2adc084cf611e5ca0e", ts: 1781434463, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 558810, block: 25315259, type: "transfer" },
    { hash: "0x005ecfc32a477d961bdf24e95ce7284201dc592fe27453640d3892b055a9bca7", ts: 1781434283, from: "0xa8de80d102716a45b4d1741a7aa06937c7d8da84", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 499245, block: 25315244, type: "transfer" },
    { hash: "0x2f200122653ceb8f76b6b4902a1302dc9077843fc3d9ce4ecd9f261fb1547f16", ts: 1781434211, from: "0xd874d858efd18a65f9cb76863474cf64e1be3d60", to: "0xa8de80d102716a45b4d1741a7aa06937c7d8da84", amount: 499245, block: 25315238, type: "transfer" },
    { hash: "0x4c5e9a67269416b35536b28c313d241f241201bac83dd580e318874f5919107b", ts: 1781425367, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xb180647d5ad76abeb6be0d363f6e182bd8df46d1", amount: 167163, block: 25314508, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 707265, received: 707265, sent: 0, txs: 3 },
    { wallet: "0xb180647d5ad76abeb6be0d363f6e182bd8df46d1", net: 167163, received: 167163, sent: 0, txs: 1 },
    { wallet: "0x6d0d19bdddc5ed1dd501430c9621dd37ebd9062d", net: 81304, received: 81304, sent: 0, txs: 1 },
    { wallet: "0xc630ca552411570fc71aae30d7c585221c57d46e", net: 65342, received: 65342, sent: 0, txs: 1 },
    { wallet: "0x24b894d894466655b6eda2db97d611c2fa4142d1", net: 38356, received: 38356, sent: 0, txs: 1 },
    { wallet: "0x08975eb9695e5ce896f7416daa9a5f62e81142b3", net: 16438, received: 16438, sent: 0, txs: 1 },
    { wallet: "0xb4a3a0ba68867ce22c428c3e6f9f0ba86e2e3c68", net: 15890, received: 15890, sent: 0, txs: 1 },
    { wallet: "0x443c131ca7e4b95421f373df7f5d6802c1cb18ba", net: 15890, received: 15890, sent: 0, txs: 1 },
    { wallet: "0x07c9128b7231950b6d306d0d3aa1f2ad580598da", net: 13562, received: 13562, sent: 0, txs: 1 },
    { wallet: "0x98f870ab30c0530b2e19d1adf5285200f52305a7", net: 12875, received: 12875, sent: 0, txs: 4 },
    { wallet: "0x0832c37e6b630c438822c7de2ea20d147d2c596b", net: 11633, received: 11633, sent: 0, txs: 1 },
    { wallet: "0xe26dcfdfbc60e46e73a0297c313f6c305f1dad12", net: 10274, received: 10274, sent: 0, txs: 1 },
    { wallet: "0x9520047179e27f23fc1cefa70f254342661ae19c", net: 7260, received: 7260, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 6575, received: 6575, sent: 0, txs: 1 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 3836, received: 3836, sent: 0, txs: 1 },
    { wallet: "0xbbc2e9fadd02f03bda75894d84148862f294983a", net: 3836, received: 3836, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 2508, received: 705200, sent: 702693, txs: 12 },
    { wallet: "0xc26ff22e2f18f54f82f74593529a27347a5a56ff", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0x239de8f76d1cbf693a2bb425b7d804df66e6c5e8", net: 2395, received: 2395, sent: 0, txs: 1 },
    { wallet: "0x0ebba25e05243fb4146a3a2052aee412ed3d16c9", net: 1500, received: 1500, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1271, received: 1271, sent: 0, txs: 9 },
    { wallet: "0xfaa78f45f59770b9274d19bf7bf9b0a10fd5a851", net: 1233, received: 1233, sent: 0, txs: 2 },
    { wallet: "0xc7d559266d4c4b2255bb3bb62d53338c834b7da7", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0x37fc0ec4f90c2400ef9f555941671908f6f5377b", net: 1227, received: 1227, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x834e69fd1a34854b64b15f62140c91bcad9be270", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xdfc90a70d89bece5ac9331fbd680e3306e9afc15", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x9df14235393c7a9d2bc38db6c12c61b699e094c6", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 171, received: 171, sent: 0, txs: 1 },
    { wallet: "0x907262769c7143796829c3d9595d8d4007e65cd1", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x5987d62c93f864fff531f79c1f6c8da51eaffce2", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd2b2e98634b682c1d1abada276b19d46ed13a218", net: 128, received: 128, sent: 0, txs: 1 },
    { wallet: "0x710284aa287e4456471f808a537e5104a3084596", net: 27, received: 27, sent: 0, txs: 2 },
    { wallet: "0xfad4c8f1e71e4c56b87733bd916ff7cff46c6c29", net: 5, received: 5, sent: 0, txs: 1 },
    { wallet: "0xc06ebbefd94032b85424d51906e2a335efae264b", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0x5532d65385e664eef604976354608a9dc4d9ae7c", net: 0, received: 2466, sent: 2466, txs: 2 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 17619, sent: 17619, txs: 10 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 23226, sent: 23226, txs: 12 },
    { wallet: "0x970a435a785a9d37bc0db253f62ea1d5e9ceb57f", net: 0, received: 845, sent: 845, txs: 5 },
    { wallet: "0x3c9108700724d9d96cff2ac8979d6ad2a8d469ae", net: 0, received: 411, sent: 411, txs: 2 },
    { wallet: "0x6421ca3b2f6654511d579f494f00b7d89949dfe7", net: 0, received: 53833, sent: 53833, txs: 2 },
    { wallet: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", net: 0, received: 702290, sent: 702290, txs: 4 },
    { wallet: "0x193223fb0c821a00232366c471271a343785e8a9", net: 0, received: 142169, sent: 142169, txs: 2 }
];

const WHALE_LABELS = {

};
