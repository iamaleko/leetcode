class Solution:
  def appendCharacters(self, s: str, t: str) -> int:
    p = 0
    for i in range(len(t)):
      _p = s.find(t[i], p)
      if _p == -1:
        return len(t) - i
      p = _p + 1
    return 0
        