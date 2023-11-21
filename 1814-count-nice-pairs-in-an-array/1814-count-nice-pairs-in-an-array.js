/**
 * @param {number[]} nums
 * @return {number}
 */
const countNicePairs = (nums) => {
  const map = new Map();
  
  let pairs = 0, count, diff, rev, num;
  for (num of nums) {
    diff = num;
    
    rev = 0;
    while (num) {
      rev *= 10;
      rev += num % 10;
      num = num / 10 | 0;
    }
    diff -= rev;
    
    count = map.get(diff) | 0;
    pairs += count;
    map.set(diff, count + 1);
  }
  
  return pairs % 1000000007;
};