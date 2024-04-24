class Solution:
  def tribonacci(self, n: int) -> int:
    res = [0,1,1]
    i = 3
    while i <= n:
      res.append(res[i - 3] + res[i - 2] + res[i - 1])
      i += 1
    return res[n]
        