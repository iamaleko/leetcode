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
    start = (0,0,0,0)
    end = tuple([int(d) for d in target])

    costs = {}
    for deadend in deadends:
      costs[tuple([int(d) for d in deadend])] = (-1,-1)

    queue = []
    if start not in costs:
      heapq.heappush(queue, (0, start, 0))
      costs[start] = (0,0)

    def cost(a, b, s):
      return s + math.sqrt((a[0] + b[0]) ** 2 + (a[1] + b[1]) ** 2 + (a[2] + b[2]) ** 2 + (a[3] + b[3]) ** 2)

    while queue:
      _, point, step = heapq.heappop(queue)
      step += 1
      
      _points = [
        (abs((point[0] + 1) % 10), point[1], point[2], point[3]),
        (abs((point[0] - 1) % 10), point[1], point[2], point[3]),
        (point[0], abs((point[1] + 1) % 10), point[2], point[3]),
        (point[0], abs((point[1] - 1) % 10), point[2], point[3]),
        (point[0], point[1], abs((point[2] + 1) % 10), point[3]),
        (point[0], point[1], abs((point[2] - 1) % 10), point[3]),
        (point[0], point[1], point[2], abs((point[3] + 1) % 10)),
        (point[0], point[1], point[2], abs((point[3] - 1) % 10))
      ]
      for _point in _points:
        _cost = cost(point, _point, step)
        if (_point not in costs) or (_cost < costs[_point][0]):
          costs[_point] = (_cost, step)
          heapq.heappush(queue, (_cost, _point, step))

    return costs[end][1] if end in costs else -1