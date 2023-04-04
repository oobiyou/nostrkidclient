import curryN from './curryN'

export default curryN(3, (k, vk, xs) => {
  const r = {}

  for (let i = 0; i < xs.length; i++) {
    r[xs[i][k]] = xs[i][vk]
  }

  return r
})
