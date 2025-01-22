class Solution:
  def highestPeak(self, m: List[List[int]]) -> List[List[int]]:
    my = len(m) - 1
    mx = len(m[0]) - 1
    
    def neighbors(y, x, f):
      ans = []
      for y, x in [(y - 1, x), (y + 1, x), (y, x - 1), (y, x + 1)]:
        if mx >= x >= 0 and my >= y >= 0:
          ans.append(f(y, x))
      return ans

    for y in range(my + 1):
      for x in range(mx + 1):
        m[y][x] = 0 if m[y][x] == 1 else None

    s = set()
    for y in range(my + 1):
      for x in range(mx + 1):
        if m[y][x] == None and True in neighbors(y, x, lambda y, x: m[y][x] != None):
          s.add((y, x))

    while s:
      ns = set()
      def process(y, x):
        if m[y][x] == None:
          ns.add((y, x))
          return inf
        else:
          return m[y][x]
      for y, x in s:
        m[y][x] = min(neighbors(y, x, process)) + 1
      s = ns
      
    return m
        