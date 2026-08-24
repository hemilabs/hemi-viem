import { type Address, createPublicClient, http, isAddress, isHex } from "viem";
import { beforeAll, describe, expect, it } from "vitest";

import {
  getBitcoinAddressBalance,
  getLastHeader,
  getUtxosForBitcoinAddress,
  isAddressValid,
} from "../../src/actions/public/bitcoin-kit";
import {
  getBitcoinChainLastHeader,
  getBitcoinKitAddress,
  getGlobalConfigAddress,
  getTunnelManagerStatus,
  getVaultByIndex,
  getVaultCounter,
  getVaultIndexByBTCAddress,
} from "../../src/actions/public/bitcoin-tunnel-manager";
import { getWithdrawalsPaused } from "../../src/actions/public/global-config";
import {
  getBitcoinCustodyAddress,
  getBitcoinVaultStateAddress,
  getBitcoinWithdrawalGracePeriod,
  getMinimumDepositSats,
  getMinimumWithdrawalSats,
  getVaultStatus,
} from "../../src/actions/public/simple-bitcoin-vault";
import {
  acknowledgedDeposits,
  calculateDepositFee,
  calculateWithdrawalFee,
  getPendingWithdrawalAmountSat,
  getPendingWithdrawalCount,
  isBitcoinWithdrawalChallenged,
  isBitcoinWithdrawalFulfilled,
} from "../../src/actions/public/simple-bitcoin-vault-state";
import { hemi } from "../../src/chains/hemi";

const client = createPublicClient({
  chain: hemi,
  transport: http(),
});

// Addresses are not hardcoded but discovered through the tunnel manager so the
// suite keeps working as vaults are added or contracts are redeployed.
let bitcoinKitAddress: Address;
let globalConfigAddress: Address;
let vaultAddress: Address;
let vaultStateAddress: Address;
let custodyAddress: string;

beforeAll(async function () {
  bitcoinKitAddress = await getBitcoinKitAddress(client);
  globalConfigAddress = await getGlobalConfigAddress(client);
  vaultAddress = await getVaultByIndex(client, { vaultIndex: 0 });
  vaultStateAddress = await getBitcoinVaultStateAddress(client, {
    vaultAddress,
  });
  custodyAddress = await getBitcoinCustodyAddress(client, { vaultAddress });
});

describe("bitcoin tunnel manager public actions e2e", function () {
  it("should return the vault counter as a number", async function () {
    const result = await getVaultCounter(client);
    expect(typeof result).toBe("number");
    expect(result).toBeGreaterThanOrEqual(0);
  });

  it("should return the bitcoin kit address", async function () {
    const result = await getBitcoinKitAddress(client);
    expect(isAddress(result)).toBe(true);
  });

  it("should return the global config address", async function () {
    const result = await getGlobalConfigAddress(client);
    expect(isAddress(result)).toBe(true);
  });

  it("should return the vault address for an index", async function () {
    const result = await getVaultByIndex(client, { vaultIndex: 0 });
    expect(isAddress(result)).toBe(true);
  });

  it("should return the vault index for a bitcoin custody address", async function () {
    const result = await getVaultIndexByBTCAddress(client, {
      btcAddress: custodyAddress,
    });
    expect(result).toBe(0);
  });

  it("should return the tunnel manager status", async function () {
    const result = await getTunnelManagerStatus(client);
    expect(typeof result.withdrawalsPaused).toBe("boolean");
  });

  it("should return the bitcoin chain last header", async function () {
    const result = await getBitcoinChainLastHeader(client);
    expect(typeof result.height).toBe("number");
    expect(typeof result.blockHash).toBe("string");
    expect(isHex(result.blockHash)).toBe(true);
  });
});

describe("global config public actions e2e", function () {
  it("should return whether withdrawals are paused", async function () {
    const result = await getWithdrawalsPaused(client, { globalConfigAddress });
    expect(typeof result).toBe("boolean");
  });
});

