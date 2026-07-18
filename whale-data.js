// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "July 18, 2026 at 01:54 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 158;
const WHALE_TOTAL_VOLUME      = 2746788;
const WHALE_BIGGEST_SINGLE    = 1656986;

const WHALE_TRANSFERS = [
    { hash: "0xb090c21abad2294c4f612517ec9ce76179c5c6a1988a2c3aeabca0985cc82ea4", ts: 1784317187, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x8b2559cee51642d0b19ec4cf01f400b0c973e9de", amount: 1656986, block: 25554561, type: "transfer" },
    { hash: "0xa7ade82fb0b6f1f3732cb1c6477cbeccd22fbce6286a2522411fc59569fda19b", ts: 1784316875, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 192690, block: 25554536, type: "transfer" },
    { hash: "0x539f78c909aae4b26832a70cd3ab474c786f88ebad8ea9bbc30e5a9fc3693e8c", ts: 1784316647, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 192690, block: 25554517, type: "transfer" },
    { hash: "0x7a9e587f0481890d93c8685eaf2d87ee5fa6cbf2fed224918be6a20a3422497c", ts: 1784316299, from: "0x683f9090d6203e399a643ce7dd5f03f4b8e6e9e9", to: "0x2cff890f0378a11913b6129b2e97417a2c302680", amount: 130290, block: 25554488, type: "transfer" },
    { hash: "0x87dc9509314ed7af2f22335d685105166373ab1e6b9764f9ece389d54e18b497", ts: 1784316239, from: "0x76abb3498f4a079942efcd96791d5a61267be0d1", to: "0x683f9090d6203e399a643ce7dd5f03f4b8e6e9e9", amount: 130290, block: 25554483, type: "transfer" },
    { hash: "0x026bb51f5f2fa9d0cb072f4554f8cfece79d923be2dbc791f2471502dd79b779", ts: 1784290139, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", amount: 145760, block: 25552311, type: "transfer" },
    { hash: "0x45c6660bd3e5b5b34f74b040744cb0595487f7ab243eb6ac0003e2551cc32dd4", ts: 1784283455, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x5cd4d5dec5cb3794349a9e20b9671fd187dbd7b2", amount: 298082, block: 25551755, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x8b2559cee51642d0b19ec4cf01f400b0c973e9de", net: 1656986, received: 1656986, sent: 0, txs: 1 },
    { wallet: "0x5cd4d5dec5cb3794349a9e20b9671fd187dbd7b2", net: 298082, received: 298082, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 210914, received: 210914, sent: 0, txs: 2 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 145760, received: 145760, sent: 0, txs: 1 },
    { wallet: "0x9e26f69f9099ed7ec32cb6a60cb0442ce0828232", net: 72740, received: 72740, sent: 0, txs: 1 },
    { wallet: "0x0decfa21bc90262f6dfdc7e2060d1529d88f0c6b", net: 48544, received: 49444, sent: 900, txs: 3 },
    { wallet: "0x26e74d15a5c6d6f89a2e9d8cc2da3260f953c95b", net: 29736, received: 29736, sent: 0, txs: 1 },
    { wallet: "0x9be5b8a7314552fa47feb1355cd5b4adc7bb7516", net: 23898, received: 23898, sent: 0, txs: 1 },
    { wallet: "0xe53ffa3b78d6538495ec35b6ca9d28bc7cf82990", net: 14384, received: 14384, sent: 0, txs: 1 },
    { wallet: "0xc814d2ef6d893568c74cd969eb6f72a62fc261f7", net: 13562, received: 13562, sent: 0, txs: 1 },
    { wallet: "0x3822d8b402d6fcbe3187b08b1733ae2e2e46a2d3", net: 12603, received: 12603, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 12426, received: 12426, sent: 0, txs: 1 },
    { wallet: "0x239f281f9833d5e04dce90fc212b0dd3ece2b0c2", net: 10959, received: 10959, sent: 0, txs: 1 },
    { wallet: "0xbff1acb408ec3b8847b8cd0ea0af9fd02f06400d", net: 7945, received: 7945, sent: 0, txs: 1 },
    { wallet: "0x242db1a849dd1a6da266e710ee8b925547519f9d", net: 5816, received: 5816, sent: 0, txs: 1 },
    { wallet: "0x971c922b9273a0213dfb34b3ab9178f7fed0246c", net: 4247, received: 4247, sent: 0, txs: 1 },
    { wallet: "0x6f983e1cdab14ed5b72686df0f308b5a3c5acd3d", net: 3699, received: 3699, sent: 0, txs: 1 },
    { wallet: "0x5532d65385e664eef604976354608a9dc4d9ae7c", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0x5d73e31d8588d928d2dcbea05dc8038d86730bf5", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 748, received: 748, sent: 0, txs: 11 },
    { wallet: "0x23df718fc21dcc112f802bcc00580dba02e1d6ba", net: 725, received: 14085, sent: 13360, txs: 2 },
    { wallet: "0xe28d7502e70c9b45de8218b122a72a1eaf972695", net: 686, received: 686, sent: 0, txs: 1 },
    { wallet: "0xc448fcb3a2ad47f4a8288b76efb13f6c0c0c54af", net: 685, received: 685, sent: 0, txs: 1 },
    { wallet: "0x3c9108700724d9d96cff2ac8979d6ad2a8d469ae", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0x834e69fd1a34854b64b15f62140c91bcad9be270", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xdfc90a70d89bece5ac9331fbd680e3306e9afc15", net: 548, received: 548, sent: 0, txs: 1 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 291, received: 291, sent: 0, txs: 1 },
    { wallet: "0x907262769c7143796829c3d9595d8d4007e65cd1", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x90cbe4bdd538d6e9b379bff5fe72c3d67a521de5", net: 151, received: 151, sent: 0, txs: 2 },
    { wallet: "0xf4fa0b0bfb3f7a4adc0deed435b29534e23791a4", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x855992fbda59048156cb4bc75fad65d0bfa80f3b", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x40ebd62f2bda83b30d60c5b2218a6be782239e3a", net: 56, received: 56, sent: 0, txs: 1 },
    { wallet: "0x55392073639499cfa67f5ffe7e0f902c39358d0a", net: 29, received: 29, sent: 0, txs: 1 },
    { wallet: "0xcd6b980029e6e6e0733ac8ec3e02be9410d09799", net: 15, received: 15, sent: 0, txs: 1 },
    { wallet: "0x163f3103de041d25464e2c8a4f8f3187ec1856e0", net: 0, received: 22053, sent: 22053, txs: 6 },
    { wallet: "0x139c21bdac440a64ba06c7bf6a3ecdf2a9d04900", net: 0, received: 13562, sent: 13562, txs: 2 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 0, received: 137, sent: 137, txs: 2 },
    { wallet: "0x9fec5bb8fdeb97da90017751965bae463c654064", net: 0, received: 808, sent: 808, txs: 2 },
    { wallet: "0x1231deb6f5749ef6ce6943a275a1d3e7486f4eae", net: 0, received: 2457, sent: 2457, txs: 6 },
    { wallet: "0x20f6ee51340adeed01a59b0e65cb3703f3dc860c", net: 0, received: 837, sent: 837, txs: 2 },
    { wallet: "0x09ad820aac5779683b481c4674208a4e1b024afa", net: 0, received: 837, sent: 837, txs: 2 },
    { wallet: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", net: 0, received: 192690, sent: 192690, txs: 2 },
    { wallet: "0x683f9090d6203e399a643ce7dd5f03f4b8e6e9e9", net: 0, received: 130290, sent: 130290, txs: 2 },
    { wallet: "0xfba9bcac82f9e78d477c9445efa6e3b0eeef0e7a", net: 0, received: 23898, sent: 23898, txs: 2 },
    { wallet: "0x4af98e1451de381c1e546fd4cd60c3ef63687879", net: 0, received: 1226, sent: 1226, txs: 2 },
    { wallet: "0xad729fcd02e52938c29284d0ab3b4f1c3f66802c", net: 0, received: 137, sent: 137, txs: 2 },
    { wallet: "0x28b1dc1a5e3699a428bc51d234dfab7c9cb2a183", net: 0, received: 19984, sent: 19984, txs: 5 }
];

const WHALE_LABELS = {

};
