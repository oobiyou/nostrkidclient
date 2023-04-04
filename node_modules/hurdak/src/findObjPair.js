/* eslint consistent-return: 0 */

import curryN from './curryN'

export default curryN(2, (f, x) => {
  const entries = Object.entries(x)

  for (let i = 0; i < entries.length; i++) {
    const [k, v] = entries[i]

    if (f(v, k)) {
      return [k, v]
    }
  }
})
