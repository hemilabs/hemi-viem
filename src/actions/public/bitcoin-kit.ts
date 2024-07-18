import { type Client, isHash, type Hash } from "viem";
import { readContract } from "viem/actions";

import {
  bitcoinKitTxsAbi,
  bitcoinKitTxAddresses,
} from "../../contracts/bitcoin-kit-txs.js";

export function getBitcoinAddressBalance(
  client: Client,
  parameters: { btcAddress: string },
) {
  const { btcAddress } = parameters;
  return readContract(client, {
    address: bitcoinKitTxAddresses[client.chain!.id],
    abi: bitcoinKitTxsAbi,
    functionName: "getBitcoinAddressBalance",
    args: [btcAddress],
  });
}

export function getHeaderN(client: Client, parameters: { height: number }) {
  const { height } = parameters;
  return readContract(client, {
    address: bitcoinKitTxAddresses[client.chain!.id],
    abi: bitcoinKitTxsAbi,
    functionName: "getHeaderN",
    args: [height],
  });
}

export function getLastHeader(client: Client) {
  return readContract(client, {
    address: bitcoinKitTxAddresses[client.chain!.id],
    abi: bitcoinKitTxsAbi,
    functionName: "getLastHeader",
    args: [],
  });
}

export function getTransactionByTxId(
  client: Client,
  parameters: { txId: string },
) {
  const { txId } = parameters;
  const hash: Hash = isHash(txId) ? txId : `0x${txId}`;
  return readContract(client, {
    address: bitcoinKitTxAddresses[client.chain!.id],
    abi: bitcoinKitTxsAbi,
    functionName: "getTransactionByTxId",
    args: [hash],
  });
}

export function getTxConfirmations(client: Client, parameters: { txId: Hash }) {
  const { txId } = parameters;
  return readContract(client, {
    address: bitcoinKitTxAddresses[client.chain!.id],
    abi: bitcoinKitTxsAbi,
    functionName: "getTxConfirmations",
    args: [txId],
  });
}

export function getUtxosForBitcoinAddress(
  client: Client,
  parameters: { btcAddress: string; pageNumber: bigint; pageSize: bigint },
) {
  const { btcAddress, pageNumber, pageSize } = parameters;
  return readContract(client, {
    address: bitcoinKitTxAddresses[client.chain!.id],
    abi: bitcoinKitTxsAbi,
    functionName: "getUTXOsForBitcoinAddress",
    args: [btcAddress, pageNumber, pageSize],
  });
}
