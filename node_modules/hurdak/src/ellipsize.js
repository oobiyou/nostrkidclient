export default (s, l, suffix = '...') => {
  if (s.length < l * 1.1) {
    return s
  }

  while (s.length > l && s.includes(' ')) {
    s = s.split(' ').slice(0, -1).join(' ')
  }

  return s + suffix
}
