function missingNumber(nums: number[]): number {
  let ans = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      let carry = nums[i];
      nums[i] = undefined;
      while (carry !== undefined && nums[carry] !== carry) {
        let tmp = nums[carry];
        nums[carry] = carry;
        carry = tmp;
      }
    }
    if (nums[i] === undefined) ans = i;
  }
  return ans === -1 ? nums.length : ans;
};