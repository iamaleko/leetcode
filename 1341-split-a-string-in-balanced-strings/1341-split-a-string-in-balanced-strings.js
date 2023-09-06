/**
 * @param {string} s
 * @return {number}
 */
const balancedStringSplit = (s) => {
  let res = 0, l = 0, r = 0;
  for (const chr of s) {
    if (l && (l === r)) {
      ++res;
      l = r = 0;
    }
    chr === 'L' ? ++l : ++r;
  }
  if (l && (l === r)) ++res;
  return res;
};