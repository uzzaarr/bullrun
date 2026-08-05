// INX Whale Swap History
// Source: Etherscan V2 — whale DEX swaps (≥100K INX) since TGE (Jan 30 2026)
// Auto-refreshed every 6h via GitHub Actions | Updated: August 5, 2026 at 03:43 AM UTC

const TRADES_LAST_UPDATED = "August 5, 2026 at 03:43 AM UTC";

const TRADES_HISTORY = [
  { hash: "0x759ebe01b1b9dbca9f90b788b30a9f668e34b6503b218a5e679e718db757bd5b", ts: 1785882335, type: "transfer", inx: 4469610 },
  { hash: "0x073b5816222cdeda488ca06b6f0e0877d5b28f62aac38c4d5baebe5fcd698b74", ts: 1785879059, type: "transfer", inx: 4469610 },
  { hash: "0xebe3eeea0973d5f95d3df01015a856be4f7898b6742eba46e711019ed1f9b2e5", ts: 1785802115, type: "transfer", inx: 1126037 },
  { hash: "0x78b89cc0c74010e0b7ef832346c70c220d11595441b0056f7828ebf0bb4312d7", ts: 1785801263, type: "transfer", inx: 1126037 },
  { hash: "0x18a8dd5becfaf0a6334733ee6285769281a936385fff42fbed3c4da7a90543c0", ts: 1785801119, type: "transfer", inx: 1115102 },
  { hash: "0xc3a535b95c5d26bf44879b779bcfae30319a78464597a70dfc88db4414449744", ts: 1785801071, type: "transfer", inx: 1115102 },
  { hash: "0xecd27b967cb488fd267853c65ab01d0424db75df988897af5fc8f498b0f23569", ts: 1785800855, type: "transfer", inx: 2071233 },
  { hash: "0xb07991ba2309bbeef8a7774f081263f3fde308eaca936fb36e6bb737b685c426", ts: 1785800663, type: "transfer", inx: 1571918 },
  { hash: "0xdd0bb22ce070112d346fc8d155ff1cbf0023faadf3c96f60413a795e0c8a1dad", ts: 1785770915, type: "sell", inx: 107745 },
  { hash: "0x9bc0085af9680e465ef7586627c19deed4c86d458a39a2ec02e494eb073f0a2e", ts: 1785770867, type: "transfer", inx: 123151 },
  { hash: "0x534da675fd5101a831191ddc9a5e3cdc35575a2b5ae0f225e05d51049ff4e24a", ts: 1785770795, type: "transfer", inx: 123151 },
  { hash: "0xb367fa7ccee06748d308c7beefdf8c908c2f0b92f7220b21e983ab005e841152", ts: 1785766715, type: "transfer", inx: 700000 },
  { hash: "0x280bc3d58f2ee9b7d10d4b0acf67e78c8fbef5633513611ebfdc40eb6dedec30", ts: 1785766295, type: "transfer", inx: 700000 },
  { hash: "0xc0958e8fb9c965e341183d5a5bdbb934df0f31f3797bd24ef3f6c185ad1bff82", ts: 1785759791, type: "transfer", inx: 102161 },
  { hash: "0xbae60f5ed472035bab3201426eb1e6a3e8e894066feeb7aa7e58933069eb7971", ts: 1785759707, type: "sell", inx: 102161 },
  { hash: "0x2e4f8ac25e1ea6cab63c7a57f7653c8389c1e716aae32aa923633aa147191e43", ts: 1785758963, type: "transfer", inx: 1279474 },
  { hash: "0x6f80e2913eae4e340ab44002800c3d29e5ed6f55ab4763c506c649a46c6fa944", ts: 1785696707, type: "transfer", inx: 149203 },
  { hash: "0x032cdd20d39d46b1ac0d3f2b0ee4caf7c87719b538e53d64f93561a86b7a7c2c", ts: 1785696311, type: "transfer", inx: 149203 },
  { hash: "0xc2315831d5191a481ec7469381fd447b78de12cfa6ed5ccb438e9a9c4a2aac60", ts: 1785696227, type: "transfer", inx: 100861 },
  { hash: "0x8d7f0cca1c3d32d18c81839f52663c13dd4352141ae1b2370fd6e5454f9e1787", ts: 1785696047, type: "transfer", inx: 100861 },
  { hash: "0xc8b7a9ac0de9256ce319ab334d59a0c45b28bf527110a24cd36b6b10e1f1ba52", ts: 1785695939, type: "transfer", inx: 101000 },
  { hash: "0x1da1b16624aff714d0246c3bf61899926d18e4a458f9a4b5c0099b3eeeb78d7f", ts: 1785695819, type: "transfer", inx: 101096 },
  { hash: "0xe7f70045e91df91d1cd50eee506f009c68e982d2cd174b6bcd4d4c6ece7b7744", ts: 1785666347, type: "transfer", inx: 105067 },
  { hash: "0x2d08e3a02e470d5de772e3181394fbb547b02b4fa57523b165c17cf8565fd273", ts: 1785664151, type: "buy", inx: 105067 },
  { hash: "0xc87d5bcf1a0970aeae72eea756b968ceb64290f1c27a6abd294a95b166f69731", ts: 1785664139, type: "sell", inx: 131990 },
  { hash: "0x9056de419b7070aed2e2f2d7f2d90cacac8de416f91a2f0a8b5b7a6fab32c8bd", ts: 1785664103, type: "transfer", inx: 132192 },
  { hash: "0x727460a58caa9b984502b8605a7a7a750e8c6bd7f1d449d871b6e9db8d022a71", ts: 1785637559, type: "transfer", inx: 2504140 },
  { hash: "0x2b4bd24f651404ac849eca014fbcb99c26791dd183db054b74ba143ffbd3f788", ts: 1785633839, type: "transfer", inx: 2504140 },
  { hash: "0xe3549e8a18b22026cc415e15a917eac3be55f2960c1df1fa9cc3643b8c6ac3e2", ts: 1785633779, type: "transfer", inx: 2504140 },
  { hash: "0x493e160ea2d77c4aea95c23020ea1cb0b81bbe2392f35ed3272145a4b4fc490a", ts: 1785603791, type: "transfer", inx: 117123 },
  { hash: "0xabdf7f982afcd3d9a62517b97264c29c215cab7964d61ac15df7eb30265c1d0e", ts: 1785598007, type: "transfer", inx: 597573 },
  { hash: "0x37ea1cfc226b597750df0a4f558a5ffe67500dda19e01fd0701bbcd6487cc2cd", ts: 1785593075, type: "transfer", inx: 597573 },
  { hash: "0x35a22c86d0779e50e0b2549f2f3f67dd35ff328f01eba2568063166061734683", ts: 1785588683, type: "transfer", inx: 176438 }
];
