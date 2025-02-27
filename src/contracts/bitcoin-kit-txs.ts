export const bitcoinKitTxsAbi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "btcAddress",
        type: "string",
      },
    ],
    name: "getBitcoinAddressBalance",
    outputs: [
      {
        internalType: "uint64",
        name: "balance",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "height",
        type: "uint32",
      },
    ],
    name: "getHeaderN",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "height",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "blockHash",
            type: "bytes32",
          },
          {
            internalType: "uint32",
            name: "version",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "previousBlockHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "merkleRoot",
            type: "bytes32",
          },
          {
            internalType: "uint32",
            name: "timestamp",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "bits",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "nonce",
            type: "uint32",
          },
        ],
        internalType: "struct BitcoinHeader",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastHeader",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "height",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "blockHash",
            type: "bytes32",
          },
          {
            internalType: "uint32",
            name: "version",
            type: "uint32",
          },
          {
            internalType: "bytes32",
            name: "previousBlockHash",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "merkleRoot",
            type: "bytes32",
          },
          {
            internalType: "uint32",
            name: "timestamp",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "bits",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "nonce",
            type: "uint32",
          },
        ],
        internalType: "struct BitcoinHeader",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "btcAddress",
        type: "string",
      },
    ],
    name: "getScriptForAddress",
    outputs: [
      {
        internalType: "bytes",
        name: "script",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "txId",
        type: "bytes32",
      },
      {
        internalType: "uint32",
        name: "inputIndex",
        type: "uint32",
      },
    ],
    name: "getSpecificTxInput",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "witnessElements",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "inValue",
            type: "uint256",
          },
          {
            internalType: "bytes32",
            name: "inputTxId",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "sourceIndex",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "scriptSig",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "sequence",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "fullScriptSigLength",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "containsFullScriptSig",
            type: "bool",
          },
        ],
        internalType: "struct Input",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "txId",
        type: "bytes32",
      },
      {
        internalType: "uint32",
        name: "outputIndex",
        type: "uint32",
      },
    ],
    name: "getSpecificTxOutput",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "outValue",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "script",
            type: "bytes",
          },
          {
            internalType: "string",
            name: "outputAddress",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isOpReturn",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "opReturnData",
            type: "bytes",
          },
          {
            internalType: "bool",
            name: "isSpent",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "fullScriptLength",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "containsFullScript",
            type: "bool",
          },
        ],
        internalType: "struct Output",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "txId",
        type: "bytes32",
      },
    ],
    name: "getTransactionByTxId",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "containingBlockHash",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "transactionVersion",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "size",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "vSize",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lockTime",
            type: "uint256",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "witnessElements",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "inValue",
                type: "uint256",
              },
              {
                internalType: "bytes32",
                name: "inputTxId",
                type: "bytes32",
              },
              {
                internalType: "uint256",
                name: "sourceIndex",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "scriptSig",
                type: "bytes",
              },
              {
                internalType: "uint256",
                name: "sequence",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "fullScriptSigLength",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "containsFullScriptSig",
                type: "bool",
              },
            ],
            internalType: "struct Input[]",
            name: "inputs",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "outValue",
                type: "uint256",
              },
              {
                internalType: "bytes",
                name: "script",
                type: "bytes",
              },
              {
                internalType: "string",
                name: "outputAddress",
                type: "string",
              },
              {
                internalType: "bool",
                name: "isOpReturn",
                type: "bool",
              },
              {
                internalType: "bytes",
                name: "opReturnData",
                type: "bytes",
              },
              {
                internalType: "bool",
                name: "isSpent",
                type: "bool",
              },
              {
                internalType: "uint256",
                name: "fullScriptLength",
                type: "uint256",
              },
              {
                internalType: "bool",
                name: "containsFullScript",
                type: "bool",
              },
            ],
            internalType: "struct Output[]",
            name: "outputs",
            type: "tuple[]",
          },
          {
            internalType: "uint256",
            name: "totalInputs",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalOutputs",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "containsAllInputs",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "containsAllOutputs",
            type: "bool",
          },
        ],
        internalType: "struct Transaction",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "txId",
        type: "bytes32",
      },
    ],
    name: "getTxConfirmations",
    outputs: [
      {
        internalType: "uint32",
        name: "confirmations",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "txId",
        type: "bytes32",
      },
    ],
    name: "getTxInputCount",
    outputs: [
      {
        internalType: "uint32",
        name: "txInputCount",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "txId",
        type: "bytes32",
      },
    ],
    name: "getTxOutputCount",
    outputs: [
      {
        internalType: "uint32",
        name: "txOutputCount",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "btcAddress",
        type: "string",
      },
      {
        internalType: "uint32",
        name: "pageNumber",
        type: "uint32",
      },
      {
        internalType: "uint32",
        name: "pageSize",
        type: "uint32",
      },
    ],
    name: "getUTXOsForBitcoinAddress",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "txId",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "scriptPubKey",
            type: "bytes",
          },
        ],
        internalType: "struct UTXO[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "btcAddress",
        type: "string",
      },
    ],
    name: "isAddressValid",
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
        internalType: "bytes32",
        name: "txId",
        type: "bytes32",
      },
    ],
    name: "transactionExists",
    outputs: [
      {
        internalType: "bool",
        name: "exists",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
