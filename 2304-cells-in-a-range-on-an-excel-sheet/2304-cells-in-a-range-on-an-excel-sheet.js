/**
 * @param {string} s
 * @return {string[]}
 */
const cellsInRange = (s) => {
  let x1 = s[0].charCodeAt(0), x2 = s[3].charCodeAt(0), y2 = s[4];
  const res = [];
  while (x1 <= x2) {
    let y1 = s[1];
    while (y1 <= y2) {
      res.push(`${String.fromCharCode(x1)}${y1}`);
      ++y1;
    }
    ++x1;
  }
  return res;
};