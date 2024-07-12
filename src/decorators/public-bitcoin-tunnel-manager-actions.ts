import { type Chain, type Transport } from 'viem'

import { actionsToDecorator } from './actions-to-decorator.js'
import * as bitcoinTunnelManagerActions from '../actions/bitcoin-tunnel-manager.js'

export const hemiPublicBitcoinTunnelManagerActions = <
  TTransport extends Transport = Transport,
  TChain extends Chain | undefined = Chain | undefined,
>() =>
  actionsToDecorator<typeof bitcoinTunnelManagerActions, TTransport, TChain>(
    bitcoinTunnelManagerActions,
  )
