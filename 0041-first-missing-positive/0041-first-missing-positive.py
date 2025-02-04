class Solution:
  def firstMissingPositive(self, nums: List[int]) -> int:
    n = len(nums)
    for i in range(n):
      while nums[i] and nums[i]-1 != i:
        if nums[i] <= 0 or nums[i] > n or nums[nums[i]-1] == nums[i]:
          nums[i] = 0
        else:
          nums[nums[i]-1], nums[i] = nums[i], nums[nums[i]-1]
    for i in range(n):
      if not nums[i]:
        return i + 1
    return n + 1
        