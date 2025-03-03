/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
const pivotArray = (nums, pivot) => {
  const a = [];
  const b = [];
  const c = [];
  for (const num of nums) {
    if (num < pivot) {
      a.push(num);
    } else if (num === pivot) {
      b.push(num);
    } else {
      c.push(num);
    }
  }
  return a.concat(b, c);
};