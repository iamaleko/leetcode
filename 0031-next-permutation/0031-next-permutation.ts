/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  let j = nums.length - 1,
    i = nums.length - 2,
    max = nums[j],
    st = [j];
  while (i > -1) {
    if (nums[i] < max) {
      j = st.length - 1;
      while (nums[i] < nums[st[j]]) j--;
      j = st[j+1]
      break;
    } else if (nums[i] > max) {
      max = nums[i];
      st.push(i);
    }
    i--;
  }
  if (i < 0) {
    nums.sort((a, b) => a - b);
  } else {
    [nums[j], nums[i]] = [nums[i], nums[j]];
    nums.splice(i+1, nums.length, ...nums.slice(i+1).sort((a, b) => a - b));
  }
};