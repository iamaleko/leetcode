class Solution:
  def maximumLength(self, s: str) -> int:
    ans = -1
    d = defaultdict(int)
    count = 1
    for i in range(len(s)):
      if i and s[i] == s[i - 1]:
        count += 1
      else:
        count = 1
      d[f"{s[i]}{count}"] += 1
      if d[f"{s[i]}{count}"] > 2:
        ans = max(count, ans)
      if count > 1:
        d[f"{s[i]}{count - 1}"] += 1
        if d[f"{s[i]}{count - 1}"] > 2:
          ans = max(count - 1, ans)
      if count > 2:
        d[f"{s[i]}{count - 2}"] += 1
        if d[f"{s[i]}{count - 2}"] > 2:
          ans = max(count - 2, ans)
    return ans
        