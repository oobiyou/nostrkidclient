export default (ks, ...a) => (...b) => {
  const combined = a.concat(b)

  return Object.fromEntries(ks.map((k, i) => [k, combined[i]]))
}
