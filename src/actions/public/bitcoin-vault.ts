import { type Address, type Client, type Hash, isHash } from "viem";
import { readContract } from "viem/actions";

import { bitcoinVaultAbi } from "../../contracts/bitcoin-vault.js";

export function acknowledgedDeposits(
  client: Client,
  parameters: { txId: string; vaultAddress: Address },
) {
  const { txId, vaultAddress } = parameters;
  const hash: Hash = isHash(txId) ? txId : `0x${txId}`;
  return readContract(client, {
    abi: bitcoinVaultAbi,
    address: vaultAddress,
    args: [hash],
    functionName: "acknowledgedDeposits",
  });
}

export function getBitcoinCustodyAddress(
  client: Client,
  parameters: { vaultAddress: Address },
) {
  const { vaultAddress } = parameters;
  return readContract(client, {
    abi: bitcoinVaultAbi,
    address: vaultAddress,
    args: [],
    functionName: "getBitcoinCustodyAddress",
  });
}
