import {type Chain, type Transport } from 'viem'

import { actionsToDecorator } from "./actions-to-decorator.js"
import * as bitcoinKitActions from "../actions/bitcoin-kit.js"

export const hemiPublicBitcoinKitActions = <
  TTransport extends Transport = Transport,
  TChain extends Chain | undefined = Chain | undefined
>() => actionsToDecorator<typeof bitcoinKitActions, TTransport, TChain>(bitcoinKitActions)
