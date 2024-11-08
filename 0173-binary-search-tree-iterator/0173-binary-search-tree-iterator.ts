class BSTIterator {
  private _stack: TreeNode[];
  private _fill(node: TreeNode) {
    while (node) {
      this._stack.push(node);
      node = node.left;
    }
  }
  constructor(root: TreeNode | null) {
    this._stack = [];
    if (root) this._fill(root);
  }
  next(): number {
    const node = this._stack.pop() as TreeNode;
    if (node.right) this._fill(node.right);
    return node.val;
  }
  hasNext(): boolean {
    return this._stack.length > 0;
  }
}

// Using ES6 generator
// class BSTIterator {
//   private _generator: Generator;
//   private _result: IteratorResult<unknown, any>;
//   constructor(root: TreeNode | null) {
//     function *generator(node: TreeNode | null = root) {
//       if (node) {
//         if (node.left) yield *generator(node.left);
//         yield node.val;
//         if (node.right) yield *generator(node.right);
//       }
//     }
//     this._generator = generator();
//     this._result = this._generator.next();
//   }
//   next(): number {
//     const value = this._result.value;
//     this._result = this._generator.next();
//     return value;
//   }
//   hasNext(): boolean {
//     return !this._result.done;
//   }
// }