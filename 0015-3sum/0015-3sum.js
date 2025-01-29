/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
  if (nums.length < 3) return [];

  nums.sort((a,b) => a - b);

  // remove duplicates
  const arr = [];
  let last, repeats = 0;
  for (const num of nums) {
    if (last === num) {
      if (++repeats < 3) arr.push(num);
    } else {
      last = num;
      repeats = 0;
      arr.push(num);
    }
  }
  nums = arr;

  // find triplets
  const map = new Map();
  let a = 0, b, c;
  while (a < nums.length - 2) {
    b = a + 1;
    while (b < nums.length - 1) {
      c = b + 1;
      while (c < nums.length && c >= nums[a] + nums[b]) {
        if (nums[a] + nums[b] + nums[c] === 0) {
          const triplet = [nums[a],nums[b],nums[c]];
          map.set(triplet.join(''), triplet);
        }
        ++c;
      }
      ++b;
    }
    ++a;
  }

  return Array.from(map.values());
};