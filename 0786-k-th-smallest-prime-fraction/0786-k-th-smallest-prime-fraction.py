# class Solution:
#   def kthSmallestPrimeFraction(self, arr: List[int], k: int) -> List[int]:
#     ls = []
#     for i in range(len(arr) - 1, -1, -1):
#       for j in range(i):
#         ls.append(([arr[j],arr[i]],arr[j]/arr[i]))
#     ls.sort(key = lambda x: x[1])
#     return ls[k - 1][0]

class Solution:
  def kthSmallestPrimeFraction(self, arr: List[int], k: int) -> List[int]:
    h = [(1 / arr[b], 0, b) for b in range(len(arr))]
    heapify(h)
    for _ in range(1, k):
      _, a, b = heappop(h)
      if a + 1 < b:
        heappush(h, (arr[a + 1] / arr[b], a + 1, b))
    _, a, b = heappop(h)
    return [arr[a], arr[b]]