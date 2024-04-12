class ListNode:
  def __init__(self, key: int, val: int):
    self.key = key
    self.val = val
    self.next = None
    self.prev = None

class LRUCache:
  def __init__(self, capacity: int):
    self.head = None
    self.tail = None
    self.capacity = capacity
    self.map = {}

  def cut(self, node: ListNode) -> None:
    if node.prev:
      node.prev.next = node.next
    if node.next:
      node.next.prev = node.prev
    if node == self.head:
      self.head = node.next
    if node == self.tail:
      self.tail = node.prev
    node.next = None
    node.prev = None

  def add(self, node: ListNode) -> None:
    node.next = self.head
    if self.head:
      self.head.prev = node
    self.head = node
    if not self.tail:
      self.tail = node

  def promote(self, node: ListNode) -> None:
    if node.prev:
      self.cut(node)
      self.add(node)

  def get(self, key: int) -> int:
    if key in self.map:
      self.promote(self.map[key])
      return self.map[key].val
    return -1

  def put(self, key: int, val: int) -> None:
    if key in self.map:
      self.map[key].val = val
      self.promote(self.map[key])
    else:
      self.map[key] = ListNode(key, val)
      self.add(self.map[key])
      if self.capacity:
        self.capacity -= 1
      else:
        del self.map[self.tail.key]
        self.cut(self.tail)
          


