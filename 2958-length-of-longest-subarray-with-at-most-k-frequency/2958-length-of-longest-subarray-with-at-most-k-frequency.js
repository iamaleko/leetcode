const maxSubarrayLength = (nums, k) => {
  const map = {};
  let left = 0, right = 0, max = 0;

  while (right < nums.length) {
    if (!map.hasOwnProperty(nums[right])) map[nums[right]] = 0;
    if (map[nums[right]] < k) {
      map[nums[right]]++;
      right++;
      if (max < right - left) max = right - left;
    } else {
      map[nums[left]]--;
      left++;
    }
  }

  return max;
};