const arrangeCoins = (n) => {
  if (n === 1) return 1;
  let l = 0, r = n, c;
  while (l < r) {
    c = (l + r) / 2 | 0;
    if (c * (c + 1) / 2 <= n) { l = c + 1; } else { r = c; }
  }
  return l - 1;
};