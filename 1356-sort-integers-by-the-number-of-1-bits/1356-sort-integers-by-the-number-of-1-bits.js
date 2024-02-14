const sortByBits = (arr) => {
  const mem = {};
  const bits = n => {
    let bits = 0;
    while (n) n &= n - 1, ++bits;
    return bits;
  }
  arr.sort((a, b) => {
    a in mem || (mem[a] = bits(a));
    b in mem || (mem[b] = bits(b));
    return mem[a] - mem[b] || a - b
  });
  return arr;
};