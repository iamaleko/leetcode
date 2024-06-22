class Solution:
  def minRemoveToMakeValid(self, s: str) -> str:
    def fix(s, op, cl):
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
    return fix(fix(s,'(',')')[::-1],')','(')[::-1]