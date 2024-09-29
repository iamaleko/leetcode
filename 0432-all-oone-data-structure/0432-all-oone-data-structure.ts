class LinkedListNode {
  prev?: LinkedListNode;
  next?: LinkedListNode;
  bucket: Set<string>;
  value: number;
  constructor(value: number) {
    this.value = value;
    this.bucket = new Set<string>();
  }
}
class AllOne {
  private _head?: LinkedListNode;
  private _tail?: LinkedListNode;
  private _map: Map<string, LinkedListNode>;
  constructor() {
    this._map = new Map();
  }
  private _remove(node: LinkedListNode): void {
    if (node === this._head) this._head = node.next;
    if (node === this._tail) this._tail = node.prev;
    if (node.prev) node.prev.next = node.next;
    if (node.next) node.next.prev = node.prev;
  }
  inc(key: string): void {
    let successor: LinkedListNode;
    if (this._map.has(key)) {
      const node = this._map.get(key);
      if (node.next && node.next.value === node.value + 1) {
        successor = node.next;
      } else {
        successor = new LinkedListNode(node.value + 1);
        successor.next = node.next;
        successor.prev = node;
        node.next = successor;
        if (successor.next) successor.next.prev = successor;
        if (this._tail === node) this._tail = successor;
      }
      node.bucket.delete(key);
      if (node.bucket.size === 0) this._remove(node);
    } else {
      if (this._head && this._head.value === 1) {
        successor = this._head;
      } else {
        successor = new LinkedListNode(1);
        successor.next = this._head;
        this._head = successor;
        if (successor.next) successor.next.prev = successor;
        if (this._tail === undefined) this._tail = successor;
      }
    }
    successor.bucket.add(key);
    this._map.set(key, successor);
  }
  dec(key: string): void {
    const node = this._map.get(key);
    if (node.value !== 1) {
      let successor: LinkedListNode;
      if (node.prev && node.prev.value === node.value - 1) {
        successor = node.prev;
      } else {
        successor = new LinkedListNode(node.value - 1);
        successor.next = node;
        successor.prev = node.prev;
        node.prev = successor;
        if (successor.prev) successor.prev.next = successor;
        if (this._head === node) this._head = successor;
      }
      successor.bucket.add(key);
      this._map.set(key, successor);
    }
    node.bucket.delete(key);
    if (node.bucket.size === 0) this._remove(node);
  }
  getMaxKey(): string {
    return this._tail ? this._tail.bucket.values().next().value : '';
  }
  getMinKey(): string {
    return this._head ? this._head.bucket.values().next().value : '';
  }
}