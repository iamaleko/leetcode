const merge = (a, m, b, n) => {
  for (let i = m-- + n--; i; a[--i] = n < 0 || a[m] > b[n] ? a[m--] : b[n--]);
  return a;
};