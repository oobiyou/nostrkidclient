import noopPromise from './noopPromise'

export default p => {
  p.catch(() => undefined)

  return noopPromise
}
