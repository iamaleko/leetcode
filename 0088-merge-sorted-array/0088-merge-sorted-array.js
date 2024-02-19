const merge = (a, m, b, n) => {
  for (let i = --m + n--; ~n; a[i--] = a[m] > b[n] ? a[m--] : b[n--]);
}