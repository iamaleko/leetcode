class Solution:
  def maximumSum(self, nums):
    m, ans = {}, -1
    for num in nums:
      s, n = 0, num
      while n:
        s += n % 10
        n //= 10
      if s not in m:
        m[s] = num
      else:
        if ans < num + m[s]:
          ans = num + m[s]
        if m[s] < num:
          m[s] = num
    return ans
