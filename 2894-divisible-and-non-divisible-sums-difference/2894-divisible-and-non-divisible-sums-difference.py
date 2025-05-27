class Solution:
  def differenceOfSums(self, n: int, m: int) -> int:
    ans = 0
    while n:
      ans += n if n % m else -n
      n -= 1
    return ans
        