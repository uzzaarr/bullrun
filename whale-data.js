// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 1, 2026 at 02:52 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 164;
const WHALE_TOTAL_VOLUME      = 16723793;
const WHALE_BIGGEST_SINGLE    = 7582192;

const WHALE_TRANSFERS = [
    { hash: "0xc6036a4bb8932e1c74b5a7f998dc102afdf82c2c8b783ec1598efe049a27af71", ts: 1782869627, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 743760, block: 25434405, type: "transfer" },
    { hash: "0x0dca5cb25837a8e4bdb69af6cdc12bbf43b41835bcadf3b047b888aa0df5c05e", ts: 1782869459, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 743760, block: 25434391, type: "transfer" },
    { hash: "0x757fd7026d27ce95c8f2b0ededaee12150ebd140aacb0fe5e910d656d1197516", ts: 1782869339, from: "0xaf5e84d0a592ae84a1415a14627fe65929c9d9ec", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 738614, block: 25434381, type: "transfer" },
    { hash: "0x6e0199cf3e486d3a9f5c08ecaf3c8c6bb24b070edfcd4c3c8756b905751470c9", ts: 1782869291, from: "0x1cecbc925f7fbd1565fd4f99c81a4a138c729b7c", to: "0xaf5e84d0a592ae84a1415a14627fe65929c9d9ec", amount: 738614, block: 25434377, type: "transfer" },
    { hash: "0x06fdb655444c39684df203e33c433c1f42815aea33edc639a7c58679cec73e33", ts: 1782869231, from: "0xbd9949756de166350fea2661b609bb19cca3f3ce", to: "0x1cecbc925f7fbd1565fd4f99c81a4a138c729b7c", amount: 739726, block: 25434372, type: "transfer" },
    { hash: "0xc151ef0106cfb4c51c8ddeab2575cd2adb030c111c138ee4ebec35fc87b435b9", ts: 1782869003, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xbd9949756de166350fea2661b609bb19cca3f3ce", amount: 739726, block: 25434353, type: "transfer" },
    { hash: "0x2a8768be0d7fa15b68ebee610f1c6218bd4b808a6ec18d9c71ce8241b082a942", ts: 1782864095, from: "0xbc7697aabf2789ecfc22ba2868a2bb8eec6ccd1d", to: "0xf7f3d88685953618d82e220c78ae73cab310a11f", amount: 100000, block: 25433946, type: "transfer" },
    { hash: "0x46426d152adf05190b8bd6d6c478b34d7241d092da3c378320f96d0ba9c7bfe1", ts: 1782844931, from: "0x58edf78281334335effa23101bbe3371b6a36a51", to: "0x8e514f823c710d2658b056b83a36edef12b43b98", amount: 260010, block: 25432351, type: "transfer" },
    { hash: "0xb7a824a009f504d6c6767d772a73a518ebe8673c8b4155a44fe2640015cf8404", ts: 1782831467, from: "0x1e1357db875454accefd4e13b0aadf2864341601", to: "0xf1a6d3273ab0ba8c18cb887bf2e215e458d1cb91", amount: 712329, block: 25431235, type: "transfer" },
    { hash: "0x6f7126669a32120c3b8e8499f4c13702c067f80edd44f9afee8d55fb6c8e0abf", ts: 1782831251, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x1e1357db875454accefd4e13b0aadf2864341601", amount: 712329, block: 25431217, type: "transfer" },
    { hash: "0xc08d32972fadd49030536f7e56ff29e8a7d88a6579824eeeeb7e2e2b047df4fc", ts: 1782830159, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xc8aa49d33a6df940a5d0defce1e4a5f4b877db92", amount: 7582192, block: 25431126, type: "transfer" },
    { hash: "0x8960cc65d63b2216fe27fc566a39e9aa4a1ea57cbc4017313455cd6bcbb3956d", ts: 1782801263, from: "0x468476516e89cab1c5f2f04f73d5e4a93d8a4fe6", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 422055, block: 25428732, type: "transfer" },
    { hash: "0x9bdbc8d592d4b18edc951eaaf22e9a5dd7e0332459a84ee4289e03c5c71ab463", ts: 1782800675, from: "0x99679e1c646f346023883a2819091029b3ee9754", to: "0x468476516e89cab1c5f2f04f73d5e4a93d8a4fe6", amount: 422055, block: 25428683, type: "transfer" },
    { hash: "0x199a61074ab3e68df3979761251126da7ec05a7e3803e731d2707001fbbe8601", ts: 1782800507, from: "0x2b6a91eba269882fd693c175d6af3efbf23d9e23", to: "0x99679e1c646f346023883a2819091029b3ee9754", amount: 422055, block: 25428669, type: "transfer" },
    { hash: "0x290db0d87cc9e57a0d2a14e302fd19a50796450eed4214b7a8be33dbdbde5995", ts: 1782800387, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x2b6a91eba269882fd693c175d6af3efbf23d9e23", amount: 422055, block: 25428659, type: "transfer" },
    { hash: "0x56417e98c91b4a647cdee485cbc0bfef3fcb8bcef7f5925fdcdc49229793bc8d", ts: 1782793667, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xf733c29e2918271490d8318846f617b16e613be0", amount: 1224513, block: 25428103, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xc8aa49d33a6df940a5d0defce1e4a5f4b877db92", net: 7582192, received: 7582192, sent: 0, txs: 1 },
    { wallet: "0xf733c29e2918271490d8318846f617b16e613be0", net: 1224513, received: 1224513, sent: 0, txs: 1 },
    { wallet: "0xf1a6d3273ab0ba8c18cb887bf2e215e458d1cb91", net: 712329, received: 712329, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 483750, received: 743760, sent: 260010, txs: 2 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 445811, received: 446921, sent: 1111, txs: 4 },
    { wallet: "0x8e514f823c710d2658b056b83a36edef12b43b98", net: 260010, received: 260010, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 112262, received: 856021, sent: 743760, txs: 10 },
    { wallet: "0xf7f3d88685953618d82e220c78ae73cab310a11f", net: 100000, received: 100000, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 85570, received: 85570, sent: 0, txs: 1 },
    { wallet: "0x97fae140a6607bd0100acc505420584161229588", net: 79452, received: 79452, sent: 0, txs: 1 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 59955, received: 59955, sent: 0, txs: 6 },
    { wallet: "0x6aef801dcf9070fd4b240aae829e37c085dbae2e", net: 36271, received: 36271, sent: 0, txs: 1 },
    { wallet: "0x0a1354ba9359d7aded40faf11bbe590e2c14bec7", net: 33144, received: 33144, sent: 0, txs: 1 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 33086, received: 33086, sent: 0, txs: 2 },
    { wallet: "0x6c13280bf6a7ec138aa119cb7f4a33867947b3ba", net: 20548, received: 20548, sent: 0, txs: 1 },
    { wallet: "0x7a04709ad48202483c229c5228cce0a75558cce3", net: 15918, received: 15918, sent: 0, txs: 1 },
    { wallet: "0xdc56fd9d0112f44c9c4944e544fd20987c8b3a8c", net: 12384, received: 12384, sent: 0, txs: 2 },
    { wallet: "0x032a343a8c77e8ab0dbddd0e24cebaf5b3f0c3bf", net: 9315, received: 9315, sent: 0, txs: 1 },
    { wallet: "0x4e5468a7fec3ae9bd430e116bb05d5bdecfd2cdc", net: 9041, received: 9041, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 8767, received: 8767, sent: 0, txs: 1 },
    { wallet: "0x7b005658f7224e54135622045a56b4819d7f826b", net: 4110, received: 4110, sent: 0, txs: 1 },
    { wallet: "0xca902e065a5cbea896c6a37a3400d7ba166f7249", net: 3314, received: 3314, sent: 0, txs: 1 },
    { wallet: "0xc2082544fe32590184b955f53628a53aeafd5c8b", net: 2877, received: 2877, sent: 0, txs: 1 },
    { wallet: "0x4a1a379f549d22df220acd5d0344240f0cb03293", net: 2221, received: 2221, sent: 0, txs: 1 },
    { wallet: "0xfaa78f45f59770b9274d19bf7bf9b0a10fd5a851", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0xa9316ed0374857f5cc6aa20dde48fbd82dd08293", net: 1918, received: 1918, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1836, received: 1836, sent: 0, txs: 13 },
    { wallet: "0x23267c3e5429f43c43f3ad9be5b7a780fdbce0fe", net: 1657, received: 1657, sent: 0, txs: 1 },
    { wallet: "0xf317932bd3386a0078b45fb5993c687b173cf1cd", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0x3dd5a6f6ea24eaf4001fcf3fc694df1d561c3608", net: 1111, received: 1111, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x20fa473270be0c37a33e6592428b428ff808f653", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x61638f7e4c2235cb41469b9498feac5bed3f9a4d", net: 100, received: 100, sent: 0, txs: 1 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 79, received: 79, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 64, received: 64, sent: 0, txs: 2 },
    { wallet: "0x3dbd2cef7bf9871fd9f09721bca8262f101a574a", net: 10, received: 10, sent: 0, txs: 1 },
    { wallet: "0x3c8b6ff2eb679f0a69c98af2aab62260ba247cb3", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 59955, sent: 59955, txs: 15 },
    { wallet: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", net: 0, received: 743760, sent: 743760, txs: 2 },
    { wallet: "0xaf5e84d0a592ae84a1415a14627fe65929c9d9ec", net: 0, received: 738614, sent: 738614, txs: 2 },
    { wallet: "0x1cecbc925f7fbd1565fd4f99c81a4a138c729b7c", net: 0, received: 739726, sent: 739726, txs: 3 },
    { wallet: "0xbd9949756de166350fea2661b609bb19cca3f3ce", net: 0, received: 739726, sent: 739726, txs: 2 },
    { wallet: "0x2556ff9715791bc2c2b3c198b7a31791b31fabd0", net: 0, received: 31, sent: 31, txs: 2 },
    { wallet: "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae", net: 0, received: 45, sent: 45, txs: 6 },
    { wallet: "0x28bf6006d87de7f44445905aa4f5cb8c0d8cba02", net: 0, received: 31, sent: 31, txs: 2 },
    { wallet: "0x4a82d36693466b1be0e9ebecb02152f6ec70c3cc", net: 0, received: 14, sent: 14, txs: 2 },
    { wallet: "0x20f6ee51340adeed01a59b0e65cb3703f3dc860c", net: 0, received: 14, sent: 14, txs: 2 },
    { wallet: "0x09ad820aac5779683b481c4674208a4e1b024afa", net: 0, received: 14, sent: 14, txs: 2 },
    { wallet: "0xa1132063d28adbced05ad99cb17f4eb0b1b912e2", net: 0, received: 79452, sent: 79452, txs: 2 }
];

const WHALE_LABELS = {

};
