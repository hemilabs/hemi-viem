import * as simpleBitcoinVaultStateActions from "../actions/public/simple-bitcoin-vault-state.js";

import { actionsToDecorator } from "./actions-to-decorator.js";

export const hemiPublicSimpleBitcoinVaultStateActions = () =>
  actionsToDecorator(simpleBitcoinVaultStateActions);
