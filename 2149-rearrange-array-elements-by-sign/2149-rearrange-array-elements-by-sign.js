const rearrangeArray = (nums) => {
  const ps = [], ms = [];
  let i = 0;
  while (i < nums.length) (nums[i] > 0 ? ps : ms).push(nums[i++]);
  while (i) nums[--i] = (i % 2 ? ms : ps).pop();
  return nums;
};