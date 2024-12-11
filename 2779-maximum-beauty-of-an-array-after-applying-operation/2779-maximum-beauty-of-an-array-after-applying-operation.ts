class Heap<Type = number> {
  private _comparator;
  private _heap: Type[];

  constructor(comparator: (a: Type, b: Type) => number = (a: Type, b: Type) => Number(a) - Number(b)) {
    this._comparator = comparator;
    this._heap = [];
  }

  get length(): number {
    return this._heap.length;
  }

  /**
   * Remove first value and return it.
   * O(log n) complexity.
   */
  pop(): Type | null {
    if (this.length > 1) {
      [this._heap[0], this._heap[this.length - 1]] = [this._heap[this.length - 1], this._heap[0]];
      this._sink(0, this.length - 1);
    }
    return this._heap.pop() ?? null;
  }

  /**
   * Add new values in the heap.
   * O(log n) complexity for each added value.
   */
  push(...vals: Type[]): Heap<Type> {
    this._heap.push(...vals);
    for (let i = this.length - vals.length; i < this.length; i++) this._bubble(i);
    return this;
  }

  /**
   * Remove first value, return it, and add new value. Faster than #.pop().push() chain.
   * O(log n) complexity.
   */
  poppush(val: Type): Type | null {
    this._heap.push(val);
    if (this.length > 1) {
      [this._heap[0], this._heap[this.length - 1]] = [this._heap[this.length - 1], this._heap[0]];
      this._sink(0, this.length - 1);
      return this._heap.pop()!;
    }
    return null;
  }

  /**
   * Return first value.
   * O(1) complexity.
   */
  peak(): Type | null {
    return this.length ? this._heap[0] : null;
  }

  /**
   * Reset the heap.
   * O(1) complexity.
   */
  clear(): Heap<Type> {
    this._heap = [];
    return this;
  }

  private _bubble(i: number): void {
    let t;
    while (i) {
      t = i - 1 >>> 1;
      if (i === t || this._comparator(this._heap[i], this._heap[t]) >= 0) break;
      [this._heap[i], this._heap[t], i] = [this._heap[t], this._heap[i], t];
    }
  }

  private _sink(i: number = 0, depth: number = this.length): void {
    let l, r, t;
    while (true) {
      l = i * 2 + 1;
      r = i * 2 + 2;
      t = i;
      if (l < depth && this._comparator(this._heap[l], this._heap[t]) < 0) t = l;
      if (r < depth && this._comparator(this._heap[r], this._heap[t]) < 0) t = r;
      if (i === t) break;
      [this._heap[i], this._heap[t], i] = [this._heap[t], this._heap[i], t];
    }
  }
}

function maximumBeauty(nums: number[], k: number): number {
  const h = new Heap((a, b) => nums[a] - nums[b]);
  let ans = 0, keys = [...nums.keys()];
  keys.sort((a, b) => nums[a] - nums[b]);
  for (const i of keys) {
    while (h.length && nums[h.peak()] + k < nums[i] - k) h.pop();
    h.push(i);
    if (ans < h.length) ans = h.length;
  }
  return ans;
};

// OOPS, i have misread the task conditions and solved it for CONTIGUOUS subsequence

// class BinarySearchTreeNode<Type = number> {
//   left: BinarySearchTreeNode<Type> | null;
//   right: BinarySearchTreeNode<Type> | null;
//   val: Type;

//   constructor(
//     val: Type,
//     left: BinarySearchTreeNode<Type> | null = null,
//     right: BinarySearchTreeNode<Type> | null = null,
//   ) {
//     this.val = val;
//     this.left = left;
//     this.right = right;
//   }
// }

// class BinarySearchTree<Type = number> {
//   protected _root: BinarySearchTreeNode<Type> | null = null;
//   protected _length: number = 0;
//   private _comparator;

//   constructor(comparator: (a: Type, b: Type) => number = (a: Type, b: Type) => Number(a) - Number(b)) {
//     this._comparator = comparator;
//   }

//   get length(): number {
//     return this._length;
//   }

