class Solution:
  def mergeArrays(self, a: List[List[int]], b: List[List[int]]) -> List[List[int]]:
    ans = []
    i, j = 0, 0
    n, m = len(a), len(b)
    while i < n or j < m:
      if i < n and (j == m or a[i][0] < b[j][0]):
        ans.append(a[i])
        i += 1
      elif j < m and (i == n or a[i][0] > b[j][0]):
        ans.append(b[j])
        j += 1
      elif i < n and j < m:
        ans.append([a[i][0], a[i][1] + b[j][1]])
        i += 1
        j += 1
    return ans
        