class Solution:
  def largestIsland(self, grid: List[List[int]]) -> int:
    sizes, island, blank, ans, n = {}, 2, 0, 0, len(grid)

    # find islands
    for y in range(n):
      for x in range(n):
        if grid[y][x] == 0:
          blank = 1
        elif grid[y][x] == 1:
          size = 1
          grid[y][x] = island
          q = [(y, x)]
          while q:
            c, d = q.pop()
            for a, b in [(c-1, d), (c+1, d), (c, d-1), (c, d+1)]:
              if a > -1 and a < n and b > -1 and b < n and grid[a][b] == 1:
                size += 1
                grid[a][b] = island
                q.append((a, b))
          sizes[island] = size
          if size > ans: ans = size
          island += 1

    # check connections
    if blank:
      ans += 1
      for y in range(n):
        for x in range(n):
          if grid[y][x] == 0:
            size, added = 1, set()
            for a, b in [(y-1, x), (y+1, x), (y, x-1), (y, x+1)]:
              if a > -1 and a < n and b > -1 and b < n and grid[a][b] and grid[a][b] not in added:
                size += sizes[grid[a][b]]
                added.add(grid[a][b])
            if size > ans: ans = size

    return ans