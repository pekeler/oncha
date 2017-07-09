// compose :: ... -> (Any -> Any)
module.exports = (...rest) => (...a) =>
  rest
    .splice(0, rest.length - 1)
    .reduceRight((acc, func) => func(acc), rest.splice(rest.length - 1)[0](...a))
