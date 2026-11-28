import math

class Solution:
  def validDigit(self, n: int, x: int) -> bool:
    last = False
    found = False
    while n:
      last = n % 10 == x
      found = found or last
      n = math.trunc(n / 10)
    return found and not last