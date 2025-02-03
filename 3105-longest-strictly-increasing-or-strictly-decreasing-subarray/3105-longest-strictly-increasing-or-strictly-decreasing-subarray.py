class Solution:
  def longestMonotonicSubarray(self, nums: List[int]) -> int:
    inc, dec, ans = 1, 1, 1
    for i in range(1, len(nums)):
      if nums[i] > nums[i-1]:
        inc += 1
        dec = 1
        ans = max(ans, inc)
      elif nums[i] < nums[i-1]:
        dec += 1
        inc = 1
        ans = max(ans, dec)
      else:
        inc = 1
        dec = 1
    return ans
        