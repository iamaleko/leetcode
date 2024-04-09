class Solution:
  def isPalindrome(self, x: int) -> bool:
    if x < 0:
      return False
    j = x
    n = 0
    while j:
      n += j % 10
      n *= 10
      j //= 10
    return n / 10 == x
