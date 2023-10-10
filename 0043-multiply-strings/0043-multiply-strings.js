/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = (a, b) => {
  if (a === '0' || b === '0') return '0';
  const res = [];
  for (const n of b) {
    let i = 0, j = a.length;
    while (--j >= 0) {
      let p = n * a[j], k = i;
      do {
        res[k] = (res[k] ?? 0) + p % 10;
        p = p / 10 | 0;
        if (res[k] > 9) {
          p += res[k] / 10 | 0;
          res[k] = res[k] % 10;
        }
        ++k;
      } while (p)
      ++i;
    }
    res.unshift(0)
  }
  res.shift()
  return res.reverse().join('');
};