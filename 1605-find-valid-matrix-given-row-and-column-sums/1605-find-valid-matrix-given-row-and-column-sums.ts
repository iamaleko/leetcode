function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
  const w = colSum.length,
        h = rowSum.length,
        m = new Array(h).fill(0).map(() => new Array(w).fill(0));

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      m[y][x] = Math.min(colSum[x], rowSum[y]);
      colSum[x] -= m[y][x];
      rowSum[y] -= m[y][x];
    }
  }

  return m;
};