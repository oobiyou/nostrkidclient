import curryN from './curryN'

export default curryN(2, (ks, x) => ks.map(k => x[k]))
