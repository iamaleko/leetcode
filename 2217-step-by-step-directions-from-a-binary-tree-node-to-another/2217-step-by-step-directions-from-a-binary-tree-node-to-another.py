class Solution:
  def getDirections(self, root: Optional[TreeNode], start_val: int, dest_val: int) -> str:
    # bfs root -> start_node
    q = deque([root])
    parent = {}
    start_node = None
    while q:
      node = q.popleft()
      if node.val == start_val:
        start_node = node
        break
      if node.left and node.left not in parent:
        parent[node.left] = node
        q.append(node.left)
      if node.right and node.right not in parent:
        parent[node.right] = node
        q.append(node.right)

    # bfs start_node -> dest_node
    q.clear()
    q.append(start_node)
    back = {}
    dest_node = None
    while q:
      node = q.popleft()
      if node.val == dest_val:
        dest_node = node
        break
      if node in parent and parent[node] not in back:
        back[parent[node]] = node
        q.append(parent[node])
      if node.left and node.left not in back:
        back[node.left] = node
        q.append(node.left)
      if node.right and node.right not in back:
        back[node.right] = node
        q.append(node.right)

    # create path dest_node -> start_node
    path = ''
    while dest_node != start_node:
      back_node = back[dest_node]
      if dest_node == back_node.left:
        path = 'L' + path
      elif dest_node == back_node.right:
        path = 'R' + path
      else:
        path = 'U' + path
      dest_node = back_node

    return path

        