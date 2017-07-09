// curry :: ((Any, ...) -> Any) -> Any -> Any ...
const curry = (func, ...args) =>
  args.length >= func.length ? func(...args) : curry.bind(this, func, ...args)

module.exports = curry
