class Solution:
  def findMaximizedCapital(self, k: int, w: int, profits: List[int], capital: List[int]) -> int:
    projects = list(zip(profits, capital))
    projects.sort(key = lambda x: (-x[0], x[1]))
    
    p = 0
    n = len(projects)
    while k and n:
      while p < n and projects[p][1] > w:
        p += 1
      if p < n:
        w += projects[p][0]
        projects.pop(p)
        k -= 1
        n -= 1
        p = 0
      else:
        return w

    return w
