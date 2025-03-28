class Solution:
  def maxPoints(self, grid: List[List[int]], queries: List[int]) -> List[int]:
    X, Y = len(grid[0])-1, len(grid)-1
    levels = sorted(list(set(queries)))
    count = 0
    heap = [(grid[0][0], 0, 0)]
    grid[0][0] = 0
    cached = {}
    for level in levels:
      while heap:
        val, y, x = heap[0]
        if val >= level:
          break
        else:
          heappop(heap)
          count += 1
          if y > 0 and grid[y-1][x]:
            heappush(heap, (grid[y-1][x],y-1,x))
            grid[y-1][x] = 0
          if y < Y and grid[y+1][x]:
            heappush(heap, (grid[y+1][x],y+1,x))
            grid[y+1][x] = 0
          if x > 0 and grid[y][x-1]:
            heappush(heap, (grid[y][x-1],y,x-1))
            grid[y][x-1] = 0
          if x < X and grid[y][x+1]:
            heappush(heap, (grid[y][x+1],y,x+1))
            grid[y][x+1] = 0
      cached[level] = count
    return [cached[level] for level in queries]

        