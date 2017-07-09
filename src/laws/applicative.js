// identityc :: Any -> Any
const identityc = a => a

// thrush :: Any -> (ƒ -> Any)
const thrush = x => f => f(x)

// identity :: Type -> (ƒ -> (Any -> Boolean))
const identity = t => eq => x => eq(t.of(x).ap(t.of(identityc)), t.of(x))

// homomorphism :: Type -> (ƒ -> (Any -> Boolean))
const homomorphism = t => eq => x => eq(t.of(x).ap(t.of(identityc)), t.of(identityc(x)))

// interchange :: Type -> (ƒ -> (Any -> Boolean))
const interchange = t => eq => x => (u => eq(t.of(x).ap(u), u.ap(t.of(thrush(x)))))(t.of(identityc))

module.exports = {
  identity,
  homomorphism,
  interchange
}
