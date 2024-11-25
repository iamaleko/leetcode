class Solution:
  graph = None

  def generate(self, board, graph = {}):
    graph[board] = []
    a,b,c,d,e,f = board
    if   a == 0: graph[board].extend([(b,a,c,d,e,f), (d,b,c,a,e,f)])                # a(b,d)
    elif b == 0: graph[board].extend([(b,a,c,d,e,f), (a,c,b,d,e,f), (a,e,c,d,b,f)]) # b(a,c,e)
    elif c == 0: graph[board].extend([(a,c,b,d,e,f), (a,b,f,d,e,c)])                # c(b,f)
    elif d == 0: graph[board].extend([(d,b,c,a,e,f), (a,b,c,e,d,f)])                # d(a,e)
    elif e == 0: graph[board].extend([(a,b,c,e,d,f), (a,b,c,d,f,e), (a,e,c,d,b,f)]) # e(d,f,b)
    elif f == 0: graph[board].extend([(a,b,c,d,f,e), (a,b,f,d,e,c)])                # f(e,c)
    for node in graph[board]:
      if node not in graph:
        self.generate(node, graph)
    return graph

  def slidingPuzzle(self, board: List[List[int]]) -> int:
    # build graph
    if not self.graph:
      self.graph = self.generate(t := (1,2,3,4,5,0))
    # bfs
    board = (board[0][0], board[0][1], board[0][2], board[1][0], board[1][1], board[1][2])
    if board in self.graph:
      q = deque([[board, 0]])
      v = set([board])
      while q:
        board, steps = q.popleft()
        if board == t:
          return steps
        steps += 1
        for node in self.graph[board]:
          if node not in v:
            q.append([node, steps])
    return -1