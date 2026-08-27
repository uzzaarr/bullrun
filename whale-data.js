// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "August 27, 2026 at 09:35 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 308;
const WHALE_TOTAL_VOLUME      = 6696846;
const WHALE_BIGGEST_SINGLE    = 823914;

const WHALE_TRANSFERS = [
    { hash: "0x4eefdc1c0451f6b4f1de200f983a7e660630a2316840f966705d43d595426c6a", ts: 1787862035, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0xd83bbad310f696dd59464483d28bad209b76d1fb", amount: 172321, block: 25848916, type: "buy" },
    { hash: "0x83ece0a7c72afa3fe9c54d9030b3f1f4f51cfbd2f87fe63b17266c1786a358e5", ts: 1787858435, from: "0x2c0552e5dcb79b064fd23e358a86810bc5994244", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 221499, block: 25848616, type: "sell" },
    { hash: "0x83ece0a7c72afa3fe9c54d9030b3f1f4f51cfbd2f87fe63b17266c1786a358e5", ts: 1787858435, from: "0x9008d19f58aabd9ed0d60971565aa8510560ab41", to: "0x2c0552e5dcb79b064fd23e358a86810bc5994244", amount: 221499, block: 25848616, type: "transfer" },
    { hash: "0x83ece0a7c72afa3fe9c54d9030b3f1f4f51cfbd2f87fe63b17266c1786a358e5", ts: 1787858435, from: "0x140a7d1824a16372913fa572c79c10ff77388f7e", to: "0x9008d19f58aabd9ed0d60971565aa8510560ab41", amount: 221555, block: 25848616, type: "transfer" },
    { hash: "0xdd68e8fc65499cbef4ece3f6740601e6c5df2c59fab9de8a5a09c0dc74c42c71", ts: 1787843327, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x4c07b6be5068c577b3f4e40eb12e42eb0798842a", amount: 244658, block: 25847361, type: "transfer" },
    { hash: "0x219071eb54ebb20dd7779b2df811be38f437e2a1eb806752679a20b1cab7b31d", ts: 1787842439, from: "0x7c876bdaa5c038e19f633714f622f6def949b102", to: "0x6ccdc93dd3e792eeb7e4c9fafbc44d5d8fac1a1b", amount: 273702, block: 25847287, type: "transfer" },
    { hash: "0x43663e08b32c578e9098050ad8aca0fa34a514a7acdd82bdbf65a0a76f26baca", ts: 1787840951, from: "0x8fedcd162f050943e093686275c84a1afb1f9c72", to: "0x7c876bdaa5c038e19f633714f622f6def949b102", amount: 290612, block: 25847163, type: "transfer" },
    { hash: "0x6c9838ca64e5215364d936c27ca481d7510e4d7bc9ce92e5bad710bb3e4897f1", ts: 1787840111, from: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", to: "0x8fedcd162f050943e093686275c84a1afb1f9c72", amount: 290612, block: 25847093, type: "transfer" },
    { hash: "0x7989593994711a13dfac63e80cdf8e1f5023c41acb67e3bd2e8855ca78376485", ts: 1787826503, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xd862cdcfeb856c32b3c4f7563f4811d8ddfd42e2", amount: 142868, block: 25845961, type: "transfer" },
    { hash: "0x05439036df8bce40758da0f62e939c870b6b252b06ee24c47b284df8726092bf", ts: 1787826467, from: "0xd862cdcfeb856c32b3c4f7563f4811d8ddfd42e2", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 142868, block: 25845958, type: "sell" },
    { hash: "0x44ec35101febe994b4165c81e46c7824b11b7c465a3f36df9f1a00ea230a5be3", ts: 1787823347, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25845698, type: "sell" },
    { hash: "0xc07b11fd968b88fe68ca62667a93de281079688c786fe4697ab70ebbbe719da8", ts: 1787820767, from: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 136338, block: 25845483, type: "sell" },
    { hash: "0x24a1ba7ce582b469520d3896aa493debef710b9b81357b4d4c42eb7129b3dc71", ts: 1787819171, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25845352, type: "sell" },
    { hash: "0xe1e1e9f68303fe61f8cdf2c759a540cb8c1f0c9657550979f60d7f21c692969e", ts: 1787818031, from: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 135121, block: 25845257, type: "sell" },
    { hash: "0xca8f332866e185d0b9d87803ae81d90e27e1285dce9d5233cbc2762bb3fab71c", ts: 1787815559, from: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 823914, block: 25845053, type: "transfer" },
    { hash: "0x317499bc5d839087f020e97cfd8a5c04fed3a638aee381a44f0a389c4db4ad74", ts: 1787811863, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", amount: 136938, block: 25844746, type: "buy" },
    { hash: "0x0683298f17383c9992d7980e230a2cb8c523b0138b13b4d92eb937b24b59ed1d", ts: 1787811251, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", amount: 138156, block: 25844696, type: "buy" },
    { hash: "0xf330df78c121cedfabc774c2786210fab99e3dc836661c4cb0672747c437c863", ts: 1787810087, from: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", to: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", amount: 823914, block: 25844601, type: "transfer" },
    { hash: "0x8e67be23d53fd81a9a1476489c944fd9eb56904234ac799d4de100e45be16665", ts: 1787809991, from: "0x09fc9b7545020f6a51d113e495e0a451597969d3", to: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", amount: 823914, block: 25844593, type: "transfer" },
    { hash: "0xdc2134c96c0e477d12646a6ff4b00d2be3679eb205251d8e47757422170470b4", ts: 1787798387, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 127048, block: 25843626, type: "sell" },
    { hash: "0xdc2134c96c0e477d12646a6ff4b00d2be3679eb205251d8e47757422170470b4", ts: 1787798387, from: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 127048, block: 25843626, type: "transfer" },
    { hash: "0x5abe32167fd97d80dc3de48a401a4db7fdbada80e01a7b30cfd3e2840f0728b5", ts: 1787797379, from: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 139593, block: 25843542, type: "sell" },
    { hash: "0xfdd8860a086afb74ac92092f3f6ca7a793eb8ff670453ef042ceeda544db49c9", ts: 1787792639, from: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 138875, block: 25843147, type: "sell" },
    { hash: "0x9488b0b1a47af6c0025f88cb81f1edc0ab649e87f5159a4096d8a4e5d837289f", ts: 1787789555, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", amount: 139339, block: 25842891, type: "buy" },
    { hash: "0x8b5d0d1a99709bf37128edbd3d918c05b9d6e89494942991ef9ccbec672be299", ts: 1787789531, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", amount: 107606, block: 25842889, type: "transfer" },
    { hash: "0x8b5d0d1a99709bf37128edbd3d918c05b9d6e89494942991ef9ccbec672be299", ts: 1787789531, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 107606, block: 25842889, type: "buy" },
    { hash: "0xe3fef9d9f19abd029796a8f50a604dd944dcba52c685edf692bd3849f6bb5592", ts: 1787787227, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", amount: 141542, block: 25842698, type: "buy" },
    { hash: "0x4ecdfd22b9f5cdab11ef17c823dc0715de5ec31bb989622c1153a98a4f114036", ts: 1787787227, from: "0x1f2f10d1c40777ae1da742455c65828ff36df387", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 113850, block: 25842698, type: "sell" },
    { hash: "0x4ecdfd22b9f5cdab11ef17c823dc0715de5ec31bb989622c1153a98a4f114036", ts: 1787787227, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x1f2f10d1c40777ae1da742455c65828ff36df387", amount: 113850, block: 25842698, type: "buy" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 698012, received: 921484, sent: 223472, txs: 4 },
    { wallet: "0x6ccdc93dd3e792eeb7e4c9fafbc44d5d8fac1a1b", net: 273702, received: 273702, sent: 0, txs: 1 },
    { wallet: "0x4c07b6be5068c577b3f4e40eb12e42eb0798842a", net: 244658, received: 244658, sent: 0, txs: 1 },
    { wallet: "0xd83bbad310f696dd59464483d28bad209b76d1fb", net: 172321, received: 172321, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 62963, received: 621914, sent: 558951, txs: 32 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 36340, received: 36340, sent: 0, txs: 1 },
    { wallet: "0xe8446569ee2311ac5c455cf97e6eb5cd594356ea", net: 28493, received: 28493, sent: 0, txs: 1 },
    { wallet: "0x214a439a6c52259117ac3598bebe62d0c2efa813", net: 24658, received: 24658, sent: 0, txs: 1 },
    { wallet: "0x7c876bdaa5c038e19f633714f622f6def949b102", net: 16910, received: 290612, sent: 273702, txs: 2 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 15111, received: 15111, sent: 0, txs: 1 },
    { wallet: "0xd66309e05152585e811f7856e82913e0c1bba603", net: 9315, received: 9315, sent: 0, txs: 1 },
    { wallet: "0xe5e6ee25986549a41a61ae31080719d6db316580", net: 8286, received: 8286, sent: 0, txs: 1 },
    { wallet: "0xb6d4fb85c951d5948137a9f9dce9b7b4363a6799", net: 5753, received: 5753, sent: 0, txs: 1 },
    { wallet: "0x8f83645101f6f076e3db3201a5a3397d79e3a152", net: 4161, received: 4161, sent: 0, txs: 1 },
    { wallet: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", net: 3635, received: 275094, sent: 271459, txs: 4 },
    { wallet: "0x5c9d1a6c9753e711db9b880b0404cd653a0e0032", net: 3425, received: 3425, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 2727, received: 2727, sent: 0, txs: 1 },
    { wallet: "0xee367d7e1151fc6d22f505738954d426eea9136d", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", net: 2413, received: 280881, sent: 278468, txs: 4 },
    { wallet: "0x23710ee704d16e42e1a03d1d2dcf3b62ea9b961c", net: 2403, received: 2403, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x82fc1e4232adda70ae4e67d60b549a4063888086", net: 2055, received: 2055, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x9633c0430dffba87e43aaf00d036bde673a5a361", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x3822d8b402d6fcbe3187b08b1733ae2e2e46a2d3", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xc62b1da436e6407efd69d82994a3c803ff9a527d", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x5987d62c93f864fff531f79c1f6c8da51eaffce2", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xb8294f8f8f6619a299688f1ca12cb967fc9a6176", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x4acb6c4321253548a7d4bb9c84032cc4ee04bfd7", net: 276, received: 276, sent: 0, txs: 1 },
    { wallet: "0x1894c5c5d9d976a7971a0ccd252f2f6064efd3a8", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xdfc90a70d89bece5ac9331fbd680e3306e9afc15", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 245, received: 245, sent: 0, txs: 8 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd4ecca8f08ac6fadaed2cb141637c95ee4c74d43", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x9008d19f58aabd9ed0d60971565aa8510560ab41", net: 55, received: 221555, sent: 221499, txs: 2 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 20, received: 20, sent: 0, txs: 1 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 62937, sent: 62937, txs: 16 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 105509, sent: 105509, txs: 12 },
    { wallet: "0xd9f76930d7df99aef4dc4cff48ee236d4583c28a", net: 0, received: 85364, sent: 85364, txs: 4 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 0, received: 42682, sent: 42682, txs: 2 },
    { wallet: "0x0cd9d241be52ed8743c3c8e5037071076e2fe946", net: 0, received: 4620, sent: 4620, txs: 2 },
    { wallet: "0x2c0552e5dcb79b064fd23e358a86810bc5994244", net: 0, received: 221499, sent: 221499, txs: 2 },
    { wallet: "0x79bcf474d5ec14ffe621ace0c7ec0cf917044378", net: 0, received: 5753, sent: 5753, txs: 3 },
    { wallet: "0x99871a496a27d431cbf00391efa3f2f386d3b0d7", net: 0, received: 5753, sent: 5753, txs: 2 }
];

const WHALE_LABELS = {

};
