/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  if (nums.length < 3) return [];

  // remove duplicates
  const map = new Map();
  const arr = [];
  for (const num of nums) {
    const saved = map.get(num);
    if (saved && saved < 3) {
      map.set(num, saved + 1);
      arr.push(num);
    } else if (saved === undefined) {
      map.set(num, 1);
      arr.push(num);
    }
  }
  nums = arr.sort();

  // find triplets
  map.clear();
  let a = 0, b, c;
  while (a < nums.length - 2) {
    b = a + 1;
    while (b < nums.length - 1) {
      c = b + 1;
      while (c < nums.length) {
        if (nums[a] + nums[b] + nums[c] === 0) {
          const triplet = [nums[a],nums[b],nums[c]];
          map.set(triplet.join(' '), triplet);
        }
        ++c;
      }
      ++b;
    }
    ++a;
  }

  return Array.from(map.values());
};