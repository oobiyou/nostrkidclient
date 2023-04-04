import toSnake from './toSnake'

export default x => toSnake(x).replace(/_/g, '-')
