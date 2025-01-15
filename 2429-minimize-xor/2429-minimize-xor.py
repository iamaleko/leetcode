class Solution:
  def minimizeXor(self, num1: int, num2: int) -> int:
    n, b, p = 0, 0, 30
    while num2:
      b += 1
      num2 &= num2 - 1
    while p and b:
      if b == p:
        return n | (1 << p) - 1
      p -= 1
      if num1 & 1 << p:
        b -= 1
        n |= 1 << p
    return n
        