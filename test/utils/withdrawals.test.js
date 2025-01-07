import { describe, it, expect } from "vitest";
import {
  getWithdrawalVaultUUID,
  getVaultUUID,
} from "../../src/utils/withdrawals";

const uuid = BigInt(17179869217); // Hex is 0x400000021
describe("getWithdrawalVaultUUID", function () {
  it("should return the lower 32 bits of the UUID", function () {
    const result = getWithdrawalVaultUUID(uuid);
    // 21 in hex is 33 in decimal
    expect(result).toBe(BigInt(33));
  });
});

describe("getVaultUUID", function () {
  it("should return the upper 32 bits of the UUID", function () {
    const result = getVaultUUID(uuid);
    expect(result).toBe(BigInt(4));
  });
});
