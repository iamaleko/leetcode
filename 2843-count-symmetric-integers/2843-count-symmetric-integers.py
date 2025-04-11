class Solution:
  def countSymmetricIntegers(self, low: int, high: int) -> int:
    ans = 0
    for a in range(low, high + 1):
      s, d, b = 0, 0, a
      while a:
        if b:
          s += a % 10
          b //= 100
        else:
          s -= a % 10
        d ^= 1
        a //= 10
      if not d and not s:
        ans += 1
    return ans