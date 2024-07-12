import { type Address, type Chain } from 'viem'
import { hemiSepolia } from '../chains/hemi-sepolia.js'

export const bitcoinTunnelManagerAddresses: Record<Chain['id'], Address> = {
  [hemiSepolia.id]: '0xBB3c3E0D5D2Ff65492deAeA721b331851befc267',
}

export const bitcoinTunnelManagerAbi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_bitcoinKitAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_permittedCollateralToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_collateralTokenBTCPriceOracle',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: '_initialOpeningCollateralRatio',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: '_liquidationCollateralRatio',
        type: 'uint32',
      },
      {
        internalType: 'uint256',
        name: '_minimumCollateralDepositAmount',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'GenericWithdrawalFailed',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'OperatorAlreadyCreatedVault',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'VaultInsufficientBalanceForWithdrawal',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'btcTxid',
        type: 'bytes32',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'depositer',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'vaultAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'DepositConfirmed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'vaultAddress',
        type: 'address',
      },
    ],
    name: 'VaultActivated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'vaultAddress',
        type: 'address',
      },
    ],
    name: 'VaultCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'vaultAddress',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint32',
        name: 'withdrawalCounter',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amountAfterFees',
        type: 'uint256',
      },
    ],
    name: 'WithdrawalFinalized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'withdrawer',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'vaultAddress',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint32',
        name: 'withdrawalCounter',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'btcAddress',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'WithdrawalInitiated',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'allOwners',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'allOwnersSize',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'bitcoinKitContract',
    outputs: [
      {
        internalType: 'contract IBitcoinKit',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'btcTokenContract',
    outputs: [
      {
        internalType: 'contract BTCToken',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'collateralBTCPriceOracle',
    outputs: [
      {
        internalType: 'contract IAssetPriceOracle',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_txid',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'vaultOwner',
        type: 'address',
      },
    ],
    name: 'confirmDeposit',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'btcAddress',
        type: 'string',
      },
    ],
    name: 'createVault',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'vaultOperator',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: 'withdrawalIndex',
        type: 'uint32',
      },
      {
        internalType: 'bytes32',
        name: '_txid',
        type: 'bytes32',
      },
    ],
    name: 'finalizeWithdrawal',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'getBtcAddressOfVaultByOwner',
    outputs: [
      {
        internalType: 'string',
        name: 'btcAddress',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'getVaultAddressByOwner',
    outputs: [
      {
        internalType: 'address',
        name: 'vaultAddress',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'btcAddress',
        type: 'string',
      },
    ],
    name: 'getVaultOwnerByBTCAddress',
    outputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'btcAddress',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'vaultOperator',
        type: 'address',
      },
    ],
    name: 'initiateWithdrawal',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'ownerByBTCAddressHash',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'permittedCollateralToken',
    outputs: [
      {
        internalType: 'contract ERC20',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'vaultsByOwner',
    outputs: [
      {
        internalType: 'contract BitcoinVault',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const
