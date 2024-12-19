class Solution:
  def maxChunksToSorted(self, arr: List[int]) -> int:
    m = {num: i for i, num in enumerate(arr)}
    ans, l, r = 0, 0, 0
    for i, num in enumerate(arr):
      if (num == i and l == i and r == i) or (num >= l and num <= r and i == r):
        ans += 1
        r = l = i + 1
      elif num > r:
        r = num
    return ans
