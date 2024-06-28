import { defineChain } from "viem"
import { chainConfig } from "viem/op-stack"

const sourceId = 1 // Ethereum mainnet

export const hemi = defineChain({
  ...chainConfig,
  id: 43111,
  name: "Hemi Network",
  nativeCurrency: {
    decimals: 18,
    name: "Hemi Ether",
    symbol: "ETH",
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.hemi.network/rpc"],
      webSocket: ["wss://rpc.hemi.network/wsrpc"],
    },
    opNode: {
      http: ["https://rpc.hemi.network/noderpc"],
    },
  },
  blockExplorers: {
    default: {
      name: "Hemi Network Explorer",
      url: "https://explorer.hemi.xyz",
    },
  },
  sourceId,
})
