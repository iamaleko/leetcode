const rangeBitwiseAnd = (l, r) => {
  while (r > l)  r &= r - 1;
  return r;
};