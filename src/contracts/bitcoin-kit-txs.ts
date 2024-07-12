import { type Address, type Chain } from 'viem'
import { hemiSepolia } from '../chains/hemi-sepolia.js'

export const bitcoinKitTxAddresses: Record<Chain['id'], Address> = {
  [hemiSepolia.id]: '0x181dBA19ce25bbD6d884347d2471FE5E5C0fcA4c',
}

export const bitcoinKitTxsAbi = [
  {
    inputs: [
      {
        internalType: 'string',
        name: 'btcAddress',
        type: 'string',
      },
    ],
    name: 'getBitcoinAddressBalance',
    outputs: [
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'height',
        type: 'uint32',
      },
    ],
    name: 'getHeaderN',
    outputs: [
      {
        components: [
          {
            internalType: 'uint32',
            name: 'height',
            type: 'uint32',
          },
          {
            internalType: 'bytes32',
            name: 'blockHash',
            type: 'bytes32',
          },
          {
            internalType: 'uint32',
            name: 'version',
            type: 'uint32',
          },
          {
            internalType: 'bytes32',
            name: 'previousBlockHash',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'merkleRoot',
            type: 'bytes32',
          },
          {
            internalType: 'uint32',
            name: 'timestamp',
            type: 'uint32',
          },
          {
            internalType: 'uint32',
            name: 'bits',
            type: 'uint32',
          },
          {
            internalType: 'uint32',
            name: 'nonce',
            type: 'uint32',
          },
        ],
        internalType: 'struct BitcoinHeader',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getLastHeader',
    outputs: [
      {
        components: [
          {
            internalType: 'uint32',
            name: 'height',
            type: 'uint32',
          },
          {
            internalType: 'bytes32',
            name: 'blockHash',
            type: 'bytes32',
          },
          {
            internalType: 'uint32',
            name: 'version',
            type: 'uint32',
          },
          {
            internalType: 'bytes32',
            name: 'previousBlockHash',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'merkleRoot',
            type: 'bytes32',
          },
          {
            internalType: 'uint32',
            name: 'timestamp',
            type: 'uint32',
          },
          {
            internalType: 'uint32',
            name: 'bits',
            type: 'uint32',
          },
          {
            internalType: 'uint32',
            name: 'nonce',
            type: 'uint32',
          },
        ],
        internalType: 'struct BitcoinHeader',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'txId',
        type: 'bytes32',
      },
    ],
    name: 'getTransactionByTxId',
    outputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'containingBlockHash',
            type: 'bytes32',
          },
          {
            internalType: 'uint256',
            name: 'transactionVersion',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'size',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'vSize',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'lockTime',
            type: 'uint256',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'inValue',
                type: 'uint256',
              },
              {
                internalType: 'bytes32',
                name: 'inputTxId',
                type: 'bytes32',
              },
              {
                internalType: 'uint256',
                name: 'sourceIndex',
                type: 'uint256',
              },
              {
                internalType: 'bytes',
                name: 'scriptSig',
                type: 'bytes',
              },
              {
                internalType: 'uint256',
                name: 'sequence',
                type: 'uint256',
              },
              {
                internalType: 'uint256',
                name: 'fullScriptSigLength',
                type: 'uint256',
              },
              {
                internalType: 'bool',
                name: 'containsFullScriptSig',
                type: 'bool',
              },
            ],
            internalType: 'struct Input[]',
            name: 'inputs',
            type: 'tuple[]',
          },
          {
            components: [
              {
                internalType: 'uint256',
                name: 'outValue',
                type: 'uint256',
              },
              {
                internalType: 'bytes',
                name: 'script',
                type: 'bytes',
              },
              {
                internalType: 'string',
                name: 'outputAddress',
                type: 'string',
              },
              {
                internalType: 'bool',
                name: 'isOpReturn',
                type: 'bool',
              },
              {
                internalType: 'bytes',
                name: 'opReturnData',
                type: 'bytes',
              },
              {
                internalType: 'bool',
                name: 'isSpent',
                type: 'bool',
              },
              {
                internalType: 'uint256',
                name: 'fullScriptLength',
                type: 'uint256',
              },
              {
                internalType: 'bool',
                name: 'containsFullScript',
                type: 'bool',
              },
              {
                components: [
                  {
                    internalType: 'bytes32',
                    name: 'spendingTxId',
                    type: 'bytes32',
                  },
                  {
                    internalType: 'uint256',
                    name: 'inputIndex',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct SpentDetail',
                name: 'spentDetail',
                type: 'tuple',
              },
            ],
            internalType: 'struct Output[]',
            name: 'outputs',
            type: 'tuple[]',
          },
          {
            internalType: 'uint256',
            name: 'totalInputs',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'totalOutputs',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'containsAllInputs',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'containsAllOutputs',
            type: 'bool',
          },
        ],
        internalType: 'struct Transaction',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'txId',
        type: 'bytes32',
      },
    ],
    name: 'getTxConfirmations',
    outputs: [
      {
        internalType: 'uint32',
        name: 'confirmations',
        type: 'uint32',
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
        name: 'pageNumber',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'pageSize',
        type: 'uint256',
      },
    ],
    name: 'getUTXOsForBitcoinAddress',
    outputs: [
      {
        components: [
          {
            internalType: 'bytes32',
            name: 'txId',
            type: 'bytes32',
          },
          {
            internalType: 'uint256',
            name: 'index',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'value',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'scriptPubKey',
            type: 'bytes',
          },
        ],
        internalType: 'struct UTXO[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const
