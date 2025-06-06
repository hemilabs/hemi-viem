import { type Client, type Hash, http } from "viem";

import { assertObject, assertHash } from "../../utils.js";

export async function getBtcFinalityByBlockHash(
  client: Client,
  parameters: { hash: Hash },
) {
  assertObject(parameters, "parameters");
  const { hash } = parameters;
  assertHash(hash, "hash");
  try {
    const opNodeHttp = http(client.chain!.rpcUrls.opNode.http[0]);
    const transport = opNodeHttp({});
    const response = await transport.request({
      method: "optimism_btcFinalityByBlockHash",
      params: [hash],
    });
    return Array.isArray(response) && response.length > 0
      ? response[0]
      : response;
  } catch (err) {
    // https://www.jsonrpc.org/specification#error_object
    if (err.code !== -32000) {
      throw err;
    }
    return {
      btc_finality: -9,
      btc_pub_header_hash: "",
      btc_pub_height: -1,
      l2_keystone: null,
    };
  }
}
