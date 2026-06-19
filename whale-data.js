// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "June 19, 2026 at 02:53 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 151;
const WHALE_TOTAL_VOLUME      = 5899673;
const WHALE_BIGGEST_SINGLE    = 1463014;

const WHALE_TRANSFERS = [
    { hash: "0xc1c96692c68500158f7bf935bb179870918dcc2f8343e22b2bdf894823254825", ts: 1781870879, from: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", to: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", amount: 193948, block: 25351524, type: "transfer" },
    { hash: "0xeeb02e5c2252a95d50f581f249aa827167e9d17a2b1f61104b56729d8e11fab6", ts: 1781855087, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xf28e8f7c14fe801064a85d9f59c8b9b334452b63", amount: 391233, block: 25350210, type: "transfer" },
    { hash: "0x4c2f0602ad30f06b4d95806b22418aecdab669cd7cf2d5d31b5f18b3ca7edf5a", ts: 1781843711, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 108811, block: 25349262, type: "transfer" },
    { hash: "0x7312d3b1782cf0597f4d6cd91e51d567ffbe93ba36b8ca4ac23f85fd03ce0562", ts: 1781843423, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 108811, block: 25349239, type: "transfer" },
    { hash: "0xb79fbec0a1e2623e301da5dd798ac013f90161e41f0a8dc045789df24f271b28", ts: 1781836355, from: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 107178, block: 25348654, type: "transfer" },
    { hash: "0x606e4b466df614646c0699d6c0d7102000ea6eb77842c54c41602d220bea2339", ts: 1781835539, from: "0x2cff890f0378a11913b6129b2e97417a2c302680", to: "0xf275783a1b7423d9e50b461cbbcf4d945e0f3eee", amount: 107178, block: 25348586, type: "transfer" },
    { hash: "0x67c5879dc7dc8eff74b748c15dbf89d3e0f547247e7d82d558d235408a437dc1", ts: 1781828591, from: "0xb52ea6d7d65f735b82805c8541caff75bf652d4b", to: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", amount: 1463013, block: 25348009, type: "transfer" },
    { hash: "0xbbff9f0b3489540c9ddf3e637d59a937d5c0376346a1f10c6b014f91b1d2211e", ts: 1781828255, from: "0x072a59700edfa7e6662dcac145a1a355f38a326b", to: "0xb52ea6d7d65f735b82805c8541caff75bf652d4b", amount: 1463013, block: 25347981, type: "transfer" },
    { hash: "0x8aa6af80f0ec257971a03d82e3e4996e8083c3b577cda04aeeabeaf109bb6112", ts: 1781827739, from: "0x61270ef841f9673255270c38cea84ad66c935051", to: "0x072a59700edfa7e6662dcac145a1a355f38a326b", amount: 1463014, block: 25347938, type: "transfer" },
    { hash: "0x4c1798d523c8791bb73f15f72698e296be1c5e2023a6adb5fa36fd500806d7c8", ts: 1781827679, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x61270ef841f9673255270c38cea84ad66c935051", amount: 163014, block: 25347933, type: "transfer" },
    { hash: "0x5a48997456f93b5a65414e54dbe5492ad7317c859f2bd2b0dd5840aa45625f9d", ts: 1781827511, from: "0xb180647d5ad76abeb6be0d363f6e182bd8df46d1", to: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", amount: 330460, block: 25347919, type: "transfer" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", net: 1793473, received: 1793473, sent: 0, txs: 2 },
    { wallet: "0xf28e8f7c14fe801064a85d9f59c8b9b334452b63", net: 391233, received: 391233, sent: 0, txs: 1 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 215990, received: 215990, sent: 0, txs: 2 },
    { wallet: "0xd2dd7b597fd2435b6db61ddf48544fd931e6869f", net: 193948, received: 193948, sent: 0, txs: 1 },
    { wallet: "0x6912d024e2b88136c5a586e77b092199963b6083", net: 90607, received: 90609, sent: 2, txs: 3 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 24490, received: 244076, sent: 219587, txs: 15 },
    { wallet: "0xca902e065a5cbea896c6a37a3400d7ba166f7249", net: 23094, received: 23094, sent: 0, txs: 1 },
    { wallet: "0xb1e642c3d7e0f83633828c0d96e68affd99be0ea", net: 22603, received: 22603, sent: 0, txs: 1 },
    { wallet: "0x6a7d3a6fd7e6e4c4eb568806f87caf3a0a31ce63", net: 16926, received: 16926, sent: 0, txs: 1 },
    { wallet: "0x98f870ab30c0530b2e19d1adf5285200f52305a7", net: 14525, received: 14525, sent: 0, txs: 5 },
    { wallet: "0xcfda5643065feae6a9f6925c83528e1cc2822595", net: 11781, received: 11781, sent: 0, txs: 1 },
    { wallet: "0xba8f33ec095355bfaa69f5bf5f92915c60075f1d", net: 10411, received: 10411, sent: 0, txs: 1 },
    { wallet: "0xcf720926891ea8641b899152a8149de71017b67c", net: 7671, received: 7671, sent: 0, txs: 1 },
    { wallet: "0x6871656afb2460f25db9e2c766574e42c680beaf", net: 7397, received: 7397, sent: 0, txs: 1 },
    { wallet: "0x7be659d8f7fb57d9ac6be652726a5ba6ea80ebdb", net: 5753, received: 5753, sent: 0, txs: 1 },
    { wallet: "0x04050182662e0066195adb49dc5362465069827a", net: 5342, received: 5342, sent: 0, txs: 1 },
    { wallet: "0x7802d3c9a5b92717b5f25a3d06f9f3f16637fcea", net: 4844, received: 4844, sent: 0, txs: 1 },
    { wallet: "0x3a7797a4360cff2d72fbc914dbc95d0127d3a700", net: 4658, received: 4658, sent: 0, txs: 1 },
    { wallet: "0x0ae67ae903a7fef1d3842cb2b65dd1d74889a4f1", net: 4521, received: 4521, sent: 0, txs: 1 },
    { wallet: "0xfd9072f3715419414e2345da949fe5048c839877", net: 3836, received: 3836, sent: 0, txs: 1 },
    { wallet: "0x5d73e31d8588d928d2dcbea05dc8038d86730bf5", net: 3562, received: 3562, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0x6627c2f830928700f73475fe6e65177caf8b959a", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0x0fdeda23b17d459b0b90673a956a02f77af9eafc", net: 2000, received: 2000, sent: 0, txs: 1 },
    { wallet: "0xd83bbad310f696dd59464483d28bad209b76d1fb", net: 1543, received: 3597, sent: 2054, txs: 4 },
    { wallet: "0x855992fbda59048156cb4bc75fad65d0bfa80f3b", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0xd032d55ae33a27e3a1d2bc6d915e88c4771d8b3e", net: 834, received: 834, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 751, received: 751, sent: 0, txs: 12 },
    { wallet: "0xd467f60fafa089e7203199944f95aa2333a91aba", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x9df14235393c7a9d2bc38db6c12c61b699e094c6", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x4a57bec2ddb761ec9b7e7e0e576757b9e915219b", net: 352, received: 352, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x39faf1de461849163e390d0a57d1eaa632064a49", net: 273, received: 273, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd7ca08ec1aee9cce8a8eda9365343ef197674e1a", net: 76, received: 90685, sent: 90608, txs: 3 },
    { wallet: "0xfad4c8f1e71e4c56b87733bd916ff7cff46c6c29", net: 59, received: 59, sent: 0, txs: 7 },
    { wallet: "0xc06ebbefd94032b85424d51906e2a335efae264b", net: 10, received: 10, sent: 0, txs: 7 },
    { wallet: "0xd493066498ace409059fda4c1bcd2e73d8cffe01", net: 2, received: 2, sent: 0, txs: 1 },
    { wallet: "0x072a59700edfa7e6662dcac145a1a355f38a326b", net: 1, received: 1463014, sent: 1463013, txs: 2 },
    { wallet: "0xc10ee9031f2a0b84766a86b55a8d90f357910fb4", net: 0, received: 99804, sent: 99804, txs: 3 },
    { wallet: "0xbeb0b0623f66be8ce162ebdfa2ec543a522f4ea6", net: 0, received: 99804, sent: 99804, txs: 2 },
    { wallet: "0x77b3743b14a0e535dead7e6b7539ec8e05506d95", net: 0, received: 2045, sent: 2045, txs: 2 },
    { wallet: "0x8f86deb5f028708edc1c2272ff55a42649b4c304", net: 0, received: 4913, sent: 4913, txs: 2 },
    { wallet: "0x5a73a39a9c588aa6f6a2d8329157aa5e9522ab9d", net: 0, received: 4932, sent: 4931, txs: 3 },
    { wallet: "0x43d166f6ee6529b594146409410a56d5d303f8c6", net: 0, received: 37280, sent: 37280, txs: 2 },
    { wallet: "0x80826c8570f2e3370c6d0d74fd0344bc963efca9", net: 0, received: 13151, sent: 13151, txs: 2 }
];

const WHALE_LABELS = {

};
