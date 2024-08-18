function nthUglyNumber(n: number): number {
  const ugly = [0,1];
  let p2 = 1, p3 = 1, p5 = 1, i = n;
  while (--i) {
    const num = Math.min(ugly[p2] * 2, ugly[p3] * 3, ugly[p5] * 5);
    ugly.push(num);
    if (num % 2 === 0) p2++;
    if (num % 3 === 0) p3++;
    if (num % 5 === 0) p5++;
  }
  return ugly[n];
}