class Solution:
  def rearrangeString(self, s: str, x: str, y: str) -> str:
    a = ''
    b = ''
    c = ''
    for ch in s:
      if ch == y:
        a += y
      elif ch == x:
        c += x
      else:
        b += ch
    return a + b + c
        