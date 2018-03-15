const compound = (...fns) => (...args) =>
  fns
    .reverse()
    .reduce((result, fn) => fn(...[result, ...args.slice(1)]), args[0])

module.exports = compound
