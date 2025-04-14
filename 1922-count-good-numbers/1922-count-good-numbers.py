class Solution:
  def pow(self, x, p):
    m = 1
    while p > 0:
      if p % 2:
        m = (m * x) % (10 ** 9 + 7)
      x = (x * x) % (10 ** 9 + 7)
      p //= 2
    return m

  def countGoodNumbers(self, n: int) -> int:
    return self.pow(5, n // 2 + n % 2) * self.pow(4, n // 2) % (10 ** 9 + 7)
