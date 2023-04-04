export default (x, fs) => fs.reduce((v, f) => f(v), x)
