function maxEqualRowsAfterFlips(m: number[][]): number {
  const count: Record<string, number> = {};
  for (let y = 0; y < m.length; y++) {
    let unset = '', set = '';
    for (let x = 0; x <m[y].length ; x++) {
      if (m[y][x]) {
        unset += '1';
        set += '0';
      } else {
        unset += '0';
        set += '1';
      }
    }
    count.hasOwnProperty(unset) ? count[unset]++ : count[unset] = 1;
    count.hasOwnProperty(set) ? count[set]++ : count[set] = 1;
  }
  let ans = 0;
  for (const key in count) if (count[key] > ans) ans = count[key];
  return ans;
};