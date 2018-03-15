const compound = (...fns) => (...args) =>
  fns.reduceRight((result, fn) => fn(...[result, ...args.slice(1)]), args[0])

module.exports = compound
