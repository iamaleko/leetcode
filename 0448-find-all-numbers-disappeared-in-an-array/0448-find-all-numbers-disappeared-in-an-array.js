const findDisappearedNumbers = (nums) => {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === i + 1) continue;
    while (nums[i] !== undefined && nums[i] !== i + 1) {
      if (nums[i] === nums[nums[i] - 1]) {
        break;
      }
      let tmp = nums[i];
      nums[i] = nums[nums[i] - 1];
      nums[tmp - 1] = tmp;
    }
  }
  for (let i = 0; i < nums.length; i++) if (nums[i] !== i + 1) res.push(i + 1)
  return res;
};