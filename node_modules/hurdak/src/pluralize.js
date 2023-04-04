export default (n, label, pluralLabel) =>
  n === 1 ? label : (pluralLabel || `${label}s`)
