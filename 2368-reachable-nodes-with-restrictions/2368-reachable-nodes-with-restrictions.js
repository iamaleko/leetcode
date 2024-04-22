const reachableNodes = (n, edges, restricted) => {
  restricted = new Set(restricted);
  const parents = {}, rank = {};
  // create disjoint sets
  while (n--) {
    parents[n] = n;
    rank[n] = 1;
  }
  // union sets
  for (let [a, b] of edges) {
    if (restricted.has(a) || restricted.has(b)) continue;
    while (a !== parents[a]) a = parents[a] = parents[parents[a]];
    while (b !== parents[b]) b = parents[b] = parents[parents[b]];
    if (a !== b) {
      if (rank[a] > rank[b]) [a, b] = [b, a];
      parents[a] = b;
      rank[b] += rank[a];
      delete rank[a];
    }
  }
  n = 0
  while (n !== parents[n]) n = parents[n];
  return rank[n];
};