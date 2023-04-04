import {path, assocPath} from 'ramda'
import mergeRight from './mergeRight'
import curryN from './curryN'

export default curryN(3, (p, v, x) => assocPath(p, mergeRight(path(p, x), v), x))
