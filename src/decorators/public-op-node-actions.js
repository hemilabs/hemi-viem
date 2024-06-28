import { actionsToDecorator } from "./actions-to-decorator.js"
import * as opNodeActions from "../actions/get-btc-finality-by-block-hash.js"

export const hemiPublicOpNodeActions = function () {
  return actionsToDecorator(opNodeActions)
}
