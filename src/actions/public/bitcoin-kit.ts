import { type Address, type Client, isHash, type Hash } from "viem";
import { readContract } from "viem/actions";

import { bitcoinKitTxsAbi } from "../../contracts/bitcoin-kit-txs.js";
import {
  assertAddress,
  assertNonEmptyString,
  assertObject,
  assertPositiveInteger,
} from "../../utils.js";

export async function getBitcoinAddressBalance(
  client: Client,
  parameters: { bitcoinKitAddress: Address; btcAddress: string },
) {
  assertObject(parameters, "parameters");
  const { bitcoinKitAddress, btcAddress } = parameters;
  assertAddress(bitcoinKitAddress, "bitcoinKitAddress");
  assertNonEmptyString(btcAddress, "btcAddress");
  return readContract(client, {
    abi: bitcoinKitTxsAbi,
    address: bitcoinKitAddress,
    args: [btcAddress],
    functionName: "getBitcoinAddressBalance",
  });
}

export async function getHeaderN(
  client: Client,
  parameters: { bitcoinKitAddress: Address; height: number },
) {
  assertObject(parameters, "parameters");
  const { bitcoinKitAddress, height } = parameters;
  assertAddress(bitcoinKitAddress, "bitcoinKitAddress");
  assertPositiveInteger(height, "height");
  return readContract(client, {
    abi: bitcoinKitTxsAbi,
    address: bitcoinKitAddress,
    args: [height],
    functionName: "getHeaderN",
  });
}

export async function getLastHeader(
  client: Client,
  parameters: { bitcoinKitAddress: Address },
) {
  assertObject(parameters, "parameters");
  const { bitcoinKitAddress } = parameters;
  assertAddress(bitcoinKitAddress, "bitcoinKitAddress");
  return readContract(client, {
    abi: bitcoinKitTxsAbi,
    address: bitcoinKitAddress,
    args: [],
    functionName: "getLastHeader",
  });
}

export async function getTransactionByTxId(
  client: Client,
  parameters: { bitcoinKitAddress: Address; txId: string },
) {
  assertObject(parameters, "parameters");
  const { bitcoinKitAddress, txId } = parameters;
  assertAddress(bitcoinKitAddress, "bitcoinKitAddress");
  assertNonEmptyString(txId, "txId");
  const hash: Hash = isHash(txId) ? txId : `0x${txId}`;
  return readContract(client, {
    abi: bitcoinKitTxsAbi,
    address: bitcoinKitAddress,
    args: [hash],
    functionName: "getTransactionByTxId",
  });
}

export async function getTxConfirmations(
  client: Client,
  parameters: { bitcoinKitAddress: Address; txId: string },
) {
  assertObject(parameters, "parameters");
  const { bitcoinKitAddress, txId } = parameters;
  assertAddress(bitcoinKitAddress, "bitcoinKitAddress");
  assertNonEmptyString(txId, "txId");
  const hash: Hash = isHash(txId) ? txId : `0x${txId}`;
  return readContract(client, {
    abi: bitcoinKitTxsAbi,
    address: bitcoinKitAddress,
    args: [hash],
    functionName: "getTxConfirmations",
  });
}

export async function getUtxosForBitcoinAddress(
  client: Client,
  parameters: {
    bitcoinKitAddress: Address;
    btcAddress: string;
    pageNumber: number;
    pageSize: number;
  },
) {
  assertObject(parameters, "parameters");
  const { bitcoinKitAddress, btcAddress, pageNumber, pageSize } = parameters;
  assertAddress(bitcoinKitAddress, "bitcoinKitAddress");
  assertNonEmptyString(btcAddress, "btcAddress");
  assertPositiveInteger(pageNumber, "pageNumber");
  assertPositiveInteger(pageSize, "pageSize");
  return readContract(client, {
    abi: bitcoinKitTxsAbi,
    address: bitcoinKitAddress,
    args: [btcAddress, pageNumber, pageSize],
    functionName: "getUTXOsForBitcoinAddress",
  });
}
