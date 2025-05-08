class Solution:
  def minTimeToReach(self, moveTime: List[List[int]]) -> int:
    mx, my = len(moveTime[0])-1, len(moveTime)-1
    h = [(0, 0, 0, 0)]
    moveTime[0][0] = -1
    while h:
      c, y, x, t = heappop(h)
      if y == my and x == mx:
        return c
      for y, x in [(y-1,x),(y+1,x),(y,x-1),(y,x+1)]:
        if 0 <= y <= my and 0 <= x <= mx and moveTime[y][x] != -1:
          heappush(h, (c + 1 + t + max(0, moveTime[y][x] - c), y, x, t ^ 1))
          moveTime[y][x] = -1
    return -1

        