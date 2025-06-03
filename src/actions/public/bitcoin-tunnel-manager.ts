import { type Client } from "viem";
import { readContract } from "viem/actions";

import {
  bitcoinTunnelManagerAbi,
  bitcoinTunnelManagerAddresses,
} from "../../contracts/bitcoin-tunnel-manager.js";
import {
  assertNonEmptyString,
  assertObject,
  assertPositiveInteger,
} from "../../utils.js";

import { getBitcoinCustodyAddress } from "./simple-bitcoin-vault.js";

export async function getVaultByIndex(
  client: Client,
  parameters: { vaultIndex: number },
) {
  assertObject(parameters, "parameters");
  const { vaultIndex } = parameters;
  assertPositiveInteger(vaultIndex, "vaultIndex");
  return readContract(client, {
    abi: bitcoinTunnelManagerAbi,
    address: bitcoinTunnelManagerAddresses[client.chain!.id],
    args: [vaultIndex],
    functionName: "vaults",
  });
}

export async function getVaultIndexByBTCAddress(
  client: Client,
  parameters: { btcAddress: string },
) {
  assertObject(parameters, "parameters");
  const { btcAddress } = parameters;
  assertNonEmptyString(btcAddress, "btcAddress");
  // We're assuming for now that all vaults are SimpleBitcoinVault

  const vaultCounter = await readContract(client, {
    abi: bitcoinTunnelManagerAbi,
    address: bitcoinTunnelManagerAddresses[client.chain!.id],
    functionName: "vaultCounter",
  });

  for (let vaultIndex = 0; vaultIndex < vaultCounter; vaultIndex++) {
    const vaultAddress = await getVaultByIndex(client, { vaultIndex });
    const bitcoinCustodyAddress = await getBitcoinCustodyAddress(client, {
      vaultAddress,
    });
    if (bitcoinCustodyAddress === btcAddress) {
      return vaultIndex;
    }
  }
  throw new Error("Vault not found");
}

export const getBitcoinKitAddress = (client: Client) =>
  readContract(client, {
    abi: bitcoinTunnelManagerAbi,
    address: bitcoinTunnelManagerAddresses[client.chain!.id],
    args: [],
    functionName: "originalBitcoinKitContract",
  });
