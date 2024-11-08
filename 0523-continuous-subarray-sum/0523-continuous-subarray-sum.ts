function checkSubarraySum(nums: number[], k: number): boolean {
  const map = new Map<number, number>();
  map.set(0, -1);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum % k)) {
      if (i - map.get(sum % k) > 1) return true;
    } else {
      map.set(sum % k, i);
    }
  }
  return false;
};