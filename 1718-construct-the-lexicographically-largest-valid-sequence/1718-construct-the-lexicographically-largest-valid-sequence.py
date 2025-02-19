class Solution:
  def constructDistancedSequence(self, n: int) -> List[int]:
    s = [(x, 0 if x == 1 else x, 1 << x) for x in range(n, 0, -1)]
    k = n * 2 - 1
    ans = [0] * k
    def back(l, m):
      if not m:
        return True
      if ans[l]:
        return back(l + 1, m)
      for i, r, b in s:
        if m & b:
          r += l
          if r < k and not ans[r]:
            ans[l] = ans[r] = i
            if back(l + 1, m ^ b):
              return True
            ans[l] = ans[r] = 0
      return False
    back(0, 2 ** n - 1 << 1)
    return ans