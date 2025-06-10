class Solution:
  def maxDifference(self, s: str) -> int:
    a, b = -1, inf
    for count in Counter(s).values():
      if count & 1:
        a = max(a, count)
      else:
        b = min(b, count)
    return a - b
        