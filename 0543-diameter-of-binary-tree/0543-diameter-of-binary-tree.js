const diameterOfBinaryTree = (root) => {
  let max = 0;
  const rec = (node) => {
    if (!node) return -1;
    if (!node.left && !node.right) return 0;

    const l = rec(node.left) + 1;
    const r = rec(node.right) + 1;
    
    if (max < l + r) max = l + r;

    return Math.max(l, r);
  }

  rec(root);

  return max;
};

// const diameterOfBinaryTree = (root) => {
//   let max = 0;

//   const down = [root], up = [];

//   while (down.length) {
//     const node = down.pop();
//     if (node.left) down.push(node.left);
//     if (node.right) down.push(node.right);
//     up.push(node);
//   }

//   while (up.length) {
//     const node = up.pop();
//     const l = node.left ? (node.left.path || 0) + 1 : 0;
//     const r = node.right ? (node.right.path || 0) + 1 : 0;
//     if (max < l + r) max = l + r;
//     node.path = l > r ? l : r;
//   }

//   return max;
// };













