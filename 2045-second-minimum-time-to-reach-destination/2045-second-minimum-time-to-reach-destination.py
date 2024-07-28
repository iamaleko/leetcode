class Solution:
  def secondMinimum(self, n: int, edges: List[List[int]], time: int, change: int) -> int:
    # build bidirectional graph
    graph = {}
    for a, b in edges:
      if a not in graph:
        graph[a] = set()
      if b not in graph:
        graph[b] = set()
      graph[a].add(b)
      graph[b].add(a)
    
    # find shortest path
    back = {}
    count = 0
    q = deque([(1, 0)])
    while q:
      a_node, dist = q.popleft()
      for b_node in graph[a_node]:
        if b_node not in back:
            back[b_node] = []
        if len(back[b_node]) < 2 or back[b_node][-1][1] - back[b_node][0][1] == 0:  
          q.append((b_node, dist + 1))
          back[b_node].append((a_node, dist + 1))
          if b_node == n and not (len(back[b_node]) < 2 or back[b_node][-1][1] - back[b_node][0][1] == 0):
            q.clear()

    # find minimum extention
    extention = 2
    q = deque([n])
    while q:
      node = q.popleft()
      nodes = back[node]
      if nodes[0][0] != 1: # add fastets node
        q.append(nodes[0][0])
      if len(nodes) >= 2:
        if nodes[-1][1] - nodes[0][1]:
          if extention > nodes[-1][1] - nodes[0][1]:
            extention = nodes[-1][1] - nodes[0][1]
            if extention == 1:
              q.clear()
        else:
          for i in range(1, len(nodes)):
            if nodes[i][0] != 1: # add similar slower nodes
              q.append(nodes[-1][0])

    # calculate time
    ans = 0
    for i in range(back[n][0][1] + extention):
      if (ans // change) % 2:
        ans += (change - (ans % change))
      ans += time

    return ans

      
        