// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 27, 2026 at 02:18 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 195;
const WHALE_TOTAL_VOLUME      = 3349069;
const WHALE_BIGGEST_SINGLE    = 905687;

const WHALE_TRANSFERS = [
    { hash: "0x48401f84b48b81f1da0b9d7472bafc57518bc0664c89179fef7cbe8b55fdcbdb", ts: 1785158759, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x0c066c61c1784640946a008767f9c0dc48448bc9", amount: 700000, block: 25624432, type: "transfer" },
    { hash: "0xeb630939b7e4ec1eecec9f867282cc40d039dad556df6651ceb86cd253466518", ts: 1785154415, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", amount: 126022, block: 25624071, type: "transfer" },
    { hash: "0xaf857a30f825b88a74efac65bfaf32b6a308a2446bea36671d034148df44e091", ts: 1785147071, from: "0xa109e4d1e44da314d86aaa223330d3f8b9b0c037", to: "0x08975eb9695e5ce896f7416daa9a5f62e81142b3", amount: 110990, block: 25623462, type: "transfer" },
    { hash: "0xfa88791d34763ead87a3d22411c58998bffc6b71704d1b6f29661f9377617584", ts: 1785145619, from: "0xc1c4a5c41b62989acdbb9a11bbab668158f5d481", to: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", amount: 905687, block: 25623341, type: "transfer" },
    { hash: "0xf727233e991a70a0e88c6aa2bbf503d8d2112507b8815b65f2cd7201b3e4704f", ts: 1785144647, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xc1c4a5c41b62989acdbb9a11bbab668158f5d481", amount: 905687, block: 25623261, type: "transfer" },
    { hash: "0x4f7cf59cfc285e999e643e5c386eb2e7b01566baeac6de39f813c40812ada49c", ts: 1785141251, from: "0x43e86f6198b99e21918f3fa07c3a68a5587409e3", to: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", amount: 356557, block: 25622979, type: "transfer" },
    { hash: "0x33c67212ce887ce69156c3064f7ece451e8dc110e235734aa397497ad38a1b77", ts: 1785138887, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 122063, block: 25622782, type: "transfer" },
    { hash: "0x73f51be5fb58865ecd99776c5e18cf97f274ccaa4ff64f951cbbee666fb4f278", ts: 1785138671, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 122063, block: 25622764, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", net: 905687, received: 905687, sent: 0, txs: 1 },
    { wallet: "0x0c066c61c1784640946a008767f9c0dc48448bc9", net: 700000, received: 700000, sent: 0, txs: 1 },
    { wallet: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", net: 356557, received: 356557, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 131641, received: 131641, sent: 0, txs: 2 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 126022, received: 126022, sent: 0, txs: 1 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 119727, received: 119727, sent: 0, txs: 12 },
    { wallet: "0x08975eb9695e5ce896f7416daa9a5f62e81142b3", net: 110990, received: 110990, sent: 0, txs: 1 },
    { wallet: "0x51dedb895ed27222e6e9cfe1c7402370c7e52d8d", net: 88493, received: 88493, sent: 0, txs: 1 },
    { wallet: "0x716e3fad60bc867449795cd624da34aab3dc381f", net: 69773, received: 69773, sent: 0, txs: 6 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 59301, received: 59301, sent: 0, txs: 1 },
    { wallet: "0xbe4ae6e24d12dbd180517f126765178bae81f341", net: 46027, received: 46027, sent: 0, txs: 1 },
    { wallet: "0x5c7bb5d31e178c4fb0534add88618a0d2688756d", net: 44384, received: 44384, sent: 0, txs: 1 },
    { wallet: "0xd0be1fded5d964619b92b3672c08c43305529be0", net: 41145, received: 41145, sent: 0, txs: 2 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 37673, received: 37673, sent: 0, txs: 2 },
    { wallet: "0x358bae996e9a172cc7f4a24bedd5cba5e6bc0944", net: 28767, received: 28767, sent: 0, txs: 1 },
    { wallet: "0x21fd0b315ce79304ee0203374e4a723f2587caa9", net: 18630, received: 18630, sent: 0, txs: 1 },
    { wallet: "0x99dde06d54ca6b2cf1e064becfcdb3516e0dcad0", net: 13899, received: 13899, sent: 0, txs: 1 },
    { wallet: "0xd7af5ea14fad145b2d9fd57e321d7bf8301980b5", net: 9088, received: 9088, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 5479, received: 5479, sent: 0, txs: 1 },
    { wallet: "0x22a3752e30492b1421be1471e16703aaabe6af63", net: 5154, received: 5154, sent: 0, txs: 1 },
    { wallet: "0xe8d8209a5f00040af456c3555c6dc66186ea96ec", net: 4170, received: 4170, sent: 0, txs: 1 },
    { wallet: "0x561e6326076713347d2bb3d3adb4e45a65009580", net: 3973, received: 3973, sent: 0, txs: 1 },
    { wallet: "0x8a722431c321be4f0ee127ba90d40efa92bdea32", net: 3159, received: 3159, sent: 0, txs: 1 },
    { wallet: "0x1b0b1ad3e6a2fb69c48c2913fea012bc38f0a2e9", net: 2877, received: 2877, sent: 0, txs: 1 },
    { wallet: "0xdc56fd9d0112f44c9c4944e544fd20987c8b3a8c", net: 2684, received: 2684, sent: 0, txs: 1 },
    { wallet: "0x2a76a5be3bca8200f7810600ed9201103746810b", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0xdd7042708cb97a03dec630d0415e7fd424401709", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 753, received: 753, sent: 0, txs: 14 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x3620002e79381c888479e4c57074d8c385f8d932", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 248, received: 360, sent: 111, txs: 3 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 113, received: 113, sent: 0, txs: 1 },
    { wallet: "0x52866fd157577897ce627022b9c19bd2e622fd7a", net: 5, received: 5, sent: 0, txs: 1 },
    { wallet: "0x050254851dc7f1517eb9bd8a059d875ee1b70086", net: 0, received: 9088, sent: 9088, txs: 2 },
    { wallet: "0x7f6aba7563cb5d31980d440337d3d1a6e3db58f3", net: 0, received: 88493, sent: 88493, txs: 2 },
    { wallet: "0x1f2f10d1c40777ae1da742455c65828ff36df387", net: 0, received: 7090, sent: 7090, txs: 4 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 119727, sent: 119727, txs: 34 },
    { wallet: "0x2c3e0b024547e8aee685f98274d033947720cb62", net: 0, received: 17808, sent: 17808, txs: 3 },
    { wallet: "0xb1f73785b99fd3b1fd374277b818c30efeab7196", net: 0, received: 17808, sent: 17808, txs: 2 },
    { wallet: "0x381b3c68379230c8c9c3509f6de7d106881225fc", net: 0, received: 3836, sent: 3836, txs: 3 },
    { wallet: "0x0a73969d19239fb063771ac6272101f14f21943d", net: 0, received: 3836, sent: 3836, txs: 2 },
    { wallet: "0xada3344693f368cd0ebf510f26617ad4213bf5b3", net: 0, received: 910, sent: 910, txs: 2 },
    { wallet: "0x4bab2cb2ed6ee2d564ba5398cab4161d95e58f1b", net: 0, received: 915, sent: 915, txs: 3 }
];

const WHALE_LABELS = {

};
