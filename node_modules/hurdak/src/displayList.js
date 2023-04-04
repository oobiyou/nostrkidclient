import {last} from 'ramda'

export default (xs, conj = 'and', n = 6) => {
  if (xs.length === 0) {
    return ''
  } else if (xs.length === 1) {
    return xs[0]
  } else if (xs.length === 2) {
    return `${xs[0]} ${conj} ${xs[1]}`
  } else if (xs.length > n + 2) {
    return `${xs.slice(0, n).join(', ')}, ${conj} ${xs.length - n} others`
  }

  return `${xs.slice(0, -1).join(', ')}, ${conj} ${last(xs)}`
}
