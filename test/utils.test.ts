import { zeroAddress, zeroHash } from "viem";
import { describe, it, expect } from "vitest";

import {
  assertNonEmptyString,
  assertPositiveInteger,
  assertAddress,
  assertObject,
  assertHash,
  assertBigInt,
} from "../src/utils";

describe("assertNonEmptyString", function () {
  it("should not throw for a non-empty string", function () {
    expect(() => assertNonEmptyString("hello", "test")).not.toThrow();
  });
  it("should throw for an empty string", function () {
    expect(() => assertNonEmptyString("", "test")).toThrow();
  });
  it("should throw for a non-string", function () {
    expect(() => assertNonEmptyString(123, "test")).toThrow();
    expect(() => assertNonEmptyString(undefined, "test")).toThrow();
    expect(() => assertNonEmptyString(null, "test")).toThrow();
  });
});

describe("assertPositiveInteger", function () {
  it("should not throw for a positive integer", function () {
    expect(() => assertPositiveInteger(5, "test")).not.toThrow();
    expect(() => assertPositiveInteger(0, "test")).not.toThrow();
  });
  it("should throw for a negative integer", function () {
    expect(() => assertPositiveInteger(-1, "test")).toThrow();
  });
  it("should throw for a non-integer", function () {
    expect(() => assertPositiveInteger(1.5, "test")).toThrow();
    expect(() => assertPositiveInteger("1", "test")).toThrow();
  });
});

describe("assertAddress", function () {
  it("should not throw for a valid address", function () {
    expect(() => assertAddress(zeroAddress, "test")).not.toThrow();
  });
  it("should throw for an invalid address", function () {
    expect(() => assertAddress("0x123", "test")).toThrow();
    expect(() => assertAddress(123, "test")).toThrow();
    expect(() => assertAddress(undefined, "test")).toThrow();
  });
});

describe("assertObject", function () {
  it("should not throw for a plain object", function () {
    expect(() => assertObject({ a: 1 }, "test")).not.toThrow();
  });
  it("should throw for null", function () {
    expect(() => assertObject(null, "test")).toThrow();
  });
  it("should throw for an array", function () {
    expect(() => assertObject([], "test")).toThrow();
  });
  it("should throw for a non-object", function () {
    expect(() => assertObject("string", "test")).toThrow();
    expect(() => assertObject(123, "test")).toThrow();
  });
});

describe("assertHash", function () {
  it("should not throw for a valid hash", function () {
    expect(() => assertHash(zeroHash, "test")).not.toThrow();
  });
  it("should throw for an invalid hash", function () {
    expect(() => assertHash("0x123", "test")).toThrow();
    expect(() => assertHash(123, "test")).toThrow();
    expect(() => assertHash(undefined, "test")).toThrow();
  });
});

describe("assertBigInt", function () {
  it("should not throw for a bigint", function () {
    expect(() => assertBigInt(123n, "test")).not.toThrow();
  });
  it("should throw for a non-bigint", function () {
    expect(() => assertBigInt(123, "test")).toThrow();
    expect(() => assertBigInt("123", "test")).toThrow();
    expect(() => assertBigInt(undefined, "test")).toThrow();
  });
});
