const rangeBitwiseAnd = (l, r) => {
  // deal with power of two
  if (!l || !r) return 0;
  const maxPower = 2 ** Math.floor(Math.log2(r));
  if (maxPower > l) return 0;
  const minPower = 2 ** Math.ceil(Math.log2(l));
  if (maxPower >= l && maxPower !== minPower) return 0;
  if (maxPower >= l && maxPower === minPower) return maxPower;

  // deal with l and r between powers of 2
  let res = l++;
  while (res && l <= r) res &= l++;

  return res; 
};