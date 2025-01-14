import { type Address, type Client, type Hash, isHash } from "viem";
import { readContract } from "viem/actions";

import { simpleBitcoinVaultStateAbi } from "../../contracts/simple-bitcoin-vault-state.js";

/**
 * Gets the withdrawal UUID specific to the associated vault.
 * @param uuid The withdrawal UUID
 * @returns The withdrawal uuid specific to the associated vault.
 */
const getWithdrawalVaultUUID = (uuid: bigint) =>
  uuid & BigInt(0x00000000ffffffff);

export function acknowledgedDeposits(
  client: Client,
  parameters: { txId: string; vaultStateAddress: Address },
) {
  const { txId, vaultStateAddress } = parameters;
  const hash: Hash = isHash(txId) ? txId : `0x${txId}`;
  return readContract(client, {
    abi: simpleBitcoinVaultStateAbi,
    address: vaultStateAddress,
    args: [hash],
    functionName: "acknowledgedDeposits",
  });
}

export function isBitcoinWithdrawalFulfilled(
  client: Client,
  parameters: { uuid: bigint; vaultStateAddress: Address },
) {
  const { uuid, vaultStateAddress } = parameters;
  return readContract(client, {
    abi: simpleBitcoinVaultStateAbi,
    address: vaultStateAddress,
    args: [Number(getWithdrawalVaultUUID(uuid))],
    functionName: "isWithdrawalFulfilled",
  });
}

export function isBitcoinWithdrawalChallenged(
  client: Client,
  parameters: { uuid: bigint; vaultStateAddress: Address },
) {
  const { uuid, vaultStateAddress } = parameters;
  return readContract(client, {
    abi: simpleBitcoinVaultStateAbi,
    address: vaultStateAddress,
    args: [Number(getWithdrawalVaultUUID(uuid))],
    functionName: "isWithdrawalAlreadyChallenged",
  });
}
