import {omit} from 'ramda'
import curryN from './curryN'

export default curryN(3, (a, b, x) => ({...omit([a], x), [b]: x[a]}))
