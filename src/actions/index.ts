export {
  getBitcoinAddressBalance,
  getHeaderN,
  getLastHeader,
  getTransactionByTxId,
  getTxConfirmations,
  getUtxosForBitcoinAddress,
} from "./public/bitcoin-kit.js";

export {
  encodeChallengeWithdrawal,
  encodeConfirmDeposit,
  encodeInitiateWithdrawal,
} from "./public/bitcoin-tunnel-encoders.js";

export {
  getVaultByIndex,
  getVaultIndexByBTCAddress,
  getBitcoinKitAddress,
} from "./public/bitcoin-tunnel-manager.js";

export { getBtcFinalityByBlockHash } from "./public/get-btc-finality-by-block-hash.js";

export { getWithdrawalsPaused } from "./public/global-config.js";

export {
  getBitcoinCustodyAddress,
  getBitcoinVaultStateAddress,
  getBitcoinWithdrawalGracePeriod,
  getMinimumDepositSats,
  getMinimumWithdrawalSats,
  getVaultStatus,
} from "./public/simple-bitcoin-vault.js";

export {
  acknowledgedDeposits,
  calculateDepositFee,
  calculateWithdrawalFee,
  isBitcoinWithdrawalFulfilled,
  isBitcoinWithdrawalChallenged,
  getPendingWithdrawalCount,
  getPendingWithdrawalAmountSat,
} from "./public/simple-bitcoin-vault-state.js";

export {
  confirmDeposit,
  initiateWithdrawal,
  challengeWithdrawal,
} from "./wallet/bitcoin-tunnel-manager.js";
