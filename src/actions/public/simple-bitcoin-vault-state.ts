import { type Address, type Client, type Hash, isHash } from "viem";
import { readContract } from "viem/actions";

import { simpleBitcoinVaultStateAbi } from "../../contracts/simple-bitcoin-vault-state.js";

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

export function getBitcoinWithdrawalBitcoinTxId(
  client: Client,
  parameters: { uuid: bigint; vaultStateAddress: Address },
) {
  const { uuid, vaultStateAddress } = parameters;
  return readContract(client, {
    abi: simpleBitcoinVaultStateAbi,
    address: vaultStateAddress,
    // The withdrawalsToStatus receive just the lower 32 bits of the uuid
    args: [Number(uuid & BigInt(0xffffffff))],
    functionName: "withdrawalsToStatus",
  });
}
