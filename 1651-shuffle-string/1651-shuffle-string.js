/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
const restoreString = (s, indices) => {
  const res = new Array(s.length);
  for (const i in indices) {
    res[indices[i]] = s[i];
  }
  return res.join('');
};