//   /**
//    * Traverse the tree in-order.
//    * O(n) complexity.
//    */
//   *[Symbol.iterator](): Generator {
//     yield* this._inorder(this._root);
//   }

//   /**
//    * Traverse the tree pre-order.
//    * O(n) complexity.
//    */
//   *preorder(): Generator {
//     yield* this._preorder(this._root);
//   }

//   /**
//    * Traverse the tree in-order.
//    * O(n) complexity.
//    */
//   *inorder(): Generator {
//     yield* this._inorder(this._root);
//   }

//   /**
//    * Traverse the tree post-order.
//    * O(n) complexity.
//    */
//   *postorder(): Generator {
//     yield* this._postorder(this._root);
//   }

//   /**
//    * Add new nodes in the tree.
//    * O(n) complexity for each added node, O(log n) if balanced.
//    */
//   add(...vals: [Type, ...Type[]]): this {
//     for (const val of vals) this._add(val);
//     return this;
//   }

//   /**
//    * Delete nodes from the tree.
//    * O(n) complexity for each deleted node, O(log n) if balanced.
//    */
//   delete(...vals: [Type, ...Type[]]): this {
//     for (const val of vals) this._delete(val);
//     return this;
//   }

//   /**
//    * Retrieve next greater value for specified value.
//    * O(n) complexity, O(log n) if balanced.
//    */
//   successor(val: Type): Type | null {
//     return this._successor(val)?.val ?? null;
//   }

//   /**
//    * Retrieve next smaller value for specified value.
//    * O(n) complexity, O(log n) if balanced.
//    */
//   predecessor(val: Type): Type | null {
//     return this._predecessor(val)?.val ?? null;
//   }

//   /**
//    * Check existance of specified val in the tree.
//    * O(n) complexity, O(log n) if balanced.
//    */
//   has(val: Type): boolean {
//     return this._find(val)[0] !== null;
//   }

//   /**
//    * Reset the tree.
//    * O(1) complexity.
//    */
//   clear(): this {
//     this._root = null;
//     this._length = 0;
//     return this;
//   }

//   private *_preorder(node: BinarySearchTreeNode<Type> | null): Generator {
//     if (node) {
//       yield node.val;
//       if (node.left) yield* this._preorder(node.left);
//       if (node.right) yield* this._preorder(node.right);
//     }
//   }

//   private *_inorder(node: BinarySearchTreeNode<Type> | null): Generator {
//     if (node) {
//       if (node.left) yield* this._inorder(node.left);
//       yield node.val as Type;
//       if (node.right) yield* this._inorder(node.right);
//     }
//   }

//   private *_postorder(node: BinarySearchTreeNode<Type> | null): Generator {
//     if (node) {
//       if (node.left) yield* this._postorder(node.left);
//       if (node.right) yield* this._postorder(node.right);
//       yield node.val;
//     }
//   }

//   protected _add(val: Type): [BinarySearchTreeNode<Type>, BinarySearchTreeNode<Type> | null] {
//     this._length++;
//     if (!this._root) {
//       return [this._root = new BinarySearchTreeNode<Type>(val), null];
//     } else {
//       let node = this._root;
//       while (true) {
//         if (this._comparator(node.val, val) >= 0) {
//           if (!node.left) return [node.left = new BinarySearchTreeNode<Type>(val), node];
//           node = node.left;
//         } else {
//           if (!node.right) return [node.right = new BinarySearchTreeNode<Type>(val), node];
//           node = node.right;
//         }
//       }
//     }
//   }

//   protected _delete(val: Type): void {
//     let [node, parent] = this._find(val);
//     while (node) {
//       if (node.left && node.right) {
//         let successor = node.right;
//         parent = node;
//         while (successor?.left) {
//           parent = successor;
//           successor = successor.left;
//         }
//         node.val = successor.val;
//         node = successor;
//         continue;
//       } else if (!node.left && !node.right) {
//         if (!parent) {
//           this._root = null;
//         } else if (parent.left === node) {
//           parent.left = null;
//         } else {
//           parent.right = null;
//         }
//       } else if (node.left) {
//         node.val = node.left.val;
//         node.right = node.left.right;
//         node.left = node.left.left;
//       } else if (node.right) {
//         node.val = node.right.val;
//         node.left = node.right.left;
//         node.right = node.right.right;
//       }

