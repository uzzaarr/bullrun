// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 30, 2026 at 07:47 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 149;
const WHALE_TOTAL_VOLUME      = 63415751;
const WHALE_BIGGEST_SINGLE    = 36208817;

const WHALE_TRANSFERS = [
    { hash: "0x46426d152adf05190b8bd6d6c478b34d7241d092da3c378320f96d0ba9c7bfe1", ts: 1782844931, from: "0x58edf78281334335effa23101bbe3371b6a36a51", to: "0x8e514f823c710d2658b056b83a36edef12b43b98", amount: 260010, block: 25432351, type: "transfer" },
    { hash: "0xb7a824a009f504d6c6767d772a73a518ebe8673c8b4155a44fe2640015cf8404", ts: 1782831467, from: "0x1e1357db875454accefd4e13b0aadf2864341601", to: "0xf1a6d3273ab0ba8c18cb887bf2e215e458d1cb91", amount: 712329, block: 25431235, type: "transfer" },
    { hash: "0x6f7126669a32120c3b8e8499f4c13702c067f80edd44f9afee8d55fb6c8e0abf", ts: 1782831251, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x1e1357db875454accefd4e13b0aadf2864341601", amount: 712329, block: 25431217, type: "transfer" },
    { hash: "0xc08d32972fadd49030536f7e56ff29e8a7d88a6579824eeeeb7e2e2b047df4fc", ts: 1782830159, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xc8aa49d33a6df940a5d0defce1e4a5f4b877db92", amount: 7582192, block: 25431126, type: "transfer" },
    { hash: "0x8960cc65d63b2216fe27fc566a39e9aa4a1ea57cbc4017313455cd6bcbb3956d", ts: 1782801263, from: "0x468476516e89cab1c5f2f04f73d5e4a93d8a4fe6", to: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", amount: 422055, block: 25428732, type: "transfer" },
    { hash: "0x9bdbc8d592d4b18edc951eaaf22e9a5dd7e0332459a84ee4289e03c5c71ab463", ts: 1782800675, from: "0x99679e1c646f346023883a2819091029b3ee9754", to: "0x468476516e89cab1c5f2f04f73d5e4a93d8a4fe6", amount: 422055, block: 25428683, type: "transfer" },
    { hash: "0x199a61074ab3e68df3979761251126da7ec05a7e3803e731d2707001fbbe8601", ts: 1782800507, from: "0x2b6a91eba269882fd693c175d6af3efbf23d9e23", to: "0x99679e1c646f346023883a2819091029b3ee9754", amount: 422055, block: 25428669, type: "transfer" },
    { hash: "0x290db0d87cc9e57a0d2a14e302fd19a50796450eed4214b7a8be33dbdbde5995", ts: 1782800387, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x2b6a91eba269882fd693c175d6af3efbf23d9e23", amount: 422055, block: 25428659, type: "transfer" },
    { hash: "0x56417e98c91b4a647cdee485cbc0bfef3fcb8bcef7f5925fdcdc49229793bc8d", ts: 1782793667, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xf733c29e2918271490d8318846f617b16e613be0", amount: 1224513, block: 25428103, type: "transfer" },
    { hash: "0x2c393c6093234f9c1c921fb2421c99a3b5a208d1b0e4f708fd9a26ccacad1ecd", ts: 1782782579, from: "0x39927a709eaba03d43c351ea0b1bf4228ce99ade", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 2426100, block: 25427180, type: "transfer" },
    { hash: "0x7168edb6c4e736e015e8aa3cb3d6565c3ed588fb35623e526617824f329427f9", ts: 1782781019, from: "0xa230ae47c4e13b2484dcb9b3a50228ec1336fe59", to: "0x39927a709eaba03d43c351ea0b1bf4228ce99ade", amount: 2426100, block: 25427050, type: "transfer" },
    { hash: "0x2d9bed7bf2b4b5f0a37017e182fa240fe49abc309a121fd4ef9c6cf9a1f184e6", ts: 1782780911, from: "0x6912d024e2b88136c5a586e77b092199963b6083", to: "0xa230ae47c4e13b2484dcb9b3a50228ec1336fe59", amount: 2426100, block: 25427041, type: "transfer" },
    { hash: "0xddbcada0e3ff386adaebba1264e4359f62b7b8fa849482a816147a11815aa843", ts: 1782778679, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xa7749a59d3cda51dbca87319ebaec51ceef07854", amount: 4843562, block: 25426856, type: "transfer" },
    { hash: "0x9c18f8cdb2c752558ad926c333118dcee7d0e341b9d0cc95b78960cb4d9c1dec", ts: 1782778667, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xa7749a59d3cda51dbca87319ebaec51ceef07854", amount: 2300000, block: 25426855, type: "transfer" },
    { hash: "0x06cbd8081ef8ff0a5b05548212f4fd1cc16dff33afee25173ff4e0a3bf73215f", ts: 1782777635, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x9c29f9c46b3279cae1fff5897ad7fe13ac154327", amount: 105479, block: 25426769, type: "transfer" },
    { hash: "0x50b4927b50f3bf4dd06b12b4698bc162126bb78d71e0cdaecdfaf758d01aa99d", ts: 1782766631, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x34f1a88435cf57ab0af85343fda98d6980dff366", amount: 500000, block: 25425857, type: "transfer" },
    { hash: "0xe8f73caf0bfe63ef8f4d7babcef4f1100b77573059fc4fc75785978837f8446a", ts: 1782763487, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xe19ed11103265687a351662aab588a890ec598b4", amount: 36208817, block: 25425595, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xe19ed11103265687a351662aab588a890ec598b4", net: 36208417, received: 36208817, sent: 400, txs: 2 },
    { wallet: "0xc8aa49d33a6df940a5d0defce1e4a5f4b877db92", net: 7582192, received: 7582192, sent: 0, txs: 1 },
    { wallet: "0xa7749a59d3cda51dbca87319ebaec51ceef07854", net: 7143562, received: 7143562, sent: 0, txs: 2 },
    { wallet: "0xf733c29e2918271490d8318846f617b16e613be0", net: 1224513, received: 1224513, sent: 0, txs: 1 },
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 1185669, received: 2426100, sent: 1240431, txs: 3 },
    { wallet: "0xf1a6d3273ab0ba8c18cb887bf2e215e458d1cb91", net: 712329, received: 712329, sent: 0, txs: 1 },
    { wallet: "0x34f1a88435cf57ab0af85343fda98d6980dff366", net: 500000, received: 500000, sent: 0, txs: 1 },
    { wallet: "0x8e514f823c710d2658b056b83a36edef12b43b98", net: 260010, received: 260010, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 117357, received: 117363, sent: 6, txs: 7 },
    { wallet: "0x9c29f9c46b3279cae1fff5897ad7fe13ac154327", net: 105479, received: 105479, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 85570, received: 85570, sent: 0, txs: 1 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 58043, received: 58043, sent: 0, txs: 3 },
    { wallet: "0x7ba98b5263b87a206d6d1d6087588e479167700a", net: 45205, received: 45205, sent: 0, txs: 1 },
    { wallet: "0x6aef801dcf9070fd4b240aae829e37c085dbae2e", net: 36271, received: 36271, sent: 0, txs: 1 },
    { wallet: "0x8db66cd5d4538fdcdc5ff6d1c82abd1e52e998f4", net: 27945, received: 27945, sent: 0, txs: 1 },
    { wallet: "0x6c13280bf6a7ec138aa119cb7f4a33867947b3ba", net: 20548, received: 20548, sent: 0, txs: 1 },
    { wallet: "0x7a04709ad48202483c229c5228cce0a75558cce3", net: 15918, received: 15918, sent: 0, txs: 1 },
    { wallet: "0x69987be7ce4cc89d0e00e0b8fa652f10e22fce7c", net: 13425, received: 13425, sent: 0, txs: 1 },
    { wallet: "0x032a343a8c77e8ab0dbddd0e24cebaf5b3f0c3bf", net: 9315, received: 9315, sent: 0, txs: 1 },
    { wallet: "0x4e5468a7fec3ae9bd430e116bb05d5bdecfd2cdc", net: 9041, received: 9041, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 8767, received: 8767, sent: 0, txs: 1 },
    { wallet: "0x7b005658f7224e54135622045a56b4819d7f826b", net: 4110, received: 4110, sent: 0, txs: 1 },
    { wallet: "0xca902e065a5cbea896c6a37a3400d7ba166f7249", net: 3314, received: 3314, sent: 0, txs: 1 },
    { wallet: "0xc2082544fe32590184b955f53628a53aeafd5c8b", net: 2877, received: 2877, sent: 0, txs: 1 },
    { wallet: "0x4a1a379f549d22df220acd5d0344240f0cb03293", net: 2221, received: 2221, sent: 0, txs: 1 },
    { wallet: "0xfaa78f45f59770b9274d19bf7bf9b0a10fd5a851", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x23267c3e5429f43c43f3ad9be5b7a780fdbce0fe", net: 1657, received: 1657, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xf317932bd3386a0078b45fb5993c687b173cf1cd", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0x3dd5a6f6ea24eaf4001fcf3fc694df1d561c3608", net: 1111, received: 1111, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 661, received: 661, sent: 0, txs: 12 },
    { wallet: "0x20fa473270be0c37a33e6592428b428ff808f653", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 104, received: 104, sent: 0, txs: 2 },
    { wallet: "0x61638f7e4c2235cb41469b9498feac5bed3f9a4d", net: 100, received: 100, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 64, received: 64, sent: 0, txs: 2 },
    { wallet: "0x3dbd2cef7bf9871fd9f09721bca8262f101a574a", net: 10, received: 10, sent: 0, txs: 1 },
    { wallet: "0x7e648db6a05c487072416fd708a88f8715ec29bb", net: 6, received: 6, sent: 0, txs: 1 },
    { wallet: "0x3c8b6ff2eb679f0a69c98af2aab62260ba247cb3", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 9288, sent: 9288, txs: 6 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 28189, sent: 28189, txs: 14 },
    { wallet: "0xff48c3cee993382fb0538d241c0cbd484c17a493", net: 0, received: 3172, sent: 3172, txs: 2 },
    { wallet: "0xad729fcd02e52938c29284d0ab3b4f1c3f66802c", net: 0, received: 1096, sent: 1096, txs: 2 },
    { wallet: "0xc6e8ffb5ba1903378d2ed5b6e21af2025c4f95c2", net: 0, received: 24984, sent: 24984, txs: 2 },
    { wallet: "0xb98d84b8d52ba4f12b27ae84226703ede035b629", net: 0, received: 38534, sent: 38534, txs: 2 },
    { wallet: "0x35b0bbf66a7d70dc01c49c502906b8b3a790a2ce", net: 0, received: 24983, sent: 24983, txs: 2 },
    { wallet: "0x0071ce3196261f9bccfe2648623508ef04b14109", net: 0, received: 25068, sent: 25068, txs: 3 },
    { wallet: "0x10d2a96d891a851e1c4c85dfe5ff081ad2ef8bb4", net: 0, received: 25068, sent: 25068, txs: 3 },
    { wallet: "0x77f16c0c7853273e1425bb5449766eef61f85697", net: 0, received: 25068, sent: 25068, txs: 2 }
];

const WHALE_LABELS = {

};
