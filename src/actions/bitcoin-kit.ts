import { type Chain, type Client, type Hash, type Transport } from "viem"
import { readContract } from 'viem/actions'

import {
  bitcoinKitTxsAbi,
  bitcoinKitTxAddresses,
} from "../contracts/bitcoin-kit-txs.js"

export function getBitcoinAddressBalance<
  TTransport extends Transport = Transport,
  TChain extends Chain | undefined = Chain | undefined
>(client: Client<TTransport, TChain>, parameters: { btcAddress: string }) {
  const { btcAddress } = parameters
  return readContract(client, {
    address: bitcoinKitTxAddresses[client.chain!.id],
    abi: bitcoinKitTxsAbi,
    functionName: "getBitcoinAddressBalance",
    args: [btcAddress],
  })
}

export function getHeaderN<
  TTransport extends Transport = Transport,
  TChain extends Chain | undefined = Chain | undefined
>(client: Client<TTransport, TChain>, parameters: { height: number }) {
  const { height } = parameters
  return readContract(client, {
    address: bitcoinKitTxAddresses[client.chain!.id],
    abi: bitcoinKitTxsAbi,
    functionName: "getHeaderN",
    args: [height],
  })
}

export function getLastHeader<
  TTransport extends Transport = Transport,
  TChain extends Chain | undefined = Chain | undefined
>(client: Client<TTransport, TChain>) {
  return readContract(client, {
    address: bitcoinKitTxAddresses[client.chain!.id],
    abi: bitcoinKitTxsAbi,
    functionName: "getLastHeader",
    args: [],
  })
}

export function getTransactionByTxId<
  TTransport extends Transport = Transport,
  TChain extends Chain | undefined = Chain | undefined,
>(client: Client<TTransport, TChain>, parameters: { txId: Hash }) {
  const { txId } = parameters
  return readContract(client, {
    address: bitcoinKitTxAddresses[client.chain!.id],
    abi: bitcoinKitTxsAbi,
    functionName: "getTransactionByTxId",
    args: [txId],
  })
}

export function getTxConfirmations<
  TTransport extends Transport = Transport,
  TChain extends Chain | undefined = Chain | undefined
>(client: Client<TTransport, TChain>, parameters: { txId: Hash }) {
  const { txId } = parameters
  return readContract(client, {
    address: bitcoinKitTxAddresses[client.chain!.id],
    abi: bitcoinKitTxsAbi,
    functionName: "getTxConfirmations",
    args: [txId],
  })
}

export function getUtxosForBitcoinAddress<
  TTransport extends Transport = Transport,
  TChain extends Chain | undefined = Chain | undefined
>(client: Client<TTransport, TChain>, parameters: { btcAddress: string; pageNumber: bigint; pageSize: bigint}) {
  const { btcAddress, pageNumber, pageSize } = parameters
  return readContract(client, {
    address: bitcoinKitTxAddresses[client.chain!.id],
    abi: bitcoinKitTxsAbi,
    functionName: "getUTXOsForBitcoinAddress",
    args: [btcAddress, pageNumber, pageSize],
  })
}