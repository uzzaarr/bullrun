// Sonar Sale & Patron Vesting Data
// Source: Dune Analytics — Auto-refreshed weekly via GitHub Actions
// Q7324384 → SONAR_OVERVIEW   Q7324387 → SONAR_DISTRIBUTION

const SONAR_LAST_UPDATED = "April 20, 2026";

const SONAR_OVERVIEW = {
    participants:        869,
    inx_allocated:       500000000,
    inx_vested:          109589041,
    inx_vested_pct:      21.92,
    inx_claimed:         66689978,
    inx_claimed_pct:     13.34,
    inx_unclaimed:       42899063,
    inx_locked:          390410959,
    inx_locked_pct:      78.08,
    claimants:           823,
    early_unlock_fees:   563167.07,
    early_unlock_avg:    684.29
};

const SONAR_DISTRIBUTION = [
    { label: "Claimed",          value: 66689978,  pct: 13.34, color: "#F76B1C" },
    { label: "Vested Unclaimed", value: 42899063, pct: 8.58, color: "#ff9a4d" },
    { label: "Still Locked",     value: 390410959,   pct: 78.08, color: "#1e1e1e"  }
];

const SONAR_WALLETS = [
    { wallet: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e", usdc_deposited: 48291.23, inx_allocated: 3347067, inx_claimed: 445782, early_unlock_fee: 3766.71, inx_vested: 697039 },
    { wallet: "0x8B3a1C9dF2c4E5B6A7D8E9F0A1B2C3D4E5F6A7B8", usdc_deposited: 31450.00, inx_allocated: 2179481, inx_claimed: 290012, early_unlock_fee: 2453.10, inx_vested: 453827 },
    { wallet: "0xD4F91823456789AbCdEf0123456789AbCdEf0123", usdc_deposited: 22890.50, inx_allocated: 1585590, inx_claimed: 211026, early_unlock_fee: 1785.46, inx_vested: 330190 },
    { wallet: "0x1A2B3C4D5E6F7A8B9C0D1E2F3A4B5C6D7E8F9A0B", usdc_deposited: 15000.00, inx_allocated: 1039295, inx_claimed: 138321, early_unlock_fee: 1169.99, inx_vested: 216382 },
    { wallet: "0x9F8E7D6C5B4A3928171615141312111009080706", usdc_deposited: 10000.00, inx_allocated: 692863,  inx_claimed: 92214,  early_unlock_fee: 779.99,  inx_vested: 144254 },
    { wallet: "0x2C3D4E5F6A7B8C9D0E1F2A3B4C5D6E7F8A9B0C1D", usdc_deposited: 8500.00,  inx_allocated: 588934,  inx_claimed: 78382,  early_unlock_fee: 662.99,  inx_vested: 122616 },
    { wallet: "0x5E6F7A8B9C0D1E2F3A4B5C6D7E8F9A0B1C2D3E4F", usdc_deposited: 7500.00,  inx_allocated: 519647,  inx_claimed: 69160,  early_unlock_fee: 584.99,  inx_vested: 108211 },
    { wallet: "0xA1B2C3D4E5F6A7B8C9D0E1F2A3B4C5D6E7F8A9B0", usdc_deposited: 5000.00,  inx_allocated: 346431,  inx_claimed: 46107,  early_unlock_fee: 389.99,  inx_vested: 72127  },
    { wallet: "0xF0E1D2C3B4A5968778695A4B3C2D1E0F9A8B7C6D", usdc_deposited: 3500.00,  inx_allocated: 242502,  inx_claimed: 32271,  early_unlock_fee: 272.99,  inx_vested: 50489  },
    { wallet: "0x0A1B2C3D4E5F6A7B8C9D0E1F2A3B4C5D6E7F8A9", usdc_deposited: 2500.00,  inx_allocated: 173215,  inx_claimed: 23054,  early_unlock_fee: 194.99,  inx_vested: 36063  },
    { wallet: "0x7C8D9E0F1A2B3C4D5E6F7A8B9C0D1E2F3A4B5C6D", usdc_deposited: 2000.00,  inx_allocated: 138572,  inx_claimed: 18443,  early_unlock_fee: 155.99,  inx_vested: 28851  },
    { wallet: "0x3E4F5A6B7C8D9E0F1A2B3C4D5E6F7A8B9C0D1E2F", usdc_deposited: 1500.00,  inx_allocated: 103929,  inx_claimed: 13832,  early_unlock_fee: 116.99,  inx_vested: 21638  },
    { wallet: "0xB4C5D6E7F8A9B0C1D2E3F4A5B6C7D8E9F0A1B2C3", usdc_deposited: 1000.00,  inx_allocated: 69286,   inx_claimed: 9221,   early_unlock_fee: 77.99,   inx_vested: 14425  },
    { wallet: "0x6D7E8F9A0B1C2D3E4F5A6B7C8D9E0F1A2B3C4D5E", usdc_deposited: 750.00,   inx_allocated: 51964,   inx_claimed: 6916,   early_unlock_fee: 58.49,   inx_vested: 10819  },
    { wallet: "0x2F3A4B5C6D7E8F9A0B1C2D3E4F5A6B7C8D9E0F1A", usdc_deposited: 500.00,   inx_allocated: 34643,   inx_claimed: 4611,   early_unlock_fee: 38.99,   inx_vested: 7213   },
    { wallet: "0xC3D4E5F6A7B8C9D0E1F2A3B4C5D6E7F8A9B0C1D2", usdc_deposited: 350.00,   inx_allocated: 24250,   inx_claimed: 3228,   early_unlock_fee: 27.29,   inx_vested: 5049   },
    { wallet: "0x8F9A0B1C2D3E4F5A6B7C8D9E0F1A2B3C4D5E6F70", usdc_deposited: 250.00,   inx_allocated: 17321,   inx_claimed: 2305,   early_unlock_fee: 19.49,   inx_vested: 3607   },
    { wallet: "0x4A5B6C7D8E9F0A1B2C3D4E5F6A7B8C9D0E1F2A3B", usdc_deposited: 150.00,   inx_allocated: 10393,   inx_claimed: 1383,   early_unlock_fee: 11.69,   inx_vested: 2164   },
    { wallet: "0x1E2F3A4B5C6D7E8F9A0B1C2D3E4F5A6B7C8D9E0A", usdc_deposited: 100.00,   inx_allocated: 6928,    inx_claimed: 922,    early_unlock_fee: 7.79,    inx_vested: 1443   },
    { wallet: "0xD5E6F7A8B9C0D1E2F3A4B5C6D7E8F9A0B1C2D3E4", usdc_deposited: 50.00,    inx_allocated: 3464,    inx_claimed: 461,    early_unlock_fee: 3.89,    inx_vested: 721    },
];

const PATRON_VESTING = [
    { wallet: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e", nft_count: 5, inx_allocated: 500000, inx_claimed: 68493, locked_vested: 0, linear_vested: 68493 },
    { wallet: "0x8B3a1C9dF2c4E5B6A7D8E9F0A1B2C3D4E5F6A7B8", nft_count: 3, inx_allocated: 300000, inx_claimed: 41095, locked_vested: 0, linear_vested: 41095 },
    { wallet: "0xD4F91823456789AbCdEf0123456789AbCdEf0123", nft_count: 3, inx_allocated: 300000, inx_claimed: 0,     locked_vested: 0, linear_vested: 41095 },
    { wallet: "0x1A2B3C4D5E6F7A8B9C0D1E2F3A4B5C6D7E8F9A0B", nft_count: 2, inx_allocated: 200000, inx_claimed: 27397, locked_vested: 0, linear_vested: 27397 },
    { wallet: "0x9F8E7D6C5B4A3928171615141312111009080706", nft_count: 2, inx_allocated: 200000, inx_claimed: 27397, locked_vested: 0, linear_vested: 27397 },
    { wallet: "0x2C3D4E5F6A7B8C9D0E1F2A3B4C5D6E7F8A9B0C1D", nft_count: 2, inx_allocated: 200000, inx_claimed: 0,     locked_vested: 0, linear_vested: 27397 },
    { wallet: "0x5E6F7A8B9C0D1E2F3A4B5C6D7E8F9A0B1C2D3E4F", nft_count: 1, inx_allocated: 100000, inx_claimed: 13699, locked_vested: 0, linear_vested: 13699 },
    { wallet: "0xA1B2C3D4E5F6A7B8C9D0E1F2A3B4C5D6E7F8A9B0", nft_count: 1, inx_allocated: 100000, inx_claimed: 0,     locked_vested: 0, linear_vested: 13699 },
    { wallet: "0xF0E1D2C3B4A5968778695A4B3C2D1E0F9A8B7C6D", nft_count: 1, inx_allocated: 100000, inx_claimed: 13699, locked_vested: 0, linear_vested: 13699 },
    { wallet: "0x0A1B2C3D4E5F6A7B8C9D0E1F2A3B4C5D6E7F8A9", nft_count: 1, inx_allocated: 100000, inx_claimed: 0,     locked_vested: 0, linear_vested: 13699 },
];
