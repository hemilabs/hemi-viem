import { actionsToDecorator } from "./actions-to-decorator.js";
import * as simpleBitcoinVaultActions from "../actions/public/simple-bitcoin-vault.js";

export const hemiPublicSimpleBitcoinVaultActions = () =>
  actionsToDecorator(simpleBitcoinVaultActions);
