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
  
  let pairs = 0, count, diff;
  for (const num of nums) {
    diff = num - rev(num);
    count = map.get(diff) | 0;
    pairs += count;
    map.set(diff, count + 1);
  }
  
  return pairs % 1000000007;
};