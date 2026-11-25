class Solution:
  def diStringMatch(self, s: str) -> list[int]:
    a, r, l = [], len(s), 0
    for ch in s:
      if ch == 'I':
        a.append(l)
        l += 1
      else:
        a.append(r)
        r -= 1
      if l == r:
        a.append(l)
        return a 
      
        