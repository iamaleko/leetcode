class Solution:
  def fix(self, s, op, cl):
    ans = ''
    lv = 0
    for ch in s:
      if ch == op:
        lv += 1
      elif ch == cl:
        if lv:
          lv -= 1    
        else:
          continue
      ans += ch
    return ans
  def minRemoveToMakeValid(self, s: str) -> str:
    return self.fix(self.fix(s,'(',')')[::-1],')','(')[::-1]