class Solution:
  def maximumSafenessFactor(self, grid: List[List[int]]) -> int:
    my = len(grid) - 1
    mx = len(grid[0]) - 1
    thiefs = []

    for y in range(my + 1):
      for x in range(mx + 1):
        if grid[y][x]:
          thiefs.append((y, x))
    
    q = deque()
    v = set()
    for y in range(my + 1):
      for x in range(mx + 1):
        if grid[y][x]:
          q.append((y,x,0))
          v.add((y,x))
    while q:
      y, x, d = q.popleft()
      grid[y][x] = d
      for y, x in [(y,x-1), (y,x+1), (y-1,x), (y+1,x)]:
        if x >= 0 and y >= 0 and x <= mx and y <= my and (y,x) not in v:
          q.append((y,x,d + 1))
          v.add((y,x))

    msf = { (0,0): grid[0][0] }
    h = [(0, 0, 0)]
    while h:
      _, y, x = heappop(h)
      sf = msf[(y,x)]
      for y, x in [(y,x-1), (y,x+1), (y-1,x), (y+1,x)]:
        if x >= 0 and y >= 0 and x <= mx and y <= my and (
          (y,x) not in msf or msf[(y,x)] < min(sf, grid[y][x])
        ):
          msf[(y,x)] = min(sf, grid[y][x])
          if x == mx and y == my:
            return msf[(y,x)]
          heappush(h, (-msf[(y,x)], y, x))

    return msf[(my,mx)]
        