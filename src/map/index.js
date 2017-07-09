const compose = require('compose')

// map :: (a -> b) -> Functor -> Functor
const map = f => functor => functor.map(f)

// composeMap :: ... -> (Any -> Any)
module.exports = (...functions) => functor =>
  functions.reduceRight((acc, f) => map(f)(acc), functor)
