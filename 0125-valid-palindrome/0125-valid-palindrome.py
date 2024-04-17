class Solution:
  def isPalindrome(self, s: str) -> bool:
    voc = 'abcdefghijklmnopqrstuvwxyz0123456789'
    s = s.lower()
    l = 0
    r = len(s) - 1
    while l < r:
      if s[l] not in voc:
        l += 1
      elif s[r] not in voc:
        r -= 1
      elif s[l] == s[r]:
        l += 1
        r -= 1
      else:
        return False
    return True
        