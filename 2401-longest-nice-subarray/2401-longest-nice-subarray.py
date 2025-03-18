# n * 32
class Solution:
  def longestNiceSubarray(self, nums: List[int]) -> int:
    ans = 0
    prev, curr = [-1] * 32, [-1] * 32
    l = -1
    for r, num in enumerate(nums):
      b = 0
      while num:
        if num & 1:
          prev[b] = curr[b]
          curr[b] = r
          l = max(l, prev[b])
        num >>= 1
        b += 1
      ans = max(ans, r - l)
    return ans

# n * n
# class Solution:
#   def longestNiceSubarray(self, nums: List[int]) -> int:
#     ans = 0
#     masks = {}
#     n = len(nums)
#     for i in range(n):
#       for j in list(masks.keys()):
#         if nums[i] & masks[j]:
#           ans = max(ans, i - j)
#           del masks[j]
#         else:
#           masks[j] |= nums[i]
#       masks[i] = nums[i]
#     for j in masks:
#       ans = max(ans, n - j)
#     return ans
