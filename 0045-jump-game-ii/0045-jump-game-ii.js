/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = (nums) => {
  let i = nums.length - 1,
      jumps = 0;
  
  while (i > 0) {
    let j = i - 1, min = j;
    while (j >= 0) {
      if (j + nums[j] >= i) min = j;
      --j;
    }
    
    ++jumps;
    i = min;
  }
  
  return jumps;
};