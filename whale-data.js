// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "September 15, 2026 at 10:50 AM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 206;
const WHALE_TOTAL_VOLUME      = 9034701;
const WHALE_BIGGEST_SINGLE    = 1149280;

const WHALE_TRANSFERS = [
    { hash: "0x308d9481ea0560d96983e8b3eb139af7b969bd2a52e787dabaf6a7c566c73f22", ts: 1789458287, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25981453, type: "sell" },
    { hash: "0x535b467d8f4aa7ac8ed3b487ae0d3fe64133aa19e8bf9e4ae066b05e6740cb60", ts: 1789442747, from: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 1149280, block: 25980160, type: "transfer" },
    { hash: "0x2f3c205c91b887c94a27d0a7bc46839d8492083cfd87890f509d05caae12a43f", ts: 1789442555, from: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 166949, block: 25980144, type: "sell" },
    { hash: "0xab439197be9ca6e911582c9670b9c0882c7c5a66fffeb0ce1a3d6d526a1d4ffb", ts: 1789440659, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", amount: 167841, block: 25979986, type: "buy" },
    { hash: "0xe5384aa0101e5f4a3d31556b08652292402b6de5562e18b45ca05269ebff1482", ts: 1789439147, from: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", to: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", amount: 1149280, block: 25979860, type: "transfer" },
    { hash: "0x773e7bc39de2fd643d1c09ae42bff85870cc2f57666ef3c6bbb50133a0e57967", ts: 1789438979, from: "0x09fc9b7545020f6a51d113e495e0a451597969d3", to: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", amount: 1149280, block: 25979846, type: "transfer" },
    { hash: "0x089a7a710a4b3dda0a318d5235d49e1171ac601798a01d1ad03a7c500383cbef", ts: 1789435871, from: "0x4d4e14fbdf6bb02b6e036f86f120f00abe41c791", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 124812, block: 25979589, type: "sell" },
    { hash: "0x089a7a710a4b3dda0a318d5235d49e1171ac601798a01d1ad03a7c500383cbef", ts: 1789435871, from: "0x9008d19f58aabd9ed0d60971565aa8510560ab41", to: "0x4d4e14fbdf6bb02b6e036f86f120f00abe41c791", amount: 124812, block: 25979589, type: "transfer" },
    { hash: "0x089a7a710a4b3dda0a318d5235d49e1171ac601798a01d1ad03a7c500383cbef", ts: 1789435871, from: "0x129ab3a1c3eb5c3d27183a9f55cafe21a8de49d7", to: "0x9008d19f58aabd9ed0d60971565aa8510560ab41", amount: 124812, block: 25979589, type: "transfer" },
    { hash: "0x271de608a65b5307a38df180ef42c9e8eef90d07751de49896a3eb2c18b66128", ts: 1789430951, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25979182, type: "buy" },
    { hash: "0xfffca8fd1ab5734caaf31bb255b79db078c3c95bdcd67292f19495479ea9ac6e", ts: 1789429367, from: "0x447a03c131c0a97a8b8d548e3cd81aec4ce05d73", to: "0xead224e9ac09ac94a3d4c0ab1f16bc4e7cb4574c", amount: 267128, block: 25979050, type: "transfer" },
    { hash: "0xfffca8fd1ab5734caaf31bb255b79db078c3c95bdcd67292f19495479ea9ac6e", ts: 1789429367, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x447a03c131c0a97a8b8d548e3cd81aec4ce05d73", amount: 267128, block: 25979050, type: "buy" },
    { hash: "0x4415cb5da45ff102c4c86d33a3232f7f2924619f397f74cc0b7f230b8dd3086a", ts: 1789429355, from: "0x1cecbc925f7fbd1565fd4f99c81a4a138c729b7c", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 640121, block: 25979049, type: "sell" },
    { hash: "0xd360b54c6dfe0d85e0f17702ecd3f56d7fa85a381e5265037acdc19186c0ba1c", ts: 1789429319, from: "0xbd9949756de166350fea2661b609bb19cca3f3ce", to: "0x1cecbc925f7fbd1565fd4f99c81a4a138c729b7c", amount: 641096, block: 25979046, type: "transfer" },
    { hash: "0xdcf21102d7db121177375f5100b409cc61d346076854d370ae01e6873d0aa6a0", ts: 1789429247, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xbd9949756de166350fea2661b609bb19cca3f3ce", amount: 641096, block: 25979040, type: "transfer" },
    { hash: "0xd0bd21fb4b00d1a40b61132579c078547fc42c2dd3fe81a17ff7c57b2eaa760a", ts: 1789421315, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25978382, type: "sell" },
    { hash: "0x08dfff3e50cb3a94790f8c1ad8296d73e2ac170344446f7bb77977a67038278f", ts: 1789421231, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25978375, type: "sell" },
    { hash: "0x36482df713f09d2f78d6bb090a6bd9c582f7c21279b792b261061eddbae1cc02", ts: 1789421027, from: "0xa79ca4eb732742f95b0506c3e235b2b7c7ab55c6", to: "0x800898edf251dc075984132de93b5013c8cc9c1e", amount: 100000, block: 25978358, type: "transfer" },
    { hash: "0xc4fe32db2bf1a370a73ada4d362105fe1762b9980cd870c04a994a13e05544a9", ts: 1789406711, from: "0x26af8ce169cffb0bad44cb08ddcce276dc427a2e", to: "0x9642b23ed1e01df1092b92641051881a322f5d4e", amount: 528111, block: 25977175, type: "transfer" },
    { hash: "0x16fea80297c04efd08b83323b2c63dcc1f070b76da051a1651b74a366049ef01", ts: 1789406231, from: "0xa9d1e08c7793af67e9d92fe308d5697fb81d3e43", to: "0x26af8ce169cffb0bad44cb08ddcce276dc427a2e", amount: 528111, block: 25977135, type: "transfer" },
    { hash: "0x4c5dac95f45e7c6c85a5c2fe5a1537d0311b8d9f89223d7b3e3e1a88c4434903", ts: 1789392467, from: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 165835, block: 25975995, type: "sell" },
    { hash: "0x32625a99b5a25f5618fcbd5b5a972d6ab751b532df8cca02873fcc8542d882d2", ts: 1789391435, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 25975909, type: "buy" },
    { hash: "0x16647e868ab6e8a287c60436e71154cfbab2d63cd0f15f284a13ddd32f5d6f9c", ts: 1789391423, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", amount: 167449, block: 25975908, type: "buy" },
    { hash: "0x801141722828db5d48098083e44811273d770e7acc093dba1eb179ea8315fa54", ts: 1789391231, from: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 166454, block: 25975892, type: "sell" },
    { hash: "0xd2ca09e8dfbf224d38d8e9a0b487ba65703986d6db7bc547e1eaaf86b5e8462d", ts: 1789386023, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 25975458, type: "sell" },
    { hash: "0x746c04d612623080ea1238eea71882755f0e8b5dc9123147e3ed4009e9d53ec4", ts: 1789383935, from: "0x0dcfbef3099ee33265f8dd7f21ac7f72db9dc995", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 165106, block: 25975284, type: "sell" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 1149280, received: 1149280, sent: 0, txs: 1 },
    { wallet: "0x9642b23ed1e01df1092b92641051881a322f5d4e", net: 528111, received: 528111, sent: 0, txs: 1 },
    { wallet: "0xead224e9ac09ac94a3d4c0ab1f16bc4e7cb4574c", net: 267128, received: 267128, sent: 0, txs: 1 },
    { wallet: "0xd526f3928744baf03aa06352687746f7f908d21c", net: 90411, received: 90411, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 85257, received: 85257, sent: 0, txs: 2 },
    { wallet: "0xd1234442e659cc8ab473b108322abac21131c312", net: 67522, received: 67522, sent: 0, txs: 1 },
    { wallet: "0x68374e811f889a43fde858526754dc5292aa82b2", net: 49978, received: 49978, sent: 0, txs: 1 },
    { wallet: "0x7c876bdaa5c038e19f633714f622f6def949b102", net: 27282, received: 94804, sent: 67522, txs: 2 },
    { wallet: "0x93a0caad4cff6f78a8b15550ab90955cefbe686f", net: 16478, received: 16478, sent: 0, txs: 2 },
    { wallet: "0x8bb88a3eafd6ba0b6cce254c0c447c4cf5860afe", net: 15395, received: 91020, sent: 75625, txs: 5 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 10579, received: 10579, sent: 0, txs: 1 },
    { wallet: "0x30cfadcdd83701dd41baab255a110290d9bc968b", net: 7397, received: 7397, sent: 0, txs: 1 },
    { wallet: "0x3620002e79381c888479e4c57074d8c385f8d932", net: 6301, received: 6301, sent: 0, txs: 1 },
    { wallet: "0x20694bb5c906ee71e696587be233284f995564b7", net: 6027, received: 6027, sent: 0, txs: 1 },
    { wallet: "0x22cab81e0fee2bad5b015dbbeb6a374a1b8738de", net: 5753, received: 5753, sent: 0, txs: 1 },
    { wallet: "0x4f3889331539ab2ed976dbaf67c8def36deeed15", net: 4521, received: 4521, sent: 0, txs: 1 },
    { wallet: "0x549ad2435760a459bbbe4c6585db7f2b31b0112f", net: 3699, received: 3699, sent: 0, txs: 1 },
    { wallet: "0x5532d65385e664eef604976354608a9dc4d9ae7c", net: 3699, received: 3699, sent: 0, txs: 1 },
    { wallet: "0xdaffdcbca50c6c35505460db58c0fc29ca19534f", net: 3288, received: 3288, sent: 0, txs: 1 },
    { wallet: "0x295fc34f1742c4e8bd1bfeb3711be567919fa72d", net: 2506, received: 335290, sent: 332784, txs: 4 },
    { wallet: "0x4dc40a8d58772fa690b910a559203e7e2f18b067", net: 2466, received: 2466, sent: 0, txs: 1 },
    { wallet: "0x1aba1313639cae8325c10d0d3f83015c0e771d2e", net: 1644, received: 1644, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 1499, received: 1499, sent: 0, txs: 6 },
    { wallet: "0xf0cfda08ec71c392d0cab07faddb1d7a68a8638b", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x27ace13e9949900af2c5fdc1ad2aeb36b1e443a0", net: 959, received: 959, sent: 0, txs: 1 },
    { wallet: "0xc9b0c04bbffbcbd534fc9a45c3a024fb66389e83", net: 959, received: 959, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0xd9934e17ba7e6a415dfd87442df0b9b09f08af78", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x722a6b207b2d49cc27bb2806d4de7b65d47a97b3", net: 274, received: 274, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xd4ecca8f08ac6fadaed2cb141637c95ee4c74d43", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x104ce1232266869b3519daabc7516260ca389628", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x25c2eaa0357c5b843ecee2f93f9d5a5e972307b8", net: 28, received: 28, sent: 0, txs: 1 },
    { wallet: "0x67336cec42645f55059eff241cb02ea5cc52ff86", net: 3, received: 92428, sent: 92425, txs: 2 },
    { wallet: "0x4d19ebade5c0a07259f75474a765c6f2529b35d6", net: 1, received: 4661, sent: 4659, txs: 2 },
    { wallet: "0xe06cdd36c3fb35f6ffb5933369595770da829419", net: 0, received: 568999, sent: 568999, txs: 30 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 153514, sent: 153514, txs: 22 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 153514, sent: 153514, txs: 22 },
    { wallet: "0x284d3202aa7147307bfe55c3791254adb1a2be11", net: 0, received: 4213, sent: 4213, txs: 2 },
    { wallet: "0x93226facb193212295a9bd0b2c45481c62e85a05", net: 0, received: 41918, sent: 41918, txs: 3 },
    { wallet: "0xcaf0beadeaefc66fef60ac6526ab566d58c8647a", net: 0, received: 835, sent: 835, txs: 2 },
    { wallet: "0x97d930e4a1554184e7d736ba0e07c6c301955135", net: 0, received: 835, sent: 835, txs: 2 },
    { wallet: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", net: 0, received: 1149280, sent: 1149280, txs: 2 },
    { wallet: "0x6532c2c4d01f27712586509a369166b5948c442a", net: 0, received: 5753, sent: 5753, txs: 2 },
    { wallet: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", net: 0, received: 1149280, sent: 1149280, txs: 2 },
    { wallet: "0xb57ff6e684ff7f7732f4e4d21069e90d567c0f30", net: 0, received: 274, sent: 274, txs: 2 },
    { wallet: "0x22a607be5bf946935def3b7b5bd3310b4f81cead", net: 0, received: 2192, sent: 2192, txs: 3 },
    { wallet: "0x4d4e14fbdf6bb02b6e036f86f120f00abe41c791", net: 0, received: 124812, sent: 124812, txs: 2 }
];

const WHALE_LABELS = {

};
