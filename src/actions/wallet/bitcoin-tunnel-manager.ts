import { type Address, type Client, Hash, type Hex, isHash } from "viem";
import { writeContract } from "viem/actions";

import {
  bitcoinTunnelManagerAbi,
  bitcoinTunnelManagerAddresses,
} from "../../contracts/bitcoin-tunnel-manager.js";
import {
  assertAddress,
  assertBigInt,
  assertHex,
  assertNonEmptyString,
  assertObject,
  assertPositiveInteger,
} from "../../utils.js";

export async function confirmDeposit(
  client: Client,
  parameters: {
    extraInfo: Hex;
    from: Address;
    outputIndex: bigint;
    txId: string;
    vaultIndex: number;
  },
) {
  assertObject(parameters, "parameters");
  const { extraInfo, from, outputIndex, txId, vaultIndex } = parameters;
  assertHex(extraInfo, "extraInfo");
  assertAddress(from, "from");
  assertBigInt(outputIndex, "outputIndex");
  assertNonEmptyString(txId, "txId");
  assertPositiveInteger(vaultIndex, "vaultIndex");
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

export async function initiateWithdrawal(
  client: Client,
  parameters: {
    amount: bigint;
    btcAddress: string;
    from: Address;
    vaultIndex: number;
  },
) {
  assertObject(parameters, "parameters");
  const { amount, btcAddress, from, vaultIndex } = parameters;
  assertBigInt(amount, "amount");
  assertNonEmptyString(btcAddress, "btcAddress");
  assertAddress(from, "from");
  assertPositiveInteger(vaultIndex, "vaultIndex");
  return writeContract(client, {
    abi: bitcoinTunnelManagerAbi,
    account: from,
    address: bitcoinTunnelManagerAddresses[client.chain!.id],
    args: [vaultIndex, btcAddress, amount],
    chain: client.chain,
    functionName: "initiateWithdrawal",
  });
}

export async function challengeWithdrawal(
  client: Client,
  parameters: {
    extraInfo?: Hex;
    from: Address;
    uuid: bigint;
  },
) {
  assertObject(parameters, "parameters");
  const { extraInfo = "0x", from, uuid } = parameters;
  assertAddress(from, "from");
  assertBigInt(uuid, "uuid");
  assertHex(extraInfo, "extraInfo");

  return writeContract(client, {
    abi: bitcoinTunnelManagerAbi,
    account: from,
    address: bitcoinTunnelManagerAddresses[client.chain!.id],
    args: [uuid, extraInfo],
    chain: client.chain,
    functionName: "challengeWithdrawal",
  });
}
