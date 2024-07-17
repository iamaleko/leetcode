class Solution:
  def delNodes(self, root: Optional[TreeNode], to_delete: List[int]) -> List[TreeNode]:
    to_delete = set(to_delete)
    q = deque([(root, True)])
    ans = []
    while q:
      node, parent_deleted = q.pop()
      node_deleted = node.val in to_delete
      if not node_deleted and parent_deleted:
        ans.append(node)
      if node.left:
        q.append((node.left, node_deleted))
        if node.left.val in to_delete:
          node.left = None
      if node.right:
        q.append((node.right, node_deleted))
        if node.right.val in to_delete:
          node.right = None
    return ans

        