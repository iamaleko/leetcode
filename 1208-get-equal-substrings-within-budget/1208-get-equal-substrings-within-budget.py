class Solution:
  def equalSubstring(self, s: str, t: str, maxCost: int) -> int:
    ans = 0
    l = 0
    cost = 0
    for r in range(len(t)):
      cost += abs(ord(s[r]) - ord(t[r]))
      while cost > maxCost:
        cost -= abs(ord(s[l]) - ord(t[l]))
        l += 1
      if r - l + 1 > ans:
        ans = r - l + 1
    return ans