//       this._length--;
//       break;
//     }
//   }

//   protected _successor(val: Type): BinarySearchTreeNode<Type> | null {
//     let node = this._root,
//         successor: BinarySearchTreeNode<Type> | null = null;
//     while (node) {
//       if (this._comparator(node.val, val) <= 0) {
//         node = node.right;
//       } else {
//         successor = node;
//         node = node.left;
//       }
//     } 
//     return successor;
//   }

//   protected _predecessor(val: Type): BinarySearchTreeNode<Type> | null {
//     let node = this._root,
//         predecessor: BinarySearchTreeNode<Type> | null = null;
//     while (node) {
//       if (this._comparator(node.val, val) >= 0) {
//         node = node.left;
//       } else {
//         predecessor = node;
//         node = node.right;
//       }
//     } 
//     return predecessor;
//   }

//   protected _find(val: Type): [BinarySearchTreeNode<Type> | null, BinarySearchTreeNode<Type> | null] {
//     let node = this._root,
//         parent: BinarySearchTreeNode<Type> | null = null,
//         compare: number;
//     while (node) {
//       compare = this._comparator(node.val, val);
//       if (!compare) break;
//       parent = node;
//       node = compare > 0 ? node.left : node.right;
//     }
//     return [node, parent];
//   }
// }

// class SplayTreeNode<Type = number> extends BinarySearchTreeNode<Type> {
//   parent: SplayTreeNode<Type> | null;

//   constructor(
//     val: Type,
//     left: SplayTreeNode<Type> | null = null,
//     right: SplayTreeNode<Type> | null = null,
//     parent: SplayTreeNode<Type> | null = null,
//   ) {
//     super(val, left, right);
//     this.parent = parent;
//   }
// }

// class SplayTree<Type = number> extends BinarySearchTree<Type> {
//   constructor(comparator: (a: Type, b: Type) => number = (a: Type, b: Type) => Number(a) - Number(b)) {
//     super(comparator);
//   }

//   /**
//    * Add new nodes in the tree.
//    * O(log n) complexity for each added node.
//    */
//   add(...vals: [Type, ...Type[]]): this {
//     for (const val of vals) {
//       const [node, parent] = this._add(val) as [SplayTreeNode<Type>,  SplayTreeNode<Type> | null];
//       node.parent = parent;
//       this._splay(node);
//     }
//     return this;
//   }

//   /**
//    * Retrieve next greater value for specified value.
//    * O(log n) complexity.
//    */
//   successor(val: Type): Type | null {
//     const node = this._successor(val) as SplayTreeNode<Type>;
//     if (node) this._splay(node);
//     return node?.val ?? null;
//   }

//   /**
//    * Retrieve next smaller value for specified value.
//    * O(log n) complexity.
//    */
//   predecessor(val: Type): Type | null {
//     const node = this._predecessor(val) as SplayTreeNode<Type>;
//     if (node) this._splay(node);
//     return node?.val ?? null;
//   }

//   /**
//    * Check existance of specified val in the tree.
//    * O(log n) complexity.
//    */
//   has(val: Type): boolean {
//     const [node] = this._find(val) as [SplayTreeNode<Type> | null, SplayTreeNode<Type> | null];
//     if (node) this._splay(node);
//     return node !== null;
//   }

//   /**
//    * Check existance of specified val in the tree and return it.
//    * O(log n) complexity.
//    */
//   get(val: Type): Type | null {
//     const [node] = this._find(val) as [SplayTreeNode<Type> | null, SplayTreeNode<Type> | null];
//     if (node) this._splay(node);
//     return node?.val ?? null;
//   }

