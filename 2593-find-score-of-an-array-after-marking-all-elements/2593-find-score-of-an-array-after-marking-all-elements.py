class Solution:
  def findScore(self, nums: List[int]) -> int:
    marked = set()
    indexes = sorted(list(range(len(nums))), key = lambda x: nums[x])
    score = 0
    for i in indexes:
      if i not in marked:
        marked.update((i - 1, i, i + 1))
        score += nums[i]
    return score
        