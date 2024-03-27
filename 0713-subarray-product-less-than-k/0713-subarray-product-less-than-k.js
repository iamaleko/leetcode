const numSubarrayProductLessThanK = (nums, k) => {      
  let left = 0, prod = 1, count = 0;
  for (let right = 0; right < nums.length; right++) {
    prod *= nums[right];
    while (prod >= k && left <= right) {
      prod /= nums[left];
      left++;
    }
    count += right - left + 1;
  }
  return count;
}