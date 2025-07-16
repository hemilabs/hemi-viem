import * as bitcoinKitActions from "../actions/public/bitcoin-kit.js";

import { actionsToDecorator } from "./actions-to-decorator.js";

export const hemiPublicBitcoinKitActions = () =>
  actionsToDecorator(bitcoinKitActions);
