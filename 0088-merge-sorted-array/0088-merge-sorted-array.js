const merge = (a, m, b, n) => {
  let i = m-- + n--;
  while (i--) a[i] = n < 0 || a[m] > b[n] ? a[m--] : b[n--];
  return a;
};