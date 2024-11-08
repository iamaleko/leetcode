class BSTIterator {
  root: TreeNode | null;
  iterator: Generator;
  curr: IteratorResult<unknown, any>;

  constructor(root: TreeNode | null) {
    this.root = root;
    this.iterator = this.generator();
    this.curr = this.iterator.next();
  }

  *generator(node: TreeNode | null = this.root) {
    if (node) {
      if (node.left) yield *this.generator(node.left);
      yield node.val;
      if (node.right) yield *this.generator(node.right);
    }
  }

  next(): number {
    const val = this.curr.value;
    this.curr = this.iterator.next();
    return val;
  }

  hasNext(): boolean {
    return !this.curr.done;
  }
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */