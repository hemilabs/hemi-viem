import { Address, Hash, isAddress, isHash } from "viem";

export function assertNonEmptyString(
  value: unknown,
  name: string,
): asserts value is string {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(
      `Invalid or missing parameter: ${name}. Received: ${JSON.stringify(value)}`,
    );
  }
}

export function assertPositiveInteger(
  value: unknown,
  name: string,
): asserts value is number {
  if (typeof value !== "number" || !Number.isInteger(value) || value < 0) {
    throw new Error(
      `Invalid or missing parameter: ${name}. Received: ${JSON.stringify(value)}`,
    );
  }
}

export function assertAddress(
  value: unknown,
  name: string,
): asserts value is Address {
  if (typeof value !== "string" || !isAddress(value, { strict: false })) {
    throw new Error(
      `Invalid or missing address parameter: ${name}. Received: ${JSON.stringify(value)}`,
    );
  }
}

export function assertObject(
  value: unknown,
  name: string,
): asserts value is Record<string, unknown> {
  // both null and array return "object" for typeof
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    throw new Error(
      `Invalid or missing parameter object: ${name}. Received: ${JSON.stringify(value)}`,
    );
  }
}

export function assertHash(
  value: unknown,
  name: string,
): asserts value is Hash {
  if (typeof value !== "string" || !isHash(value)) {
    throw new Error(
      `Invalid or missing hash parameter: ${name}. Received: ${JSON.stringify(value)}`,
    );
  }
}

export function assertBigInt(
  value: unknown,
  name: string,
): asserts value is bigint {
  if (typeof value !== "bigint") {
    throw new Error(
      `Invalid or missing bigint parameter: ${name}. Received: ${JSON.stringify(value)}`,
    );
  }
}
