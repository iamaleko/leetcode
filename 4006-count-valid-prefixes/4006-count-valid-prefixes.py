class Solution:
  def countValidPrefixes(self, s: str) -> int:
    diff = 0
    ans = 0
    for ch in s:
      diff += 1 if ch == '1' else -1
      if -2 < diff < 2: ans += 1
    return ans
        