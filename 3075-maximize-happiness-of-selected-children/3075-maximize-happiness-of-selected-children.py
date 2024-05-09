class Solution:
  def maximumHappinessSum(self, h: List[int], k: int) -> int:
    h.sort(reverse = True)
    res = 0
    for i, n in enumerate(h):
      if not k:
        break
      res += max(0, n - i)
      k -= 1
    return res