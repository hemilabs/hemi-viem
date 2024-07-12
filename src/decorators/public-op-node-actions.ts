import { type Chain, type Transport } from "viem";

import { actionsToDecorator } from "./actions-to-decorator.js";
import * as opNodeActions from "../actions/get-btc-finality-by-block-hash.js";

export const hemiPublicOpNodeActions = <
  TTransport extends Transport = Transport,
  TChain extends Chain | undefined = Chain | undefined,
>() =>
  actionsToDecorator<typeof opNodeActions, TTransport, TChain>(opNodeActions);
