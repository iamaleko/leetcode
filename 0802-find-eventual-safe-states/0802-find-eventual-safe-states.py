class Solution:
  def eventualSafeNodes(self, graph: List[List[int]]) -> List[int]:
    terminal = set()
    rev = defaultdict(set)
    for node, neighbors in enumerate(graph):
      if len(neighbors):
        for neighbor in neighbors:
          rev[neighbor].add(node)
      else:
        terminal.add(node)
    ans = terminal.copy()
    while terminal:
      safe = set()
      for node in terminal:
        for innode in rev[node]:
          for outnode in graph[innode]:
            if outnode not in ans:
              break
          else:
            ans.add(innode)
            safe.add(innode)
      terminal = safe
    return sorted(list(ans))

        