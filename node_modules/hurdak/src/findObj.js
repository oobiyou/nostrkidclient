/* eslint consistent-return: 0 */

import curryN from './curryN'
import findObjPair from './findObjPair'

export default curryN(2, (f, x) => (findObjPair(f, x) || [])[1])
