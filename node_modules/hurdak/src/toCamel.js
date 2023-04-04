import toPascal from './toPascal'

export default x => {
  const [first, ...rest] = toPascal(x)

  return (first || '').toLowerCase() + rest.join('')
}
