import { encodeFunctionData, Hash, isHash } from "viem";
import { bitcoinTunnelManagerAbi } from "../../contracts";

/**
 * Encodes the transaction data for challenging a BTC withdrawal using the `challengeWithdrawal` function.
 *
 * @param {Object} parameters - The transaction parameters.
 * @param {bigint} parameters.uuid - The UUID of the withdrawal to challenge.
 * @param {Hash} [parameters.extraInfo] - Optional extra info passed as bytes. Defaults to '0x' if not provided.
 *
 * @returns {Hex} - The encoded transaction data.
 */
export const encodeChallengeWithdrawal = ({
  uuid,
  extraInfo,
}: {
  uuid: bigint;
  extraInfo?: Hash;
}) =>
  encodeFunctionData({
    abi: bitcoinTunnelManagerAbi,
    args: [uuid, extraInfo ?? "0x"],
    functionName: "challengeWithdrawal",
  });

/**
 * Encodes the transaction data for confirming a BTC deposit using the `confirmDeposit` function.
 *
 * @param {Object} parameters - The transaction parameters.
 * @param {number} parameters.vaultIndex - The index of the vault handling the deposit.
 * @param {string} parameters.txId - The BTC transaction ID to confirm (with or without 0x prefix).
 * @param {bigint} parameters.outputIndex - The output index in the BTC transaction.
 * @param {Hash} parameters.extraInfo - Additional encoded metadata.
 *
 * @returns {Hex} - The encoded transaction data.
 */
export const encodeConfirmDeposit = ({
  vaultIndex,
  txId,
  outputIndex,
  extraInfo,
}: {
  vaultIndex: number;
  txId: string;
  outputIndex: bigint;
  extraInfo: Hash;
}) =>
  encodeFunctionData({
    abi: bitcoinTunnelManagerAbi,
    args: [
      vaultIndex,
      isHash(txId) ? txId : `0x${txId}`,
      outputIndex,
      extraInfo,
    ],
    functionName: "confirmDeposit",
  });

/**
 * Encodes the transaction data for initiating a BTC withdrawal using the `initiateWithdrawal` function.
 *
 * @param {Object} parameters - The transaction parameters.
 * @param {number} parameters.vaultIndex - The index of the vault initiating the withdrawal.
 * @param {string} parameters.btcAddress - The recipient's BTC address (must be valid bech32 format).
 * @param {bigint} parameters.amount - The amount to be withdrawn, expressed in satoshis.
 *
 * @returns {Hex} - The encoded transaction data.
 */
export const encodeInitiateWithdrawal = ({
  vaultIndex,
  btcAddress,
  amount,
}: {
  vaultIndex: number;
  btcAddress: string;
  amount: bigint;
}) =>
  encodeFunctionData({
    abi: bitcoinTunnelManagerAbi,
    args: [vaultIndex, btcAddress, amount],
    functionName: "initiateWithdrawal",
  });
