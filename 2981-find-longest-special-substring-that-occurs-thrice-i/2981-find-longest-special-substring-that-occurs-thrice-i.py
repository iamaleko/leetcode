class Solution:
  def maximumLength(self, s: str) -> int:
    count, ans = 1, -1
    mem = [0] * 1626 # (50 << 5) + ord('z') - 96
    mem[(1 << 5) + ord(s[0]) - 96] = 1
    for i in range(1, len(s)):
      count = count + 1 if s[i] == s[i - 1] else 1
      for t in [count - x for x in range(min(count, 3))]:
        if mem[key := (t << 5) + ord(s[i]) - 96] == 2:
          if ans < t: ans = t
        else:
          mem[key] += 1
      # for offset in range(min(count := count + 1 if s[i] == s[i - 1] else 1, 3)):
      #   if mem[key := (count - offset << 5) + ord(s[i]) - 96] == 2:
      #     if ans < count - offset: ans = count - offset
      #   else:
      #     mem[key] += 1
    return ans
        