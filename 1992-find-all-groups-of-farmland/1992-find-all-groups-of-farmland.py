class Solution:
  def findFarmland(self, land: List[List[int]]) -> List[List[int]]:
    FARM = 1
    VISITED_FARM = 2

    res = []
    w = len(land[0])
    h = len(land)
    
    for _y in range(h):
      for _x in range(w):
        if land[_y][_x] == FARM:
          minx = w
          maxx = -1
          miny = h
          maxy = -1

          queue = deque([(_y, _x)])
          while queue:
            y, x = queue.pop()
            if minx > x: minx = x
            if maxx < x: maxx = x
            if miny > y: miny = y
            if maxy < y: maxy = y
            land[y][x] = VISITED_FARM
            if x > 0 and land[y][x - 1] == FARM: queue.append((y, x - 1))
            if x < w - 1 and land[y][x + 1] == FARM: queue.append((y, x + 1))
            if y > 0 and land[y - 1][x] == FARM: queue.append((y - 1, x))
            if y < h - 1 and land[y + 1][x] == FARM: queue.append((y + 1, x))
          res.append([miny, minx, maxy, maxx])
      
    return res
        