// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "August 28, 2026 at 08:30 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 267;
const WHALE_TOTAL_VOLUME      = 8320793;
const WHALE_BIGGEST_SINGLE    = 849771;

const WHALE_TRANSFERS = [
    { hash: "0x63b0899a3e39afc85017f24e0b47992af6b1c6998ce62d1df83c84a78cf3ab3d", ts: 1787904155, from: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", to: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", amount: 849771, block: 25852413, type: "transfer" },
    { hash: "0xafad21d47723fd4e68447ae00c0a9fe01a91afe18514f843bd964d719b196a3b", ts: 1787904047, from: "0x09fc9b7545020f6a51d113e495e0a451597969d3", to: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", amount: 849771, block: 25852404, type: "transfer" },
    { hash: "0x03c2841ee54b546810dc97a413b767fa32634dbf0e7c745ac91d83813ddb0bf5", ts: 1787897999, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0xa73072adc6c34859426fcc29bc6ca2cac07c93c3", amount: 128465, block: 25851905, type: "buy" },
    { hash: "0xa1fb11b92dc886d0d9a6793b2f1b9970a4d7bb3b088b0c51a2c6ef0e766c4519", ts: 1787897987, from: "0xcf98535fed9c7c3c3ae41ef9323849f166434abd", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 379150, block: 25851904, type: "sell" },
    { hash: "0xb5110db835a161b1860b71046244fd5cd773a7ca9adf952900c94e2df2f5ba10", ts: 1787897939, from: "0x5cff1c05d662dfc37b671e1c81965f7525ef360a", to: "0xcf98535fed9c7c3c3ae41ef9323849f166434abd", amount: 379726, block: 25851900, type: "transfer" },
    { hash: "0xe0cf8578dee7e0ab70229b2532e0dd626fe5531aa20c94187b115963434cbe4d", ts: 1787897843, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x5cff1c05d662dfc37b671e1c81965f7525ef360a", amount: 256438, block: 25851892, type: "transfer" },
    { hash: "0x91a3f010b23bef6806bc0fcd8959a8a85a0f041f84867c442a524c61ec268bac", ts: 1787892071, from: "0xadf9e0076e917a762ccd3726c669b025bd83841d", to: "0xb704d0e79ba0e6fe26bb1c4099a65b5a6aa8477b", amount: 490000, block: 25851412, type: "transfer" },
    { hash: "0x8f0966c310b2abc79bf031d7dbfe3734e4a4e78c9bbb278e298c21289bde43ee", ts: 1787891639, from: "0xcc9f20fe9ae72f5940cddddf339343e3684a4202", to: "0x0851cc149538c9e2c65f41045a788459038e6c7c", amount: 399888, block: 25851376, type: "transfer" },
    { hash: "0x754294dd5f47fc94cd80ece70f5659df784cefbe6e8df70855c474b522fbf5e8", ts: 1787891339, from: "0xcc9f20fe9ae72f5940cddddf339343e3684a4202", to: "0x426c4f2d1a0329bfd9b58163ea20814fff508637", amount: 399000, block: 25851351, type: "transfer" },
    { hash: "0x791e0bbaac0fca22a5078354af55015e3882628c12aac9a4323124d54bd95259", ts: 1787886227, from: "0x4d4e14fbdf6bb02b6e036f86f120f00abe41c791", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 221555, block: 25850927, type: "sell" },
    { hash: "0x791e0bbaac0fca22a5078354af55015e3882628c12aac9a4323124d54bd95259", ts: 1787886227, from: "0x9008d19f58aabd9ed0d60971565aa8510560ab41", to: "0x4d4e14fbdf6bb02b6e036f86f120f00abe41c791", amount: 221555, block: 25850927, type: "transfer" },
    { hash: "0x791e0bbaac0fca22a5078354af55015e3882628c12aac9a4323124d54bd95259", ts: 1787886227, from: "0x140a7d1824a16372913fa572c79c10ff77388f7e", to: "0x9008d19f58aabd9ed0d60971565aa8510560ab41", amount: 221555, block: 25850927, type: "transfer" },
    { hash: "0x4f7837b0d7271ab5e6d2125ea84ca0499b1778d9b512f700346a037554671dfd", ts: 1787886191, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", amount: 140984, block: 25850924, type: "buy" },
    { hash: "0x1fd02290958a540319fe94b580993482aba9de197987132d3fe029ddd2416922", ts: 1787884271, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 148878, block: 25850764, type: "sell" },
    { hash: "0x1fd02290958a540319fe94b580993482aba9de197987132d3fe029ddd2416922", ts: 1787884271, from: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 148878, block: 25850764, type: "transfer" },
    { hash: "0x4dfdc2653cc2bac6235e73a6df24a22c65c732b656a8d8db8a0efde637c43522", ts: 1787876147, from: "0x7740c81e5dff0c6762df3af0f16fe931f074a204", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 313085, block: 25850088, type: "sell" },
    { hash: "0x7f7cc831fc39d1ca9febe9078ac7b1e963f965d93de9c2ddb4301cc24dd55268", ts: 1787876039, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x7740c81e5dff0c6762df3af0f16fe931f074a204", amount: 313562, block: 25850079, type: "transfer" },
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
    { hash: "0xc07b11fd968b88fe68ca62667a93de281079688c786fe4697ab70ebbbe719da8", ts: 1787820767, from: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 136338, block: 25845483, type: "sell" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", net: 849771, received: 849771, sent: 0, txs: 1 },
    { wallet: "0xb704d0e79ba0e6fe26bb1c4099a65b5a6aa8477b", net: 500000, received: 500000, sent: 0, txs: 2 },
    { wallet: "0x0851cc149538c9e2c65f41045a788459038e6c7c", net: 409888, received: 409888, sent: 0, txs: 2 },
    { wallet: "0x426c4f2d1a0329bfd9b58163ea20814fff508637", net: 400000, received: 400000, sent: 0, txs: 2 },
    { wallet: "0x6ccdc93dd3e792eeb7e4c9fafbc44d5d8fac1a1b", net: 273702, received: 273702, sent: 0, txs: 1 },
    { wallet: "0x4c07b6be5068c577b3f4e40eb12e42eb0798842a", net: 244658, received: 244658, sent: 0, txs: 1 },
    { wallet: "0xd83bbad310f696dd59464483d28bad209b76d1fb", net: 172321, received: 172321, sent: 0, txs: 1 },
    { wallet: "0x8bb88a3eafd6ba0b6cce254c0c447c4cf5860afe", net: 148630, received: 148630, sent: 0, txs: 3 },
    { wallet: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", net: 140984, received: 140984, sent: 0, txs: 1 },
    { wallet: "0xa73072adc6c34859426fcc29bc6ca2cac07c93c3", net: 128465, received: 128465, sent: 0, txs: 1 },
    { wallet: "0xc47df3f8335e81696abfe0d082d33bec570d4fa2", net: 40000, received: 80000, sent: 40000, txs: 3 },
    { wallet: "0xd43026d607c66f4ecadd408867e8ba9af05f3875", net: 39726, received: 39726, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 37573, received: 37573, sent: 0, txs: 2 },
    { wallet: "0xe8446569ee2311ac5c455cf97e6eb5cd594356ea", net: 28493, received: 28493, sent: 0, txs: 1 },
    { wallet: "0x214a439a6c52259117ac3598bebe62d0c2efa813", net: 24658, received: 24658, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 21782, received: 21782, sent: 0, txs: 2 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 19926, received: 19926, sent: 0, txs: 2 },
    { wallet: "0x7c876bdaa5c038e19f633714f622f6def949b102", net: 16910, received: 290612, sent: 273702, txs: 2 },
    { wallet: "0xe5e6ee25986549a41a61ae31080719d6db316580", net: 8286, received: 8286, sent: 0, txs: 1 },
    { wallet: "0x7551fd38913b92c1d59926d29127d78cedf2bc6d", net: 6164, received: 6164, sent: 0, txs: 1 },
    { wallet: "0x5c9d1a6c9753e711db9b880b0404cd653a0e0032", net: 3425, received: 3425, sent: 0, txs: 1 },
    { wallet: "0xe7ff8186307f7781bce361dbe7245e1330550c52", net: 2877, received: 2877, sent: 0, txs: 1 },
    { wallet: "0x23710ee704d16e42e1a03d1d2dcf3b62ea9b961c", net: 2403, received: 2403, sent: 0, txs: 1 },
    { wallet: "0xf631bebca82f2998c7ed085675a43a48c4bbb9fb", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 1644, received: 1644, sent: 0, txs: 2 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1235, received: 1235, sent: 0, txs: 10 },
    { wallet: "0x446935174f93554ba4162099255ec0c165e2f741", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x9633c0430dffba87e43aaf00d036bde673a5a361", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xda58433169ef2512fa5e6a1caccca2bed1a616ca", net: 700, received: 700, sent: 0, txs: 1 },
    { wallet: "0x3822d8b402d6fcbe3187b08b1733ae2e2e46a2d3", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x5987d62c93f864fff531f79c1f6c8da51eaffce2", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xb8294f8f8f6619a299688f1ca12cb967fc9a6176", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x722a6b207b2d49cc27bb2806d4de7b65d47a97b3", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x1894c5c5d9d976a7971a0ccd252f2f6064efd3a8", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x980282821e627b5d6c8f99050d0394e885dcdcca", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x9008d19f58aabd9ed0d60971565aa8510560ab41", net: 55, received: 443109, sent: 443054, txs: 4 },
    { wallet: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", net: 0, received: 849771, sent: 849771, txs: 2 },
    { wallet: "0xf37368141cd56a8039c3cf63a5add3c06d820526", net: 0, received: 1233, sent: 1233, txs: 2 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 1013515, sent: 1013515, txs: 36 },
    { wallet: "0x8feab81d36e7576107d5de0758c1b839be31b4f6", net: 0, received: 19926, sent: 19926, txs: 4 },
    { wallet: "0xcf98535fed9c7c3c3ae41ef9323849f166434abd", net: 0, received: 379726, sent: 379726, txs: 3 },
    { wallet: "0xc10ee9031f2a0b84766a86b55a8d90f357910fb4", net: 0, received: 368, sent: 368, txs: 2 },
    { wallet: "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae", net: 0, received: 368, sent: 368, txs: 2 },
    { wallet: "0x2e184742dad3ab06fab11f36fe68cbbc244433e2", net: 0, received: 368, sent: 368, txs: 2 }
];

const WHALE_LABELS = {

};
