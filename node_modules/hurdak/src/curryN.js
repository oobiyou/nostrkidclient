const curryN = (n, f) => (...a) =>
  a.length >= n ? f(...a) : curryN(n - a.length, (...b) => f(...a, ...b))

export default curryN
