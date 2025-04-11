class Solution:
  def countSymmetricIntegers(self, low: int, high: int) -> int:
    ans = 0
    for a in range(low, high + 1):
      l, r, d = 0, 0, 0
      b = a
      while a:
        if b:
          l += a % 10
          d += 1
        else:
          r += a % 10
          d -= 1
        a //= 10
        b //= 100
      if not d and l == r:
        ans += 1

    return ans

        