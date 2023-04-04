export default x =>
  x.replace(/[-_ ]+/g, '_')
   .replace(/(^_)_*([A-Z][a-z]+)/g, '$1_$2')
   .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
   .toLowerCase()
