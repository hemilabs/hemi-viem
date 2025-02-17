import { type Address, type Client, isHash, type Hash } from "viem";
import { readContract } from "viem/actions";

import { bitcoinKitTxsAbi } from "../../contracts/bitcoin-kit-txs.js";

export function getBitcoinAddressBalance(
  client: Client,
  parameters: { bitcoinKitAddress: Address; btcAddress: string },
) {
  const { bitcoinKitAddress, btcAddress } = parameters;
  return readContract(client, {
    abi: bitcoinKitTxsAbi,
    address: bitcoinKitAddress,
    args: [btcAddress],
    functionName: "getBitcoinAddressBalance",
  });
}

export function getHeaderN(
  client: Client,
  parameters: { bitcoinKitAddress: Address; height: number },
) {
  const { bitcoinKitAddress, height } = parameters;
  return readContract(client, {
    abi: bitcoinKitTxsAbi,
    address: bitcoinKitAddress,
    args: [height],
    functionName: "getHeaderN",
  });
}

export const getLastHeader = function (
  client: Client,
  parameters: { bitcoinKitAddress: Address },
) {
  const { bitcoinKitAddress } = parameters;
  return readContract(client, {
    abi: bitcoinKitTxsAbi,
    address: bitcoinKitAddress,
    args: [],
    functionName: "getLastHeader",
  });
};

export function getTransactionByTxId(
  client: Client,
  parameters: { bitcoinKitAddress: Address; txId: string },
) {
  const { bitcoinKitAddress, txId } = parameters;
  const hash: Hash = isHash(txId) ? txId : `0x${txId}`;
  return readContract(client, {
    abi: bitcoinKitTxsAbi,
    address: bitcoinKitAddress,
    args: [hash],
    functionName: "getTransactionByTxId",
  });
}

export function getTxConfirmations(
  client: Client,
  parameters: { bitcoinKitAddress: Address; txId: string },
) {
  const { bitcoinKitAddress, txId } = parameters;
  const hash: Hash = isHash(txId) ? txId : `0x${txId}`;
  return readContract(client, {
    abi: bitcoinKitTxsAbi,
    address: bitcoinKitAddress,
    args: [hash],
    functionName: "getTxConfirmations",
  });
}

export function getUtxosForBitcoinAddress(
  client: Client,
  parameters: {
    bitcoinKitAddress: Address;
    btcAddress: string;
    pageNumber: bigint;
    pageSize: bigint;
  },
) {
  const { bitcoinKitAddress, btcAddress, pageNumber, pageSize } = parameters;
  return readContract(client, {
    abi: bitcoinKitTxsAbi,
    address: bitcoinKitAddress,
    args: [btcAddress, pageNumber, pageSize],
    functionName: "getUTXOsForBitcoinAddress",
  });
}
