class Solution:
  def isAdjacentDiffAtMostTwo(self, s: str) -> bool:
    a = [int(x) for x in s]
    for i in range(1, len(a)):
      if abs(a[i - 1] - a[i]) > 2:
        return False
    return True
        