function getMinimumDifference(node: TreeNode): number {
  let ans = Infinity;

  if (node.left) {
    let leftVal = node.left.val,
        right = node.left.right;
    while (right) {
      leftVal = right.val;
      right = right.right;
    }
    ans = Math.min(ans, node.val - leftVal);
  }

  if (ans && node.right) {
    let rightVal = node.right.val,
        left = node.right.left;
    while (left) {
      rightVal = left.val;
      left = left.left;
    }
    ans = Math.min(ans, rightVal - node.val);
  }

  if (ans && node.left) {
    ans = Math.min(ans, getMinimumDifference(node.left));
  }

  if (ans && node.right) {
    ans = Math.min(ans, getMinimumDifference(node.right));
  }
  
  return ans;
};