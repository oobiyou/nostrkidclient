import Numbers from './numbers'

let symbol = '$'

const getSymbol = () => symbol

const setSymbol = s => {
  symbol = s
}

const formatNumeric = x => {
  const [dollars, cents] = parseFloat(x / 100).toFixed(2).split('.')

  return [Numbers.commaFormat(dollars), cents].join('.')
}

const parseNumeric = display =>
  Math.round(Numbers.parseFloat(display.replace(/,/g, '')) * 100)

const format = cents =>
  cents >= 0
    ? `${symbol}${formatNumeric(cents)}`
    : `-${symbol}${formatNumeric(Math.abs(cents))}`

const parse = display =>
  parseNumeric(display.replace(symbol, ''))

const formatRounded = cents => format(cents).slice(0, -3)

const parseRounded = display => parse(`${display}.00`)

const formatK = cents => {
  if (cents < 1000000) {
    return formatRounded(cents)
  }

  const k = formatRounded(cents / 1000)
  const h = Math.floor(cents % 100000 / 10000)

  return h ? `${k}.${h}k` : `${k}k`
}

export default {
  getSymbol, setSymbol, parse, format, parseNumeric, formatNumeric,
  formatRounded, parseRounded, formatK,
}
