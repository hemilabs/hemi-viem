import { getBtcFinalityByBlockHash } from "../actions/get-btc-finality-by-block-hash.js"

export const hemiPublicOpNodeActions = function () {
  return function (client) {
    return {
      getBtcFinalityByBlockHash: (parameters) =>
        getBtcFinalityByBlockHash(client, parameters),
    }
  }
}
