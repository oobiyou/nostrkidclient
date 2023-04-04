import curryN from './curryN'
import mergePath from './mergePath'

export default curryN(3, (k, v, x) => mergePath([k], v, x))
