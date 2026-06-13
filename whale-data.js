// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 13, 2026 at 07:17 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 159;
const WHALE_TOTAL_VOLUME      = 8902056;
const WHALE_BIGGEST_SINGLE    = 5821918;

const WHALE_TRANSFERS = [
    { hash: "0x1d875e7519791d8a6eb90428ed9ca134d75b9948bfaa84e769013ef73f9c8e4f", ts: 1781367503, from: "0x88c40cd47ec72e481051c1c495fd0e7a23a30cee", to: "0x7f51c134230eb9e5aba42bc364d3d3eba26d9712", amount: 110059, block: 25309701, type: "transfer" },
    { hash: "0x712d7c5ecbf4a6487e66a4109f796f1aa34848b09b4c8c7debcc5dd0f7b2731d", ts: 1781361323, from: "0xdb3ded7731c781224ec292e2163d9554c094fd7c", to: "0x01ba661ae900ef02ae73cd9a02e2df0ad06682d0", amount: 111232, block: 25309191, type: "transfer" },
    { hash: "0x6485feef51fa865b584f2efe7a6616a4bf3dec9e27ea402fe80547eae57beba1", ts: 1781360255, from: "0x88cc0800464fcef3e643a369e8a0532990995eee", to: "0x98f870ab30c0530b2e19d1adf5285200f52305a7", amount: 101153, block: 25309103, type: "transfer" },
    { hash: "0x6485feef51fa865b584f2efe7a6616a4bf3dec9e27ea402fe80547eae57beba1", ts: 1781360255, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x88cc0800464fcef3e643a369e8a0532990995eee", amount: 103143, block: 25309103, type: "buy" },
    { hash: "0xabf53e90eef99a48aaacd56af2e8ad284e4d759a7bf3896d2fa0600ca39157d9", ts: 1781360243, from: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 106623, block: 25309102, type: "sell" },
    { hash: "0xabf53e90eef99a48aaacd56af2e8ad284e4d759a7bf3896d2fa0600ca39157d9", ts: 1781360243, from: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", to: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", amount: 147046, block: 25309102, type: "transfer" },
    { hash: "0xabf53e90eef99a48aaacd56af2e8ad284e4d759a7bf3896d2fa0600ca39157d9", ts: 1781360243, from: "0x9f02988adb650e55cc5eb5619c383fd223848bb5", to: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", amount: 147046, block: 25309102, type: "transfer" },
    { hash: "0x1a3a220b23a84ecea9c629863ec6f117ccb14615570ade311d5b539253abedb5", ts: 1781359979, from: "0xd6ee2a838aca581c0e144073ca51e570f96b93e4", to: "0x9f02988adb650e55cc5eb5619c383fd223848bb5", amount: 147500, block: 25309080, type: "transfer" },
    { hash: "0xa73ab53841b7400de12ddca267a0dc2f95949329310bb64e6920d7036aa83f9a", ts: 1781344271, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xa8c3e1a954b0271dd9c3c80f44a56dde9b68d5c8", amount: 5821918, block: 25307773, type: "transfer" },
    { hash: "0x0abd07ee4b61ae2e7a0ca0feac65c80cf6ebf41545615aa249c7d4437017ec6b", ts: 1781339735, from: "0x05898436b412f23d339df2f9fe5d34f12e394d92", to: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", amount: 115891, block: 25307398, type: "transfer" },
    { hash: "0x0abd07ee4b61ae2e7a0ca0feac65c80cf6ebf41545615aa249c7d4437017ec6b", ts: 1781339735, from: "0x3df2ce8416401db1521aff5b1d3b598c2631de46", to: "0x05898436b412f23d339df2f9fe5d34f12e394d92", amount: 115891, block: 25307398, type: "transfer" },
    { hash: "0x16870a4cefe5c9b601f7c7cdeeec0221b17bb80b44c0d0fb7863a7af6fd29b89", ts: 1781339483, from: "0xdb3ded7731c781224ec292e2163d9554c094fd7c", to: "0x3df2ce8416401db1521aff5b1d3b598c2631de46", amount: 115891, block: 25307377, type: "transfer" },
    { hash: "0xd567c938bb97806a184928f906625261463041892784ec8613d9975b8fbdbde2", ts: 1781338871, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x179998589d1b00a604449b34f1d9f03bcda0eaab", amount: 111781, block: 25307326, type: "transfer" },
    { hash: "0x96c63a5bfa2def898c046cc14e566488cd3a4bcfffd8df2c60fadbd7a26796df", ts: 1781316035, from: "0xc1c4a5c41b62989acdbb9a11bbab668158f5d481", to: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", amount: 441789, block: 25305430, type: "transfer" },
    { hash: "0x021c430e1fa848d7c6007ce919ba2baf5567fd60ad691095d255b9aceec26fe5", ts: 1781314967, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xc1c4a5c41b62989acdbb9a11bbab668158f5d481", amount: 441789, block: 25305341, type: "transfer" },
    { hash: "0x95af2654b6b0db2886697d37a24398307b30769ca54b94970d1844ef7b67c4a2", ts: 1781311115, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xb180647d5ad76abeb6be0d363f6e182bd8df46d1", amount: 163297, block: 25305022, type: "transfer" },
    { hash: "0x20b89de2c08da833ac36269c145d06d0ce95daff90676476989697cb4f9cd98d", ts: 1781305511, from: "0xa3222357a0eccf60c73606170be6c99adecb59b3", to: "0xf1208549184f4caa95c7225b7cfdd442334b31fd", amount: 219085, block: 25304556, type: "transfer" },
    { hash: "0x99304706de443881b53be228052817288c9a408adc243c500a780d77ed75a48e", ts: 1781305439, from: "0xaea86ac3a1639d8e3734861d3ffbe75a27124f5b", to: "0xa3222357a0eccf60c73606170be6c99adecb59b3", amount: 198952, block: 25304550, type: "transfer" },
    { hash: "0xaa8507df57d71f12c0e4564537504fec71e61142d6a2f5eab7141915193839ee", ts: 1781304995, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0xaea86ac3a1639d8e3734861d3ffbe75a27124f5b", amount: 181970, block: 25304513, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xa8c3e1a954b0271dd9c3c80f44a56dde9b68d5c8", net: 5821918, received: 5821918, sent: 0, txs: 1 },
    { wallet: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", net: 447524, received: 447524, sent: 0, txs: 2 },
    { wallet: "0x98f870ab30c0530b2e19d1adf5285200f52305a7", net: 265754, received: 265754, sent: 0, txs: 10 },
    { wallet: "0xf1208549184f4caa95c7225b7cfdd442334b31fd", net: 219085, received: 219085, sent: 0, txs: 1 },
    { wallet: "0xb180647d5ad76abeb6be0d363f6e182bd8df46d1", net: 163297, received: 163297, sent: 0, txs: 1 },
    { wallet: "0x01ba661ae900ef02ae73cd9a02e2df0ad06682d0", net: 135585, received: 135585, sent: 0, txs: 2 },
    { wallet: "0x179998589d1b00a604449b34f1d9f03bcda0eaab", net: 111781, received: 111781, sent: 0, txs: 1 },
    { wallet: "0xe66fa0d55818d8e364ba298a12cad7bcd923666a", net: 74521, received: 74521, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 54613, received: 65066, sent: 10453, txs: 3 },
    { wallet: "0x7474231f18e489fcf312910cd79091e3439c186e", net: 49164, received: 49164, sent: 0, txs: 1 },
    { wallet: "0x64794b027f5d8ae9e7e5b333c8ab2ed8cf730ed1", net: 29937, received: 29937, sent: 0, txs: 1 },
    { wallet: "0xea6d0eb93b28ea690c6d26820b392d4e4868338d", net: 29809, received: 29809, sent: 0, txs: 1 },
    { wallet: "0xe337c67ee9077e31aab205b25e8593b0e1c00cc4", net: 25125, received: 25125, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 16843, received: 22578, sent: 5735, txs: 2 },
    { wallet: "0x8db66cd5d4538fdcdc5ff6d1c82abd1e52e998f4", net: 14795, received: 14795, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 13322, received: 13826, sent: 504, txs: 7 },
    { wallet: "0x89e94acc3a619fbea6aa28c26eec8b6f01e2ac8b", net: 11785, received: 11785, sent: 0, txs: 1 },
    { wallet: "0xf9dfc742e82f101a094760d25a47c3c16d681410", net: 9997, received: 9997, sent: 0, txs: 3 },
    { wallet: "0x0ecb136fc3ddcdf682c7f5b7e564ca5a7e0f8559", net: 6164, received: 6164, sent: 0, txs: 1 },
    { wallet: "0x3faa2c738f76f76526231c035c74184f3be5feb7", net: 3014, received: 3014, sent: 0, txs: 1 },
    { wallet: "0x80d9dbcc168f36324507fd355530e692a20deb86", net: 2740, received: 2740, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x446935174f93554ba4162099255ec0c165e2f741", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x032a343a8c77e8ab0dbddd0e24cebaf5b3f0c3bf", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 951, received: 951, sent: 0, txs: 10 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 822, received: 822, sent: 0, txs: 2 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xe7ff8186307f7781bce361dbe7245e1330550c52", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 609, received: 609, sent: 0, txs: 2 },
    { wallet: "0x139724a176a50f5089f4ed5bc653124e9d2c97f3", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xd2b2e98634b682c1d1abada276b19d46ed13a218", net: 504, received: 504, sent: 0, txs: 2 },
    { wallet: "0x7861e7c5b6f28708694221f2632ddbf88c3977ad", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x3620002e79381c888479e4c57074d8c385f8d932", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x907262769c7143796829c3d9595d8d4007e65cd1", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 159, received: 159, sent: 0, txs: 1 },
    { wallet: "0x1157e5e64b60d7a9ff9a16aa86f7b062b31a5f02", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x43284dc469d348221b3ed7bde3a22196c186c085", net: 0, received: 9997, sent: 9997, txs: 8 },
    { wallet: "0xc1fb33dc7c4277de92254d636719072a5aa7db7b", net: 0, received: 1224, sent: 1224, txs: 2 },
    { wallet: "0x2cedcc1fedb8dcae93a88bbf26df039071bb7243", net: 0, received: 959, sent: 959, txs: 2 },
    { wallet: "0x888c15c949a7bb3360bf023944db440138c4946e", net: 0, received: 49164, sent: 49164, txs: 2 },
    { wallet: "0x37bab29dafe65278552bc74adbbabc15904b5502", net: 0, received: 19145, sent: 19145, txs: 4 },
    { wallet: "0x7f51c134230eb9e5aba42bc364d3d3eba26d9712", net: 0, received: 202898, sent: 202898, txs: 8 },
    { wallet: "0x08ac7cdcab984359b98da3431df0147f326c0ef6", net: 0, received: 959, sent: 959, txs: 2 },
    { wallet: "0x88cc0800464fcef3e643a369e8a0532990995eee", net: 0, received: 147489, sent: 147489, txs: 8 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 278322, sent: 278322, txs: 9 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 164332, sent: 164332, txs: 8 },
    { wallet: "0x9f02988adb650e55cc5eb5619c383fd223848bb5", net: 0, received: 147500, sent: 147500, txs: 3 },
    { wallet: "0x06cff7088619c7178f5e14f0b119458d08d2f5ef", net: 0, received: 246, sent: 246, txs: 2 }
];

const WHALE_LABELS = {

};
