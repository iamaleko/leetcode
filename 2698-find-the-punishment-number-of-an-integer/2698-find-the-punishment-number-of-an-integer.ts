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
  const mem = {};
  return (n: number): number => {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
      if (mem[i] || (mem[i] = sum(i * i, i))) ans += i * i;
      // if (sum(i * i, i)) ans += i * i;
    }
    return ans;
  };
})();