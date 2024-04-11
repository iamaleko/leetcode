class Solution:
  def longestSubarray(self, nums: List[int]) -> int:
    l = 0
    r = 0
    z = 0
    max = 0
    while r < len(nums):
      if not nums[r]:
        z += 1
      while z > 1 and l < r:
        if not nums[l]:
          z -= 1
        l += 1
      if r - l > max:
        max = r - l
      r += 1
    return max

        