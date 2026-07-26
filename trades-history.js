// INX Whale Swap History
// Source: Etherscan V2 — whale DEX swaps (≥100K INX) since TGE (Jan 30 2026)
// Auto-refreshed every 6h via GitHub Actions | Updated: July 26, 2026 at 02:08 PM UTC

const TRADES_LAST_UPDATED = "July 26, 2026 at 02:08 PM UTC";

const TRADES_HISTORY = [
  { hash: "0x0b9207351346c133d8d573720ade17577e50072c6a5c87ab47f440e5d2bc0111", ts: 1785060947, type: "transfer", inx: 505427 },
  { hash: "0x15c89242934798af62ff3595bbf3498ad3a0299a962a4250266a1d8e86da593e", ts: 1785060743, type: "transfer", inx: 505427 },
  { hash: "0xdf60c2c7dc1365add251c2b93ae1d250c3f3a07892a8f8c58783f6aa23488c0d", ts: 1785060539, type: "transfer", inx: 499248 },
  { hash: "0xbca6684ec65cd0360ab6013bfa5a7b79fff6056d78b591630f33101ad555ece9", ts: 1785060479, type: "transfer", inx: 499248 },
  { hash: "0x3227ecf348aa2594f645841c4527b40074ee31cc4d63bde700d513720adb4d03", ts: 1785060311, type: "transfer", inx: 138889 },
  { hash: "0xb3e42913ccb084ec019b75667817d7642af02142e06fda1c38b26b4ceacdea84", ts: 1784988623, type: "transfer", inx: 159882 },
  { hash: "0x87db1e3fb6ccc32eb5f760528976f96a143654b976b2309f6f9329c2120318cc", ts: 1784885795, type: "transfer", inx: 854795 },
  { hash: "0xba4885ae4bee21a652e66b3836b3aa1e1cf6c43e47d250bc20b7042542ab4c2e", ts: 1784885699, type: "transfer", inx: 569863 },
  { hash: "0x1342b073518e2a05ae9dd5400f5787fb9ad0561600606a7c5de22212a962168d", ts: 1784831063, type: "transfer", inx: 100000 },
  { hash: "0x104e1120b39f96517e0b4efa743dc1fd9b44363df6ffb75fb28a65d10f34d0f5", ts: 1784803175, type: "transfer", inx: 4064307 },
  { hash: "0xb7409af1c170aa73ae77dcad4061ba50c5569f7596eb2a9a81d4b99b3e449cfa", ts: 1784803055, type: "transfer", inx: 7399865 },
  { hash: "0xb38c1f12b6c48c1ae2afbbab73282cb962a646caf68291eb6a9d4e8b38f8815c", ts: 1784787443, type: "transfer", inx: 7618957 },
  { hash: "0xc46f1f564e3efd0bfb78341f953fe6ab53d00e8bc29b00c1909a475379c64e6c", ts: 1784787059, type: "transfer", inx: 7618957 },
  { hash: "0x6b18edb683c225566a4358df416be13a9e70cd4b3711e9ae57ee54f72788db53", ts: 1784741939, type: "transfer", inx: 291507 },
  { hash: "0xc69f49bbfb2af42a15c37ac984b71b4cd40d1018d87e1a1c7966c3fbb2bc44aa", ts: 1784732687, type: "transfer", inx: 111370 },
  { hash: "0xe0032f40b6c59b0b000378974221b30fb56a29ce68d55afe58178ab33e1bb0a7", ts: 1784730251, type: "transfer", inx: 384611 },
  { hash: "0xff97f1b2db1bf5c108b1fbc1deb05797d4da15a6b11eefa19282afe1c0dc265a", ts: 1784721983, type: "transfer", inx: 1131117 },
  { hash: "0xdf85f48dd898b76d68086a5f3525490daa99074ec5e1d4dbdf25b3e52e16f04e", ts: 1784712059, type: "transfer", inx: 308082 },
  { hash: "0x308a231c9aa76fb44edca743fff7b914e58718c88272033074346ea2bd3f561c", ts: 1784699735, type: "transfer", inx: 6849315 },
  { hash: "0xd3d3ea58877ab735858e9a6465f34e550138efaadda85bdc1d7a2f70a77b077b", ts: 1784698679, type: "transfer", inx: 179828 },
  { hash: "0x0cf765f0165e5404949c4da63e2d689857df4adca60f33522fd94d426a1f8498", ts: 1784687483, type: "transfer", inx: 110274 },
  { hash: "0xce06741909b3e8a677a22e3680f8da64d98cf8f235f46099449cdb6462eda84a", ts: 1784652275, type: "transfer", inx: 554795 },
  { hash: "0x28a6d4af482b0e818a4529ee6871d522bddfc40a3469ea72585af540d0939ee0", ts: 1784640395, type: "transfer", inx: 100000 },
  { hash: "0x00c137225e58ef102798fa04c039493f4de8803c2a471871ca09f1255783cd5b", ts: 1784637767, type: "transfer", inx: 258904 },
  { hash: "0x999a720239a42995e6f95a22b63bfb8fb9fea6f9fea31fef23c9182355db3b5d", ts: 1784617991, type: "transfer", inx: 101334 },
  { hash: "0xbc887d3e6b1a523ec62c726012ef2a7c9066048c19e0846814a819ed9b87af5d", ts: 1784617307, type: "transfer", inx: 107534 },
  { hash: "0x5ed790834e8e71c0d03bc1c6eeebf69f8639cfb08ca66ba8002b2471f968c60c", ts: 1784616971, type: "transfer", inx: 147837 },
  { hash: "0x9a0f5fb88ec9b81cfa292a9411d922ff2ada1c7ca4f96e75359c65281c87b801", ts: 1784575859, type: "buy", inx: 124853 },
  { hash: "0xbb7adcee31a5f0ce856bc448439e458c70d11fb05ef9ee63b13b8b62f64564f8", ts: 1784575847, type: "sell", inx: 127414 },
  { hash: "0xf5b4b131f4129bea27e1922dd92e4948e83c01fd67fd8398fe9f13ca9a907c24", ts: 1784575295, type: "transfer", inx: 110548 },
  { hash: "0x44bca85e0f84daf79141a172ddebc8be3ee7d38fd389a0d18dd1223bb61b084e", ts: 1784561195, type: "transfer", inx: 4292487 },
  { hash: "0xd4b144d737ee47b49e3e25062fc58a41fe6a4ac30af0dd3ed8455e3838fb8c41", ts: 1784558435, type: "transfer", inx: 1430829 },
  { hash: "0x89b0beeb7940396af1c387f03267b0e51b7844f190ba46e0ea069e62990324ef", ts: 1784558363, type: "transfer", inx: 5729045 },
  { hash: "0xb1e933f386e9bb408c8e646ff3f8f17c71368c80e08356b72347cd255f03e3f5", ts: 1784535779, type: "transfer", inx: 1520479 }
];
