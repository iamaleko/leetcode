class Solution:
  def minTimeToReach(self, moveTime: List[List[int]]) -> int:
    mx, my = len(moveTime[0])-1, len(moveTime)-1
    v = [[inf] * (mx + 1) for _ in range(my + 1)]
    h = [(0, 0, 0, 0)]
    v[0][0] = 0
    while h:
      c, y, x, t = heappop(h)
      if y == my and x == mx:
        return c
      for y, x in [(y-1,x),(y+1,x),(y,x-1),(y,x+1)]:
        if 0 <= y <= my and 0 <= x <= mx and v[y][x] > (nc := (c + 1 + t + max(0, moveTime[y][x] - c))):
          v[y][x] = nc
          heappush(h, (nc, y, x, t ^ 1))
    return -1

        