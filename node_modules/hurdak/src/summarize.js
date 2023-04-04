import {is} from 'ramda'

const summarize = (target, depth = 4) => {
  if (depth === 0 && (is(Array, target) || is(Object, target))) {
    return `<${typeof target}>`
  }

  if (is(Array, target)) {
    target = target.map(x => summarize(x, depth - 1))

    return target.length < 3
      ? `[${target.join(', ')}]`
      : `[${target.slice(0, 2).join(', ')}, ...and ${target.length - 3} more]`
  }

  if (is(Object, target)) {
    const pairs = []

    for (const k in target) {
      pairs.push(`${k}: ${summarize(target[k], depth - 1)}`)
    }

    return `{${pairs.join(', ')}}`
  }

  if (is(Symbol, target)) {
    return target.toString()
  }

  return JSON.stringify(target)
}

export default summarize
