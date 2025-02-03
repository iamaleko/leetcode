class Solution:
  def longestMonotonicSubarray(self, nums: List[int]) -> int:
    inc = 1
    dec = 1
    ans = 1
    for i in range(1, len(nums)):
      inc = inc + 1 if nums[i] > nums[i-1] else 1
      dec = dec + 1 if nums[i] < nums[i-1] else 1
      ans = max(ans, inc, dec)
    return ans
        