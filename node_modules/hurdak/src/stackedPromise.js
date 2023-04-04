export default () => {
  // Stack promises to avoid race conditions
  let latest = Promise.resolve()

  return function track(x) {
    // Wrap our value in a promise just in case
    const cur = Promise.resolve(x)

    // Update our latest promise
    latest = cur

    // Detect whether track got called again by comparing cur
    // against latest. If cur is obsolete, return latest instead.
    const guard = cb => result => cur === latest ? cb(result) : track(latest)

    return Promise.resolve(cur)
      .then(
        guard(v => Promise.resolve(v)),
        guard(v => Promise.reject(v))
      )
  }
}
