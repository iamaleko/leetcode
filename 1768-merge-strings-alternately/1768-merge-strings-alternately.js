const mergeAlternately = (a, b) => {
  let p = 0, res = '', max = Math.min(a.length, b.length);
  while (p < max) res += a[p] + b[p++];
  return res + a.slice(p) + b.slice(p);
};