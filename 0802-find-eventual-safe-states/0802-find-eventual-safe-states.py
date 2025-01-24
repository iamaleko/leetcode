class Solution:
  def eventualSafeNodes(self, graph: List[List[int]]) -> List[int]:
    terminal = deque()
    rev = defaultdict(set)
    for node, outnodes in enumerate(graph):
      if len(outnodes):
        for outnode in outnodes:
          rev[outnode].add(node)
      else:
        terminal.append(node)
    ans = set(terminal)
    while terminal:
      node = terminal.popleft()
      for innode in rev[node]:
        for outnode in graph[innode]:
          if outnode not in ans:
            break
        else:
          if innode not in ans:
            ans.add(innode)
            terminal.append(innode)
    return sorted(list(ans))
        