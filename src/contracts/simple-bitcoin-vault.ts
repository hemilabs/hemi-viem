export const simpleBitcoinVaultAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_tunnelAdmin",
        type: "address",
      },
      {
        internalType: "address",
        name: "_operatorAdmin",
        type: "address",
      },
      {
        internalType: "contract BTCToken",
        name: "_btcTokenContract",
        type: "address",
      },
      {
        internalType: "contract SimpleGlobalVaultConfig",
        name: "_vaultConfig",
        type: "address",
      },
      {
        internalType: "contract ISimpleBitcoinVaultStateFactory",
        name: "vaultStateFactory",
        type: "address",
      },
      {
        internalType: "contract SimpleBitcoinVaultUTXOLogicHelper",
        name: "_utxoLogicHelper",
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
        internalType: "uint256",
        name: "amountDeposited",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "totalCollateral",
        type: "uint256",
      },
    ],
    name: "CollateralDeposited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "amountWithdrawn",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "totalCollateral",
        type: "uint256",
      },
    ],
    name: "CollateralWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "satsToRepurchase",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startingPrice",
        type: "uint256",
      },
    ],
    name: "FullLiquidationStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "satsToRepurchase",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startingBid",
        type: "uint256",
      },
    ],
    name: "PartialLiquidationStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "VaultLive",
    type: "event",
  },
  {
    inputs: [],
    name: "MAX_VALID_BTC_SCRIPT_SIZE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_WITHDRAWAL_QUEUE_SIZE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINIMUM_DEPOSIT_SATS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINIMUM_WITHDRAWAL_SATS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIN_BITCOIN_CONFIRMATIONS_FOR_DEPOSIT",
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
    inputs: [],
    name: "MIN_BITCOIN_CONFIRMATIONS_FOR_WITHDRAWAL_FINALIZATION",
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
    inputs: [],
    name: "MIN_VALID_BTC_SCRIPT_SIZE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WIND_DOWN_DEPOSIT_GRACE_PERIOD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WITHDRAWAL_GRACE_PERIOD_SECONDS",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "depositTxId",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "abandonExistingUTXO",
        type: "bool",
      },
    ],
    name: "assignConfirmedDepositAsSweep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "bitcoinCustodyAddress",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountSats",
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
        internalType: "bytes",
        name: "_input",
        type: "bytes",
      },
    ],
    name: "bytesToAddress",
    outputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_input",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "offset",
        type: "uint256",
      },
    ],
    name: "bytesToAddressOffset",
    outputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "uuid",
        type: "uint32",
      },
      {
        internalType: "bytes",
        name: "",
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
      {
        internalType: "uint256",
        name: "satsToCredit",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "withdrawer",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "closeVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "closeVaultAfterFullLiquidation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
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
        name: "",
        type: "bytes",
      },
    ],
    name: "confirmDeposit",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "totalDepositSats",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "netDepositSats",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "depositor",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "depositCollateral",
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
    inputs: [],
    name: "finalizeWindDown",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "txid",
        type: "bytes32",
      },
      {
        internalType: "uint32",
        name: "withdrawalIndex",
        type: "uint32",
      },
    ],
    name: "finalizeWithdrawal",
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
        internalType: "uint8",
        name: "c",
        type: "uint8",
      },
    ],
    name: "fromHexChar",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getNetDeposits",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getStatus",
    outputs: [
      {
        internalType: "enum CommonStructs.Status",
        name: "status",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getWithdrawalLimits",
    outputs: [
      {
        internalType: "uint256",
        name: "minWithdrawal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxWithdrawal",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "goLive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "hasNeverGoneLive",
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
        internalType: "bytes",
        name: "source",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "startIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endIndex",
        type: "uint256",
      },
    ],
    name: "hexAsciiBytesToBytes",
    outputs: [
      {
        internalType: "bytes",
        name: "result",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "destinationScript",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "amountSats",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "originator",
        type: "address",
      },
    ],
    name: "initiateWithdrawal",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "feeSats",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "uuid",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isAcceptingDeposits",
    outputs: [
      {
        internalType: "bool",
        name: "acceptingDeposits",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isWindingDown",
    outputs: [
      {
        internalType: "bool",
        name: "windingDown",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isWithdrawalAvailable",
    outputs: [
      {
        internalType: "bool",
        name: "withdrawalAvailable",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
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
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "sats",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "operatorAdmin",
    outputs: [
      {
        internalType: "address",
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
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "preconfirmDeposit",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "sweepTxId",
        type: "bytes32",
      },
    ],
    name: "processSweep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "txid",
        type: "bytes32",
      },
      {
        internalType: "uint32",
        name: "inputIndexToBlame",
        type: "uint32",
      },
    ],
    name: "reportInvalidConfirmedDepositSpend",
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
        internalType: "bytes32",
        name: "txid",
        type: "bytes32",
      },
      {
        internalType: "uint32",
        name: "inputIndexToBlame",
        type: "uint32",
      },
    ],
    name: "reportInvalidSweepSpend",
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
    inputs: [],
    name: "requiresDepositPreconfirmation",
    outputs: [
      {
        internalType: "bool",
        name: "requiresPreconfirmation",
        type: "bool",
      },
    ],
    stateMutability: "pure",
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
    name: "setBtcCustodianshipAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferCollateralForChild",
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
    inputs: [],
    name: "tunnelAdmin",
    outputs: [
      {
        internalType: "address",
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
        internalType: "address",
        name: "newOperatorAdmin",
        type: "address",
      },
    ],
    name: "updateOperatorAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vaultConfig",
    outputs: [
      {
        internalType: "contract SimpleGlobalVaultConfig",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vaultStateChild",
    outputs: [
      {
        internalType: "contract SimpleBitcoinVaultState",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "windDownTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "windDownVault",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
