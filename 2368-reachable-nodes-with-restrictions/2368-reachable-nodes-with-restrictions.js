const reachableNodes = (n, edges, restricted) => {
  restricted = new Set(restricted);
  const parents = {}, rank = {}
  for (let [a, b] of edges) {
    if (restricted.has(a) || restricted.has(b)) continue;
    if (a in parents) {
      while (a !== parents[a]) {
        parents[a] = parents[parents[a]]
        a = parents[a]
      }
    } else {
      parents[a] = a;
      rank[a] = 1
    }
    if (b in parents) {
      while (b !== parents[b]) {
        parents[b] = parents[parents[b]]
        b = parents[b]
      }
    } else {
      parents[b] = b;
      rank[b] = 1
    }
    if (a !== b) {
      if (rank[a] > rank[b]) [a, b] = [b, a]
      parents[a] = b
      rank[b] += rank[a]
      delete rank[a]
    }
  }
  if (0 in parents) {
    z = 0
    while (z !== parents[z]) z = parents[z];
    return rank[z];
  }
  return 1;
};