class Solution:
  def findCenter(self, edges: List[List[int]]) -> int:
    count = defaultdict(int)
    center = None
    occurences = 0
    for l, r in edges:
      count[l] += 1
      count[r] += 1
      if count[l] > occurences:
        occurences = count[l]
        center = l
      if count[r] > occurences:
        occurences = count[r]
        center = r
    return center
        