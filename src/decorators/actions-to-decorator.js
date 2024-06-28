export const actionsToDecorator = function (actions) {
  return function (client) {
    return Object.fromEntries(
      Object.keys(actions).map((action) => [
        action,
        (properties) => actions[action](client, properties),
      ])
    )
  }
}
