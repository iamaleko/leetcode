/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
  nums.sort((a,b) => a - b);
  let closest_sum;
  let min_diff = Infinity;
  for (let a = 0; a < nums.length - 2; ++a) {
    let b = a + 1;
    let c = nums.length - 1;
    while (b < c) {
      const sum = nums[a] + nums[b] + nums[c];
      if (sum === target) return sum;
      const diff = Math.abs(target - sum);
      sum < target ? ++b : --c;
      if (min_diff > diff) {
        min_diff = diff;
        closest_sum = sum;
      }
    }
  }
  return closest_sum;
};