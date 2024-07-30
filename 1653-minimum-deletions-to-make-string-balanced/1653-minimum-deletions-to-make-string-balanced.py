class Solution:
  def minimumDeletions(self, s: str) -> int:
    n = len(s)
    a = [0] * n
    b = [0] * n
    for i in range(n):
      if s[i] == 'b':
        a[i] += 1
      if s[n - i - 1] == 'a':
        b[n - i - 1] += 1
      if i:
        a[i] += a[i - 1]
        b[n - i - 1] += b[n - i]
    ans = min(a[-1], b[0])
    if ans:
      for i in range(1, n):
        if a[i - 1] + b[i] < ans:
          ans = a[i - 1] + b[i]
    return ans
        