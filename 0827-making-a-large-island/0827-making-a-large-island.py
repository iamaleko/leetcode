class Solution:
  def exploreIsland(self, y: int, x: int):
    for a, b in [(y-1, x), (y+1, x), (y, x-1), (y, x+1)]:
      if a > -1 and a < self.n and b > -1 and b < self.n and self.grid[a][b] == 1:
        self.grid[a][b] = self.grid[y][x]
        self.sizes[self.grid[y][x]] += 1
        self.exploreIsland(a, b)

  def largestIsland(self, grid: List[List[int]]) -> int:
    self.grid = grid
    island, blank, ans = 2, 0, 0
    self.n = len(grid)
    self.sizes = [0] * (self.n ** 2 + 2)

    # find islands
    for y in range(self.n):
      for x in range(self.n):
        if grid[y][x] == 0:
          blank = 1
        elif grid[y][x] == 1:
          grid[y][x] = island
          self.sizes[island] += 1
          self.exploreIsland(y, x)
          if self.sizes[island] > ans: ans = self.sizes[island]
          island += 1

    # check connections
    if blank:
      ans += 1
      for y in range(self.n):
        for x in range(self.n):
          if grid[y][x] == 0:
            size, added = 1, set()
            for a, b in [(y-1, x), (y+1, x), (y, x-1), (y, x+1)]:
              if a > -1 and a < self.n and b > -1 and b < self.n and grid[a][b] and grid[a][b] not in added:
                size += self.sizes[grid[a][b]]
                added.add(grid[a][b])
            if size > ans: ans = size
    return ans