class Solution:
  def diStringMatch(self, s: str) -> list[int]:
    a = []
    r = len(s)
    l = 0
    for ch in s:
      if ch == 'I':
        a.append(l)
        l+=1
      else:
        a.append(r)
        r-=1
      if l >= r:
        break
    a.append(l)
    return a 
      
        