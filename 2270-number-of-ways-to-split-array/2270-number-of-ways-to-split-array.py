class Solution:
  def waysToSplitArray(self, nums: List[int]) -> int:
    ans, rs, s = 0, nums[0], sum(nums)
    for i in range(1, len(nums)):
      if rs >= s - rs: ans += 1
      rs += nums[i]
    return ans
        