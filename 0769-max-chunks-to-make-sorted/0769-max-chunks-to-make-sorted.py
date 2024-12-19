class Solution:
  def maxChunksToSorted(self, arr: List[int]) -> int:
    m = {}
    for i, num in enumerate(arr):
      m[num] = i
    ans, l, r = 0, 0, 0
    for i, num in enumerate(arr):
      if num == i and l == i and r == i:
        ans += 1
        l = i + 1
        r = i + 1
      elif num >= l and num <= r and i == r:
        ans += 1
        l = i + 1
        r = i + 1
      elif num != i and num > r:
        r = num
    return ans
