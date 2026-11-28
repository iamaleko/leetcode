class Solution:
  def largestInteger(self, n: int, s: int) -> int:
    ans = 0
    for i in range(n):
      ans *= 10
      if s >= 9:
        ans += 9
        s -= 9
      elif s > 0:
        ans += s
        s -= s
    if s:
      return -1
    return ans 
        