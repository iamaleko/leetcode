/**
 * @param {number} n
 * @return {number[]}
 */
const countBits = function(n) {
  const res = new Array(n);
  res[0] = 0;
  while (n) {
    res[n] = 0;
    let d = n;
    while (d) {
      if (d & 1) res[n]++;
      d = d >>> 1;
    }
    --n;
  }
  return res;
};