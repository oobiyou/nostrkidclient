export default outer => {
  const r = []

  outer.forEach((inner, i) =>
    inner.forEach((value, j) => {
      r[j] = r[j] || []
      r[j][i] = value
    }))

  return r
}
