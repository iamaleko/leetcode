# BFS
# class Solution:
#   def openLock(self, deadends: List[str], target: str) -> int:
#     target = tuple([int(d) for d in target])

#     dp = {}
#     for deadend in deadends:
#       dp[tuple([int(d) for d in deadend])] = -1

#     queue = deque([(0,0,0,0,0)])
#     while queue:
#       a,b,c,d,step = queue.popleft()
#       if (a,b,c,d) == target:
#         return step
#       if (a,b,c,d) not in dp:
#         dp[(a,b,c,d)] = step
#         step += 1
#         queue.append((abs((a + 1) % 10), b, c, d, step))
#         queue.append((abs((a - 1) % 10), b, c, d, step))
#         queue.append((a, abs((b + 1) % 10), c, d, step))
#         queue.append((a, abs((b - 1) % 10), c, d, step))
#         queue.append((a, b, abs((c + 1) % 10), d, step))
#         queue.append((a, b, abs((c - 1) % 10), d, step))
#         queue.append((a, b, c, abs((d + 1) % 10), step))
#         queue.append((a, b, c, abs((d - 1) % 10), step))
    
#     return -1

# A*
class Solution:
  def openLock(self, deadends: List[str], target: str) -> int:
    target = tuple([int(d) for d in target])

    visited = set()
    for deadend in deadends:
      visited.add(tuple([int(d) for d in deadend]))

    queue = []
    if (0,0,0,0) not in visited:
      heapq.heappush(queue, (0, (0,0,0,0), 0))
      visited.add((0,0,0,0))

    while queue:
      _, point, step = heapq.heappop(queue)
      if point == target:
        return step
      step += 1
      points = [
        (abs((point[0] + 1) % 10), point[1], point[2], point[3]),
        (abs((point[0] - 1) % 10), point[1], point[2], point[3]),
        (point[0], abs((point[1] + 1) % 10), point[2], point[3]),
        (point[0], abs((point[1] - 1) % 10), point[2], point[3]),
        (point[0], point[1], abs((point[2] + 1) % 10), point[3]),
        (point[0], point[1], abs((point[2] - 1) % 10), point[3]),
        (point[0], point[1], point[2], abs((point[3] + 1) % 10)),
        (point[0], point[1], point[2], abs((point[3] - 1) % 10))
      ]
      for _point in points:
        if _point not in visited:
          cost = step
          for i in range(4):
            cost += min(abs(_point[i] - target[i]), 10 - abs(target[i] - _point[i]))
          visited.add(_point)
          heapq.heappush(queue, (cost, _point, step))

    return -1