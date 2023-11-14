/**
 * @param {string} s
 * @return {number}
 */
const countPalindromicSubsequence = (s) => {
  const uniq = new Set(s);
  let res = 0;
  for (const chr of uniq) {
    const sub = s.substring(s.indexOf(chr), s.lastIndexOf(chr)).substring(1);
    if (sub) res += new Set(sub).size;
  }
  return res;
};