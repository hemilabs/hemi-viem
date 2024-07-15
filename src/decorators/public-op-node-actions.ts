import { actionsToDecorator } from "./actions-to-decorator.js";
import * as opNodeActions from "../actions/public/get-btc-finality-by-block-hash.js";

export const hemiPublicOpNodeActions = () => actionsToDecorator(opNodeActions);
