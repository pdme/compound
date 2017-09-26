const compound = (...fns) => (...args) =>
  fns
    .reverse()
    .reduce(
      (result, fn) => fn.apply(null, [result].concat(args.slice(1))),
      args[0],
    )

module.exports = compound
