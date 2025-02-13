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
        ans = max(ans, num + m[s])
        m[s] = max(m[s], num)
    return ans
