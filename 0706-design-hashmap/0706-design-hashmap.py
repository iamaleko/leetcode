class MyHashMap:
  def __init__(self):
    self.size = 10000
    self.list = [None for i in range(self.size)]

  def hash(self, key: int) -> int:
    return key % self.size

  def put(self, key: int, value: int) -> None:
    hash = self.hash(key)
    if self.list[hash] != None:
      for i, item in enumerate(self.list[hash]):
        if item[0] == key:
          self.list[hash][i] = (key, value)
          return
      self.list[hash].append((key, value))
    else:
      self.list[hash] = [(key, value)]

  def get(self, key: int) -> int:
    hash = self.hash(key)
    if self.list[hash] != None:
      for item in self.list[hash]:
        if item[0] == key:
          return item[1]
    return -1

  def remove(self, key: int) -> None:
    hash = self.hash(key)
    if self.list[hash] != None:
      for i, item in enumerate(self.list[hash]):
        if item[0] == key:
          self.list[hash].pop(i)