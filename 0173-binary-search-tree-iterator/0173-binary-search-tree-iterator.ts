// class BSTIterator {
//   root: TreeNode | null;
//   iterator: Generator;
//   curr: IteratorResult<unknown, any>;
//   constructor(root: TreeNode | null) {
//     this.root = root;
//     this.iterator = this.generator();
//     this.curr = this.iterator.next();
//   }
//   *generator(node: TreeNode | null = this.root) {
//     if (node) {
//       if (node.left) yield *this.generator(node.left);
//       yield node.val;
//       if (node.right) yield *this.generator(node.right);
//     }
//   }
//   next(): number {
//     const val = this.curr.value;
//     this.curr = this.iterator.next();
//     return val;
//   }
//   hasNext(): boolean {
//     return !this.curr.done;
//   }
// }

// Using ES6 generator
class BSTIterator {
  private _generator: Generator;
  private _result: IteratorResult<unknown, any>;

  constructor(root: TreeNode | null) {
    function *generator(node: TreeNode | null = root) {
      if (node) {
        if (node.left) yield *generator(node.left);
        yield node.val;
        if (node.right) yield *generator(node.right);
      }
    }
    this._generator = generator();
    this._result = this._generator.next();
  }
  
  next(): number {
    const value = this._result.value;
    this._result = this._generator.next();
    return value;
  }
  hasNext(): boolean {
    return !this._result.done;
  }
}