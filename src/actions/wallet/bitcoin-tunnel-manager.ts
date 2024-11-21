import { type Address, type Client, type Hash, isHash } from "viem";
import { writeContract } from "viem/actions";

import {
  bitcoinTunnelManagerAbi,
  bitcoinTunnelManagerAddresses,
} from "../../contracts/bitcoin-tunnel-manager.js";

export function confirmDeposit(
  client: Client,
  parameters: {
    extraInfo: Hash;
    from: Address;
    outputIndex: bigint;
    txId: string;
    vaultIndex: number;
  },
) {
  const { extraInfo, from, outputIndex, txId, vaultIndex } = parameters;
  const hash: Hash = isHash(txId) ? txId : `0x${txId}`;
  return writeContract(client, {
    abi: bitcoinTunnelManagerAbi,
    account: from,
    address: bitcoinTunnelManagerAddresses[client.chain!.id],
    args: [vaultIndex, hash, outputIndex, extraInfo],
    chain: client.chain,
    functionName: "confirmDeposit",
  });
}

export function initiateWithdrawal(
  client: Client,
  parameters: {
    amount: bigint;
    btcAddress: string;
    from: Address;
    vaultIndex: number;
  },
) {
  const { amount, btcAddress, from, vaultIndex } = parameters;
  return writeContract(client, {
    abi: bitcoinTunnelManagerAbi,
    account: from,
    address: bitcoinTunnelManagerAddresses[client.chain!.id],
    args: [vaultIndex, btcAddress, amount],
    chain: client.chain,
    functionName: "initiateWithdrawal",
  });
}

export function challengeWithdrawal(
  client: Client,
  parameters: {
    extraInfo?: Hash;
    from: Address;
    uuid: bigint;
  },
) {
  const { extraInfo, from, uuid } = parameters;
  return writeContract(client, {
    abi: bitcoinTunnelManagerAbi,
    account: from,
    address: bitcoinTunnelManagerAddresses[client.chain!.id],
    args: [uuid, extraInfo ?? "0x"],
    chain: client.chain,
    functionName: "challengeWithdrawal",
  });
}
