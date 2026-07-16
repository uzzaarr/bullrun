// INX Whale Swap History
// Source: Etherscan V2 — whale DEX swaps (≥100K INX) since TGE (Jan 30 2026)
// Auto-refreshed every 6h via GitHub Actions | Updated: July 16, 2026 at 02:32 PM UTC

const TRADES_LAST_UPDATED = "July 16, 2026 at 02:32 PM UTC";

const TRADES_HISTORY = [
  { hash: "0x5c563acadc0e4216fac3d938cfc93ac552d9932b8d0b541ddfe08a70b9dee71b", ts: 1784210951, type: "transfer", inx: 144794 },
  { hash: "0x32ae7002d49b3a1665330696ea8212850c7b14e54c3a5ea9d8290b2829a86085", ts: 1784195375, type: "transfer", inx: 289863 },
  { hash: "0xaa71e5ca4a5089ec3244e8f2ccbf5a0e3b1c76321d768c3becdfb27ad374f215", ts: 1784192591, type: "transfer", inx: 591781 },
  { hash: "0x3f38dbc80cc3bd1f72011e2ecefb1e0ab5430d45c22ff1455749da3899f09d30", ts: 1784172551, type: "transfer", inx: 159848 },
  { hash: "0xbbd307c4bec4ad99659384795e4f676ab9b1346ac7ce9449a6389969edd553e7", ts: 1784116571, type: "transfer", inx: 119718 },
  { hash: "0xe1a8158a99795630f762b873c31523926f0d074dc579c0f54be72e68e18ee2e8", ts: 1784116103, type: "transfer", inx: 119718 },
  { hash: "0xf38e5b4ce1e3c397516bc5314322bc5c9aa79f61f6f7b855cb6ef1fa4b1d57d7", ts: 1784090075, type: "transfer", inx: 731520 },
  { hash: "0x9c124921f2af28141b7ecba711eb37ec2a73da6ede86a0afc341bb72d9489f91", ts: 1784089631, type: "transfer", inx: 731520 },
  { hash: "0xef23fce8ed25fab9de2301ee3ec37fc0e150d737d33854b43f258da9a5e61aa9", ts: 1784089439, type: "transfer", inx: 689371 },
  { hash: "0xd3ae80fb69a0ab46392c0a3c6c3207976ee90b51d674a68102573b235c4e2f1b", ts: 1784089391, type: "transfer", inx: 689371 },
  { hash: "0xd80aa69c095c4cb44bd0abc3e5915218b8c4b260136f2490046772c7db2ec65a", ts: 1784089187, type: "transfer", inx: 690411 },
  { hash: "0x464e49af34c7f582abb95ffd80460b4b44a3cce33b302fd1f4fb6f14829c3598", ts: 1784089091, type: "transfer", inx: 690411 },
  { hash: "0xf14aaabbfcf8125ed05c453646fbb330c01366ed402012dad02debbc2fe78eb2", ts: 1784081039, type: "transfer", inx: 1591233 },
  { hash: "0xf2ce65929b958a7ba26e3db6273b4a9fbdfd60c44bc8fd6e6f247683a3e38efe", ts: 1784018435, type: "transfer", inx: 200000 },
  { hash: "0x7599d2498db397f5a4fd9406d11f83f7b6f38f25ba531987c326f574519b8938", ts: 1783983527, type: "transfer", inx: 252877 },
  { hash: "0x32471b17688e1916f3cf8597c7cf0fd322d2ef3b1189ab2767bb4320ac3ddffa", ts: 1783907507, type: "transfer", inx: 142055 },
  { hash: "0xd5e5c34120218a386b31ac10f2bc3e2690d02f821f7cfcdabb4915f356aae5ba", ts: 1783893719, type: "transfer", inx: 356557 },
  { hash: "0x811badea4e22d736999269d65cd05e49dd2735fad0b7db8835e0a0bad3722a25", ts: 1783887071, type: "transfer", inx: 475270 },
  { hash: "0x8f54c598e45981a4583aa0ef632699da6a2fd93e3e1ce30d780fa4679dc5c2b7", ts: 1783838915, type: "transfer", inx: 162740 },
  { hash: "0x402241789bf0f32658c78af382bd87e951c6e5902a85f8d1eae3485a4ad8fe1f", ts: 1783793567, type: "transfer", inx: 380579 },
  { hash: "0xe28f11f7503e2c9568102a3a11b3980298edad5e9d9d1c06038b34ad9793e5c3", ts: 1783793075, type: "transfer", inx: 380579 },
  { hash: "0xe48dcccf2e84a1e7496df74faffe8ea8e3f5c8b62af941212c1941d27e8be145", ts: 1783774271, type: "transfer", inx: 3366180 },
  { hash: "0x934c6084221d7625671104edbfc46c369cba98950f1441cf81e8f48c0bf238b6", ts: 1783692875, type: "transfer", inx: 141382 },
  { hash: "0x16bef469df61fcc801d49036b6444754f111410f665a3bd5a6872eb83e81e3e5", ts: 1783692563, type: "transfer", inx: 141382 },
  { hash: "0x4ec01c1a4909f7d8ec057f5626e3d392e5d497f806f3ee6a4b653e956e5b407e", ts: 1783692239, type: "transfer", inx: 141918 },
  { hash: "0xdb93899d07b0da399cfa2806382f53a65eed708f825f401983a277e6fe5dbfec", ts: 1783685195, type: "transfer", inx: 673177 },
  { hash: "0x411f1889a43d90009ac5f9ee5110dd910805b64337401e22e28003c2039966fb", ts: 1783661243, type: "transfer", inx: 1000000 },
  { hash: "0x6516ef5327e9b97040dc8818645f723eec550f0b10445f04eac74ea7bec95331", ts: 1783660451, type: "transfer", inx: 2500000 },
  { hash: "0x23dad96177a9db572bbabc963b09d6d5daedcbab60f38ad988f1ef3cb80dd6fd", ts: 1783660139, type: "transfer", inx: 2500000 },
  { hash: "0x1c2d7c7bec47431b37cd08706b55fca98b656ad24bfbc7dda794e33e8b8097df", ts: 1783599143, type: "transfer", inx: 243593 },
  { hash: "0xe29b726f3fd185e86cb3fd6640b0d15e2bb228c65bb0131f3764498c6d6b19b7", ts: 1783584671, type: "transfer", inx: 119807 },
  { hash: "0x69d0675574267fe4d50e5628e79bac9f165677ed0164e7a31a54dccc39d3ebbe", ts: 1783570667, type: "sell", inx: 139021 },
  { hash: "0x59aac18e0db4b3f3691be58faee352bb0b6149dce269ac9d90b702d94912f816", ts: 1783568219, type: "transfer", inx: 138882 },
  { hash: "0x82768e8496115292ec306717cd01842da78858e9b571264f7a47c39e16709e50", ts: 1783568051, type: "buy", inx: 278042 },
  { hash: "0xd90a21e6910b998bd81f9e33862775cc7629034fbe2bf66f04f8f290fc39106a", ts: 1783566827, type: "transfer", inx: 277260 },
  { hash: "0x489fb3d8ae1cc17c6f91e152a4e6ffb7fc10402abba195ab5bdc87e1aa190672", ts: 1783554719, type: "transfer", inx: 116050 },
  { hash: "0x888bd2c8ebb98b2d3a4ab724eec1eba479fc87d84ba8b65a732cdb05b7c60493", ts: 1783554167, type: "transfer", inx: 116050 },
  { hash: "0x5c3e0a3f9126b5b0a6526d82679ab02dbbe17780efb03ea43cf0b046045968dc", ts: 1783546223, type: "transfer", inx: 105616 },
  { hash: "0xa4dc83fa4c51065e80a045a21d45b98afb5e3e5ee4348f99beee9b1db2910e77", ts: 1783525763, type: "transfer", inx: 303208 },
  { hash: "0x85233e75e34a1b0b66d6d8d742fa68673b2a941c5e6396da32f5da1e55d07615", ts: 1783515419, type: "transfer", inx: 392241 }
];
