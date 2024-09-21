function lexicalOrder(n: number): number[] {
  const ans: number[] = [1];
  for (let i = 1, d = 1; i < n; i++) {
    if (d * 10 <= n) {
      d *= 10;
    } else {
      while (d % 10 === 9 || d + 1 > n) d = d / 10 | 0
      d += 1;
    }
    ans[i] = d;
  } 
  return ans;
};