import { actionsToDecorator } from "./actions-to-decorator.js";
import * as bitcoinVaultActions from "../actions/bitcoin-vault.js";

export const hemiPublicBitcoinVaultActions = () =>
  actionsToDecorator(bitcoinVaultActions);
