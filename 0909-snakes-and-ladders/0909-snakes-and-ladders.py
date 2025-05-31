class Solution:
  def convert(self, i, n):
    y = math.ceil(i / n)
    x = i - n * (y - 1) - 1
    return n - y, x if y & 1 else n - x - 1

  def snakesAndLadders(self, board: List[List[int]]) -> int:
    n = len(board)
    end = n * n
    cost = [-1] * (end + 1)
    cost[1] = 0
    q = deque([1])
    while q:
      i = q.popleft()
      c = cost[i] + 1
      for i in range(i + 1, min(i + 6, end) + 1):
        y, x = self.convert(i, n)    
        if board[y][x] > 0:
          i = board[y][x]
          y, x = self.convert(i, n)
        if cost[i] == -1 or cost[i] > c:
          cost[i] = c
          q.append(i)
    return cost[end]

        