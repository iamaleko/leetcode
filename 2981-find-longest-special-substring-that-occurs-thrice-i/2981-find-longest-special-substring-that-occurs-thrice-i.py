class Solution:
  def maximumLength(self, s: str) -> int:
    count, ans = 1, -1
    d = defaultdict(int)
    d[f"{s[0]}1"] = 1
    for i in range(1, len(s)):
      count = count + 1 if s[i] == s[i - 1] else 1
      for offset in range(min(count, 3)):
        key = f"{s[i]}{count - offset}"
        d[key] += 1
        if d[key] > 2:
          ans = max(ans, count - offset)
    return ans
        