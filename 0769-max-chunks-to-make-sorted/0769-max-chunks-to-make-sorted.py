class Solution:
  def maxChunksToSorted(self, arr: List[int]) -> int:
    ans, r = 0, 0
    for i, num in enumerate(arr):
      if i == r and num <= r:
        ans += 1
        r = i + 1
      elif num > r:
        r = num
    return ans
