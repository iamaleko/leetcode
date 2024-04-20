# class Solution:
#   def findFarmland(self, land: List[List[int]]) -> List[List[int]]:
#     FARM = 1
#     VISITED_FARM = 2

#     res = []
#     w = len(land[0])
#     h = len(land)
    
#     for _y in range(h):
#       for _x in range(w):
#         if land[_y][_x] == FARM:
#           minx = w
#           maxx = -1
#           miny = h
#           maxy = -1

#           queue = deque([(_y, _x)])
#           while queue:
#             y, x = queue.pop()
#             if minx > x: minx = x
#             if maxx < x: maxx = x
#             if miny > y: miny = y
#             if maxy < y: maxy = y
#             land[y][x] = VISITED_FARM
#             if x > 0 and land[y][x - 1] == FARM: queue.append((y, x - 1))
#             if x < w - 1 and land[y][x + 1] == FARM: queue.append((y, x + 1))
#             if y > 0 and land[y - 1][x] == FARM: queue.append((y - 1, x))
#             if y < h - 1 and land[y + 1][x] == FARM: queue.append((y + 1, x))
#           res.append([miny, minx, maxy, maxx])
      
#     return res

class Solution:
  def findFarmland(self, land: List[List[int]]) -> List[List[int]]:
    res = []
    w = len(land[0])
    h = len(land)
    
    for y in range(h):
      for x in range(w):
        # find top left corner
        if land[y][x] == 1 and (not y or not land[y - 1][x]) and (not x or not land[y][x - 1]):
          # find top right corner
          sx = x
          while sx < w - 1 and land[y][sx + 1] == 1: sx += 1
          # find bottom right corner
          sy = y
          while sy < h - 1 and land[sy + 1][x] == 1: sy += 1
          # save square
          res.append([y,x,sy,sx])
      
    return res
        