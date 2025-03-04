# TLE 6/41
# class Solution:
#   def minimumTime(self, grid: List[List[int]]) -> int:
#     my = len(grid) - 1
#     mx = len(grid[0]) - 1

#     min_time_grid = [[0] * (mx + 1) for _ in range(my + 1)]
#     neighbor_grid = [[0] * (mx + 1) for _ in range(my + 1)]
#     for y in range(my + 1):
#       for x in range(mx + 1):
#         min_time_grid[y][x] = grid[y][x]

#     queue = deque([(0, 0, 0)])
#     while queue:
#       y, x, t = queue.popleft()
#       if y == my and x == mx:
#         return t
#       t += 1
#       if y > 0 and min_time_grid[y - 1][x] <= t:
#         min_time_grid[y - 1][x] = t + 1
#         queue.append((y - 1, x, t))
#       if y < my and min_time_grid[y + 1][x] <= t:
#         min_time_grid[y + 1][x] = t + 1
#         queue.append((y + 1, x, t))
#       if x > 0 and min_time_grid[y][x - 1] <= t:
#         min_time_grid[y][x - 1] = t + 1
#         queue.append((y, x - 1, t))
#       if x < mx and min_time_grid[y][x + 1] <= t:
#         min_time_grid[y][x + 1] = t + 1
#         queue.append((y, x + 1, t))

#     return -1

# FAILED
# class Solution:
#   def minimumTime(self, grid: List[List[int]]) -> int:
#     my = len(grid) - 1
#     mx = len(grid[0]) - 1

#     # unable to move from cell to cell
#     if grid[0][0] < min(grid[1][0], grid[0][1]) - 1:
#       return -1

#     # flood fill
#     queue = deque([(0, 0, 0)])
#     visited = set([(0, 0)])
#     lowest = set()
#     border = set()
#     while queue:
#       print(queue)

#       # perform flood fill
#       while queue:
#         y, x, t = queue.popleft()
#         print((y,x,t))
#         if y == my and x == mx:
#           print(grid)
#           return t
#         grid[y][x] = t
#         if (y, x) in border:
#           border.remove((y, x))
#         t += 1
#         for ny, nx in [(y - 1, x), (y + 1, x), (y, x - 1), (y, x + 1)]:
#           if ny < 0 or nx < 0 or ny > my or nx > mx or (ny, nx) in visited:
#             continue
#           if grid[ny][nx] <= t:
#             visited.add((ny, nx))
#             queue.append((ny, nx, t))
#           else:
#             border.add((ny, nx))
      
#       print(grid)
#       print(visited, border)

#       # find lowest places in the border
#       min_t = math.inf
#       for y, x in border:
#         for ny, nx in [(y - 1, x), (y + 1, x), (y, x - 1), (y, x + 1)]:
#           if (ny, nx) in visited and (new_t := grid[y][x] + (abs(grid[ny][nx] - grid[y][x]) & 1 ^ 1)) <= min_t:
#             if new_t != min_t:
#               queue.clear()
#               lowest.clear()
#               min_t = new_t
#             if (ny, nx) not in lowest:
#               lowest.add((ny, nx))
#               queue.append((ny, nx, grid[ny][nx] + abs(grid[ny][nx] - grid[y][x]) // 2 * 2))
      
#       # restart queue
#       border.clear()
#       visited.clear()
#       lowest.clear()
#       for y, x, _ in queue:
#         visited.add((y, x))

#     return -1

class Solution:
  def minimumTime(self, grid: List[List[int]]) -> int:
    my = len(grid) - 1
    mx = len(grid[0]) - 1

    # unable to move from cell to cell
    if grid[0][0] < min(grid[1][0], grid[0][1]) - 1:
      return -1

    # bfs
    heap = [(0, 0, 0)]
    visited = set([(0, 0)])
    reached = [[grid[y][x] for x in range(mx + 1)] for y in range(my + 1)]
    while heap:
      t, y, x = heappop(heap)
      if y == my and x == mx:
        return t
      for ny, nx in [(y - 1, x), (y + 1, x), (y, x - 1), (y, x + 1)]:
        if ny >= 0 and nx >= 0 and ny <= my and nx <= mx:
          _t = t + 1 if t >= grid[ny][nx] else grid[ny][nx] + (abs(t - grid[ny][nx]) & 1 ^ 1)
          if (ny, nx) not in visited or reached[ny][nx] > _t:
            reached[ny][nx] = _t
            visited.add((ny, nx))
            heappush(heap, (_t, ny, nx))

    return -1