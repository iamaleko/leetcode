// const twoSum = (nums, target) => {
//   for (let a = 0; a < nums.length - 1; a++)
//     for (let b = a + 1; b < nums.length; b++)
//       if (nums[a] + nums[b] === target) return [a, b];
// };

const twoSum = (nums, target) => {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) map.set(nums[i], i);
  for (let i = 0; i < nums.length; i++) if (i !== map.get(target - nums[i])) return [i, map.get(target - nums[i])];
};