/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function(nums, target) {
  nums.sort((a,b) => a - b);
  const tree = {};
  const res = [];
  for (let a = 0; a < nums.length - 3; a += 1) {
    for (let b = a + 1; b < nums.length - 2; ++b) {
      for (let c = b + 1; c < nums.length - 1; ++c) {
        for (let d = c + 1; d < nums.length; ++d) {
          if (nums[a] + nums[b] + nums[c] + nums[d] > target) break;
          if (nums[a] + nums[b] + nums[c] + nums[d] === target) {
            if (!tree[nums[a]]) {
              tree[nums[a]] = {};
            }
            if (!tree[nums[a]][nums[b]]) {
              tree[nums[a]][nums[b]] = {};
            }
            if (!tree[nums[a]][nums[b]][nums[c]]) {
              tree[nums[a]][nums[b]][nums[c]] = {};
            }
            if (!tree[nums[a]][nums[b]][nums[c]][nums[d]]) {
              tree[nums[a]][nums[b]][nums[c]][nums[d]] = true;
              res.push([nums[a], nums[b], nums[c], nums[d]]);
            }
          }
        }   
      }
    } 
  }
  return res;
};