const merge = (a, m, b, n, i = --m + n--) => {
  while (n >= 0) a[i--] = a[m] > b[n] ? a[m--] : b[n--];
}