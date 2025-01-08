/**
 * Gets the withdrawal UUID specific to the associated vault.
 * @param uuid The withdrawal UUID
 * @returns The withdrawal uuid specific to the associated vault.
 */
export const getWithdrawalVaultUUID = (uuid: bigint) =>
  uuid & BigInt(0x00000000ffffffff);

/** @knipignore */
export const getVaultUUID = (uuid: bigint) =>
  (uuid & BigInt(0xffffffff00000000)) >> BigInt(32);
