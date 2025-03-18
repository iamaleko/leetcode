class Solution:
  def longestNiceSubarray(self, nums: List[int]) -> int:
    ans = 0
    masks = {}
    n = len(nums)
    for i in range(n):
      for j, mask in list(masks.items()):
        if nums[i] & mask:
          ans = max(ans, i - j)
          del masks[j]
        else:
          masks[j] |= nums[i]
      masks[i] = nums[i]
    for j in masks:
      ans = max(ans, n - j)
    return ans
        
# print(bin(num)[2:].rjust(32, "0"), bin(mask)[2:].rjust(32, "0"), cur)
        