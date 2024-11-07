import { type Client } from "viem";

type Actions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: (client: Client, parameters: any) => any;
};

type DecoratedActions<T extends Actions> = {
  [K in keyof T]: (properties: Parameters<T[K]>[1]) => ReturnType<T[K]>;
};

export const actionsToDecorator =
  <TActions extends Actions>(actions: TActions) =>
  (client: Client) =>
    Object.fromEntries(
      Object.keys(actions).map((action) => [
        action,
        (properties: Parameters<TActions[typeof action]>[1]) =>
          actions[action](client, properties),
      ]),
    ) as DecoratedActions<TActions>;
