class Solution:
  def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
    for i in range(len(points)):
      points[i] = (points[i][0]**2 + points[i][1]**2, points[i])
    heapify(points)
    res = []
    for i in range(k):
      res.append(heappop(points)[1])
    return res