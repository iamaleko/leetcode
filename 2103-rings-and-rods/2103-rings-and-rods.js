/**
 * @param {string} rings
 * @return {number}
 */
const countPoints = (str) => {
  const rods = [
    new Set(), new Set(), new Set(), new Set(), new Set(),
    new Set(), new Set(), new Set(), new Set(), new Set(),
  ];
  for (let i = 0; i < str.length; i+=2) {
    rods[str[i + 1]].add(str[i]);
  }
  console.log(rods);
  let res = 0;
  for (const set of rods) if (set.size === 3) ++res;
  return res;
};