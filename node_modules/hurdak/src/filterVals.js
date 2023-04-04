import curryN from './curryN'

export default curryN(2, (f, x) => {
  const r = {}

  for (const k in x) {
    if (f(x[k])) {
      r[k] = x[k]
    }
  }

  return r
})
