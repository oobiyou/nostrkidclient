import {omit} from 'ramda'
import curryN from './curryN'
import copyProp from './copyProp'

export default curryN(3, (fromKey, toKey, obj) =>
  omit([fromKey], copyProp(fromKey, toKey, obj)))
