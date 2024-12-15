class Solution:
  def ratio(self, i: int) -> tuple:
    a, b = self.classes[i]
    return a / b - (a + 1) / (b + 1)
    
  def maxAverageRatio(self, classes: List[List[int]], k: int) -> float:
    self.classes = classes
    h = [(self.ratio(i), i) for i in range(len(classes))]
    heapify(h)
    while k:
      classes[h[0][1]][0] += 1
      classes[h[0][1]][1] += 1
      heappushpop(h, (self.ratio(h[0][1]), h[0][1]))
      k -= 1
    total = 0
    for a, b in classes:
      total += a / b
    return total / len(classes)

        