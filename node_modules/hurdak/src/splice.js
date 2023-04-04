import curryN from './curryN'

export default curryN(3, (i, n, v) => v.slice(0, i).concat(v.slice(i + n)))
