import {
  type Chain,
  type Client,
  type Transport,
} from "viem"

type Actions<
  TTransport extends Transport = Transport,
  TChain extends Chain | undefined = Chain | undefined,
> = {
  [key: string]: (client: Client<TTransport, TChain>, parameters: any) => any
}

type DecoratedActions<
  T extends Actions<TTransport, TChain>,
  TTransport extends Transport = Transport,
  TChain extends Chain | undefined = Chain | undefined
> = { [K in keyof T]: (properties: Parameters<T[K]>[1]) => ReturnType<T[K]> }

export const actionsToDecorator = function <
  TActions extends Actions<TTransport, TChain>,
  TTransport extends Transport = Transport,
  TChain extends Chain | undefined = Chain | undefined
>(
  actions: TActions
) {
  return function (
    client: Client<TTransport, TChain>
  ) {
    return Object.fromEntries(
      Object.keys(actions).map((action) => [
        action,
        (properties: Parameters<TActions[typeof action]>[1]) =>
          actions[action](client, properties),
      ])
    ) as DecoratedActions<TActions, TTransport, TChain>
  }
}
