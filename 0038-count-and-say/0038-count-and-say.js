/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = (n) => {
  let str = '1';
  while (--n) {
    let res = '';
    let cnt = 0;
    let last = '';
    for (const d of str) {
      if (d !== last && cnt) {
        res = res + cnt + '' + last;
        cnt = 0;
      }
      ++cnt;
      last = d;
    }
    if (cnt) {
      res = res + cnt + '' + last;
    }
    str = res;
  }
  return str;
};