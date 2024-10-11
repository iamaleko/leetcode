function countPrimeSetBits(left: number, right: number): number {
  let ans = 0;
  const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]);
  for (let n = left; n <= right; n++) {
    let i = n, bits = 0;
    while (i) {
      i &= i - 1;
      bits++;
    }
    if (primes.has(bits)) ans++;
  }
  return ans;
};