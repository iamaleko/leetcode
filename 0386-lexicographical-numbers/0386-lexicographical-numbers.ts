function lexicalOrder(n: number): number[] {
  const ans: number[] = [];
  let d = 1;
  while (ans.length < n) {
    ans.push(d);
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