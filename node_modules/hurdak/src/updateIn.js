import updatePath from './updatePath'
import curryN from './curryN'

export default curryN(3, (k, f, x) => updatePath([k], (v, p) => f(v, p), x))