describe("simple bitcoin vault public actions e2e", function () {
  it("should return the bitcoin custody address as a string", async function () {
    const result = await getBitcoinCustodyAddress(client, { vaultAddress });
    expect(typeof result).toBe("string");
  });

  it("should return the bitcoin vault state address", async function () {
    const result = await getBitcoinVaultStateAddress(client, { vaultAddress });
    expect(isAddress(result)).toBe(true);
  });

  it("should return the minimum deposit sats as a bigint", async function () {
    const result = await getMinimumDepositSats(client, { vaultAddress });
    expect(typeof result).toBe("bigint");
  });

  it("should return the minimum withdrawal sats as a bigint", async function () {
    const result = await getMinimumWithdrawalSats(client, { vaultAddress });
    expect(typeof result).toBe("bigint");
  });

  it("should return the withdrawal grace period as a bigint", async function () {
    const result = await getBitcoinWithdrawalGracePeriod(client, {
      vaultAddress,
    });
    expect(typeof result).toBe("bigint");
  });

  it("should return the vault status as a number", async function () {
    const result = await getVaultStatus(client, { vaultAddress });
    expect(typeof result).toBe("number");
  });
});

describe("simple bitcoin vault state public actions e2e", function () {
  it("should return whether a deposit is acknowledged as a boolean", async function () {
    const result = await acknowledgedDeposits(client, {
      txId: `0x${"0".repeat(64)}`,
      vaultStateAddress,
    });
    expect(typeof result).toBe("boolean");
  });

  it("should return the pending withdrawal count as a bigint", async function () {
    const result = await getPendingWithdrawalCount(client, {
      vaultStateAddress,
    });
    expect(typeof result).toBe("bigint");
  });

  it("should return the pending withdrawal amount sat as a bigint", async function () {
    const result = await getPendingWithdrawalAmountSat(client, {
      vaultStateAddress,
    });
    expect(typeof result).toBe("bigint");
  });

  it("should return the deposit fee as a bigint", async function () {
    const result = await calculateDepositFee(client, {
      depositAmount: BigInt(100000),
      vaultStateAddress,
    });
    expect(typeof result).toBe("bigint");
  });

  it("should return the withdrawal fee as a bigint", async function () {
    const result = await calculateWithdrawalFee(client, {
      vaultStateAddress,
      withdrawalAmount: BigInt(100000),
    });
    expect(typeof result).toBe("bigint");
  });

  it("should return whether a withdrawal is fulfilled as a boolean", async function () {
    const result = await isBitcoinWithdrawalFulfilled(client, {
      uuid: BigInt(0),
      vaultStateAddress,
    });
    expect(typeof result).toBe("boolean");
  });

  it("should return whether a withdrawal is challenged as a boolean", async function () {
    const result = await isBitcoinWithdrawalChallenged(client, {
      uuid: BigInt(0),
      vaultStateAddress,
    });
    expect(typeof result).toBe("boolean");
  });
});

describe("bitcoin kit public actions e2e", function () {
  it("should return the last bitcoin header", async function () {
    const result = await getLastHeader(client, { bitcoinKitAddress });
    expect(typeof result.height).toBe("number");
    expect(typeof result.blockHash).toBe("string");
    expect(isHex(result.blockHash)).toBe(true);
  });

  it("should return the bitcoin address balance as a bigint", async function () {
    const result = await getBitcoinAddressBalance(client, {
      bitcoinKitAddress,
      btcAddress: custodyAddress,
    });
    expect(typeof result).toBe("bigint");
  });

  it("should return the utxos for a bitcoin address as an array", async function () {
    const result = await getUtxosForBitcoinAddress(client, {
      bitcoinKitAddress,
      btcAddress: custodyAddress,
      pageNumber: 1,
      pageSize: 10,
    });
    expect(Array.isArray(result)).toBe(true);
  });

  it("should return true for a valid bitcoin address", async function () {
    const result = await isAddressValid(client, {
      bitcoinKitAddress,
      btcAddress: custodyAddress,
    });
    expect(result).toBe(true);
  });
});
