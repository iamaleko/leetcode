/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
const xorOperation = (n, start) => {
  let res = start, i = 1;
  while (i < n) res ^= start + 2 * i++;
  return res;
};