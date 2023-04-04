import curryN from './curryN'

export default curryN(2, (kf, vf, x) => {
  const r = {}

  for (const k in x) {
    r[kf(k)] = vf(x[k])
  }

  return r
})
