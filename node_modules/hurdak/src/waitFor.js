export default (f, t = 100) => new Promise(resolve => {
  (function tryIt() {
    const r = f()

    if (r) {
      resolve(r)
    } else {
      setTimeout(tryIt, t)
    }
  }())
})
