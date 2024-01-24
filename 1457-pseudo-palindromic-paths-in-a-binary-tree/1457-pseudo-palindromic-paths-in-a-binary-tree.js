const pseudoPalindromicPaths  = (root) => {
  let res = 0, queue = [root];
  root.val = 1 << root.val;
  while (queue.length) {
    root = queue.pop();
    if (root.left) {
      root.left.val = root.val ^ 1 << root.left.val;
      queue.push(root.left);
    }
    if (root.right) {
      root.right.val = root.val ^ 1 << root.right.val;
      queue.push(root.right);
    }
    if (!root.left && !root.right && !(root.val & (root.val - 1))) {
      ++res;
    }
  }
  return res;
};