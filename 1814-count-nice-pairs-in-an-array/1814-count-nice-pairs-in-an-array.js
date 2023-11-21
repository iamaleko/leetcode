/**
 * @param {number[]} nums
 * @return {number}
 */
const countNicePairs = (nums) => {
  const map = new Map();
  
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
    if (map.has(diff)) {
      const count = map.get(diff);
      pairs += count;
      map.set(diff, count + 1);
    } else {
      map.set(diff, 1);
    }
  }
  
  return pairs % 1000000007;
};