const findDifference = (a, b) => {
  const res = [[],[]];
  a = new Set(a);
  b = new Set(b);
  for (const n of a) b.has(n) || res[0].push(n);
  for (const n of b) a.has(n) || res[1].push(n);
  return res;
};