import {is} from 'ramda'
import curryN from './curryN'
import isPojo from './isPojo'
import mapObj from './mapObj'

const modifyKeysRecursive = curryN(2, (f, x) => {
  if (is(Array, x)) {
    return x.map(v => modifyKeysRecursive(f, v))
  }

  if (isPojo(x)) {
    return mapObj(f, v => modifyKeysRecursive(f, v), x)
  }

  return x
})

export default modifyKeysRecursive
