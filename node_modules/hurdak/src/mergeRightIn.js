import curryN from './curryN'
import mergeRightPath from './mergeRightPath'

export default curryN(3, (k, v, x) => mergeRightPath([k], v, x))
