class Node:
  def __init__(self, hash, key, val, next = None):
    self.hash = hash
    self.key = key
    self.val = val
    self.next = next

class MyHashMap:
  def __init__(self):
    self.capacity = 1 << 4
    self.load_factor = 0.75
    self.list = [None] * self.capacity
    self.size = 0

  def hash(self, key) -> int:
    key = str(key)
    return hash(key)

  def index(self, hash: int) -> int:
    return hash & (self.capacity - 1)

  def put(self, key: int, val: int) -> None:
    hash = self.hash(key)
    index = self.index(hash)
    # update existent node
    node = self.list[index]
    while node:
      if node.key == key:
        node.val = val
        return
      node = node.next
    # or add new node
    self.list[index] = Node(hash, key, val, self.list[index])
    # and resize if needed
    self.size += 1
    if self.size / self.capacity > self.load_factor:
      self.resize()

  def get(self, key: int) -> int:
    index = self.index(self.hash(key))
    # find node
    node = self.list[index]
    while node:
      if node.key == key:
        return node.val
      node = node.next
    # node not found
    return -1

  def remove(self, key: int) -> None:
    index = self.index(self.hash(key))
    # find node
    node = self.list[index]
    last = None
    while node:
      if node.key == key:
        if last:
          last.next = node.next
        else:
          self.list[index] = node.next
        self.size -= 1
        return
      last = node
      node = node.next

  def resize(self) -> None:
    self.capacity <<= 1
    list = [None] * self.capacity
    for node in self.list:
      while node:
        index = self.index(node.hash)
        next = node.next
        node.next = list[index]
        list[index] = node
        node = next
    self.list = list