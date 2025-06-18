import { type Address, type Client } from "viem";
import { readContract } from "viem/actions";

import { globalConfigAbi } from "../../contracts/global-config.js";
import { assertAddress, assertObject } from "../../utils.js";

export function getWithdrawalsPaused(
  client: Client,
  parameters: { globalConfigAddress: Address },
) {
  assertObject(parameters, "parameters");
  const { globalConfigAddress } = parameters;
  assertAddress(globalConfigAddress, "globalConfigAddress");
  return readContract(client, {
    abi: globalConfigAbi,
    address: globalConfigAddress,
    functionName: "withdrawalsPaused",
  });
}
