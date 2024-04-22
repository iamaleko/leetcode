# BFS
class Solution:
  def openLock(self, deadends: List[str], target: str) -> int:
    target = tuple([int(d) for d in target])

    visited = set()
    for deadend in deadends:
      visited.add(tuple([int(d) for d in deadend]))

    queue = deque()
    if (0,0,0,0) not in visited:
      queue.append(((0,0,0,0), 0))
      visited.add((0,0,0,0))

    while queue:
      point, step = queue.popleft()
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
          visited.add(_point)
          queue.append((_point, step))

    return -1

# A*
# class Solution:
#   def openLock(self, deadends: List[str], target: str) -> int:
#     target = tuple([int(d) for d in target])

#     visited = set()
#     for deadend in deadends:
#       visited.add(tuple([int(d) for d in deadend]))

#     queue = []
#     if (0,0,0,0) not in visited:
#       heapq.heappush(queue, (0, (0,0,0,0), 0))
#       visited.add((0,0,0,0))

#     while queue:
#       _, point, step = heapq.heappop(queue)
#       if point == target:
#         return step
#       step += 1
#       points = [
#         (abs((point[0] + 1) % 10), point[1], point[2], point[3]),
#         (abs((point[0] - 1) % 10), point[1], point[2], point[3]),
#         (point[0], abs((point[1] + 1) % 10), point[2], point[3]),
#         (point[0], abs((point[1] - 1) % 10), point[2], point[3]),
#         (point[0], point[1], abs((point[2] + 1) % 10), point[3]),
#         (point[0], point[1], abs((point[2] - 1) % 10), point[3]),
#         (point[0], point[1], point[2], abs((point[3] + 1) % 10)),
#         (point[0], point[1], point[2], abs((point[3] - 1) % 10))
#       ]
#       for _point in points:
#         if _point not in visited:
#           cost = step
#           for i in range(4):
#             cost += min(abs(_point[i] - target[i]), 10 - abs(target[i] - _point[i]))
#           visited.add(_point)
#           heapq.heappush(queue, (cost, _point, step))

#     return -1