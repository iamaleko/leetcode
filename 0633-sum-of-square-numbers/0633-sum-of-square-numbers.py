class Solution:
  def judgeSquareSum(self, c: int) -> bool:
    if not c:
      return True
    r = floor(math.sqrt(c))
    for r in range(r // 2, r + 1):
      if math.sqrt(c - r ** 2) % 1 == 0:
        return True
    return False
        