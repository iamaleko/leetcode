# class Solution:
#   def canConstruct(self, s: str, k: int) -> bool:
#     if len(s) < k: return False
#     m = 0
#     for b in bytes(s, 'utf-8'): m ^= 1 << b
#     while m := m & m - 1: k -= 1
#     return k > 0

class Solution:
  def canConstruct(self, s: str, k: int) -> bool:
    if len(s) >= k:
      for v in Counter(s).values(): k -= v & 1
      return k >= 0
    return False
        