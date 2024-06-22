class Solution:
  def minRemoveToMakeValid(self, s: str) -> str:
    ans = ''
    opened = 0
    for ch in s:
      if ch == '(':
        opened += 1
      elif ch == ')':
        if opened:
          opened -= 1    
        else:
          continue
      ans += ch
    s = ans[::-1]
    ans = ''
    opened = 0
    for ch in s:
      if ch == ')':
        opened += 1
      elif ch == '(':
        if opened:
          opened -= 1    
        else:
          continue
      ans += ch
    return ans[::-1]
