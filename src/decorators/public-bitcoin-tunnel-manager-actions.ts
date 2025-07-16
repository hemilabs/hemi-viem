import * as bitcoinTunnelManagerActions from "../actions/public/bitcoin-tunnel-manager.js";

import { actionsToDecorator } from "./actions-to-decorator.js";

export const hemiPublicBitcoinTunnelManagerActions = () =>
  actionsToDecorator(bitcoinTunnelManagerActions);
