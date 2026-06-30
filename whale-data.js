// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 30, 2026 at 02:07 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 174;
const WHALE_TOTAL_VOLUME      = 77600296;
const WHALE_BIGGEST_SINGLE    = 36208817;

const WHALE_TRANSFERS = [
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
    { hash: "0xe8f73caf0bfe63ef8f4d7babcef4f1100b77573059fc4fc75785978837f8446a", ts: 1782763487, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xe19ed11103265687a351662aab588a890ec598b4", amount: 36208817, block: 25425595, type: "transfer" },
    { hash: "0xbc208c36d3c8896ac7643a441fc614d06afcee10216a4240a21aec16fbd20f86", ts: 1782755219, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x7ecc8b7e980d6048ddebeb86d62e2712bd05a332", amount: 179452, block: 25424906, type: "transfer" },
    { hash: "0x9f9811f11b83721da0b2107cd7b71e83e183e4e399c4e1cc8c7069cfe4a6c9ea", ts: 1782754043, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xf8191d98ae98d2f7abdfb63a9b0b812b93c873aa", amount: 22771953, block: 25424809, type: "transfer" },
    { hash: "0x1688ead4330978740bd86c5f3e0e688b7b77d6347c13a077ad8a5f4d6cd83a8c", ts: 1782744527, from: "0x8bb88a3eafd6ba0b6cce254c0c447c4cf5860afe", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 500000, block: 25424021, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xe19ed11103265687a351662aab588a890ec598b4", net: 36208417, received: 36208817, sent: 400, txs: 2 },
    { wallet: "0xf8191d98ae98d2f7abdfb63a9b0b812b93c873aa", net: 22771953, received: 22771953, sent: 0, txs: 1 },
    { wallet: "0xa7749a59d3cda51dbca87319ebaec51ceef07854", net: 7143562, received: 7143562, sent: 0, txs: 2 },
    { wallet: "0xf733c29e2918271490d8318846f617b16e613be0", net: 1224513, received: 1224513, sent: 0, txs: 1 },
    { wallet: "0x34f1a88435cf57ab0af85343fda98d6980dff366", net: 500000, received: 500000, sent: 0, txs: 1 },
    { wallet: "0x7ecc8b7e980d6048ddebeb86d62e2712bd05a332", net: 179452, received: 179452, sent: 0, txs: 1 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 139238, received: 139238, sent: 0, txs: 5 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 132082, received: 133849, sent: 1767, txs: 3 },
    { wallet: "0x9c29f9c46b3279cae1fff5897ad7fe13ac154327", net: 105479, received: 105479, sent: 0, txs: 1 },
    { wallet: "0x7ba98b5263b87a206d6d1d6087588e479167700a", net: 45205, received: 45205, sent: 0, txs: 1 },
    { wallet: "0x6aef801dcf9070fd4b240aae829e37c085dbae2e", net: 36271, received: 36271, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 30436, received: 30443, sent: 6, txs: 6 },
    { wallet: "0x1a996eb2a69423926d60973fc3d73cf1fa847a2f", net: 28493, received: 28493, sent: 0, txs: 1 },
    { wallet: "0xdc56fd9d0112f44c9c4944e544fd20987c8b3a8c", net: 26567, received: 26567, sent: 0, txs: 6 },
    { wallet: "0x6c13280bf6a7ec138aa119cb7f4a33867947b3ba", net: 20548, received: 20548, sent: 0, txs: 1 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 19992, received: 19992, sent: 0, txs: 2 },
    { wallet: "0x7a04709ad48202483c229c5228cce0a75558cce3", net: 15918, received: 15918, sent: 0, txs: 1 },
    { wallet: "0x69987be7ce4cc89d0e00e0b8fa652f10e22fce7c", net: 13425, received: 13425, sent: 0, txs: 1 },
    { wallet: "0x4e5468a7fec3ae9bd430e116bb05d5bdecfd2cdc", net: 9041, received: 9041, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 8767, received: 8767, sent: 0, txs: 1 },
    { wallet: "0x82a365858b4a82eed80e5473c6f698f93b48617f", net: 6895, received: 74461, sent: 67566, txs: 4 },
    { wallet: "0x9b8393d3fb2753970a9028d6c2d2fa9758d2fbf0", net: 5205, received: 5205, sent: 0, txs: 1 },
    { wallet: "0x7b005658f7224e54135622045a56b4819d7f826b", net: 4110, received: 4110, sent: 0, txs: 1 },
    { wallet: "0xff48c3cee993382fb0538d241c0cbd484c17a493", net: 3172, received: 3172, sent: 0, txs: 1 },
    { wallet: "0x40756e446e568e2f27dcd7ca3c505e77944f1c43", net: 1767, received: 1767, sent: 0, txs: 1 },
    { wallet: "0x4a68582fa823b753896a49b2047dc7d8e2b73f30", net: 1657, received: 1657, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xb1f8db9d1b0b6698aca9d7ba189d60a30139dd94", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xf317932bd3386a0078b45fb5993c687b173cf1cd", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0x3dd5a6f6ea24eaf4001fcf3fc694df1d561c3608", net: 1111, received: 1111, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x20fa473270be0c37a33e6592428b428ff808f653", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd031b8c380ff6df254cdc1f8d55b8bbd81ff4216", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 379, received: 379, sent: 0, txs: 9 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 129, received: 129, sent: 0, txs: 6 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 68, received: 68, sent: 0, txs: 2 },
    { wallet: "0x3dbd2cef7bf9871fd9f09721bca8262f101a574a", net: 10, received: 10, sent: 0, txs: 1 },
    { wallet: "0x136f2ef5329b0426b60fa07b928468c418c8f49e", net: 9, received: 9, sent: 0, txs: 1 },
    { wallet: "0x283c6f54ddd678d002a49f69b6aec799e424ab6a", net: 7, received: 7, sent: 0, txs: 1 },
    { wallet: "0x7e648db6a05c487072416fd708a88f8715ec29bb", net: 6, received: 6, sent: 0, txs: 1 },
    { wallet: "0xf5c4f3dc02c3fb9279495a8fef7b0741da956157", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0x25d870f41c8a0419b48982b6fb58f56eadb4b79d", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0xcf399b7e1a1342d8dd52d2bbfb059d44d5d76239", net: 0, received: 713, sent: 713, txs: 2 },
    { wallet: "0x970a435a785a9d37bc0db253f62ea1d5e9ceb57f", net: 0, received: 722, sent: 722, txs: 4 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 23399, sent: 23399, txs: 10 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 38648, sent: 38648, txs: 25 },
    { wallet: "0x3c9108700724d9d96cff2ac8979d6ad2a8d469ae", net: 0, received: 411, sent: 411, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 4498, sent: 4498, txs: 2 },
    { wallet: "0x6413d8f85a2eff1dc3ee3e0db7d8c89ccbd51dc5", net: 0, received: 4521, sent: 4521, txs: 3 }
];

const WHALE_LABELS = {

};
