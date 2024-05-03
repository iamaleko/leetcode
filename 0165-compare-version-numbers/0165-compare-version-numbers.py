class Solution:
  def compareVersion(self, a: str, b: str) -> int:
    if a and b:
      a = [int(e) for e in a.split('.')]
      b = [int(e) for e in b.split('.')]
      i = 0
      while i < len(a) or i < len(b):
        an = a[i] if i < len(a) else 0
        bn = b[i] if i < len(b) else 0
        if an < bn:
          return -1
        elif an > bn:
          return 1
        i += 1
    return 0    