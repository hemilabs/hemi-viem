import { type Chain, type Transport } from 'viem'

import { actionsToDecorator } from './actions-to-decorator.js'
import * as bitcoinVaultActions from '../actions/bitcoin-vault.js'

export const hemiPublicBitcoinVaultActions = <
  TTransport extends Transport = Transport,
  TChain extends Chain | undefined = Chain | undefined,
>() =>
  actionsToDecorator<typeof bitcoinVaultActions, TTransport, TChain>(
    bitcoinVaultActions,
  )
