class Node:
  def __init__(self, hash, key, val, next = None):
    self.hash = hash
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
      self.tail = node
    else:
      self.head = node
      self.tail = node
    node.next = None

class MyHashMap:
  def __init__(self):
    self.capacity = 1 << 4
    self.load_factor = 0.75
    self.list = [Bucket() for _ in range(self.capacity)]
    self.size = 0

  def hash(self, key) -> int:
    key = str(key)
    # max = (1 << 64) - 1
    hash = 0
    for chr in key:
      hash = (ord(chr) + (hash << 6) + (hash << 16) - hash)# & max
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
    self.list[index].add(Node(hash, key, val))
    # resize if needed
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
        if node == self.list[index].head:
          self.list[index].head = node.next
        if node == self.list[index].tail:
          self.list[index].tail = last
        self.size -= 1
        return
      last = node
      node = node.next

  def resize(self) -> None:
    self.capacity <<= 1
    list = [Bucket() for _ in range(self.capacity)]
    for bucket in self.list:
      node = bucket.head
      while node:
        next = node.next
        list[self.index(node.hash)].add(node)
        node = next
    self.list = list