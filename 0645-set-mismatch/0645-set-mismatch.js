const findErrorNums = (nums) => {
  let temp, i = 0, j;
  for (; i < nums.length; ++i) {
    if (nums[i] === i + 1) { // already in place
      nums[i] = undefined;
    } else if (nums[i] > 0) {
      if (nums[nums[i] - 1] === undefined) { // repeated
        j = i;
      } else { // swap places
        temp = nums[i] - 1;
        nums[i--] = nums[temp];
        nums[temp] = undefined;
      }
    }
  }
  return [nums[j], j + 1];
};