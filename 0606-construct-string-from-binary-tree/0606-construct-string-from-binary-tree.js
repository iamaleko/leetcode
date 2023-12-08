const tree2str = (node, b = '', a = '') => {
  if (node.left && node.right) {
    return node.val + '(' + tree2str(node.left) + ')(' + tree2str(node.right) + ')';
  }
  if (node.left) {
    return node.val + '(' + tree2str(node.left) + ')';
  }
  if (node.right) {
    return node.val + '()(' + tree2str(node.right) + ')';
  }
  return node.val + '';
};