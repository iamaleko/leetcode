/**
 * @param {number[][]} edges
 * @return {number}
 */
const findCenter = (edges) => {
  const map = {};
  let max = 0, out = 0;
  for (const edge of edges) {
    for (const val of edge) {
      map[val] = map[val] === undefined ? 1 : map[val] + 1;
      if (map[val] > max) {
        max = map[val];
        out = val;
      } 
    }
  }
  return out;
};