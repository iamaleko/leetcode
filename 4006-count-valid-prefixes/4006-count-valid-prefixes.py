class Solution:
  def countValidPrefixes(self, s: str) -> int:
    diff = 0
    ans = 0
    for ch in s:
      if ch == '1':
        diff += 1
      else:
        diff -= 1
      if abs(diff) < 2:
        ans += 1
    return ans
        