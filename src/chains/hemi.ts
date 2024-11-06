import { defineChain } from "viem";
import { chainConfig } from "viem/op-stack";

const sourceId = 1; // Ethereum mainnet

export const hemi = defineChain({
  ...chainConfig,
  id: 43_111,
  name: "Hemi Network",
  nativeCurrency: {
    decimals: 18,
    name: "Ether",
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
  contracts: {
    addressManager: {
      [sourceId]: {
        address: "0xA5F37791378c55941a52B4dCb70Be4D8D09f5e43",
      },
    },
    l1CrossDomainMessenger: {
      [sourceId]: {
        address: "0xF005dFb08377faD44588Af68d0884D272A6fb050",
      },
    },
    l1StandardBridge: {
      [sourceId]: {
        address: "0x5eaa10F99e7e6D177eF9F74E519E319aa49f191e",
      },
    },
    l2Bridge: {
      [sourceId]: {
        address: "0x4200000000000000000000000000000000000010",
      },
    },
    l2OutputOracle: {
      [sourceId]: {
        address: "0x6daF3a3497D8abdFE12915aDD9829f83A79C0d51",
      },
    },
    multicall3: {
      address: "0xcA11bde05977b3631167028862bE2a173976CA11",
      blockCreated: 14353601,
    },
    portal: {
      [sourceId]: {
        address: "0x39a0005415256B9863aFE2d55Edcf75ECc3A4D7e",
      },
    },
  },
  sourceId,
  testnet: false,
});
