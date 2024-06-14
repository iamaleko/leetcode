class Solution:
  def minIncrementForUnique(self, nums: List[int]) -> int:
    ans = 0
    nums.sort()
    for i in range(1, len(nums)):
      if nums[i] <= nums[i - 1]:
        ans += abs(nums[i] - nums[i - 1]) + 1
        nums[i] = nums[i - 1] + 1
    return ans
        