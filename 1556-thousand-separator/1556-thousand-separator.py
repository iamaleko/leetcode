class Solution:
  def thousandSeparator(self, n: int) -> str:
    n = str(n)
    d = 1
    res = ''
    for i in reversed(range(len(n))):
      res = n[i] + res
      if not d % 3 and i:
        res = '.' + res
        d = 1
      else:
        d += 1
    return res
        