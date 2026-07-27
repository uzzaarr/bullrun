// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 27, 2026 at 09:39 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 182;
const WHALE_TOTAL_VOLUME      = 3654609;
const WHALE_BIGGEST_SINGLE    = 905687;

const WHALE_TRANSFERS = [
    { hash: "0xf727233e991a70a0e88c6aa2bbf503d8d2112507b8815b65f2cd7201b3e4704f", ts: 1785144647, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xc1c4a5c41b62989acdbb9a11bbab668158f5d481", amount: 905687, block: 25623261, type: "transfer" },
    { hash: "0x4f7cf59cfc285e999e643e5c386eb2e7b01566baeac6de39f813c40812ada49c", ts: 1785141251, from: "0x43e86f6198b99e21918f3fa07c3a68a5587409e3", to: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", amount: 356557, block: 25622979, type: "transfer" },
    { hash: "0x33c67212ce887ce69156c3064f7ece451e8dc110e235734aa397497ad38a1b77", ts: 1785138887, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 122063, block: 25622782, type: "transfer" },
    { hash: "0x73f51be5fb58865ecd99776c5e18cf97f274ccaa4ff64f951cbbee666fb4f278", ts: 1785138671, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 122063, block: 25622764, type: "transfer" },
    { hash: "0x0b9207351346c133d8d573720ade17577e50072c6a5c87ab47f440e5d2bc0111", ts: 1785060947, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 505427, block: 25616307, type: "transfer" },
    { hash: "0x15c89242934798af62ff3595bbf3498ad3a0299a962a4250266a1d8e86da593e", ts: 1785060743, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 505427, block: 25616290, type: "transfer" },
    { hash: "0xdf60c2c7dc1365add251c2b93ae1d250c3f3a07892a8f8c58783f6aa23488c0d", ts: 1785060539, from: "0x6068146744760fef7ce41e15ce73bfcb85224db9", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 499248, block: 25616274, type: "transfer" },
    { hash: "0xbca6684ec65cd0360ab6013bfa5a7b79fff6056d78b591630f33101ad555ece9", ts: 1785060479, from: "0x6ba9f986d7ab9b884d356679e8af4ba5969415fa", to: "0x6068146744760fef7ce41e15ce73bfcb85224db9", amount: 499248, block: 25616269, type: "transfer" },
    { hash: "0x3227ecf348aa2594f645841c4527b40074ee31cc4d63bde700d513720adb4d03", ts: 1785060311, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x6ba9f986d7ab9b884d356679e8af4ba5969415fa", amount: 138889, block: 25616255, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xc1c4a5c41b62989acdbb9a11bbab668158f5d481", net: 905687, received: 905687, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 627490, received: 627490, sent: 0, txs: 2 },
    { wallet: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", net: 356557, received: 356557, sent: 0, txs: 1 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 99843, received: 99843, sent: 0, txs: 10 },
    { wallet: "0x7f6aba7563cb5d31980d440337d3d1a6e3db58f3", net: 88493, received: 88493, sent: 0, txs: 1 },
    { wallet: "0x716e3fad60bc867449795cd624da34aab3dc381f", net: 62252, received: 62252, sent: 0, txs: 5 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 59301, received: 59301, sent: 0, txs: 1 },
    { wallet: "0xd0be1fded5d964619b92b3672c08c43305529be0", net: 41145, received: 41145, sent: 0, txs: 2 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 37673, received: 37673, sent: 0, txs: 2 },
    { wallet: "0x358bae996e9a172cc7f4a24bedd5cba5e6bc0944", net: 28767, received: 28767, sent: 0, txs: 1 },
    { wallet: "0x9be5b8a7314552fa47feb1355cd5b4adc7bb7516", net: 21667, received: 21667, sent: 0, txs: 1 },
    { wallet: "0x99dde06d54ca6b2cf1e064becfcdb3516e0dcad0", net: 13899, received: 13899, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 5479, received: 5479, sent: 0, txs: 1 },
    { wallet: "0x50e8e34147929096ab69b3316ac0f1adf8b684c1", net: 4932, received: 4932, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 4005, received: 631796, sent: 627792, txs: 12 },
    { wallet: "0x561e6326076713347d2bb3d3adb4e45a65009580", net: 3973, received: 3973, sent: 0, txs: 1 },
    { wallet: "0x8a722431c321be4f0ee127ba90d40efa92bdea32", net: 3159, received: 3159, sent: 0, txs: 1 },
    { wallet: "0x1b0b1ad3e6a2fb69c48c2913fea012bc38f0a2e9", net: 2877, received: 2877, sent: 0, txs: 1 },
    { wallet: "0xdc56fd9d0112f44c9c4944e544fd20987c8b3a8c", net: 2684, received: 2684, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1706, received: 1706, sent: 0, txs: 17 },
    { wallet: "0x2a76a5be3bca8200f7810600ed9201103746810b", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0xdd7042708cb97a03dec630d0415e7fd424401709", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x3620002e79381c888479e4c57074d8c385f8d932", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 227, received: 227, sent: 0, txs: 1 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 113, received: 113, sent: 0, txs: 1 },
    { wallet: "0x10916b18ce6deef279f0ee66fab6b6c0e3461b78", net: 1, received: 987, sent: 986, txs: 4 },
    { wallet: "0x370df7cd3dc885106a34c50bebc1b6b28fc5c67c", net: 0, received: 88493, sent: 88493, txs: 2 },
    { wallet: "0x7a999a5a0e1dd287f48bc920afdbf7c82d54f5aa", net: 0, received: 4521, sent: 4521, txs: 3 },
    { wallet: "0x5e51e7ac6adc3d254dbcc34d38a28458e47f750a", net: 0, received: 4521, sent: 4521, txs: 2 },
    { wallet: "0x0a9377d165cb2701e99b4c1becd90266e8da7518", net: 0, received: 6563, sent: 6563, txs: 2 },
    { wallet: "0x214a439a6c52259117ac3598bebe62d0c2efa813", net: 0, received: 6575, sent: 6575, txs: 3 },
    { wallet: "0x49a2299840a9a5495cae51415548c2b1344bd4f3", net: 0, received: 6575, sent: 6575, txs: 2 },
    { wallet: "0x3de0d70dedf741f77abb5894ca24c8e97c265d4b", net: 0, received: 822, sent: 822, txs: 2 },
    { wallet: "0xfe263102682933297cb65dc813e5193249769251", net: 0, received: 62252, sent: 62252, txs: 10 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 227, sent: 227, txs: 2 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 99843, sent: 99843, txs: 29 },
    { wallet: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", net: 0, received: 627490, sent: 627490, txs: 4 },
    { wallet: "0xaaaa4f4ce6362784175686b62f888a4af3d2fac6", net: 0, received: 37749, sent: 37749, txs: 2 },
    { wallet: "0xd085a5781c95a0753db5b2dd909291c5e4fb66cd", net: 0, received: 13899, sent: 13899, txs: 2 },
    { wallet: "0xe15967dd403130e1428cdd55042ade43ef1432aa", net: 0, received: 2456, sent: 2456, txs: 2 },
    { wallet: "0xc26ff22e2f18f54f82f74593529a27347a5a56ff", net: 0, received: 2466, sent: 2466, txs: 3 },
    { wallet: "0x11111605d89c5cb81c86d7daf5221bf36c515afe", net: 0, received: 37748, sent: 37748, txs: 4 }
];

const WHALE_LABELS = {

};
