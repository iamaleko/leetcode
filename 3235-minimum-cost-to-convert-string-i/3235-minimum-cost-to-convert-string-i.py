# solve it, but approach is very slow
class Solution:
  def minimumCost(self, source: str, target: str, original: List[str], changed: List[str], cost: List[int]) -> int:
    graph = {}
    for i in range(len(cost)):
      if original[i] not in graph:
        graph[original[i]] = {}
      if changed[i] not in graph[original[i]] or cost[i] < graph[original[i]][changed[i]]:
        graph[original[i]][changed[i]] = cost[i]

    total_cost = 0
    mem = {}
    for i in range(len(target)):
      if source[i] != target[i]:
        if (source[i], target[i]) not in mem:
          ch_cost = math.inf
          visited = {}
          h = [(0, source[i])]
          while h:
            running_cost, from_ch = heappop(h)
            if from_ch in graph:
              for to_ch in graph[from_ch].keys():
                new_running_cost = running_cost + graph[from_ch][to_ch]
                if to_ch == target[i] and ch_cost > new_running_cost:
                  ch_cost = new_running_cost
                if to_ch not in visited or visited[to_ch] > new_running_cost:
                  visited[to_ch] = new_running_cost
                  heappush(h, (new_running_cost, to_ch))
          if ch_cost == math.inf:
            return -1
          mem[(source[i], target[i])] = ch_cost
        total_cost += mem[(source[i], target[i])]

    return total_cost
        