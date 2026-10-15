import { type Address, type Client } from "viem";
import { readContract } from "viem/actions";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { getVaultIndexByBTCAddress } from "../src/actions/public/bitcoin-tunnel-manager";
import { hemi } from "../src/chains/hemi";

vi.mock("viem/actions", () => ({
  readContract: vi.fn(),
}));

const btcAddress = "bc1sharedcustodyaddress";
const vaultAddresses = [
  "0x0000000000000000000000000000000000000001",
  "0x0000000000000000000000000000000000000002",
  "0x0000000000000000000000000000000000000003",
] as const satisfies readonly Address[];
const custodyAddresses: Record<string, string> = {
  [vaultAddresses[0].toLowerCase()]: btcAddress,
  [vaultAddresses[1].toLowerCase()]: "bc1othercustodyaddress",
  [vaultAddresses[2].toLowerCase()]: btcAddress,
};

const client = { chain: hemi } as Client;

describe("getVaultIndexByBTCAddress", function () {
  beforeEach(function () {
    vi.mocked(readContract).mockReset();
    vi.mocked(readContract).mockImplementation(async function (
      _client,
      parameters,
    ) {
      const request = parameters as {
        address: Address;
        args?: readonly unknown[];
        functionName: string;
      };

      if (request.functionName === "vaultCounter") {
        return 3 as never;
      }
      if (request.functionName === "vaults") {
        return vaultAddresses[Number(request.args?.[0])] as never;
      }
      if (request.functionName === "bitcoinCustodyAddress") {
        return custodyAddresses[request.address.toLowerCase()] as never;
      }

      throw new Error(`Unexpected contract read: ${request.functionName}`);
    } as typeof readContract);
  });

  it("returns the newest vault when multiple vaults share a BTC address", async function () {
    const result = await getVaultIndexByBTCAddress(client, { btcAddress });

    expect(result).toBe(2);
  });
});
