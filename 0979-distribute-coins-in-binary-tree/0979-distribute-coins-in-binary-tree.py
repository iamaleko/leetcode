class Solution:
  def distributeCoins(self, root: Optional[TreeNode]) -> int:
    need = {}
    parent = {}
    leafs = deque()

    def down(node):
      if node.left:
        parent[node.left] = node
        down(node.left)
      if node.right:
        parent[node.right] = node
        down(node.right)
      if not node.left and not node.right:
        leafs.append(node)
    down(root)

    steps = 0
    while leafs:
      leaf = leafs.popleft()
      needLeft = need[leaf.left] if leaf.left else None
      needRight = need[leaf.right] if leaf.right else None
      needLeaf = deque()


      while needLeft:
        if leaf.val:
          steps += needLeft.popleft()
          leaf.val -= 1
        else:
          for n in needLeft:
            needLeaf.append(n + 1)
          break

      while needRight:
        if leaf.val:
          steps += needRight.popleft()
          leaf.val -= 1
        else:
          for n in needRight:
            needLeaf.append(n + 1)
          break

      if leaf.val > 0:
        leaf.val -= 1
        if leaf.val:
          steps += leaf.val
          parent[leaf].val += leaf.val
      else:
        needLeaf.append(1)

      need[leaf] = needLeaf
      
      if leaf in parent:
        if not parent[leaf].left or parent[leaf].left in need:
          if not parent[leaf].right or parent[leaf].right in need:
            leafs.append(parent[leaf])
      
    return steps