class Solution:
  def sumOfDistancesInTree(self, n: int, edges: List[List[int]]) -> List[int]:
    # build graph
    tree = defaultdict(set)
    for a, b in edges:
      tree[a].add(b)
      tree[b].add(a)

    # detect root in graph
    root = 0
    size = 0
    for val in tree:
      if size < len(tree[val]):
        root = val
        size = len(tree[val])

    # build tree from detected root
    children = [set() for _ in range(n)]
    parents = [None for _ in range(n)]
    q = deque([root])
    while q:
      i = q.popleft()
      for val in tree[i]:
        children[i].add(val)
        parents[val] = i
        tree[val].remove(i)
        q.append(val)

    # calc answer and nodes count from leaves to root
    q.clear()
    for i in range(len(children)):
      if not len(children[i]):
        q.append(i)
    ans = [0 for _ in range(n)]
    nodes = [0 for _ in range(n)]
    visited = [0 for _ in range(n)]
    while q:
      i = q.popleft()
      nodes[i] += 1
      if i != root:
        parent = parents[i]
        visited[parent] += 1
        ans[parent] += ans[i] + nodes[i]
        nodes[parent] += nodes[i]
        if visited[parent] == len(children[parent]):
          q.append(parent)

    # reroot, calc other nodes from root to leaves
    q.clear()
    for child in children[root]:
      q.append(child)
    while q:
      i = q.popleft()
      inds = nodes[i]
      ians = ans[i]
      pnds = nodes[root]
      pans = ans[parents[i]]
      ans[i] += (pans - (ans[i] + nodes[i])) + (pnds - inds)
      for child in children[i]:
        q.append(child)
    
    return ans