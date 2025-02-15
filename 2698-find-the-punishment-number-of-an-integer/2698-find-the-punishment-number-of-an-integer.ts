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
  const mem: number[] = [0];
  return (n: number): number => {
    let j = Math.min(mem.length - 1, n), ans = mem[j];
    for (let i = j+1; i <= n; i++) {
      if (sum(i * i, i)) ans += i * i;
      mem[i] = ans;
    }
    return ans;
  };
})();