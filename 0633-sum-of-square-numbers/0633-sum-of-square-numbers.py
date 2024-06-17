class Solution:
  def judgeSquareSum(self, c: int) -> bool:
    if not c:
      return True
    r = floor(math.sqrt(c))
    l = 0
    while r > l:
      if (l := math.sqrt(c - r ** 2)) % 1 == 0:
        return True
      r -= 1
    return False
        