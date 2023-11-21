/**
 * @param {number[]} nums
 * @return {number}
 */
const countNicePairs = (nums) => {
  const map = {};
  
  const rev = (num) => {
    res = 0;
    while (num) {
      res *= 10;
      res += num % 10;
      num = num / 10 | 0;
    }
    return res;
  };
  
  let pairs = 0;
  for (const i in nums) {
    const diff = nums[i] - rev(nums[i]);
    if (diff in map) {
      pairs += map[diff];
      ++map[diff];
    } else {
      map[diff] = 1;
    }
  }
  
  return pairs % 1000000007;
};