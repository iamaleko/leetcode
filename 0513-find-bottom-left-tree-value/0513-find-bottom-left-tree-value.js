const findBottomLeftValue = (root) => {
  let val = root.val, level = -1;
  const dfs = (node, row) => {
    if (row > level) {
      val = node.val;
      level = row;
    }
    if (node.left) dfs(node.left, row + 1);
    if (node.right) dfs(node.right, row + 1);
  }
  dfs(root, 0);
  return val;
};