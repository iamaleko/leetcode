function maxWidthRamp(nums: number[]): number {
  const pairs = nums.map((v, i) => [i, v]).sort((a, b) => a[1] - b[1]);
  let ans = 0, min = nums.length;
  for (const [i, ] of pairs) {
    if (i < min) {
      min = i;
    } else if (ans < i - min) {
      ans = i - min
    }
  }
  return ans;
};



// TLE 100/101
// function maxWidthRamp(nums: number[]): number {
//   let ans = 0;
//   for (let l = 0; l < nums.length - 1; l++) {
//     for (let r = nums.length - 1; r > l + ans; r--) {
//       if (nums[l] <= nums[r] && r - l > ans) ans = r - l;
//     }
//   }
//   return ans;
// };