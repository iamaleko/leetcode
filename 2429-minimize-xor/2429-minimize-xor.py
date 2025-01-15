class Solution:
  def minimizeXor(self, num1: int, num2: int) -> int:
    ans, bits, p = 0, 0, 30
    while num2: bits, num2 = bits + 1, num2 & num2 - 1
    p = 30
    while p and bits:
      p -= 1
      if num1 & (1 << p) or bits == p + 1:
        bits -= 1
        ans |= (1 << p)
    return ans
        