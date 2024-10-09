// Bottom-up dp
function countBits(n: number): number[] {
  const ans = new Array(n + 1).fill(0);
  for (let q: number, i = 1; i <= n; i++) {
    q = i;
    while (q) {
      q &= q - 1;
      ans[i]++;
    }
  }
  return ans;
};