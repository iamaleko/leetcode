class Solution:
  def back(self, s):
    if not self.k:
      return
    if len(s) == self.n:
      self.k -= 1
      self.ans = s
      return
    for x in ['a','b','c']:
      if not len(s) or s[-1] != x:
        self.back(s + x)

  def getHappyString(self, n: int, k: int) -> str:
    self.n = n
    self.k = k
    self.ans = ''
    self.back('')
    return '' if self.k else self.ans