class Solution:
  def validDigit(self, n: int, x: int) -> bool:
    last = False
    found = False
    while n:
      last = n % 10 == x
      n = int(n / 10)
      found = found or last
    return found and not last