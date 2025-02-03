class Solution:
  def longestMonotonicSubarray(self, nums: List[int]) -> int:
    inc, dec, ans = 1, 1, 1
    for i in range(1, len(nums)):
      inc = inc + 1 if nums[i] > nums[i-1] else 1
      dec = dec + 1 if nums[i] < nums[i-1] else 1
      if inc > ans: ans = inc
      if dec > ans: ans = dec
    return ans
        