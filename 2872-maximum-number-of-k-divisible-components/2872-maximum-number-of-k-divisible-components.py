class Solution:
  def maxKDivisibleComponents(self, n: int, edges: List[List[int]], values: List[int], k: int) -> int:
    # build graph
    graph = defaultdict(set)
    for a, b in edges:
      graph[a].add(b)
      graph[b].add(a)


    # find leafs
    ans = 0
    leafs = []
    for i in range(n):
      if i not in graph:
        ans += 1
      elif len(graph[i]) == 1:
        leafs.append(i)

    # trim
    while leafs:
      i = leafs.pop()
      p = next(iter(graph[i]))
      # disconnect leaf
      graph[p].remove(i)
      del graph[i]
      # cut or merge
      if values[i] % k == 0:
        ans += 1
      else:
        values[p] += values[i]
      # check new leaf
      if len(graph[p]) == 1:
        leafs.append(p)
      elif len(graph[p]) == 0:
        ans += 1
        break
    return ans
        


    



        