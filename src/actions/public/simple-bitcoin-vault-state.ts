import { type Address, type Client, type Hash, isHash } from "viem";
import { readContract } from "viem/actions";

import { simpleBitcoinVaultStateAbi } from "../../contracts/simple-bitcoin-vault-state.js";
import {
  assertAddress,
  assertBigInt,
  assertObject,
  assertNonEmptyString,
} from "../../utils.js";

/**
 * Gets the withdrawal UUID specific to the associated vault.
 * @param uuid The withdrawal UUID
 * @returns The withdrawal uuid specific to the associated vault.
 */
const getWithdrawalVaultUUID = (uuid: bigint) =>
  uuid & BigInt(0x00000000ffffffff);

export async function acknowledgedDeposits(
  client: Client,
  parameters: { txId: string; vaultStateAddress: Address },
) {
  assertObject(parameters, "parameters");
  const { txId, vaultStateAddress } = parameters;
  assertNonEmptyString(txId, "txId");
  assertAddress(vaultStateAddress, "vaultStateAddress");
  const hash: Hash = isHash(txId) ? txId : `0x${txId}`;
  return readContract(client, {
    abi: simpleBitcoinVaultStateAbi,
    address: vaultStateAddress,
    args: [hash],
    functionName: "acknowledgedDeposits",
  });
}

export async function isBitcoinWithdrawalFulfilled(
  client: Client,
  parameters: { uuid: bigint; vaultStateAddress: Address },
) {
  assertObject(parameters, "parameters");
  const { uuid, vaultStateAddress } = parameters;
  assertBigInt(uuid, "uuid");
  assertAddress(vaultStateAddress, "vaultStateAddress");
  return readContract(client, {
    abi: simpleBitcoinVaultStateAbi,
    address: vaultStateAddress,
    args: [Number(getWithdrawalVaultUUID(uuid))],
    functionName: "isWithdrawalFulfilled",
  });
}

export async function isBitcoinWithdrawalChallenged(
  client: Client,
  parameters: { uuid: bigint; vaultStateAddress: Address },
) {
  assertObject(parameters, "parameters");
  const { uuid, vaultStateAddress } = parameters;
  assertBigInt(uuid, "uuid");
  assertAddress(vaultStateAddress, "vaultStateAddress");
  return readContract(client, {
    abi: simpleBitcoinVaultStateAbi,
    address: vaultStateAddress,
    args: [Number(getWithdrawalVaultUUID(uuid))],
    functionName: "isWithdrawalAlreadyChallenged",
  });
}
