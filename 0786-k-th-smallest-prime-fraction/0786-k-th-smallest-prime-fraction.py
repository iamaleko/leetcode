class Solution:
  def kthSmallestPrimeFraction(self, arr: List[int], k: int) -> List[int]:
    ls = []
    for i in range(len(arr) - 1, -1, -1):
      for j in range(i):
        ls.append(([arr[j],arr[i]],arr[j]/arr[i]))
    ls.sort(key = lambda x: x[1])
    return ls[k - 1][0]