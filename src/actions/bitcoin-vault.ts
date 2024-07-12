import {
  type Address,
  type Chain,
  type Client,
  type Hash,
  type Transport,
  isHash,
} from "viem";
import { readContract } from "viem/actions";

import { bitcoinVaultAbi } from "../contracts/bitcoin-vault.js";

export function acknowledgedDeposits<
  TTransport extends Transport = Transport,
  TChain extends Chain | undefined = Chain | undefined,
>(
  client: Client<TTransport, TChain>,
  parameters: { txId: string; vaultAddress: Address },
) {
  const { txId, vaultAddress } = parameters;
  const hash: Hash = isHash(txId) ? txId : `0x${txId}`;
  return readContract(client, {
    address: vaultAddress,
    abi: bitcoinVaultAbi,
    functionName: "acknowledgedDeposits",
    args: [hash],
  });
}

export function getBitcoinCustodyAddress<
  TTransport extends Transport = Transport,
  TChain extends Chain | undefined = Chain | undefined,
>(client: Client<TTransport, TChain>, parameters: { vaultAddress: Address }) {
  const { vaultAddress } = parameters;
  return readContract(client, {
    address: vaultAddress,
    abi: bitcoinVaultAbi,
    functionName: "getBitcoinCustodyAddress",
    args: [],
  });
}
