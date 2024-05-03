import { defineChain } from "viem"
import { chainConfig } from "viem/op-stack"

const sourceId = 11155111 // Sepolia

export const hemiSepolia = defineChain({
  ...chainConfig,
  id: 743111,
  name: "Hemi Sepolia",
  nativeCurrency: {
    decimals: 18,
    name: "Testnet Hemi Ether",
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
    l1StandardBridge: {
      [sourceId]: {
        address: "0xc94b1BEe63A3e101FE5F71C80F912b4F4b055925",
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
})
