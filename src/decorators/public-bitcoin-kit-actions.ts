import { actionsToDecorator } from "./actions-to-decorator.js";
import * as bitcoinKitActions from "../actions/public/bitcoin-kit.js";

export const hemiPublicBitcoinKitActions = () =>
  actionsToDecorator(bitcoinKitActions);
