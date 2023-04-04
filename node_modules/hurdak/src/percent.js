import {pipe} from 'ramda'
import round from './round'
import Numbers from './numbers'

const million = Math.pow(10, 10)

const formatNumeric = (n, {precision} = {}) => {
  // Fix floating point weirdness: .07 * 100 === 7.000000000000001
  n = Math.round(n * 100 * million) / million

  return String(parseFloat(precision === undefined ? n : n.toFixed(precision)))
}

const parseNumeric = (display, {precision} = {}) => {
  const result = Numbers.parseFloat(display) / 100

  return precision === undefined ? result : round(precision, result)
}

const format = pipe(formatNumeric, value => `${value}%`)

const parse = (value, ...args) =>
  parseNumeric(value.replace('%', ''), ...args)

export default {parse, format, parseNumeric, formatNumeric}
