const getAncestors = (n, edges) => {
  const map = new Map()
  for (const [b, a] of edges) {
    if (!map.has(a)) map.set(a, new Set())
    map.get(a).add(b)
  }

  const res = []

  function ancestors(point) {
    if (res[point]) return res[point]
    res[point] = new Set()
    if (map.has(point)) {
      const set = map.get(point)
      for (const ancestor of set) {
        ancestors(ancestor)
        res[point] = new Set([ancestor, ...res[point], ...res[ancestor]])
      }
    }
  }

  for (let i = 0; i < n; i++) {
    ancestors(i)
  }

  return res.map((set) => {
    set = [...set]
    set.sort((a, b) => a - b)
    return set
  })
};