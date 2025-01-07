export const getWithdrawalVaultUUID = (uuid: bigint) =>
  Number(uuid & BigInt(0x00000000ffffffff));

export const getVaultUUID = (uuid: bigint) =>
  Number(uuid & BigInt(0xffffffff00000000)) >> 32;
