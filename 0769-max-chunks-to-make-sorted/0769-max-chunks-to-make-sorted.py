class Solution:
  def maxChunksToSorted(self, arr: List[int]) -> int:
    ans, r = 0, 0
    for i, num in enumerate(arr):
      if num > r: r = num
      if i == r: ans += 1
    return ans
