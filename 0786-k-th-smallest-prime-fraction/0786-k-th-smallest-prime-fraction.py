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
    h = []
    for b in range(len(arr)):
      h.append((1 / arr[b], 0, b))
    heapify(h)
    while k:
      _, a, b = heappop(h)
      if k == 1:
        return [arr[a], arr[b]]
      a += 1
      k -= 1
      if a < b:
        heappush(h, (arr[a] / arr[b], a, b))