class Solution:
  def clearStars(self, s: str) -> str:
    h = []
    s = list(s)
    for i, ch in enumerate(s):
      if ch == '*':
        s[i] = None
        if h:
          _, j = heappop(h)
          s[-j] = None
      else:
        heappush(h, (ch, -i))
    return ''.join([x for x in s if x])
        