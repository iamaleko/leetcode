/**
 * @param {string} s
 * @return {number}
 */
const countAsterisks = (s) => {
  let cnt = 0, state = true;
  for (const char of s) {
    if (char === '|') state = !state;
    if (state && char === '*') ++cnt;
  }
  return cnt;
};