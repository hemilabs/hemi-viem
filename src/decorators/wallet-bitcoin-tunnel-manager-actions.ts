import * as bitcoinTunnelManagerActions from "../actions/wallet/bitcoin-tunnel-manager.js";

import { actionsToDecorator } from "./actions-to-decorator.js";

export const hemiWalletBitcoinTunnelManagerActions = () =>
  actionsToDecorator(bitcoinTunnelManagerActions);
