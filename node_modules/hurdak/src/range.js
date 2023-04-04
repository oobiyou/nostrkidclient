export default (a, b, step = 1) => {
  const r = []

  for (let i = a; i < b; i += step) {
    r.push(i)
  }

  return r
}
