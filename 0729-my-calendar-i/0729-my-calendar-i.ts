class SplayNode {
  left?: SplayNode;
  right?: SplayNode;
  parent?: SplayNode;
  start: number;
  end: number;
  constructor(start: number, end: number) {
    this.start = start;
    this.end = end;
  }
}

class SplayTree {
  private _root?: SplayNode;
  add(start: number, end: number): boolean {
    if (this._root === undefined) {
      this._root = new SplayNode(start, end);
      return true;
    }
    let curr = this._root;
    while (true) {
      if (start >= curr.end) {
        if (curr.right) {
          curr = curr.right;
        } else {
          curr.right = new SplayNode(start, end);
          curr.right.parent = curr;
          this._splay(curr.right);
          return true;
        }
      } else if (end <= curr.start) {
        if (curr.left) {
          curr = curr.left;
        } else {
          curr.left = new SplayNode(start, end);
          curr.left.parent = curr;
          this._splay(curr.left);
          return true;
        }
      } else {
        break;
      }
    }
    return false;
  }
  private _transplant(node: SplayNode, child?: SplayNode) {
    if (node.parent === undefined) {
      this._root = child;
    } else if (node === node.parent.left) { 
      node.parent.left = child;
    } else if (node === node.parent.right) {
      node.parent.right = child;
    }
    if (child !== undefined) child.parent = node.parent;
  }
  private _rotateRight(node: SplayNode) {
    const left = node.left;
    node.left = left.right;
    if (left.right !== undefined) left.right.parent = node;
    this._transplant(node, left);
    left.right = node;
    left.right.parent = left;
  }
  private _rotateLeft(node: SplayNode) {
    const right = node.right;
    node.right = right.left;
    if (right.left !== undefined) right.left.parent = node;
    this._transplant(node, right);
    right.left = node;
    right.left.parent = right;
  }
  private _splay(node: SplayNode) {
    while (node !== this._root) {
      if (node.parent.right === node) {
        if (node.parent === this._root) {
          // Zig left
          this._rotateLeft(node.parent)
        } else if (node.parent.parent.right === node.parent) {
          // Zig-Zig left
          this._rotateLeft(node.parent.parent);
          this._rotateLeft(node.parent);
        } else {
          // Zig-Zag left
          this._rotateLeft(node.parent);
          this._rotateRight(node.parent);
        }
      } else {
        if (node.parent === this._root) {
          // Zig right
          this._rotateRight(node.parent)
        } else if (node.parent.parent.left === node.parent) {
          // Zig-Zig right
          this._rotateRight(node.parent.parent);
          this._rotateRight(node.parent);
        } else {
          // Zig-Zag right
          this._rotateRight(node.parent);
          this._rotateLeft(node.parent);
        }
      }
    }
  }
}

class MyCalendar {
  private _tree: SplayTree;
  constructor() {
    this._tree = new SplayTree();
  }
  book(start: number, end: number): boolean {
    return this._tree.add(start, end);
  }
}

// 124ms, beats 100%, O(log n) search, but O(n) add
// type Booking = { start: number, end: number };
// class MyCalendar {
//   private _bookings: Booking[];
//   constructor() {
//     this._bookings = [];
//   }
//   private _search(n: number): number {
//     let l = 0, r = this._bookings.length - 1;
//     while (l <= r) {
//       const c = l + r >>> 1;
//       if (this._bookings[c].end <= n) {
//         l = c + 1;
//       } else {
//         r = c - 1;
//       }
//     }
//     return l;
//   }
//   book(start: number, end: number): boolean {
//     const i = this._search(start);
//     if (i !== this._bookings.length && this._bookings[i].start < end) return false;
//     this._bookings.splice(i, 0, { start: start, end: end });
//     return true;
//   }
// }