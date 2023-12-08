const tree2str = (node, b = '', a = '') => {
  if (node.left && node.right) {
    return tree2str(node.left, b + node.val + '(', tree2str(node.right, ')(', ')' + a));
  }
  if (node.left) {
    return tree2str(node.left, b + node.val + '(', ')' + a);
  }
  if (node.right) {
    return tree2str(node.right, b + node.val + '()(', ')' + a);
  }
  return b + node.val + a;
  
  
  // if (node.left && node.right) {
  //   return node.val + '(' + tree2str(node.left) + ')(' + tree2str(node.right) + ')';
  // }
  // if (node.left) {
  //   return node.val + '(' + tree2str(node.left) + ')';
  // }
  // if (node.right) {
  //   return node.val + '()(' + tree2str(node.right) + ')';
  // }
  // return node.val + '';
};