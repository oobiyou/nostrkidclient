export default (a, b) => {
  const added = b.filter(x => !a.includes(x))
  const removed = a.filter(x => !b.includes(x))
  const mutual = a.filter(x => b.includes(x))

  return [removed, added, mutual]
}
