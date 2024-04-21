# good article https://yuminlee2.medium.com/union-find-algorithm-ffa9cd7d2dba

class UnionFind:
  def __init__(self):
    self.parent = {}
  
  def add(self, i: int) -> int:
    parent = self.find(i)
    if parent == None:
      self.parent[i] = i
      parent = i
    else:
      self.parent[i] = parent
    return parent

  def find(self, i: int) -> int | None:
    if i in self.parent:
      while i != self.parent[i]:
        self.parent[i] = self.parent[self.parent[i]]
        i = self.parent[i]
      return i
    else:
      return None
  
  def union(self, i1: int, i2: int) -> int | bool:
    parent1 = self.find(i1)
    parent2 = self.find(i2)
    if parent1 == None or parent2 == None:
      return False
    elif parent1 == parent2:
      return parent1
    elif random.random() < .5:
      self.parent[parent1] = parent2
      return parent2
    else:
      self.parent[parent2] = parent1
      return parent1

class Solution:
  def validPath(self, n: int, edges: List[List[int]], source: int, destination: int) -> bool:
    dsu = UnionFind()
    for a, b in edges:
      dsu.union(dsu.add(a), dsu.add(b))
    return dsu.find(source) == dsu.find(destination)