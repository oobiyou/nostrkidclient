const fake = {}

let isFake = false
let storage = {}
try {
  storage = localStorage
} catch (e) {
  isFake = true
  storage = {
    getItem: k => fake[k] || null,
    setItem: (k, v) => {
      fake[k] = v
    },
    removeItem: k => {
      delete fake[k]
    },
  }
}

const clear = ({keep, only} = {}) => {
  if (keep && only) {
    throw new Error('keep and only are mutually exclusive')
  }

  for (const k in isFake ? fake : storage) {
    if (keep && !keep.includes(k)) {
      storage.removeItem(k)
    }

    if (only && only.includes(k)) {
      storage.removeItem(k)
    }

    if (!keep && !only) {
      storage.removeItem(k)
    }
  }
}

const setItem = (k, v) => storage.setItem(k, v)
const hasItem = k => storage.hasOwnProperty(k) || fake.hasOwnProperty(k)
const getItem = k => storage.getItem(k)

const setJson = (k, v) => setItem(k, JSON.stringify(v))
const getJson = k => JSON.parse(getItem(k))

export default {
  clear,
  hasItem,
  setItem,
  getItem,
  setJson,
  getJson,
  keys: () => Object.keys(isFake ? fake : storage),
  cursor: (key, initialState = null) => {
    if (!hasItem(key)) {
      setJson(key, initialState)
    }

    return {
      key,
      initialState,
      set: v => setJson(key, v),
      get: () => getJson(key),
    }
  },
}
