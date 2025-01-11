class Solution:
  def canConstruct(self, s: str, k: int) -> bool:
    if len(s) < k: return False
    m = 0
    for ch in s: m ^= 1 << ord(ch) - 97
    while m: m, k = m & m - 1, k - 1
    return k >= 0

# class Solution:
#   def canConstruct(self, s: str, k: int) -> bool:
#     if len(s) >= k:
#       odd = 0
#       for v in Counter(s).values():
#         if v & 1: odd += 1
#         if odd > k: break
#       else:
#         return True
#     return False
        