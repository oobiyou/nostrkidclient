import curryN from './curryN'

export default curryN(2, (t, x) =>
  new Promise(resolve => setTimeout(() => resolve(x), t)))
