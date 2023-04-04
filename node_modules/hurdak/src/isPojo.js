import {prop} from 'ramda'

export default x => prop('constructor', x) === Object
