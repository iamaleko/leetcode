function countSquares(matrix: number[][]): number {
  const h = matrix.length;
  const w = matrix[0].length;
  const dp = new Array(h).fill(0).map(() => new Array(w).fill(0));
  let ans = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (matrix[y][x]) {
        ans += dp[y][x] = 1 + Math.min(dp[y - 1]?.[x]|0, dp[y - 1]?.[x - 1]|0, dp[y]?.[x - 1]|0);
      }
    }
  }
  return ans;
};