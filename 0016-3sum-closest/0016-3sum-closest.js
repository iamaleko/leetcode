/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = (nums, target) => {
  nums.sort((a,b) => a - b);
  let closest_sum,
      sum,
      min_diff = Infinity;
  for (let a = 0; a < nums.length - 2; ++a) {
    let b = a + 1,
        c = nums.length - 1;
    while (b < c) {
      sum = nums[a] + nums[b] + nums[c];
      if (sum === target) return sum;
      sum < target ? ++b : --c;
      if (min_diff > Math.abs(target - sum)) {
        min_diff = Math.abs(target - sum);
        closest_sum = sum;
      }
    }
  }
  return closest_sum;
};