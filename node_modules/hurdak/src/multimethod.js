/* eslint no-useless-call: 0 */

import {is} from 'ramda'

const Default = 'multimethod/Default'

class MultiMethod {
  constructor(name, dispatch, methods = {}) {
    this.name = name
    this.dispatch = dispatch
    this.methods = {}

    this.addMethods(methods)
  }
  // Dorky method signatures for compatibility with function methods
  apply(_, args) {
    return this.call(null, ...args)
  }
  call(_, ...args) {
    const dv = this.dispatch(...args)
    const method = this.getMethod(dv) || this.getDefaultMethod()

    if (!method) {
      throw new Error(`No method found for "${this.name}:${dv}"`)
    }

    return method(...args)
  }
  callDefault(...args) {
    const method = this.getDefaultMethod()

    if (!method) {
      throw new Error(`No default method found for "${this.name}"`)
    }

    return method(...args)
  }
  addMethod(dv, fn) {
    if (!is(Function, fn)) {
      throw Error(`Method provided for "${this.name}:${dv}" is not callable (got ${fn})`)
    }

    this.methods[dv] = fn

    return this
  }
  addMethods(m) {
    for (const k in m) {
      this.addMethod(k, m[k])
    }
  }
  addDefaultMethod(fn) {
    return this.addMethod(Default, fn)
  }
  getMethod(dv) {
    return this.methods[dv]
  }
  getDefaultMethod() {
    return this.methods[Default]
  }
  removeMethod(dv) {
    delete this.methods[dv]
  }
  removeDefaultMethod() {
    this.removeMethod(Default)
  }
}

export default function defmulti(...config) {
  const mm = new MultiMethod(...config)
  const call = (...args) => mm.call(null, ...args)

  return new Proxy(call, {
    get(target, name) {
      return mm[name]
    },
  })
}