//   protected _delete(val: Type): void {
//     let [node] = this._find(val) as [SplayTreeNode<Type> | null, SplayTreeNode<Type> | null];
//     while (node) {
//       if (node.left && node.right) {
//         let successor = node.right;
//         while (successor.left) successor = successor.left;
//         node.val = successor.val;
//         node = successor as SplayTreeNode<Type>;
//         continue;
//       } else if (!node.left && !node.right) {
//         if (!node.parent) {
//           this._root = null;
//         } else if (node.parent.left === node) {
//           node.parent.left = null;
//         } else {
//           node.parent.right = null;
//         }
//       } else if (node.left) {
//         node.val = node.left.val;
//         node.right = node.left.right;
//         node.left = node.left.left;
//         if (node.right) (node.right as SplayTreeNode<Type>).parent = node;
//         if (node.left) (node.left as SplayTreeNode<Type>).parent = node;
//       } else if (node.right) {
//         node.val = node.right.val;
//         node.left = node.right.left;
//         node.right = node.right.right;
//         if (node.left) (node.left as SplayTreeNode<Type>).parent = node;
//         if (node.right) (node.right as SplayTreeNode<Type>).parent = node;
//       }

//       this._length--;
//       break;
//     }
//   }

//   private _transplant(node: SplayTreeNode<Type>, child: SplayTreeNode<Type>): void {
//     if (!node.parent) {
//       this._root = child;
//     } else if (node === node.parent.left) { 
//       node.parent.left = child;
//     } else if (node === node.parent.right) {
//       node.parent.right = child;
//     }
//     child.parent = node.parent;
//   }

//   private _rotateRight(node: SplayTreeNode<Type>): void {
//     const left = node.left as SplayTreeNode<Type>;
//     node.left = left.right ?? null;
//     if (left.right) (left.right as SplayTreeNode<Type>).parent = node;
//     this._transplant(node, left);
//     left.right = node;
//     node.parent = left;
//   }

//   private _rotateLeft(node: SplayTreeNode<Type>): void {
//     const right = node.right as SplayTreeNode<Type>;
//     node.right = right.left ?? null;
//     if (right.left) (right.left as SplayTreeNode<Type>).parent = node;
//     this._transplant(node, right);
//     right.left = node;
//     node.parent = right;
//   }

//   private _splay(node: SplayTreeNode<Type>): void {
//     while (node.parent) {
//       if (node.parent.right === node) {
//         if (!node.parent.parent) {
//           // Zig left
//           this._rotateLeft(node.parent)
//         } else if (node.parent.parent.right === node.parent) {
//           // Zig-Zig left
//           this._rotateLeft(node.parent.parent);
//           this._rotateLeft(node.parent);
//         } else {
//           // Zig-Zag left
//           this._rotateLeft(node.parent);
//           this._rotateRight(node.parent);
//         }
//       } else {
//         if (!node.parent.parent) {
//           // Zig right
//           this._rotateRight(node.parent)
//         } else if (node.parent.parent.left === node.parent) {
//           // Zig-Zig right
//           this._rotateRight(node.parent.parent);
//           this._rotateRight(node.parent);
//         } else {
//           // Zig-Zag right
//           this._rotateRight(node.parent);
//           this._rotateLeft(node.parent);
//         }
//       }
//     }
//   }
// }

// class Heap<Type = number> {
//   private _comparator;
//   private _heap: Type[];

//   constructor(comparator: (a: Type, b: Type) => number = (a: Type, b: Type) => Number(a) - Number(b)) {
//     this._comparator = comparator;
//     this._heap = [];
//   }

//   get length(): number {
//     return this._heap.length;
//   }

//   /**
//    * Remove first value and return it.
//    * O(log n) complexity.
//    */
//   pop(): Type | null {
//     if (this.length > 1) {
//       [this._heap[0], this._heap[this.length - 1]] = [this._heap[this.length - 1], this._heap[0]];
//       this._sink(0, this.length - 1);
//       return this._heap.pop()!;
//     }
//     return null;
//   }

//   /**
//    * Add new values in the heap.
//    * O(log n) complexity for each added value.
//    */
//   push(...vals: Type[]): Heap<Type> {
//     this._heap.push(...vals);
//     for (let i = this.length - vals.length; i < this.length; i++) this._bubble(i);
//     return this;
//   }

