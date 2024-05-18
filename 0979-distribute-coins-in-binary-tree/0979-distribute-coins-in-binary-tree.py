class Solution:
  def distributeCoins(self, root: Optional[TreeNode]) -> int:
    need = { None: None }
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
      left = need[leaf.left] if leaf.left else None
      right = need[leaf.right] if leaf.right else None
      
      need[leaf] = deque()
      
      for side in [left, right, deque([0])]:
        while side:
          if leaf.val:
            steps += side.popleft()
            leaf.val -= 1
          else:
            for n in side:
              need[leaf].append(n + 1)
            break

      if leaf.val > 0:
        steps += leaf.val
        parent[leaf].val += leaf.val
      
      if leaf in parent and parent[leaf].left in need and parent[leaf].right in need:
        leafs.append(parent[leaf])
      
    return steps