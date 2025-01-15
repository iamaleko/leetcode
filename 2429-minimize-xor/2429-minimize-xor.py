class Solution:
  def minimizeXor(self, num1: int, num2: int) -> int:
    ans, bits = 0, 0
    while num2: bits, num2 = bits + 1, num2 & num2 - 1
    # remove bits
    for p in range(29, -1, -1):
      p = 1 << p
      if not bits:
        break
      if num1 & p:
        bits -= 1
        ans |= p
    # add bits
    p = 1
    while bits:
      if not ans & p:
        bits -= 1
        ans |= p
      p <<= 1
    return ans
        