//   /**
//    * Remove first value, return it, and add new value. Faster than #.pop().push() chain.
//    * O(log n) complexity.
//    */
//   poppush(val: Type): Type | null {
//     this._heap.push(val);
//     if (this.length > 1) {
//       [this._heap[0], this._heap[this.length - 1]] = [this._heap[this.length - 1], this._heap[0]];
//       this._sink(0, this.length - 1);
//       return this._heap.pop()!;
//     }
//     return null;
//   }

//   /**
//    * Return first value.
//    * O(1) complexity.
//    */
//   peak(): Type | null {
//     return this.length ? this._heap[0] : null;
//   }

//   /**
//    * Reset the heap.
//    * O(1) complexity.
//    */
//   clear(): Heap<Type> {
//     this._heap = [];
//     return this;
//   }

//   private _bubble(i: number): void {
//     let t;
//     while (i) {
//       t = i - 1 >>> 1;
//       if (i === t || this._comparator(this._heap[i], this._heap[t]) >= 0) break;
//       [this._heap[i], this._heap[t], i] = [this._heap[t], this._heap[i], t];
//     }
//   }

//   private _sink(i: number = 0, depth: number = this.length): void {
//     let l, r, t;
//     while (true) {
//       l = i * 2 + 1;
//       r = i * 2 + 2;
//       t = i;
//       if (l < depth && this._comparator(this._heap[l], this._heap[t]) < 0) t = l;
//       if (r < depth && this._comparator(this._heap[r], this._heap[t]) < 0) t = r;
//       if (i === t) break;
//       [this._heap[i], this._heap[t], i] = [this._heap[t], this._heap[i], t];
//     }
//   }
// }

// type Range = {
//   l: number;
//   r: number;
// }

// function maximumBeauty(nums: number[], k: number): number {
//   const l = new SplayTree<Range>((a: Range, b: Range) => a.l - b.l);
//   const r = new SplayTree<Range>((a: Range, b: Range) => a.r - b.r);
//   const h = new Heap((a, b) => nums[a] - nums[b]);
//   let ans = 0, keys = [...nums.keys()];
//   keys.sort((a, b) => nums[a] - nums[b]);
//   for (const i of keys) {
//     // remove passed ranges
//     while (h.length && nums[h.peak()] + k < nums[i] - k) {
//       const j = h.pop();
//       let range = { l: j, r: j}
//       const lRange = r.get(range) ?? r.successor(range);
//       const rRange = l.get(range) ?? l.predecessor(range);
//       if (lRange && rRange && lRange === rRange) {
//         l.delete(lRange);
//         r.delete(lRange);
//         if (lRange.l < j) {
//           range = { l: lRange.l, r: j - 1}
//           l.add(range);
//           r.add(range);
//         }
//         if (rRange.r > j) {
//           range = { l: j + 1, r: rRange.r}
//           l.add(range);
//           r.add(range);
//         }
//       }
//     }

//     // add current range
//     let range = { l: i, r: i}
//     const lRange = r.predecessor(range);
//     const rRange = l.successor(range);
//     if (lRange && lRange.r === i - 1 && rRange && rRange.l === i + 1) {
//       // two ranges joined by the new one
//       l.delete(lRange, rRange);
//       r.delete(lRange, rRange);
//       range = { l: lRange.l, r: rRange.r};
//     } else if (lRange && lRange.r === i - 1) {
//       // extend left range
//       l.delete(lRange);
//       r.delete(lRange);
//       range = { l: lRange.l, r: i};
//     } else if (rRange && rRange.l === i + 1) {
//       // extend right range
//       l.delete(rRange);
//       r.delete(rRange);
//       range = { l: i, r: rRange.r};
//     }
//     l.add(range);
//     r.add(range);
//     h.push(i);
//     if (ans < range.r - range.l + 1) {
//       ans = range.r - range.l + 1
//     }
//   }
//   return ans;
// };