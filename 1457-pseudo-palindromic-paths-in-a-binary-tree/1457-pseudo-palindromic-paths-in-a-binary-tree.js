const pseudoPalindromicPaths  = (root) => {
  let res = 0, node;
  
  root.val = 1 << root.val;
  const queue = [root];

  while (queue.length) {
    node = queue.pop();
    if (node.left) {
      node.left.val = node.val ^ 1 << node.left.val;
      queue.push(node.left);
    }
    if (node.right) {
      node.right.val = node.val ^ 1 << node.right.val;
      queue.push(node.right);
    }
    if (
      !node.left && !node.right && (
        node.val === 0 || node.val === 2 || node.val === 4 || node.val === 8 || node.val === 16 ||
        node.val === 32 || node.val === 64 || node.val === 128 || node.val === 256 || node.val === 512
      )
    ) {
      ++res;
    }
  }
  return res;
};