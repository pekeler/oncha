// associativity :: Type -> (eq -> (x -> Boolean)))
const associativity = t => eq => x =>
  eq(t.of(x).chain(t.of).chain(t.of), t.of(x).chain(x => t.of(x).chain(t.of)))

module.exports = { associativity }
