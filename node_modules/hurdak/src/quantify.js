import pluralize from './pluralize'

export default (n, label, pluralLabel) =>
  `${n} ${pluralize(n, label, pluralLabel)}`
