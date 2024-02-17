const hammingDistance = (x, y) => {
  let bits = 0;
  while (x || y) {
    if ((x & 1) !== (y & 1)) ++bits;
    x >>= 1;
    y >>= 1;
  }
  return bits;
};