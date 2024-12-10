class Solution:
  def maximumLength(self, s: str) -> int:
    count, ans = 1, -1
    mem = [0] * ((50 << 5) + ord('z') - 96)
    mem[(1 << 5) + ord(s[0]) - 96] = 1
    for i in range(1, len(s)):
      count = count + 1 if s[i] == s[i - 1] else 1
      for offset in range(min(count, 3)):
        key = (count - offset << 5) + ord(s[i]) - 96
        mem[key] += 1
        if mem[key] > 2:
          ans = max(ans, count - offset)
    return ans
        