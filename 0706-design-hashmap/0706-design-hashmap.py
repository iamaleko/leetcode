class Node:
  def __init__(self, key, val, next = None):
    self.key = key
    self.val = val
    self.next = next

class Bucket:
  def __init__(self):
    self.head = None
    self.tail = None

  def add(self, node) -> None:
    if self.tail:
      self.tail.next = node
    else:
      self.head = node
    self.tail = node

class MyHashMap:
  def __init__(self):
    self.capacity = 1 << 4
    self.load_factor = 0.75
    self.list = [Bucket() for _ in range(self.capacity)]
    self.size = 0

  def hash(self, key) -> int:
    key = str(key)
    max = (1 << 64) - 1
    hash = 0
    for chr in key:
      hash = (ord(chr) + (hash << 6) + (hash << 16) - hash) & max
    return hash

  def index(self, hash: int) -> int:
    return hash & (self.capacity - 1)

  def put(self, key: int, val: int) -> None:
    hash = self.hash(key)
    index = self.index(hash)
    # update existent node
    node = self.list[index].head
    while node:
      if node.key == key:
        node.val = val
        return
      node = node.next
    # add new node
    self.list[index].add(Node(key, val))
    self.size += 1
    if self.size > self.capacity * self.load_factor:
      self.resize()

  def get(self, key: int) -> int:
    hash = self.hash(key)
    index = self.index(hash)
    # find node
    node = self.list[index].head
    while node:
      if node.key == key:
        return node.val
      node = node.next
    # node not found
    return -1

  def remove(self, key: int) -> None:
    hash = self.hash(key)
    index = self.index(hash)
    # find node
    node = self.list[index].head
    last = None
    while node:
      if node.key == key:
        if last:
          last.next = node.next
        else:
          self.list[index].head = node.next
        if self.list[index].tail == node:
          self.list[index].tail = last
        self.size -= 1
        return
      last = node
      node = node.next

  def resize(self) -> None:
    # TODO
    return