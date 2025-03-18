# n * 32
class Solution:
  def longestNiceSubarray(self, nums: List[int]) -> int:
    ans = 0
    bits = 32
    prev = [-1] * bits
    curr = [-1] * bits
    n = len(nums)
    k = -1
    for i in range(n):
      for b in range(bits):
        if nums[i] & 1 << b:
          prev[b] = curr[b]
          curr[b] = i
          if prev[b] > k:
            k = prev[b]
      if i - k > ans:
        ans = i - k
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
