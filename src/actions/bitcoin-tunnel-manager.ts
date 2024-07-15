import { type Address, type Client } from "viem";
import { readContract } from "viem/actions";

import {
  bitcoinTunnelManagerAbi,
  bitcoinTunnelManagerAddresses,
} from "../contracts/bitcoin-tunnel-manager.js";

export function getVaultOwnerByBTCAddress(
  client: Client,
  parameters: { btcAddress: string },
) {
  const { btcAddress } = parameters;
  return readContract(client, {
    abi: bitcoinTunnelManagerAbi,
    address: bitcoinTunnelManagerAddresses[client.chain!.id],
    args: [btcAddress],
    functionName: "getVaultOwnerByBTCAddress",
  });
}

export function getVaultAddressByOwner(
  client: Client,
  parameters: { ownerAddress: Address },
) {
  const { ownerAddress } = parameters;
  return readContract(client, {
    address: bitcoinTunnelManagerAddresses[client.chain!.id],
    abi: bitcoinTunnelManagerAbi,
    args: [ownerAddress],
    functionName: "getVaultAddressByOwner",
  });
}
