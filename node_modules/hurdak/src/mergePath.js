import {path, assocPath} from 'ramda'
import merge from './merge'
import curryN from './curryN'

export default curryN(3, (p, v, x) => assocPath(p, merge(path(p, x), v), x))
