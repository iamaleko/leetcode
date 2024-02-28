const findDifference = (a, b) => {
  a = new Set(a);
  b = new Set(b);
  for (const n of a) b.delete(n) && a.delete(n);
  return [Array.from(a), Array.from(b)];
};