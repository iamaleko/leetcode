class Solution:
  def findScore(self, nums: List[int]) -> int:
    n, score = len(nums) - 1, 0
    indexes = sorted(list(range(len(nums))), key = lambda x: nums[x])
    for i in indexes:
      if nums[i]:
        if i: nums[i - 1] = 0
        if i < n: nums[i + 1] = 0
        score += nums[i]
    return score
        