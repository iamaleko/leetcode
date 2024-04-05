/**
 * @param {string} s
 * @return {string}
 */
const makeGood = (s) => {
  let p = 0;
  while (p < s.length - 1) {
    if (Math.abs(s.charCodeAt(p) - s.charCodeAt(p + 1)) === 32) {
      s = s.slice(0, p) + s.slice(p + 2);
      if (p) p--;
    } else {
      p++;
    }
  }
  return s;
};