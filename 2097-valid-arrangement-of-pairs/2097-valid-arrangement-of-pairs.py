class Node:
  next = None
  prev = None
  l = None
  r = None
  def __init__(self, l: int, r: int):
    self.l = l
    self.r = r

class Solution:
  ltr: Dict | None = None
  rtl: Dict | None = None

  def buildGraph(self, pairs: List[List[int]]) -> None:
    self.ltr = {}
    self.rtl = {}
    for l, r in pairs:
      if l in self.ltr:
        self.ltr[l].add(r)
      else:
        self.ltr[l] = set([r])
      if r in self.rtl:
        self.rtl[r].add(l)
      else:
        self.rtl[r] = set([l])

  def defineStartingNode(self, pairs: List[List[int]]) -> Node:
    # node with more incoming edges than outgoing
    for l, r in pairs:
      if len(self.ltr[l]) > (len(self.rtl[l]) if l in self.rtl else 0):
        return self.buildNode(l, r)
    return self.buildNode(pairs[0][0], pairs[0][1])

  def buildNode(self, l: int, r: int) -> Node:
    self.ltr[l].remove(r)
    if not len(self.ltr[l]):
      del self.ltr[l]
    self.rtl[r].remove(l)
    if not len(self.rtl[r]):
      del self.rtl[r]
    return Node(l, r)

  def buildPath(self, node: Node) -> None:
    # build forward
    tail = node.next
    while node.r in self.ltr:
      node.next = self.buildNode(node.r, next(iter(self.ltr[node.r])))
      node.next.prev = node
      node = node.next
    node.next = tail
    
    # build center
    if node.prev:
      return self.buildPath(node.prev)

    # build backward (in case if there are multiple starting points in open graph)
    while node.l in self.rtl:
      node.prev = self.buildNode(next(iter(self.rtl[node.l])), node.l)
      node.prev.next = node
      node = node.prev
    return node

  def validArrangement(self, pairs: List[List[int]]) -> List[List[int]]:
    self.buildGraph(pairs)
    node = self.defineStartingNode(pairs)
    node = self.buildPath(node)

    # build answer
    ans = []
    while node:
      ans.append([node.l, node.r])
      node = node.next
    return ans