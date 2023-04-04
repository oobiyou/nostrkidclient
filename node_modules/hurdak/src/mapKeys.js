import curryN from './curryN'
import mapObj from './mapObj'

export default curryN(2, (f, x) => mapObj(f, a => a, x))
