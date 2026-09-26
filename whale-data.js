// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "September 26, 2026 at 03:32 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 295;
const WHALE_TOTAL_VOLUME      = 26872915;
const WHALE_BIGGEST_SINGLE    = 9917424;

const WHALE_TRANSFERS = [
    { hash: "0x92e725e7a423984307425af05869f737fa63c68e24df3fc42aa3d3e76bdda90a", ts: 1790428343, from: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 164858, block: 26061846, type: "sell" },
    { hash: "0x91074daf40ae7529a9489e47465d37365fbb026b35882e71abc647daa42ea1bf", ts: 1790427455, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 200663, block: 26061772, type: "sell" },
    { hash: "0x91074daf40ae7529a9489e47465d37365fbb026b35882e71abc647daa42ea1bf", ts: 1790427455, from: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 200663, block: 26061772, type: "transfer" },
    { hash: "0xe4f9a53814efb5d6b6a71ba5742417fbb0c2626a02c37f326abc532938cc919f", ts: 1790426327, from: "0xa73072adc6c34859426fcc29bc6ca2cac07c93c3", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 150242, block: 26061678, type: "sell" },
    { hash: "0x235ca6fa27f0fe4c435fb3bfb72e761332e2b707ab054fe5ee305a87a8e97baf", ts: 1790422127, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 26061329, type: "sell" },
    { hash: "0x490b192b5dfc703ccf806de627be0ffbf15627bf2238c8cd27e96417a8e6e7e6", ts: 1790416451, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 26060859, type: "buy" },
    { hash: "0xe6871b5e2f177be640e4359dfa9b8f9aa814e66d222f44f154db02304be50c70", ts: 1790411123, from: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 163068, block: 26060418, type: "sell" },
    { hash: "0x178aedda6283002809bdd35b73fe54e9e49cb99c837ca8a7e6b018203872c388", ts: 1790410799, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 26060391, type: "sell" },
    { hash: "0xd64778ab7876f04ce4a2ae3b568236397070c94f1f5fccdaedad2145c4d4007e", ts: 1790409191, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", amount: 163348, block: 26060258, type: "buy" },
    { hash: "0xbd80c43b2ef8f42b60303b85b73b4a9da721546af08afa2ad2a5bb9aefdedf07", ts: 1790409191, from: "0x1f2f10d1c40777ae1da742455c65828ff36df387", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 137287, block: 26060258, type: "sell" },
    { hash: "0xbd80c43b2ef8f42b60303b85b73b4a9da721546af08afa2ad2a5bb9aefdedf07", ts: 1790409191, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x1f2f10d1c40777ae1da742455c65828ff36df387", amount: 137287, block: 26060258, type: "buy" },
    { hash: "0x54096ed8a79160af0974d217d1a7d2edbdbb697964e54b8b748d3f45b257e202", ts: 1790409167, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", amount: 164074, block: 26060256, type: "buy" },
    { hash: "0x02652dc9feecf3951d44d0397708719c5aba04bb17cd52158e8d4b4645afbfc0", ts: 1790409167, from: "0x1f2f10d1c40777ae1da742455c65828ff36df387", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 116826, block: 26060256, type: "sell" },
    { hash: "0x02652dc9feecf3951d44d0397708719c5aba04bb17cd52158e8d4b4645afbfc0", ts: 1790409167, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x1f2f10d1c40777ae1da742455c65828ff36df387", amount: 116826, block: 26060256, type: "buy" },
    { hash: "0xfa2c35668b761f585cfb1dfe1c2847d7cbb65998f2a5abfd6ac9890804a8f6dd", ts: 1790404283, from: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 820330, block: 26059853, type: "transfer" },
    { hash: "0x4b14542a87a9075b8d14c81340bf0699c04c016142a68b0c449cdd061e5486db", ts: 1790403431, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 26059782, type: "buy" },
    { hash: "0x9be3a397988cc0211493f98866c3283fa66425ce46789545c037fbe1aeee3916", ts: 1790401463, from: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", to: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", amount: 820330, block: 26059618, type: "transfer" },
    { hash: "0x111ba6a32beb8998f07686c3165b72fc3b75b153cf96d1e24a9b2b95517c5322", ts: 1790401463, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", amount: 165985, block: 26059618, type: "buy" },
    { hash: "0xd661e5f3cf3c55b17a15b82bd405151a85592bb730e82f6797bc40c7d1dd2394", ts: 1790401283, from: "0x09fc9b7545020f6a51d113e495e0a451597969d3", to: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", amount: 820330, block: 26059603, type: "transfer" },
    { hash: "0xbfd384cc3de8d3c0e66435f65f8000e098dc9a1cc32f0b790d274d723c51fa30", ts: 1790394143, from: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 166106, block: 26059010, type: "sell" },
    { hash: "0xf3964ec8ab85489ea5d329714ef9a95bc44f3636243dad0b665f0083a53ac721", ts: 1790376227, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", amount: 168153, block: 26057526, type: "buy" },
    { hash: "0xd7bf670076f5c935d56f88b778c8c6577012142b1fceeeea79b74625092f0bfd", ts: 1790370203, from: "0x66a9893cc07d91d95644aedd05d03f95e1dba8af", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 138082, block: 26057026, type: "sell" },
    { hash: "0xd7bf670076f5c935d56f88b778c8c6577012142b1fceeeea79b74625092f0bfd", ts: 1790370203, from: "0x006d0e0d006109f0020f3050000a713780b7b000", to: "0x66a9893cc07d91d95644aedd05d03f95e1dba8af", amount: 138082, block: 26057026, type: "transfer" },
    { hash: "0xd7bf670076f5c935d56f88b778c8c6577012142b1fceeeea79b74625092f0bfd", ts: 1790370203, from: "0x2309fcccf962a358e7b4e2de43662a846bb64067", to: "0x006d0e0d006109f0020f3050000a713780b7b000", amount: 138082, block: 26057026, type: "transfer" },
    { hash: "0x37d7d215735c5d26932dc87e14031238d3d579e610168bfee057fc516cd1a0aa", ts: 1790370179, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0x504ce9e51e508c85a161058c12e970a903d482fc", amount: 153253, block: 26057024, type: "transfer" },
    { hash: "0x46c1ce24ef85523d6a50097786a6d8281cca47ea2704c236396ca86182d2d801", ts: 1790368619, from: "0xdc2692379ef39a8a115ccdf56080645d35d1eb20", to: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", amount: 9917424, block: 26056894, type: "transfer" },
    { hash: "0x3565d5930e926f0a115deb8d1894ea19318cf701c8783f162b2a7dd5cd7912c3", ts: 1790368259, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x1ec1e78a1a059bfd69c47cc606f96281cf966ed4", amount: 100000, block: 26056866, type: "transfer" },
    { hash: "0x947f7cc2741cbb615656012325c2e5c1dec4f4d88efce42c191509d577e85f8a", ts: 1790367707, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xdc2692379ef39a8a115ccdf56080645d35d1eb20", amount: 9917424, block: 26056820, type: "transfer" },
    { hash: "0x1677b7788593231f2168007275db09d2d7d4e6bae89b18978001f4c4dd6c4134", ts: 1790367311, from: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 166699, block: 26056787, type: "sell" },
    { hash: "0xb8129cb05cae8152611d8fe78acd2b4eb44f473329a6da1b9ed72cec5c1eada4", ts: 1790363531, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x5cf07af4e17bb82101517c6c457e38a9d140ec41", amount: 130411, block: 26056473, type: "transfer" },
    { hash: "0x35dd759108efe9261c25acc30da915dada7a7f355fc29fc900ace16ccf38c926", ts: 1790363219, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", amount: 167573, block: 26056447, type: "buy" },
    { hash: "0x45fabf30ee91591408d37ef3b5a9a66becdf33a2e6d793de2a2e58cebfa15bf0", ts: 1790363219, from: "0x1f2f10d1c40777ae1da742455c65828ff36df387", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 157507, block: 26056447, type: "sell" },
    { hash: "0x45fabf30ee91591408d37ef3b5a9a66becdf33a2e6d793de2a2e58cebfa15bf0", ts: 1790363219, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x1f2f10d1c40777ae1da742455c65828ff36df387", amount: 157507, block: 26056447, type: "buy" },
    { hash: "0xa6d5237354611daaef601cfd61bb17acb02135ed146ab282d4256243be912351", ts: 1790360159, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", amount: 167908, block: 26056192, type: "buy" },
    { hash: "0x8e6a03cbd4fc2815d097b8380d83def4f65775dfe8709846790595a850946ce0", ts: 1790355767, from: "0x6e23764919be8395d2d5899bc9070b26893cdd27", to: "0x2309fcccf962a358e7b4e2de43662a846bb64067", amount: 138082, block: 26055828, type: "transfer" },
    { hash: "0x9caede1b54a40f5275c7d5f68e75e288d302bef381978583fdfa8c4c21650809", ts: 1790350307, from: "0x9b3cbb29c857959b2c29747612ea9d49e94676ab", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 208505, block: 26055377, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", net: 10014455, received: 10014455, sent: 0, txs: 2 },
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 1069965, received: 1069965, sent: 0, txs: 3 },
    { wallet: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", net: 665394, received: 665394, sent: 0, txs: 4 },
    { wallet: "0x67336cec42645f55059eff241cb02ea5cc52ff86", net: 156195, received: 247675, sent: 91480, txs: 4 },
    { wallet: "0x504ce9e51e508c85a161058c12e970a903d482fc", net: 153253, received: 153253, sent: 0, txs: 1 },
    { wallet: "0x5cf07af4e17bb82101517c6c457e38a9d140ec41", net: 130411, received: 130411, sent: 0, txs: 1 },
    { wallet: "0x1ec1e78a1a059bfd69c47cc606f96281cf966ed4", net: 100000, received: 100000, sent: 0, txs: 1 },
    { wallet: "0x09fc9b7545020f6a51d113e495e0a451597969d3", net: 57144, received: 877474, sent: 820330, txs: 35 },
    { wallet: "0xd83bbad310f696dd59464483d28bad209b76d1fb", net: 42179, received: 42179, sent: 0, txs: 1 },
    { wallet: "0x6ccdc93dd3e792eeb7e4c9fafbc44d5d8fac1a1b", net: 40985, received: 40985, sent: 0, txs: 1 },
    { wallet: "0x0a1354ba9359d7aded40faf11bbe590e2c14bec7", net: 33144, received: 33144, sent: 0, txs: 1 },
    { wallet: "0x769981b6ad0a44c8cf43ae297ee8e7fccc9f451b", net: 32192, received: 32192, sent: 0, txs: 2 },
    { wallet: "0x2c4a0fbcdfa7e4b841b0574550fd5aa7dbb3079e", net: 27534, received: 27534, sent: 0, txs: 1 },
    { wallet: "0xfa319d8756ae02f9a497c6ef97e687c2440e7c43", net: 19245, received: 19245, sent: 0, txs: 1 },
    { wallet: "0xfcb931c2aec4464c0a256c1766bf868493277cfc", net: 16301, received: 16301, sent: 0, txs: 1 },
    { wallet: "0x35851963d843668e433a1d97fddc4d1974323a6b", net: 13729, received: 13729, sent: 0, txs: 1 },
    { wallet: "0xec45a4c5cfb7b3030078649ad070441de83a0999", net: 13652, received: 13652, sent: 0, txs: 1 },
    { wallet: "0xf68f7da978ca3cd9acbcb80672c9bde2e050b35f", net: 13151, received: 13151, sent: 0, txs: 1 },
    { wallet: "0xce7219393216eee8f9768809494f1d2fb84d89ee", net: 12776, received: 12776, sent: 0, txs: 1 },
    { wallet: "0x5c9d1a6c9753e711db9b880b0404cd653a0e0032", net: 12329, received: 12329, sent: 0, txs: 1 },
    { wallet: "0xf301d11baaefe7e724865ce410d4cbd9c099a307", net: 8767, received: 8767, sent: 0, txs: 1 },
    { wallet: "0x74f8e6127e91d044f970d04af1e85bcd38d8acce", net: 8653, received: 8653, sent: 0, txs: 1 },
    { wallet: "0x5bfdb327168803a1b33c6062ef28ac0e3fe88e31", net: 8387, received: 8387, sent: 0, txs: 1 },
    { wallet: "0xce5422d95915914c89590c057fbebb3d328cd3d6", net: 7880, received: 7880, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 6671, received: 6671, sent: 0, txs: 1 },
    { wallet: "0x6f983e1cdab14ed5b72686df0f308b5a3c5acd3d", net: 6164, received: 6164, sent: 0, txs: 1 },
    { wallet: "0x7b7561db3020853674935f651dd1dc233c194a41", net: 4384, received: 4384, sent: 0, txs: 1 },
    { wallet: "0x88814338a3088e41aea4a1ce61643b3e7c5783f3", net: 4147, received: 8328, sent: 4181, txs: 4 },
    { wallet: "0x2f9af2b6aedb07f4c3c908d0cf43735a0d74c128", net: 3319, received: 3319, sent: 0, txs: 1 },
    { wallet: "0x23710ee704d16e42e1a03d1d2dcf3b62ea9b961c", net: 2403, received: 2403, sent: 0, txs: 1 },
    { wallet: "0x9b8245c8443c2242b90083ec4f4e94f88feb230e", net: 1800, received: 1800, sent: 0, txs: 1 },
    { wallet: "0x2d6cf21fa501775cd943651dca12ec680c6899b6", net: 1657, received: 1657, sent: 0, txs: 1 },
    { wallet: "0xf3b41e096731dffff3cb4a28ad989a825ffd9d67", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1265, received: 1265, sent: 0, txs: 16 },
    { wallet: "0x1b0b1ad3e6a2fb69c48c2913fea012bc38f0a2e9", net: 959, received: 959, sent: 0, txs: 1 },
    { wallet: "0x5d73e31d8588d928d2dcbea05dc8038d86730bf5", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x1894c5c5d9d976a7971a0ccd252f2f6064efd3a8", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x311f520e51b3f5a6354d4e620443edb7ad59e996", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x09d0812a34107c948bee7d0817d4b45242c46224", net: 6, received: 6, sent: 0, txs: 1 },
    { wallet: "0x322ec64e23a20354808c0b40fbc81f1bf877a949", net: 2, received: 2, sent: 0, txs: 1 },
    { wallet: "0x3e07be15370d8b12d80a159a7ef14b9e51869497", net: 1, received: 2387, sent: 2386, txs: 2 },
    { wallet: "0x8feab81d36e7576107d5de0758c1b839be31b4f6", net: 0, received: 877474, sent: 877474, txs: 68 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 340285, sent: 340285, txs: 10 }
];

const WHALE_LABELS = {

};
