import { type Address, type Client } from "viem";
import { readContract } from "viem/actions";

import { simpleBitcoinVaultAbi } from "../../contracts/simple-bitcoin-vault.js";

export function getBitcoinCustodyAddress(
  client: Client,
  parameters: { vaultAddress: Address },
) {
  const { vaultAddress } = parameters;
  return readContract(client, {
    abi: simpleBitcoinVaultAbi,
    address: vaultAddress,
    args: [],
    functionName: "bitcoinCustodyAddress",
  });
}

export function getBitcoinVaultStateAddress(
  client: Client,
  parameters: { vaultAddress: Address },
) {
  const { vaultAddress } = parameters;
  return readContract(client, {
    abi: simpleBitcoinVaultAbi,
    address: vaultAddress,
    args: [],
    functionName: "vaultStateChild",
  });
}

export function getVaultStatus(
  client: Client,
  parameters: { vaultAddress: Address },
) {
  const { vaultAddress } = parameters;
  return readContract(client, {
    abi: simpleBitcoinVaultAbi,
    address: vaultAddress,
    args: [],
    functionName: "getStatus",
  });
}
