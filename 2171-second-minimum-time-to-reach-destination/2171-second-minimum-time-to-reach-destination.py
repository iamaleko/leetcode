class Solution:
  def secondMinimum(self, n: int, edges: List[List[int]], time: int, change: int) -> int:
    debug = 0

    # build bidirectional graph
    graph = {}
    for a, b in edges:
      if a not in graph:
        graph[a] = set()
      if b not in graph:
        graph[b] = set()
      graph[a].add(b)
      graph[b].add(a)
    # if debug: print('graph', graph)
    
    # find shortest path
    back = {}
    count = 0
    q = deque([(1, 0)])
    while q:
      a_node, dist = q.popleft()
      dist += 1
      for b_node in graph[a_node]:
        if b_node not in back:
            back[b_node] = []
        if len(back[b_node]) < 2 or back[b_node][-1][1] - back[b_node][-2][1] == 0:  
          q.append((b_node, dist))
          back[b_node].append((a_node, dist))
          if b_node == n and not (len(back[b_node]) < 2 or back[b_node][-1][1] - back[b_node][-2][1] == 0):
            q.clear()
    # if debug: print('back', back)

    best = back[n][0][1]
    extention = 2
    q = deque([n])
    while q:
      node = q.popleft()
      nodes = back[node]
      if debug: print(node, nodes)
      if nodes[0][0] != 1:
        q.append(nodes[0][0])
      if len(nodes) >= 2:
        if nodes[-1][1] - nodes[-2][1]:
          if extention > nodes[-1][1] - nodes[-2][1]:
            extention = nodes[-1][1] - nodes[-2][1]
            if extention == 1:
              q.clear()
        elif nodes[-1][0] != 1:
          q.append(nodes[-1][0])
    if debug: print(best, extention)

    # calculate time
    ans = 0
    for i in range(best + extention):
      if (ans // change) % 2:
        if debug: print('wait', change - ans % change, ans)
        ans += (change - (ans % change))
      ans += time
      if debug: print('drive', time, ans)

    return ans

      
        