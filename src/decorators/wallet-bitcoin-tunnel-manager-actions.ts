import { actionsToDecorator } from "./actions-to-decorator.js";
import * as bitcoinTunnelManagerActions from "../actions/wallet/bitcoin-tunnel-manager.js";

export const hemiWalletBitcoinTunnelManagerActions = () =>
  actionsToDecorator(bitcoinTunnelManagerActions);
