import curryN from './curryN'

export default curryN(3, (low, high, n) => n > low && n < high)
