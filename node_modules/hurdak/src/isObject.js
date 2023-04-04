import {is} from 'ramda'

export default x => is(Object, x) && !is(Array, x)
