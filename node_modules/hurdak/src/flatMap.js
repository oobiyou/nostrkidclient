import curryN from './curryN'

export default curryN(2, (f, xs) => xs.map(f).reduce((a, b) => a.concat(b), []))
