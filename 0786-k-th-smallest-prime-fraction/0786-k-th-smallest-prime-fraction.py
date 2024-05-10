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
    for b, n in enumerate(arr):
      heappush(h, (1 / n, 0, b))
    while k:
      _, a, b = heappop(h)
      k -= 1
      if not k:
        return [arr[a], arr[b]]
      if a < b - 1:
        heappush(h, (arr[a + 1] / arr[b], a + 1, b))

      

    