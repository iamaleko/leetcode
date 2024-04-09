// const twoSum = (nums, target) => {
//   for (let a = 0; a < nums.length - 1; a++)
//     for (let b = a + 1; b < nums.length; b++)
//       if (nums[a] + nums[b] === target) return [a, b];
// };

const twoSum = (nums, target) => {
  const map = {};
  for (let i = 0; i < nums.length; i++)
    if (map.hasOwnProperty(target - nums[i]) && map[target - nums[i]] !== i) {
      return [i, map[target - nums[i]]];
    } else {
      map[nums[i]] = i;
    }
};