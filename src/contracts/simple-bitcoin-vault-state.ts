export const simpleBitcoinVaultStateAbi = [
  {
    inputs: [
      {
        internalType: "contract SimpleBitcoinVault",
        name: "_parentVault",
        type: "address",
      },
      {
        internalType: "address",
        name: "_operatorAdmin",
        type: "address",
      },
      {
        internalType: "contract SimpleGlobalVaultConfig",
        name: "_vaultConfig",
        type: "address",
      },
      {
        internalType: "contract BTCToken",
        name: "_btcTokenContract",
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
        name: "newDepositFeeBps",
        type: "uint256",
      },
    ],
    name: "DepositFeeBpsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newMinDepositFeeSats",
        type: "uint256",
      },
    ],
    name: "MinDepositFeeSatsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newMinWithdrawalFeeSats",
        type: "uint256",
      },
    ],
    name: "MinWithdrawalFeeSatsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newWIthdrawalFeeBps",
        type: "uint256",
      },
    ],
    name: "WithdrawalFeeBpsUpdated",
    type: "event",
  },
  {
    inputs: [],
    name: "DEPOSIT_FEE_INCREASE_DELAY_SECONDS",
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
    name: "FULL_LIQUIDATION_DEPOSIT_GRACE_PERIOD",
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
    name: "FULL_LIQUIDATION_INCREASE_INCREMENT_BPS",
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
    name: "FULL_LIQUIDATION_INCREASE_TIME",
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
    name: "PARTIAL_COLLATERAL_WITHDRAWAL_DELAY",
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
    name: "PARTIAL_LIQUIDATION_BID_TIME",
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
    name: "SOFT_COLLATERALIZATION_THRESHOLD_INCREASE_DELAY_SECONDS",
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
    name: "WITHDRAWAL_FEE_INCREASE_DELAY_SECONDS",
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
        name: "txid",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "outputIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feesCollected",
        type: "uint256",
      },
    ],
    name: "acknowledgeDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "acknowledgedDepositOutputIndexes",
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
        name: "",
        type: "bytes32",
      },
    ],
    name: "acknowledgedDeposits",
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
        name: "",
        type: "bytes32",
      },
    ],
    name: "acknowledgedDepositsToFees",
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
        name: "",
        type: "bytes32",
      },
    ],
    name: "acknowledgedWithdrawalTxids",
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
    inputs: [],
    name: "beginFullCollateralLiquidation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "startingBid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "hBTCQuantity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxAcceptanceTimestamp",
        type: "uint256",
      },
    ],
    name: "beginPartialLiquidation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newBid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "hBTCQuantity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxAcceptanceTimestamp",
        type: "uint256",
      },
    ],
    name: "bidOnPartialCollateralLiquidation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "depositAmount",
        type: "uint256",
      },
    ],
    name: "calculateDepositFee",
    outputs: [
      {
        internalType: "uint256",
        name: "depositFeeSats",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "withdrawalAmount",
        type: "uint256",
      },
    ],
    name: "calculateWithdrawalFee",
    outputs: [
      {
        internalType: "uint256",
        name: "withdrawalFeeSats",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "canOperatorInitiateCollateralWithdraw",
    outputs: [
      {
        internalType: "bool",
        name: "collateralWithdrawalAllowed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newDepositFeeBps",
        type: "uint256",
      },
    ],
    name: "changeDepositFeeBps",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newMinDepositFeeSats",
        type: "uint256",
      },
    ],
    name: "changeMinDepositFeeSats",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newMinWithdrawalFeeSats",
        type: "uint256",
      },
    ],
    name: "changeMinWithdrawalFeeSats",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newSoftCollateralizationThreshold",
        type: "uint256",
      },
    ],
    name: "changeSoftCollateralizationThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newWithdrawalFeeBps",
        type: "uint256",
      },
    ],
    name: "changeWithdrawalFeeBps",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "scriptHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "outputAmount",
        type: "uint256",
      },
    ],
    name: "checkPendingWithdrawalsForMatch",
    outputs: [
      {
        internalType: "bool",
        name: "matchFound",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "depositedCollateral",
        type: "uint256",
      },
    ],
    name: "creditOperatorCollateralDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "totalCollateral",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "additionalSats",
        type: "uint256",
      },
    ],
    name: "creditPartialPendingLiquidationSats",
    outputs: [],
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
    name: "decreaseTotalDepositsHeldFromOperatorBurning",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "depositFeeBps",
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
    name: "finalizeDepositFeeBpsUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "finalizeMinDepositFeeSatsUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "finalizeMinWithdrawalFeeSatsUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "finalizePartialCollateralLiquidation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "finalizePartialCollateralWithdrawal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "finalizeSoftCollateralizationThresholdUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "finalizeWithdrawalFeeBpsUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "depositTxId",
        type: "bytes32",
      },
    ],
    name: "getCollectableFees",
    outputs: [
      {
        internalType: "uint256",
        name: "collectableFees",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentFullLiquidationCollateralPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "collateralAtomicUnitsPerBTC",
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
    ],
    name: "getDepositOutputIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "outputIndex",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFreeCollateral",
    outputs: [
      {
        internalType: "uint256",
        name: "freeCollateralAtomicUnits",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOperatorCollateralDeposited",
    outputs: [
      {
        internalType: "uint256",
        name: "totalCollateral",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getParentSimpleBitcoinVault",
    outputs: [
      {
        internalType: "contract SimpleBitcoinVault",
        name: "_parentVault",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPendingPartialLiquidationSats",
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
    name: "getPendingWithdrawalAmountSat",
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
    name: "getSoftCollateralizationThreshold",
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
    name: "getTotalDepositsHeld",
    outputs: [
      {
        internalType: "uint256",
        name: "depositsHeld",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUtilizedCollateral",
    outputs: [
      {
        internalType: "uint256",
        name: "utilizedCollateralAtomicUnits",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "uuid",
        type: "uint32",
      },
    ],
    name: "getWithdrawal",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "withdrawalCounter",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "fee",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "timestampRequested",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "destinationScript",
            type: "bytes",
          },
          {
            internalType: "address",
            name: "evmOriginator",
            type: "address",
          },
        ],
        internalType: "struct SimpleBitcoinVaultStructs.Withdrawal",
        name: "storedWithdrawal",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "hardCollateralizationThreshold",
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
    name: "hasFullLiquidationDepositGracePeriodElapsed",
    outputs: [
      {
        internalType: "bool",
        name: "gracePeriodElapsed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "increase",
        type: "uint256",
      },
    ],
    name: "increaseTotalDepositsHeld",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "desiredWithdrawalAmount",
        type: "uint256",
      },
    ],
    name: "initiatePartialCollateralWithdrawal",
    outputs: [],
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
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timestampRequested",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "destinationScript",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "evmOriginator",
        type: "address",
      },
    ],
    name: "internalInitializeWithdrawal",
    outputs: [
      {
        internalType: "uint32",
        name: "withdrawalNum",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "pendingWithdrawalAmount",
        type: "uint256",
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
    ],
    name: "isDepositAcknowledged",
    outputs: [
      {
        internalType: "bool",
        name: "isAcknowledged",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isFullCollateralLiquidationAllowed",
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
    inputs: [],
    name: "isFullLiquidationStarted",
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
    inputs: [],
    name: "isPendingPartialCollateralWithdrawal",
    outputs: [
      {
        internalType: "bool",
        name: "isPendingWithdrawal",
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
        name: "txid",
        type: "bytes32",
      },
    ],
    name: "isTransactionAcknowledgedWithdrawalFulfillment",
    outputs: [
      {
        internalType: "bool",
        name: "isAcknowledgedWithdrawalFulfillment",
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
        name: "uuid",
        type: "uint32",
      },
    ],
    name: "isWithdrawalFulfilled",
    outputs: [
      {
        internalType: "bool",
        name: "isFulfilled",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minDepositFeeSats",
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
    name: "minWithdrawalFeeSats",
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
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "partialLiquidationStatus",
    outputs: [
      {
        internalType: "uint256",
        name: "amountSatsToRecover",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentBidAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentBidTime",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "currentBidder",
        type: "address",
      },
      {
        internalType: "bool",
        name: "finished",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingDepositFeeBps",
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
    name: "pendingDepositFeeBpsUpdateTime",
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
    name: "pendingMinDepositFeeSats",
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
    name: "pendingMinDepositFeeSatsUpdateTime",
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
    name: "pendingMinWithdrawalFeeSats",
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
    name: "pendingMinWithdrawalFeeSatsUpdateTime",
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
    name: "pendingSoftCollateralizationThreshold",
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
    name: "pendingSoftCollateralizationThresholdUpdateTime",
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
    name: "pendingWithdrawalAmountSat",
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
    name: "pendingWithdrawalCount",
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
    name: "pendingWithdrawalFeeBps",
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
    name: "pendingWithdrawalFeeBpsUpdateTime",
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
        internalType: "uint256",
        name: "fees",
        type: "uint256",
      },
    ],
    name: "processCollectedFeesToDecrementPartialPendingLiquidation",
    outputs: [
      {
        internalType: "uint256",
        name: "remainingFees",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "hBTCQuantity",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "purchaseCollateralDuringFullLiquidation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "depositTxId",
        type: "bytes32",
      },
    ],
    name: "saveFeesCollected",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "bytes32",
        name: "fulfillmentTxId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "withdrawalAmount",
        type: "uint256",
      },
    ],
    name: "saveWithdrawalFulfillment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setFullCollateralLiquidationAllowed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "softCollateralizationThreshold",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amountSats",
        type: "uint256",
      },
    ],
    name: "voluntaryhBTCBurn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawalCounter",
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
    name: "withdrawalFeeBps",
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
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "withdrawals",
    outputs: [
      {
        internalType: "uint32",
        name: "withdrawalCounter",
        type: "uint32",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "fee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timestampRequested",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "destinationScript",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "evmOriginator",
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
        name: "",
        type: "uint32",
      },
    ],
    name: "withdrawalsToStatus",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;
