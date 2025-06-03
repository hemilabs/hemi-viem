import { type Address, type Client } from "viem";
import { readContract } from "viem/actions";

import { simpleBitcoinVaultAbi } from "../../contracts/simple-bitcoin-vault.js";
import { assertAddress, assertObject } from "../../utils.js";

export function getBitcoinCustodyAddress(
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

export function getBitcoinVaultStateAddress(
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

export function getBitcoinWithdrawalGracePeriod(
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

export const getMinimumDepositSats = function (
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
};

export const getMinimumWithdrawalSats = function (
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
};

export function getVaultStatus(
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
