class Solution:
  def mySqrt(self, n: int) -> int:
    x = n
    if n:
      while n // x != math.floor(x):
        x = (n / x + x) / 2
    return math.floor(x)