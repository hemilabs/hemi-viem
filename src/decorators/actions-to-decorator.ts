import { type Client } from "viem";

type Actions = {
  [key: string]: (client: Client, parameters: any) => any;
};

type DecoratedActions<T extends Actions> = {
  [K in keyof T]: (properties: Parameters<T[K]>[1]) => ReturnType<T[K]>;
};

export const actionsToDecorator = function <TActions extends Actions>(
  actions: TActions,
) {
  return function (client: Client) {
    return Object.fromEntries(
      Object.keys(actions).map((action) => [
        action,
        (properties: Parameters<TActions[typeof action]>[1]) =>
          actions[action](client, properties),
      ]),
    ) as DecoratedActions<TActions>;
  };
};
