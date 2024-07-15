import { actionsToDecorator } from "./actions-to-decorator.js";
import * as bitcoinTunnelManagerActions from "../actions/bitcoin-tunnel-manager.js";

export const hemiPublicBitcoinTunnelManagerActions = () =>
  actionsToDecorator(bitcoinTunnelManagerActions);
