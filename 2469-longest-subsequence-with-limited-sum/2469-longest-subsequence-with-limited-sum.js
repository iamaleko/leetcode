/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
const answerQueries = function(nums, queries) {
  nums.sort((a,b) => a - b);
  for (const i in nums) {
    if (i > 0) nums[i] += nums[i - 1];
  }
  return queries.map((max) => {
    let l = 0, r = nums.length - 1, c;
    while (l <= r) {
      c = (l + r) / 2 | 0;
      if (nums[c] > max) {
        r = c - 1;
      } else {
        l = c + 1;
      }
    }
    return l;
  })
};