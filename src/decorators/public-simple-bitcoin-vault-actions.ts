import * as simpleBitcoinVaultActions from "../actions/public/simple-bitcoin-vault.js";

import { actionsToDecorator } from "./actions-to-decorator.js";

export const hemiPublicSimpleBitcoinVaultActions = () =>
  actionsToDecorator(simpleBitcoinVaultActions);
