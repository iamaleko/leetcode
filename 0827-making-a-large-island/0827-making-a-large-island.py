class Solution:
  def exploreIsland(self, y: int, x: int):
    for a, b in [(y-1, x), (y+1, x), (y, x-1), (y, x+1)]:
      if a >= 0 and a <= self.my and b >= 0 and b <= self.mx and self.grid[a][b] == 1:
        self.grid[a][b] = self.grid[y][x]
        self.sizes[self.grid[y][x]] += 1
        self.exploreIsland(a, b)

  def largestIsland(self, grid: List[List[int]]) -> int:
    self.grid = grid
    self.sizes = defaultdict(int)
    island, blank, ans = 2, 0, 0
    self.my, self.mx = len(grid)-1, len(grid[0])-1

    # find islands
    for y in range(self.my+1):
      for x in range(self.mx+1):
        if grid[y][x] == 0:
          blank = 1
        elif grid[y][x] == 1:
          grid[y][x] = island
          self.sizes[island] += 1
          self.exploreIsland(y, x)

          # size = 1
          # grid[y][x] = island
          # q = deque([(y, x)])
          # while q:
          #   c, d = q.pop()
          #   for a, b in [(c-1, d), (c+1, d), (c, d-1), (c,d+1)]:
          #     if a >= 0 and a <= my and b >= 0 and b <= mx and grid[a][b] == 1:
          #       size += 1
          #       grid[a][b] = island
          #       q.append((a, b))
          # sizes[island] = size
          if self.sizes[island] > ans: ans = self.sizes[island]
          island += 1

    # check connections
    if blank:
      ans += 1
      for y in range(self.my+1):
        for x in range(self.mx+1):
          if grid[y][x] == 0:
            size, added = 1, set()
            for a, b in [(y-1, x), (y+1, x), (y, x-1), (y, x+1)]:
              if a >= 0 and a <= self.my and b >= 0 and b <= self.mx and grid[a][b] and grid[a][b] not in added:
                size += self.sizes[grid[a][b]]
                added.add(grid[a][b])
            if size > ans: ans = size
    return ans