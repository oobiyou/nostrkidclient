import 'regenerator-runtime/runtime'
import {is, last, isNil} from 'ramda'
import {UUID} from './uuid'
import summarize from './summarize'
import {DATETIME} from './datetime'

// Utils

const reprType = x => {
  const t = typeof x

  if (['undefined', 'boolean'].indexOf(t) !== -1) {
    return t
  } else if (t === 'number' && isNaN(x)) {
    return 'NaN'
  } else if (x === null) {
    return 'null'
  } else if (x.constructor.name === 'Function') {
    return x.name
  }

  return x.constructor.name
}

const schemaError = (code, path, extra) => ({code, path, ...extra})

// Schema/Types

export class Schema {
  constructor(type, meta = {}) {
    Object.assign(this, {type, ...meta})
  }
}

export const allTypes = {}

export const defType = (name, {typeIsValid, iterTypeErrors}) => {
  allTypes[name] = {
    name,
    schema: new Schema(name),
    create: meta => new Schema(name, meta),
    typeIsValid,
    iterTypeErrors,
  }
}

const normalize = schema => {
  // If it's a schema, we're good
  if (is(Schema, schema)) {
    return schema
  }

  // If it's just a type string, wrap in a schema
  if (is(String, schema) && allTypes[schema]) {
    return new Schema(schema)
  }

  // Arrays are special cased
  if (is(Array, schema)) {
    return new Schema('arr', {items: schema[0]})
  }

  // Objects are special cased
  if (!is(Function, schema) && is(Object, schema)) {
    return new Schema('obj', {properties: schema})
  }

  throw new Error(`Could not normalize "${reprType(schema)}"`)
}

const cloneSchema = (schema, meta) => {
  const {type, ...normalizedSchema} = normalize(schema)

  return new Schema(type, {...normalizedSchema, ...meta})
}

// Error codes

export const ERROR_CODE = {
  TYPE_ERROR: 'schema/type-error',
  MISSING_KEY: 'schema/missing-key',
  MISSING_VALUE: 'schema/missing-value',
  MIN_LENGTH: 'schema/min-length',
  ENUM: 'schema/enum',
}

// Top-level helpers

export function *iterErrors(schema, data, path) {
  schema = normalize(schema)

  const config = allTypes[schema.type]

  if (!config) {
    throw new Error(`Invalid schema type ${summarize(schema.type)}`)
  }

  const {typeIsValid, iterTypeErrors} = config

  if (!typeIsValid(data)) {
    yield schemaError(ERROR_CODE.TYPE_ERROR, path, {
      expected: schema.type,
      actual: reprType(data),
      message: `${summarize(data)} is not an instance of ${schema.type}`,
    })
  }

  if (schema.enum && !schema.enum.includes(data)) {
    const summary = schema.enum.map(summarize)

    yield schemaError(ERROR_CODE.ENUM, path, {
      expected: summary,
      actual: reprType(data),
      message: `${summarize(data)} is not one of ${summary}`,
    })
  }

  if (iterTypeErrors) {
    for (const error of iterTypeErrors(schema, data, path)) {
      yield error
    }
  }
}

export function getError(schema, data, path = []) {
  const errors = iterErrors(schema, data, path)

  let result
  do {
    result = errors.next()
  } while (!result.done && !result.value)

  return result.done ? null : result.value
}

// Type implementations

defType('nil', {
  typeIsValid: v => v === null,
})

defType('any', {
  typeIsValid: v => true,
})

defType('int', {
  typeIsValid: v => is(Number, v) && v % 1 === 0,
})

defType('num', {
  typeIsValid: v => is(Number, v),
})

defType('str', {
  typeIsValid: v => is(String, v),
  iterTypeErrors: function *iterTypeErrors(schema, data, path) {
    if (schema.minLength && data.length < schema.minLength) {
      yield schemaError(ERROR_CODE.MIN_LENGTH, path, {
        message: `${last(path)} must be at least ${schema.minLength} characters long`,
      })
    }
  },
})

defType('bool', {
  typeIsValid: v => is(Boolean, v),
})

defType('true', {
  typeIsValid: v => v === true,
})

defType('false', {
  typeIsValid: v => v === false,
})

defType('uuid', {
  typeIsValid: v => is(String, v) && Boolean(v.match(UUID)),
})

defType('datetime', {
  typeIsValid: v =>
    is(Date, v) || (is(String, v) && Boolean(v.match(DATETIME))),
})

defType('arr', {
  typeIsValid: v => is(Array, v),
  iterTypeErrors: function *iterTypeErrors(schema, data, path) {
    for (let i = 0; i < data.length; i++) {
      for (const error of iterErrors(schema.items, data[i], path.concat(i))) {
        yield error
      }
    }
  },
})

defType('obj', {
  typeIsValid: v => is(Object, v),
  iterTypeErrors: function *iterTypeErrors(schema, data, path) {
    for (const k of schema.requiredKeys || []) {
      if (data[k] === undefined) {
        yield schemaError(ERROR_CODE.MISSING_KEY, path.concat(k), {
          expected: 'any',
          actual: 'undefined',
          message: `${k} is a required key`,
        })
      }
    }

    for (const k of schema.requiredValues || []) {
      if (isNil(data[k])) {
        yield schemaError(ERROR_CODE.MISSING_VALUE, path.concat(k), {
          expected: 'any',
          actual: reprType(data[k]),
          message: `${k} is a required value`,
        })
      }
    }

    for (const k in schema.properties || {}) {
      if (!isNil(data[k])) {
        for (const error of iterErrors(
          schema.properties[k],
          data[k],
          path.concat(k)
        )) {
          yield error
        }
      }
    }

    if (schema.closed) {
      for (const k in data) {
        if (!schema.properties[k]) {
          yield schemaError(ERROR_CODE.EXTRA_KEY, path.concat(k), {
            expected: 'undefined',
            actual: reprType(data[k]),
            message: `${k} is not an allowed key`,
          })
        }
      }
    }
  },
})

export default new Proxy(
  {
    ...ERROR_CODE,
    arr: (items, meta) => new Schema('arr', {items, ...meta}),
    obj: (properties, meta) => new Schema('obj', {properties, ...meta}),
    open: schema => cloneSchema(schema, {closed: false}),
    closed: schema => cloneSchema(schema, {closed: true}),
    strict: schema => {
      const normalizedSchema = normalize(schema)
      const requiredKeys = Object.keys(normalizedSchema.properties)

      return cloneSchema(normalizedSchema, {requiredKeys})
    },
  },
  {
    get(target, name) {
      if (target[name]) {
        return target[name]
      }

      const isCapitalized = Boolean(name.match(/^[A-Z][a-z]+$/))
      const T = allTypes[name.toLowerCase()]

      if (!T) {
        throw new Error(`Invalid schema property ${name}`)
      }

      // If it starts with a capital letter they're treating it as a type,
      // if it's lower case, they're treating it as a builder function
      return isCapitalized ? T.schema : T.create
    },
  }
)
