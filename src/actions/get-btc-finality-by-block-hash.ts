import { type Chain, type Hash, type Client, type Transport, http } from 'viem'

export async function getBtcFinalityByBlockHash<
  TTransport extends Transport = Transport,
  TChain extends Chain | undefined = Chain | undefined,
>(client: Client<TTransport, TChain>, parameters: { hash: Hash }) {
  const { hash } = parameters
  try {
    const opNodeHttp = http(client.chain!.rpcUrls.opNode.http[0])
    const transport = opNodeHttp({})
    const response = await transport.request({
      method: 'optimism_btcFinalityByBlockHash',
      params: [hash],
    })
    return Array.isArray(response) && response.length > 0
      ? response[0]
      : response
  } catch (err) {
    // https://www.jsonrpc.org/specification#error_object
    if (err.code !== -32000) {
      throw err
    }
    return {
      l2_keystone: null,
      btc_pub_height: -1,
      btc_pub_header_hash: '',
      btc_finality: -9,
    }
  }
}
