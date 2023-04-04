import curryN from './curryN'

export default curryN(2, (chunkLength, coll) => {
  const result = []
  let current = []

  coll.forEach(item => {
    if (current.length < chunkLength) {
      current.push(item)
    }

    if (current.length === chunkLength) {
      result.push(current)
      current = []
    }
  })

  if (current.length > 0) {
    result.push(current)
  }

  return result
})
