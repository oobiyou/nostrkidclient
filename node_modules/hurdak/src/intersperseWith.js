import curryN from './curryN'

export default curryN(2, (f, xs) =>
  xs.reduce((r, x, i) => r.length ? r.concat([f(x, i), x]) : r.concat(x), []))
