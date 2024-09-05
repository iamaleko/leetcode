function missingRolls(rolls: number[], mean: number, n: number): number[] {
  let total = n + rolls.length,
      sum = rolls.reduce((a, e) => a + e),
      target = Math.round(total * (mean - (sum / total))),
      ans = new Array(n).fill(1),
      pos = 0;
  if (n * 1 > target || n * 6 < target) return [];
  target -= n;
  while (target) {
    if (ans[pos] === 6) pos++;
    ans[pos]++;
    target--;
  }
  return ans;
};