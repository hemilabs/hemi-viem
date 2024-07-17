import { type Address, type Client, type Hash, isHash } from "viem";
import { writeContract } from "viem/actions";

import {
  bitcoinTunnelManagerAbi,
  bitcoinTunnelManagerAddresses,
} from "../../contracts/bitcoin-tunnel-manager.js";

export function confirmDeposit(
  client: Client,
  parameters: { from: Address; txId: string; ownerAddress: Address },
) {
  const { from, txId, ownerAddress } = parameters;
  const hash: Hash = isHash(txId) ? txId : `0x${txId}`;
  return writeContract(client, {
    abi: bitcoinTunnelManagerAbi,
    account: from,
    address: bitcoinTunnelManagerAddresses[client.chain!.id],
    args: [hash, ownerAddress],
    chain: client.chain!,
    functionName: "confirmDeposit",
  });
}
