class Solution:
  def minOperations(self, nums: List[int]) -> int:
    ops = 0
    n = len(nums)
    for i in range(n):
      if nums[i] == 0 and n > i + 2:
        nums[i] ^ 1
        nums[i + 1] ^ 1
        nums[i + 2] ^ 1
        ops += 1
    return ops