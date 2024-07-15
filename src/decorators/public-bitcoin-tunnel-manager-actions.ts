import { actionsToDecorator } from "./actions-to-decorator.js";
import * as bitcoinTunnelManagerActions from "../actions/public/bitcoin-tunnel-manager.js";

export const hemiPublicBitcoinTunnelManagerActions = () =>
  actionsToDecorator(bitcoinTunnelManagerActions);
