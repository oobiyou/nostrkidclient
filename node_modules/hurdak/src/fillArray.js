import {map} from 'ramda'

export default (length, x) => map(() => x, new Array(length))
