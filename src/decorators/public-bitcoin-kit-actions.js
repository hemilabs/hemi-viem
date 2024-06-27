import { actionsToDecorator } from "./actions-to-decorator.js"
import * as bitcoinKitActions from "../actions/bitcoin-kit.js"

export const hemiPublicBitcoinKitActions = function () {
  return actionsToDecorator(bitcoinKitActions)
}
