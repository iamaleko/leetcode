class Solution:
    def bitwiseComplement(self, n: int) -> int:
      if not n:
        return 1
      m = 1
      while m <= n:
        n ^= m
        m <<= 1
      return n
        