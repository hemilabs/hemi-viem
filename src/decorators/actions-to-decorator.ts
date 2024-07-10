import {
  type Chain,
  type Client,
  type Transport,
} from "viem"

type ActionFunction<
  TTransport extends Transport = Transport,
  TChain extends Chain | undefined = Chain | undefined,
> = (client: Client<TTransport, TChain>, parameters: any) => any

export type Actions<
  TTransport extends Transport = Transport,
  TChain extends Chain | undefined = Chain | undefined,
> = {
  [key: string]: ActionFunction<TTransport, TChain>
}

// It seems that we need to export this, because otherwise it won't be copied to the declaration types
// needed for Javascript, causing the error TS7056 as below.
export type DecoratedActions<
  T extends Actions<TTransport, TChain>,
  TTransport extends Transport = Transport,
  TChain extends Chain | undefined = Chain | undefined
> = { [K in keyof T]: (properties: Parameters<T[K]>[1]) => ReturnType<T[K]> }

// This approach may need to be revisited, as it causes issues on consumer of the packages
// See https://github.com/wevm/viem/discussions/2489
export const actionsToDecorator = function <
  TActions extends Actions<TTransport, TChain>,
  TTransport extends Transport = Transport,
  TChain extends Chain | undefined = Chain | undefined
>(
  actions: TActions
): (
  client: Client<TTransport, TChain>
) => DecoratedActions<TActions, TTransport, TChain> {
  // Manual declaration is needed, because while TS inference works ok, when compiling to javascript, it fails
  // to emit the declaration types (needed so intellisense works on javascript) by throwing
  // error TS7056: The inferred type of this node exceeds the maximum length the compiler will serialize. An explicit type annotation is needed.
  return function (
    client: Client<TTransport, TChain>
  ): DecoratedActions<TActions, TTransport, TChain> {
    return Object.fromEntries(
      Object.keys(actions).map((action) => [
        action,
        (properties: Parameters<TActions[typeof action]>[1]) =>
          actions[action](client, properties),
      ])
    ) as DecoratedActions<TActions, TTransport, TChain>
  }
}