const countNodes = (root) => {
  // empty tree
  if (!root) return 0;

  let depth = 0, l = root, r = root;
  while (l.left || r.right) {
    if (l.left) {
      ++depth;
      l = l.left;
    }
    if (r.right) {
      ++depth;
      r = r.right;
    }
  }

  // perfect tree
  if (depth % 2 === 0) return 2 ** (depth / 2 + 1) - 1;

  // complete tree
  depth = (depth + 1) / 2;
  let size = 2 ** depth - 1;
  while (root.left && root.right) {
    let node = root.left;
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
  return root.left ? size + 1 : size;
};