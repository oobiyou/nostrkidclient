import curryN from './curryN'

export default curryN(2, (f, x) => Object.entries(x).forEach(([k, v]) => f(v, k)))
