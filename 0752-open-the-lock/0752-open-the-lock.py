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

class Solution:
  def openLock(self, deadends: List[str], target: str) -> int:
    def dist(a, b):
      return abs(a[0] + b[0]) + abs(a[1] + b[1]) + abs(a[2] + b[2]) + abs(a[3] + b[3])
    
    target = tuple([int(d) for d in target])

    visited = set()
    for deadend in deadends:
      visited.add(tuple([int(d) for d in deadend]))

    queue = []
    heapq.heappush(queue, (0, (0,0,0,0), 0))

    while queue:
      cost, point, step = heapq.heappop(queue)
      if point == target:
        return step
      if point not in visited:
        visited.add(point)
        step += 1
        
        _point = (abs((point[0] + 1) % 10), point[1], point[2], point[3])
        heapq.heappush(queue, (step * dist(point, _point), _point, step))
        _point = (abs((point[0] - 1) % 10), point[1], point[2], point[3])
        heapq.heappush(queue, (step * dist(point, _point), _point, step))

        _point = (point[0], abs((point[1] + 1) % 10), point[2], point[3])
        heapq.heappush(queue, (step * dist(point, _point), _point, step))
        _point = (point[0], abs((point[1] - 1) % 10), point[2], point[3])
        heapq.heappush(queue, (step * dist(point, _point), _point, step))

        _point = (point[0], point[1], abs((point[2] + 1) % 10), point[3])
        heapq.heappush(queue, (step * dist(point, _point), _point, step))
        _point = (point[0], point[1], abs((point[2] - 1) % 10), point[3])
        heapq.heappush(queue, (step * dist(point, _point), _point, step))

        _point = (point[0], point[1], point[2], abs((point[3] + 1) % 10))
        heapq.heappush(queue, (step * dist(point, _point), _point, step))
        _point = (point[0], point[1], point[2], abs((point[3] - 1) % 10))
        heapq.heappush(queue, (step * dist(point, _point), _point, step))
    return -1