import curryN from './curryN'

export default curryN(2, (a, b) => ({...a, ...b}))
