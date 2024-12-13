class Solution:
  def rangeBitwiseAnd(self, left: int, right: int) -> int:
    bit = 1
    ans = 0
    n = left
    while n:
      if n & 1:
        val = right ^ bit if right & bit else right
        if val < left or val > right:
          ans |= bit
      n >>= 1
      bit <<= 1
    return ans
