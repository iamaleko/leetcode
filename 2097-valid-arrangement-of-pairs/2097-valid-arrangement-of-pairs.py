class Node:
  next = None
  prev = None
  l = None
  r = None
  def __init__(self, l: int, r: int):
    self.l = l
    self.r = r

class Solution:
  head = None

  def removeFromGraph(self, l: int, r: int):
    if l in self.ltr:
      self.ltr[l].remove(r)
      if not len(self.ltr[l]):
        del self.ltr[l]
    if r in self.rtl:
      self.rtl[r].remove(l)
      if not len(self.rtl[r]):
        del self.rtl[r]

  def buildPath(self, node: Node) -> None:
    # build forward
    _next = node.next
    while node.r in self.ltr:
      l, r = node.r, next(iter(self.ltr[node.r]))
      self.removeFromGraph(l, r)
      successor = Node(l, r)
      node.next = successor
      successor.prev = node
      node = successor
    node.next = _next
    
    # build center
    if node.prev:
      self.buildPath(node.prev)
    else:
      # build backward
      last = node
      while node.l in self.rtl:
        l, r = next(iter(self.rtl[node.l])), node.l
        self.removeFromGraph(l, r)
        predecessor = Node(l, r)
        node.prev = predecessor
        predecessor.next = node
        node = predecessor
      if last.prev:
        self.buildPath(last.prev)

  def validArrangement(self, pairs: List[List[int]]) -> List[List[int]]:
    # build graph
    self.ltr = {}
    self.rtl = {}
    for l, r in pairs:
      if l not in self.ltr: self.ltr[l] = set()
      if r not in self.rtl: self.rtl[r] = set()
      self.ltr[l].add(r)
      self.rtl[r].add(l)
    
    # find starting point in open graph
    for l, r in pairs:
      if len(self.ltr[l]) > (len(self.rtl[l]) if l in self.rtl else 0):
        self.removeFromGraph(l, r)
        self.head = Node(l, r)
        break

    # find starting point in cyclic graph
    if not self.head:
      l,r = pairs[0]
      self.removeFromGraph(l, r)
      self.head = Node(l, r)

    # find path
    self.buildPath(self.head)

    # build answer
    ans = []
    while self.head.prev:
      self.head = self.head.prev
    while self.head:
      ans.append([self.head.l, self.head.r])
      self.head = self.head.next

    return ans

