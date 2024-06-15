class Solution:
  def findMaximizedCapital(self, k: int, w: int, profits: List[int], capital: List[int]) -> int:
    projects = []
    for i in range(len(capital)):
      projects.append((profits[i], capital[i]))

    projects.sort(key = lambda x: (-x[0], x[1]))
    
    p = 0
    while k and projects:
      if projects[p][1] > w:
        p += 1
        if p == len(projects):
          return w
      else:
        w += projects[p][0]
        projects.pop(p)
        k -= 1
        p = 0

    return w
