class Solution:
  def getHappyString(self, n: int, k: int) -> str:
    def back(s, k):
      r = ''
      if len(s) == n:
        k -= 1
        if not k: 
          r = s
      else:
        for x in ['a','b','c']:
          if k and s[-1:] != x:
            r, k = back(s + x, k)
      return r, k
    return back('', k)[0]