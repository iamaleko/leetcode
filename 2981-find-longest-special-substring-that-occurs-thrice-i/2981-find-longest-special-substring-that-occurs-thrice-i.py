class Solution:
  def maximumLength(self, s: str) -> int:
    count, ans = 1, -1
    d = defaultdict(int)
    for i in range(len(s)):
      count = count + 1 if i and s[i] == s[i - 1] else 1
      for offset in range(min(count, 3)):
        d[f"{s[i]}{count - offset}"] += 1
        if ans < count - offset and d[f"{s[i]}{count - offset}"] > 2:
          ans = count - offset
    return ans
        