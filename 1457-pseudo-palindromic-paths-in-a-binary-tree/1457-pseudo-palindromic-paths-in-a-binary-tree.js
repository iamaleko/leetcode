const pseudoPalindromicPaths  = (root) => {
  let res = 0, node, i, n;
  root.mem = [0,0,0,0,0,0,0,0,0];
  const queue = [root];
  while (queue.length) {
    node = queue.pop();
    node.mem[node.val - 1] ? --node.mem[node.val - 1] : ++node.mem[node.val - 1];
    if (node.left && node.right) {
      node.left.mem = node.mem;
      node.right.mem = node.mem.slice();
      queue.push(node.left);
      queue.push(node.right);
    } else if (node.left) {
      node.left.mem = node.mem;
      queue.push(node.left);
    } else if (node.right) {
      node.right.mem = node.mem;
      queue.push(node.right);
    } else {
      n = 0;
      for (i = 0; i < node.mem.length; n += node.mem[i++]);
      if (n < 2) ++res;
    }
    delete node.mem;
  }
  return res;
};