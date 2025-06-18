import * as globalConfigActions from "../actions/public/global-config.js";

import { actionsToDecorator } from "./actions-to-decorator.js";

export const hemiPublicGlobalConfigActions = () =>
  actionsToDecorator(globalConfigActions);
