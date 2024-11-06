import { defineChain } from "viem";
import { chainConfig } from "viem/op-stack";

const sourceId = 11_155_111; // Sepolia

export const hemiSepolia = defineChain({
  ...chainConfig,
  id: 743_111,
  name: "Hemi Sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://testnet.rpc.hemi.network/rpc"],
      webSocket: ["wss://testnet.rpc.hemi.network/wsrpc"],
    },
    opNode: {
      http: ["https://testnet.rpc.hemi.network/noderpc"],
    },
  },
  blockExplorers: {
    default: {
      name: "Hemi Sepolia Explorer",
      url: "https://testnet.explorer.hemi.xyz",
    },
  },
  contracts: {
    addressManager: {
      [sourceId]: {
        address: "0x23f0022354241FDb721Dc43E7897d7Af662A2995",
      },
    },
    l1CrossDomainMessenger: {
      [sourceId]: {
        address: "0x9bCCCf1d222539c4C47E4C6f5749e4d5fA33215c",
      },
    },
    l1StandardBridge: {
      [sourceId]: {
        address: "0xc94b1BEe63A3e101FE5F71C80F912b4F4b055925",
      },
    },
    l2Bridge: {
      [sourceId]: {
        address: "0x4200000000000000000000000000000000000010",
      },
    },
    l2OutputOracle: {
      [sourceId]: {
        address: "0x032d1e1dd960A4B027a9a35FF8B2b672E333Bc27",
      },
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 556815,
    },
    portal: {
      [sourceId]: {
        address: "0xB6f9579980aE46f61217A99145645341E49E2516",
      },
    },
  },
  testnet: true,
  sourceId,
});
