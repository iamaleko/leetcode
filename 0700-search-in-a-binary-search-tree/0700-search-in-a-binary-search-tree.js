const searchBST = (node, val) => {
  while (node) {
    if (node.val === val) return node;
    node = node.val > val ? node.left : node.right;
  }
  return null;
};