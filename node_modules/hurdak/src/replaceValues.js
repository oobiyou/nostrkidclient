import {when, always, mapObjIndexed} from 'ramda'
import curryN from './curryN'

export default curryN(3, (f, v, x) =>
  mapObjIndexed(when(f, always(v)), x))
