// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 24, 2026 at 01:24 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 110;
const WHALE_TOTAL_VOLUME      = 1524658;
const WHALE_BIGGEST_SINGLE    = 854795;

const WHALE_TRANSFERS = [
    { hash: "0x87db1e3fb6ccc32eb5f760528976f96a143654b976b2309f6f9329c2120318cc", ts: 1784885795, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x8b04b028c2b5b4cfa24a3d85d4d5c082f321094d", amount: 854795, block: 25601742, type: "transfer" },
    { hash: "0xba4885ae4bee21a652e66b3836b3aa1e1cf6c43e47d250bc20b7042542ab4c2e", ts: 1784885699, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xcd0cafe8cbe560315a941f016964c20f663744d4", amount: 569863, block: 25601734, type: "transfer" },
    { hash: "0x1342b073518e2a05ae9dd5400f5787fb9ad0561600606a7c5de22212a962168d", ts: 1784831063, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xce378bb6d7caa25f1c2acf0248cf9a423aaa0cd2", amount: 100000, block: 25597201, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x8b04b028c2b5b4cfa24a3d85d4d5c082f321094d", net: 854795, received: 854795, sent: 0, txs: 1 },
    { wallet: "0xcd0cafe8cbe560315a941f016964c20f663744d4", net: 525386, received: 569863, sent: 44477, txs: 5 },
    { wallet: "0xce378bb6d7caa25f1c2acf0248cf9a423aaa0cd2", net: 99900, received: 100000, sent: 100, txs: 2 },
    { wallet: "0xdbba5271c09ccc96d71a6876463e87674300ab35", net: 87671, received: 87671, sent: 0, txs: 1 },
    { wallet: "0x83490bd16191cad1714d4d0ce511aa4006177f4d", net: 40472, received: 40472, sent: 0, txs: 1 },
    { wallet: "0x7c876bdaa5c038e19f633714f622f6def949b102", net: 15475, received: 55947, sent: 40472, txs: 2 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 12328, received: 12408, sent: 80, txs: 5 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 11342, received: 11342, sent: 0, txs: 1 },
    { wallet: "0xacd7c189957029c2aff7e1f0466475da6960cb85", net: 10137, received: 10137, sent: 0, txs: 1 },
    { wallet: "0x187fe1a8b76c60b85c00a2819152ff00ff642386", net: 10136, received: 10136, sent: 0, txs: 1 },
    { wallet: "0x5d7f7f0fa4fb9a90b54435fb9f8f7a29d2d62855", net: 6000, received: 6000, sent: 0, txs: 1 },
    { wallet: "0x2ef1b2567aa33e1ba07f4fbd1a297223df28bafa", net: 5479, received: 33278, sent: 27798, txs: 3 },
    { wallet: "0xc79b289d73e7916da768dc9b1daedc9743f6b1d5", net: 5282, received: 5282, sent: 0, txs: 1 },
    { wallet: "0xa47c51e0dd4f045a5f5c4fbf291268255cc0cc05", net: 5068, received: 5068, sent: 0, txs: 1 },
    { wallet: "0x6f983e1cdab14ed5b72686df0f308b5a3c5acd3d", net: 2877, received: 2877, sent: 0, txs: 1 },
    { wallet: "0x1a996eb2a69423926d60973fc3d73cf1fa847a2f", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0xc935272c374e290de31dedba7aba3314af8aec4e", net: 1984, received: 1984, sent: 0, txs: 1 },
    { wallet: "0xfaa78f45f59770b9274d19bf7bf9b0a10fd5a851", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0xedc6b3f95f3e4ef39318a13bd1757716686d269a", net: 1000, received: 1000, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x3eb99584fd10c38a50a7a2b3b4f050f861601242", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x0a9c28275d73815b4b69d3a0b37834621b4eb210", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x3c9108700724d9d96cff2ac8979d6ad2a8d469ae", net: 411, received: 411, sent: 0, txs: 2 },
    { wallet: "0x11ba910dad5d2f04f3e4790252213fd3e545a1c9", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 274, received: 274, sent: 0, txs: 2 },
    { wallet: "0x3620002e79381c888479e4c57074d8c385f8d932", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x9df14235393c7a9d2bc38db6c12c61b699e094c6", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 151, received: 151, sent: 0, txs: 7 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x53a3db9fac9a5f15d041d3b0e5d64b37505db5c2", net: 100, received: 100, sent: 0, txs: 1 },
    { wallet: "0x044b232de11acd24f7bb67e285534f082cb9ae3e", net: 80, received: 80, sent: 0, txs: 1 },
    { wallet: "0x984e6b6601ad9638acc1f393955d102e72ca7997", net: 7, received: 7, sent: 0, txs: 1 },
    { wallet: "0xd2384bf5eb365a72efb81b1c1f26acd30cc34c36", net: 3, received: 3, sent: 0, txs: 1 },
    { wallet: "0x82d9a407f99a95db4671e7021d625cbd0787a407", net: 1, received: 1, sent: 0, txs: 2 },
    { wallet: "0x7f54f05635d15cde17a49502fedb9d1803a3be8a", net: 0, received: 30407, sent: 30407, txs: 8 },
    { wallet: "0x0f4ab87873e5b6abc6bbfe87ce8857e284cdd2de", net: 0, received: 5479, sent: 5479, txs: 2 },
    { wallet: "0xb3b97bc4b48e0bec3f7e26bc7b6e2c67e6ae64e3", net: 0, received: 27798, sent: 27798, txs: 2 },
    { wallet: "0xe2bf1330a8195a37b644ce82a7dd06c2ab5cdfba", net: 0, received: 2728, sent: 2728, txs: 2 },
    { wallet: "0xd031b8c380ff6df254cdc1f8d55b8bbd81ff4216", net: 0, received: 2740, sent: 2740, txs: 2 },
    { wallet: "0x8c3aba664de9e229accaee0620936c9334bac16d", net: 0, received: 5282, sent: 5282, txs: 2 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 8057, sent: 8057, txs: 6 },
    { wallet: "0x4c743a448848f0a2d6309f70c0db5835f128c2cd", net: 0, received: 1390, sent: 1390, txs: 2 },
    { wallet: "0x51613f6bb3b897dbe0900b2b6d819c3fc7bd8b33", net: 0, received: 1390, sent: 1390, txs: 2 },
    { wallet: "0x940339613205038c113c1acc2d5a391aab3ba682", net: 0, received: 4911, sent: 4911, txs: 2 },
    { wallet: "0x27ace13e9949900af2c5fdc1ad2aeb36b1e443a0", net: 0, received: 411, sent: 411, txs: 2 },
    { wallet: "0x11111605b53ecef22726df86881e4d6d40b5ca11", net: 0, received: 10007, sent: 10007, txs: 3 },
    { wallet: "0x74de5d4fcbf63e00296fd95d33236b9794016631", net: 0, received: 10007, sent: 10007, txs: 2 },
    { wallet: "0x59072b3a3287f4a75cadfb36d671a2f0d1959b09", net: 0, received: 10007, sent: 10007, txs: 2 }
];

const WHALE_LABELS = {

};
