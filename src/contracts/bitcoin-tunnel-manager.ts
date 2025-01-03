import { type Address, type Chain } from "viem";
import { hemiSepolia } from "../chains/hemi-sepolia.js";

export const bitcoinTunnelManagerAddresses: Record<Chain["id"], Address> = {
  [hemiSepolia.id]: "0x8221CFD3Eca3c5F9FA27b2AE774151642f1C449e",
};

export const bitcoinTunnelManagerAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialAdmin",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "initialVaultFactoryUpgradeDelay",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minimumVaultFactoryUpgradeDelay",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "initialBitcoinKitUpgradeDelay",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "initialGlobalConfigAdminUpgradeDelay",
        type: "uint256",
      },
      {
        internalType: "contract IBitcoinKit",
        name: "bitcoinKitAddr",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "vault",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "depositTxId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "depositSats",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "netSatsAfterFee",
        type: "uint256",
      },
    ],
    name: "DepositConfirmed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "setupAdmin",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operatorAdmin",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "vaultAddress",
        type: "address",
      },
    ],
    name: "VaultCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "vault",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "withdrawer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "uuid",
        type: "uint64",
      },
    ],
    name: "WithdrawalChallengeSuccess",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "vault",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "withdrawer",
        type: "address",
      },
      {
        indexed: true,
        internalType: "string",
        name: "btcAddress",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "withdrawalSats",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "netSatsAfterFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "uuid",
        type: "uint64",
      },
    ],
    name: "WithdrawalInitiated",
    type: "event",
  },
  {
    inputs: [],
    name: "btcTokenContract",
    outputs: [
      {
        internalType: "contract BTCToken",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnLiquidatedBTC",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "uuid",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "extraInfo",
        type: "bytes",
      },
    ],
    name: "challengeWithdrawal",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "vaultIndex",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "txid",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "outputIndex",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "extraInfo",
        type: "bytes",
      },
    ],
    name: "confirmDeposit",
    outputs: [
      {
        internalType: "bool",
        name: "successful",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "setupAdmin",
        type: "address",
      },
      {
        internalType: "address",
        name: "operatorAdmin",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "vaultType",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "extraInfo",
        type: "bytes",
      },
    ],
    name: "createVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "globalConfig",
    outputs: [
      {
        internalType: "contract GlobalConfig",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "vaultIndex",
        type: "uint32",
      },
      {
        internalType: "string",
        name: "btcAddress",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "initiateWithdrawal",
    outputs: [
      {
        internalType: "uint256",
        name: "feeSats",
        type: "uint256",
      },
      {
        internalType: "uint64",
        name: "uuid",
        type: "uint64",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "vaultIndex",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "amountToMint",
        type: "uint256",
      },
    ],
    name: "mintOperatorFees",
    outputs: [
      {
        internalType: "uint256",
        name: "amountMinted",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "originalBitcoinKitContract",
    outputs: [
      {
        internalType: "contract IBitcoinKit",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "vaultIndex",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "txid",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "outputIndex",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "extraInfo",
        type: "bytes",
      },
    ],
    name: "preconfirmDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vaultCounter",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "vaultList",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "vaults",
    outputs: [
      {
        internalType: "contract IBitcoinVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
