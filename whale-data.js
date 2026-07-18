// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 18, 2026 at 01:00 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 179;
const WHALE_TOTAL_VOLUME      = 2720090;
const WHALE_BIGGEST_SINGLE    = 1656986;

const WHALE_TRANSFERS = [
    { hash: "0x9572e461d59d0b3d4bc0ce65dbbb6070802497acfaa960d28c8c63cbdb7c3b1d", ts: 1784370323, from: "0xa0bba6d1620ce4cb59ff7ee0a1fe7ab1a484256a", to: "0x3c386b3d6499e09408d96424751d1667a87d9bc6", amount: 100000, block: 25558974, type: "transfer" },
    { hash: "0xa0e0819de36e9a400a83bd2f50a721f9ca864aa1fde39508414e73a72e67000c", ts: 1784368583, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0x42e800890a1a8edd09f130a16975ecb8f2c2939e", amount: 105644, block: 25558829, type: "transfer" },
    { hash: "0x2de7621ad810127b309bc30b5da109c47fb6585fd212bb752ba8fd59fa9c8bfc", ts: 1784368379, from: "0x07a33c3cbad439eaa857466a78ed3c308a42d03f", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 105750, block: 25558812, type: "transfer" },
    { hash: "0xae155a3d3282aa6e785c2aa336b8a3aa4df697e5acdbc1d5c4730190a0abc5ee", ts: 1784368331, from: "0xcbc5a4f9ddfe7ce43dabc876cb30fd6b61c0b3c9", to: "0x07a33c3cbad439eaa857466a78ed3c308a42d03f", amount: 105750, block: 25558808, type: "transfer" },
    { hash: "0xb090c21abad2294c4f612517ec9ce76179c5c6a1988a2c3aeabca0985cc82ea4", ts: 1784317187, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x8b2559cee51642d0b19ec4cf01f400b0c973e9de", amount: 1656986, block: 25554561, type: "transfer" },
    { hash: "0xa7ade82fb0b6f1f3732cb1c6477cbeccd22fbce6286a2522411fc59569fda19b", ts: 1784316875, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 192690, block: 25554536, type: "transfer" },
    { hash: "0x539f78c909aae4b26832a70cd3ab474c786f88ebad8ea9bbc30e5a9fc3693e8c", ts: 1784316647, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 192690, block: 25554517, type: "transfer" },
    { hash: "0x7a9e587f0481890d93c8685eaf2d87ee5fa6cbf2fed224918be6a20a3422497c", ts: 1784316299, from: "0x683f9090d6203e399a643ce7dd5f03f4b8e6e9e9", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 130290, block: 25554488, type: "transfer" },
    { hash: "0x87dc9509314ed7af2f22335d685105166373ab1e6b9764f9ece389d54e18b497", ts: 1784316239, from: "0x76abb3498f4a079942efcd96791d5a61267be0d1", to: "0x683f9090d6203e399a643ce7dd5f03f4b8e6e9e9", amount: 130290, block: 25554483, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x8b2559cee51642d0b19ec4cf01f400b0c973e9de", net: 1656986, received: 1656986, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 227485, received: 227485, sent: 0, txs: 3 },
    { wallet: "0x42e800890a1a8edd09f130a16975ecb8f2c2939e", net: 105644, received: 105644, sent: 0, txs: 1 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 60635, received: 60635, sent: 0, txs: 7 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 59707, received: 59707, sent: 0, txs: 1 },
    { wallet: "0x9be5b8a7314552fa47feb1355cd5b4adc7bb7516", net: 51040, received: 51040, sent: 0, txs: 2 },
    { wallet: "0xd17cb60b2260477e580def6925e2c1049fb0d790", net: 44779, received: 44779, sent: 0, txs: 3 },
    { wallet: "0x80fd48b7777490e5c3c07f02bcfe94af2cb59223", net: 17808, received: 17808, sent: 0, txs: 1 },
    { wallet: "0xe53ffa3b78d6538495ec35b6ca9d28bc7cf82990", net: 14384, received: 14384, sent: 0, txs: 1 },
    { wallet: "0xc814d2ef6d893568c74cd969eb6f72a62fc261f7", net: 13562, received: 13562, sent: 0, txs: 1 },
    { wallet: "0x3822d8b402d6fcbe3187b08b1733ae2e2e46a2d3", net: 12603, received: 12603, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 12426, received: 12426, sent: 0, txs: 1 },
    { wallet: "0x04050182662e0066195adb49dc5362465069827a", net: 12329, received: 12329, sent: 0, txs: 1 },
    { wallet: "0x8f0e019b20b8c972a17c9726c80e35d30bc95294", net: 6308, received: 6308, sent: 0, txs: 1 },
    { wallet: "0x242db1a849dd1a6da266e710ee8b925547519f9d", net: 5816, received: 5816, sent: 0, txs: 1 },
    { wallet: "0xda910ef639c863c35ed36c02fe58e2f84c3f59f1", net: 5752, received: 5752, sent: 0, txs: 1 },
    { wallet: "0x0f36eb8f227aa28e2eb2705724233addabd61e15", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0xdc56fd9d0112f44c9c4944e544fd20987c8b3a8c", net: 3070, received: 3070, sent: 0, txs: 1 },
    { wallet: "0xdc5cdbd7d4c69ba5f6da8765754191dc2544bce1", net: 2273, received: 2273, sent: 0, txs: 1 },
    { wallet: "0x4005d4b50140bcf6221b3ae8df455e10600a02c0", net: 2192, received: 2192, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 972, received: 972, sent: 0, txs: 10 },
    { wallet: "0xe28d7502e70c9b45de8218b122a72a1eaf972695", net: 686, received: 686, sent: 0, txs: 1 },
    { wallet: "0x3c9108700724d9d96cff2ac8979d6ad2a8d469ae", net: 685, received: 685, sent: 0, txs: 2 },
    { wallet: "0x834e69fd1a34854b64b15f62140c91bcad9be270", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x9e95a7b56d70cb5619a2811ecd79d2c190ae70a7", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 291, received: 291, sent: 0, txs: 1 },
    { wallet: "0x855992fbda59048156cb4bc75fad65d0bfa80f3b", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xf4fa0b0bfb3f7a4adc0deed435b29534e23791a4", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 123, received: 123, sent: 0, txs: 1 },
    { wallet: "0x40ebd62f2bda83b30d60c5b2218a6be782239e3a", net: 56, received: 56, sent: 0, txs: 1 },
    { wallet: "0x2da5e54ac1fad54ff9f99f068ae35b82d785277e", net: 29, received: 29, sent: 0, txs: 1 },
    { wallet: "0x55392073639499cfa67f5ffe7e0f902c39358d0a", net: 29, received: 29, sent: 0, txs: 1 },
    { wallet: "0xfba9bcac82f9e78d477c9445efa6e3b0eeef0e7a", net: 0, received: 51040, sent: 51040, txs: 4 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 59892, sent: 59892, txs: 14 },
    { wallet: "0x279a2a69bf25427fe07e594af2e58a1810e9bde9", net: 0, received: 34794, sent: 34794, txs: 4 },
    { wallet: "0x3c386b3d6499e09408d96424751d1667a87d9bc6", net: 0, received: 100000, sent: 100000, txs: 4 },
    { wallet: "0x07a33c3cbad439eaa857466a78ed3c308a42d03f", net: 0, received: 105750, sent: 105750, txs: 2 },
    { wallet: "0x08c57adef654e51edf37303ce55b118aaf53ab9d", net: 0, received: 4777, sent: 4777, txs: 2 },
    { wallet: "0x1f2f10d1c40777ae1da742455c65828ff36df387", net: 0, received: 4961, sent: 4961, txs: 2 },
    { wallet: "0x163f3103de041d25464e2c8a4f8f3187ec1856e0", net: 0, received: 21270, sent: 21270, txs: 10 },
    { wallet: "0x0c2ebd222353a0936b3084c86f9ad23f4284bda4", net: 0, received: 13151, sent: 13151, txs: 3 },
    { wallet: "0x2633be0f7ee8020e91ae4923f4488b14a261709c", net: 0, received: 13151, sent: 13151, txs: 2 },
    { wallet: "0x22ecf2bed494976503a8087add30e134c30fbd98", net: 0, received: 5399, sent: 5399, txs: 2 }
];

const WHALE_LABELS = {

};
