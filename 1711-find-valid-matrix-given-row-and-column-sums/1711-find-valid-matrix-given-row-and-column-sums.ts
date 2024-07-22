function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
  const m = new Array(rowSum.length);

  for (let y = 0; y < rowSum.length; y++) {
    m[y] = new Array(colSum.length);
    for (let x = 0; x < colSum.length; x++) {
      m[y][x] = Math.min(colSum[x], rowSum[y]);
      colSum[x] -= m[y][x];
      rowSum[y] -= m[y][x];
    }
  }

  return m;
};