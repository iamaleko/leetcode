const findIntersectionValues = (a, b) => {
  let ac = 0, bc = 0;
  const as = new Set(a), bs = new Set(b);
  for (const num of a) if (bs.has(num)) ac++;
  for (const num of b) if (as.has(num)) bc++;
  return [ac, bc];
};