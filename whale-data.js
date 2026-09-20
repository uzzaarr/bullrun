// INX Whale Tracker Data
// Source: Etherscan V2 — Auto-refreshed every 6h via GitHub Actions
// Whale threshold: 100,000 INX | Last 24h window

const WHALE_LAST_UPDATED      = "September 20, 2026 at 08:08 PM UTC";
const WHALE_THRESHOLD         = 100000;
const WHALE_TRANSFERS_SCANNED = 225;
const WHALE_TOTAL_VOLUME      = 19624605;
const WHALE_BIGGEST_SINGLE    = 1360274;

const WHALE_TRANSFERS = [
    { hash: "0x0b8896f6cfc8fb5390564e33838c2ce268eadea23ae4609777a32afebd83db64", ts: 1789934303, from: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", to: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", amount: 820330, block: 26020968, type: "transfer" },
    { hash: "0xabc10e50ea7e14be1d95f39fd02a2991c16f51e8a91a0a9b3257ed0037582b69", ts: 1789934135, from: "0x09fc9b7545020f6a51d113e495e0a451597969d3", to: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", amount: 820330, block: 26020954, type: "transfer" },
    { hash: "0x40faa8571038ad199f6445680a27794ae830ee65ae0a020baf142b14898ba0e9", ts: 1789922171, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", amount: 170595, block: 26019961, type: "buy" },
    { hash: "0x03619190bbe302dcd1c6259c94ec3a3e0739f1323db5274a8684eb6a51721fe4", ts: 1789920683, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 26019838, type: "buy" },
    { hash: "0xdd5829f042af4f740a9b6f426c89c9db761f5706439315cbe561fd7de40e8741", ts: 1789915259, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 26019387, type: "buy" },
    { hash: "0x8b7155af2b877917f73998ab7884bc46d0d023c72256aa60c6be8447e5d46ec0", ts: 1789914155, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0xcacaf630e1068f44424782cb0fa62db186c719da", amount: 1360274, block: 26019295, type: "transfer" },
    { hash: "0x90c0539c9c62a2cf8854a861c28865d488e2e10e607256283dcb79f77d16abe6", ts: 1789899959, from: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 820330, block: 26018113, type: "transfer" },
    { hash: "0x89d953391ec2d3b3877eeaf0137156ece76fd1164fa0fbc3525ce8ebbcb8e158", ts: 1789898915, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x09fc9b7545020f6a51d113e495e0a451597969d3", amount: 820164, block: 26018026, type: "transfer" },
    { hash: "0xcc4e68ddce680a8f889df2a5fc8d1c163077a3f74ffc6e82428f0ea89e791f4a", ts: 1789896419, from: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", to: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", amount: 820330, block: 26017819, type: "transfer" },
    { hash: "0xf82c491647f2bcd19e8b1ab53f41ffce0d08caf9c22dde70ea99bb805ce607e7", ts: 1789896131, from: "0x09fc9b7545020f6a51d113e495e0a451597969d3", to: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", amount: 820330, block: 26017796, type: "transfer" },
    { hash: "0x54b189e1fc987af2f38e654f823323f4b4e5277d37d4bf7a2c0dcc202d85853c", ts: 1789894475, from: "0xa33c6a5d7a8e1d8adf83843ece910f8c53b1a69d", to: "0x58edf78281334335effa23101bbe3371b6a36a51", amount: 399930, block: 26017658, type: "transfer" },
    { hash: "0xef530ad4832ccae3fe2881ce374239a59c3a666e7e88e18e8cd67c910a188288", ts: 1789893911, from: "0x9642b23ed1e01df1092b92641051881a322f5d4e", to: "0xa33c6a5d7a8e1d8adf83843ece910f8c53b1a69d", amount: 399930, block: 26017611, type: "transfer" },
    { hash: "0xb13e36b9860f39872b64d005b3afbba36bf0266dd39c8bb04532007c7be9ade9", ts: 1789892519, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x09fc9b7545020f6a51d113e495e0a451597969d3", amount: 1142292, block: 26017496, type: "transfer" },
    { hash: "0x6063f7dbaa0b2bf6591dc4ca4517fd3be968986124609fa5fae54776e13b5dee", ts: 1789889663, from: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 166895, block: 26017259, type: "sell" },
    { hash: "0x8926a80a4621c70763d28ca22c5f95b1e8eaca1143715d7684084a26001e1e5a", ts: 1789888595, from: "0x4e08a9dcfb633023fca9911606edc09ffe7c193b", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 249613, block: 26017170, type: "sell" },
    { hash: "0xe2ac7b87b27b1b5fee816bb15b00f91c0b8920f3192f0c7762bb6e45a79e44ec", ts: 1789888535, from: "0x5b541e24549120344553537ca153df8c7436dc0a", to: "0x4e08a9dcfb633023fca9911606edc09ffe7c193b", amount: 375000, block: 26017165, type: "transfer" },
    { hash: "0x4a9a4b4cb42e5a675f21576578ccb68c98c5f1b42305146099bbd61c53831fb7", ts: 1789886375, from: "0x67336cec42645f55059eff241cb02ea5cc52ff86", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 163971, block: 26016985, type: "sell" },
    { hash: "0xf06962c4ccdb9d612af1e584936f8cef170062fd7490f0b7c640d172a902027d", ts: 1789886087, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 26016961, type: "sell" },
    { hash: "0x3ecdab57c11a82d9fc321b26c78f4b9215a27fe973a717e2a0c7f9351a68393e", ts: 1789885547, from: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 1166544, block: 26016916, type: "transfer" },
    { hash: "0x90c8230f58e49b64bc7cd14fa6a9a81451b71c71192cc8841fef6f0aedbe6dc1", ts: 1789882055, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", amount: 168482, block: 26016627, type: "buy" },
    { hash: "0xfcd42e2e7417d8475c8af99330365c66816d4a2b8b4bde9ac465946bdc26c07f", ts: 1789881695, from: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", to: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", amount: 1166544, block: 26016598, type: "transfer" },
    { hash: "0x957d9672b24366efc1296e7c8446006a4461cb8d830f874b496807ff8749d5d9", ts: 1789881503, from: "0x09fc9b7545020f6a51d113e495e0a451597969d3", to: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", amount: 1166544, block: 26016582, type: "transfer" },
    { hash: "0x20c13740f8de41dac2ea24950dbdf566fd1d82f47ea48d8020ce9ffc53735593", ts: 1789880915, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", amount: 100000, block: 26016533, type: "buy" },
    { hash: "0x0f603ed7c1c5a9955af7e52d087b61564c1cb3117a14e290386cbae3a03843e9", ts: 1789877567, from: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 100000, block: 26016254, type: "sell" },
    { hash: "0x902c2c42cba9982a5b9fa1b66ebd3680ad7520756cfad20bc39679ac25aebabd", ts: 1789874627, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x67336cec42645f55059eff241cb02ea5cc52ff86", amount: 151520, block: 26016009, type: "buy" },
    { hash: "0x4ae2f0d21711c703f08da70736047f1989cc73a1bdbc5c822522ff7da0943826", ts: 1789873091, from: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", to: "0x09fc9b7545020f6a51d113e495e0a451597969d3", amount: 1172415, block: 26015883, type: "transfer" },
    { hash: "0xcfdc682499dcb2677ded5d43a9f8a8ad2efce18209e7ef5cd5a9ae40e56ca237", ts: 1789872311, from: "0x67336cec42645f55059eff241cb02ea5cc52ff86", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 163966, block: 26015818, type: "sell" },
    { hash: "0xd12d7349e5effcd07febbc02b5447d8ae84f6cb666c3310d6b66626e6058e106", ts: 1789866707, from: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", to: "0xce5422d95915914c89590c057fbebb3d328cd3d6", amount: 130595, block: 26015354, type: "transfer" },
    { hash: "0xd12d7349e5effcd07febbc02b5447d8ae84f6cb666c3310d6b66626e6058e106", ts: 1789866707, from: "0x8f10b468b06c6fd214b65f87778827f7d113f996", to: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", amount: 130595, block: 26015354, type: "transfer" },
    { hash: "0xd12d7349e5effcd07febbc02b5447d8ae84f6cb666c3310d6b66626e6058e106", ts: 1789866707, from: "0x000000000004444c5dc75cb358380d2e3de08a90", to: "0x8f10b468b06c6fd214b65f87778827f7d113f996", amount: 130595, block: 26015354, type: "buy" },
    { hash: "0x8573e0c79e1f6e070b291496066e1157a3e606a2ffe8dc170be73d77305afdcb", ts: 1789866635, from: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 167822, block: 26015348, type: "sell" },
    { hash: "0x2d4b78d9c2fbba604f85125b6bb996f2d6d746a9d939b8eb176f76358370e524", ts: 1789863995, from: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", to: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", amount: 1199208, block: 26015128, type: "transfer" },
    { hash: "0x968a1db2d4b4b8e2ca4a26f587334fb1e8c895e15ba7e37106883d78ee349068", ts: 1789861211, from: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", to: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", amount: 1199208, block: 26014898, type: "transfer" },
    { hash: "0xe794e98a4164a099b2780787c22db50e10730e6843b87cb52e1acb4d54c797d5", ts: 1789861019, from: "0x09fc9b7545020f6a51d113e495e0a451597969d3", to: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", amount: 1199208, block: 26014882, type: "transfer" },
    { hash: "0x709b1de7fe86216770dd1823d2011c474a35fd1fb55cb7af5e694f7c4f47637c", ts: 1789858895, from: "0xc78974d8943d9bb43726c7e24bc762c740bc150c", to: "0x19888e92ee029e6641e178ebd2346fc1f7d845bd", amount: 124932, block: 26014705, type: "transfer" },
    { hash: "0x1b75c4e545dd852d27c694a1a2c00576557e7aa75cc6c0e93ed83f7e5de2bcbf", ts: 1789852883, from: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 168581, block: 26014209, type: "sell" },
    { hash: "0xd52fdb621560a242ec77793136f60504c7fc424090da30cacb8b8b7c46d9b141", ts: 1789851947, from: "0x8ca0a5d199f81775fc19da348828f2dc872eab44", to: "0x000000000004444c5dc75cb358380d2e3de08a90", amount: 167532, block: 26014133, type: "sell" }
];

const WHALE_ACCUMULATORS = [
    { wallet: "0xcacaf630e1068f44424782cb0fa62db186c719da", net: 1360274, received: 1360274, sent: 0, txs: 1 },
    { wallet: "0x33ba873aa26b9c44c311e44bfd502dc7ad9cda8a", net: 820330, received: 4006411, sent: 3186081, txs: 7 },
    { wallet: "0x58edf78281334335effa23101bbe3371b6a36a51", net: 399930, received: 399930, sent: 0, txs: 1 },
    { wallet: "0x95ef63fe9acc3e0bd5a44f4cd878ba730d93365f", net: 172182, received: 339077, sent: 166895, txs: 3 },
    { wallet: "0xce5422d95915914c89590c057fbebb3d328cd3d6", net: 164188, received: 164188, sent: 0, txs: 2 },
    { wallet: "0x4e08a9dcfb633023fca9911606edc09ffe7c193b", net: 125001, received: 375000, sent: 249999, txs: 3 },
    { wallet: "0x19888e92ee029e6641e178ebd2346fc1f7d845bd", net: 124932, received: 124932, sent: 0, txs: 1 },
    { wallet: "0x5618ec2a0accfe92ea6c2b77676dee7342225797", net: 100000, received: 300000, sent: 200000, txs: 5 },
    { wallet: "0xbdb3ba9ffe392549e1f8658dd2630c141fdf47b6", net: 77258, received: 328952, sent: 251694, txs: 18 },
    { wallet: "0x67336cec42645f55059eff241cb02ea5cc52ff86", net: 62415, received: 850678, sent: 788263, txs: 18 },
    { wallet: "0x0d0707963952f2fba59dd06f2b425ace40b492fe", net: 51209, received: 3186081, sent: 3134872, txs: 6 },
    { wallet: "0xc07f8b8d4b5a5c7cc420267c3f50eb0c9e72f306", net: 33562, received: 33562, sent: 0, txs: 1 },
    { wallet: "0x716e3fad60bc867449795cd624da34aab3dc381f", net: 31913, received: 31913, sent: 0, txs: 1 },
    { wallet: "0x4ff5b0458a34e755998b0b3b8e844dbc4a2e7be8", net: 31203, received: 31203, sent: 0, txs: 1 },
    { wallet: "0x303b1bce3fa46bb73bd8a03d592720771b6a144d", net: 22603, received: 22603, sent: 0, txs: 1 },
    { wallet: "0x49e1bf431e9bbbd8e57afcd21ccac3f30e7d98d3", net: 19910, received: 19910, sent: 0, txs: 2 },
    { wallet: "0xd9aee597807ed7378afcec2a00beee874271f185", net: 18110, received: 32220, sent: 14110, txs: 4 },
    { wallet: "0x4d53d9e26021474ffc67f84f157fefb9e14b3a81", net: 17245, received: 17245, sent: 0, txs: 1 },
    { wallet: "0xb1f73785b99fd3b1fd374277b818c30efeab7196", net: 16027, received: 16027, sent: 0, txs: 1 },
    { wallet: "0x0faeb60e1b406c2f84454f169a2512a5792e1aa8", net: 14882, received: 14882, sent: 0, txs: 1 },
    { wallet: "0x1ef272a3d6d0d07dd1ef065bb5238786e46d8d8c", net: 10137, received: 10137, sent: 0, txs: 1 },
    { wallet: "0x2cff890f0378a11913b6129b2e97417a2c302680", net: 4899, received: 4899, sent: 0, txs: 4 },
    { wallet: "0xfaa78f45f59770b9274d19bf7bf9b0a10fd5a851", net: 3973, received: 3973, sent: 0, txs: 1 },
    { wallet: "0xab782bc7d4a2b306825de5a7730034f8f63ee1bc", net: 3908, received: 3908, sent: 0, txs: 1 },
    { wallet: "0x2a76a5be3bca8200f7810600ed9201103746810b", net: 1507, received: 1507, sent: 0, txs: 1 },
    { wallet: "0x8e4a9eaf1d9f77251cb4d1a2403f623f4898afd6", net: 1370, received: 1370, sent: 0, txs: 1 },
    { wallet: "0x88c40cd47ec72e481051c1c495fd0e7a23a30cee", net: 1096, received: 1096, sent: 0, txs: 1 },
    { wallet: "0x40b2f1262a394a69f4446ceebca52bc58eb92bf4", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x047f273577c00fdc1f8dc66d922e9d15052afa4c", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xe29bbf09fae143386e1beb340be522a84526d0f6", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0x4c654d89e95a3fc24d9dd51f4dc85c0cdc5761e2", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xde93720d9e834a3f786839bc327746df8c1f3727", net: 822, received: 822, sent: 0, txs: 1 },
    { wallet: "0xbd9f8fd1aa30f9e35fdecba1c255c9d6e35b8822", net: 500, received: 500, sent: 0, txs: 1 },
    { wallet: "0xd32c062c12c2d10bec0187dd334cc15e0367f9ac", net: 459, received: 459, sent: 0, txs: 7 },
    { wallet: "0x5d73e31d8588d928d2dcbea05dc8038d86730bf5", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x2cf2763188b3aa9a393f31e951f6de01f86d1ab3", net: 411, received: 411, sent: 0, txs: 1 },
    { wallet: "0x1b8574dd35db41fa8bce680bc7fd4f59edf89192", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0xf208a16191afc75d6de112568cdc86b30dfbdabf", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x7eb981f2dcac204ae022cb37cf7f186b5f7d0eef", net: 137, received: 137, sent: 0, txs: 1 },
    { wallet: "0x9008d19f58aabd9ed0d60971565aa8510560ab41", net: 20, received: 17266, sent: 17245, txs: 2 },
    { wallet: "0xb2276595fc9560a536bdbb99e143a42122d45b6f", net: 3, received: 3, sent: 0, txs: 1 },
    { wallet: "0xac9da6761ef80644a3bb9ab7e590cf4e64be084f", net: 0, received: 4006411, sent: 4006411, txs: 8 },
    { wallet: "0x66a9893cc07d91d95644aedd05d03f95e1dba8af", net: 0, received: 56165, sent: 56165, txs: 2 },
    { wallet: "0x006d0e0d006109f0020f3050000a713780b7b000", net: 0, received: 56165, sent: 56165, txs: 2 },
    { wallet: "0x8043d0f1069e572887526342dc5a081c771caba9", net: 0, received: 56165, sent: 56165, txs: 2 },
    { wallet: "0xa8a3f6700647a5cbcd56a91732b4f222663d3238", net: 0, received: 56165, sent: 56165, txs: 2 },
    { wallet: "0x300ce031db871dda32837b0444b386c0958bafff", net: 0, received: 14882, sent: 14882, txs: 2 },
    { wallet: "0x8f10b468b06c6fd214b65f87778827f7d113f996", net: 0, received: 165723, sent: 165723, txs: 6 },
    { wallet: "0xb92fe925dc43a0ecde6c8b1a2709c170ec4fff4f", net: 0, received: 171682, sent: 171682, txs: 10 },
    { wallet: "0xad729fcd02e52938c29284d0ab3b4f1c3f66802c", net: 0, received: 822, sent: 822, txs: 2 }
];

const WHALE_LABELS = {

};
