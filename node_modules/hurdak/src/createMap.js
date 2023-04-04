import curryN from './curryN'

export default curryN(2, (k, xs) => {
  const r = {}

  for (let i = 0; i < xs.length; i++) {
    r[xs[i][k]] = xs[i]
  }

  return r
})
