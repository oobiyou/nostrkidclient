import curryN from './curryN'
import mapObj from './mapObj'

export default curryN(2, (f, x) => mapObj(a => a, f, x))
