function sum(n: number, t: number): boolean {
  if (n === t) return true;
  if (t >= 0) {
    let m = 1;
    while (m < n) {
      m *= 10
      if (sum(n / m | 0, t - n % m)) return true;
    }
  }
  return false;
}

const punishmentNumber = (() => {
  const cache = new Uint32Array(1001);
  for (let i = 1; i < 1001; i++) {
    cache[i] = cache[i - 1] + (sum(i * i, i) ? i * i : 0);
  }

  return (n: number): number => cache[n];
})();