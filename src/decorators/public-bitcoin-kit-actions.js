import {
  getBitcoinAddressBalance,
  getHeaderN,
  getLastHeader,
  getTransactionByTxId,
  getTxConfirmations,
  getUtxosForBitcoinAddress,
} from "../actions/bitcoin-kit.js"

export const hemiPublicBitcoinKitActions = function () {
  return function (client) {
    return {
      getBitcoinAddressBalance: (parameters) =>
        getBitcoinAddressBalance(client, parameters),
      getHeaderN: (parameters) => getHeaderN(client, parameters),
      getLastHeader: () => getLastHeader(client),
      getTransactionByTxId: (parameters) =>
        getTransactionByTxId(client, parameters),
      getTxConfirmations: (parameters) =>
        getTxConfirmations(client, parameters),
      getUtxosForBitcoinAddress: (parameters) =>
        getUtxosForBitcoinAddress(client, parameters),
    }
  }
}
