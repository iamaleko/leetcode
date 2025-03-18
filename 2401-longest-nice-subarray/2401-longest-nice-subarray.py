class Solution:
  def longestNiceSubarray(self, nums: List[int]) -> int:
    ans = 0
    masks = {}
    n = len(nums)
    for i in range(n):
      for j in list(masks.keys()):
        if nums[i] & masks[j]:
          ans = max(ans, i - j)
          del masks[j]
        else:
          masks[j] |= nums[i]
      masks[i] = nums[i]
    for j in masks:
      ans = max(ans, n - j)
    return ans
