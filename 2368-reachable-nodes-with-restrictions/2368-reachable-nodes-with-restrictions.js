const reachableNodes = (n, edges, restricted) => {
  restricted = new Set(restricted);
  const parents = {}
  const sizes = {}
  for (let [a, b] of edges) {
    if (restricted.has(a) || restricted.has(b)) continue;
    if (!(a in parents)) {
      parents[a] = a;
      sizes[a] = 1
    }
    if (!(b in parents)) {
      parents[b] = b;
      sizes[b] = 1
    }
    while (a !== parents[a]) {
      parents[a] = parents[parents[a]]
      a = parents[a]
    }
    while (b !== parents[b]) {
      parents[b] = parents[parents[b]]
      b = parents[b]
    }
    if (a !== b) {
      if (sizes[a] > sizes[b]) {
        parents[b] = a
        sizes[a] += sizes[b]
        delete sizes[b]
      } else {
        parents[a] = b
        sizes[b] += sizes[a]
        delete sizes[a]
      }
    }
  }
  z = 0
  while (z !== parents[z]) z = parents[z];
  return sizes[z] || 1;
};