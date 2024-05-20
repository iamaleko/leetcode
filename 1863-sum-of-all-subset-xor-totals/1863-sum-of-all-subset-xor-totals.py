class Solution:
  def subsetXORSum(self, nums: List[int]) -> int:
    def rec(acc, i):
      if i == len(nums):
        return acc
      else:
        return rec(acc ^ nums[i], i + 1) + rec(acc, i + 1)
    return rec(0, 0)