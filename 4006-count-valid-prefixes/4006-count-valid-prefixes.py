class Solution:
  def countValidPrefixes(self, s: str) -> int:
    zeros = 0
    ones = 0
    ans = 0
    for ch in s:
      if ch == '1':
        ones += 1
      else:
        zeros += 1
      if abs(ones - zeros) < 2:
        ans += 1
    return ans
        