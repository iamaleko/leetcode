class Solution:
  def rearrangeString(self, s: str, x: str, y: str) -> str:
    ss = ''
    for ch in s:
      if ch != y and ch != x:
        ss += ch
    return y * s.count(y) + ss + x * s.count(x)
        