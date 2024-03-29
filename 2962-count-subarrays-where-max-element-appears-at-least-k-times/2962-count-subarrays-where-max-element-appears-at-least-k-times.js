const countSubarrays = (nums, k) => {
  // find max
  let max = 0, cnt = 0, res = 0;
  for (let i = 0;  i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      cnt = 1;
    } else if (max === nums[i]) {
      cnt++;
    }
  }

  // count subarrays
  if (cnt >= k) {
    cnt = 0;
    for (let l = 0, r = 0; r <= nums.length;) {
      if (cnt < k) {
        if (nums[r] === max) cnt++;
        r++;
      } else {
        res += nums.length - r + 1;
        if (nums[l] === max) cnt--;
        l++;
      }
    }
  }
  return res;
};