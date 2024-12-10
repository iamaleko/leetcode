class Solution:
  def maximumLength(self, s: str) -> int:
    cnt, ans, mem = 1, -1, [0] * 1626
    mem[(1 << 5) + ord(s[0]) - 96] = 1
    for i in range(1, len(s)):
      cnt = cnt + 1 if s[i] == s[i - 1] else 1
      for j in [cnt - x for x in range(min(cnt, 3))]:
        if mem[key := (j << 5) + ord(s[i]) - 96] == 2:
          if ans < j: ans = j
        else:
          mem[key] += 1
    return ans
        