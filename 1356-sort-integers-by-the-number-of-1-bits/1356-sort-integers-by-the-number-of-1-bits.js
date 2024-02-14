const sortByBits = (arr) => arr.sort((a, b, c = 0, d = 0, e = a, f = b) => {
  while (a) a &= a - 1, ++c;
  while (b) b &= b - 1, ++d;
  return c - d || e - f;
});