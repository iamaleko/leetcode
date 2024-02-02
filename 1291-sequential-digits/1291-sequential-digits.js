const sequentialDigits = (low, high) => {
  const res = [];

  let n = 1, r = 10, m;
  while (true) {
    n = n * 10 + (n % 10 + 1);
    r *= 10;
    m = n;
    while (true) {
      if (m > high) return res;
      if (m >= low) res.push(m);
      if (m % 10 === 9) break;
      m = (m * 10 + (m % 10 + 1)) % r;
    }
  }
};