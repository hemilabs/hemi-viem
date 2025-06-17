import { type Address, type Client } from "viem";
import { readContract } from "viem/actions";

import { simpleBitcoinVaultAbi } from "../../contracts/simple-bitcoin-vault.js";
import { assertAddress, assertObject } from "../../utils.js";

import {
  getPendingWithdrawalAmountSat,
  getPendingWithdrawalCount,
} from "./simple-bitcoin-vault-state.js";

export async function getBitcoinCustodyAddress(
  client: Client,
  parameters: { vaultAddress: Address },
) {
  assertObject(parameters, "parameters");
  const { vaultAddress } = parameters;
  assertAddress(vaultAddress, "vaultAddress");
  return readContract(client, {
    abi: simpleBitcoinVaultAbi,
    address: vaultAddress,
    args: [],
    functionName: "bitcoinCustodyAddress",
  });
}

export async function getBitcoinVaultStateAddress(
  client: Client,
  parameters: { vaultAddress: Address },
) {
  assertObject(parameters, "parameters");
  const { vaultAddress } = parameters;
  assertAddress(vaultAddress, "vaultAddress");
  return readContract(client, {
    abi: simpleBitcoinVaultAbi,
    address: vaultAddress,
    args: [],
    functionName: "vaultStateChild",
  });
}

export async function getBitcoinWithdrawalGracePeriod(
  client: Client,
  parameters: { vaultAddress: Address },
) {
  assertObject(parameters, "parameters");
  const { vaultAddress } = parameters;
  assertAddress(vaultAddress, "vaultAddress");
  return readContract(client, {
    abi: simpleBitcoinVaultAbi,
    address: vaultAddress,
    functionName: "WITHDRAWAL_GRACE_PERIOD_SECONDS",
  });
}

export async function getMinimumDepositSats(
  client: Client,
  parameters: { vaultAddress: Address },
) {
  assertObject(parameters, "parameters");
  const { vaultAddress } = parameters;
  assertAddress(vaultAddress, "vaultAddress");
  return readContract(client, {
    abi: simpleBitcoinVaultAbi,
    address: vaultAddress,
    args: [],
    functionName: "MINIMUM_DEPOSIT_SATS",
  });
}

export async function getMinimumWithdrawalSats(
  client: Client,
  parameters: { vaultAddress: Address },
) {
  assertObject(parameters, "parameters");
  const { vaultAddress } = parameters;
  assertAddress(vaultAddress, "vaultAddress");
  return readContract(client, {
    abi: simpleBitcoinVaultAbi,
    address: vaultAddress,
    args: [],
    functionName: "MINIMUM_WITHDRAWAL_SATS",
  });
}

export async function getVaultStatus(
  client: Client,
  parameters: { vaultAddress: Address },
) {
  assertObject(parameters, "parameters");
  const { vaultAddress } = parameters;
  assertAddress(vaultAddress, "vaultAddress");
  return readContract(client, {
    abi: simpleBitcoinVaultAbi,
    address: vaultAddress,
    args: [],
    functionName: "getStatus",
  });
}

export async function getVaultPendingWithdrawalsData(
  client: Client,
  parameters: { vaultAddress: Address },
) {
  assertObject(parameters, "parameters");
  const { vaultAddress } = parameters;
  assertAddress(vaultAddress, "vaultAddress");
  const vaultStateAddress = await getBitcoinVaultStateAddress(client, {
    vaultAddress,
  });
  const pendingWithdrawalCount = await getPendingWithdrawalCount(client, {
    vaultStateAddress,
  });
  const pendingWithdrawalAmountSat = pendingWithdrawalCount
    ? await getPendingWithdrawalAmountSat(client, { vaultStateAddress })
    : BigInt(0);
  return {
    pendingWithdrawalAmountSat,
    pendingWithdrawalCount,
  };
}
