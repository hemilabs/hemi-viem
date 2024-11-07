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
    abi: bitcoinKitTxsAbi,
    address: bitcoinKitTxAddresses[client.chain!.id],
    args: [btcAddress],
    functionName: "getBitcoinAddressBalance",
  });
}

export function getHeaderN(client: Client, parameters: { height: number }) {
  const { height } = parameters;
  return readContract(client, {
    abi: bitcoinKitTxsAbi,
    address: bitcoinKitTxAddresses[client.chain!.id],
    args: [height],
    functionName: "getHeaderN",
  });
}

export const getLastHeader = (client: Client) =>
  readContract(client, {
    abi: bitcoinKitTxsAbi,
    address: bitcoinKitTxAddresses[client.chain!.id],
    args: [],
    functionName: "getLastHeader",
  });

export function getTransactionByTxId(
  client: Client,
  parameters: { txId: string },
) {
  const { txId } = parameters;
  const hash: Hash = isHash(txId) ? txId : `0x${txId}`;
  return readContract(client, {
    abi: bitcoinKitTxsAbi,
    address: bitcoinKitTxAddresses[client.chain!.id],
    args: [hash],
    functionName: "getTransactionByTxId",
  });
}

export function getTxConfirmations(client: Client, parameters: { txId: Hash }) {
  const { txId } = parameters;
  return readContract(client, {
    abi: bitcoinKitTxsAbi,
    address: bitcoinKitTxAddresses[client.chain!.id],
    args: [txId],
    functionName: "getTxConfirmations",
  });
}

export function getUtxosForBitcoinAddress(
  client: Client,
  parameters: { btcAddress: string; pageNumber: bigint; pageSize: bigint },
) {
  const { btcAddress, pageNumber, pageSize } = parameters;
  return readContract(client, {
    abi: bitcoinKitTxsAbi,
    address: bitcoinKitTxAddresses[client.chain!.id],
    args: [btcAddress, pageNumber, pageSize],
    functionName: "getUTXOsForBitcoinAddress",
  });
}
