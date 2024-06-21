class Solution:
  def maxSatisfied(self, customers: List[int], grumpy: List[int], minutes: int) -> int:
    unsatisfied = 0
    best = 0
    ans = 0
    for i in range(len(grumpy)):
      if i >= minutes and grumpy[i - minutes]:
        unsatisfied -= customers[i - minutes]
      if grumpy[i]:
        unsatisfied += customers[i]
        if unsatisfied > best:
          ans -= best - (best := unsatisfied)
      else:
        ans += customers[i]
    return ans
    

        