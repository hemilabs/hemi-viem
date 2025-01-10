import { actionsToDecorator } from "./actions-to-decorator.js";
import * as simpleBitcoinVaultStateActions from "../actions/public/simple-bitcoin-vault-state.js";

export const hemiPublicSimpleBitcoinVaultStateActions = () =>
  actionsToDecorator(simpleBitcoinVaultStateActions);
