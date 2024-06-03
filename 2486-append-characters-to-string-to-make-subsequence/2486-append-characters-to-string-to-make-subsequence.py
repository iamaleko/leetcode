# class Solution:
#   def appendCharacters(self, s: str, t: str) -> int:
#     p = 0
#     for i in range(len(t)):
#       _p = s.find(t[i], p)
#       if _p == -1:
#         return len(t) - i
#       p = _p + 1
#     return 0

class Solution:
  def appendCharacters(self, s: str, t: str) -> int:
    iter_s = iter(s)
    for i, char in enumerate(t):
      if char not in iter_s:
        return len(t) - i
    return 0
        