import {
  bitcoinKitTxsAbi,
  bitcoinKitTxAddresses,
} from "../contracts/bitcoin-kit-txs.js"

export function getBitcoinAddressBalance(client, parameters) {
  const { btcAddress } = parameters
  return client.readContract({
    address: bitcoinKitTxAddresses[client.chain.id],
    abi: bitcoinKitTxsAbi,
    functionName: "getBitcoinAddressBalance",
    args: [btcAddress],
  })
}

export function getHeaderN(client, parameters) {
  const { height } = parameters
  return client.readContract({
    address: bitcoinKitTxAddresses[client.chain.id],
    abi: bitcoinKitTxsAbi,
    functionName: "getHeaderN",
    args: [height],
  })
}

export function getLastHeader(client) {
  return client.readContract({
    address: bitcoinKitTxAddresses[client.chain.id],
    abi: bitcoinKitTxsAbi,
    functionName: "getLastHeader",
    args: [],
  })
}

export function getTransactionByTxId(client, parameters) {
  const { txId } = parameters
  return client.readContract({
    address: bitcoinKitTxAddresses[client.chain.id],
    abi: bitcoinKitTxsAbi,
    functionName: "getTransactionByTxId",
    args: [txId],
  })
}

export function getTxConfirmations(client, parameters) {
  const { txId } = parameters
  return client.readContract({
    address: bitcoinKitTxAddresses[client.chain.id],
    abi: bitcoinKitTxsAbi,
    functionName: "getTxConfirmations",
    args: [txId],
  })
}

export function getUtxosForBitcoinAddress(client, parameters) {
  const { btcAddress, pageNumber, pageSize } = parameters
  return client.readContract({
    address: bitcoinKitTxAddresses[client.chain.id],
    abi: bitcoinKitTxsAbi,
    functionName: "getUTXOsForBitcoinAddress",
    args: [btcAddress, pageNumber, pageSize],
  })
}
