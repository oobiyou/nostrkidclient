import {equals} from 'ramda'

export default (obj1, obj2) => {
  const diff = []

  ;[...new Set(Object.keys(obj1).concat(Object.keys(obj2)))].forEach(key => {
    if (obj1[key] === undefined && obj2[key] !== undefined) {
      diff.push([`key "${key}" is new in object 2. New value:`, obj2[key]])
    } else if (obj2[key] === undefined && obj1[key] !== undefined) {
      diff.push([`key "${key}" was removed in object 2. Old value:`, obj1[key]])
    } else if (!equals(obj1[key], obj2[key])) {
      diff.push([
        `key "${key}" was changed in object 2. Old value: `,
        obj1[key],
        'New value:',
        obj2[key],
      ])
    } else if (obj1[key] !== obj2[key]) {
      diff.push([
        `key "${key}" was changed in object 2 (by identity, but not value)`,
      ])
    }
  })

  return diff
}
