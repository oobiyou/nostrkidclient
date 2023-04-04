export default (n, unit) => {
  switch (unit.toLowerCase()) {
    case 'kb': return n * 1024
    case 'mb': return n * 1024 * 1024
    case 'gb': return n * 1024 * 1024 * 1024
    case 'tb': return n * 1024 * 1024 * 1024 * 1024
    case 'pb': return n * 1024 * 1024 * 1024 * 1024 * 1024
    default:
      throw new Error(`${unit} is not a valid bytes unit`)
  }
}
