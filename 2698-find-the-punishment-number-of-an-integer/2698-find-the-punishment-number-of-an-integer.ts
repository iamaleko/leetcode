let b = 0;

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

function punishmentNumber(n: number): number {
  if (b>3) return -1;
  b++;
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    if (sum(i * i, i)) ans += i * i;
  }
  return ans;
};