class Solution:
    def validArrangement(self, pairs):
        from collections import defaultdict, deque

        adjacencyMatrix = defaultdict(deque)
        inDegree, outDegree = defaultdict(int), defaultdict(int)

        # Build the adjacency list and track in-degrees and out-degrees
        for pair in pairs:
            start, end = pair
            adjacencyMatrix[start].append(end)
            outDegree[start] += 1
            inDegree[end] += 1

        result = []

        def visit(node):
            while adjacencyMatrix[node]:
                nextNode = adjacencyMatrix[node].popleft()
                visit(nextNode)
            result.append(node)

        # Find the start node (outDegree == 1 + inDegree )
        startNode = -1
        for node in outDegree:
            if outDegree[node] == inDegree[node] + 1:
                startNode = node
                break

        # If no such node exists, start from the first pair's first element
        if startNode == -1:
            startNode = pairs[0][0]

        # Start DFS traversal
        visit(startNode)

        # Reverse the result since DFS gives us the path in reverse
        result.reverse()

        # Construct the result pairs
        pairedResult = [
            [result[i - 1], result[i]] for i in range(1, len(result))
        ]

        return pairedResult

# class Node:
#   next = None
#   prev = None
#   l = None
#   r = None
#   def __init__(self, l: int, r: int):
#     self.l = l
#     self.r = r

# class Solution:
#   ltr = None
#   rtl = None
#   head = None

#   def removeFromGraph(self, l: int, r: int):
#     print(self.ltr, self.rtl, l, r)
#     self.ltr[l].remove(r)
#     self.rtl[r].remove(l)
#     if not len(self.ltr[l]):
#       del self.ltr[l]
#     if not len(self.rtl[r]):
#       del self.rtl[r]

#   def buildPath(self, node: Node) -> None:
#     # build forward
#     _next = node.next
#     while node.r in self.ltr:
#       l, r = node.r, next(iter(self.ltr[node.r]))
#       self.removeFromGraph(l, r)
#       successor = Node(l, r)
#       node.next = successor
#       successor.prev = node
#       node = successor
#     node.next = _next
    
#     # build center
#     if node.prev:
#       self.buildPath(node.prev)
#     else:
#       # build backward
#       while node.l in self.rtl:
#         r = node.l
#         l = None
#         for x in self.rtl[r]:
#           l = x
#         print(l,r)
#         self.removeFromGraph(l, r)
#         predecessor = Node(l, r)
#         node.prev = predecessor
#         predecessor.next = node
#         node = predecessor

#   def validArrangement(self, pairs: List[List[int]]) -> List[List[int]]:
#     # build graph
#     self.ltr = defaultdict(set)
#     self.rtl = defaultdict(set)
#     for l, r in pairs:
#       self.ltr[l].add(r)
#       self.rtl[r].add(l)
#     print(self.ltr, self.rtl)
    
#     # find starting point in open graph
#     for l, r in pairs:
#       if len(self.ltr[l]) > len(self.rtl[l]):
#         self.removeFromGraph(l, r)
#         self.head = Node(l, r)
#         break

#     print(self.ltr, self.rtl)

#     # find starting point in cyclic graph
#     if not self.head:
#       l,r = pairs[0]
#       self.removeFromGraph(l, r)
#       self.head = Node(l, r)

#     # find path
#     self.buildPath(self.head)

#     # build answer
#     ans = []
#     while self.head.prev:
#       self.head = self.head.prev
#     while self.head:
#       ans.append([self.head.l, self.head.r])
#       self.head = self.head.next

#     return ans

