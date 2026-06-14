// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 14, 2026 at 01:49 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 147;
const WHALE_TOTAL_VOLUME      = 3257075;
const WHALE_BIGGEST_SINGLE    = 558810;

const WHALE_TRANSFERS = [
    { hash: "0x694cccec1038a5826df60217985dbe921a322e3aa2abc7743808a4269b56e860", ts: 1781434955, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 558810, block: 25315300, type: "transfer" },
    { hash: "0xd9f221173a5aefddffc8220040305c979dab390a66832f2adc084cf611e5ca0e", ts: 1781434463, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 558810, block: 25315259, type: "transfer" },
    { hash: "0x005ecfc32a477d961bdf24e95ce7284201dc592fe27453640d3892b055a9bca7", ts: 1781434283, from: "0xa8de80d102716a45b4d1741a7aa06937c7d8da84", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 499245, block: 25315244, type: "transfer" },
    { hash: "0x2f200122653ceb8f76b6b4902a1302dc9077843fc3d9ce4ecd9f261fb1547f16", ts: 1781434211, from: "0xd874d858efd18a65f9cb76863474cf64e1be3d60", to: "0xa8de80d102716a45b4d1741a7aa06937c7d8da84", amount: 499245, block: 25315238, type: "transfer" },
    { hash: "0x4c5e9a67269416b35536b28c313d241f241201bac83dd580e318874f5919107b", ts: 1781425367, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xb180647d5ad76abeb6be0d363f6e182bd8df46d1", amount: 167163, block: 25314508, type: "transfer" },
    { hash: "0x1d875e7519791d8a6eb90428ed9ca134d75b9948bfaa84e769013ef73f9c8e4f", ts: 1781367503, from: "0x88c40cd47ec72e481051c1c495fd0e7a23a30cee", to: "0x7f51c134230eb9e5aba42bc364d3d3eba26d9712", amount: 110059, block: 25309701, type: "transfer" },
    { hash: "0x712d7c5ecbf4a6487e66a4109f796f1aa34848b09b4c8c7debcc5dd0f7b2731d", ts: 1781361323, from: "0xdb3ded7731c781224ec292e2163d9554c094fd7c", to: "0x01ba661ae900ef02ae73cd9a02e2df0ad06682d0", amount: 111232, block: 25309191, type: "transfer" },
    { hash: "0x6485feef51fa865b584f2efe7a6616a4bf3dec9e27ea402fe80547eae57beba1", ts: 1781360255, from: "0x88cc0800464fcef3e643a369e8a0532990995eee", to: "0x98f870ab30c0530b2e19d1adf5285200f52305a7", amount: 101153, block: 25309103, type: "transfer" },
    { hash: "0x6485feef51fa865b584f2efe7a6616a4bf3dec9e27ea402fe80547eae57beba1", ts: 1781360255, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x88cc0800464fcef3e643a369e8a0532990995eee", amount: 103143, block: 25309103, type: "buy" },
    { hash: "0xabf53e90eef99a48aaacd56af2e8ad284e4d759a7bf3896d2fa0600ca39157d9", ts: 1781360243, from: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 106623, block: 25309102, type: "sell" },
    { hash: "0xabf53e90eef99a48aaacd56af2e8ad284e4d759a7bf3896d2fa0600ca39157d9", ts: 1781360243, from: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", to: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", amount: 147046, block: 25309102, type: "transfer" },
    { hash: "0xabf53e90eef99a48aaacd56af2e8ad284e4d759a7bf3896d2fa0600ca39157d9", ts: 1781360243, from: "0x9f02988adb650e55cc5eb5619c383fd223848bb5", to: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", amount: 147046, block: 25309102, type: "transfer" },
    { hash: "0x1a3a220b23a84ecea9c629863ec6f117ccb14615570ade311d5b539253abedb5", ts: 1781359979, from: "0xd6ee2a838aca581c0e144073ca51e570f96b93e4", to: "0x9f02988adb650e55cc5eb5619c383fd223848bb5", amount: 147500, block: 25309080, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 563784, received: 563784, sent: 0, txs: 2 },
    { wallet: "0xb180647d5ad76abeb6be0d363f6e182bd8df46d1", net: 167163, received: 167163, sent: 0, txs: 1 },
    { wallet: "0x98f870ab30c0530b2e19d1adf5285200f52305a7", net: 156844, received: 156844, sent: 0, txs: 10 },
    { wallet: "0x01ba661ae900ef02ae73cd9a02e2df0ad06682d0", net: 135585, received: 135585, sent: 0, txs: 2 },
    { wallet: "0x6d0d19bdddc5ed1dd501430c9621dd37ebd9062d", net: 81304, received: 81304, sent: 0, txs: 1 },
    { wallet: "0xc630ca552411570fc71aae30d7c585221c57d46e", net: 65342, received: 65342, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 65066, received: 65066, sent: 0, txs: 1 },
    { wallet: "0x24b894d894466655b6eda2db97d611c2fa4142d1", net: 38356, received: 38356, sent: 0, txs: 1 },
    { wallet: "0xea6d0eb93b28ea690c6d26820b392d4e4868338d", net: 29809, received: 29809, sent: 0, txs: 1 },
    { wallet: "0x08975eb9695e5ce896f7416daa9a5f62e81142b3", net: 16438, received: 16438, sent: 0, txs: 1 },
    { wallet: "0xb4a3a0ba68867ce22c428c3e6f9f0ba86e2e3c68", net: 15890, received: 15890, sent: 0, txs: 1 },
    { wallet: "0x443c131ca7e4b95421f373df7f5d6802c1cb18ba", net: 15890, received: 15890, sent: 0, txs: 1 },
    { wallet: "0x8db66cd5d4538fdcdc5ff6d1c82abd1e52e998f4", net: 14795, received: 14795, sent: 0, txs: 1 },
    { wallet: "0x07c9128b7231950b6d306d0d3aa1f2ad580598da", net: 13562, received: 13562, sent: 0, txs: 1 },
    { wallet: "0x0832c37e6b630c438822c7de2ea20d147d2c596b", net: 11633, received: 11633, sent: 0, txs: 1 },
    { wallet: "0x9520047179e27f23fc1cefa70f254342661ae19c", net: 7260, received: 7260, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 6575, received: 6575, sent: 0, txs: 1 },
    { wallet: "0xf9dfc742e82f101a094760d25a47c3c16d681410", net: 5297, received: 5297, sent: 0, txs: 2 },
    { wallet: "0xbbc2e9fadd02f03bda75894d84148862f294983a", net: 3836, received: 3836, sent: 0, txs: 1 },
    { wallet: "0x3faa2c738f76f76526231c035c74184f3be5feb7", net: 3014, received: 3014, sent: 0, txs: 1 },
    { wallet: "0x5532d65385e664eef604976354608a9dc4d9ae7c", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0x239de8f76d1cbf693a2bb425b7d804df66e6c5e8", net: 2395, received: 2395, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1568, received: 1568, sent: 0, txs: 9 },
    { wallet: "0xfaa78f45f59770b9274d19bf7bf9b0a10fd5a851", net: 1233, received: 1233, sent: 0, txs: 2 },
    { wallet: "0xc7d559266d4c4b2255bb3bb62d53338c834b7da7", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 1233, received: 1233, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x834e69fd1a34854b64b15f62140c91bcad9be270", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xdfc90a70d89bece5ac9331fbd680e3306e9afc15", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xd2b2e98634b682c1d1abada276b19d46ed13a218", net: 473, received: 473, sent: 0, txs: 2 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 330, received: 330, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 171, received: 171, sent: 0, txs: 1 },
    { wallet: "0x907262769c7143796829c3d9595d8d4007e65cd1", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x5987d62c93f864fff531f79c1f6c8da51eaffce2", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1157e5e64b60d7a9ff9a16aa86f7b062b31a5f02", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x710284aa287e4456471f808a537e5104a3084596", net: 27, received: 27, sent: 0, txs: 2 },
    { wallet: "0xfad4c8f1e71e4c56b87733bd916ff7cff46c6c29", net: 5, received: 5, sent: 0, txs: 1 },
    { wallet: "0xc06ebbefd94032b85424d51906e2a335efae264b", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0x689c30597e93dfd0e7877c77bb26ff19c6f9ef07", net: 0, received: 4975, sent: 4975, txs: 2 },
    { wallet: "0x88cc0800464fcef3e643a369e8a0532990995eee", net: 0, received: 155032, sent: 155032, txs: 10 },
    { wallet: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", net: 0, received: 558810, sent: 558810, txs: 2 },
    { wallet: "0xa8de80d102716a45b4d1741a7aa06937c7d8da84", net: 0, received: 499245, sent: 499245, txs: 2 },
    { wallet: "0x09ad820aac5779683b481c4674208a4e1b024afa", net: 0, received: 625, sent: 625, txs: 2 },
    { wallet: "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae", net: 0, received: 630, sent: 630, txs: 4 }
];

const WHALE_LABELS = {

};
