/**
 * @param {number[][]} nums
 * @return {number[]}
 */
const findDiagonalOrder = (nums) => {
  let sy = 0,
      sx = 0,
      my = nums.length - 1,
      mx = nums.reduce((a,v) => Math.max(a,v.length), 0) - 1,
      x, y;
  
  const res = [];
  
  while (true) {
    x = sx;
    y = sy;
    
    while (y > -1 && x <= mx) {
      if (nums[y][x] !== undefined) res.push(nums[y][x]);
      --y;
      ++x;
    }
    
    if (sy === my) {
      if (sx === mx) {
        break;
      } else if (sx < mx) {
        ++sx;
      }
    } else if (sy < my) {
      ++sy;
    }
  }
  
  return res;
};