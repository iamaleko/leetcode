/**
 * @param {number[]} sizes
 * @return {number[][]}
 */
const groupThePeople = (sizes) => {
  const groups = {};
  for (let i = 0; i < sizes.length; ++i) {
    if (sizes[i] in groups) {
      if (groups[sizes[i]].at(-1).length === sizes[i]) {
        groups[sizes[i]].push([]);
      }
      groups[sizes[i]].at(-1).push(i);
    } else {
      groups[sizes[i]] = [[i]];
    }
  }
  return Object.values(groups).flat();
};