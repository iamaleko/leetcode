const merge = (a, m, b, n) => {
  for (let i = --m + n--; n >= 0; a[i--] = a[m] > b[n] ? a[m--] : b[n--]);
}