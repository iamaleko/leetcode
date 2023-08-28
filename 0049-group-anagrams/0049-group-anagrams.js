/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const map = {};
  for (let str of strs) {
    const sorted = str.split``.sort().join``;
    if (sorted in map) {
      map[sorted].push(str);
    } else {
      map[sorted] = [str];
    }
  }
  return Object.values(map);
};