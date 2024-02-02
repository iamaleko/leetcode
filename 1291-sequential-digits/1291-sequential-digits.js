const sequentialDigits = (low, high) => {
  const res = [];

  let n = 12, r = 100, m;
  while (true) {
    m = n;
    while (true) {
      if (m > high) return res;
      if (m >= low) res.push(m);
      if (m % 10 === 9) break;
      m = (m * 10 + (m % 10 + 1)) % r;
    }
    r *= 10;
    n = n * 10 + (n % 10 + 1);
  }
};