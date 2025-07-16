import * as opNodeActions from "../actions/public/get-btc-finality-by-block-hash.js";

import { actionsToDecorator } from "./actions-to-decorator.js";

export const hemiPublicOpNodeActions = () => actionsToDecorator(opNodeActions);
