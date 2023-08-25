const countNodes = (root) => {
  // empty tree
  if (!root) return 0;

  let depth = 0, node = root;
  while (node.left) {
    if (node.left) {
      ++depth;
      node = node.left;
    }
  }

  // complete or perfect tree
  let size = 2 ** depth - 1;
  while (root) {
    node = root.left;
    let level = 0;
    while (node) {
      ++level;
      node = node.right;
    }
    if (level === depth) {
      root = root.right;
      --depth;
      size += 2 ** depth;
    } else {
      root = root.left;
      --depth;
    }
  }
  return size;
};