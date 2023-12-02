/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = (nums) => {
  let i = nums.length - 1;
  let steps = 0;
  while (i > 0) {
    let j = i - 1
    let less = j;
    while (j >= 0) {
      if (j + nums[j] >= i) less = j;
      --j;
    }
    
    ++steps;
    i = less;
  }
  
  return steps;
};