function lexicalOrder(n: number): number[] {
  const ans: number[] = new Array(n).fill(0);
  let d = 1;
  for (let i = 0; i < n; i++) {
    ans[i] = d;
    do {
      if (d * 10 <= n) {
        d *= 10;
      } else {
        while (d % 10 === 9) d = Math.floor(d / 10)
        d += 1;
      }
    } while (d > n);
  } 
  return ans;
};