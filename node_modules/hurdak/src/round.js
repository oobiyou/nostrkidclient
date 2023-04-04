import curryN from './curryN'

export default curryN(2, (precision, x) =>
  Math.round(x * Math.pow(10, precision)) / Math.pow(10, precision))
