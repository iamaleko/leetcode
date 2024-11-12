function maximumBeauty(items: number[][], queries: number[]): number[] {
  items = items
    .sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0])
    .reduce((a: number[][], v: number[]) => ((a.at(-1)?.[1] ?? -1) < v[1] && a.push(v), a), []);
  const ans: number[] = [];
  for (const query of queries) {
    let l = 0, r = items.length - 1, c: number;
    while (l <= r) {
      c = l + r >>> 1;
      if (items[c][0] > query) {
        r = c - 1;
      } else {
        l = c + 1;
      }
    }
    ans.push(r >= 0 ? items[r][1] : 0);
  }
  return ans;
};