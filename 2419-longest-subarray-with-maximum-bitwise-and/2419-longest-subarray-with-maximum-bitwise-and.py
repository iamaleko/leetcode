class Solution:
  def longestSubarray(self, nums: List[int]) -> int:
    maxNum = max(nums)
    ans, contiguous = 0, 0
    for num in nums:
      if num == maxNum:
        contiguous += 1
        if contiguous > ans:
          ans = contiguous
      else:
        contiguous = 0
    return ans
        