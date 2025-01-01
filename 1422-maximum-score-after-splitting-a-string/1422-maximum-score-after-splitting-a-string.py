class Solution:
  def maxScore(self, s: str) -> int:
    zeros = [0] * len(s)
    if s[0] == '0': zeros[0] += 1
    for i in range(1, len(s)-1):
      zeros[i] = zeros[i - 1]
      if s[i] == '0': zeros[i] += 1
    zeros[-1] = zeros[-2]
    ans, ones = 0, 0
    for i in range(len(s) - 1, 0, -1):
      if s[i] == '1': ones += 1
      ans = max(ans, zeros[i] + ones)
    return ans
        