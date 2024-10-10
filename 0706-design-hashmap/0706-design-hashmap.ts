class BucketListNode {
  next: BucketListNode | null;
  key: number;
  val: number;
  constructor(key: number, val: number, next: BucketListNode | null = null) {
    this.key = key;
    this.val = val;
    this.next = next;
  }
}
class MyHashMap {
  private _buckets: (BucketListNode | null)[];
  constructor() {
    this._buckets = new Array(10007).fill(null);
  }
  private _getBucketKey(key: number): number {
    return key % this._buckets.length;
  }
  put(key: number, value: number): void {
    const bucket = this._getBucketKey(key);
    this.remove(key);
    this._buckets[bucket] = new BucketListNode(key, value, this._buckets[bucket]);
  }

  get(key: number): number {
    const bucket = this._getBucketKey(key);
    let node = this._buckets[bucket];
    while (node) {
      if (node.key === key) return node.val;
      node = node.next;
    }
    return -1;
  }

  remove(key: number): void {
    const bucket = this._getBucketKey(key);
    let node = this._buckets[bucket],
        prev: BucketListNode | null = null;
    while (node) {
      if (node.key === key) {
        if (prev) {
          prev.next = node.next;
          break;
        } else {
          this._buckets[bucket] = node.next;
          break;
        }
      }
      prev = node;
      node = node.next;
    }
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */