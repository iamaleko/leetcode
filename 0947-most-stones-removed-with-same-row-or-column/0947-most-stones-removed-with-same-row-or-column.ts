function removeStones(stones: number[][]): number {
  const getNode = (x, y) => (x + y) / 2 * (x + y + 1) + y;
  const row: Record<number, number> = {};
  const col: Record<number, number> = {};
  const parent: Record<number, number> = {};
  let clusters = 0;
  for (let [x, y] of stones) {
    const node = getNode(x, y);
    if (!row.hasOwnProperty(y) && !col.hasOwnProperty(x)) {
      row[y] = node;
      col[x] = node;
      parent[node] = node;
      clusters++;
    } else if (row.hasOwnProperty(y) && col.hasOwnProperty(x)) {
      let a = row[y], b = col[x];
      while (parent[a] !== a) a = parent[a] = parent[parent[a]];
      while (parent[b] !== b) b = parent[b] = parent[parent[b]];
      if (a !== b) {
        parent[a] = b;
        clusters--;
      }
      parent[node] = a;
    } else if (row.hasOwnProperty(y)) {
      let a = row[y];
      while (parent[a] !== a) a = parent[a] = parent[parent[a]];
      parent[node] = a;
      col[x] = node;
    } else if (col.hasOwnProperty(x)) {
      let a = col[x];
      while (parent[a] !== a) a = parent[a] = parent[parent[a]];
      parent[node] = a;
      row[y] = node;
    }
  }

  return stones.length - clusters;
};