class Solution:
  def minimizeXor(self, num1: int, num2: int) -> int:
    n, b, p = 0, 0, 1 << 30
    while num2:
      b += 1
      num2 &= num2 - 1
    while p and b:
      if 1 << b == p:
        return n | (p - 1)
      p >>= 1
      if num1 & p:
        b -= 1
        n |= p
    return n
        