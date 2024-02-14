const sortByBits = (arr) => {
  const bits = (n, b = 0) => {
    while (n) n &= n - 1, ++b;
    return b;
  }
  arr.sort((a, b) => bits(a) - bits(b) || a - b);
  return arr;
};