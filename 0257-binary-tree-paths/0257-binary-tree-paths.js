const binaryTreePaths = (root) => {
  const paths = [];
  const path = (node, str = '') => {
    str += str ? '->' + node.val : node.val;
    node.left || node.right || paths.push(str);
    node.left && path(node.left, str);
    node.right && path(node.right, str);
  }
  root && path(root);
  return paths;
};