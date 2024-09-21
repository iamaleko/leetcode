function lexicalOrder(n: number): number[] {
  const ans: number[] = new Array(n).fill(1);
  for (let i = 1; i < n; i++) {
    if (ans[i - 1] * 10 <= n) {
      ans[i] = ans[i - 1] * 10;
    } else {
      ans[i] = ans[i - 1]
      while (ans[i] % 10 === 9 || ans[i] + 1 > n) ans[i] = ans[i] / 10 | 0
      ans[i] += 1;
    }
  } 
  return ans;
};