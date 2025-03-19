class Solution:
  def minOperations(self, nums: List[int]) -> int:
    ops = 0
    for i in range(len(nums)-2):
      if not nums[i]:
        nums[i + 1] ^= 1
        nums[i + 2] ^= 1
        ops += 1
    return ops if nums[-1] and nums[-2] else -1