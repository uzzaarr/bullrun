// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "September 5, 2026 at 02:23 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 258;
const WHALE_TOTAL_VOLUME      = 10633597;
const WHALE_BIGGEST_SINGLE    = 802231;

const WHALE_TRANSFERS = [
    { hash: "0xe1bfffee7f8327eb43e25cfd92add036edcdc1ead7b941eac12fb4ad6a4c853c", ts: 1788615695, from: "0x8f10b468b06c6fd214b65f87778827f7d113f996", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 117991, block: 25911493, type: "sell" },
    { hash: "0xe1bfffee7f8327eb43e25cfd92add036edcdc1ead7b941eac12fb4ad6a4c853c", ts: 1788615695, from: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", to: "0x8f10b468b06c6fd214b65f87778827f7d113f996", amount: 117991, block: 25911493, type: "transfer" },
    { hash: "0xe1bfffee7f8327eb43e25cfd92add036edcdc1ead7b941eac12fb4ad6a4c853c", ts: 1788615695, from: "0x6e02700afbfa6f620b1e76630a6bb5f6f9116b8f", to: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", amount: 117991, block: 25911493, type: "transfer" },
    { hash: "0xa1ce4bdb351e03590f2ec9c31669811255895e241dfd9411ee8f50002d4c1d77", ts: 1788615107, from: "0x921e7966d4cd86ef1ae948e4305a77cb9c36929a", to: "0x6e02700afbfa6f620b1e76630a6bb5f6f9116b8f", amount: 118357, block: 25911444, type: "transfer" },
    { hash: "0x413429d3ec005221d0e1ae85a236088dc5f647df61d023ebd933a0caa95c49dd", ts: 1788614939, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x921e7966d4cd86ef1ae948e4305a77cb9c36929a", amount: 118356, block: 25911430, type: "transfer" },
    { hash: "0xea7fae24325ba324bbc8ac4c296738f7802d14af11311dc67193564354c9a59b", ts: 1788603971, from: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 789598, block: 25910518, type: "transfer" },
    { hash: "0xcdcb1186f60b5ff7dcbe5d2ddc9d948744e83e3b84f70b59b9766e89625ade99", ts: 1788600383, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25910220, type: "sell" },
    { hash: "0x7662c5c6fb3ccbb4c81e1d902303eed9e4e832e567217abe73345f11c40feb38", ts: 1788600359, from: "0xe06cdd36c3fb35f6ffb5933369595770da829419", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 107189, block: 25910218, type: "sell" },
    { hash: "0x7662c5c6fb3ccbb4c81e1d902303eed9e4e832e567217abe73345f11c40feb38", ts: 1788600359, from: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", to: "0xe06cdd36c3fb35f6ffb5933369595770da829419", amount: 107189, block: 25910218, type: "transfer" },
    { hash: "0xafbf9dc9d58753d71c898051bfafbec58c6ba692e7a79735e398ebd4b461ceac", ts: 1788600335, from: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 136730, block: 25910216, type: "sell" },
    { hash: "0x08eeac771432978e04614c9357e1c0c96bb7bac55832621a795ecc423f82e637", ts: 1788600239, from: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 136044, block: 25910208, type: "sell" },
    { hash: "0xfde051cf7e4580df59976d8e62c2bc0fefc786b8f66db3d3ee06667500fc87e8", ts: 1788600203, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25910205, type: "sell" },
    { hash: "0xff141de641598f8166de19cccc7db3a5d3615d4f072dc34da981fe9d9930da3f", ts: 1788596687, from: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", to: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", amount: 789598, block: 25909914, type: "transfer" },
    { hash: "0x3107339de01d301cea98a50ee4a6453a58202c9a9e7c1b9ca67ebf3a08926f32", ts: 1788596519, from: "0x09fc9b7545020f6a51d113e495e0a451597969d3", to: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", amount: 789598, block: 25909900, type: "transfer" },
    { hash: "0xa25e8be18e861a196f3564054877ae1d8da7ac3efb9c32480cfefab8479c4fef", ts: 1788590651, from: "0x9254fb742daefda0329cdbe71b3f15a361566697", to: "0xd5e647f9d6b5945cb40b06c83fc4350154fb6d24", amount: 610274, block: 25909417, type: "transfer" },
    { hash: "0x8a31d4394490d3ef4e97d553ec303da30853ccd6ded9807593e2e9121523bd91", ts: 1788590387, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x9254fb742daefda0329cdbe71b3f15a361566697", amount: 184932, block: 25909395, type: "transfer" },
    { hash: "0x0317601b2370d85b9397f466d90c7e16074e2166f4a4fcdd50d65595a63731e0", ts: 1788580787, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25908597, type: "buy" },
    { hash: "0x5cc68a27eaee6092d4097b603849bf611ee4a24e582439f200798f60ee99aec7", ts: 1788564359, from: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 777199, block: 25907231, type: "transfer" },
    { hash: "0x9e395f9c906fc311ef18aa7cbfe5eb771f6e526b22b183020034153d06b48d64", ts: 1788561431, from: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", to: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", amount: 777199, block: 25906988, type: "transfer" },
    { hash: "0xeadb9028b0be8ddfcfdd90c354c12b58d79ec5b4084103254e7257ced83f5855", ts: 1788561263, from: "0x09fc9b7545020f6a51d113e495e0a451597969d3", to: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", amount: 777199, block: 25906974, type: "transfer" },
    { hash: "0x4c3486cfd596537e808b8571c83f3fb27136cf8b2a7820ee37fd2c79e9e225fd", ts: 1788553631, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x09fc9b7545020f6a51d113e495e0a451597969d3", amount: 802231, block: 25906339, type: "transfer" },
    { hash: "0x13c7e8570a2b9c99cb55cb5fc9c7a2b12940d19685513a091cf1179e7b720a01", ts: 1788553559, from: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 796414, block: 25906333, type: "transfer" },
    { hash: "0x51305a6d8a9a523589075d8aadfb67ecf462a5fa5224aab4ec61936242b02f41", ts: 1788549791, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x1a87aaec7927ab2527bf790625cc12843ede910e", amount: 127001, block: 25906019, type: "transfer" },
    { hash: "0x0ad20bf3fb146aeb27ee5839fdb43614ea3f7c66b9aa510ecad73164af78ff91", ts: 1788549227, from: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", to: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", amount: 796414, block: 25905972, type: "transfer" },
    { hash: "0xe16ca7df0c553cd2cb94476feaac2455d89a2bba5bfabc8c703bf9eee0b978eb", ts: 1788549095, from: "0x09fc9b7545020f6a51d113e495e0a451597969d3", to: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", amount: 796414, block: 25905961, type: "transfer" },
    { hash: "0x00f5379e276ff08874031892e2b59c142127cf66aee2998e5068e3dbefb378fa", ts: 1788538223, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25905060, type: "buy" },
    { hash: "0x10e0635533260a468f39dabf1975b737b456a3f55bcea647d07d72c09b9eadd5", ts: 1788536783, from: "0x58edf78281334335effa23101bbe3371b6a36a51", to: "0xd671e834e9416aaa9f71fefc800b11abbf138c37", amount: 109671, block: 25904942, type: "transfer" },
    { hash: "0x12dc76d00be4f5683198118e371eca67a149c13ea5096d334216af0b77980c72", ts: 1788532235, from: "0x111116053f09d34a7eae8102887004445176ca11", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 115834, block: 25904564, type: "sell" },
    { hash: "0x12dc76d00be4f5683198118e371eca67a149c13ea5096d334216af0b77980c72", ts: 1788532235, from: "0xd3bc5acd80a1c9a201d7345d0677cc9899ef8079", to: "0x111116053f09d34a7eae8102887004445176ca11", amount: 116183, block: 25904564, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 1618310, received: 2547541, sent: 929231, txs: 8 },
    { wallet: "0xd5e647f9d6b5945cb40b06c83fc4350154fb6d24", net: 610274, received: 610274, sent: 0, txs: 1 },
    { wallet: "0x1a87aaec7927ab2527bf790625cc12843ede910e", net: 127001, received: 127001, sent: 0, txs: 1 },
    { wallet: "0xc47df3f8335e81696abfe0d082d33bec570d4fa2", net: 120000, received: 180000, sent: 60000, txs: 4 },
    { wallet: "0xd671e834e9416aaa9f71fefc800b11abbf138c37", net: 109671, received: 109671, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 79202, received: 79781, sent: 580, txs: 4 },
    { wallet: "0xe912d6cfeaee2c1ffde4bea98299d185fafdaa1d", net: 68493, received: 68493, sent: 0, txs: 1 },
    { wallet: "0xba316ba20053e0ab2060fa27bf132d57c0cc6162", net: 43151, received: 43151, sent: 0, txs: 1 },
    { wallet: "0x16dd4bac1ba4fe40293d3a7a14af9abc41274333", net: 43151, received: 43151, sent: 0, txs: 1 },
    { wallet: "0x00f80b67791fa63c180bce8dfe368300ce128cc8", net: 43151, received: 43151, sent: 0, txs: 1 },
    { wallet: "0xb5550b487d9b58823f135d2f03c45c40f6c2fd3b", net: 39508, received: 39508, sent: 0, txs: 1 },
    { wallet: "0xbd6e282da05804251d60db2cf73d19df2a9f70f8", net: 36438, received: 36438, sent: 0, txs: 1 },
    { wallet: "0xbbc2e9fadd02f03bda75894d84148862f294983a", net: 9315, received: 9315, sent: 0, txs: 1 },
    { wallet: "0x4cfed7cf0f259d38d644ac82d4cbcb806adee42f", net: 9289, received: 9289, sent: 0, txs: 1 },
    { wallet: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", net: 8860, received: 8860, sent: 0, txs: 1 },
    { wallet: "0x08975eb9695e5ce896f7416daa9a5f62e81142b3", net: 5753, received: 5753, sent: 0, txs: 1 },
    { wallet: "0xf35fcd53113667ffff169c64784a71b0b7e62c33", net: 4658, received: 4658, sent: 0, txs: 1 },
    { wallet: "0xddd770e9d27e098b5e2d7335fed99a896ec89657", net: 3973, received: 3973, sent: 0, txs: 1 },
    { wallet: "0x1a996eb2a69423926d60973fc3d73cf1fa847a2f", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0x8e116b4bf95b990b9240e84ad674bd10c0b0759c", net: 1781, received: 1781, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1693, received: 1693, sent: 0, txs: 16 },
    { wallet: "0x5d73e31d8588d928d2dcbea05dc8038d86730bf5", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0x9df14235393c7a9d2bc38db6c12c61b699e094c6", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x0f36eb8f227aa28e2eb2705724233addabd61e15", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x3822d8b402d6fcbe3187b08b1733ae2e2e46a2d3", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 349, received: 349, sent: 0, txs: 1 },
    { wallet: "0xaef4913a8d189a3e6d50a09f3ad62a21d6e034e3", net: 300, received: 300, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x2820a2b534ec948412699074389edf8aab88ad30", net: 78, received: 78, sent: 0, txs: 1 },
    { wallet: "0xb1a78eea2125efcf4c9153c551b3ece73e8a3ca7", net: 28, received: 28, sent: 0, txs: 1 },
    { wallet: "0xc06ebbefd94032b85424d51906e2a335efae264b", net: 1, received: 1, sent: 0, txs: 1 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 241671, sent: 241671, txs: 16 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 246171, sent: 246171, txs: 18 },
    { wallet: "0x6e02700afbfa6f620b1e76630a6bb5f6f9116b8f", net: 0, received: 118357, sent: 118357, txs: 3 },
    { wallet: "0x66a9893cc07d91d95644aedd05d03f95e1dba8af", net: 0, received: 84479, sent: 84479, txs: 6 },
    { wallet: "0x1d1735bcf925d10b600279ce720da2673c2274c5", net: 0, received: 84178, sent: 84178, txs: 4 },
    { wallet: "0x97ccdbea4632140639ad5ea9b944aa034eb15fd4", net: 0, received: 84178, sent: 84178, txs: 4 },
    { wallet: "0xd91b37fa93bdb921d35e347215f44c1465ec7023", net: 0, received: 59452, sent: 59452, txs: 3 },
    { wallet: "0xfcc9d871ac5cf61e4221a6e74e2adab72e92f5fc", net: 0, received: 59452, sent: 59452, txs: 2 },
    { wallet: "0x88e4f97859dc3a04a22fc83dbfb800258f7ee9e5", net: 0, received: 59452, sent: 59452, txs: 3 },
    { wallet: "0xe6dc31d46ba5fdf4952e04c8dce0b0efcd7193a2", net: 0, received: 59452, sent: 59452, txs: 2 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 507517, sent: 507517, txs: 22 },
    { wallet: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", net: 0, received: 2363212, sent: 2363212, txs: 6 },
    { wallet: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", net: 0, received: 200000, sent: 200000, txs: 4 },
    { wallet: "0xcaf0beadeaefc66fef60ac6526ab566d58c8647a", net: 0, received: 20000, sent: 20000, txs: 2 }
];

const WHALE_LABELS = {

};
