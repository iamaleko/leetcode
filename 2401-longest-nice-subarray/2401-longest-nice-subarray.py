# n * 32 always
# class Solution:
#   def longestNiceSubarray(self, nums: List[int]) -> int:
#     ans = 0
#     prev, curr = [-1] * 32, [-1] * 32
#     l = -1
#     for r, num in enumerate(nums):
#       b = 0
#       while num:
#         if num & 1:
#           prev[b] = curr[b]
#           curr[b] = r
#           if prev[b] > l:
#             l = prev[b]
#         num >>= 1
#         b += 1
#       if r - l > ans:
#         ans = r - l
#     return ans

# n * 32 at worst
class Solution:
  def longestNiceSubarray(self, nums: List[int]) -> int:
    ans = 0
    masks = {}
    n = len(nums)
    for i in range(n):
      print(masks)
      for j in list(masks.keys()):
        if nums[i] & masks[j]:
          if ans < i - j:
            ans = i - j
          del masks[j]
        else:
          masks[j] |= nums[i]
      masks[i] = nums[i]
    for j in masks:
      if ans < n - j:
        ans = n - j
    return ans
