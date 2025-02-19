class Solution:
  def constructDistancedSequence(self, n: int) -> List[int]:
    k = n * 2 - 1
    ans = [0] * k
    def back(p, m):
      if m == (1 << n + 1) - 2:
        return True
      if ans[p]:
        return back(p + 1, m)
      for i in range(n, 0, -1):
        if m & 1 << i or i > 1 and (p + i >= k or ans[p + i]):
          continue
        ans[p] = i
        if i > 1:
          ans[p + i] = i
        m |= 1 << i
        if back(p + 1, m):
          return True
        ans[p] = 0
        if i > 1:
          ans[p + i] = 0
        m ^= 1 << i
      return False
    back(0, 0)
    return ans